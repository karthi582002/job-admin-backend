import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { CreateJobDto } from "./dto/create-job.dto";

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() dto: CreateJobDto) {
    return this.jobsService.createJob(dto);
  }

  @Get()
  findAll() {
    return this.jobsService.getAllJobs();
  }

  @Delete(':id')
  deleteJob(@Param('id') id: number) {
    return this.jobsService.deleteJobById(id);
  }
}
