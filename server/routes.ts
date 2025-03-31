import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactRequestSchema.parse(req.body);
      
      const contactRequest = await storage.createContactRequest({
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        service: data.service || null,
        comments: data.comments || null,
        requestType: data.requestType,
      });
      
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

  const httpServer = createServer(app);

  return httpServer;
}
