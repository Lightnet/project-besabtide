import { Component, Input, Attribute } from '@angular/core';

import {GameService} from '../services/game.service';

@Component({
    selector: 'objectmaterialmodal',
    template: `
        <div id="objectmaterial">
            Create: Material
            <br>Camera Position: <input id="terrain_camera" type="checkbox">
            <!--<br><select id="sceneshape" onclick="this.gameservice.app.ui_selectshape();">-->
            <!--</select>-->

            <!--
            <br>Height: <input type="number" [(ngModel)]="shape_height" >
            <br>Width: <input type="number" [(ngModel)]="shape_width" >
            <br>Depth: <input type="number" [(ngModel)]="shape_depth" >
            -->
            <br>
            <br>px: <input type="number" [(ngModel)]="shape_x" >
            <br>py: <input type="number" [(ngModel)]="shape_y" >
            <br>pz: <input type="number" [(ngModel)]="shape_z" >
            <br>
            <br><button (click)="createshape();">Create Shape</button>
        </div>
    `
})
export class ObjectMaterialModal implements OnInit{
    shape_height = 1;
    shape_width = 1;
    shape_depth = 1;

    shape_x = 0;
    shape_y = 0;
    shape_z = 0;


    constructor(gameservice:GameService){
        this.gameservice = gameservice;
    }

    createshape(){
        if(this.gameservice.app !=null){
            //console.log("pass");
            console.log(this);
            console.log(this.shape_height);

            this.gameservice.app.parse_object({geometrytype:'cube',
                                parameters:{
                                    height:this.shape_height,
                                    width:this.shape_width,
                                    depth:this.shape_depth},
                                position:{
                                    x:this.shape_x,
                                    y:this.shape_y,
                                    z:this.shape_z
                                }
                                });
        }else{
            //console.log("fail");
        }
    }

    ngOnInit(): void {
        var self = this;
        console.log("init modal!");
        $("#objectmaterial").dialog();
        $("#objectmaterial").dialog('close');
    }

}
