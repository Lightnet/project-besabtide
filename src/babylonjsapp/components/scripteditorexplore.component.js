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
    template: `
        <div style="height:100%;overflow:auto;background-color:gray;">
        Files:
        <div *ngIf="gameservice.app.scriptcomponents">
            <ul>
            <li *ngFor="let obj of this.gameservice.app.scriptcomponents">
                <label style="display: block;" (click)="selectobject(obj)"> {{obj.name}}</label>
            </li>
            </ul>
        </div>

        </div>
    `
})
export class ScriptEditorExplore implements OnInit{
    gameservice = null;

    selectobject(value){
        console.log(value);
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
