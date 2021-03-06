/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/



/*
 * Information: work in progress testing to prevent unknown access to build around sandbox API
*/

export function GAMEAPI(app){
    console.log("API");
    console.log(app);
    class GameAPI{
        version = "1.0.0";

        constructor() {

        }

        get scene(){
            return app.scene;
        }

        set scene(value){
            app.scene = value;
        }

        get entities(){
            return [];
        }

        get parties(){
            return [];
        }

        get enemies(){
            return [];
        }


    }
    //global variable setup
    window.Game = new GameAPI();
};
