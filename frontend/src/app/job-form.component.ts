import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Job }    from './job';
import { environment } from '../environments/environment';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'job-form',
  templateUrl: './job-form.component.html'
})
export class JobFormComponent implements OnInit{

  formTest: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  srids = [21781, 2056];
  extensions = ['png', 'jpeg'];
  data: string;
  port = environment.portBackend;
  url = environment.url;
  runPost_url = this.url + this.port + '/run_post';
  progress_url = this.url + this.port + '/progress'; 
  progress = 0;
  dict = {};
  model = new Job(undefined, 4000.0, 250.0, undefined, undefined, 2056,2420000.0, 1030000.0, 2900000.0, 1350000.0);

  submitted = false;
  showMessage = false; 

  headers = new Headers();

  ngOnInit() {
    this.formTest = this.formBuilder.group({
      layer_id: [null, Validators.required],
      res_low: [null, Validators.required],
    });
  }

  getProgress() {
    return this.http.get(this.progress_url).subscribe(
      data=> {this.progress = +data;
              console.log(+data/100);},
      error=> {console.log(error);});
}

  onSubmit() { 
    this.showMessage = true;
    this.submitted = true; 
    this.dict['layer_id'] = this.model.layer_id; 
    this.dict['res_low'] = this.model.res_low; 
    this.dict['res_high'] = this.model.res_high; 
    this.dict['timestamp'] = this.model.timestamp; 
    this.dict['extension'] = this.model.extension; 
    this.dict['srid'] = this.model.srid; 
    this.dict['bbox'] = [this.model.bbox_minx, this.model.bbox_maxx, this.model.bbox_miny, this.model.bbox_maxy];
    console.log(this.dict); 
    this.data = JSON.stringify(this.dict);
    this.headers.append('Content-Type', 'application/json');
    this.http.post(this.runPost_url, this.data, this.headers).subscribe(
      data=> {console.log("The subscription is complete.");
              console.log(this.data);},
      error=> { console.log("Error happened" + error)});

    Observable.interval(2000).takeWhile(() => this.progress < 100).subscribe(() => this.getProgress())
  }

  newJob() {
    this.model = new Job(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  }

}
