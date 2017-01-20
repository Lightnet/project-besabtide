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
    selector: 'editorpanel',
    styleUrls:  ['./components/editorpanel.component.css'],
    template: `
        <div style="height:100%;width:100%;">
            <!-- -->
            <header>
                <ul>
                    <li> <a class="dropbtn" href="#" (click)="setscriptpanel();">Script</a> </li>
                    <li> <a class="dropbtn" href="#" (click)="scriptcompile();">Compile</a> </li>
                    <li> <a class="dropbtn" href="#" (click)="scriptrun();">Run</a> </li>
                    <li> <a class="dropbtn" href="#" (click)="scriptstop();">Stop</a> </li>
                    <li> <a class="dropbtn" href="#" (click)="setconsolepanel();">Console</a> </li>
                </ul>
            </header>

            <div [hidden]="bconsole"style="width:100%;height:100%;background-color:gray;">
                <consolepanel></consolepanel>
            </div>

            <scripteditorlayout [hidden]="bscript" style="width:100%;height:100%;margin:0;padding:0;"></scripteditorlayout>
        </div>
    `
})
export class EditorPanel {
    bscript = false;
    bconsole = true;

    constructor(gameservice:GameService){
        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    setscriptpanel(){
        this.bconsole = true;
        this.bscript = false;
    }

    setconsolepanel(){
        this.bscript = true;
        this.bconsole = false;
    }


    scriptcompile(){
        if(this.gameservice.textscript !=null){
            var scriptinput =  this.gameservice.textscript;
            var output = Babel.transform(scriptinput, { presets: ['es2015'] }).code;
            console.log(output);
        }
    }

    scriptrun(){
        console.log("run script!");
    }

    scriptstop(){
        console.log("stop script!");
    }

}
