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
        var self = this;
        console.log('Reload');
        if(this.gameservice.app !=null){
            //this.gameservice.app.gscriptcomponents.val(function (data) {
              // render it, but only once. No updates.
              //console.log(data);
            //})
            this.gameservice.app.reloadscriptlist()
        }
    }

    ScriptSave(){
        if(this.gameservice.scriptuuid == ""){
            console.log("Nothing here!");
            return;
        }else{
            console.log('Save');
        }
        var self = this;
        if(this.gameservice.app !=null){
            //console.log(this.gameservice.app);
            //console.log(this.gameservice.uuid());
            //console.log(this.gameservice.scriptuuid);
            this.gameservice.app.gunobjectcheckid('scriptcomponents',this.gameservice.scriptuuid,(bfind,id)=>{
                console.log('checking...');
                if(bfind){
                    //console.log("Found!");
                    //console.log(id)
                    self.gameservice.app.gunobjectsave('scriptcomponents',id,{
                        name:self.gameservice.textscriptname,
                        script:self.gameservice.textscript
                    });
                }else{
                    console.log("Not found!");
                    self.gameservice.app.gunsetobject('scriptcomponents',{
                        uuid:self.gameservice.scriptuuid,
                        name:self.gameservice.textscriptname,
                        script:self.gameservice.textscript
                    });
                }
            });
            self.gameservice.app.reloadscriptlist();
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
            //console.log(this.gameservice.app);
            //console.log(this.gameservice.uuid());
            console.log(this.gameservice.scriptuuid);
            this.gameservice.app.deletescriptid(this.gameservice.scriptuuid);
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
