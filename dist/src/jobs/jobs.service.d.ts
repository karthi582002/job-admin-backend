import { PrismaService } from "prisma/prisma.service";
import { CreateJobDto } from "./dto/create-job.dto";
export declare class JobsService {
    private prisma;
    constructor(prisma: PrismaService);
    createJob(data: CreateJobDto): Promise<{
        jobTitle: string;
        companyName: string;
        location: string;
        jobType: import(".prisma/client").$Enums.JobType;
        salaryStart: number;
        salaryEnd: number;
        applicationDeadline: Date;
        jobDescription: string;
        id: number;
        createdAt: Date;
    }>;
    getAllJobs(): Promise<{
        jobTitle: string;
        companyName: string;
        location: string;
        jobType: import(".prisma/client").$Enums.JobType;
        salaryStart: number;
        salaryEnd: number;
        applicationDeadline: Date;
        jobDescription: string;
        id: number;
        createdAt: Date;
    }[]>;
    deleteJobById(id: number): Promise<{
        jobTitle: string;
        companyName: string;
        location: string;
        jobType: import(".prisma/client").$Enums.JobType;
        salaryStart: number;
        salaryEnd: number;
        applicationDeadline: Date;
        jobDescription: string;
        id: number;
        createdAt: Date;
    }>;
}
