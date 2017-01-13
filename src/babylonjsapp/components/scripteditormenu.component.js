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
    selector: 'scripteditormenu',
    template: `
        Action
        <button (click)="ScriptReload();"><span class="ui-icon ui-icon-refresh"></span></button>
        <button (click)="ScriptSave();"><span class="ui-icon ui-icon-disk"></span></button>
        <button (click)="ScriptRun();"><span class="ui-icon ui-icon-play"></span></button>
        <button (click)="ScriptCreate();"><span class="ui-icon ui-icon-newwin"></span></button>
        <button (click)="ScriptDelete();"><span class="ui-icon ui-icon-trash"></span></button>
    `
})
export class ScriptEditorMenu {

    gameservice = null;

    constructor(gameservice:GameService){
        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    ScriptReload(){
        console.log('Reload');
        if(this.gameservice.app !=null){
            //this.gameservice.app.gscriptcomponents.val(function (data) {
              // render it, but only once. No updates.
              //console.log(data);
            //})
            this.gameservice.app.scriptcomponents = [];
            this.gameservice.app.gunobjectlist('scriptcomponents',(_obj)=>{
                console.log(_obj);
                this.gameservice.app.scriptcomponents.push(_obj);
            });
        }
    }

    ScriptSave(){
        console.log('Save');
        if(this.gameservice.app !=null){
            //console.log(this.gameservice.app.uuid());
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
                    this.gameservice.app.gunsetobject('scriptcomponents',{
                        uuid:this.gameservice.scriptuuid,
                        name:this.gameservice.textscriptname,
                        textscript:this.gameservice.textscript
                    });
                }
            });
        }
    }

    ScriptRun(){
        console.log('Run');
        if(this.gameservice.textscript !=null){
            //console.log(this.gameservice.textscript);
            var runscript = document.getElementById("runscript");
            if(runscript !=null){
                document.getElementById("runscript").remove();
                this.AddScript();
            }else{
                this.AddScript();
            }
        }
    }

    //add script to html
    AddScript(){
        if(this.gameservice !=null){
            var _script = document.createElement("script");
            _script.innerHTML = this.gameservice.textscript;
            document.getElementsByTagName('body')[0].appendChild(_script);
        }
    }

    ScriptDelete(){
        console.log('Delete');
        if(this.gameservice.app !=null){

        }
    }

    ScriptCreate(){
        console.log('Create');
        if(this.gameservice.app !=null){
            this.gameservice.app.scriptcomponents.push(
                {
                    uuid:this.gameservice.app.uuid(),
                    name:this.gameservice.app.uuid(),
                    script:`function main(){console.log('main');}`
                }
            );
        }
    }
}
