/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/

//setup component main page html

import { Component } from '@angular/core';
import 'rxjs/add/operator/map';

import {GameService} from './services/game.service';

import '../js/babylon.min.js';

import '../js/jquery.min.js';
import '../js/jquery-ui.min.js';
import '../js/jquery.layout.min.js';

@Component({
    selector: 'main-app',
    template: `
    <gameeditor></gameeditor>
    `
})
export class MainApp {
    constructor(gameservice:GameService){
        //console.log(gameservice);
        this.gameservice = gameservice;
    }
}
