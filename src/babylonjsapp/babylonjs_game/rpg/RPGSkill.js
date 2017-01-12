/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/


import {ObjectRPGID} from './ObjectRPGID';

export class RPGSkill extends ObjectRPGID{

	static getClass() {
      return 'RPGSkill';
    }

	constructor(args){
		super(args);
		this.objtype = "skill";
		//this.getClass = "RPGSkill";
	}
}
