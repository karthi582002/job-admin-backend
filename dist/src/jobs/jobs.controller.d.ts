import { JobsService } from "./jobs.service";
import { CreateJobDto } from "./dto/create-job.dto";
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    create(dto: CreateJobDto): Promise<{
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
    findAll(): Promise<{
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
    deleteJob(id: number): Promise<{
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
