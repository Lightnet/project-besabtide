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
    selector: 'scriptcomponent',
    template: `
        <div style="height:100%;width:100%;overflow-y:scroll;">
        </div>
    `
})
export class ScriptComponent {
    constructor(gameservice:GameService){
        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    //selectobject(_obj){
        //console.log("scene object selected:");
        //console.log(_obj);
        //this.gameservice.selectobject = _obj;
    //}

    refresh(){
        console.log("refresh");
        console.log(this.gameservice);
        console.log(this.gameservice.scene.meshes);
    }
}
