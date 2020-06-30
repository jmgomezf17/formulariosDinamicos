// app.component.ts
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ElementModel, TypeElements } from './element.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public listElements: ElementModel[];
  public listElementsForm: ElementModel[];

  constructor(){
    this.listElements = [];
    this.listElementsForm = [];
    this.listElementsCreate();
  }


  drop(event: CdkDragDrop<string[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  listElementsCreate(){

    const labelElement = new ElementModel();
    labelElement.id = 1;
    labelElement.name = 'Label';
    labelElement.title = 'Label';
    labelElement.type = TypeElements.LABEL;
    labelElement.icon = 'fa-font';
    labelElement.description = 'Agregar un titulo';
    this.listElements.push(labelElement);

    const textElement = new ElementModel();
    textElement.id = 2;
    textElement.name = 'Texto';
    textElement.title = 'Input';
    textElement.type = TypeElements.TEXT;
    textElement.icon = 'fa-edit';
    textElement.description = 'Agregar un campo de texto';
    this.listElements.push(textElement);

    const radioElement = new ElementModel();
    radioElement.id = 3;
    radioElement.name = 'Radio';
    radioElement.title = 'Radio Group';
    radioElement.type = TypeElements.RADIOGROUP;
    radioElement.icon = 'fa-check-circle';
    radioElement.description = 'Agregar una lista de opciones con selección unica';
    this.listElements.push(radioElement);

    const checkElement = new ElementModel();
    checkElement.id = 4;
    checkElement.name = 'Check';
    checkElement.title = 'Check Group';
    checkElement.type = TypeElements.CHECKGROUP;
    checkElement.icon = 'fa-check-square';
    checkElement.description = 'Agregar una lista de opciones con selección multiple';
    this.listElements.push(checkElement);

    const textAreaElement = new ElementModel();
    textAreaElement.id = 5;
    textAreaElement.name = 'TextArea';
    textAreaElement.title = 'TextArea';
    textAreaElement.type = TypeElements.TEXTAREA;
    textAreaElement.icon = 'fa-align-justify';
    textAreaElement.description = 'Agregar un campo de texto de longitud mayor';
    this.listElements.push(textAreaElement);

    const comboElement = new ElementModel();
    comboElement.id = 6;
    comboElement.name = 'Combobox';
    comboElement.title = 'Combobox';
    comboElement.type = TypeElements.COMBOBOX;
    comboElement.icon = 'fa-chevron-down';
    comboElement.description = 'Agregar un campo de lista desplegable';
    this.listElements.push(comboElement);

  }

  addElementForm(element: ElementModel){
    this.listElementsForm.push({ ...element });
  }

  deleteElementForm(element: ElementModel){
    const index = this.listElementsForm.indexOf( element );
    this.listElementsForm.splice( index, 1 );
  }

  resetElementsForm(){
    this.listElementsForm = [];
  }

}
