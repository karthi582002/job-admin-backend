// jobs.service.ts

import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { CreateJobDto } from "./dto/create-job.dto";

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  async createJob(data: CreateJobDto) {
    return this.prisma.job.create({ data });
  }

  async getAllJobs() {
    return this.prisma.job.findMany();
  }
  // jobs.service.ts

  async deleteJobById(id: number) {
    return await this.prisma.job.delete({
      where: {
        id: Number(id), // Convert string to number
      },
    });
}

}
