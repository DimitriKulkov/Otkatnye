import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, RequestType } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { sendEmail, generateContactRequestEmailContent } from "./mail";

const COMPANY_EMAIL = "votkatnye@yandex.ru";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactRequestSchema.parse(JSON.parse(req.body));
      const requestType = data.requestType as RequestType;
      
      // Save to database
      const contactRequest = await storage.createContactRequest({
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        service: data.service || null,
        comments: data.comments || null,
        requestType: requestType,
      });
      
      // Send email notification
      try {
        const emailContent = generateContactRequestEmailContent({
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          service: data.service || null,
          comments: data.comments || null,
          requestType: requestType,
        });
        
        await sendEmail({
          to: COMPANY_EMAIL,
          subject: emailContent.subject,
          text: emailContent.text,
          html: emailContent.html,
        });
        
        console.log(`Email notification sent for contact request #${contactRequest.id}`);
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error("Failed to send email notification:", emailError);
      }
      
      res.json({ 
        success: true, 
        message: "Запрос успешно отправлен",
        id: contactRequest.id 
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Ошибка валидации данных", 
          errors: validationError.details
        });
      }
      
      console.error("Error processing contact request:", error);
      res.status(500).json({ 
        success: false, 
        message: "Произошла ошибка при обработке запроса" 
      });
    }
  });

  // Check health endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
