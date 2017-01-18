/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/


import {Babylonjs_game_module} from '../system/Babylonjs_game_module';

export class RPGDungeonBuild extends Babylonjs_game_module{

    constructor(args){
        super(args);
    }

    nextblock(scroll){
        if(scroll > 0){
            this.blockindex++;
        }
        if(scroll < 0){
            this.blockindex--;
        }

        if(this.blockindex > this.blocks.length - 1){
            this.blockindex = 0;
        }

        if(this.blockindex < 0){
            this.blockindex = this.blocks.length - 1;
        }

        this.placename = this.blocks[this.blockindex].name;
        console.log(this.placename);
        console.log(this.blockindex);
    }

    setup_buildkeys(){
        var self = this;
        this.blockindex = 0;
        
        this.scene.actionManager = new BABYLON.ActionManager(this.scene);
        this.scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnKeyUpTrigger, parameter: "b" }, function (evt) {
            //console.log("typing r...");
            console.log(evt);
            if (evt.sourceEvent.key == "b") {
                self.buildobjectdungeon();
            }
        }));

        this.scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnKeyUpTrigger, parameter: "r" }, function (evt) {
            //console.log("typing r...");
            console.log(evt);
            if (evt.sourceEvent.key == "r") {
                self.rotateobjectdungeon();
            }
        }));
    }

    buildobjectdungeon(){
        console.log('build block...');

        for(var i = 0; i < this.blocks.length;i++){
            if(this.blocks[i].name == this.placename){
                var _objmesh = this.getMeshAssets(this.blocks[i].meshname);
                _objmesh.isVisible = true;
                _objmesh.position.x = this.hitposition.x;
                _objmesh.position.y = this.hitposition.y;
                _objmesh.position.z = this.hitposition.z;

                break;
            }
        }
    }

    rotateobjectdungeon(){
        console.log('rotate block...');
    }




}
