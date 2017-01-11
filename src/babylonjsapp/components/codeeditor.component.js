//add "AceEditorDirective" to your modules list

//import { AceEditorDirective } from 'ng2-ace-editor';
import { Component, ViewChild } from '@angular/core';
import 'zone.js/dist/zone';

import {GameService} from '../services/game.service';

@Component({
    selector: 'codeeditor-component',
    template: `
    <div ace-editor
        #editor
       [text]="text"
       [options]="options"
       [readOnly]="false"
       [autoUpdateContent]="true"
       (textChanged)="onChange($event)"
       style="min-height: 200px; height:100%; width:100%; overflow: auto;margin: 0;padding : 0;"></div>
    `
})
export class CodeEditor implements OnInit{
    @ViewChild('editor') editor;
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

    ngOnInit(): void {
        //this.editor.setTheme("eclipse");
        //console.log(this.editor);
    }

    constructor(gameservice:GameService){
        //console.log(gameservice);
        this.gameservice = gameservice;
        this.gameservice.textscript = this.text;
    }

    ngAfterViewInit() {
        //console.log(this);
        console.log(this.editor.nativeElement.env.editor);//works
        //console.log(this.editor);
        //var edit = this.editor();
        //console.log(edit);
        //this.editor.setTheme("eclipse");

        this.editor.nativeElement.env.editor.getSession().setMode("ace/mode/javascript");

        this.editor.nativeElement.env.editor.commands.addCommand({
           name: "showOtherCompletions",
           bindKey: "Ctrl-.",
           exec: function (editor) {
               console.log("CTRL-");
           }
       })

    }

    onChange(code) {
        //console.log(this.text);
        //console.log("new code", code);
        this.gameservice.textscript = code;
    }

}
