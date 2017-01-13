/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/

import { Component } from '@angular/core';

import {GameService} from '../services/game.service';

@Component({
    selector: 'scripteditorexplore',
    styleUrls:  ['./components/scripteditorexplore.component.css'],
    template: `
        <div style="height:100%;overflow:auto;background-color:gray;">
        Files:
        <div *ngIf="gameservice.app.scriptcomponents">
            <ul>
            <li *ngFor="let obj of this.gameservice.app.scriptcomponents">
                <label style="display: block;" (click)="selectscript(obj)"> {{obj.name}}</label>
            </li>
            </ul>
        </div>
        </div>
    `
})
export class ScriptEditorExplore implements OnInit{
    gameservice = null;

    selectscript(value){
        //console.log(value);
        //check if game service editor is not null
        if(this.gameservice.scripteditor !=null){
            //console.log("found!");
            this.gameservice.scripteditor.setValue(value.script);
            this.gameservice.scripteditor.clearSelection();
            this.gameservice.textscriptname = value.name;
            this.gameservice.textscript = value.script;
        }
    }

    constructor(gameservice:GameService){
        console.log(gameservice);
        this.gameservice = gameservice;

        //console.log(this.gameservice.app.scriptcomponents);
    }

    ngOnInit(): void {
        //this.editor.setTheme("eclipse");
        //console.log(this.editor);
        console.log(this.gameservice.app.scriptcomponents);
    }
}
