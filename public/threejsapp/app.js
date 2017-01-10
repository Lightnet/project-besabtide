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

require('../../js/jquery.min.js');

require('../../js/jquery-ui.min.js');

require('../../js/jquery.layout.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameEditor = exports.GameEditor = (_dec = (0, _core.Component)({
    selector: 'gameeditor',
    template: '\n    <editormenu></editormenu>\n    <div id="container" style="height:100%;">\n        <div class="ui-layout-center" style="margin: 0;padding : 0;">\n            <canvas id="renderCanvas"></canvas>\n        </div>\n        <div class="ui-layout-north">\n\n        </div>\n        <div class="ui-layout-south" style="margin: 0;padding : 0;">\n            <editorpanel></editorpanel>\n        </div>\n        <div class="ui-layout-east">\n            <scene-list></scene-list>\n            <objectprops></objectprops>\n        </div>\n        <div class="ui-layout-west">\n            <assets-list></assets-list>\n        </div>\n    </div>\n    '
}), _dec(_class = function () {
    function GameEditor(gameservice) {
        _classCallCheck(this, GameEditor);

        this.scene = null;

        this.gameservice = gameservice;
        //var self = this;
        //window.addEventListener('DOMContentLoaded', ()=>{
        //console.log("loaded?");
        //self.init();
        //});
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
                this.camera.aspect = width / height;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(width, height);
                layout = null;
                width = null;
                height = null;
            }
        }
    }, {
        key: 'init',
        value: function init() {
            var canvas = document.getElementById("renderCanvas");

            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

            //var renderer = new THREE.WebGLRenderer();
            var renderer = new THREE.WebGLRenderer({ canvas: canvas });
            //renderer.setSize( window.innerWidth, window.innerHeight );
            var layout = $('#container').layout();
            var width = layout.state.center.innerWidth;
            var height = layout.state.center.innerHeight;
            renderer.setSize(width, height);
            //document.body.appendChild( renderer.domElement );


            this.renderer = renderer;
            this.camera = camera;
            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            var cube = new THREE.Mesh(geometry, material);
            cube.name = "cube";
            //cube.position.x = 5;
            //cube.position.y = -0.1;
            scene.add(cube);
            //cube = new THREE.Mesh( geometry, material );
            //cube.name = "cube";
            //scene.add( cube );

            this.gameservice.scene = scene;

            camera.position.z = 5;

            var render = function render() {
                requestAnimationFrame(render);

                cube.rotation.x += 0.1;
                cube.rotation.y += 0.1;

                renderer.render(scene, camera);
            };

            render();
        }
    }]);

    return GameEditor;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], GameEditor);

},{"../../js/jquery-ui.min.js":1,"../../js/jquery.layout.min.js":1,"../../js/jquery.min.js":1,"../../js/three.min.js":1,"../services/game.service":16,"@angular/core":"@angular/core","rxjs/add/operator/map":"rxjs/add/operator/map"}],9:[function(require,module,exports){
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
}) || _class);

},{"@angular/core":"@angular/core"}]},{},[15])

//# sourceMappingURL=app.js.map
