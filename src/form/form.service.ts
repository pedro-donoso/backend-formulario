import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class FormService {
  private prisma = new PrismaClient();

  async createUser(data: { name: string; email: string }) {
    return this.prisma.user.create({
      data,
    });
  }
}
