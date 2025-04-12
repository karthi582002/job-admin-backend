import { JobType } from '@prisma/client';
export declare class CreateJobDto {
    jobTitle: string;
    companyName: string;
    location: string;
    jobType: JobType;
    salaryStart: number;
    salaryEnd: number;
    applicationDeadline: string;
    jobDescription: string;
}
