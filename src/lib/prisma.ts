import path from "node:path";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/** SQLite не працює на Vercel (немає постійного FS) — локально лишаємо file DB */
export function isSqliteEnabled() {
  return process.env.VERCEL !== "1";
}

export async function getPrisma(): Promise<PrismaClient | null> {
  if (!isSqliteEnabled()) return null;
  if (globalForPrisma.prisma) return globalForPrisma.prisma;

  const { PrismaBetterSqlite3 } = await import("@prisma/adapter-better-sqlite3");
  const absolute = path.join(/*turbopackIgnore: true*/ process.cwd(), "prisma", "dev.db");
  const adapter = new PrismaBetterSqlite3({ url: `file:${absolute}` });
  const client = new PrismaClient({ adapter });

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = client;
  }

  return client;
}
