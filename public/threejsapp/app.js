(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainApp = undefined;

var _dec, _class; //setup component main page html

var _core = require('@angular/core');

require('rxjs/add/operator/map');

var _game = require('./services/game.service');

require('../js/jquery.min.js');

require('../js/jquery-ui.min.js');

require('../js/jquery.layout.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainApp = exports.MainApp = (_dec = (0, _core.Component)({
    selector: 'main-app',
    template: '\n    <gameeditor></gameeditor>\n    '
}), _dec(_class = function MainApp(gameservice) {
    _classCallCheck(this, MainApp);

    console.log(gameservice);
    this.gameservice = gameservice;
}) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], MainApp);

},{"../js/jquery-ui.min.js":1,"../js/jquery.layout.min.js":1,"../js/jquery.min.js":1,"./services/game.service":16,"@angular/core":"@angular/core","rxjs/add/operator/map":"rxjs/add/operator/map"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AppModule = undefined;

var _dec, _class; //setup app

//import { NgModule, Component, Input, Attribute } from '@angular/core';

//import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//import { ActivatedRoute, RouterModule } from '@angular/router';


var _core = require('@angular/core');

var _forms = require('@angular/forms');

var _platformBrowser = require('@angular/platform-browser');

require('rxjs/add/operator/map');

var _ng2AceEditor = require('ng2-ace-editor');

var _app = require('./app.component');

var _assets = require('./components/assets.component');

var _scene = require('./components/scene.component');

var _objectprops = require('./components/objectprops.component');

var _gameeditor = require('./components/gameeditor.component');

var _codeeditor = require('./components/codeeditor.component');

var _scripteditorexplore = require('./components/scripteditorexplore.component');

var _scripteditorlayout = require('./components/scripteditorlayout.component');

var _scripteditormenu = require('./components/scripteditormenu.component');

var _editormenu = require('./components/editormenu.component');

var _editorpanel = require('./components/editorpanel.component');

var _navmenu = require('./components/navmenu.component');

var _game = require('./services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const routing = RouterModule.forRoot([
//{ path: '', component: Hello },
//{ path: 'ciao/:name', component: Ciao },
//]);

var AppModule = exports.AppModule = (_dec = (0, _core.NgModule)({
    imports: [_platformBrowser.BrowserModule, _forms.FormsModule],
    declarations: [_app.MainApp, _ng2AceEditor.AceEditorDirective, _ng2AceEditor.AceEditorComponent, _gameeditor.GameEditor, _navmenu.NavMenu, _scripteditorlayout.ScriptEditorLayout, _scene.SceneList, _assets.AssetsList, _scripteditormenu.ScriptEditorMenu, _scripteditorexplore.ScriptEditorExplore, _codeeditor.CodeEditor, _objectprops.Objectprops, _editorpanel.EditorPanel, _editormenu.EditorMenu],
    providers: [_game.GameService],
    bootstrap: [_app.MainApp]
}), _dec(_class = function AppModule() {
    _classCallCheck(this, AppModule);
}) || _class);

},{"./app.component":2,"./components/assets.component":4,"./components/codeeditor.component":5,"./components/editormenu.component":6,"./components/editorpanel.component":7,"./components/gameeditor.component":8,"./components/navmenu.component":9,"./components/objectprops.component":10,"./components/scene.component":11,"./components/scripteditorexplore.component":12,"./components/scripteditorlayout.component":13,"./components/scripteditormenu.component":14,"./services/game.service":16,"@angular/core":"@angular/core","@angular/forms":"@angular/forms","@angular/platform-browser":"@angular/platform-browser","ng2-ace-editor":"ng2-ace-editor","rxjs/add/operator/map":"rxjs/add/operator/map"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AssetsList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AssetsList = exports.AssetsList = (_dec = (0, _core.Component)({
    selector: 'assets-list',
    template: '\n        Assets\n        <!--<button (click)="refresh()">Refresh</button>-->\n        <!--\n        <div *ngIf="gameservice.scene">\n            <a *ngFor="let obj of gameservice.scene.children">\n                <label>{{obj.name}}</label>\n            </a>\n        </div>\n        -->\n    '
}), _dec(_class = function () {
    function AssetsList(gameservice) {
        _classCallCheck(this, AssetsList);

        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    _createClass(AssetsList, [{
        key: 'refresh',
        value: function refresh() {
            console.log("refresh");
            console.log(this.gameservice);
            //console.log(this.gameservice.scene.children[0]);
        }
    }]);

    return AssetsList;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], AssetsList);

},{"../services/game.service":16,"@angular/core":"@angular/core"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CodeEditor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; //add "AceEditorDirective" to your modules list

var _ng2AceEditor = require('ng2-ace-editor');

var _core = require('@angular/core');

require('zone.js/dist/zone');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CodeEditor = exports.CodeEditor = (_dec = (0, _core.Component)({
    selector: 'codeeditor-component',
    template: '\n    <div ace-editor\n       [text]="text"\n       [options]="options"\n       [readOnly]="false"\n       [autoUpdateContent]="true"\n       (textChanged)="onChange($event)"\n       style="min-height: 200px; height:100%; width:100%; overflow: auto;margin: 0;padding : 0;"></div>\n    '
}), _dec(_class = function () {
    function CodeEditor() {
        _classCallCheck(this, CodeEditor);

        this.text = "Test";
        this.options = { printMargin: false };
    }
    //options:any = {maxLines: 1000, printMargin: false};


    _createClass(CodeEditor, [{
        key: 'onChange',
        value: function onChange(code) {
            console.log("new code", code);
        }
    }]);

    return CodeEditor;
}()) || _class);

},{"@angular/core":"@angular/core","ng2-ace-editor":"ng2-ace-editor","zone.js/dist/zone":"zone.js/dist/zone"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditorMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

require('../../js/three.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorMenu = exports.EditorMenu = (_dec = (0, _core.Component)({
    selector: 'editormenu',
    styleUrls: ['./components/editormenu.component.css'],
    template: '\n    <ul>\n    <li class="dropdown" >\n    <a href="#" class="dropbtn">File</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#" (click)="scriptopenscene();">Open Scene</a>\n      <a href="#" (click)="scriptloadscene();">Load Scene</a>\n      <a href="#" (click)="scriptsavescene();">Save Scene</a>\n      <a href="#" (click)="scriptclearscene();">Clear Scene</a>\n      <a href="#" (click)="scriptdeletescene();">Delete Scene</a>\n    </div>\n    </li>\n    <li class="dropdown">\n    <a href="#" class="dropbtn">Edit</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#" (click)="scriptdeleteobject();">Delete Object</a>\n    </div>\n    </li>\n\n    <li class="dropdown">\n    <a href="#" class="dropbtn">Components</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#" (click)="addcube();" >Cube</a>\n      <a href="#" (click)="addspshere();">Sphere</a>\n      <a href="#" (click)="addsplane();">Plane</a>\n      <a href="#" (click)="addmesh();">Mesh</a>\n      <a href="#" (click)="addmaterial();">Material</a>\n    </div>\n    </li>\n    <!--\n    <li class="dropdown"><a href="#" class="dropbtn">Packages</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#">Scripts</a>\n      <a href="#">Mods</a>\n    </div>\n    </li>\n    <li class="dropdown"><a href="#" class="dropbtn">Help</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#">Docs</a>\n      <a href="#">About</a>\n    </div>\n    </li>\n    <li><a href="#" class="dropbtn" (click)="scriptbuild();">Build</a></li>\n    <li><a href="#" class="dropbtn" (click)="scriptdebug();">Debug</a></li>\n    <li><a href="#" class="dropbtn" (click)="scriptplay();">Play</a></li>\n    <li><a href="#" class="dropbtn" (click)="scriptstop();">Stop</a></li>\n    -->\n    </ul>\n    '
}), _dec(_class = function () {
    function EditorMenu(gameservice) {
        _classCallCheck(this, EditorMenu);

        this.gameservice = gameservice;
    }

    _createClass(EditorMenu, [{
        key: 'scriptopenscene',
        value: function scriptopenscene() {
            console.log("scriptopenscene");
        }
    }, {
        key: 'scriptloadscene',
        value: function scriptloadscene() {
            console.log("scriptloadscene");
        }
    }, {
        key: 'scriptsavescene',
        value: function scriptsavescene() {
            console.log("scriptsavescene");
        }
    }, {
        key: 'scriptdeletescene',
        value: function scriptdeletescene() {
            console.log("scriptdeletescene");
        }
    }, {
        key: 'scriptclearscene',
        value: function scriptclearscene() {
            console.log("scriptclearscene");
            console.log("scriptclearscene");
            if (this.gameservice.scene != null) {
                var objscene = this.gameservice.scene;
                while (objscene.children.length) {
                    objscene.remove(objscene.children[0]);
                }
            }
        }
    }, {
        key: 'scriptdeleteobject',
        value: function scriptdeleteobject() {
            //console.log('scriptdeleteobject');
            if (this.gameservice.selectobject != null) {
                //this.gameservice.selectobject.dispose();
                this.gameservice.scene.remove(this.gameservice.selectobject);
                this.gameservice.selectobject = null;
            }
        }
    }, {
        key: 'scriptbuild',
        value: function scriptbuild() {
            console.log('scriptbuild');
        }
    }, {
        key: 'scriptdebug',
        value: function scriptdebug() {
            console.log('scriptdebug');
        }
    }, {
        key: 'scriptplay',
        value: function scriptplay() {
            console.log('scriptplay');
        }
    }, {
        key: 'scriptstop',
        value: function scriptstop() {
            console.log('scriptstop');
        }
    }, {
        key: 'addcube',
        value: function addcube() {
            console.log("addcube");
            if (this.gameservice.scene != null) {
                console.log("cube");
                var geometry = new THREE.BoxGeometry(1, 1, 1);
                var material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
                var cube = new THREE.Mesh(geometry, material);
                cube.name = "cube";
                this.gameservice.scene.add(cube);
            }
        }
    }, {
        key: 'addspshere',
        value: function addspshere() {
            console.log("addspshere");
            if (this.gameservice.scene != null) {
                console.log("cube");
                var geometry = new THREE.SphereGeometry(1, 32, 32);
                var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                var sphere = new THREE.Mesh(geometry, material);
                sphere.name = "sphere";
                this.gameservice.scene.add(sphere);
            }
        }
    }, {
        key: 'addsplane',
        value: function addsplane() {
            console.log("addsplane");
            if (this.gameservice.scene != null) {
                console.log("cube");
                var geometry = new THREE.PlaneBufferGeometry(5, 5, 32);
                var material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
                var plane = new THREE.Mesh(geometry, material);
                plane.name = "plane";
                this.gameservice.scene.add(plane);
            }
        }
    }, {
        key: 'addmesh',
        value: function addmesh() {
            console.log("addmesh");
        }
    }, {
        key: 'addmaterial',
        value: function addmaterial() {
            console.log("addmaterial > ?");
        }
    }]);

    return EditorMenu;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], EditorMenu);

},{"../../js/three.min.js":1,"../services/game.service":16,"@angular/core":"@angular/core"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditorPanel = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorPanel = exports.EditorPanel = (_dec = (0, _core.Component)({
    selector: 'editorpanel',
    styleUrls: ['./components/editorpanel.component.css'],
    template: '\n        <div style="height:100%;width:100%;">\n            <div style="width:100%;height:32px;margin:0;padding:0;">\n                <ul>\n                    <li> <a class="dropbtn" href="#">Script</a> </li>\n                    <li> <a class="dropbtn" href="#">Console</a> </li>\n                </ul>\n            </div>\n            <div style="width:20%;height:100%;float:left;margin:0;padding:0;">\n                <scripteditormenu></scripteditormenu>\n                <scripteditorexplore></scripteditorexplore>\n            </div>\n            <div style="width:80%;height:100%;float:left;">\n                <codeeditor-component style="margin:0;padding:0;"></codeeditor-component>\n            </div>\n        </div>\n    '
}), _dec(_class = function EditorPanel() {
    _classCallCheck(this, EditorPanel);
}) || _class);

},{"@angular/core":"@angular/core"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameEditor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; //setup app

var _core = require('@angular/core');

require('rxjs/add/operator/map');

var _game = require('../services/game.service');

require('../../js/three.min.js');

require('../../js/postprocessing/EffectComposer.js');

require('../../js/shaders/CopyShader.js');

var _threejs_game = require('../threejs_game/threejs_game');

require('../../js/jquery.min.js');

require('../../js/jquery-ui.min.js');

require('../../js/jquery.layout.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameEditor = exports.GameEditor = (_dec = (0, _core.Component)({
    selector: 'gameeditor',
    template: '\n    <editormenu></editormenu>\n    <div id="container" style="height:100%;">\n        <div class="ui-layout-center" style="margin: 0;padding : 0;">\n            <!--<canvas id="renderCanvas"></canvas>-->\n            <div id="renderCanvas"></div>\n        </div>\n        <div class="ui-layout-north">\n\n        </div>\n        <div class="ui-layout-south" style="margin: 0;padding : 0;">\n            <editorpanel></editorpanel>\n        </div>\n        <div class="ui-layout-east">\n            <scene-list></scene-list>\n            <objectprops></objectprops>\n        </div>\n        <div class="ui-layout-west">\n            <assets-list></assets-list>\n        </div>\n    </div>\n    '
}), _dec(_class = function () {
    function GameEditor(gameservice) {
        _classCallCheck(this, GameEditor);

        this.scene = null;

        this.gameservice = gameservice;
    }

    _createClass(GameEditor, [{
        key: 'ngOnInit',
        value: function ngOnInit() {
            console.log("init layout!");

            this.setup_layout();
            this.init();
        }
    }, {
        key: 'setup_layout',
        value: function setup_layout() {
            var self = this;
            $('#container').layout({
                resizable: true,
                onresize: function onresize() {
                    //console.log("resize");
                    self.resizecanvas();
                }
            });
            var layout = $('#container').layout();
            layout.sizePane("south", 250);
            layout.toggle("north");
        }
    }, {
        key: 'resizecanvas',
        value: function resizecanvas() {
            if (this.camera != null && this.renderer != null) {
                var layout = $('#container').layout();
                var width = layout.state.center.innerWidth;
                var height = layout.state.center.innerHeight;
                //this.camera.aspect = width / height;
                //this.camera.updateProjectionMatrix();
                //this.renderer.setSize( width,height );
                layout = null;
                width = null;
                height = null;
            }
        }
    }, {
        key: 'init',
        value: function init() {
            var config;
            config = { bupdateobjects: true };
            var game = new _threejs_game.Threejs_game(config);
            console.log(game);
            this.gameservice.app = game;
        }
    }]);

    return GameEditor;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], GameEditor);

},{"../../js/jquery-ui.min.js":1,"../../js/jquery.layout.min.js":1,"../../js/jquery.min.js":1,"../../js/postprocessing/EffectComposer.js":1,"../../js/shaders/CopyShader.js":1,"../../js/three.min.js":1,"../services/game.service":16,"../threejs_game/threejs_game":29,"@angular/core":"@angular/core","rxjs/add/operator/map":"rxjs/add/operator/map"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

require('../../js/three.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavMenu = exports.NavMenu = (_dec = (0, _core.Component)({
    selector: 'navmenu',
    styleUrls: ['./components/navmenu.component.css'],
    template: '\n        <ul>\n        <li class="dropdown" >\n        <a href="#" class="dropbtn">File</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#">Open Scene</a>\n          <a href="#">Load Scene</a>\n          <a href="#">Save Scene</a>\n          <a href="#"  (click)="clearscene();">Clear Scene</a>\n          <a href="#">Delete Scene</a>\n        </div>\n        </li>\n        <li class="dropdown">\n        <a href="#" class="dropbtn">Edit</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#">Delete Object</a>\n        </div>\n        </li>\n\n        <li class="dropdown">\n        <a href="#" class="dropbtn">Components</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#" (click)="addcube();" >Cube</a>\n          <a href="#">Sphere</a>\n          <a href="#">Plane</a>\n          <a href="#">Mesh</a>\n          <a href="#">Material</a>\n        </div>\n        </li>\n        <li class="dropdown"><a href="#" class="dropbtn">Packages</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#">Scripts</a>\n          <a href="#">Mods</a>\n        </div>\n        </li>\n        <li class="dropdown"><a href="#" class="dropbtn">Help</a>\n        <div class="dropdown-content" style="z-index:5">\n          <a href="#">Docs</a>\n          <a href="#">About</a>\n        </div>\n        </li>\n        <li><a href="#" class="dropbtn">Build</a></li>\n        <li><a href="#" class="dropbtn">Debug</a></li>\n        <li><a href="#" class="dropbtn">Play</a></li>\n        <li><a href="#" class="dropbtn">Stop</a></li>\n        </ul>\n    '
}), _dec(_class = function () {
    function NavMenu(gameservice) {
        _classCallCheck(this, NavMenu);

        this.gameservice = gameservice;
    }

    _createClass(NavMenu, [{
        key: 'clearscene',
        value: function clearscene() {
            if (this.gameservice.scene != null) {
                var objscene = this.gameservice.scene;
                while (objscene.children.length) {
                    objscene.remove(objscene.children[0]);
                }
            }
        }
    }, {
        key: 'addcube',
        value: function addcube() {
            if (this.gameservice.scene != null) {
                console.log("cube");
                var geometry = new THREE.BoxGeometry(1, 1, 1);
                var material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
                var cube = new THREE.Mesh(geometry, material);
                cube.name = "cube";
                this.gameservice.scene.add(cube);
            }
        }
    }]);

    return NavMenu;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], NavMenu);

},{"../../js/three.min.js":1,"../services/game.service":16,"@angular/core":"@angular/core"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Objectprops = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Objectprops = exports.Objectprops = (_dec = (0, _core.Component)({
    selector: 'objectprops',
    template: '\n        <div style="height:50%;width:100%">\n            Props:\n            <!--<button (click)="refresh()">Refresh</button>-->\n            <div *ngIf="gameservice.selectobject">\n                Object: {{gameservice.selectobject.uuid}}<button (click)="meshdelete()">Delete</button>\n                <br><label>px:<input type="number" ng-model=\'val | number: 2\' [ngModel]="gameservice.selectobject.position.x" value="{{gameservice.selectobject.position.x}}" (ngModelChange)="objposx($event)" step ="0.000001" /></label>\n                <br><label>py:<input type="number" [ngModel]="gameservice.selectobject.position.y" value="{{gameservice.selectobject.position.y}}" (ngModelChange)="objposy($event)" step ="0.000001" /></label>\n                <br><label>pz:<input type="number" [ngModel]="gameservice.selectobject.position.z" value="{{gameservice.selectobject.position.z}}" (ngModelChange)="objposz($event)" step ="0.000001" /></label>\n            </div>\n        </div>\n    '
}), _dec(_class = function () {
    function Objectprops(gameservice) {
        _classCallCheck(this, Objectprops);

        this.posx = 0;

        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    _createClass(Objectprops, [{
        key: 'objposx',
        value: function objposx(value) {
            console.log(value);
            console.log("pos x");
            if (this.gameservice.selectobject != null) {
                this.gameservice.selectobject.position.x = value;
            }
        }
    }, {
        key: 'objposy',
        value: function objposy(value) {
            console.log(value);
            console.log("pos y");
            if (this.gameservice.selectobject != null) {
                this.gameservice.selectobject.position.y = value;
            }
        }
    }, {
        key: 'objposz',
        value: function objposz(value) {
            console.log(value);
            console.log("pos z");
            if (this.gameservice.selectobject != null) {
                this.gameservice.selectobject.position.z = value;
            }
        }
    }, {
        key: 'meshdelete',
        value: function meshdelete() {
            console.log("delete");
            if (this.gameservice.selectobject != null) {
                //this.gameservice.selectobject.dispose();
                this.gameservice.scene.remove(this.gameservice.selectobject);
                this.gameservice.selectobject = null;
            }
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            //console.log("refresh");
            //console.log(this.gameservice);
            //console.log(this.gameservice.scene.children[0]);
        }
    }]);

    return Objectprops;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], Objectprops);

},{"../services/game.service":16,"@angular/core":"@angular/core"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SceneList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SceneList = exports.SceneList = (_dec = (0, _core.Component)({
    selector: 'scene-list',
    template: '\n        <div style="height:50%;width:100%">\n            Scene\n            <!--<button (click)="refresh()">Refresh</button>-->\n            <div *ngIf="gameservice.scene">\n                <ul>\n                <li *ngFor="let obj of gameservice.scene.meshes">\n                    <label (click)="selectobject(obj)">{{obj.name}}</label>\n                </li>\n                </ul>\n            </div>\n        </div>\n    '
}), _dec(_class = function () {
    function SceneList(gameservice) {
        _classCallCheck(this, SceneList);

        //console.log(gameservice);
        this.gameservice = gameservice;
    }

    _createClass(SceneList, [{
        key: 'selectobject',
        value: function selectobject(_obj) {
            console.log("scene object selected:");
            console.log(_obj);
            this.gameservice.selectobject = _obj;
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            console.log("refresh");
            console.log(this.gameservice);
            console.log(this.gameservice.scene.children);
        }
    }]);

    return SceneList;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], SceneList);

},{"../services/game.service":16,"@angular/core":"@angular/core"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScriptEditorExplore = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptEditorExplore = exports.ScriptEditorExplore = (_dec = (0, _core.Component)({
    selector: 'scripteditorexplore',
    template: '\n        <div style="width:100%;">\n        Panel directory folder\n        </div>\n    '
}), _dec(_class = function ScriptEditorExplore() {
    _classCallCheck(this, ScriptEditorExplore);
}) || _class);

},{"@angular/core":"@angular/core"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScriptEditorLayout = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptEditorLayout = exports.ScriptEditorLayout = (_dec = (0, _core.Component)({
    selector: 'scripteditorlayout',
    template: '\n        <div style="height:100%;width:100%;">\n            <div style="width:20%;height:100%;float:left;margin:0;padding:0;">\n                <scripteditormenu></scripteditormenu>\n                <scripteditorexplore></scripteditorexplore>\n            </div>\n            <div style="width:80%;height:100%;float:left;">\n            <codeeditor-component style="margin:0;padding:0;"></codeeditor-component>\n            </div>\n        </div>\n    '
}), _dec(_class = function ScriptEditorLayout() {
    _classCallCheck(this, ScriptEditorLayout);
}) || _class);

},{"@angular/core":"@angular/core"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScriptEditorMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptEditorMenu = exports.ScriptEditorMenu = (_dec = (0, _core.Component)({
    selector: 'scripteditormenu',
    template: '\n        Action\n        <button (click)="ScriptReload();">Reload</button>\n        <button (click)="ScriptSave();">Save</button>\n        <button (click)="ScriptRun();">Run</button>\n        <button (click)="ScriptCreate();">Create</button>\n        <button (click)="ScriptDelete();">Delete</button>\n    '
}), _dec(_class = function () {
    function ScriptEditorMenu() {
        _classCallCheck(this, ScriptEditorMenu);
    }

    _createClass(ScriptEditorMenu, [{
        key: 'ScriptReload',
        value: function ScriptReload() {
            console.log('Reload');
        }
    }, {
        key: 'ScriptSave',
        value: function ScriptSave() {
            console.log('Save');
        }
    }, {
        key: 'ScriptRun',
        value: function ScriptRun() {
            console.log('Run');
        }
    }, {
        key: 'ScriptDelete',
        value: function ScriptDelete() {
            console.log('Delete');
        }
    }, {
        key: 'ScriptCreate',
        value: function ScriptCreate() {
            console.log('Create');
        }
    }]);

    return ScriptEditorMenu;
}()) || _class);

},{"@angular/core":"@angular/core"}],15:[function(require,module,exports){
'use strict';

require('babel-polyfill');

require('zone.js/dist/zone');

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _app = require('./app.module');

//main entry and setup boot

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);

},{"./app.module":3,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameService = undefined;

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameService = exports.GameService = (_dec = (0, _core.Injectable)(), _dec(_class = function GameService() {
    _classCallCheck(this, GameService);

    this.scene = null;
    this.selectobject = null;
    this.app = null;
}) || _class);

},{"@angular/core":"@angular/core"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Threejs_framework = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _threejs_framework_network = require('./threejs_framework_network');

var _threejs_framework_loadingscreen = require('./threejs_framework_loadingscreen');

var _threejs_framework_physics = require('./threejs_framework_physics');

var _threejs_framework_editor = require('./threejs_framework_editor');

var _threejs_framework_scene = require('./threejs_framework_scene');

var _threejs_framework_hud = require('./threejs_framework_hud');

var _threejs_framework_ui = require('./threejs_framework_ui');

var _threejs_framework_loader = require('./threejs_framework_loader');

var _threejs_framework_script = require('./threejs_framework_script');

var _threejs_framework_gundb = require('./threejs_framework_gundb');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//===============================================
//main class entry
//===============================================
var Threejs_framework = exports.Threejs_framework = function () {
	function Threejs_framework(args) {
		_classCallCheck(this, Threejs_framework);

		var self = this;
		if (!args) {
			args = {};
			//console.log("no args...");
		}
		var self = this;

		this.version = "0.0.1";
		this.antialias = true; //threejs
		this.bfixedassetpath = true;
		this.reload = false; //web browser editor reload url

		this.ToRad = 0.0174532925199432957;

		this.scene = null;
		this.scenehud = null;
		this.camera = null;
		this.camerahud = null;
		this.canvas = null;
		this.renderer = null;

		this.objects = [];
		this.raycaster = new THREE.Raycaster();
		this.mouse = new THREE.Vector2();

		this.bablephysics = false;
		this.physicsIndex = 2;
		this.setPhysicsType = ['Oimo.js', 'Cannon.js', 'Ammo.js'];
		this.timeSteptimeStep = 1 / 60;
		this.world = null;
		this.meshs = [];
		this.bodies = [];
		this.grounds = [];

		this.scenenodes = []; //editor scene
		this.mapscenenodes = [];
		this.scriptcomponents = []; //javascript

		this.mappdata;
		this.scriptcount = 0;
		this.loader = new THREE.XHRLoader();

		//this.jspath = 'https://lightnet.github.io/bes-threejs/';
		this.jspath = '';

		this.scriptlist = ['../js/libs/threex.domevents.js', '../js/loaders/FBXLoader.js', '../js/loaders/collada/Animation.js', '../js/loaders/collada/AnimationHandler.js', '../js/loaders/collada/KeyFrameAnimation.js', '../js/loaders/ColladaLoader.js', '../js/loaders/OBJLoader.js', '../js/controls/TrackballControls.js', '../js/controls/OrbitControls.js', '../js/controls/FirstPersonControls.js', '../js/renderers/CSS3DRenderer.js'
		//'../js/postprocessing/EffectComposer.js',
		//'../js/postprocessing/RenderPass.js',
		//'../js/postprocessing/ClearPass.js',
		//'../js/postprocessing/MaskPass.js',
		//'../js/postprocessing/ShaderPass.js'
		];

		//this.scriptlist.push('/js/libs/three-interface.min.js'); //css3d

		//new Threejs_framework_loadingscreen(this);
		new _threejs_framework_network.Threejs_framework_network(this);
		new _threejs_framework_physics.Threejs_framework_physics(this);
		new _threejs_framework_editor.Threejs_framework_editor(this);
		new _threejs_framework_scene.Threejs_framework_scene(this);
		new _threejs_framework_hud.Threejs_framework_hud(this);
		new _threejs_framework_ui.Threejs_framework_ui(this);
		new _threejs_framework_loader.Threejs_framework_loader(this);
		new _threejs_framework_gundb.Threejs_framework_gundb(this);
		new _threejs_framework_script.Threejs_framework_script(this);

		//this.initloadingscreen();
		//this.showloadingscreen();
		//this.hideloadingscreen();

		if (args != null) {
			if (args['mode'] != null) {
				this.mode = args['mode'];
			} else {
				this.mode = "game;";
			}
			console.log("mode: " + this.mode);
			if (args['bupdateobjects'] != null) {
				this.bupdateobjects = args['bupdateobjects'];
			}
			if (args['bfixedassetpath'] != null) {
				this.bfixedassetpath = args['bfixedassetpath'];
			}
			if (args['bablephysics'] != null) {
				this.bablephysics = args['bablephysics'];
			}
			//this need to be last else it variable are not assign
			if (args['onload'] == true) {
				console.log("load listen");
				this.addListener("load", window, function () {
					//console.log('init window listen threejs setup... ');
					//_this.init();
					self.loadlibraries();
				});
			} else {
				console.log("load");
				//console.log('init threejs setup...');
				//this.init();
				this.loadlibraries();
			}

			if (args['load'] != null) {
				this.bmap = true;
				this.mapurl = args['load'];
			} else {
				this.bmap = false;
				this.mapurl = "";
			}
			//console.log("Map: " + this.bmap + " url: "+ this.mapurl);
		}
	}

	//RFC Type 4 (random) schema


	_createClass(Threejs_framework, [{
		key: 'uuid',
		value: function uuid() {
			var buf = new Uint32Array(4);
			window.crypto.getRandomValues(buf);
			var idx = -1;
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				idx++;
				var r = buf[idx >> 3] >> idx % 8 * 4 & 15;
				var v = c == 'x' ? r : r & 0x3 | 0x8;
				return v.toString(16);
			});
		}
	}, {
		key: 'setup_render',

		/*
  initCannonPhysics() {
  if (typeof CANNON != undefined) {
  this.world = new CANNON.World();
  this.world.gravity.set(0, -9.82, 0);
  this.world.broadphase = new CANNON.NaiveBroadphase();
  this.world.solver.iterations = 10;
  }
  //this.createCannonScene();
  }
  updateCannonPhysics() {
  if ((typeof this.world == 'undefined') || (this.world == null)) {
  return;
  }
  if (typeof CANNON != undefined) {
  this.world.step(this.timeSteptimeStep);
  }
  }
  destroyCannonPhysics() {
  console.log('destroyCannonPhysics');
  }
  initAmmoPhysics() {
  //https://github.com/kripken/ammo.js/blob/master/examples/hello_world.js
  if (typeof Ammo != undefined) {
  console.log('init Ammo');
  this.collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
  this.dispatcher = this.dp = new Ammo.btCollisionDispatcher(this.collisionConfiguration);
  //console.log(dispatcher);
  this.overlappingPairCache = new Ammo.btDbvtBroadphase();
  this.solver = new Ammo.btSequentialImpulseConstraintSolver();
  this.world = new Ammo.btDiscreteDynamicsWorld(this.dispatcher, this.overlappingPairCache, this.solver, this.collisionConfiguration);
  this.world.setGravity(new Ammo.btVector3(0, -10, 0));
  this.trans = new Ammo.btTransform(); // taking this out of the loop below us reduces the leaking
  //this.createAmmoScene();
  }
  }
  updateAmmoPhysics() {
  if ((typeof this.world == 'undefined') || (this.world == null)) {
  return;
  }
  if (typeof Ammo != undefined) {
  this.world.stepSimulation(1 / 60, 10);
          //console.log(this.world);
  }
  }
  destroyAmmoPhysics() {
  //https://github.com/kripken/ammo.js/blob/master/examples/hello_world.js
  // Delete objects we created through |new|. We just do a few of them here, but you should do them all if you are not shutting down ammo.js
  Ammo.destroy(this.collisionConfiguration);
  Ammo.destroy(this.dispatcher);
  Ammo.destroy(this.overlappingPairCache);
  Ammo.destroy(this.solver);
  }
  initOimoPhysics() {
  if (typeof OIMO != undefined) {
  this.world = new OIMO.World(1 / 60, 2);
  //this.world.gravity = new OIMO.Vec3(0, -1, 0);
  this.world.clear();
  //this.createOimoScene();
  //this.infos = document.getElementById("info");
  }
  }
  updateOimoPhysics() {
  //https://github.com/lo-th/Oimo.js/blob/gh-pages/test_moving.html
  if ((typeof this.world == 'undefined') || (this.world == null)) {
  return;
  }
  this.world.step();
  }
  destroyOimoPhysics() {
      console.log('destroyOimoPhysics');
  }
  updatePhysics() {
      //console.log("p");
  if ((typeof this.world == 'undefined') || (this.world == null)) {
  return;
  }
  if (this.setPhysicsType[this.physicsIndex] == 'Oimo.js') {
  this.updateOimoPhysics();
  }
  if (this.setPhysicsType[this.physicsIndex] == 'Cannon.js') {
  this.updateCannonPhysics();
  }
  if (this.setPhysicsType[this.physicsIndex] == 'Ammo.js') {
  this.updateAmmoPhysics();
  }
  }
  initPhysics() {
        if (this.setPhysicsType[this.physicsIndex] == 'Oimo.js') {
          this.initOimoPhysics();
      }
      if (this.setPhysicsType[this.physicsIndex] == 'Cannon.js') {
          this.initCannonPhysics();
      }
      if (this.setPhysicsType[this.physicsIndex] == 'Ammo.js') {
          this.initAmmoPhysics();
      }
  console.log("init physics type:" + this.setPhysicsType[this.physicsIndex]);
  }
  */

		value: function setup_render() {
			//this.setup_network();

			if (this.mode == "css3dwebgl" || this.mode == "editor") {
				//css3d render
				this.setup_css3d();
			}

			//webgl render
			this.setup_webgl();
			this.setup_hud();
			this.setup_renderpass();

			//if(this.bmap){
			//this.load();
			//}

			//render pass with two secnes
			this.render();
			if (this.bmap == false) {
				//this.hideloadingscreen();
			}
		}
	}, {
		key: 'init',
		value: function init() {
			this.setup_render();
			//this.hideloadingscreen();
			//if(this.bablephysics){
			//this.initPhysics();
			//}
			//console.log("game init");
		}
	}, {
		key: 'update',
		value: function update() {}
	}]);

	return Threejs_framework;
}();

},{"./threejs_framework_editor":18,"./threejs_framework_gundb":19,"./threejs_framework_hud":20,"./threejs_framework_loader":21,"./threejs_framework_loadingscreen":22,"./threejs_framework_network":24,"./threejs_framework_physics":25,"./threejs_framework_scene":26,"./threejs_framework_script":27,"./threejs_framework_ui":28}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_framework_editor = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_framework_module = require("./threejs_framework_module");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_framework_editor = exports.Threejs_framework_editor = function (_Threejs_framework_mo) {
    _inherits(Threejs_framework_editor, _Threejs_framework_mo);

    function Threejs_framework_editor(args) {
        _classCallCheck(this, Threejs_framework_editor);

        return _possibleConstructorReturn(this, (Threejs_framework_editor.__proto__ || Object.getPrototypeOf(Threejs_framework_editor)).call(this, args));
    }

    _createClass(Threejs_framework_editor, [{
        key: "setup_editor",
        value: function setup_editor(group) {
            var _ref;

            //ASSETS
            //autowidth:true,
            var assetstable = new webix.ui({
                container: "assets",
                view: "datatable",
                columns: [{ id: "filetype", header: "Type" }, { id: "title", header: "Assets", fillspace: true }],
                data: [{ id: 1, title: "test" }, { id: 2, title: "test2" }],
                select: "row",
                on: {
                    "onItemClick": function onItemClick(id, e, trg) {
                        webix.message("Click on row: " + id.row + ", column: " + id.column);
                    }
                } //default click behavior that is true for any datatable cell
            });

            assetstable.add({
                title: "Best film ever"
            });

            var _div_l = document.createElement('div');
            _div_l.style.width = '480px';
            _div_l.style.height = '360px';
            _div_l.style.backgroundColor = '#000';

            //var _element_l  = document.createElement('div');
            //_element_l.style.width = '480px';
            //_element_l.style.height = '360px';
            //_element_l.style.border = '0px';
            //_element_l.innerHTML = 'Plain text inside a div.<br>Assets?';
            //_element_l.className = 'three-div';
            //_div_l.appendChild( _element_l );

            var assetsid = document.getElementById('assets');
            _div_l.appendChild(assetsid);

            var object = new THREE.CSS3DObject(_div_l);
            object.position.set(-600, 100, 10);
            object.rotation.y = 0;

            group.add(object);

            // SCENE
            var _div_r = document.createElement('div');
            _div_r.style.width = '480px';
            _div_r.style.height = '360px';
            _div_r.style.backgroundColor = '#000';

            //var _element_r  = document.createElement('div');
            //_element_r.style.width = '480px';
            //_element_r.style.height = '360px';
            //_element_r.style.border = '0px';
            //_element_r.innerHTML = 'Plain text inside a div.<br>Scene?';
            //_element_r.className = 'three-div';
            //_div_r.appendChild( _element_r );

            var scenetable = new webix.ui((_ref = {
                container: "scene",
                view: "tree",
                select: true,
                data: [{ id: "root", value: "Cars", open: true, data: [{ id: "1", open: true, value: "Toyota", data: [{ id: "1.1", value: "Avalon" }, { id: "1.2", value: "Corolla" }, { id: "1.3", value: "Camry" }] }, { id: "2", open: true, value: "Skoda", data: [{ id: "2.1", value: "Octavia" }, { id: "2.2", value: "Superb" }] }] }]
            }, _defineProperty(_ref, "select", true), _defineProperty(_ref, "on", { "onItemClick": function onItemClick(id, e, node) {
                    //alert("item has just been clicked");
                    var item = this.getItem(id);
                    console.log(item);
                } }), _ref));
            //http://docs.webix.com/api__link__ui.tree_onitemclick_event.html
            //console.log(scenetable);

            scenetable.add({ value: "New item" }, 0);

            //scenetable.add( {value:"New item"}, 0, parentId);
            //var nodeId = tree.getSelectedId();
            scenetable.add({ value: "New item" }, 0, 2);

            var sceneid = document.getElementById('scene');
            _div_r.appendChild(sceneid);

            var object = new THREE.CSS3DObject(_div_r);
            object.position.set(600, 100, 10);
            object.rotation.y = 0;

            group.add(object);
        }

        //===============================================
        // Tool bar
        //===============================================

    }, {
        key: "toolbar",
        value: function toolbar(action) {
            //console.log(action);
            if (action == 'EditorComponents:Object3D') {
                this.createshape({ shape: "Object3D" });
            }
            if (action == 'EditorComponents:Scene') {
                this.createshape({ shape: "Scene" });
            }
            if (action == 'EditorComponents:BoxGeometry') {
                this.createshape({ shape: "BoxGeometry" });
            }
            if (action == 'EditorComponents:CylinderGeometry') {
                this.createshape({ shape: "CylinderGeometry" });
            }
            if (action == 'EditorComponents:CircleGeometry') {
                this.createshape({ shape: "CircleGeometry" });
            }
            if (action == 'EditorComponents:PlaneGeometry') {
                this.createshape({ shape: "PlaneGeometry" });
            }
            if (action == 'EditorComponents:SphereGeometry') {
                this.createshape({ shape: "SphereGeometry" });
            }
            if (action == 'EditorComponents:DodecahedronGeometry') {
                this.createshape({ shape: "DodecahedronGeometry" });
            }
            if (action == 'EditorComponents:IcosahedronGeometry') {
                this.createshape({ shape: "IcosahedronGeometry" });
            }
            if (action == 'EditorComponents:OctahedronGeometry') {
                this.createshape({ shape: "OctahedronGeometry" });
            }
            if (action == 'EditorComponents:RingGeometry') {
                this.createshape({ shape: "RingGeometry" });
            }
            if (action == 'EditorComponents:TetrahedronGeometry') {
                this.createshape({ shape: "TetrahedronGeometry" });
            }
            if (action == 'EditorComponents:TorusGeometry') {
                this.createshape({ shape: "TorusGeometry" });
            }
            if (action == 'EditorComponents:TorusKnotGeometry') {
                this.createshape({ shape: "TorusKnotGeometry" });
            }
            if (action == 'EditorComponents:TextGeometry') {
                this.createshape({ shape: "TextGeometry" });
            }
            if (action == 'EditorComponents:ArrowHelper') {
                this.createshape({ shape: "ArrowHelper" });
            }
            if (action == 'EditorComponents:AxisHelper') {
                this.createshape({ shape: "AxisHelper" });
            }
            if (action == 'EditorComponents:BoundingBoxHelper') {
                this.createshape({ shape: "BoundingBoxHelper" });
            }
            if (action == 'EditorComponents:EdgesHelper') {
                this.createshape({ shape: "EdgesHelper" });
            }
            if (action == 'EditorComponents:FaceNormalsHelper') {
                this.createshape({ shape: "FaceNormalsHelper" });
            }
            if (action == 'EditorComponents:GridHelper') {
                this.createshape({ shape: "GridHelper" });
            }
            if (action == 'EditorComponents:PointLightHelper') {
                this.createshape({ shape: "PointLightHelper" });
            }
            if (action == 'EditorComponents:SpotLightHelper') {
                this.createshape({ shape: "SpotLightHelper" });
            }
            if (action == 'EditorComponents:VertexNormalsHelper') {
                this.createshape({ shape: "VertexNormalsHelper" });
            }
            if (action == 'EditorComponents:WireframeHelper') {
                this.createshape({ shape: "WireframeHelper" });
            }
            if (action == 'EditorComponents:Sprite2D') {
                this.createshape({ shape: "Sprite" });
            }
            if (action == 'EditorComponents:CubeCamera') {
                this.createObjectScene({ object: 'CubeCamera' });
            }
            if (action == 'EditorComponents:PerspectiveCamera') {
                this.createObjectScene({ object: 'PerspectiveCamera' });
            }
            if (action == 'EditorComponents:OrthographicCamera') {
                this.createObjectScene({ object: 'OrthographicCamera' });
            }
            if (action == 'EditorComponents:AmbientLight') {
                this.createObjectScene({ object: 'AmbientLight' });
            }
            if (action == 'EditorComponents:DirectionalLight') {
                this.createObjectScene({ object: 'DirectionalLight' });
            }
            if (action == 'EditorComponents:HemisphereLight') {
                this.createObjectScene({ object: 'HemisphereLight' });
            }
            if (action == 'EditorComponents:Light') {
                this.createObjectScene({ object: 'Light' });
            }
            if (action == 'EditorComponents:PointLight') {
                this.createObjectScene({ object: 'PointLight' });
            }
            if (action == 'EditorComponents:SpotLight') {
                this.createObjectScene({ object: 'SpotLight' });
            }
        }

        //===============================================
        //
        //===============================================

    }, {
        key: "createObjectScene",
        value: function createObjectScene(args) {
            if (args != null) {
                if (args['object'] != null) {
                    var objscene;
                    if (args['object'] == 'PerspectiveCamera') {
                        objscene = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
                        objscene.name = "PerspectiveCamera";
                        var cameraHelper = new THREE.CameraHelper(objscene);
                        //this.scene.add(cameraHelper);
                        objscene.add(cameraHelper);
                    }
                    if (args['object'] == 'OrthographicCamera') {
                        objscene = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 10000);
                        objscene.name = "OrthographicCamera";
                        var cameraHelper = new THREE.CameraHelper(objscene);
                        objscene.helper = cameraHelper;
                        this.scene.add(cameraHelper);
                    }
                    if (args['object'] == 'CubeCamera') {
                        objscene = new THREE.CubeCamera(1, 100000, 128);
                        objscene.name = "CubeCamera";
                    }
                    if (args['object'] == 'AmbientLight') {
                        objscene = new THREE.AmbientLight(0x404040); // soft white light
                        objscene.name = "AmbientLight";
                    }
                    if (args['object'] == 'DirectionalLight') {
                        objscene = new THREE.DirectionalLight(0xffffff, 0.5);
                        objscene.position.set(0, 1, 0);
                        objscene.name = "DirectionalLight";
                        var dlightHelper = new THREE.DirectionalLightHelper(objscene, 5);
                        objscene.helper = dlightHelper;
                        this.scene.add(dlightHelper);
                    }
                    if (args['object'] == 'HemisphereLight') {
                        objscene = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
                        objscene.name = "HemisphereLight";
                        var HLightHelper = new THREE.HemisphereLightHelper(objscene, 5);
                        objscene.helper = HLightHelper;
                        this.scene.add(HLightHelper);
                    }
                    if (args['object'] == 'Light') {
                        objscene = new THREE.Light(0xff0000);
                        objscene.name = "Light";
                    }
                    if (args['object'] == 'PointLight') {
                        objscene = new THREE.PointLight(0xff0000, 1, 100);
                        objscene.name = "PointLight";
                        var pointLightHelper = new THREE.PointLightHelper(objscene, 5);
                        objscene.helper = pointLightHelper;
                        this.scene.add(pointLightHelper);
                    }
                    if (args['object'] == 'SpotLight') {
                        objscene = new THREE.SpotLight(0xffffff);
                        objscene.name = "SpotLight";
                        var spotLightHelper = new THREE.SpotLightHelper(objscene);
                        objscene.helper = spotLightHelper;
                        this.scene.add(spotLightHelper);
                    }
                    if (objscene != null) {
                        if (this.selectobject != null) {
                            this.selectobject.add(objscene); //attach to current selected
                        } else {
                            this.scene.add(objscene);
                        }
                        this.scenenodes.push(objscene);
                        //console.log('create object?');
                        console.log(objscene);
                        NodeSelectObject({ object: objscene });
                        var tmpmap = this.copyobjectprops(objscene);
                        //console.log(tmpmap);
                        this.mapscenenodes.push(tmpmap);
                    }
                }
            }
        }

        //===============================================
        //
        //===============================================

    }, {
        key: "parentObj",
        value: function parentObj(object, uuid) {
            //console.log("ADDED");
            //var geometry = new THREE.BoxGeometry( 1, 1, 1 );
            //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            //var cube = new THREE.Mesh( geometry, material );
            //this.scene.add(cube);
            //this.scene.add(object);
            //this.camera.position.z = 5;
            for (var i = 0; i < this.scenenodes.length; i++) {
                if (this.scenenodes[i].uuid == uuid) {
                    //console.log("added?");
                    this.scenenodes[i].add(object);
                    //console.log(this.scenenodes[i]);
                    //console.log("===?");
                    break;
                }
            }
        }
    }, {
        key: "parseObject",
        value: function parseObject(strobj) {
            var tmpobj;
            var geometry;
            var objmesh;
            var edges;
            var material;
            var obj;

            material = new THREE.MeshPhongMaterial({
                color: 0x156289,
                polygonOffset: true,
                polygonOffsetFactor: 1,
                polygonOffsetUnits: 1
            });
            if (typeof strobj == 'string') {
                obj = JSON.parse(strobj);
            } else {
                obj = strobj;
            }
            //console.log(obj);
            //this.mapscenenodes.push(obj);
            if (obj.type == "Object3D") {
                objmesh = new THREE.Object3D();
                objmesh.uuid = obj.uuid;
                objmesh.name = obj.name;
            }
            if (obj.type == "CubeCamera") {
                objmesh = new THREE.CubeCamera(obj.near, obj.far, obj.cubeResolution);
                objmesh.uuid = obj.uuid;
                objmesh.name = obj.name;
            }
            if (obj.type == "OrthographicCamera") {
                objmesh = new THREE.OrthographicCamera(obj.left, obj.right, obj.top, obj.bottom, obj.near, obj.far);
                objmesh.uuid = obj.uuid;
                objmesh.name = obj.name;
                var cameraHelper = new THREE.CameraHelper(objmesh);
                objmesh.helper = cameraHelper;
                this.scene.add(cameraHelper);
            }
            if (obj.type == "PerspectiveCamera") {
                objmesh = new THREE.PerspectiveCamera(obj.fov, obj.aspect, obj.near, obj.far);
                objmesh.uuid = obj.uuid;
                objmesh.name = obj.name;
                var cameraHelper = new THREE.CameraHelper(objmesh);
                objmesh.helper = cameraHelper;
                this.scene.add(cameraHelper);
            }
            if (obj.type == "AmbientLight") {
                objmesh = new THREE.AmbientLight(obj.color, obj.intensity);
                objmesh.uuid = obj.uuid;
                objmesh.name = obj.name;
            }
            if (obj.type == "DirectionalLight") {
                objmesh = new THREE.DirectionalLight(obj.color, obj.intensity);
                objmesh.uuid = obj.uuid;
                objmesh.name = obj.name;
                var dlightHelper = new THREE.DirectionalLightHelper(objmesh, 5);
                objmesh.helper = dlightHelper;
                this.scene.add(dlightHelper);
            }
            if (obj.type == "HemisphereLight") {
                objmesh = new THREE.HemisphereLight(obj.skyColor, obj.groundColor, obj.intensity);
                //console.log(obj.skyColor);
                objmesh.uuid = obj.uuid;
                objmesh.name = obj.name;
                var HLightHelper = new THREE.HemisphereLightHelper(objmesh, 5);
                objmesh.helper = HLightHelper;
                this.scene.add(HLightHelper);
            }
            if (obj.type == "Light") {
                objmesh = new THREE.Light(obj.color, obj.intensity);
                objmesh.uuid = obj.uuid;
                objmesh.name = obj.name;
            }
            if (obj.type == "PointLight") {
                objmesh = new THREE.PointLight(obj.color, obj.intensity, obj.distance, obj.decay);
                objmesh.uuid = obj.uuid;
                objmesh.name = obj.name;
                var pointLightHelper = new THREE.PointLightHelper(objmesh, 5);
                objmesh.helper = pointLightHelper;
                this.scene.add(pointLightHelper);
            }
            if (obj.type == "SpotLight") {
                objmesh = new THREE.SpotLight(obj.color, obj.intensity, obj.distance, obj.angle, obj.penumbra, obj.decay);
                objmesh.uuid = obj.uuid;
                objmesh.name = obj.name;
                var spotLightHelper = new THREE.SpotLightHelper(objmesh);
                objmesh.helper = spotLightHelper;
                this.scene.add(spotLightHelper);
            }
            if (obj.type == "Scene") {
                objmesh = new THREE.Scene();
                objmesh.uuid = obj.uuid;
                objmesh.name = obj.name;
            }
            //console.log(objmesh);
            if (obj.type == "Mesh") {
                if (obj.geometrytype == "BoxGeometry") {
                    geometry = new THREE.BoxGeometry(obj.parameters.width, obj.parameters.height, obj.parameters.depth, obj.parameters.widthSegments, obj.parameters.heightSegments, obj.parameters.depthSegments);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
                if (obj.geometrytype == "CircleGeometry") {
                    geometry = new THREE.CircleGeometry(obj.parameters.radius, obj.parameters.segments, obj.parameters.thetaStart, obj.parameters.thetaLength);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
                if (obj.geometrytype == "CylinderGeometry") {
                    geometry = new THREE.CylinderGeometry(obj.parameters.radiusTop, obj.parameters.radiusBottom, obj.parameters.height, obj.parameters.radiusSegments, obj.parameters.heightSegments, obj.parameters.openEnded, obj.parameters.thetaStart, obj.parameters.thetaLength);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
                if (obj.geometrytype == "PlaneGeometry") {
                    geometry = new THREE.PlaneGeometry(obj.parameters.width, obj.parameters.height, obj.parameters.widthSegments, obj.parameters.heightSegments);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
                if (obj.geometrytype == "PlaneGeometry") {
                    geometry = new THREE.PlaneGeometry(obj.parameters.width, obj.parameters.height, obj.parameters.widthSegments, obj.parameters.heightSegments);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
                if (obj.geometrytype == "SphereGeometry") {
                    geometry = new THREE.SphereGeometry(obj.parameters.radius, obj.parameters.widthSegments, obj.parameters.heightSegments, obj.parameters.phiStart, obj.parameters.phiLength, obj.parameters.thetaStart, obj.parameters.thetaLength);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
                if (obj.geometrytype == "DodecahedronGeometry") {
                    geometry = new THREE.DodecahedronGeometry(obj.parameters.radius, obj.parameters.detail);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
                if (obj.geometrytype == "IcosahedronGeometry") {
                    geometry = new THREE.IcosahedronGeometry(obj.parameters.radius, obj.parameters.detail);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
                if (obj.geometrytype == "OctahedronGeometry") {
                    geometry = new THREE.OctahedronGeometry(obj.parameters.radius, obj.parameters.detail);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
                if (obj.geometrytype == "RingGeometry") {
                    geometry = new THREE.RingGeometry(obj.parameters.innerRadius, obj.parameters.outerRadius, obj.parameters.thetaSegments, obj.parameters.phiSegments, obj.parameters.thetaStart, obj.parameters.thetaLength);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
                if (obj.geometrytype == "TetrahedronGeometry") {
                    geometry = new THREE.TetrahedronGeometry(obj.parameters.radius, obj.parameters.detail);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
                if (obj.geometrytype == "TorusGeometry") {
                    geometry = new THREE.TorusGeometry(obj.parameters.radius, obj.parameters.tube, obj.parameters.radialSegments, obj.parameters.tubularSegments, obj.parameters.arc);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
                if (obj.geometrytype == "TorusKnotGeometry") {
                    geometry = new THREE.TorusKnotGeometry(obj.parameters.radius, obj.parameters.tube, obj.parameters.radialSegments, obj.parameters.tubularSegments, obj.parameters.p, obj.parameters.q, obj.parameters.heightScale);
                    objmesh = new THREE.Mesh(geometry, material);
                    objmesh.uuid = obj.uuid;
                    objmesh.name = obj.name;
                }
            }
            //check if script component exist
            if (obj.script != null) {
                if (objmesh != null) {
                    objmesh.script = {};
                    for (var os in obj.script) {
                        this.createComponent(objmesh, os);
                        for (var sv in obj.script[os]) {
                            if (typeof obj.script[os][sv] != 'function') {
                                //need make object data variable work current doesn't work
                                if (_typeof(obj.script[os][sv]) == 'object') {
                                    //console.log('OBJECT    script');
                                    //console.log('obj.script'+ os+'.'+sv);
                                    if (Array.isArray(obj.script[os][sv])) {
                                        //console.log('found array object');
                                        objmesh.script[os][sv] = obj.script[os][sv];
                                    } else {
                                        if (obj.script[os][sv].type != null) {
                                            //console.log('found type! :'+obj.script[os][sv].type);
                                            if (obj.script[os][sv].type == 'THREE.Vector2') {
                                                objmesh.script[os][sv] = new THREE.Vector2(obj.script[os][sv].x, obj.script[os][sv].y);
                                            }
                                            if (obj.script[os][sv].type == 'THREE.Vector3') {
                                                objmesh.script[os][sv] = new THREE.Vector3(obj.script[os][sv].x, obj.script[os][sv].y, obj.script[os][sv].z);
                                            }
                                            if (obj.script[os][sv].type == 'THREE.Vector4') {
                                                objmesh.script[os][sv] = new THREE.Vector4(obj.script[os][sv].x, obj.script[os][sv].y, obj.script[os][sv].z, obj.script[os][sv].w);
                                            }
                                            if (obj.script[os][sv].type == 'THREE.Quaternion') {
                                                objmesh.script[os][sv] = new THREE.Quaternion(obj.script[os][sv].x, obj.script[os][sv].y, obj.script[os][sv].z, obj.script[os][sv].w);
                                            }
                                        }
                                    }
                                } else {
                                    //console.log('Script object:'+os);
                                    //console.log('VAR OTHER:'+sv);
                                    //console.log(typeof obj.script[os][sv]);
                                    //console.log(obj.script[os][sv]);
                                    //console.log(objmesh.script[os]);
                                    //console.log('VAR OTHER:'+sv);
                                    objmesh.script[os][sv] = obj.script[os][sv]; //copy variable
                                }
                            }
                        }
                    }
                }
            }
            if (objmesh != null) {
                //console.log(obj.position);
                //console.log(parseFloat(obj.position.x),parseFloat(obj.position.y),parseFloat(obj.position.z));
                objmesh.position.set(parseFloat(obj.position.x), parseFloat(obj.position.y), parseFloat(obj.position.z));
                //console.log(obj.rotation);
                objmesh.rotation.x = parseFloat(obj.rotation._x);
                objmesh.rotation.y = parseFloat(obj.rotation._y);
                objmesh.rotation.z = parseFloat(obj.rotation._z);
                objmesh.scale.set(parseFloat(obj.scale.x), parseFloat(obj.scale.y), parseFloat(obj.scale.z));
                //objmesh.rotation = obj.rotation;
                //objmesh.scale = obj.scale;
                tmpobj = objmesh;
            }
            if (tmpobj != null) {
                /*
                if(this.selectobject != null){
                    this.selectobject.add(tmpobj); //attach to current selected
                }else{
                    this.scene.add(tmpobj);
                }
                */
                this.parentObj(tmpobj, obj.parent);
                //console.log(tmpobj);
                this.scenenodes.push(tmpobj);
                //NodeSelectObject({object:tmpobj});
                var tmpmap = this.copyobjectprops(objmesh);
                //console.log("obj");
                //console.log(obj);
                //console.log("tmpmap");
                //console.log(tmpmap);
                this.mapscenenodes.push(tmpmap);
                //console.log(tmpobj);
                tmpobj = null;
                geometry = null;
                objmesh = null;
                edges = null;
                material = null;
            }
        }
    }, {
        key: "updateGroupGeometry",
        value: function updateGroupGeometry(mesh, geometry) {
            mesh.geometry.dispose();
            mesh.geometry = geometry;
        }
    }, {
        key: "SetParamGeom",
        value: function SetParamGeom(mesh) {
            if (mesh.geometry.type == "BoxGeometry") {
                this.updateGroupGeometry(mesh, new THREE.BoxGeometry(mesh.geometry.parameters.width, mesh.geometry.parameters.height, mesh.geometry.parameters.depth, mesh.geometry.parameters.widthSegments, mesh.geometry.parameters.heightSegments, mesh.geometry.parameters.depthSegments));
            }
            if (mesh.geometry.type == "CircleGeometry") {
                this.updateGroupGeometry(mesh, new THREE.CircleGeometry(mesh.geometry.parameters.radius, mesh.geometry.parameters.segments, mesh.geometry.parameters.thetaStart, mesh.geometry.parameters.thetaLength));
            }
            if (mesh.geometry.type == "CylinderGeometry") {
                this.updateGroupGeometry(mesh, new THREE.CylinderGeometry(mesh.geometry.parameters.radiusTop, mesh.geometry.parameters.radiusBottom, mesh.geometry.parameters.height, mesh.geometry.parameters.radiusSegments, mesh.geometry.parameters.heightSegments, mesh.geometry.parameters.openEnded, mesh.geometry.parameters.thetaStart, mesh.geometry.parameters.thetaLength));
            }
            if (mesh.geometry.type == "PlaneGeometry") {
                this.updateGroupGeometry(mesh, new THREE.PlaneGeometry(mesh.geometry.parameters.width, mesh.geometry.parameters.height, mesh.geometry.parameters.widthSegments, mesh.geometry.parameters.heightSegments));
            }
            if (mesh.geometry.type == "SphereGeometry") {
                this.updateGroupGeometry(mesh, new THREE.SphereGeometry(mesh.geometry.parameters.radius, mesh.geometry.parameters.widthSegments, mesh.geometry.parameters.heightSegments, mesh.geometry.parameters.phiStart, mesh.geometry.parameters.phiLength, mesh.geometry.parameters.thetaStart, mesh.geometry.parameters.thetaLength));
            }
            if (mesh.geometry.type == "DodecahedronGeometry") {
                this.updateGroupGeometry(mesh, new THREE.DodecahedronGeometry(mesh.geometry.parameters.radius, mesh.geometry.parameters.detail));
            }
            if (mesh.geometry.type == "IcosahedronGeometry") {
                this.updateGroupGeometry(mesh, new THREE.IcosahedronGeometry(mesh.geometry.parameters.radius, mesh.geometry.parameters.detail));
            }
            if (mesh.geometry.type == "OctahedronGeometry") {
                this.updateGroupGeometry(mesh, new THREE.OctahedronGeometry(mesh.geometry.parameters.radius, mesh.geometry.parameters.detail));
            }
            if (mesh.geometry.type == "RingGeometry") {
                this.updateGroupGeometry(mesh, new THREE.RingGeometry(mesh.geometry.parameters.innerRadius, mesh.geometry.parameters.outerRadius, mesh.geometry.parameters.thetaSegments, mesh.geometry.parameters.phiSegments, mesh.geometry.parameters.thetaStart, mesh.geometry.parameters.thetaLength));
            }
            if (mesh.geometry.type == "TetrahedronGeometry") {
                this.updateGroupGeometry(mesh, new THREE.TetrahedronGeometry(mesh.geometry.parameters.radius, mesh.geometry.parameters.detail));
            }
            if (mesh.geometry.type == "TorusGeometry") {
                this.updateGroupGeometry(mesh, new THREE.TorusGeometry(mesh.geometry.parameters.radius, mesh.geometry.parameters.tube, mesh.geometry.parameters.radialSegments, mesh.geometry.parameters.tubularSegments, mesh.geometry.parameters.arc));
            }
            if (mesh.geometry.type == "TorusKnotGeometry") {
                this.updateGroupGeometry(mesh, new THREE.TorusKnotGeometry(mesh.geometry.parameters.radius, mesh.geometry.parameters.tube, mesh.geometry.parameters.radialSegments, mesh.geometry.parameters.tubularSegments, mesh.geometry.parameters.p, mesh.geometry.parameters.q, mesh.geometry.parameters.heightScale));
            }
        }
    }, {
        key: "copyobjectprops",
        value: function copyobjectprops(obj) {
            //console.log('//  = processing ');
            var o3d = new object3d();
            o3d.uuid = obj.uuid;
            o3d.name = obj.name;
            o3d.type = obj.type;
            if (obj.parent != null) {
                o3d.parent = obj.parent.uuid;
            } else {
                o3d.parent = null;
            }
            if (obj.bdisplay != null) {
                o3d.bdisplay = obj.bdisplay;
            }
            if (obj.type == "CubeCamera") {
                o3d.near = obj.near;
                o3d.far = obj.far;
                o3d.cubeResolution = obj.cubeResolution;
            }
            if (obj.type == "PerspectiveCamera") {
                o3d.fov = obj.fov;
                o3d.aspect = obj.aspect;
                o3d.near = obj.near;
                o3d.far = obj.far;
            }
            if (obj.type == "OrthographicCamera") {
                o3d.left = obj.left;
                o3d.right = obj.right;
                o3d.top = obj.top;
                o3d.bottom = obj.bottom;
                o3d.near = obj.near;
                o3d.far = obj.far;
            }
            if (obj.type == "AmbientLight") {
                o3d.color = obj.color;
                o3d.intensity = obj.intensity;
            }
            if (obj.type == "DirectionalLight") {
                o3d.color = obj.color;
                o3d.intensity = obj.intensity;
            }
            if (obj.type == "HemisphereLight") {
                o3d.skyColor = obj.color;
                //console.log(obj.color);
                o3d.groundColor = obj.groundColor;
                o3d.intensity = obj.intensity;
            }
            if (obj.type == "Light") {
                o3d.skyColor = obj.color;
                o3d.intensity = obj.intensity;
            }
            if (obj.type == "PointLight") {
                o3d.color = obj.color;
                o3d.intensity = obj.intensity;
                o3d.distance = obj.distance;
                o3d.decay = obj.decay;
            }
            if (obj.type == "SpotLight") {
                o3d.color = obj.color;
                o3d.intensity = obj.intensity;
                o3d.distance = obj.distance;
                o3d.angle = obj.angle;
                o3d.penumbra = obj.penumbra;
                o3d.decay = obj.decay;
            }
            o3d.children = [];
            if (obj.geometry != null) {
                o3d.geometrytype = obj.geometry.type;
                if (obj.geometry.parameters != null) {
                    o3d.parameters = obj.geometry.parameters;
                }
            }
            if (obj.script != null) {
                /*
                var is_array = function (value) {
                    return value &&
                    typeof value === 'object' &&
                    typeof value.length === 'number' &&
                    typeof value.splice === 'function' &&
                    !(value.propertyIsEnumerable('length'));
                };
                */
                o3d.script = {}; //create script object
                for (var os in obj.script) {
                    o3d.script[os] = {}; //create object
                    for (var param in obj.script[os]) {
                        //console.log(typeof obj.script[os][param]);
                        //console.log(obj.script[os][param]);
                        if (_typeof(obj.script[os][param]) == 'object') {
                            if (param != 'entity') {
                                //console.log('checking object type?');
                                //console.log('obj.script.'+os+'.'+''+param);
                                if (obj.script[os][param] instanceof THREE.Object3D) {
                                    if (obj.script[os][param].type == 'Object3D') {
                                        //console.log(obj.script[os][param]);
                                        //console.log('found Object3D!');
                                        //o3d.script[os][param] = obj.script[os][param]; // error on geometry uuid if not set
                                        o3d.script[os][param] = { type: 'Object3D', uuid: obj.script[os][param].uuid };
                                    }
                                }
                                if (obj.script[os][param] instanceof THREE.Mesh) {
                                    console.log(obj.script[os][param]);
                                    console.log('found Mesh!');
                                    //o3d.script[os][param] = obj.script[os][param]; // error on geometry uuid if not set
                                    o3d.script[os][param] = { type: 'Mesh', uuid: obj.script[os][param].uuid };
                                }
                                if (Object.prototype.toString.call(obj.script[os][param]) === '[object Array]') {
                                    console.log(obj.script[os][param]);
                                    //console.log('found object Array!');
                                    o3d.script[os][param] = obj.script[os][param];
                                }
                                if (obj.script[os][param] instanceof THREE.Vector2) {
                                    //console.log(obj.script[os][param]);
                                    //console.log('found THREE.Vector2!');
                                    o3d.script[os][param] = obj.script[os][param];
                                    o3d.script[os][param] = { type: 'THREE.Vector2', x: obj.script[os][param].x, y: obj.script[os][param].y };
                                }
                                if (obj.script[os][param] instanceof THREE.Vector3) {
                                    //console.log(obj.script[os][param]);
                                    //console.log('found THREE.Vector3!');
                                    //o3d.script[os][param] = obj.script[os][param];
                                    o3d.script[os][param] = { type: 'THREE.Vector3', x: obj.script[os][param].x, y: obj.script[os][param].y, z: obj.script[os][param].z };
                                }
                                if (obj.script[os][param] instanceof THREE.Vector4) {
                                    //console.log(obj.script[os][param]);
                                    //console.log('found THREE.Vector4!');
                                    //o3d.script[os][param] = obj.script[os][param];
                                    o3d.script[os][param] = { type: 'THREE.Vector4', x: obj.script[os][param].x, y: obj.script[os][param].y, z: obj.script[os][param].z, w: obj.script[os][param].w };
                                }
                                if (obj.script[os][param] instanceof THREE.Quaternion) {
                                    //console.log(obj.script[os][param]);
                                    //console.log('found THREE.Quaternion!');
                                    //o3d.script[os][param] = obj.script[os][param];
                                    o3d.script[os][param] = { type: 'THREE.Quaternion', x: obj.script[os][param].x, y: obj.script[os][param].y, z: obj.script[os][param].z, w: obj.script[os][param].w };
                                }
                            }
                        }
                        if (typeof obj.script[os][param] == 'string') {
                            o3d.script[os][param] = obj.script[os][param]; //assign var
                        }
                        if (typeof obj.script[os][param] == 'string') {
                            o3d.script[os][param] = obj.script[os][param]; //assign var
                        }
                        if (typeof obj.script[os][param] == 'boolean') {
                            o3d.script[os][param] = obj.script[os][param]; //assign var
                        }
                        if (typeof obj.script[os][param] == 'number') {
                            o3d.script[os][param] = obj.script[os][param]; //assign var
                        }
                    }
                }
            }
            o3d.position = obj.position;
            o3d.rotation = obj.rotation;
            o3d.scale = obj.scale;
            return o3d;
        }
    }, {
        key: "createshape",
        value: function createshape(args) {
            if (args != null) {
                if (args['shape'] != null) {
                    var tmpobj;
                    var geometry;
                    var objmesh;
                    var edges;
                    var material;
                    var tmpmap;
                    if (args['shape'] == 'Scene') {
                        objmesh = new THREE.Scene();
                        objmesh.name = "Scene";
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'Sprite') {
                        //var map = new THREE.Textureer().( "sprite.png" );
                        //var material = new THREE.SpriteMaterial( { map: map, color: 0xffffff, fog: true } );
                        material = new THREE.SpriteMaterial({ color: 0xffffff, fog: true });
                        objmesh = new THREE.Sprite(material);
                        objmesh.name = 'Sprite';
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'Object3D') {
                        //console.log('object 3d??');
                        objmesh = new THREE.Object3D();
                        objmesh.name = 'Object3D';
                        //console.log(objmesh);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'BoxGeometry') {
                        geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
                        material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "BoxGeometry";
                        console.log(objmesh);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'CircleGeometry') {
                        geometry = new THREE.CircleGeometry(2, 8, 0, 2 * Math.PI);
                        material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "CircleGeometry";
                        console.log(objmesh.geometry.parameters);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'CylinderGeometry') {
                        geometry = new THREE.CylinderGeometry(5, 5, 10, 8, 1, false, 0, 2 * Math.PI);
                        material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "CylinderGeometry";
                        console.log(objmesh.geometry.parameters);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'PlaneGeometry') {
                        geometry = new THREE.PlaneGeometry(10, 10, 1, 1);
                        material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "PlaneGeometry";
                        console.log(objmesh.geometry.parameters);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'SphereGeometry') {
                        geometry = new THREE.SphereGeometry(5, 32, 32, 0, 2 * Math.PI, 0, 2 * Math.PI);
                        material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "SphereGeometry";
                        console.log(objmesh.geometry.parameters);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'DodecahedronGeometry') {
                        geometry = new THREE.DodecahedronGeometry(1, 0);
                        material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "DodecahedronGeometry";
                        console.log(objmesh.geometry.parameters);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'IcosahedronGeometry') {
                        geometry = new THREE.IcosahedronGeometry(1, 0);
                        material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "IcosahedronGeometry";
                        console.log(objmesh.geometry.parameters);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'OctahedronGeometry') {
                        geometry = new THREE.OctahedronGeometry(1, 0);
                        material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "OctahedronGeometry";
                        console.log(objmesh.geometry.parameters);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'RingGeometry') {
                        geometry = new THREE.RingGeometry(1, 5, 8, 1, 0, 2 * Math.PI);
                        material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "RingGeometry";
                        console.log(objmesh.geometry.parameters);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'TetrahedronGeometry') {
                        geometry = new THREE.TetrahedronGeometry(1, 0);
                        material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "TetrahedronGeometry";
                        console.log(objmesh.geometry.parameters);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'TorusGeometry') {
                        geometry = new THREE.TorusGeometry(10, 3, 16, 100, 2 * Math.PI);
                        material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "TorusGeometry";
                        console.log(objmesh.geometry.parameters);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'TorusKnotGeometry') {
                        geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16, 2, 3, 1);
                        material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "TorusKnotGeometry";
                        console.log(objmesh.geometry.parameters);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'TextGeometry') {
                        geometry = new THREE.TextGeometry('Text', {});
                        material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                        objmesh = new THREE.Mesh(geometry, material);
                        objmesh.name = "TextGeometry";
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'ArrowHelper') {
                        var dir = new THREE.Vector3(1, 0, 0);
                        var origin = new THREE.Vector3(0, 0, 0);
                        var length = 1;
                        var hex = 0xffff00;
                        var arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
                        tmpobj = arrowHelper;
                    }
                    if (args['shape'] == 'AxisHelper') {
                        var axisHelper = new THREE.AxisHelper(5);
                        tmpobj = axisHelper;
                    }
                    if (args['shape'] == 'BoundingBoxHelper') {
                        objmesh = new THREE.Object3D();
                        var hex = 0xff0000;
                        var sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
                        var sphere = new THREE.Mesh(new THREE.SphereGeometry(30, 12, 12), sphereMaterial);
                        objmesh.add(sphere);
                        var bbox = new THREE.BoundingBoxHelper(sphere, hex);
                        bbox.update();
                        objmesh.add(bbox);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'EdgesHelper') {
                        objmesh = new THREE.Object3D();
                        geometry = new THREE.BoxGeometry(10, 10, 10, 2, 2, 2);
                        material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
                        var object = new THREE.Mesh(geometry, material);
                        edges = new THREE.EdgesHelper(object, 0x00ff00);
                        objmesh.add(object);
                        objmesh.add(edges);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'FaceNormalsHelper') {
                        objmesh = new THREE.Object3D();
                        geometry = new THREE.BoxGeometry(10, 10, 10, 2, 2, 2);
                        material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
                        var object = new THREE.Mesh(geometry, material);
                        edges = new THREE.FaceNormalsHelper(object, 2, 0x00ff00, 1);
                        objmesh.add(object);
                        objmesh.add(edges);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'GridHelper') {
                        var size = 10;
                        var step = 1;
                        var gridHelper = new THREE.GridHelper(size, step);
                        tmpobj = gridHelper;
                    }
                    if (args['shape'] == 'PointLightHelper') {
                        objmesh = new THREE.Object3D();
                        var pointLight = new THREE.PointLight(0xff0000, 1, 100);
                        pointLight.position.set(10, 10, 10);
                        objmesh.add(pointLight);
                        var sphereSize = 1;
                        var pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
                        objmesh.add(pointLightHelper);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'SpotLightHelper') {
                        objmesh = new THREE.Object3D();
                        var spotLight = new THREE.SpotLight(0xffffff);
                        spotLight.position.set(10, 10, 10);
                        objmesh.add(spotLight);
                        var spotLightHelper = new THREE.SpotLightHelper(spotLight);
                        objmesh.add(spotLightHelper);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'VertexNormalsHelper') {
                        objmesh = new THREE.Object3D();
                        geometry = new THREE.BoxGeometry(10, 10, 10, 2, 2, 2);
                        material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
                        var object = new THREE.Mesh(geometry, material);
                        edges = new THREE.VertexNormalsHelper(object, 2, 0x00ff00, 1);
                        objmesh.add(object);
                        objmesh.add(edges);
                        tmpobj = objmesh;
                    }
                    if (args['shape'] == 'WireframeHelper') {
                        objmesh = new THREE.Object3D();
                        geometry = new THREE.BoxGeometry(10, 10, 10, 2, 2, 2);
                        material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
                        var object = new THREE.Mesh(geometry, material);
                        var wireframe = new THREE.WireframeHelper(object, 0x00ff00);
                        objmesh.add(object);
                        objmesh.add(wireframe);
                        tmpobj = objmesh;
                    }
                    if (tmpobj != null) {
                        if (this.selectobject != null) {
                            this.selectobject.add(tmpobj); //attach to current selected
                        } else {
                            this.scene.add(tmpobj);
                        }
                        this.scenenodes.push(tmpobj);
                        console.log('create object?');
                        console.log(tmpobj);
                        NodeSelectObject({ object: tmpobj });
                        tmpmap = this.copyobjectprops(objmesh);
                        //console.log(tmpmap);
                        this.mapscenenodes.push(tmpmap);
                        //var test3d = new object3d();
                        //console.log(test3d);
                        tmpobj = null;
                        geometry = null;
                        objmesh = null;
                        edges = null;
                        material = null;
                    }
                }
            }
        }
    }]);

    return Threejs_framework_editor;
}(_threejs_framework_module.Threejs_framework_module);

},{"./threejs_framework_module":23}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_framework_gundb = undefined;

var _threejs_framework_module = require('./threejs_framework_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_framework_gundb = exports.Threejs_framework_gundb = function (_Threejs_framework_mo) {
    _inherits(Threejs_framework_gundb, _Threejs_framework_mo);

    function Threejs_framework_gundb(args) {
        _classCallCheck(this, Threejs_framework_gundb);

        return _possibleConstructorReturn(this, (Threejs_framework_gundb.__proto__ || Object.getPrototypeOf(Threejs_framework_gundb)).call(this, args));
    }

    return Threejs_framework_gundb;
}(_threejs_framework_module.Threejs_framework_module);

},{"./threejs_framework_module":23}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_framework_hud = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_framework_module = require("./threejs_framework_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_framework_hud = exports.Threejs_framework_hud = function (_Threejs_framework_mo) {
    _inherits(Threejs_framework_hud, _Threejs_framework_mo);

    function Threejs_framework_hud(args) {
        _classCallCheck(this, Threejs_framework_hud);

        return _possibleConstructorReturn(this, (Threejs_framework_hud.__proto__ || Object.getPrototypeOf(Threejs_framework_hud)).call(this, args));
    }

    //works mesh over lap scenes


    _createClass(Threejs_framework_hud, [{
        key: "setup_hud",
        value: function setup_hud() {
            console.log("setup_hud");
            this.scenehud = new THREE.Scene();
            //this.cameraHUD = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 0, 30);
            //this.camerahud = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
            this.camerahud = new THREE.OrthographicCamera(-window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight / 2, 0, 30);
            //this.camerahud.position.z = 5;
            //var geometry = new THREE.BoxGeometry( 1, 1, 1 );
            //var material = new THREE.MeshBasicMaterial( { color: 0xccccff } );
            //var cube = new THREE.Mesh( geometry, material );
            //cube.position.x = 1;
            //this.scenehud.add( cube );
        }
    }]);

    return Threejs_framework_hud;
}(_threejs_framework_module.Threejs_framework_module);

},{"./threejs_framework_module":23}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_framework_loader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_framework_module = require("./threejs_framework_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_framework_loader = exports.Threejs_framework_loader = function (_Threejs_framework_mo) {
    _inherits(Threejs_framework_loader, _Threejs_framework_mo);

    function Threejs_framework_loader(args) {
        _classCallCheck(this, Threejs_framework_loader);

        return _possibleConstructorReturn(this, (Threejs_framework_loader.__proto__ || Object.getPrototypeOf(Threejs_framework_loader)).call(this, args));
    }

    _createClass(Threejs_framework_loader, [{
        key: "addListener",
        value: function addListener(event, obj, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(event, fn, false); // modern browsers
            } else {
                obj.attachEvent("on" + event, fn); // older versions of IE
            }
        }
    }, {
        key: "loadjavascript",
        value: function loadjavascript(url, callback) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            if (script.readyState) {
                //IE
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {
                //Others
                script.onload = function () {
                    callback();
                };
            }
            //console.log(this.jspath + url);
            script.src = this.jspath + url;
            document.getElementsByTagName('head')[0].appendChild(script);
        }
    }, {
        key: "loadlibraries",
        value: function loadlibraries() {
            console.log("loadlibraries...");
            var self = this;
            var scriptcount = 0;
            var scriptlist = this.scriptlist;

            for (var i = 0; i < scriptlist.length; i++) {
                //threejsapi.addScript(mappdata.scripts[i]);
                console.log(scriptlist[i]);
                this.loadjavascript(scriptlist[i], function () {
                    //initialization code
                    scriptcount++;
                    //console.log("script: "+scriptcount + ":" + (scriptlist.length));
                    if (scriptcount == scriptlist.length) {
                        //make sure the scripts are load else it can't used script components
                        console.log("script: " + scriptcount + ":" + scriptlist.length);
                        console.log('Finish load javascript libs!');
                        self.init();
                    }
                });
            }
        }
    }, {
        key: "load",
        value: function load() {
            console.log("loading map file!");
            var self = this;
            var mappdata = self.mappdata;
            var scriptcount = self.scriptcount;
            //this.mapurl
            //loader.load( 'post-app.json', function ( text ) {
            this.loader.load(this.mapurl, function (text) {
                var modelfiles = [];
                var modelcount = 0;

                mappdata = JSON.parse(text);
                console.log(mappdata);
                //threejsapi = new CLASSGAME({onload:false,bcanvasRatio:true,bfixedassetpath:false});//config
                //threejsapi = new CLASSGAME(args);//config
                threejsapi = self;
                scriptcount = 0;

                function loadmodelfiles() {
                    console.log("init models loading files");
                    if (mappdata.assets != null) {
                        console.log("Assets files: " + mappdata.assets.length);
                        //if there no model files
                        if (mappdata.assets.length == 0) {
                            loadscriptfiles();
                        }

                        for (var i = 0; i < mappdata.assets.length; i++) {
                            console.log(mappdata.assets[i]);
                            if (mappdata.assets[i].type == "model") {
                                modelfiles.push(mappdata.assets[i]);
                                //modelcount += 1;
                            }
                        }

                        //console.log("model checking...");
                        for (var mi = 0; mi < modelfiles.length; mi++) {
                            //console.log(modelfiles[mi].uuid);
                            var _id = modelfiles[mi].uuid;
                            var _name = modelfiles[mi].path;
                            //console.log('//=========================');
                            //console.log(modelfiles[mi].path);
                            threejsapi.LoadModelFile(modelfiles[mi], function (object) {
                                console.log('//========================================');
                                //console.log(object.name);
                                //object.name = _name;
                                //console.log(object.uuid);
                                //object.uuid = _id;
                                console.log(object);
                                //console.log(object.uuid);
                                modelcount++;
                                console.log("models: " + modelcount + ":" + modelfiles.length);
                                if (modelcount == modelfiles.length) {
                                    //console.log('Finish loading file models!');
                                    //console.log('init scripts!');
                                    loadscriptfiles();
                                }
                            });
                        }
                    }
                }

                //load scripts
                function loadscriptfiles() {
                    if (mappdata.scripts != null) {
                        console.log("init script loading files...");
                        console.log("Scripts files: " + mappdata.scripts.length);
                        if (mappdata.scripts.length == 0) {
                            loadentities();
                        }
                        for (var i = 0; i < mappdata.scripts.length; i++) {
                            //threejsapi.addScript(mappdata.scripts[i]);
                            loadScript(mappdata.scripts[i], function () {
                                //initialization code
                                scriptcount++;
                                //console.log("script: "+scriptcount + ":" + (mappdata.scripts.length));
                                if (scriptcount == mappdata.scripts.length) {
                                    //make sure the scripts are load else it can't used script components
                                    //console.log('Finish script components!');
                                    //console.log('init load entities!');
                                    loadentities();
                                }
                            });
                        }
                    }
                }
                //load entities
                function loadentities() {
                    console.log('loading entities?');
                    if (mappdata.entities != null) {
                        console.log("Entities count:" + mappdata.entities.length);
                        for (var i = 0; i < mappdata.entities.length; i++) {
                            threejsapi.parseObject(mappdata.entities[i]);
                        }
                        console.log('Finish loading!');

                        //self.hideloadingscreen();

                        //self.loadScript("/assets/test1.js", function(){
                        //initialization code
                        //console.log("test? js");
                        //});
                        //console.log(threejsapi);
                    }
                }

                loadmodelfiles();
            });
        }

        //===============================================
        // Manager
        //===============================================

    }, {
        key: "initManger",
        value: function initManger() {
            this.manager = new THREE.LoadingManager();
            this.manager.onProgress = function (item, loaded, total) {
                console.log(item, loaded, total);
            };
        }
    }, {
        key: "onProgressModel",
        value: function onProgressModel(xhr) {
            if (xhr.lengthComputable) {
                var percentComplete = xhr.loaded / xhr.total * 100;
            }
        }
    }, {
        key: "onErrorModel",
        value: function onErrorModel(xhr) {
            console.log(xhr);
        }
        //===============================================
        // Load File
        //===============================================

    }, {
        key: "getext",
        value: function getext(filename) {
            return filename.substr(filename.lastIndexOf('.'));
        }
    }, {
        key: "LoadFile",
        value: function LoadFile(filename) {
            console.log('file: ' + filename);
            var self = this;
            if (this.getext(filename) == '.fbx') {
                this.LoadFBX(filename, function (object) {
                    self.scene.add(object);
                });
            }
            if (this.getext(filename) == '.dae') {
                this.LoadDAE(filename, function (object) {
                    self.scene.add(object);
                });
            }
            if (this.getext(filename) == '.obj') {
                this.LoadOBJ(filename, function (object) {
                    self.scene.add(object);
                });
            }
            if (this.getext(filename) == '.js') {
                this.LoadJSONObj(filename, function (object) {
                    self.scene.add(object);
                });
            }
            if (this.getext(filename) == '.json') {
                this.LoadJSONObj(filename, function (object) {
                    self.scene.add(object);
                });
            }
        }
    }, {
        key: "LoadModelFile",
        value: function LoadModelFile(args, callback) {
            console.log('file: ' + args.path);
            var self = this;
            if (this.getext(args.path) == '.fbx') {
                this.LoadFBX(args.path, function (object) {
                    //self.scene.add(object);
                    object.uuid = args.uuid;
                    callback(object);
                });
            }
            if (this.getext(args.path) == '.dae') {
                this.LoadDAE(args.path, function (object) {
                    //self.scene.add(object);
                    object.uuid = args.uuid;
                    callback(object);
                });
            }
            if (this.getext(args.path) == '.obj') {
                this.LoadOBJ(args.path, function (object) {
                    //self.scene.add(object);
                    //console.log("done object loading????");
                    object.uuid = args.uuid;
                    callback(object);
                });
            }
            if (this.getext(args.path) == '.js') {
                this.LoadJSONObj(args.path, function (object) {
                    //self.scene.add( object );
                    object.uuid = args.uuid;
                    callback(object);
                });
            }
            if (this.getext(args.path) == '.json') {
                this.LoadJSONObj(args.path, function (object) {
                    //self.scene.add( object );
                    object.uuid = args.uuid;
                    callback(object);
                });
            }
        }
    }, {
        key: "LoadJSONObj",
        value: function LoadJSONObj(filename, callback) {
            var filepath;
            if (this.bfixedassetpath) {
                filepath = "/assets/" + filename;
            } else {
                filename;
                filepath = filename;
            }
            var loader = new THREE.JSONLoader();
            var name = filename;
            var self = this;
            var name = filename;
            loader.load(filepath, function (geometry, materials) {
                var material = materials[0];
                material.morphTargets = true;
                material.color.setHex(0xffaaaa);
                var faceMaterial = new THREE.MultiMaterial(materials);
                var mesh = new THREE.Mesh(geometry, faceMaterial);
                mesh.name = name;
                callback(mesh);
                //self.scene.add( mesh );
                name = null;
                loader = null;
            }, this.onProgressModel, this.onErrorModel);
        }
    }, {
        key: "LoadFBX",
        value: function LoadFBX(filename, callback) {
            var filepath;
            if (this.bfixedassetpath) {
                filepath = "/assets/" + filename;
            } else {
                filename;
                filepath = filename;
            }
            var name = filename;
            //console.log(filepath);
            var loader = new THREE.FBXLoader(this.manager);
            var self = this;
            loader.load(filepath, function (object) {
                object.traverse(function (child) {
                    if (child instanceof THREE.Mesh) {}
                    if (child instanceof THREE.SkinnedMesh) {
                        if (child.geometry.animations !== undefined || child.geometry.morphAnimations !== undefined) {
                            child.mixer = new THREE.AnimationMixer(child);
                            //mixers.push( child.mixer );
                            var action = child.mixer.clipAction(child.geometry.animations[0]);
                            action.play();
                        }
                    }
                });
                //self.scene.add( object );
                object.name = filename;
                //console.log("///////////////////////////////");
                //console.log(object.name);
                callback(object);
                name = null;
                loader = null;
            }, this.onProgressModel, this.onErrorModel);
        }
    }, {
        key: "LoadDAE",
        value: function LoadDAE(filename, callback) {
            var filepath;
            if (this.bfixedassetpath) {
                filepath = "/assets/" + filename;
            } else {
                filename;
                filepath = filename;
            }
            var loader = new THREE.ColladaLoader(this.manager);
            var self = this;
            loader.options.convertUpAxis = true;
            loader.load(filepath, function (collada) {
                var dae = collada.scene;
                dae.traverse(function (child) {
                    if (child instanceof THREE.SkinnedMesh) {
                        var animation = new THREE.Animation(child, child.geometry.animation);
                        animation.play();
                    }
                });
                //dae.scale.x = dae.scale.y = dae.scale.z = 0.002;
                dae.updateMatrix();
                //init();
                //animate();
                //self.scene.add( dae );
                dae.name = filepath;
                callback(dae);
                console.log("added");
                //name = null;
                loader = null;
            }, this.onProgressModel, this.onErrorModel);
        }
    }, {
        key: "LoadOBJ",
        value: function LoadOBJ(filename, callback) {
            var self = this;
            //var name = filename;
            var filepath;
            if (this.bfixedassetpath) {
                filepath = "/assets/" + filename;
            } else {
                filename;
                filepath = filename;
            }
            var loader = new THREE.OBJLoader(this.manager);
            //var loader = new THREE.OBJLoader();
            loader.load(filepath, function (object) {
                object.traverse(function (child) {
                    if (child instanceof THREE.Mesh) {}
                });
                //object.position.y = - 95;
                //self.scene.add( object );
                object.name = filename;
                callback(object);
                //name = null;
                loader = null;
            }, this.onProgressModel, this.onErrorModel);
        }
    }]);

    return Threejs_framework_loader;
}(_threejs_framework_module.Threejs_framework_module);

},{"./threejs_framework_module":23}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Threejs_framework_loadingscreen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_framework_module = require('./threejs_framework_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_framework_loadingscreen = exports.Threejs_framework_loadingscreen = function (_Threejs_framework_mo) {
	_inherits(Threejs_framework_loadingscreen, _Threejs_framework_mo);

	function Threejs_framework_loadingscreen(args) {
		_classCallCheck(this, Threejs_framework_loadingscreen);

		return _possibleConstructorReturn(this, (Threejs_framework_loadingscreen.__proto__ || Object.getPrototypeOf(Threejs_framework_loadingscreen)).call(this, args));
	}

	_createClass(Threejs_framework_loadingscreen, [{
		key: 'initloadingscreen',
		value: function initloadingscreen() {
			var styleloadingscreen = document.createElement("style");
			styleloadingscreen.innerHTML = '';
			styleloadingscreen.innerHTML += '.loader {border: 16px solid #f3f3f3;border-top: 16px solid #3498db;border-radius: 50%;width: 120px;height: 120px;animation: spin 2s linear infinite;}';
			styleloadingscreen.innerHTML += '\n@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg);}}';
			styleloadingscreen.type = 'text/css';
			document.getElementsByTagName('head')[0].appendChild(styleloadingscreen);

			var divloadingscreen = document.createElement("div");
			divloadingscreen.id = "loadingscreen";
			divloadingscreen.style['background-color'] = '#dddddd';
			divloadingscreen.style.position = 'absolute';
			divloadingscreen.style.top = 0;
			divloadingscreen.style.left = 0;
			divloadingscreen.style.width = '100%';
			divloadingscreen.style.height = '100%';
			divloadingscreen.innerHTML = "<div style='background-color: #dddddd;position: absolute;left: 0;height: 50%;width: 100%;top: 50%;'><center><div class='loader'></div></center> <center id='loadingscreentext'>Loading...</center></div>";
			document.getElementsByTagName('body')[0].appendChild(divloadingscreen);
		}
	}, {
		key: 'loadingscreentext',
		value: function loadingscreentext() {
			var _TEXT = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "loading......";

			document.getElementById('loadingscreentext').innerHTML = _TEXT;
		}
	}, {
		key: 'showloadingscreen',
		value: function showloadingscreen() {
			document.getElementById('loadingscreen').style.display = 'block';
		}
	}, {
		key: 'hideloadingscreen',
		value: function hideloadingscreen() {
			document.getElementById('loadingscreen').style.display = 'none';
		}
	}]);

	return Threejs_framework_loadingscreen;
}(_threejs_framework_module.Threejs_framework_module);

},{"./threejs_framework_module":23}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    Project Name: bes-threejs
    Link:https://github.com/Lightnet/bes-threejs
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/

var Threejs_framework_module = exports.Threejs_framework_module = function Threejs_framework_module(args) {
    _classCallCheck(this, Threejs_framework_module);

    if (!args) {
        args = {};
        console.log("no args...");
    }
    var propertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    for (var fun in propertyNames) {
        //console.log(fun);
        //console.log(propertyNames[fun]);
        if (propertyNames[fun] != "constructor") {
            args[propertyNames[fun]] = this[propertyNames[fun]];
        } else {
            //console.log('ignore ' + propertyNames[fun] );
        }
    }
};

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.Threejs_framework_network = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_framework_module = require('./threejs_framework_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_framework_network = exports.Threejs_framework_network = function (_Threejs_framework_mo) {
				_inherits(Threejs_framework_network, _Threejs_framework_mo);

				function Threejs_framework_network(args) {
								_classCallCheck(this, Threejs_framework_network);

								return _possibleConstructorReturn(this, (Threejs_framework_network.__proto__ || Object.getPrototypeOf(Threejs_framework_network)).call(this, args));
				}

				_createClass(Threejs_framework_network, [{
								key: 'setup_network',
								value: function setup_network() {
												var self = this;
												this.socket = io();
												this.socket.on('connect', function () {
																console.log('server connected');
																if (this.reload) {
																				location.reload();
																}
												});

												this.socket.on('disconnect', function () {
																console.log('server disconnected');
																this.reload = true;
												});
								}
				}]);

				return Threejs_framework_network;
}(_threejs_framework_module.Threejs_framework_module);

},{"./threejs_framework_module":23}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Threejs_framework_physics = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_framework_module = require('./threejs_framework_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_framework_physics = exports.Threejs_framework_physics = function (_Threejs_framework_mo) {
	_inherits(Threejs_framework_physics, _Threejs_framework_mo);

	function Threejs_framework_physics(args) {
		_classCallCheck(this, Threejs_framework_physics);

		return _possibleConstructorReturn(this, (Threejs_framework_physics.__proto__ || Object.getPrototypeOf(Threejs_framework_physics)).call(this, args));
	}

	_createClass(Threejs_framework_physics, [{
		key: 'initCannonPhysics',
		value: function initCannonPhysics() {
			if ((typeof CANNON === 'undefined' ? 'undefined' : _typeof(CANNON)) != undefined) {
				this.world = new CANNON.World();
				this.world.gravity.set(0, -9.82, 0);
				this.world.broadphase = new CANNON.NaiveBroadphase();
				this.world.solver.iterations = 10;
			}
			//this.createCannonScene();
		}
	}, {
		key: 'updateCannonPhysics',
		value: function updateCannonPhysics(deta) {
			if (typeof this.world == 'undefined' || this.world == null) {
				return;
			}
			if ((typeof CANNON === 'undefined' ? 'undefined' : _typeof(CANNON)) != undefined) {
				this.world.step(this.timeSteptimeStep);
			}
		}
	}, {
		key: 'destroyCannonPhysics',
		value: function destroyCannonPhysics() {
			console.log('destroyCannonPhysics');
		}
	}, {
		key: 'initAmmoPhysics',
		value: function initAmmoPhysics() {
			//https://github.com/kripken/ammo.js/blob/master/examples/hello_world.js
			if ((typeof Ammo === 'undefined' ? 'undefined' : _typeof(Ammo)) != undefined) {
				console.log('init Ammo');
				this.collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
				this.dispatcher = this.dp = new Ammo.btCollisionDispatcher(this.collisionConfiguration);
				//console.log(dispatcher);
				this.overlappingPairCache = new Ammo.btDbvtBroadphase();
				this.solver = new Ammo.btSequentialImpulseConstraintSolver();
				this.world = new Ammo.btDiscreteDynamicsWorld(this.dispatcher, this.overlappingPairCache, this.solver, this.collisionConfiguration);
				this.world.setGravity(new Ammo.btVector3(0, -10, 0));
				this.trans = new Ammo.btTransform(); // taking this out of the loop below us reduces the leaking
				//this.createAmmoScene();
			}
		}
	}, {
		key: 'updateAmmoPhysics',
		value: function updateAmmoPhysics(deta) {
			deta = deta || 1;
			if (typeof this.world == 'undefined' || this.world == null) {
				return;
			}
			if ((typeof Ammo === 'undefined' ? 'undefined' : _typeof(Ammo)) != undefined) {
				//this.world.stepSimulation(1 / 60, 10);
				this.world.stepSimulation(deta, 2);
				//console.log(deta);
			}
		}
	}, {
		key: 'destroyAmmoPhysics',
		value: function destroyAmmoPhysics() {
			//https://github.com/kripken/ammo.js/blob/master/examples/hello_world.js
			// Delete objects we created through |new|. We just do a few of them here, but you should do them all if you are not shutting down ammo.js
			Ammo.destroy(this.collisionConfiguration);
			Ammo.destroy(this.dispatcher);
			Ammo.destroy(this.overlappingPairCache);
			Ammo.destroy(this.solver);
		}
	}, {
		key: 'initOimoPhysics',
		value: function initOimoPhysics() {
			if ((typeof OIMO === 'undefined' ? 'undefined' : _typeof(OIMO)) != undefined) {
				this.world = new OIMO.World(1 / 60, 2);
				//this.world.gravity = new OIMO.Vec3(0, -1, 0);
				this.world.clear();
				//this.createOimoScene();
				//this.infos = document.getElementById("info");
			}
		}
	}, {
		key: 'updateOimoPhysics',
		value: function updateOimoPhysics(deta) {
			//https://github.com/lo-th/Oimo.js/blob/gh-pages/test_moving.html
			if (typeof this.world == 'undefined' || this.world == null) {
				return;
			}
			this.world.step();
		}
	}, {
		key: 'destroyOimoPhysics',
		value: function destroyOimoPhysics() {
			console.log('destroyOimoPhysics');
		}
	}, {
		key: 'updatePhysics',
		value: function updatePhysics(deta) {
			//console.log("p");
			if (typeof this.world == 'undefined' || this.world == null) {
				return;
			}
			if (this.setPhysicsType[this.physicsIndex] == 'Oimo.js') {
				this.updateOimoPhysics(deta);
			}
			if (this.setPhysicsType[this.physicsIndex] == 'Cannon.js') {
				this.updateCannonPhysics(deta);
			}
			if (this.setPhysicsType[this.physicsIndex] == 'Ammo.js') {
				this.updateAmmoPhysics(deta);
			}
		}
	}, {
		key: 'initPhysics',
		value: function initPhysics() {

			if (this.setPhysicsType[this.physicsIndex] == 'Oimo.js') {
				this.initOimoPhysics();
			}
			if (this.setPhysicsType[this.physicsIndex] == 'Cannon.js') {
				this.initCannonPhysics();
			}
			if (this.setPhysicsType[this.physicsIndex] == 'Ammo.js') {
				this.initAmmoPhysics();
			}
			console.log("init physics type:" + this.setPhysicsType[this.physicsIndex]);
		}
	}]);

	return Threejs_framework_physics;
}(_threejs_framework_module.Threejs_framework_module);

},{"./threejs_framework_module":23}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.Threejs_framework_scene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_framework_module = require('./threejs_framework_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_framework_scene = exports.Threejs_framework_scene = function (_Threejs_framework_mo) {
				_inherits(Threejs_framework_scene, _Threejs_framework_mo);

				function Threejs_framework_scene(args) {
								_classCallCheck(this, Threejs_framework_scene);

								return _possibleConstructorReturn(this, (Threejs_framework_scene.__proto__ || Object.getPrototypeOf(Threejs_framework_scene)).call(this, args));
				}

				_createClass(Threejs_framework_scene, [{
								key: 'setup_css3d',
								value: function setup_css3d() {
												//renderCanvas
												//var container = document.getElementById( 'container' );
												var container = document.getElementById('renderCanvas');
												console.log("EDITOROROROROR");
												console.log(container);

												this.cameracss3d = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
												//this.cameracss3d.position.set( 500, 350, 750 );
												//this.cameracss3d.position.set( 0, 0, 1024+128 );
												this.cameracss3d.position.set(0, 0, screen.width + 32);
												this.scenecss3d = new THREE.Scene();
												this.renderercss3d = new THREE.CSS3DRenderer();
												this.renderercss3d.setSize(window.innerWidth, window.innerHeight);
												this.renderercss3d.domElement.style.position = 'absolute';
												this.renderercss3d.domElement.style.top = 0;
												container.appendChild(this.renderercss3d.domElement);

												var self = this;
												function onWindowResize() {
																self.cameracss3d.aspect = window.innerWidth / window.innerHeight;
																self.cameracss3d.updateProjectionMatrix();
																self.renderercss3d.setSize(window.innerWidth, window.innerHeight);
												}
												window.addEventListener('resize', onWindowResize, false);
								}

								//css3d

				}, {
								key: 'setup_trackcamera_css3d',
								value: function setup_trackcamera_css3d() {
												var trackcontrolcss3d = new THREE.TrackballControls(this.cameracss3d);
												trackcontrolcss3d.rotateSpeed = 4;
												trackcontrolcss3d.zoomSpeed = 0.01;
												this.trackcontrolcss3d = trackcontrolcss3d;
								}

								//webgl

				}, {
								key: 'setup_trackcamera',
								value: function setup_trackcamera() {
												var controls = new THREE.TrackballControls(this.camera);
												controls.rotateSpeed = 4;
												controls.zoomSpeed = 0.01;
												this.trackcamera = controls;
												controls = null;
								}
				}, {
								key: 'setup_webgl',
								value: function setup_webgl() {
												var self = this;
												if (this.mode == "editor" || this.mode == "css3dwebgl") {
																var webgldiv = document.createElement('div');
																//webgldiv.style.width = '800px';
																//webgldiv.style.height = '600px';
																//console.log("WINDOW.WIDTH: " + window.width);
																webgldiv.style.width = screen.width + 'px';
																webgldiv.style.height = screen.height + 'px';
																webgldiv.style.backgroundColor = '#000';
												}
												console.log("setup scene webgl");

												this.scene = new THREE.Scene();
												this.scene.name = "scene";
												this.scene.uuid = 'B1E79603-A80E-4CE5-9C5E-34B223CEECF9';
												this.scenenodes.push(this.scene);
												//this.scene.background = new THREE.Color( 0xff0000 );
												this.scene.background = new THREE.Color(0xEEEEEE);
												this.camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
												//renderer = new THREE.WebGLRenderer( { alpha: true } ); // init like this
												if (this.mode == "editor" || this.mode == "css3dwebgl") {
																console.log("editor | csswebgl");
																this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
																this.renderer.domElement.style.position = 'absolute';
																this.renderer.domElement.style.top = 0;
																//this.renderer.setSize( 800, 600 );
																this.renderer.setSize(screen.width, screen.height);
												} else {
																var onWindowResize = function onWindowResize() {
																				//console.log(window.innerWidth);
																				self.camera.aspect = window.innerWidth / window.innerHeight;
																				self.camera.updateProjectionMatrix();
																				self.renderer.setSize(window.innerWidth, window.innerHeight);
																};

																console.log("default");
																//this.canvas = document.getElementById("container");
																this.canvas = document.getElementById('renderCanvas');
																this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
																//this.renderer.domElement.style.position = 'absolute';
																//this.renderer.domElement.style.top = 0;
																this.renderer.setSize(800, 600);
																this.renderer.domElement.style.height = '100%';
																this.renderer.domElement.style.width = '100%';
																//this.renderer.setSize( window.innerWidth, window.innerHeight );
																//this.renderer.setSize( 800, 600 );
																//console.log(window.innerWidth);
																//console.log(window.innerHeight);
																this.canvas.appendChild(this.renderer.domElement);

																window.addEventListener('resize', onWindowResize, false);
												}
												//this.renderer.setClearColor( 0xffffff, 0);
												//this.renderer.setClearColor(0xEEEEEE);
												this.renderer.autoClear = false;
												//this.renderer.shadowMap.enabled = true;
												//this.renderer.shadowMap.type = THREE.PCFShadowMap; //THREE.BasicShadowMap;

												if (this.mode == "editor" || this.mode == "css3dwebgl") {
																console.log("editor", ":", "css3dwebgl");
																webgldiv.appendChild(this.renderer.domElement);
																var object = new THREE.CSS3DObject(webgldiv);
																object.position.set(0, 0, 0);
																object.rotation.y = 0;
																var group = new THREE.Group();
																group.add(object);
																if (this.mode == "editor") {
																				this.setup_editor(group);
																}
																this.scenecss3d.add(group);
												}
												//this.setup_webgl_basics();
												//this.setup_trackcamera();
								}
				}, {
								key: 'setup_renderpass',
								value: function setup_renderpass() {
												var copyPass = new THREE.ShaderPass(THREE.CopyShader);
												copyPass.renderToScreen = true;
												var renderpass1 = new THREE.RenderPass(this.scene, this.camera);
												renderpass1.renderToScreen = false;
												if (this.scenehud != null && this.camerahud != null) {
																var renderpass2 = new THREE.RenderPass(this.scenehud, this.camerahud);
																renderpass2.clear = false;
												}
												this.effectComposer = new THREE.EffectComposer(this.renderer);
												this.effectComposer.addPass(renderpass1);
												if (this.scenehud != null && this.camerahud != null) {
																this.effectComposer.addPass(renderpass2);
												}
												this.effectComposer.addPass(copyPass);
								}
				}, {
								key: 'render',
								value: function render() {
												var _this2 = this;

												requestAnimationFrame(function () {
																_this2.render();
												});
												//console.log("update?");
												//this.cube.rotation.x += 0.1;
												//this.cube.rotation.y += 0.1;
												this.update();
												if (this.trackcamera != null) {
																this.trackcamera.update();
												}

												if (this.trackcontrolcss3d != null) {
																this.trackcontrolcss3d.update();
												}

												//custom update function check
												if (this.scene != null) {
																if (this.bupdateobjects == true) {
																				this.scene.traverse(function (object) {
																								if (typeof object.update != 'undefined') {
																												object.update();
																								}
																								if (typeof object.script != 'undefined') {
																												for (var obs in object.script) {
																																if (object.script[obs].update != null) {
																																				object.script[obs].update();
																																}
																												}
																								}
																				});
																}
												}

												//if (this.bablephysics == true) {
												//this.updatePhysics();
												//}

												if (this.renderercss3d != null) {
																this.renderercss3d.render(this.scenecss3d, this.cameracss3d);
																//console.log("render?");
												}

												//this.renderer.render(this.scene, this.camera);
												if (this.effectComposer != null) {
																this.effectComposer.render();
												}
								}
				}]);

				return Threejs_framework_scene;
}(_threejs_framework_module.Threejs_framework_module);

},{"./threejs_framework_module":23}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Threejs_framework_script = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_framework_module = require('./threejs_framework_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_framework_script = exports.Threejs_framework_script = function (_Threejs_framework_mo) {
	_inherits(Threejs_framework_script, _Threejs_framework_mo);

	function Threejs_framework_script(args) {
		_classCallCheck(this, Threejs_framework_script);

		return _possibleConstructorReturn(this, (Threejs_framework_script.__proto__ || Object.getPrototypeOf(Threejs_framework_script)).call(this, args));
	}

	//===============================================
	// scripts components
	//===============================================


	_createClass(Threejs_framework_script, [{
		key: 'clearScripts',
		value: function clearScripts() {
			var myNode = document.getElementById('scriptcomponents');
			while (myNode.firstChild) {
				myNode.removeChild(myNode.firstChild);
			}
		}
	}, {
		key: 'addScript',
		value: function addScript(filename) {
			var head = document.getElementById('scriptcomponents');
			var escript = document.createElement('script');
			escript.src = filename;
			escript.type = "text/javascript";
			head.appendChild(escript);
		}
	}, {
		key: 'createscript',
		value: function createscript(scriptname, args) {
			console.log('loaded script component name: ' + scriptname);
			this.scriptcomponents[scriptname] = args;
		}
	}, {
		key: 'createComponent',
		value: function createComponent(object, name) {
			var capp;
			for (var sc in this.scriptcomponents) {
				if (name == sc) {
					capp = this.scriptcomponents[sc];
					//console.log('found!');
					break;
				}
			}
			if (capp != null) {
				var sapp = capp(this);
				object.script[name] = new sapp(object);
				capp = null;
				sapp = null;
			}
		}
	}]);

	return Threejs_framework_script;
}(_threejs_framework_module.Threejs_framework_module);

},{"./threejs_framework_module":23}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_framework_ui = undefined;

