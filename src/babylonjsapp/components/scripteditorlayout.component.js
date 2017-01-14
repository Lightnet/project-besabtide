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
    styleUrls:  ['./components/scripteditorlayout.component.css'],
    template: `
        <div style="height:100%;width:100%;">
            <nav>
                <!--<scripteditormenu></scripteditormenu>-->
                <scripteditorexplore></scripteditorexplore>
            </nav>
            <article >
                <codeeditor-component style="margin:0;padding:0;"></codeeditor-component>
            </article>
        </div>
    `
})
export class ScriptEditorLayout {

}
