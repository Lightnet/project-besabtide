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
            <scripteditormenu></scripteditormenu>
            <div *ngIf="gameservice.app.scriptcomponents">
                File:<input type="text" [(ngModel)]="this.gameservice.textscriptname" (change)="inputvaluechange($event);" />
                <ul>
                <li *ngFor="let obj of this.gameservice.app.scriptcomponents">
                    <label style="display: block;" (click)="selectscript(obj);"> {{obj.name}}</label>
                </li>
                </ul>
            </div>
        </div>
    `
})
export class ScriptEditorExplore implements OnInit{
    gameservice = null;

    inputvaluechange(event){
        console.log(event.target.value);
        console.log(this);

        if(this.gameservice.app !=null){
            //console.log(this.gameservice.app.uuid());

            //this.gameservice.scriptuuid = event.target.value;
            this.gameservice.app.gunobjectcheckid('scriptcomponents',this.gameservice.scriptuuid,(bfind,uuid)=>{
                if(bfind){
                    console.log("Found!");
                    console.log(uuid)
                    this.gameservice.app.gunobjectsave('scriptcomponents',uuid,{
                        name:this.gameservice.textscriptname,
                        script:this.gameservice.textscript
                    });
                }else{
                    console.log("Not found!");
                    if(this.gameservice.scriptuuid != ""){
                        this.gameservice.app.gunsetobject('scriptcomponents',{
                            uuid:this.gameservice.scriptuuid,
                            name:this.gameservice.textscriptname,
                            script:this.gameservice.textscript
                        });
                    }
                }
            });

            this.gameservice.app.reloadscriptlist();
        }
    }

    selectscript(value){
        //console.log(value);
        //check if game service editor is not null
        if(this.gameservice.scripteditor !=null){
            //console.log("found!");
            this.gameservice.scripteditor.setValue(value.script);
            this.gameservice.scripteditor.clearSelection();
            console.log(value.uuid);
            this.gameservice.scriptuuid = value.uuid;
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
