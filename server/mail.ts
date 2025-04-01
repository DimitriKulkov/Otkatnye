import nodemailer from "nodemailer";
import { RequestType } from "@shared/schema";

// Check if Yandex mail password is set
const yandexPassword = process.env.YANDEX_MAIL_KEY;
if (!yandexPassword) {
  console.warn(
    "Warning: YANDEX_MAIL_KEY environment variable is not set. Email notifications will not be sent.",
  );
}

// Create reusable transporter object using Yandex SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.yandex.com",
  port: 465,
  secure: true,
  auth: {
    user: "zaborstroy68@yandex.com",
    pass: "Kotvasya15",
  },
});

interface EmailParams {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!yandexPassword) {
    console.log("Email sending skipped: No Yandex mail password provided");
    // Log the email content for development purposes
    console.log("Email that would have been sent:", {
      to: params.to,
      from: "zaborstroy68@yandex.com",
      subject: params.subject,
    });
    return true; // Return true to not disrupt the user experience in development
  }

    try {
      const mailOptions = {
        from: `"Zaborstroy Service" <${"zaborstroy68@yandex.com"}>`, // Корректный формат
        to: "zaborstroy68@yandex.com",
        subject: params.subject,
        text: params.text || "",
        html: params.html || "",
      };

    const info = await transporter.sendMail(mailOptions);
    console.log(
      `Email sent successfully to ${params.to}. Message ID: ${info.messageId}`,
    );
    return true;
  } catch (error) {
    console.error("Yandex mail error:", error);
    // Log the error details for debugging
    if (error instanceof Error) {
      console.error("Error message:", error.message);
    }
    return false;
  }
}

export function generateContactRequestEmailContent(data: {
  name: string;
  phone: string;
  email?: string | null;
  service?: string | null;
  comments?: string | null;
  requestType: RequestType;
}) {
  let requestTypeText = "";
  let subject = "";

  switch (data.requestType) {
    case "contact":
      requestTypeText = "Запрос обратной связи";
      subject = "Новый запрос обратной связи";
      break;
    case "cost":
      requestTypeText = "Расчет стоимости";
      subject = "Новый запрос на расчет стоимости";
      break;
    case "question":
      requestTypeText = "Вопрос";
      subject = "Новый вопрос от клиента";
      break;
    case "review":
      requestTypeText = "Отзыв";
      subject = "Новый отзыв от клиента";
      break;
  }

  const serviceText = data.service
    ? `Услуга: ${
        data.service === "fence"
          ? "Забор"
          : data.service === "canopy"
            ? "Навес"
            : data.service === "gate"
              ? "Ворота"
              : data.service
      }`
    : "";

  const text = `
    Новый ${requestTypeText} от клиента
    
    Имя: ${data.name}
    Телефон: ${data.phone}
    ${data.email ? `Email: ${data.email}` : ""}
    ${serviceText}
    
    ${data.comments ? `Комментарий: ${data.comments}` : ""}
  `;

  const html = `
    <h2>Новый ${requestTypeText} от клиента</h2>
    <p><strong>Имя:</strong> ${data.name}</p>
    <p><strong>Телефон:</strong> ${data.phone}</p>
    ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
    ${serviceText ? `<p><strong>${serviceText}</strong></p>` : ""}
    
    ${data.comments ? `<p><strong>Комментарий:</strong><br> ${data.comments.replace(/\n/g, "<br>")}</p>` : ""}
  `;

  return {
    subject,
    text,
    html,
  };
}
