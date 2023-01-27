import { PrismaClient } from "@prisma/client";

export class Database {
  private static _instance: Database | null = null;

  private readonly client = new PrismaClient();

  private constructor() {
    // Private constructor
  }

  public get prisma(): PrismaClient {
    return this.client;
  }

  public static async getInstance() {
    // Singleton pattern
    if (Database._instance === null) {
      Database._instance = new Database();

      await Database._instance.prisma.$connect();
    }

    return Database._instance;
  }
}