var _threejs_framework_module = require('./threejs_framework_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_framework_ui = exports.Threejs_framework_ui = function (_Threejs_framework_mo) {
    _inherits(Threejs_framework_ui, _Threejs_framework_mo);

    function Threejs_framework_ui(args) {
        _classCallCheck(this, Threejs_framework_ui);

        return _possibleConstructorReturn(this, (Threejs_framework_ui.__proto__ || Object.getPrototypeOf(Threejs_framework_ui)).call(this, args));
    }

    return Threejs_framework_ui;
}(_threejs_framework_module.Threejs_framework_module);

},{"./threejs_framework_module":23}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _threejs_framework = require('../threejs_framework/threejs_framework');

var _threejs_game_css3d = require('./threejs_game_css3d');

var _threejs_game_terrain = require('./threejs_game_terrain');

var _threejs_game_scene = require('./threejs_game_scene');

var _threejs_game_hud = require('./threejs_game_hud');

var _threejs_game_controller = require('./threejs_game_controller');

var _threejs_game_character = require('./threejs_game_character');

var _threejs_game_physics = require('./threejs_game_physics');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

// Converts from degrees to radians.
Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
};

//RFC Type 4 (random) schema
/*
var uuid = function() {
    var buf = new Uint32Array(4);
    window.crypto.getRandomValues(buf);
    var idx = -1;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        idx++;
        var r = (buf[idx>>3] >> ((idx%8)*4))&15;
        var v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
};
*/

