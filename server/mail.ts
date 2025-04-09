import nodemailer from "nodemailer";
import { RequestType } from "@shared/schema";

// Create reusable transporter object using Yandex SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.yandex.com",
  port: 465,
  secure: true,
  auth: {
    user: "otckatnye.v@yandex.com",
    pass: "htxzzympkubpopoq",
  },
  connectionTimeout: 60000, // 60 секунд
    socketTimeout: 60000,
    greetingTimeout: 60000,
});

interface EmailParams {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const mailOptions = {
      from: "otckatnye.v@yandex.com",
      to: "otckatnye.v@yandex.com", // Always send to the company email
      subject: params.subject,
      text: params.text || "",
      html: params.html || "",
    };
    const info = await transporter.sendMail(mailOptions);
        console.log("Письмо отправлено. ID:", info.messageId);
        return true;
      } catch (error) {
        console.error("Полная ошибка SMTP:", error);
        return false;
      }
    }

    await transporter.sendMail(mailOptions);
    
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
