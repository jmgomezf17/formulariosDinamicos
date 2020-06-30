import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElementModel, TypeElements } from 'src/app/element.model';
import { NgbModal, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SourceDataModel } from '../../element.model';

@Component({
  selector: 'app-element-form',
  templateUrl: './element-form.component.html',
  styleUrls: ['./element-form.component.css']
})
export class ElementFormComponent implements OnInit {
  @Input() elementModel: ElementModel;
  @Output() deleteElementEvent = new EventEmitter<ElementModel>();

  public typeElements: any;
  public modalOptions: NgbModalOptions;
  public closeResult: string;

  constructor(private modalService: NgbModal) {
    this.typeElements = TypeElements;
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop',
    };
  }

  ngOnInit(): void {
    this.elementModel.source = [];
  }

  deleteElementForm(){
    this.deleteElementEvent.next(this.elementModel);
  }

  openEdit(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      console.log('result :>> ', result);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log('reason :>> ', reason);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  addSource(){
    let index = this.elementModel.source.length;
    const newSource = new SourceDataModel();
    newSource.id = ++index;
    this.elementModel.source.push(newSource);
  }

  deleteSource(source: SourceDataModel){
    const index = this.elementModel.source.indexOf( source );
    this.elementModel.source.splice( index, 1 );
  }

}
