import { JobsService } from "./jobs.service";
import { CreateJobDto } from "./dto/create-job.dto";
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    create(dto: CreateJobDto): Promise<{
        id: number;
        jobTitle: string;
        companyName: string;
        location: string;
        jobType: import(".prisma/client").$Enums.JobType;
        salaryStart: number;
        salaryEnd: number;
        applicationDeadline: Date;
        jobDescription: string;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        jobTitle: string;
        companyName: string;
        location: string;
        jobType: import(".prisma/client").$Enums.JobType;
        salaryStart: number;
        salaryEnd: number;
        applicationDeadline: Date;
        jobDescription: string;
        createdAt: Date;
    }[]>;
    deleteJob(id: number): Promise<{
        id: number;
        jobTitle: string;
        companyName: string;
        location: string;
        jobType: import(".prisma/client").$Enums.JobType;
        salaryStart: number;
        salaryEnd: number;
        applicationDeadline: Date;
        jobDescription: string;
        createdAt: Date;
    }>;
}
