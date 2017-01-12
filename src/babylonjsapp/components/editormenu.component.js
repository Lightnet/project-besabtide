/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/

import { Component } from '@angular/core';
import {GameService} from '../services/game.service';

import '../../js/babylon.min.js';

@Component({
    selector: 'editormenu',
    styleUrls:  ['./components/editormenu.component.css'],
    template: `
    <ul style="z-index:100">
    <li class="dropdown" >
    <a href="#" class="dropbtn">File</a>
    <div class="dropdown-content" style="z-index:10">
      <a href="#" (click)="scriptopenscene();">Open Scene</a>
      <a href="#" (click)="scriptloadscene();">Load Scene</a>
      <a href="#" (click)="scriptsavescene();">Save Scene</a>
      <a href="#" (click)="scriptclearscene();">Clear Scene</a>
      <a href="#" (click)="scriptdeletescene();">Delete Scene</a>
    </div>
    </li>
    <li class="dropdown">
    <a href="#" class="dropbtn">Edit</a>
    <div class="dropdown-content" style="z-index:5">
      <a href="#" (click)="scriptdeleteobject();">Delete Object</a>
    </div>
    </li>

    <li class="dropdown">
    <a href="#" class="dropbtn">Components</a>
    <div class="dropdown-content" style="z-index:5">
      <a href="#" (click)="addcube();" >Cube</a>
      <a href="#" (click)="addspshere();">Sphere</a>
      <a href="#" (click)="addsplane();">Plane</a>
      <a href="#" (click)="addterrain();">Terrain</a>
      <!--<a href="#" (click)="addmesh();">Mesh</a>-->
      <a href="#" (click)="addmaterial();">Material</a>
      <a href="#" (click)="addcharacter();">Character</a>
    </div>
    </li>
    <!--
    <li class="dropdown"><a href="#" class="dropbtn">Packages</a>
    <div class="dropdown-content" style="z-index:5">
      <a href="#">Scripts</a>
      <a href="#">Mods</a>
    </div>
    </li>
    <li class="dropdown"><a href="#" class="dropbtn">Help</a>
    <div class="dropdown-content" style="z-index:5">
      <a href="#">Docs</a>
      <a href="#">About</a>
    </div>
    </li>
    <li><a href="#" class="dropbtn" (click)="scriptbuild();">Build</a></li>
    <li><a href="#" class="dropbtn" (click)="scriptdebug();">Debug</a></li>
    <li><a href="#" class="dropbtn" (click)="scriptplay();">Play</a></li>
    <li><a href="#" class="dropbtn" (click)="scriptstop();">Stop</a></li>
    -->
    </ul>
    `
})
export class EditorMenu {

    constructor(gameservice:GameService){
        this.gameservice = gameservice;
    }

    scriptopenscene(){
        console.log("scriptopenscene");
    }

    scriptloadscene(){
        console.log("scriptloadscene");
        if(this.gameservice.app !=null){
            this.gameservice.app.LoadSceneMap();
        }
    }

    scriptsavescene(){
        console.log("scriptsavescene");
        if(this.gameservice.app !=null){
            this.gameservice.app.SaveSceneMap();
        }
    }

    scriptdeletescene(){
        console.log("scriptdeletescene");
    }

    scriptclearscene(){
        console.log("scriptclearscene");

        if(this.gameservice.app !=null){
            this.gameservice.app.ClearSceneMap();
        }
        /*
        if(this.gameservice.scene !=null){
            var objscene = this.gameservice.scene;
            for(var i = objscene.meshes.length; i > 0 ;i--){
                objscene.meshes[0].dispose();
            }
        }
        */
    }

    scriptdeleteobject(){
        //console.log('scriptdeleteobject');
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.dispose();
            this.gameservice.selectobject = null;
        }
    }

    scriptbuild(){
        console.log('scriptbuild');
    }

    scriptdebug(){
        console.log('scriptdebug');
    }

    scriptplay(){
        console.log('scriptplay');
    }

    scriptstop(){
        console.log('scriptstop');
    }

    addcube(){
        console.log("addcube");
        $("#shapecube").dialog('open');
    }

    addspshere(){
        console.log("addspshere");
        $("#shapesphere").dialog('open');
    }

    addsplane(){
        console.log("addsplane");
        $("#shapeplane").dialog('open');
    }

    addterrain(){
        console.log("addsplane");
        $("#shapeterrain").dialog('open');
    }

    addcharacter(){
        console.log("addsplane");
        $("#shapecharacter").dialog('open');
    }

    addmesh(){
        console.log("addmesh");
        //$("#").dialog('open');
    }

    addmaterial(){
        console.log("addmaterial > ?");
        $("#objectmaterial").dialog('open');
    }
}
