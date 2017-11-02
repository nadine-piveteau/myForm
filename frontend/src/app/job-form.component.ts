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
  s3_endpoints = ['dev', 'int', 'prod'];
  data: string;
  url = 'http://192.168.99.100:4201/update'

  model = new Job(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

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
    this.model = new Job('layer', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'your.e-mail@swisstopo.ch');
  }

}
