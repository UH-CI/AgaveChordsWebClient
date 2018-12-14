import { Component, OnInit} from '@angular/core';
import { latLng, LatLng, tileLayer, circle, polygon, icon} from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
//import { LeafletDrawDirective } from '@asymmetrik/ngx-leaflet-draw/src/leaflet-draw/core';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';

//import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  options = {
  	layers: [
  		tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
  	],
  	zoom: 5,
  	center: latLng(46.879966, -121.726909)
  };

  layersControl = {
  	baseLayers: {
  		'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
  		'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
  	},
  	overlays: {
  		'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
  		'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
  	}
  }

  drawOptions = {
     position: 'topright',
     draw: {
        marker: {
           icon: icon({
               iconSize: [ 25, 41 ],
               iconAnchor: [ 13, 41 ],
               iconUrl: 'assets/marker-icon.png',
               shadowUrl: 'assets/marker-shadow.png'
           })
        },
        polyline: false,
        circle: {
            shapeOptions: {
                color: '#aaaaaa'
            }
        }
     }
  };
  constructor() {

  }

  ngOnInit() {

  }

}
