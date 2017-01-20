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

    create_dungeonhud(){
        console.log("dungeon hud");
        var screencanvas_group2d_RT = new BABYLON.Group2D({
            parent:this.screencanvas,
            id:"screencanvas_group2d_RT",
            marginAlignment: "h: left, v: top"
            //scale:0.6 //limited since backgroundRoundRadius effect render
            //scale:1 //limited since backgroundRoundRadius effect render
        });

        //new BABYLON.Rectangle2D({
            //parent: screencanvas_group2d_RT, id: "R2DStamina", x: -36, y: -42, width: 32, height: 32, fill: "#263238FF"
        //});

        // LEFT BOTTOM
        var screencanvas_group2d_LT = new BABYLON.Group2D({
            parent:this.screencanvas,
            id:"screencanvas_group2d_LT",
            marginAlignment: "h: left, v: top"
            //scale:0.6 //limited since backgroundRoundRadius effect render
            //scale:1 //limited since backgroundRoundRadius effect render
        });

        new BABYLON.Rectangle2D({
            parent: screencanvas_group2d_LT, id: "R2DDungeonHUD", x: 8, y: 8, width: 128, height: 32, fill: "#263238FF",
            children:
            [
                new BABYLON.Text2D("Dungeon HUD", {fontName: "10pt Arial", marginAlignment: "h: center, v: center" })
            ]
        });
    }

    setup_placeholderblocks(){
        this.blocks = [];

        var _objmesh = this.getMeshAssets('block_floor');
        _objmesh.isPickable = false;
        this.blocks.push({name:'floor',meshname:'block_floor', mesh:_objmesh});

        _objmesh = this.getMeshAssets('block_wall');
        _objmesh.isPickable = false;
        this.blocks.push({name:'wall',meshname:'block_wall', mesh:_objmesh});

        _objmesh = this.getMeshAssets('block_stair');
        _objmesh.isPickable = false;
        this.blocks.push({name:'stair',meshname:'block_stair', mesh:_objmesh});

        _objmesh = this.getMeshAssets('block_framedoor');
        _objmesh.isPickable = false;
        this.blocks.push({name:'framedoor',meshname:'block_framedoor', mesh:_objmesh});
        _objmesh =null;

    }

    nextblock(scroll){
        if(this.blocks[this.blockindex].mesh !=null){
            this.blocks[this.blockindex].mesh.isVisible = false;
        }

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

        if(this.blocks[this.blockindex].mesh !=null){
            this.blocks[this.blockindex].mesh.isVisible = true;
        }

        this.placename = this.blocks[this.blockindex].name;
        //console.log(this.placename);
        //console.log(this.blockindex);
    }

    UpdatePlacement(){
        var self = this;
        if(this.buildmode == false){
            return;
        }
        //console.log("update?");
        var pickResult = self.scene.pick(self.scene.pointerX, self.scene.pointerY);

        if(pickResult.hit){
            console.log(pickResult);
            console.log(pickResult.getNormal());
            //console.log('hit');
            //this.placeposition
            self.hitobject = pickResult.pickedMesh;
            self.hitposition.x = pickResult.pickedPoint.x;
            self.hitposition.y = pickResult.pickedPoint.y;
            self.hitposition.z = pickResult.pickedPoint.z;

            if(self.blocks[this.blockindex].mesh !=null){
                //this.blocks[this.blockindex].mesh.isVisible = false;
                self.blocks[this.blockindex].mesh.position.x = self.hitposition.x;
                self.blocks[this.blockindex].mesh.position.y = self.hitposition.y;
                self.blocks[this.blockindex].mesh.position.z = self.hitposition.z;
            }
        }else{
            //console.log('miss');
        }
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
