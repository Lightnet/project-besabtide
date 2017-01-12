/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/


import {ObjectRPGID} from './ObjectRPGID';

export class RPGCondition extends ObjectRPGID{

	static getClass() {
      return 'RPGCondition';
    }

	constructor(args){
		super();
		this.params = [];
		this.objtype = "condition";
		this.nameClass = "RPGCondition";
	}
}
