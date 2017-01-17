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
    selector: 'objectprops',
    template: `
        <div style="height:50%;width:100%;overflow-y:scroll;">
            Props:
            <!--<button (click)="refresh()">Refresh</button>-->
            <div *ngIf="gameservice.selectobject">
                Object: {{gameservice.selectobject.id}}
                <br><button (click)="meshdelete()">Delete</button>
                <br><button (click)="togglevisible()">Visible</button> : {{ this.gameservice.selectobject.isVisible }}
                <br><button (click)="toggletransform()">Transform</button>: {{ btransform }}
                <div [hidden]="btransform">
                    Position:
                    <br><label>x:<input type="number" [ngModel]="gameservice.selectobject.position.x" (ngModelChange)="objposx($event);" step ="0.100000" /></label>
                    <br><label>y:<input type="number" [ngModel]="gameservice.selectobject.position.y" (ngModelChange)="objposy($event);" step ="0.100000" /></label>
                    <br><label>z:<input type="number" [ngModel]="gameservice.selectobject.position.z" (ngModelChange)="objposz($event);" step ="0.100000" /></label>
                    <br>Rotation:
                    <br><label>x:<input type="number" [ngModel]="gameservice.selectobject.rotation.x" (ngModelChange)="objrotx($event);" step="0.100000" /></label>
                    <br><label>y:<input type="number" [ngModel]="gameservice.selectobject.rotation.y" (ngModelChange)="objroty($event);" step="0.100000" /></label>
                    <br><label>z:<input type="number" [ngModel]="gameservice.selectobject.rotation.z" (ngModelChange)="objrotz($event);" step="0.100000" /></label>
                    <br>Scaling:
                    <br><label>x:<input type="number" [ngModel]="gameservice.selectobject.scaling.x" (ngModelChange)="objscalex($event);" step ="0.100000" /></label>
                    <br><label>y:<input type="number" [ngModel]="gameservice.selectobject.scaling.y" (ngModelChange)="objscaley($event);" step="0.100000" /></label>
                    <br><label>z:<input type="number" [ngModel]="gameservice.selectobject.scaling.z" (ngModelChange)="objscalez($event);" step="0.100000" /></label>
                </div>
                <br><button (click)="togglemesh()">Mesh</button>:
                <div [hidden]="bmesh">
                    Test!
                </div>
                <br><button (click)="toggleanimation()">Animation</button>:
                <div [hidden]="banimation">
                    Test!
                </div>
                <br><button (click)="togglematerial()">Material</button>:
                <div [hidden]="bmaterial">
                    Test!
                </div>
                <br><button (click)="togglescript()">Script</button>:
                <div [hidden]="bscript">
                    Test!
                </div>
            </div>
        </div>
    `
})
export class Objectprops {
    //toggle div hide or show
    btransform = true;
    bmesh = true;
    banimation = true;
    bmaterial = true;
    bscript = true;

    blight = true;
    bcamera = true;
    //bshader = true;
    //bskybox = true;

    constructor(gameservice:GameService){
        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    togglevisible(){
        if(this.gameservice.selectobject !=null){
            //console.log(this.gameservice.selectobject.visibility);
            if(this.gameservice.selectobject.isVisible){
                this.gameservice.selectobject.isVisible = false;
            }else{
                this.gameservice.selectobject.isVisible = true;
            }
        }
    }

    toggletransform(){
        if(this.btransform){
            this.btransform = false;
        }else{
            this.btransform = true;
        }
    }

    togglemesh(){
        if(this.bmesh){
            this.bmesh = false;
        }else{
            this.bmesh = true;
        }
    }

    toggleanimation(){
        if(this.banimation){
            this.banimation = false;
        }else{
            this.banimation = true;
        }
    }

    togglematerial(){
        if(this.bmaterial){
            this.bmaterial = false;
        }else{
            this.bmaterial = true;
        }
    }

    togglescript(){
        if(this.bscript){
            this.bscript = false;
        }else{
            this.bscript = true;
        }
    }



    objposx(value){
        //console.log(value);
        //console.log("pos x");
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.position.x = value;
        }
    }

    objposy(value){
        //console.log(value);
        //console.log("pos y");
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.position.y = value;
        }
    }

    objposz(value){
        //console.log(value);
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.position.z = value;
        }
    }

    objrotx(value){
        //console.log(value);
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.rotation.x = value;
        }
    }

    objroty(value){
        //console.log(value);
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.rotation.y = value;
        }
    }

    objrotz(value){
        //console.log(value);
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.rotation.z = value;
        }
    }

    objscalex(value){
        //console.log(value);
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.scaling.x = value;
        }
    }

    objscaley(value){
        //console.log(value);
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.scaling.y = value;
        }
    }

    objscalez(value){
        //console.log(value);
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.scaling.z = value;
        }
    }



    meshdelete(){
        //console.log("delete");
        if(this.gameservice.selectobject !=null){
            this.gameservice.selectobject.dispose();
            this.gameservice.selectobject = null;
        }
    }

    refresh(){
        //console.log("refresh");
        //console.log(this.gameservice);
        //console.log(this.gameservice.scene.children[0]);
    }
}
