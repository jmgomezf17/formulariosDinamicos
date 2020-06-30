import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElementModel } from '../../element.model';
import * as moment from 'moment';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() elementModel: ElementModel;
  @Output() addElementEvent = new EventEmitter<ElementModel>();

  public newElementModel: ElementModel;

  constructor() {
    this.newElementModel = new ElementModel();
  }

  ngOnInit(): void {
    this.newElementModel = Object.assign({}, this.elementModel);
  }

  addElement(){
    this.newElementModel.id = moment().valueOf();
    // console.log('this.newElementModel :>> ', this.newElementModel);
    this.addElementEvent.next(this.newElementModel);
  }
}
