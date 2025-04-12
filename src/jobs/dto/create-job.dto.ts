import { IsString, IsEnum, IsInt, IsDateString } from 'class-validator';
import { JobType } from '@prisma/client';

export class CreateJobDto {
  @IsString()
  jobTitle: string;

  @IsString()
  companyName: string;

  @IsString()
  location: string;

  @IsEnum(JobType)
  jobType: JobType;

  @IsInt()
  salaryStart: number;

  @IsInt()
  salaryEnd: number;

  @IsDateString()
  applicationDeadline: string;

  @IsString()
  jobDescription: string;
}
