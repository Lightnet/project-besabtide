/*
    Project Name: project-besabtide
    Link:https://github.com/Lightnet/project-besabtide
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/

//setup app

//import { NgModule, Component, Input, Attribute } from '@angular/core';
import { NgModule, Component } from '@angular/core';
import { FormsModule }    from '@angular/forms';
//import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//import { ActivatedRoute, RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';

import {AceEditorDirective, AceEditorComponent} from 'ng2-ace-editor';

import { MainApp } from './app.component';

import {AssetsList} from './components/assets.component';
import {SceneList} from './components/scene.component';
import {Objectprops} from './components/objectprops.component';
import {GameEditor} from './components/gameeditor.component';
import {CodeEditor} from './components/codeeditor.component';
import {ScriptEditorExplore} from './components/scripteditorexplore.component';
import {ScriptEditorLayout} from './components/scripteditorlayout.component';
import {ScriptEditorMenu} from './components/scripteditormenu.component';
import {EditorMenu} from './components/editormenu.component';
import {EditorPanel} from './components/editorpanel.component';
import {ConsolePanel} from './components/consolepanel.component';

import {ShapeCubeModal} from './components/shapecubemodal.component';
import {ShapeSphereModal} from './components/shapespheremodal.component';
import {ShapePlaneModal} from './components/shapeplanemodal.component';
import {ShapeTerrainModal} from './components/shapeterrainmodal.component';

import {ObjectMaterialModal} from './components/objectmaterialmodal.component';
import {ShapeCharacterModal} from './components/shapecharactermodal.component';

import {ScriptComponent} from './components/scriptcomponent.component';


import {NavMenu} from './components/navmenu.component';
import {GameService} from './services/game.service';

//const routing = RouterModule.forRoot([
    //{ path: '', component: Hello },
    //{ path: 'ciao/:name', component: Ciao },
//]);

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        MainApp,
        AceEditorDirective,
        AceEditorComponent,
        GameEditor,
        NavMenu,
        ScriptEditorLayout,
        SceneList,
        AssetsList,
        ScriptEditorMenu,
        ScriptEditorExplore,
        CodeEditor,
        Objectprops,
        EditorPanel,
        ConsolePanel,
        EditorMenu,
        ShapeCubeModal,
        ShapeSphereModal,
        ShapePlaneModal,
        ShapeTerrainModal,
        ObjectMaterialModal,
        ShapeCharacterModal,
        ScriptComponent
    ],
    providers: [
        GameService
    ],
    bootstrap: [MainApp],
})
export class AppModule {

}
