import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/model/job.model';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  @Input() job!: Job;
  @Input() jobEdit: boolean=false;

  constructor(private router : Router){}
  jobDetails(){
    this.router.navigate(['/jobs/'+this.job.id])
  }
}
