/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/


import {Babylonjs_framework_module} from './babylonjs_framework_module';

export class  Babylonjs_framework_network extends Babylonjs_framework_module{

    constructor(args){
        super(args);
    }

    setup_network(){
		var self = this;
		this.socket = io();
		this.socket.on('connect', function () {
		    console.log('server connected');
			if(this.reload){
				location.reload();
			}
		});

		this.socket.on('disconnect', function () {
		    console.log('server disconnected');
			this.reload = true;
		});
	}

}
