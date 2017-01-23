/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/


import {Babylonjs_game_module} from './Babylonjs_game_module';

//import {RPGCube} from '../rpg/RPGCube';
//import {RPGSphere} from '../rpg/RPGSphere';
//import {RPGCylinder} from '../rpg/RPGCylinder';
//import {RPGPlane} from '../rpg/RPGPlane';

export class Babylonjs_game_scriptcomponent extends Babylonjs_game_module{

    constructor(args){
        super(args);
    }

    initscripts(){
var mainscript ={
uuid:'3a3c3492-d77e-4dd1-9ac5-af121106673e',
name:'main',
script:`
function Test(){
    console.log("hello world text");
}
Test();
//console.log("test");
//console.log(this);
//console.log(Game);
//console.log(Game.scene);`
};
this.scriptcomponents.push(mainscript);
mainscript = {
uuid:'9f20014a-200e-4e8b-bd1d-0a1484dd21dd',
name:'test',
script:`function Test(){
    console.log("test");
}
Test();`
}
        this.scriptcomponents.push(mainscript);
        mainscript = null;
    }

}
