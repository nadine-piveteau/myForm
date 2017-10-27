import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Job }    from './job';
import {ga} from 'https//api3.geo.admin.ch/loader.js';

@Component({
  selector: 'job-form',
  templateUrl: './job-form.component.html'
})
export class JobFormComponent implements OnInit{

  constructor(private http: HttpClient) {}

  srids = [21781, 2056];
  s3_endpoints = ['dev', 'int', 'prod'];
  data: string;
  url = 'http://127.0.0.1:4201/update'

  model = new Job(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    this.data = JSON.stringify(this.model);
    this.http.post(this.url, this.data, undefined).subscribe(); 
    console.log(this.data);   
    
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newJob() {
    this.model = new Job('layer', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'your.e-mail@swisstopo.ch');
  }


  ngOnInit(): void {
    var map = new ga.Map({
      target: 'map',
      view: new ga.View({
        
        // Define the default resolution
        // 10 means that one pixel is 10m width and height
        // List of resolution of the WMTS layers:
        // 650, 500, 250, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5, 0.25, 0.1
        resolution: 650,
        
        // Define a coordinate CH1903 (EPSG:21781) for the center of the view
        center: [660000, 190000]
      })
    });
    // Create a background layer
    var lyr1 = ga.layer.create('ch.swisstopo.pixelkarte-farbe');

    // Add the background layer in the map
    map.addLayer(lyr1);

    // Create an overlay layer
    var lyr2 = ga.layer.create('ch.swisstopo.fixpunkte-agnes');

    // Add the overlay layer in the map
    map.addLayer(lyr2);
  }


}