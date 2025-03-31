import { 
  users, 
  contactRequests, 
  type User, 
  type InsertUser, 
  type ContactRequest, 
  type InsertContactRequest 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactRequests: Map<number, ContactRequest>;
  private userCurrentId: number;
  private contactRequestCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
    this.userCurrentId = 1;
    this.contactRequestCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = this.contactRequestCurrentId++;
    const now = new Date().toISOString();
    
    // Log that we're creating a contact request
    console.log(`Creating ${insertRequest.requestType} request from ${insertRequest.name}`);
    
    const contactRequest: ContactRequest = { 
      id,
      name: insertRequest.name,
      phone: insertRequest.phone,
      requestType: insertRequest.requestType,
      email: insertRequest.email || null,
      service: insertRequest.service || null,
      comments: insertRequest.comments || null,
      createdAt: now
    };
    this.contactRequests.set(id, contactRequest);
    return contactRequest;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }
}

export const storage = new MemStorage();
