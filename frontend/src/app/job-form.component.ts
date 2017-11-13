import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Job }    from './job';

@Component({
  selector: 'job-form',
  templateUrl: './job-form.component.html'
})
export class JobFormComponent{

  constructor(private http: HttpClient) {}

  srids = [21781, 2056];
  extensions = ['png', 'jpeg']
  data: string;
  url = 'http://127.0.0.1:8000/run_post';

  model = new Job(undefined, 4000.0, 250.0, undefined, undefined, 2056,2420000.0, 1030000.0, 2900000.0, 1350000.0);

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    this.data = JSON.stringify(this.model);
    
    this.http.post(this.url, this.data, { responseType: 'json' }).subscribe(
      data=> {console.log("The subscription is complete.")},
      function(error) { console.log("Error happened" + error)}); 
    console.log(this.data);   
    
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newJob() {
    this.model = new Job(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  }

}
