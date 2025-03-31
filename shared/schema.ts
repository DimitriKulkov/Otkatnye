import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Define the requestType enum
export const RequestTypeEnum = z.enum(['contact', 'cost', 'question', 'review']);
export type RequestType = z.infer<typeof RequestTypeEnum>;

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  service: text("service"),
  comments: text("comments"),
  requestType: text("request_type").notNull(), // "contact", "cost", "question", "review"
  createdAt: text("created_at").notNull().default("NOW()"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Create the basic schema from Drizzle
const baseContactRequestSchema = createInsertSchema(contactRequests).pick({
  name: true,
  phone: true,
  email: true,
  service: true,
  comments: true,
  requestType: true,
});

// Extend it with proper enum validation
export const insertContactRequestSchema = baseContactRequestSchema.extend({
  requestType: RequestTypeEnum
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;
