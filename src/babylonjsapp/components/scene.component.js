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
    selector: 'scene-list',
    styleUrls:  ['./components/scene.component.css'],
    template: `
        <div style="height:50%;width:100%;overflow-y:scroll;">
            Scene
            <!--<button (click)="refresh()">Refresh</button>-->
            <div *ngIf="gameservice.scene">
                <ul>
                    <strong *ngFor="let obj of gameservice.scene.meshes">
                        <strong *ngIf="obj.rpgobj != null">
                        <li>
                            <label style="display: block;" (click)="selectobject(obj)">{{obj.name}}</label >
                        </li>
                        </strong>
                    </strong>
                </ul>
            </div>
        </div>
    `
})
export class SceneList {
    constructor(gameservice:GameService){
        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    selectobject(_obj){
        console.log("scene object selected:");
        console.log(_obj);
        this.gameservice.selectobject = _obj;
    }

    refresh(){
        console.log("refresh");
        console.log(this.gameservice);
        console.log(this.gameservice.scene.meshes);
    }
}
