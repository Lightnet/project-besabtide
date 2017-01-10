import { Component } from '@angular/core';

@Component({
    selector: 'editorpanel',
    styleUrls:  ['./components/editorpanel.component.css'],
    template: `
        <div style="height:100%;width:100%;">
            <div style="width:100%;height:32px;margin:0;padding:0;">
                <ul>
                    <li> <a class="dropbtn" href="#" (click)="setscriptpanel()">Script</a> </li>
                    <li> <a class="dropbtn" href="#" (click)="setconsolepanel()">Console</a> </li>
                </ul>
            </div>
            <div [hidden]="bconsole"style="width:100%;height:100%;">
                <consolepanel></consolepanel>
            </div>
            <div [hidden]="bscript" style="width:100%;height:100%;">
                <div style="width:20%;height:100%;float:left;margin:0;padding:0;">
                    <scripteditormenu></scripteditormenu>
                    <scripteditorexplore></scripteditorexplore>
                </div>
                <div style="width:80%;height:100%;float:left;">
                    <codeeditor-component style="margin:0;padding:0;"></codeeditor-component>
                </div>
            </div>
        </div>
    `
})
export class EditorPanel {
    bscript = false;
    bconsole = true;

    setscriptpanel(){
        this.bconsole = true;
        this.bscript = false;
    }

    setconsolepanel(){
        this.bscript = true;
        this.bconsole = false;
    }

}
