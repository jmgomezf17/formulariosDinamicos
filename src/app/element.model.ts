export class ElementModel {
    id?: number;
    name: string;
    title: string;
    description: string;
    type: TypeElements;
    icon: string;
    isRequired?: boolean;
    idTable?: number;
    source: SourceDataModel[];

    constructor(){
        this.id = null;
        this.name = null;
        this.title = null;
        this.description = null;
        this.type = null;
        this.icon = null;
        this.isRequired = null;
        this.idTable = null;
        this.source = [];
    }
}

export class SourceDataModel {
    id?: number;
    name: string;
    value: string;

    constructor(){
        this.id = null;
        this.name = null;
        this.value = null;
    }
}


export enum TypeElements {
    LABEL,
    TEXT,
    RADIOGROUP,
    CHECKGROUP,
    TEXTAREA,
    COMBOBOX,
}
