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
    selector: 'assets-list',
    template: `
        Assets
        <div style="width:100%;height:100%;overflow-y:scroll;">

        </div>
        <!--<button (click)="refresh()">Refresh</button>-->
        <!--
        <div *ngIf="gameservice.scene">
            <a *ngFor="let obj of gameservice.scene.children">
                <label>{{obj.name}}</label>
            </a>
        </div>
        -->
    `
})
export class AssetsList {
    constructor(gameservice:GameService){
        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    refresh(){
        console.log("refresh");
        console.log(this.gameservice);
        //console.log(this.gameservice.scene.children[0]);
    }
}
