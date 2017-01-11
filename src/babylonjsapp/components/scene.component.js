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
                <li *ngFor="let obj of gameservice.scene.meshes">
                    <label style="display: block;" (click)="selectobject(obj)">{{obj.name}}</label >
                </li>
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
