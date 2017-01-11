import { Component, Input, Attribute } from '@angular/core';

import {GameService} from '../services/game.service';

@Component({
    selector: 'shapespheremodal',
    template: `
        <div id="shapesphere">
            Shape: Sphere
            <br>Camera Position: <input id="terrain_camera" type="checkbox">
            <br>Diameter: <input type="number" [(ngModel)]="shape_diameter" >
            <br>
            <br>px: <input type="number" [(ngModel)]="shape_x" >
            <br>py: <input type="number" [(ngModel)]="shape_y" >
            <br>pz: <input type="number" [(ngModel)]="shape_z" >
            <br>
            <br><button (click)="createshape();">Create Shape</button>
        </div>
    `
})
export class ShapeSphereModal implements OnInit{
    shape_diameter = 1;

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

            this.gameservice.app.parse_object({geometrytype:'sphere',
                                parameters:{
                                    diameter:this.shape_diameter
                                },
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
        $("#shapesphere").dialog();
        $("#shapesphere").dialog('close');
    }

}
