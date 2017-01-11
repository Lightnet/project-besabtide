/*
    Project Name: bes-threejs
    Link:https://github.com/Lightnet/bes-threejs
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
    }
    //global variable setup
    window.Game = new GameAPI();
};
