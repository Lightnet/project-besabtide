//http://stackoverflow.com/questions/36342437/show-console-log-in-an-html-element-in-javascript
//http://stackoverflow.com/questions/20256760/javascript-console-log-to-html


import { Component } from '@angular/core';

@Component({
    selector: 'consolepanel',
    //styleUrls:  ['./components/editorpanel.component.css'],
    template: `
        <div style="">
            <div id="myLog" style="height:100%;width:100%;overflow-y : hidden;overflow-x : hidden;overflow:auto ;"></div>
        </div>
    `
})
export class ConsolePanel {
    constructor(){
        /*
        window.console = {
          log: function(str){
            var node = document.createElement("div");
            node.appendChild(document.createTextNode(str));
            document.getElementById("myLog").appendChild(node);
          }
        }
        */
    }
}
