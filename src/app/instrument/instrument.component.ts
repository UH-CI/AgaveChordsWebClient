import { Component, OnInit, Input } from '@angular/core';
import { Instrument } from '../instrument';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {
  @Input() instrument: Instrument;

  constructor() { }

  ngOnInit() {
  }

}