var Threejs_game = exports.Threejs_game = function (_Threejs_framework) {
    _inherits(Threejs_game, _Threejs_framework);

    function Threejs_game(args) {
        _classCallCheck(this, Threejs_game);

        var _this = _possibleConstructorReturn(this, (Threejs_game.__proto__ || Object.getPrototypeOf(Threejs_game)).call(this, args));

        console.log("init Threejs_game...");
        if (!args) {
            args = {};
        }

        _this.character = null;
        _this.controllerid = 0;
        _this.keys = { left: 0, right: 0, forward: 0, back: 0, rotate_right: 0, rotate_left: 0 };
        _this.moveVector = THREE.Vector3(0, 0, 0);
        _this.tbv30 = new Ammo.btVector3();
        _this.transformAux1 = new Ammo.btTransform();
        //console.log(this.tbv30);

        new _threejs_game_css3d.Threejs_game_css3d(_this);
        new _threejs_game_terrain.Threejs_game_terrain(_this);
        new _threejs_game_scene.Threejs_game_scene(_this);
        new _threejs_game_hud.Threejs_game_hud(_this);
        new _threejs_game_controller.Threejs_game_controller(_this);
        new _threejs_game_character.Threejs_game_character(_this);
        new _threejs_game_physics.Threejs_game_physics(_this);

        return _this;
    }

    _createClass(Threejs_game, [{
        key: 'init',
        value: function init() {
            _get(Threejs_game.prototype.__proto__ || Object.getPrototypeOf(Threejs_game.prototype), 'init', this).call(this);
            this.setup();
        }
    }, {
        key: 'update',
        value: function update() {
            _get(Threejs_game.prototype.__proto__ || Object.getPrototypeOf(Threejs_game.prototype), 'update', this).call(this);
            //console.log("update?");
            if (this.controlOrbit != null) {
                this.controlOrbit.update();
                //console.log("update??");
            }
        }
    }, {
        key: 'simulate',
        value: function simulate(dt) {
            this.updatePhysics(dt);
        }
    }, {
        key: 'start_physics',
        value: function start_physics() {
            console.log("start_physics");
            var self = this;
            var last = Date.now();
            function mainLoop() {
                var now = Date.now();
                self.simulate(now - last);
                last = now;
            }

            if (this.interval) clearInterval(this.interval);
            this.interval = setInterval(mainLoop, 1000 / 60);
        }
    }, {
        key: 'create_sphere_physics',
        value: function create_sphere_physics() {
            var self = this;
            var geometry = new THREE.SphereBufferGeometry(1, 4, 4);
            var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
            var sphere = new THREE.Mesh(geometry, material);
            this.scene.add(sphere);
            sphere.position.set(0, 10, 0);
            //var body = this.create_playershape({obj:threeObject});
            var body = this.create_boxshape({ obj: sphere });
            sphere.userData.physicsBody = body;

            sphere.update = function () {
                var objPhys = sphere.userData.physicsBody;
                var ms = objPhys.getMotionState();
                if (ms) {
                    ms.getWorldTransform(self.transformAux1);
                    var p = self.transformAux1.getOrigin();
                    var q = self.transformAux1.getRotation();
                    sphere.position.set(p.x(), p.y(), p.z());
                    //sphere.quaternion.set( q.x(), q.y(), q.z(), q.w() );
                    //console.log("update?");
                }
            };
            this.world.addRigidBody(body);
        }
    }, {
        key: 'setup',
        value: function setup() {

            this.bablephysics = true;
            this.initPhysics();
            this.create_input();
            this.camera.position.set(0, 20, 512);
            this.camera.lookAt(new THREE.Vector3(0, 0, 0));
            this.start_physics();
            //this.controlOrbit = new THREE.OrbitControls( this.camera );
            //this.hideloadingscreen();
            //console.log(window.width);
            //console.log(screen.width);
            console.log("setup");

            //this.createBaseHUD();
            //this.create_raycast_hud();//bug ace editor conflict

            this.createhud();
            //this.createbasescene();
            //this.create_terrain03();
            this.create_terrain04();
            this.simple_pawn();
            //this.createinterface();
            var geometry = new THREE.BoxGeometry(2, 2, 2);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
            var cube = new THREE.Mesh(geometry, material);
            cube.position.set(0, 13, 5);
            //cube.update =function(){
            //cube.rotation.x += 0.1;
            //cube.rotation.y += 0.1;
            //};
            this.scene.add(cube);
            this.create_sphere_physics();

            //console.log(this.world);
        }
    }]);

    return Threejs_game;
}(_threejs_framework.Threejs_framework);

},{"../threejs_framework/threejs_framework":17,"./threejs_game_character":30,"./threejs_game_controller":31,"./threejs_game_css3d":32,"./threejs_game_hud":33,"./threejs_game_physics":35,"./threejs_game_scene":36,"./threejs_game_terrain":37}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_game_character = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_game_module = require("./threejs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


//http://stackoverflow.com/questions/15696963/three-js-set-and-read-camera-look-vector
THREE.Utils = {
    cameraLookDir: function cameraLookDir(camera) {
        var vector = new THREE.Vector3(0, 0, -1);
        vector.applyEuler(camera.rotation, camera.rotation.order);
        return vector;
    }
};

var Threejs_game_character = exports.Threejs_game_character = function (_Threejs_game_module) {
    _inherits(Threejs_game_character, _Threejs_game_module);

    function Threejs_game_character(args) {
        _classCallCheck(this, Threejs_game_character);

        return _possibleConstructorReturn(this, (Threejs_game_character.__proto__ || Object.getPrototypeOf(Threejs_game_character)).call(this, args));
    }

    _createClass(Threejs_game_character, [{
        key: "simple_pawn",
        value: function simple_pawn() {
            var terrainMaxHeight = 8;

            var self = this;
            // SPHERE
            var threeObject = null;
            //var shape = null;

            var objectSize = 3;
            //var margin = 0.05;

            //var radius = 1 + Math.random() * objectSize;
            //threeObject = new THREE.Mesh( new THREE.SphereGeometry( radius, 20, 20 ), this.createObjectMaterial() );
            var geometry;
            geometry = new THREE.ConeBufferGeometry(1, 2, 4);
            //geometry = new THREE.SphereGeometry( radius, 20, 20 );
            geometry.rotateX(-Math.PI / 2);

            threeObject = new THREE.Mesh(geometry, this.createObjectMaterial());
            threeObject.position.set(0, terrainMaxHeight + objectSize + 2, 0);
            //=======================================
            /*
            shape = new Ammo.btSphereShape( radius );
            shape.setMargin( margin );
              //threeObject.position.set( ( Math.random() - 0.5 ) * terrainWidth * 0.6, terrainMaxHeight + objectSize + 2, ( Math.random() - 0.5 ) * terrainDepth * 0.6 );
            //threeObject.position.set( 64, terrainMaxHeight + objectSize + 2, 64);
            //threeObject.position.set( 0, terrainMaxHeight + objectSize + 2, 0);
              var mass = objectSize * 5;
            var localInertia = new Ammo.btVector3( 0, 0, 0 );
            shape.calculateLocalInertia( mass, localInertia );
              //console.log(shape);
            var transform = new Ammo.btTransform();
            transform.setIdentity();
            var pos = threeObject.position;
            transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
            var motionState = new Ammo.btDefaultMotionState( transform );
            var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
            var body = new Ammo.btRigidBody( rbInfo );
            console.log(body);
            body.setFriction(1);
            body.setDamping(0.8, 1.0);
            */
            var body = this.create_playershape({ obj: threeObject });

            threeObject.userData.physicsBody = body;

            this.scene.add(threeObject);
            //dynamicObjects.push( threeObject );
            this.world.addRigidBody(body);

            var transformAux1 = new Ammo.btTransform();

            var vecdir = new THREE.Vector3(); // create once and reuse it!
            //console.log(self.controlOrbit);
            var axis = new THREE.Vector3(0, 1, 0);

            var rotate = 0;

            threeObject.update = function () {
                var objPhys = threeObject.userData.physicsBody;
                var ms = objPhys.getMotionState();
                if (ms) {
                    ms.getWorldTransform(transformAux1);
                    var p = transformAux1.getOrigin();
                    var q = transformAux1.getRotation();
                    threeObject.position.set(p.x(), p.y(), p.z());
                    //threeObject.quaternion.set( q.x(), q.y(), q.z(), q.w() );
                    //console.log("update?");
                }
                var bmove = false;
                var bphysicscontrol = true;

                if (self.character != null) {
                    //console.log(self.keys.left);
                    vecdir = self.camera.getWorldDirection();
                    vecdir.normalize();
                    var theta = Math.atan2(vecdir.x, vecdir.z);
                    var vecface;
                    //self.camera.useQuaternion = true;

                    if (rotate > 360) {
                        rotate = 0;
                    }
                    if (rotate < 0) {
                        rotate = 360;
                    }
                    if (self.keys.rotate_left) {
                        rotate -= 0.1;
                    }
                    if (self.keys.rotate_right) {
                        rotate += 0.1;
                    }

                    var elapsedTime = 1;
                    var radius = 10;

                    self.camera.position.x = threeObject.position.x + radius * Math.cos(rotate * elapsedTime);
                    self.camera.position.y = threeObject.position.y + 5;
                    self.camera.position.z = threeObject.position.z + radius * Math.sin(rotate * elapsedTime);
                    self.camera.lookAt(threeObject.position);

                    /*
                    if(self.controlOrbit !=null){
                        if(threeObject !=null){
                            //self.controlOrbit.target.set(threeObject.position.x, threeObject.position.y, threeObject.position.z);
                            self.controlOrbit.target.copy(threeObject.position);
                            self.controlOrbit.maxDistance = 10;
                            //self.controlOrbit.enableDamping = true;
                            //self.controlOrbit.enableDamping = true;
                            self.controlOrbit.autoRotate = false;
                        }
                    }
                    */

                    var speed = 1;
                    if (!bphysicscontrol) {
                        speed = 1;
                    } else {
                        speed = 10;
                    }

                    //var speed = 10;

                    if (self.keys.left) {
                        threeObject.rotation.y = theta - Math.PI / 2;

                        vecface = new THREE.Vector3(0, 0, -1).applyAxisAngle(axis, theta - Math.PI / 2);
                        vecface.normalize();
                        vecface.multiplyScalar(speed);
                        if (!bphysicscontrol) {
                            threeObject.position.x += vecface.x;
                            threeObject.position.z += vecface.z;
                        }

                        self.tbv30.setValue(vecface.x, 0, vecface.z);
                        threeObject.dirvec = vecface;
                        //threeObject.userData.physicsBody.setLinearVelocity(self.tbv30);
                        //self.camera.translateX(  -10 );
                        bmove = true;
                    }
                    if (self.keys.right) {
                        threeObject.rotation.y = theta + Math.PI / 2;

                        vecface = new THREE.Vector3(0, 0, -1).applyAxisAngle(axis, theta + Math.PI / 2);
                        vecface.normalize();
                        vecface.multiplyScalar(speed);
                        if (!bphysicscontrol) {
                            threeObject.position.x += vecface.x;
                            threeObject.position.z += vecface.z;
                        }

                        self.tbv30.setValue(vecface.x, 0, vecface.z);
                        threeObject.dirvec = vecface;
                        //threeObject.userData.physicsBody.setLinearVelocity(self.tbv30);
                        //self.camera.translateX(  10 );
                        bmove = true;
                    }
                    if (self.keys.forward) {
                        threeObject.rotation.y = theta + Math.PI;
                        vecface = new THREE.Vector3(0, 0, 1).applyAxisAngle(axis, theta);
                        vecface.normalize();
                        vecface.multiplyScalar(speed);
                        //console.log(vecface);
                        if (!bphysicscontrol) {
                            threeObject.position.x += vecface.x;
                            threeObject.position.z += vecface.z;
                        }
                        //console.log(vecface);
                        threeObject.dirvec = vecface;
                        self.tbv30.setValue(vecface.x, 0, vecface.z);
                        //threeObject.userData.physicsBody.setLinearVelocity(self.tbv30);
                        bmove = true;
                    }
                    if (self.keys.back) {
                        threeObject.rotation.y = theta;

                        vecface = new THREE.Vector3(0, 0, -1).applyAxisAngle(axis, theta);
                        vecface.normalize();
                        vecface.multiplyScalar(speed);
                        if (!bphysicscontrol) {
                            threeObject.position.x += vecface.x;
                            threeObject.position.z += vecface.z;
                        }
                        threeObject.dirvec = vecface;
                        self.tbv30.setValue(vecface.x, 0, vecface.z);
                        //threeObject.userData.physicsBody.setLinearVelocity(self.tbv30);
                        bmove = true;
                    }

                    if (bphysicscontrol) {
                        if (!bmove) {
                            self.tbv30.setValue(0, 0, 0);
                            //threeObject.userData.physicsBody.setLinearVelocity(self.tbv30);
                        }
                        if (bmove) {
                            //console.log("move?");
                            threeObject.userData.physicsBody.activate();
                            threeObject.userData.physicsBody.setLinearVelocity(self.tbv30);
                        }
                    }
                    threeObject.dirrotate = theta;
                    theta = null;
                }
            };
            var raycaster = new THREE.Raycaster();
            raycaster.far = 2;
            //console.log(raycaster);
            //raycaster.distance = 5;

            threeObject.interact = function () {
                if (threeObject.dirvec == null) {
                    threeObject.dirvec = new THREE.Vector3(0, 0, -1);
                    console.log(threeObject.dirvec);
                }

                raycaster.set(threeObject.position, threeObject.dirvec);

                var intersects = raycaster.intersectObjects(self.scene.children);
                console.log(intersects);
                if (intersects.length > 0) {
                    console.log("Intersected object:", intersects.length);
                    console.log(intersects[0]);
                    intersects[0].object.material.color.setHex(Math.random() * 0xffffff);
                }
            };

            threeObject.impulse = function () {
                console.log("move?");
                self.tbv30.setValue(0, 100, 0);
                threeObject.userData.physicsBody.setLinearVelocity(self.tbv30);
            };

            threeObject.movephysics = function () {
                //console.log("move?");
                //self.tbv30.setValue(0,100,0);
                var transform = new Ammo.btTransform();
                transform.setIdentity();
                transform.setOrigin(new Ammo.btVector3(threeObject.position.x, threeObject.position.y + 0.1, threeObject.position.z));
                console.log(threeObject.userData.physicsBody);
                threeObject.userData.physicsBody.setWorldTransform(transform);

                //threeObject.userData.physicsBody.setLinearVelocity(self.tbv30);
            };

            this.character = threeObject;
        }
    }]);

    return Threejs_game_character;
}(_threejs_game_module.Threejs_game_module);

},{"./threejs_game_module":34}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_game_controller = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_game_module = require("./threejs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_game_controller = exports.Threejs_game_controller = function (_Threejs_game_module) {
    _inherits(Threejs_game_controller, _Threejs_game_module);

    function Threejs_game_controller(args) {
        _classCallCheck(this, Threejs_game_controller);

        return _possibleConstructorReturn(this, (Threejs_game_controller.__proto__ || Object.getPrototypeOf(Threejs_game_controller)).call(this, args));
    }

    _createClass(Threejs_game_controller, [{
        key: "create_input",
        value: function create_input() {
            var self = this;

            //this.keys={letft:0,right:0,forward:0,back:0};
            window.addEventListener("keydown", handleKeyDown, false);
            window.addEventListener("keyup", handleKeyUp, false);
            function handleKeyDown(evt) {
                console.log(evt.keyCode);
                //if (evt.keyCode==69){//E
                if (evt.keyCode == 70) {
                    //E
                    if (self.character != null) {
                        //console.log(self.character);
                        if (typeof self.character.interact === 'function') {
                            self.character.interact();
                        }
                    }
                }
                if (evt.keyCode == 90) {
                    //Z
                    if (self.character != null) {
                        //console.log(self.character);
                        //if(typeof self.character.impulse === 'function'){
                        //self.character.impulse();
                        //}
                        //self.start_physics();
                        //self.create_sphere_physics();
                        self.character.movephysics();
                    }
                }

                if (evt.keyCode == 88) {
                    //X
                    if (self.character != null) {
                        //console.log(self.character);
                        //if(typeof self.character.impulse === 'function'){
                        //self.character.impulse();
                        //}
                        //self.start_physics();
                        self.create_sphere_physics();
                    }
                }

                if (evt.keyCode == 67) {
                    //C
                    if (self.character != null) {
                        //console.log(self.character);
                        //if(typeof self.character.impulse === 'function'){
                        //self.character.impulse();
                        //}
                        //self.start_physics();
                        self.create_sphere_physics();
                    }
                }

                if (evt.keyCode == 81) {
                    //Q
                    self.keys.rotate_left = 1;
                    //console.log("left");
                }
                if (evt.keyCode == 69) {
                    //E
                    self.keys.rotate_right = 1;
                }

                if (evt.keyCode == 65) {
                    //A
                    self.keys.left = 1;
                    //console.log("left");
                }
                if (evt.keyCode == 68) {
                    //D
                    self.keys.right = 1;
                    //console.log("right");
                }
                if (evt.keyCode == 87) {
                    //W
                    self.keys.forward = 1;
                    //console.log("up");
                }
                if (evt.keyCode == 83) {
                    //S
                    self.keys.back = 1;
                    //console.log("down");
                }
            }

            function handleKeyUp(evt) {
                if (evt.keyCode == 81) {
                    //Q
                    self.keys.rotate_left = 0;
                }
                if (evt.keyCode == 69) {
                    //E
                    self.keys.rotate_right = 0;
                }
                if (evt.keyCode == 65) {
                    self.keys.left = 0;
                }
                if (evt.keyCode == 68) {
                    self.keys.right = 0;
                }
                if (evt.keyCode == 87) {
                    self.keys.forward = 0;
                }
                if (evt.keyCode == 83) {
                    self.keys.back = 0;
                }
            }
        }
    }]);

    return Threejs_game_controller;
}(_threejs_game_module.Threejs_game_module);

},{"./threejs_game_module":34}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_game_css3d = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_game_module = require('./threejs_game_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_game_css3d = exports.Threejs_game_css3d = function (_Threejs_game_module) {
    _inherits(Threejs_game_css3d, _Threejs_game_module);

    function Threejs_game_css3d(args) {
        _classCallCheck(this, Threejs_game_css3d);

        return _possibleConstructorReturn(this, (Threejs_game_css3d.__proto__ || Object.getPrototypeOf(Threejs_game_css3d)).call(this, args));
    }

    _createClass(Threejs_game_css3d, [{
        key: 'createinterface',
        value: function createinterface() {
            var html = '<div method="click">Click Me</div>';
            var methods = {
                click: function click(elem) {
                    console.log('element clicked!', elem);
                }
            };
            var options = {
                throttle: 250, // throttle for the renderer in milliseconds, can be disabled with false (default 250ms)
                observe: true, // watches the element for changes and re-renders (default true)
                alwaysOnTop: false, // ensures the UI is always on top of everything in the scene (default false)
                debug: false // places a small sphere at the click point (default false)
            };
            var ui = new THREE.Interface(html, methods, options);
            this.scene.add(ui);
        }
    }]);

    return Threejs_game_css3d;
}(_threejs_game_module.Threejs_game_module);

},{"./threejs_game_module":34}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_game_hud = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_game_module = require("./threejs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_game_hud = exports.Threejs_game_hud = function (_Threejs_game_module) {
    _inherits(Threejs_game_hud, _Threejs_game_module);

    function Threejs_game_hud(args) {
        _classCallCheck(this, Threejs_game_hud);

        return _possibleConstructorReturn(this, (Threejs_game_hud.__proto__ || Object.getPrototypeOf(Threejs_game_hud)).call(this, args));
    }

    _createClass(Threejs_game_hud, [{
        key: "createBaseHUD",
        value: function createBaseHUD() {
            var spriteTL, spriteTR, spriteBL, spriteBR, spriteC;
            var self = this;

            function updateHUDSprites() {
                console.log(window.innerWidth);
                var width = window.innerWidth / 2;
                var height = window.innerHeight / 2;
                var material = spriteTL.material;
                var imageWidth = material.map.image.width / 2;
                var imageHeight = material.map.image.height / 2;
                spriteTL.position.set(-width + imageWidth, height - imageHeight, 0); // top left
                spriteTR.position.set(width - imageWidth, height - imageHeight, 0); // top right
                spriteBL.position.set(-width + imageWidth, -height + imageHeight, 0); // bottom left
                spriteBR.position.set(width - imageWidth, -height + imageHeight, 0); // bottom right
                spriteC.position.set(0, 0, 0); // center
            }

            function createHUDSprites(texture) {
                var material = new THREE.SpriteMaterial({ map: texture });
                var width = material.map.image.width;
                var height = material.map.image.height;
                spriteTL = new THREE.Sprite(material);
                spriteTL.scale.set(width, height, 1);
                self.scenehud.add(spriteTL);

                spriteTR = new THREE.Sprite(material);
                spriteTR.scale.set(width, height, 1);
                self.scenehud.add(spriteTR);
                spriteBL = new THREE.Sprite(material);
                spriteBL.scale.set(width, height, 1);
                self.scenehud.add(spriteBL);
                spriteBR = new THREE.Sprite(material);
                spriteBR.scale.set(width, height, 1);
                self.scenehud.add(spriteBR);
                spriteC = new THREE.Sprite(material);
                spriteC.scale.set(width, height, 1);
                self.scenehud.add(spriteC);

                updateHUDSprites();
            }
            var textureLoader = new THREE.TextureLoader();
            var mapA = textureLoader.load("assets/sprite0.png", createHUDSprites);
        }
    }, {
        key: "createhud",
        value: function createhud() {
            var self = this;
            var textureLoader = new THREE.TextureLoader();

            function createHUDSprites(texture) {
                var material = new THREE.SpriteMaterial({ map: texture });

                var spriteTL = new THREE.Sprite(material);

                var spriteTLL = new THREE.Sprite(material);
                var material = spriteTL.material;
                var imageWidth = material.map.image.width / 2;
                var imageHeight = material.map.image.height / 2;
                var width = material.map.image.width;
                var height = material.map.image.height;
                console.log(width, ":", height);
                spriteTL.scale.set(width, height, 1);
                spriteTLL.scale.set(width, height, 1);
                var width = window.innerWidth / 2;
                var height = window.innerHeight / 2;
                spriteTL.position.set(-width + imageWidth, height - imageHeight, 0); // top left
                spriteTLL.position.set(-width + imageWidth, height - imageHeight - 50, 0); // top left

                self.scenehud.add(spriteTL);

                self.scenehud.add(spriteTLL);

                console.log(spriteTL);
                function onDocumentMouseDown(event) {
                    console.log("click");
                }
                function onDocumentOver(event) {
                    console.log("onDocumentOver");
                    spriteTL.scale.set(128 + 10, 128 + 10, 1);
                }
                function onDocumentOut(event) {
                    console.log("onDocumentOut");
                    spriteTL.scale.set(128, 128, 1);
                }

                function onDocumentOver2(event) {
                    console.log("onDocumentOver");
                    spriteTLL.scale.set(128 + 10, 128 + 10, 1);
                }
                function onDocumentOut2(event) {
                    console.log("onDocumentOut");
                    spriteTLL.scale.set(128, 128, 1);
                }
                spriteTLL.addEventListener("out", onDocumentOut2, false);
                spriteTLL.addEventListener("over", onDocumentOver2, false);

                //spriteTL.addEventListener("mousedown", onDocumentMouseDown, false);
                spriteTL.addEventListener("click", onDocumentMouseDown, false);

                spriteTL.addEventListener("out", onDocumentOut, false);
                spriteTL.addEventListener("over", onDocumentOver, false);
            }

            var mapA = textureLoader.load("assets/sprite0.png", createHUDSprites);
        }
    }, {
        key: "create_raycast_hud",
        value: function create_raycast_hud() {
            //https://threejs.org/docs/api/core/Raycaster.html
            var self = this;
            var currentui = null;
            var oldui = null;

            var raycaster = new THREE.Raycaster();
            var mouse = new THREE.Vector2();

            function onMouseMove(event) {
                // calculate mouse position in normalized device coordinates
                // (-1 to +1) for both components
                mouse.x = event.clientX / window.innerWidth * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

                raycaster.setFromCamera(mouse, self.camerahud);

                var intersects = raycaster.intersectObjects(self.scenehud.children);
                if (intersects.length > 0) {
                    //console.log(intersects[0].object);
                    //https://threejs.org/docs/api/core/EventDispatcher.html
                    //intersects[0].object.dispatchEvent({ type: 'click', message: 'vroom vroom!' });
                    currentui = intersects[0].object;
                    //console.log("hit!");
                } else {
                    currentui = null;
                }
                if (currentui != oldui) {
                    console.log("current ui!");
                    if (oldui != null) {
                        oldui.dispatchEvent({ type: 'out', message: 'vroom vroom!' });
                    }
                    oldui = currentui;
                    if (oldui != null) {
                        oldui.dispatchEvent({ type: 'over', message: 'vroom vroom!' });
                    }
                }
            }

            function raycast_mousedown(event) {
                event.preventDefault();
                // update the picking ray with the camera and mouse position
                raycaster.setFromCamera(mouse, self.camerahud);
                // calculate objects intersecting the picking ray
                var intersects = raycaster.intersectObjects(self.scenehud.children);
                if (intersects.length > 0) {
                    console.log(intersects[0].object);
                    //https://threejs.org/docs/api/core/EventDispatcher.html
                    intersects[0].object.dispatchEvent({ type: 'click', message: 'vroom vroom!' });
                }
                //for ( var i = 0; i < intersects.length; i++ ) {
                //console.log("found!");
                //intersects[ i ].object.material.color.set( 0xff0000 );
                //}
            }

            document.addEventListener('mousemove', onMouseMove, false);
            document.addEventListener('mousedown', raycast_mousedown, false);
        }
    }]);

    return Threejs_game_hud;
}(_threejs_game_module.Threejs_game_module);

},{"./threejs_game_module":34}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    Project Name: bes-threejs
    Link:https://github.com/Lightnet/bes-threejs
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/

