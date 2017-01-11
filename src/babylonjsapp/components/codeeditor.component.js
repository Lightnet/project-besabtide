//add "AceEditorDirective" to your modules list

import { AceEditorDirective } from 'ng2-ace-editor';
import { Component } from '@angular/core';
import 'zone.js/dist/zone';

import {GameService} from '../services/game.service';

@Component({
    selector: 'codeeditor-component',
    template: `
    <div ace-editor
       [text]="text"
       [options]="options"
       [readOnly]="false"
       [autoUpdateContent]="true"
       (textChanged)="onChange($event)"
       style="min-height: 200px; height:100%; width:100%; overflow: auto;margin: 0;padding : 0;"></div>
    `
})
export class CodeEditor {
    //options:any = {maxLines: 1000, printMargin: false};
    options:any = { printMargin: false };

    gameservice = null;
    text:string = `
function Test(){
    console.log("hello world text");
}

//Test();

//console.log("test");
console.log(this);
    `;

    constructor(gameservice:GameService){
        //console.log(gameservice);
        this.gameservice = gameservice;
        this.gameservice.textscript = this.text;
    }

    onChange(code) {
        //console.log(this.text);
        //console.log("new code", code);
        this.gameservice.textscript = code;
    }
}
