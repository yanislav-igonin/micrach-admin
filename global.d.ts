import { PrismaClient } from '@prisma/client';

declare global {
  // For lib/prisma.ts
  var prisma: PrismaClient;
}