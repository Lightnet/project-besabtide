/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/


//import {Babylonjs_game_module} from '../rpg/Babylonjs_game_module';

import {ObjectRPGID} from '../rpg/ObjectRPGID';

export class RPGFoor01 extends ObjectRPGID{

    static getClass() {
      return 'RPGFoor01';
    }

    constructor(args){
		super(args);
        this.objtype = "block";
        this.nameClass = "RPGFoor01";
        this.geometrytype = 'door';
    }
}