var Threejs_game_module = exports.Threejs_game_module = function Threejs_game_module(args) {
    _classCallCheck(this, Threejs_game_module);

    if (!args) {
        args = {};
        console.log("no args...");
    }
    var propertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    for (var fun in propertyNames) {
        //console.log(fun);
        //console.log(propertyNames[fun]);
        if (propertyNames[fun] != "constructor") {
            args[propertyNames[fun]] = this[propertyNames[fun]];
        } else {
            //console.log('ignore ' + propertyNames[fun] );
        }
    }
};

},{}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_game_physics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_game_module = require('./threejs_game_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_game_physics = exports.Threejs_game_physics = function (_Threejs_game_module) {
    _inherits(Threejs_game_physics, _Threejs_game_module);

    function Threejs_game_physics(args) {
        _classCallCheck(this, Threejs_game_physics);

        return _possibleConstructorReturn(this, (Threejs_game_physics.__proto__ || Object.getPrototypeOf(Threejs_game_physics)).call(this, args));
    }

    _createClass(Threejs_game_physics, [{
        key: 'create_boxshape',
        value: function create_boxshape(args) {
            args = args || {};
            var shape;
            var margin = 0.05;
            //console.log(args);
            var _obj = args['obj'] || {};
            //console.log(_obj);
            var objectSize = args['objsize'] || 3;
            //console.log(objectSize);

            var radius = 1 + Math.random() * objectSize;

            var mass = objectSize * 5;
            var localInertia = new Ammo.btVector3(0, 0, 0);
            shape = new Ammo.btSphereShape(radius);
            shape.setMargin(margin);
            shape.calculateLocalInertia(mass, localInertia);
            //console.log(shape);
            var transform = new Ammo.btTransform();
            transform.setIdentity();
            var pos = _obj.position;
            transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
            var motionState = new Ammo.btDefaultMotionState(transform);
            var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia);
            var body = new Ammo.btRigidBody(rbInfo);
            //console.log(body);
            body.setFriction(1);
            body.setDamping(0.2, 1.0);

            return body;
        }

        //SPHERE

    }, {
        key: 'create_playershape',
        value: function create_playershape(args) {
            args = args || {};
            var shape;
            var margin = 0.05;
            //console.log(args);
            var _obj = args['obj'] || {};
            //console.log(_obj);
            var objectSize = args['objsize'] || 3;
            //console.log(objectSize);

            var radius = 1 + Math.random() * objectSize;

            var mass = objectSize * 5;
            var localInertia = new Ammo.btVector3(0, 0, 0);
            shape = new Ammo.btSphereShape(radius);
            shape.setMargin(margin);
            shape.calculateLocalInertia(mass, localInertia);
            //console.log(shape);
            var transform = new Ammo.btTransform();
            transform.setIdentity();
            var pos = _obj.position;
            transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
            var motionState = new Ammo.btDefaultMotionState(transform);
            var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia);
            var body = new Ammo.btRigidBody(rbInfo);
            //console.log(body);
            body.setFriction(1);
            body.setDamping(0.2, 1.0);

            return body;
        }
    }]);

    return Threejs_game_physics;
}(_threejs_game_module.Threejs_game_module);

},{"./threejs_game_module":34}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_game_scene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_game_module = require('./threejs_game_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_game_scene = exports.Threejs_game_scene = function (_Threejs_game_module) {
    _inherits(Threejs_game_scene, _Threejs_game_module);

    function Threejs_game_scene(args) {
        _classCallCheck(this, Threejs_game_scene);

        return _possibleConstructorReturn(this, (Threejs_game_scene.__proto__ || Object.getPrototypeOf(Threejs_game_scene)).call(this, args));
    }

    _createClass(Threejs_game_scene, [{
        key: 'createbasescene',
        value: function createbasescene() {
            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            var cube = new THREE.Mesh(geometry, material);
            cube.update = function () {
                cube.rotation.x += 0.1;
                cube.rotation.y += 0.1;
            };
            this.scene.add(cube);
            this.camera.position.z = 5;
            //console.log(this.scene);
        }
    }, {
        key: 'createbasescene02',
        value: function createbasescene02() {
            var geometry = new THREE.BufferGeometry();
            // create a simple square shape. We duplicate the top left and bottom right
            // vertices because each vertex needs to appear once per triangle.
            var vertices = new Float32Array([-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0]);

            // itemSize = 3 because there are 3 values (components) per vertex
            geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
            var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            var mesh = new THREE.Mesh(geometry, material);
            mesh.update = function () {
                //mesh.rotation.x += 0.1;
                //mesh.rotation.y += 0.1;
            };
            this.scene.add(mesh);
            this.camera.position.z = 5;
            //console.log(this.scene);
        }
    }, {
        key: 'createbasescene03',
        value: function createbasescene03() {
            var geometry = new THREE.Geometry();
            var point = new THREE.Vector3(-1, 1, 0);
            geometry.vertices.push(point, new THREE.Vector3(-1, -1, 0), new THREE.Vector3(1, -1, 0));
            geometry.faces.push(new THREE.Face3(0, 1, 2));
            geometry.verticesNeedUpdate = true;
            geometry.computeBoundingSphere();

            var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            var mesh = new THREE.Mesh(geometry, material);
            console.log(mesh);
            mesh.update = function () {
                //mesh.geometry.verticesNeedUpdate = true;
                //mesh.rotation.x += 0.1;
                //point.x += 0.1;
                //if(point.x > 1){
                //point.x = -1;
                //}
                //mesh.rotation.y += 0.1;
            };
            this.scene.add(mesh);
            this.camera.position.z = 10;
            //console.log(this.scene);
        }
    }]);

    return Threejs_game_scene;
}(_threejs_game_module.Threejs_game_module);

},{"./threejs_game_module":34}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Threejs_game_terrain = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _threejs_game_module = require("./threejs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Threejs_game_terrain = exports.Threejs_game_terrain = function (_Threejs_game_module) {
    _inherits(Threejs_game_terrain, _Threejs_game_module);

    function Threejs_game_terrain(args) {
        _classCallCheck(this, Threejs_game_terrain);

        return _possibleConstructorReturn(this, (Threejs_game_terrain.__proto__ || Object.getPrototypeOf(Threejs_game_terrain)).call(this, args));
    }

    _createClass(Threejs_game_terrain, [{
        key: "create_terrain01",
        value: function create_terrain01() {
            //https://threejs.org/docs/?q=PlaneBufferGeometry#Reference/Geometries/PlaneBufferGeometry
            //http://jsfiddle.net/tfjvggfu/24/
            //http://stackoverflow.com/questions/20153705/three-js-wireframe-material-all-polygons-vs-just-edges

            var light = new THREE.HemisphereLight(0xeeeeee, 0x888888, 1);
            light.position.set(0, 20, 0);
            this.scene.add(light);

            // axes
            this.scene.add(new THREE.AxisHelper(20));
            var geometry = new THREE.PlaneBufferGeometry(8, 8, 4, 4);
            geometry.rotateX(-Math.PI / 2);

            //var geometry = new THREE.SphereGeometry( 5, 12, 8 );
            //var material = new THREE.MeshBasicMaterial( {color: 0x156289, side: THREE.DoubleSide,wireframe: true} );
            //var material = new THREE.LineBasicMaterial( {color: 0xffffff,transparent: true,opacity: 0.5,side: THREE.DoubleSide} );
            //var material = new THREE.MeshPhongMaterial( {color: 0x156289,emissive: 0x072534,side: THREE.DoubleSide,shading: THREE.FlatShading});
            var material = new THREE.MeshPhongMaterial({
                color: 0xff0000,
                shading: THREE.FlatShading,
                polygonOffset: true,
                polygonOffsetFactor: 1, // positive value pushes polygon further away
                polygonOffsetUnits: 1,
                side: THREE.DoubleSide,
                wireframe: true
            });

            var vertices = geometry.attributes.position.array;
            for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
                vertices[j + 1] = Math.random(0, 1);
                //vertices[ j + 2 ] = Math.random(0,1);
            }
            var plane = new THREE.Mesh(geometry, material);
            // wireframe - new way
            //var geo = new THREE.EdgesGeometry( plane.geometry ); // or WireframeGeometry
            //var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2} );
            //var wireframe = new THREE.LineSegments( geo, mat );
            //plane.add( wireframe );
            //var vertices = geometry.attributes.position.array;
            //console.log(plane.geometry.attributes.position.array);
            //console.log(plane);
            //plane.rotation.x = 90;
            /*
            plane.update = function(){
                //plane.geometry.verticesNeedUpdate = true;
                //plane.geometry.attributes.needsUpdate = true;
                //plane.geometry.attributes.verticesNeedUpdate = true;
                plane.geometry.attributes.position.needsUpdate = true;
                //plane.rotation.x += 0.1;
                //point.x += 0.1;
                //if(point.x > 1){
                    //point.x = -1;
                //}
                //plane.rotation.y += 0.1;
                var vertices = plane.geometry.attributes.position.array;
                for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
            //vertices[ j + 1 ] += 0.01;
                    vertices[ j + 2 ] = Math.random(0,1);
            }
                //plane.geometry.attributes.position.array = vertices;
            };
            */
            //console.log(vertices);
            this.scene.add(plane);
            this.camera.position.z = 10;
        }
    }, {
        key: "create_terrain02",
        value: function create_terrain02() {
            //https://threejs.org/docs/?q=PlaneBufferGeometry#Reference/Geometries/PlaneBufferGeometry
            //http://jsfiddle.net/tfjvggfu/24/
            //http://stackoverflow.com/questions/20153705/three-js-wireframe-material-all-polygons-vs-just-edges

            var light = new THREE.HemisphereLight(0xeeeeee, 0x888888, 1);
            light.position.set(0, 20, 0);
            this.scene.add(light);
            this.scene.add(new THREE.AxisHelper(20));
            var geometry = new THREE.PlaneBufferGeometry(8, 8, 4, 4);
            geometry.rotateX(-Math.PI / 2);
            var material = new THREE.MeshPhongMaterial({
                color: 0xff0000,
                shading: THREE.FlatShading,
                polygonOffset: true,
                polygonOffsetFactor: 1, // positive value pushes polygon further away
                polygonOffsetUnits: 1,
                side: THREE.DoubleSide,
                wireframe: true
            });
            var terrainheight = [];
            var vertices = geometry.attributes.position.array;
            for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
                vertices[j + 1] = Math.random(0, 1);
                terrainheight.push(vertices[j + 1]);
                //vertices[ j + 2 ] = Math.random(0,1);
            }

            var plane = new THREE.Mesh(geometry, material);
            //plane.update = function(){
            //plane.geometry.attributes.position.needsUpdate = true;
            //var vertices = plane.geometry.attributes.position.array;
            //for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
            //vertices[ j + 1 ] = Math.random(0,1);
            //}
            //};

            this.scene.add(plane);
            this.camera.position.z = 10;
        }

        //world

    }, {
        key: "create_terrain03",
        value: function create_terrain03() {
            var self = this;
            var light = new THREE.HemisphereLight(0xeeeeee, 0x888888, 1);
            light.position.set(0, 20, 0);
            this.scene.add(light);
            this.scene.add(new THREE.AxisHelper(20));

            var geometry = new THREE.PlaneBufferGeometry(128, 128, 4, 4);
            geometry.rotateX(-Math.PI / 2);
            var material = new THREE.MeshPhongMaterial({
                color: 0xff0000,
                shading: THREE.FlatShading,
                polygonOffset: true,
                polygonOffsetFactor: 1, // positive value pushes polygon further away
                polygonOffsetUnits: 1,
                side: THREE.DoubleSide,
                wireframe: true
            });
            var heightData = [];
            var vertices = geometry.attributes.position.array;
            for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
                vertices[j + 1] = Math.floor(Math.random() * 10);
                heightData.push(vertices[j + 1]);
                //vertices[ j + 2 ] = Math.random(0,1);
            }

            var plane = new THREE.Mesh(geometry, material);
            //plane.update = function(){
            //plane.geometry.attributes.position.needsUpdate = true;
            //var vertices = plane.geometry.attributes.position.array;
            //for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
            //vertices[ j + 1 ] = Math.random(0,1);
            //}
            //};

            this.scene.add(plane);
            this.camera.position.z = 10;

            var terrainWidthExtents = 100;
            var terrainDepthExtents = 100;
            var terrainWidth = 128;
            var terrainDepth = 128;
            var terrainHalfWidth = terrainWidth / 2;
            var terrainHalfDepth = terrainDepth / 2;
            var terrainMaxHeight = 8;
            var terrainMinHeight = -2;

            var groundShape;
            groundShape = this.createTerrainShape(heightData);
            //var groundShape = new Ammo.btBoxShape( new Ammo.btVector3(128, 0.1, 128 ) );
            //console.log(groundShape);

            var groundTransform = new Ammo.btTransform();
            groundTransform.setIdentity();
            // Shifts the terrain, since bullet re-centers it on its bounding box.
            groundTransform.setOrigin(new Ammo.btVector3(0, (terrainMaxHeight + terrainMinHeight) / 2, 0));
            var groundMass = 0;
            var groundLocalInertia = new Ammo.btVector3(0, 0, 0);
            var groundMotionState = new Ammo.btDefaultMotionState(groundTransform);
            var groundBody = new Ammo.btRigidBody(new Ammo.btRigidBodyConstructionInfo(groundMass, groundMotionState, groundShape, groundLocalInertia));
            this.world.addRigidBody(groundBody);
        }

        //world

    }, {
        key: "create_terrain04",
        value: function create_terrain04() {
            var self = this;
            var light = new THREE.HemisphereLight(0xeeeeee, 0x888888, 1);
            light.position.set(0, 20, 0);
            this.scene.add(light);
            this.scene.add(new THREE.AxisHelper(20));

            var geometry = new THREE.PlaneBufferGeometry(128, 128, 4, 4);
            geometry.rotateX(-Math.PI / 2);
            var material = new THREE.MeshPhongMaterial({
                color: 0xff0000,
                shading: THREE.FlatShading,
                polygonOffset: true,
                polygonOffsetFactor: 1, // positive value pushes polygon further away
                polygonOffsetUnits: 1,
                side: THREE.DoubleSide,
                wireframe: true
            });
            var heightData = [];
            var vertices = geometry.attributes.position.array;
            for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
                //vertices[ j + 1 ] = Math.floor(Math.random() * 10);
                heightData.push(vertices[j + 1]);
                //vertices[ j + 2 ] = Math.random(0,1);
            }

            var plane = new THREE.Mesh(geometry, material);
            //plane.update = function(){
            //plane.geometry.attributes.position.needsUpdate = true;
            //var vertices = plane.geometry.attributes.position.array;
            //for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
            //vertices[ j + 1 ] = Math.random(0,1);
            //}
            //};

            this.scene.add(plane);
            this.camera.position.z = 10;

            var terrainWidthExtents = 100;
            var terrainDepthExtents = 100;
            var terrainWidth = 128;
            var terrainDepth = 128;
            var terrainHalfWidth = terrainWidth / 2;
            var terrainHalfDepth = terrainDepth / 2;
            var terrainMaxHeight = 8;
            var terrainMinHeight = -2;

            var groundShape;
            groundShape = this.createTerrainShape(heightData);
            //var groundShape = new Ammo.btBoxShape( new Ammo.btVector3(128, 0.1, 128 ) );
            //console.log(groundShape);

            var groundTransform = new Ammo.btTransform();
            groundTransform.setIdentity();
            // Shifts the terrain, since bullet re-centers it on its bounding box.
            groundTransform.setOrigin(new Ammo.btVector3(0, (terrainMaxHeight + terrainMinHeight) / 2, 0));
            var groundMass = 0;
            var groundLocalInertia = new Ammo.btVector3(0, 0, 0);
            var groundMotionState = new Ammo.btDefaultMotionState(groundTransform);
            var groundBody = new Ammo.btRigidBody(new Ammo.btRigidBodyConstructionInfo(groundMass, groundMotionState, groundShape, groundLocalInertia));
            this.world.addRigidBody(groundBody);
        }
    }, {
        key: "createObjectMaterial",
        value: function createObjectMaterial() {
            var c = Math.floor(Math.random() * (1 << 24));
            return new THREE.MeshPhongMaterial({ color: c });
        }
    }, {
        key: "createTerrainShape",
        value: function createTerrainShape(heightData) {
            var terrainWidthExtents = 128;
            var terrainDepthExtents = 128;
            //var terrainWidth = 128;
            //var terrainDepth = 128;
            var terrainWidth = 5;
            var terrainDepth = 5;

            var terrainHalfWidth = terrainWidth / 2;
            var terrainHalfDepth = terrainDepth / 2;
            var terrainMaxHeight = 8;
            var terrainMinHeight = -2;
            var ammoHeightData = null;

            // This parameter is not really used, since we are using PHY_FLOAT height data type and hence it is ignored
            var heightScale = 1;
            // Up axis = 0 for X, 1 for Y, 2 for Z. Normally 1 = Y is used.
            var upAxis = 1;
            // hdt, height data type. "PHY_FLOAT" is used. Possible values are "PHY_FLOAT", "PHY_UCHAR", "PHY_SHORT"
            var hdt = "PHY_FLOAT";
            // Set this to your needs (inverts the triangles)
            var flipQuadEdges = false;
            // Creates height data buffer in Ammo heap
            ammoHeightData = Ammo._malloc(4 * terrainWidth * terrainDepth);
            // Copy the javascript height data array to the Ammo one.
            var p = 0;
            var p2 = 0;
            for (var j = 0; j < terrainDepth; j++) {
                for (var i = 0; i < terrainWidth; i++) {
                    // write 32-bit float data to memory
                    Ammo.HEAPF32[ammoHeightData + p2 >> 2] = heightData[p];
                    //console.log(heightData[ p ]);
                    p++;
                    // 4 bytes/float
                    p2 += 4;
                }
            }

            // Creates the heightfield physics shape
            var heightFieldShape = new Ammo.btHeightfieldTerrainShape(terrainWidth, terrainDepth, ammoHeightData, heightScale, terrainMinHeight, terrainMaxHeight, upAxis, hdt, flipQuadEdges);

            // Set horizontal scale
            var scaleX = terrainWidthExtents / (terrainWidth - 1);
            var scaleZ = terrainDepthExtents / (terrainDepth - 1);
            heightFieldShape.setLocalScaling(new Ammo.btVector3(scaleX, 1, scaleZ));

            heightFieldShape.setMargin(0.05);

            return heightFieldShape;
        }
    }]);

    return Threejs_game_terrain;
}(_threejs_game_module.Threejs_game_module);

},{"./threejs_game_module":34}]},{},[15])

//# sourceMappingURL=app.js.map
