/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/

import { Component } from '@angular/core';

@Component({
    selector: 'scripteditorlayout',
    template: `
        <div style="height:100%;width:100%;">
            <div style="position: static;width:20%;height:100%;float:left;margin:0;padding:0;">
                <scripteditormenu></scripteditormenu>
                <scripteditorexplore></scripteditorexplore>
            </div>
            <div style="position: static;width:80%;height:100%;float:left;margin:0;padding:0;">
                <codeeditor-component style="margin:0;padding:0;"></codeeditor-component>
            </div>
        </div>
    `
})
export class ScriptEditorLayout {

}
