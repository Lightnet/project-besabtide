/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/

import { Component } from '@angular/core';

@Component({
    selector: 'editorpanel',
    styleUrls:  ['./components/editorpanel.component.css'],
    template: `
        <div style="height:100%;width:100%;margin:0;padding:0;">
            <div style="width:100%;height:32px;margin:0;padding:0;">
                <ul>
                    <li> <a class="dropbtn" href="#" (click)="setscriptpanel()">Script</a> </li>
                    <!--<li> <a class="dropbtn" href="#" (click)="setconsolepanel()">Console</a> </li>-->
                </ul>
            </div>
            
            <div [hidden]="bconsole"style="width:100%;height:80%;background-color: #00ff00;">
                <consolepanel></consolepanel>
            </div>

            <div [hidden]="bscript" style="height:100%;margin:0;padding:0;">
                <div style="width:20%;height:100%;float:left;margin:0;padding:0;">
                    <!--

                    -->
                    <scripteditormenu></scripteditormenu>
                    <scripteditorexplore></scripteditorexplore>
                </div>
                <div style="width:80%;height:100%;float:left;margin:0;padding:0;">
                    <codeeditor-component style="margin:0;padding:0;"></codeeditor-component>
                    <!--

                    -->
                </div>
            </div>
        </div>
    `
})
export class EditorPanel {
    bscript = false;
    bconsole = true;

    setscriptpanel(){
        this.bconsole = true;
        this.bscript = false;
    }

    setconsolepanel(){
        this.bscript = true;
        this.bconsole = false;
    }

}
