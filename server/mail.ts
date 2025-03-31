import { MailService } from '@sendgrid/mail';
import { RequestType } from "@shared/schema";

// Check if the SendGrid API key is set
const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  console.warn("Warning: SENDGRID_API_KEY environment variable is not set. Email notifications will not be sent.");
}

// Initialize mail service
const mailService = new MailService();
if (apiKey) {
  try {
    mailService.setApiKey(apiKey);
  } catch (error) {
    console.error("Error setting SendGrid API key:", error);
  }
}

const COMPANY_EMAIL = "zaborstroy68@yandex.com";
const FROM_EMAIL = "noreply@profogradzabor.ru"; // You may need to verify this sender domain in SendGrid

interface EmailParams {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!apiKey) {
    console.log("Email sending skipped: No API key");
    // Log the email content for development purposes
    console.log("Email that would have been sent:", {
      to: params.to,
      from: FROM_EMAIL,
      subject: params.subject,
    });
    return true; // Return true to not disrupt the user experience in development
  }

  try {
    await mailService.send({
      to: params.to,
      from: FROM_EMAIL,
      subject: params.subject,
      text: params.text || '', // Default to empty string if undefined
      html: params.html || '', // Default to empty string if undefined
    });
    console.log(`Email sent successfully to ${params.to}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    // Log the error details for debugging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
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
  let requestTypeText = '';
  let subject = '';
  
  switch (data.requestType) {
    case 'contact':
      requestTypeText = 'Запрос обратной связи';
      subject = 'Новый запрос обратной связи';
      break;
    case 'cost':
      requestTypeText = 'Расчет стоимости';
      subject = 'Новый запрос на расчет стоимости';
      break;
    case 'question':
      requestTypeText = 'Вопрос';
      subject = 'Новый вопрос от клиента';
      break;
    case 'review':
      requestTypeText = 'Отзыв';
      subject = 'Новый отзыв от клиента';
      break;
  }

  const serviceText = data.service 
    ? `Услуга: ${data.service === 'fence' 
      ? 'Забор' 
      : data.service === 'canopy' 
        ? 'Навес' 
        : data.service === 'gate'
          ? 'Ворота'
          : data.service}`
    : '';

  const text = `
    Новый ${requestTypeText} от клиента
    
    Имя: ${data.name}
    Телефон: ${data.phone}
    ${data.email ? `Email: ${data.email}` : ''}
    ${serviceText}
    
    ${data.comments ? `Комментарий: ${data.comments}` : ''}
  `;

  const html = `
    <h2>Новый ${requestTypeText} от клиента</h2>
    <p><strong>Имя:</strong> ${data.name}</p>
    <p><strong>Телефон:</strong> ${data.phone}</p>
    ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ''}
    ${serviceText ? `<p><strong>${serviceText}</strong></p>` : ''}
    
    ${data.comments ? `<p><strong>Комментарий:</strong><br> ${data.comments.replace(/\n/g, '<br>')}</p>` : ''}
  `;

  return {
    subject,
    text,
    html
  };
}