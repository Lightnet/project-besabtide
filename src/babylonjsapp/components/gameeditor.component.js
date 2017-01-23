/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/

//setup app

import { NgModule, Component, Input, Attribute } from '@angular/core';
import 'rxjs/add/operator/map';

import {GameService} from '../services/game.service';

import '../../js/babylon.min.js';

import {Babylonjs_game} from '../babylonjs_game/babylonjs_game';

import '../../js/jquery.min.js';
import '../../js/jquery-ui.min.js';
import '../../js/jquery.layout.min.js';

@Component({
    selector: 'gameeditor',
    template: `
    <!---->
    <div id="container" style="height:100%;">
        <div class="ui-layout-center" style="margin:0;padding:0;overflow:hidden;">
            <canvas id="renderCanvas"></canvas>
        </div>
        <div class="ui-layout-north" style="margin:0;padding:0;z-index:100;">
            <editormenu></editormenu>
        </div>
        <div class="ui-layout-south" style="margin:0;padding:0;">
            <editorpanel></editorpanel>
        </div>
        <div class="ui-layout-east" style="margin:0;padding:0;overflow:hidden;">
            <scene-list></scene-list>
            <objectprops></objectprops>
        </div>
        <div class="ui-layout-west" style="margin:0;padding:0;overflow:hidden;">
            <assets-list></assets-list>
        </div>
    </div>
    <shapecubemodal></shapecubemodal>
    <shapespheremodal></shapespheremodal>
    <shapesplanemodal></shapesplanemodal>
    <shapeterrainmodal></shapeterrainmodal>
    <objectmaterialmodal></objectmaterialmodal>
    <shapecharactermodal></shapecharactermodal>
    `
})
export class GameEditor implements OnInit{

    scene = null;

    constructor(gameservice:GameService){
        this.gameservice = gameservice;
    }

    ngOnInit(): void {
        var self = this;
        //console.log("init layout!");
        this.setup_layout();
        //window.addEventListener('load',()=>{
            //console.log("loaded?");
            self.init();
        //},false);
    }

    setup_layout(){
        var self = this;
        $('#container').layout({
            resizable:true,
            onresize:()=>{
                //console.log("resize");
                self.resizecanvas();
            }
        });
        var layout = $('#container').layout();
        layout.sizePane("south", 250);
        layout.allowOverflow("north");
        //layout.toggle("north");
        layout.toggle("south");
    }

    resizecanvas(){
        if((this.scene != null)){
            var layout = $('#container').layout();
            var width     = layout.state.center.innerWidth;
            var height     = layout.state.center.innerHeight;
            //this.camera.aspect = width / height;
            //this.camera.updateProjectionMatrix();
            //this.renderer.setSize( width,height );
            //this.scene.width = width;
            //this.scene.height = height;
            //console.log("resize");
            layout = null;
            width = null;
            height = null;
        }
    }

    init(){
        var config = {};
        config = {mode:"editor"};
        var baylonjs_Game = new Babylonjs_game(config);
        //console.log(baylonjs_Game);
        baylonjs_Game.init();
        //baylonjs_Game.setup_GunDBScript();
        this.gameservice.app = baylonjs_Game;
        this.gameservice.scene = baylonjs_Game.scene;
    }
}
