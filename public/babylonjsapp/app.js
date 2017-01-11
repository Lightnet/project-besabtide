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

require('../js/babylon.min.js');

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

},{"../js/babylon.min.js":1,"../js/jquery-ui.min.js":1,"../js/jquery.layout.min.js":1,"../js/jquery.min.js":1,"./services/game.service":68,"@angular/core":"@angular/core","rxjs/add/operator/map":"rxjs/add/operator/map"}],3:[function(require,module,exports){
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

var _consolepanel = require('./components/consolepanel.component');

var _shapecubemodal = require('./components/shapecubemodal.component');

var _shapespheremodal = require('./components/shapespheremodal.component');

var _shapeplanemodal = require('./components/shapeplanemodal.component');

var _shapeterrainmodal = require('./components/shapeterrainmodal.component');

var _objectmaterialmodal = require('./components/objectmaterialmodal.component');

var _shapecharactermodal = require('./components/shapecharactermodal.component');

var _navmenu = require('./components/navmenu.component');

var _game = require('./services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const routing = RouterModule.forRoot([
//{ path: '', component: Hello },
//{ path: 'ciao/:name', component: Ciao },
//]);

var AppModule = exports.AppModule = (_dec = (0, _core.NgModule)({
    imports: [_platformBrowser.BrowserModule, _forms.FormsModule],
    declarations: [_app.MainApp, _ng2AceEditor.AceEditorDirective, _ng2AceEditor.AceEditorComponent, _gameeditor.GameEditor, _navmenu.NavMenu, _scripteditorlayout.ScriptEditorLayout, _scene.SceneList, _assets.AssetsList, _scripteditormenu.ScriptEditorMenu, _scripteditorexplore.ScriptEditorExplore, _codeeditor.CodeEditor, _objectprops.Objectprops, _editorpanel.EditorPanel, _consolepanel.ConsolePanel, _editormenu.EditorMenu, _shapecubemodal.ShapeCubeModal, _shapespheremodal.ShapeSphereModal, _shapeplanemodal.ShapePlaneModal, _shapeterrainmodal.ShapeTerrainModal, _objectmaterialmodal.ObjectMaterialModal, _shapecharactermodal.ShapeCharacterModal],
    providers: [_game.GameService],
    bootstrap: [_app.MainApp]
}), _dec(_class = function AppModule() {
    _classCallCheck(this, AppModule);
}) || _class);

},{"./app.component":2,"./components/assets.component":49,"./components/codeeditor.component":50,"./components/consolepanel.component":51,"./components/editormenu.component":52,"./components/editorpanel.component":53,"./components/gameeditor.component":54,"./components/navmenu.component":55,"./components/objectmaterialmodal.component":56,"./components/objectprops.component":57,"./components/scene.component":58,"./components/scripteditorexplore.component":59,"./components/scripteditorlayout.component":60,"./components/scripteditormenu.component":61,"./components/shapecharactermodal.component":62,"./components/shapecubemodal.component":63,"./components/shapeplanemodal.component":64,"./components/shapespheremodal.component":65,"./components/shapeterrainmodal.component":66,"./services/game.service":68,"@angular/core":"@angular/core","@angular/forms":"@angular/forms","@angular/platform-browser":"@angular/platform-browser","ng2-ace-editor":"ng2-ace-editor","rxjs/add/operator/map":"rxjs/add/operator/map"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.Babylonjs_framework = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _babylonjs_framework_network = require('./babylonjs_framework_network');

var _babylonjs_framework_physics = require('./babylonjs_framework_physics');

var _babylonjs_framework_scene = require('./babylonjs_framework_scene');

var _babylonjs_framework_editor = require('./babylonjs_framework_editor');

var _babylonjs_framework_gui = require('./babylonjs_framework_gui');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//place holder id
function object3d() {
				this.uuid = "";
				this.name = "none";
				return this;
}

var Babylonjs_framework = exports.Babylonjs_framework = function () {
				function Babylonjs_framework(args) {
								_classCallCheck(this, Babylonjs_framework);

								new _babylonjs_framework_network.Babylonjs_framework_network(this);
								new _babylonjs_framework_physics.Babylonjs_framework_physics(this);
								new _babylonjs_framework_scene.Babylonjs_framework_scene(this);
								new _babylonjs_framework_editor.Babylonjs_framework_editor(this);
								new _babylonjs_framework_gui.Babylonjs_framework_gui(this);

								var self = this;
								this.onload = false;
								this.binit = true;
								this.reload = false; //web browser editor reload url

								this.scenename = "default"; //default name
								this.scenes = []; //manage scene

								//var id = new object3d();
								//console.log(id);
								if (args != null) {
												//this need to be last else it variable are not assign
												if (args['onload'] != null) {
																this.onload = args['onload'];
																//console.log(args);
												}
								}

								if (this.onload) {
												console.log('init window listen Babylonjs setup... ');
												this.addListener("load", window, function () {
																self.init();
												});
								}
				}

				_createClass(Babylonjs_framework, [{
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

								//window load listen event

				}, {
								key: 'addListener',
								value: function addListener(event, obj, fn) {
												if (obj.addEventListener) {
																obj.addEventListener(event, fn, false); // modern browsers
												} else {
																obj.attachEvent("on" + event, fn); // older versions of IE
												}
								}
				}, {
								key: 'enableMeshesCollision',
								value: function enableMeshesCollision(meshes) {
												meshes.forEach(function (mesh) {
																mesh.checkCollisions = true;
												});
								}

								//this need to be here sub class add doesn't work
								//start render scene set array

				}, {
								key: 'start_scenerender',
								value: function start_scenerender() {
												/*
            var self = this;
            this.engine.runRenderLoop(function() {
                //console.log("main render!");
            if(self.scenes[self.scenename] !=null){
            if(typeof self.scenes[self.scenename].renderloop === 'function'){
            self.scenes[self.scenename].renderloop(); //custom function call
            }else{
            self.scenes[self.scenename].render();
            }
            }
            });
            */
								}
				}, {
								key: 'init',
								value: function init() {
												//console.log("init babylonjsbes6");
												var self = this;
												this.canvas = document.getElementById('renderCanvas');
												this.engine = new BABYLON.Engine(this.canvas, true);
												//disable  manifest cache
												this.engine.enableOfflineSupport = false;
												//console.log(this.engine);
												//https://doc.babylonjs.com/tutorials/how_to_use_assetsmanager
												this.engine.loadingUIText = "loading...";
												//this.engine.displayLoadingUI();
												this.scene = this.createScene();
												//console.log(this.scenename);
												this.scenes[this.scenename] = this.scene;
												//this.scenes[this.scenename].looprender=function(){
												//this.render();
												//}

												//this.setup_network();
												//render the scene
												this.start_scenerender();

												//add listen event for window to load
												window.addEventListener('resize', function () {
																self.engine.resize();
												});
								}
				}]);

				return Babylonjs_framework;
}();

},{"./babylonjs_framework_editor":5,"./babylonjs_framework_gui":6,"./babylonjs_framework_network":8,"./babylonjs_framework_physics":9,"./babylonjs_framework_scene":10}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_framework_editor = undefined;

var _babylonjs_framework_module = require('./babylonjs_framework_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_framework_editor = exports.Babylonjs_framework_editor = function (_Babylonjs_framework_) {
    _inherits(Babylonjs_framework_editor, _Babylonjs_framework_);

    function Babylonjs_framework_editor(args) {
        _classCallCheck(this, Babylonjs_framework_editor);

        return _possibleConstructorReturn(this, (Babylonjs_framework_editor.__proto__ || Object.getPrototypeOf(Babylonjs_framework_editor)).call(this, args));
    }

    //http://doc.babylonjs.com/classes/2.4/Mesh
    /*
    parse_object(args){
        var _obj;
        if(args !=null){
            if(args['freecamera'] != null){
                _obj = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), this.scene);
            }
              if(args['scene'] != null){
                _obj = new BABYLON.Scene(this.engine);
            }
              if(args['hemisphericlight'] != null){
                _obj = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), this.scene);
            }
    			if(args['geometrytype'] !=null){
    if(args['geometrytype'] == 'cube'){
    	_obj = this.parse_createcube(args);
             }
    		if(args['geometrytype'] == 'sphere'){
                 //_obj = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, this.scene);
                    _obj = this.parse_createsphere(args);
             }
               if(args['geometrytype'] == 'ground'){
                 _obj = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, this.scene);
             }
    		if(args['geometrytype'] == 'plane'){
                 _obj = BABYLON.Mesh.CreatePlane("plane", 10.0, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
             }
               if(args['geometrytype'] == 'disc'){
                 _obj = BABYLON.Mesh.CreateDisc("disc", 5, 30, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
             }
               if(args['geometrytype'] == 'cylinder'){
                 //_obj = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
                    _obj = this.parse_createcylinder(args);
             }
               if(args['geometrytype'] == 'torus'){
                 _obj = BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
             }
               if(args['geometrytype'] == 'knot'){
                 _obj = BABYLON.Mesh.CreateTorusKnot("knot", 2, 0.5, 128, 64, 2, 3, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
             }
             if(args['geometrytype'] == 'lines'){
                   //_obj = BABYLON.Mesh.CreateLines("lines", [
                     //new BABYLON.Vector3(-10, 0, 0),
                     //new BABYLON.Vector3(10, 0, 0),
                     //new BABYLON.Vector3(0, 0, -10),
                     //new BABYLON.Vector3(0, 0, 10)
                 //], scene);
               }
               if(args['dashedLines'] != null){
                 //_obj = BABYLON.Mesh.CreateDashedLines("dashedLines", [v1, v2, ... vn], dashSize, gapSize, dashNb, scene);
             }
               if(args['ribbon'] != null){
                 //_obj = BABYLON.Mesh.CreateRibbon("ribbon", [path1, path2, ..., pathn], false, false, 0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
             }
               if(args['tube'] != null){
                 //_obj = BABYLON.Mesh.CreateTube("tube", [V1, V2, ..., Vn], radius, tesselation, radiusFunction, cap, scene, false, BABYLON.Mesh.DEFAULTSIDE);
             }
               if(args['tiledhround'] != null){
                 //_obj = BABYLON.Mesh.CreateTiledGround("Tiled Ground", -3, -3, 3, 3, subdivisions, precision, scene, false);
             }
                  if(args['position'] !=null){
                    _obj.position.x = args['position']['x'] || 0;
                    _obj.position.y = args['position']['y'] || 0;
                    _obj.position.z = args['position']['z'] || 0;
                }
                if(args['rotation'] != null){
                    _obj.rotation.x = args['rotation']['x'] || 0;
                    _obj.rotation.y = args['rotation']['y'] || 0;
                    _obj.rotation.z = args['rotation']['z'] || 0;
                }
                  if(args['scaling'] !=null){
                    _obj.scaling.x = args['scaling']['x'] || 1;
                    _obj.scaling.y = args['scaling']['y'] || 1;
                    _obj.scaling.z = args['scaling']['z'] || 1;
                }
    	}
          }else{
            }
          return _obj;
    }
    parse_createcube(args){
    //console.log("found");
    //console.log(args);
    var _obj = null;
    var params = {};
    //if(args['box'] != null){
    //var _obj = BABYLON.MeshBuilder.CreateBox("ground", {height:1,width:20,depth:20}, this.scene);
    //args = args['box'];
    params.height = args['parameters']['height'] || 1;
    params.width = args['parameters']['width'] || 1;
    params.depth = args['parameters']['depth'] || 1;
            //console.log(params);
    var _obj = BABYLON.MeshBuilder.CreateBox("box",params, this.scene);
            _obj.rpgobj = new RPGCube(args);
            //console.log(args['position']);
    //}
    return _obj;
    }
      parse_createsphere(args){
        var params = {};
        var _obj = null;
        //params.diameterTop = args['parameters']['diameter'] || 1;
        params.diameter = args['parameters']['diameter'] || 1;
        _obj =  BABYLON.MeshBuilder.CreateSphere('sphere', params, this.scene);
        _obj.rpgobj = new RPGSphere(args);
        return _obj;
    }
      parse_createcylinder(args){
        var params = {};
        var _obj = null;
        params.diameterTop = args['parameters']['diameterTop'] || 1;
        //params.diameter = args['parameters']['diameter'] || 1;
        params.tessellation = Number(args['parameters']['tessellation'] || 4);
        console.log(params);
        _obj =  BABYLON.MeshBuilder.CreateCylinder('Cylinder', params, this.scene);
        //_obj = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, this.scene);
        _obj.rpgobj = new RPGCylinder(args);
        return _obj;
    }
    */


    return Babylonjs_framework_editor;
}(_babylonjs_framework_module.Babylonjs_framework_module);

},{"./babylonjs_framework_module":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.Babylonjs_framework_gui = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _babylonjs_framework_module = require("./babylonjs_framework_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_framework_gui = exports.Babylonjs_framework_gui = function (_Babylonjs_framework_) {
				_inherits(Babylonjs_framework_gui, _Babylonjs_framework_);

				function Babylonjs_framework_gui(args) {
								_classCallCheck(this, Babylonjs_framework_gui);

								return _possibleConstructorReturn(this, (Babylonjs_framework_gui.__proto__ || Object.getPrototypeOf(Babylonjs_framework_gui)).call(this, args));
				}

				_createClass(Babylonjs_framework_gui, [{
								key: "create_hud",
								value: function create_hud() {
												//http://doc.babylonjs.com/tutorials/Using_the_Canvas2D
												//http://doc.babylonjs.com/overviews/Canvas2D_Home
												console.log("init hud");
												this.screencanvas = new BABYLON.ScreenSpaceCanvas2D(this.scene, {
																id: "ScreenCanvas",
																size: new BABYLON.Size(300, 100),
																backgroundFill: "#4040408F",
																//backgroundRoundRadius: 50,
																children: [new BABYLON.Text2D("Hello World!", {
																				id: "text",
																				marginAlignment: "h: center, v:center",
																				fontName: "20pt Arial"
																})]
												});
								}
				}]);

				return Babylonjs_framework_gui;
}(_babylonjs_framework_module.Babylonjs_framework_module);

},{"./babylonjs_framework_module":7}],7:[function(require,module,exports){
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
//simple module add class to the support build.
var Babylonjs_framework_module = exports.Babylonjs_framework_module = function Babylonjs_framework_module(args) {
    _classCallCheck(this, Babylonjs_framework_module);

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

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.Babylonjs_framework_network = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _babylonjs_framework_module = require('./babylonjs_framework_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_framework_network = exports.Babylonjs_framework_network = function (_Babylonjs_framework_) {
				_inherits(Babylonjs_framework_network, _Babylonjs_framework_);

				function Babylonjs_framework_network(args) {
								_classCallCheck(this, Babylonjs_framework_network);

								return _possibleConstructorReturn(this, (Babylonjs_framework_network.__proto__ || Object.getPrototypeOf(Babylonjs_framework_network)).call(this, args));
				}

				_createClass(Babylonjs_framework_network, [{
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

				return Babylonjs_framework_network;
}(_babylonjs_framework_module.Babylonjs_framework_module);

},{"./babylonjs_framework_module":7}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.Babylonjs_framework_physics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _babylonjs_framework_module = require("./babylonjs_framework_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


//template
var Babylonjs_framework_physics = exports.Babylonjs_framework_physics = function (_Babylonjs_framework_) {
				_inherits(Babylonjs_framework_physics, _Babylonjs_framework_);

				function Babylonjs_framework_physics(args) {
								_classCallCheck(this, Babylonjs_framework_physics);

								return _possibleConstructorReturn(this, (Babylonjs_framework_physics.__proto__ || Object.getPrototypeOf(Babylonjs_framework_physics)).call(this, args));
				}

				_createClass(Babylonjs_framework_physics, [{
								key: "createscene_physics",
								value: function createscene_physics() {
												this.sphere.position.y = 5;
												this.sphere.physicsImpostor = new BABYLON.PhysicsImpostor(this.sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9 }, this.scene);
												this.sphere.material = new BABYLON.StandardMaterial("Mat", this.scene);

												this.ground.physicsImpostor = new BABYLON.PhysicsImpostor(this.ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, this.scene);

												//this.sphere.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,1,0));
												//impostor.setAngularVelocity(new BABYLON.Quaternion(0,1,0,0));
												//console.log(this.sphere.physicsImpostor);
												//this.sphere.physicsImpostor.setDeltaPosition(new BABYLON.Vector3(0,5,0));

												//this.sphere.physicsImpostor.registerOnPhysicsCollide(this.ground.physicsImpostor, function(main, collided) {
												//main.object.material.diffuseColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
												//console.log("hit");
												//});
								}

								//init oimo.js physics

				}, {
								key: "init_physics",
								value: function init_physics() {
												//this.scene.enablePhysics(new BABYLON.Vector3(0,-10,0), new BABYLON.OimoJSPlugin());
												this.scene.enablePhysics(new BABYLON.Vector3(0, -10, 0), new BABYLON.CannonJSPlugin());
								}
				}, {
								key: "parse_physcis",
								value: function parse_physcis() {}
				}]);

				return Babylonjs_framework_physics;
}(_babylonjs_framework_module.Babylonjs_framework_module);

},{"./babylonjs_framework_module":7}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Babylonjs_framework_scene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _babylonjs_framework_module = require('./babylonjs_framework_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_framework_scene = exports.Babylonjs_framework_scene = function (_Babylonjs_framework_) {
	_inherits(Babylonjs_framework_scene, _Babylonjs_framework_);

	//export class Babylonjs_framework_scene {

	function Babylonjs_framework_scene(args) {
		_classCallCheck(this, Babylonjs_framework_scene);

		return _possibleConstructorReturn(this, (Babylonjs_framework_scene.__proto__ || Object.getPrototypeOf(Babylonjs_framework_scene)).call(this, args));
		//args.createScene = this.createScene;
		//args.createscene_objects = this.createscene_objects;
		//args.start_scenerender = this.start_scenerender;
	}

	//create simple scene


	_createClass(Babylonjs_framework_scene, [{
		key: 'createScene',
		value: function createScene() {
			// create a basic BJS Scene object
			var scene = new BABYLON.Scene(this.engine);
			// create a FreeCamera, and set its position to (x:0, y:5, z:-10)
			var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
			//console.log(camera);
			// target the camera to scene origin
			camera.setTarget(BABYLON.Vector3.Zero());
			// attach the camera to the canvas
			camera.attachControl(this.canvas, false);
			this.camera = camera;
			// return the created scene
			return scene;
		}

		//create example scene

	}, {
		key: 'createscene_objects',
		value: function createscene_objects() {
			// create a basic light, aiming 0,1,0 - meaning, to the sky
			var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);
			// create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
			var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, this.scene);
			// move the sphere upward 1/2 of its height
			sphere.position.y = 1;
			this.sphere = sphere;
			// create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
			var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, this.scene);
			this.ground = ground;
		}

		//start_scenerender(){
		//var self = this;
		//this.engine.runRenderLoop(function() {
		//console.log("main render!");
		//if(self.scenes[self.scenename] !=null){
		//if(typeof self.scenes[self.scenename].renderloop === 'function'){
		//self.scenes[self.scenename].renderloop(); //custom function call
		//}else{
		//self.scenes[self.scenename].render();
		//}
		//}
		//});
		//}


	}]);

	return Babylonjs_framework_scene;
}(_babylonjs_framework_module.Babylonjs_framework_module);

},{"./babylonjs_framework_module":7}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _babylonjs_framework = require('../babylonjs_framework/babylonjs_framework');

var _ObjectRPGID = require('./rpg/ObjectRPGID');

var _RPGStats = require('./rpg/RPGStats');

var _RPGStatus = require('./rpg/RPGStatus');

var _RPGItem = require('./rpg/RPGItem');

var _Babylonjs_game_network = require('./network/Babylonjs_game_network');

var _Babylonjs_game_physics = require('./physics/Babylonjs_game_physics');

var _Babylonjs_game_load = require('./load/Babylonjs_game_load');

var _Babylonjs_game_scene = require('./scene/Babylonjs_game_scene');

var _Babylonjs_game_hud = require('./hud/Babylonjs_game_hud');

var _Babylonjs_game_hud_battle = require('./hud/Babylonjs_game_hud_battle');

var _Babylonjs_game_hud_inventory = require('./hud/Babylonjs_game_hud_inventory');

var _Babylonjs_game_hud_loot = require('./hud/Babylonjs_game_hud_loot');

var _Babylonjs_game_hud_skills = require('./hud/Babylonjs_game_hud_skills');

var _Babylonjs_game_hud_shop = require('./hud/Babylonjs_game_hud_shop');

var _Babylonjs_game_hud_storage = require('./hud/Babylonjs_game_hud_storage');

var _Babylonjs_game_hud_trade = require('./hud/Babylonjs_game_hud_trade');

var _Babylonjs_game_hud_market = require('./hud/Babylonjs_game_hud_market');

var _Babylonjs_game_ui = require('./ui/Babylonjs_game_ui');

var _Babylonjs_game_editor = require('./editor/Babylonjs_game_editor');

var _Babylonjs_game_assets = require('./system/Babylonjs_game_assets');

var _Babylonjs_game_character = require('./character/Babylonjs_game_character');

var _Babylonjs_game_controller = require('./controller/Babylonjs_game_controller');

var _Babylonjs_game_battle = require('./system/Babylonjs_game_battle');

var _Babylonjs_game_parse = require('./system/Babylonjs_game_parse');

var _Babylonjs_game_loadsave = require('./system/Babylonjs_game_loadsave');

var _Babylonjs_game_gundb = require('./system/Babylonjs_game_gundb');

var _Babylonjs_game_terrain = require('./terrain/Babylonjs_game_terrain');

var _Babylonjs_game_jqueryui = require('./jqueryui/Babylonjs_game_jqueryui');

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

var Babylonjs_game = exports.Babylonjs_game = function (_Babylonjs_framework) {
    _inherits(Babylonjs_game, _Babylonjs_framework);

    function Babylonjs_game(args) {
        _classCallCheck(this, Babylonjs_game);

        var _this = _possibleConstructorReturn(this, (Babylonjs_game.__proto__ || Object.getPrototypeOf(Babylonjs_game)).call(this, args));

        _this.materials = [];
        _this.textures = [];
        _this.meshes = [];
        _this.models = [];

        _this.characters = [];
        _this.dimensionstorage = [];

        _this.companions = []; //those who join in your party that travel together
        _this.squads = [];

        _this.friends = []; //battle mode?
        _this.foes = []; //battle mode?

        _this.turns = [];
        _this.parties = []; //who in the party //battle mode?
        _this.enemies = []; //threat if player attack or in battle actions //battle mode?
        _this.npcs = []; //local villagers

        _this.scene_battle;
        _this.scene_dimension_homebase;
        _this.scene_global_map;
        _this.scene_world_map;
        _this.scene_local_map;

        _this.sceneassets;
        _this.assetsManager;
        _this.config_assets;
        //controls
        _this.controllerid = 0;
        _this.bcontroller = true;
        _this.keys = {
            letft: 0,
            right: 0,
            forward: 0,
            back: 0
        };
        _this.moveVector = new BABYLON.Vector3(0, 0, 0);

        _this.npc = null;

        _this.leftstickmove = false;
        _this.joyleftdir = new BABYLON.Vector3(0, 0, 0);
        _this.joylefttrigger = 0;
        _this.joyrightdir = new BABYLON.Vector3(0, 0, 0);
        _this.joyrighttrigger = 0;

        //EDITOR props
        //this.text2D;
        _this.selectobject = null;

        _this.selectobject_text_id = null;

        _this.selectobject_text_px = null;
        _this.selectobject_text_py = null;
        _this.selectobject_text_pz = null;

        _this.selectobject_text_rx = null;
        _this.selectobject_text_ry = null;
        _this.selectobject_text_rz = null;

        _this.selectobject_text_sx = null;
        _this.selectobject_text_sy = null;
        _this.selectobject_text_sz = null;

        _this.scriptcount = 0;
        self.mappdata = {};

        _this.display_inventory = [];
        _this.inventory = [];
        _this.scroll_inventory_y = 0;

        new _Babylonjs_game_network.Babylonjs_game_network(_this);
        new _Babylonjs_game_physics.Babylonjs_game_physics(_this);
        new _Babylonjs_game_parse.Babylonjs_game_parse(_this);
        new _Babylonjs_game_load.Babylonjs_game_load(_this);
        new _Babylonjs_game_loadsave.Babylonjs_game_loadsave(_this);
        new _Babylonjs_game_scene.Babylonjs_game_scene(_this);

        new _Babylonjs_game_hud.Babylonjs_game_hud(_this);
        new _Babylonjs_game_hud_battle.Babylonjs_game_hud_battle(_this);
        new _Babylonjs_game_hud_inventory.Babylonjs_game_hud_inventory(_this);
        new _Babylonjs_game_hud_loot.Babylonjs_game_hud_loot(_this);
        new _Babylonjs_game_hud_skills.Babylonjs_game_hud_skills(_this);
        new _Babylonjs_game_hud_shop.Babylonjs_game_hud_shop(_this);
        new _Babylonjs_game_hud_storage.Babylonjs_game_hud_storage(_this);
        new _Babylonjs_game_hud_trade.Babylonjs_game_hud_trade(_this);
        new _Babylonjs_game_hud_market.Babylonjs_game_hud_market(_this);

        new _Babylonjs_game_ui.Babylonjs_game_ui(_this);
        new _Babylonjs_game_editor.Babylonjs_game_editor(_this);
        new _Babylonjs_game_assets.Babylonjs_game_assets(_this);

        new _Babylonjs_game_character.Babylonjs_game_character(_this);

        new _Babylonjs_game_controller.Babylonjs_game_controller(_this);

        new _Babylonjs_game_battle.Babylonjs_game_battle(_this);

        new _Babylonjs_game_terrain.Babylonjs_game_terrain(_this);

        new _Babylonjs_game_jqueryui.Babylonjs_game_jqueryui(_this);

        new _Babylonjs_game_gundb.Babylonjs_game_gundb(_this);

        return _this;
    }

    _createClass(Babylonjs_game, [{
        key: 'ScenePickObject',
        value: function ScenePickObject() {
            console.log("PICK? Setup");
            var self = this;
            //When pointer down event is raised
            this.scene.onPointerDown = function (evt, pickResult) {
                // if the click hits the ground object, we change the impact position
                if (pickResult.hit) {
                    //console.log(pickResult);
                    self.selectobject = pickResult.pickedMesh;
                    console.log("PICKED");
                    console.log(self.selectobject);
                    self.updateselectobject();
                    //impact.position.x = pickResult.pickedPoint.x;
                    //impact.position.y = pickResult.pickedPoint.y;
                    //console.log("HIT"+pickResult.pickedPoint);
                }
            };
        }

        //override function...

    }, {
        key: 'start_scenerender',
        value: function start_scenerender() {

            var self = this;
            this.engine.runRenderLoop(function () {
                //console.log("hellow");
                if (self.scenes[self.scenename] != null) {
                    self.scenes[self.scenename].render();
                    for (var i = 0; i < self.scenes[self.scenename].meshes.length; i++) {
                        //console.log("hellow");
                        if (typeof self.scenes[self.scenename].meshes[i].update === 'function') {
                            self.scenes[self.scenename].meshes[i].update();
                        }
                    }
                    if (self.selectobject != null) {}
                }
            });
        }

        /*
        canvasrender() {
            //console.log("render?");
            var self = this;
            this.engine.runRenderLoop(function() {
                //console.log("hellow");
                if (self.scene != null) {
                    self.scene.render();
                    for (var i = 0; i < self.scene.meshes.length; i++) {
                        //console.log("hellow");
                        if (typeof self.scene.meshes[i].update === 'function') {
                            self.scene.meshes[i].update();
                        }
                    }
                    if (self.selectobject != null) {}
                }
            });
        }
        */

    }, {
        key: 'init',
        value: function init() {
            _get(Babylonjs_game.prototype.__proto__ || Object.getPrototypeOf(Babylonjs_game.prototype), 'init', this).call(this);
            console.log("init [babylonjs_game]");
            this.createspacecavnas2D();
            this.createscene_assets();
            this.init_gundb();
        }
    }, {
        key: 'setup_gamedata',
        value: function setup_gamedata() {
            //list inventory
            this.display_inventory[0] = null;
            this.display_inventory[1] = null;
            this.display_inventory[2] = null;
            this.display_inventory[3] = null;
            this.display_inventory[4] = null;
            this.display_inventory[5] = null;
            this.display_inventory[6] = null;
            this.display_inventory[7] = null;
            this.display_inventory[8] = null;
            this.display_inventory[9] = null;

            this.select_index_inventory = 0;

            var item0 = new _RPGItem.RPGItem({ name: "Potion HP" });
            this.inventory.push(item0);

            item0 = new _RPGItem.RPGItem({ name: "Potion MP" });
            this.inventory.push(item0);
            this.inventory.push(item0);
            this.inventory.push(item0);
            this.inventory.push(item0);
            this.inventory.push(item0);
            this.inventory.push(item0);
            var item0 = new _RPGItem.RPGItem({ name: "Potion HP" });
            this.inventory.push(item0);
            this.inventory.push(item0);
            this.inventory.push(item0);
            this.inventory.push(item0);
            this.inventory.push(item0);
            var item0 = new _RPGItem.RPGItem({ name: "Potion MP" });
            this.inventory.push(item0);
            this.inventory.push(item0);
            var item0 = new _RPGItem.RPGItem({ name: "Potion" });
            this.inventory.push(item0);

            var item0 = new _RPGItem.RPGItem({ name: "Potion MP" });
            this.inventory.push(item0);
        }
    }, {
        key: 'createshopmenu_variable',
        value: function createshopmenu_variable() {
            this.display_shop = [];
            this.select_index_shop = 0;
            this.scroll_shop_y = 0;
        }
    }, {
        key: 'setup_game',
        value: function setup_game() {
            var self = this;

            console.log("setup game!");
            //this.canvasrender();

            this.setup_gamedata();
            this.createshopmenu_variable();
            this.scenepick_editor();

            //this.createinventoryHUD();
            //var box1 = BABYLON.Mesh.CreateBox("box", 1.0, this.scene);
            //this.showAxis(3, box1);
            var sun = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(60, 100, 10), this.scene);

            this.create_window_jqui();
            //this.bo();


            this.init_physics();
            //this.create2DHUD();
            this.create_input();

            //this.create_gamepadinput();
            //this.simpleterrain04();
            //this.createterrain();

            //var tmpmodel = this.getMeshAssets("block_floor");
            //var tmpmodel = this.getMeshAssets("block_framedoor");
            //var tmpmodel = this.getMeshAssets("block_stair");
            //var tmpmodel = this.getMeshAssets("block_ceiling");
            //var tmpmodel = this.getMeshAssets("block_wall");
            //tmpmodel.isVisible = true;

            //this.spawn_character({y: 32, bplayer: true});
        }
    }, {
        key: 'setup_game00',
        value: function setup_game00() {
            var self = this;
            console.log("setup game!");
            this.canvasrender();
            this.setup_gamedata();
            this.createshopmenu_variable();
            this.scenepick_editor();
            //this.createinventoryHUD();
            //this.camera.attachControl(this.canvas, false);
            var box1 = BABYLON.Mesh.CreateBox("box", 1.0, this.scene);
            this.showAxis(3, box1);
            //console.log("BABYLON.ActionManager");
            //console.log(BABYLON.ActionManager);
            var sun = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(60, 100, 10), this.scene);
            this.create_window_jqui();
            //input key
            //this.camera.attachControl(this.scene.getEngine().getRenderingCanvas());
            //working... some what
            //this.scene.actionManager = new BABYLON.ActionManager(this.scene);
            //this.scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnKeyUpTrigger, parameter: "r" }, function (evt) {
            //console.log("typing r...");
            //console.log(evt);
            //if (evt.sourceEvent.key == "r") {
            //}
            //}));
            //this.scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {
            //console.log(" OnKeyUpTrigger typing...");
            //console.log(evt);
            //if (evt.sourceEvent.key == "r") {
            //}
            //}));
            //this.scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {
            //console.log(" OnKeyDownTrigger typing...");
            //console.log(evt);
            //if (evt.sourceEvent.key == "r") {
            //}
            //}));
            //box1.actionManager = new BABYLON.ActionManager(this.scene);
            //console.log(box1);
            //box1.actionManager.registerAction(new BABYLON.ExecuteCodeAction("trigger", function () {
            //alert('player clicked');
            //console.log("trigger!");
            //}));
            //box1.actionManager.processTrigger("trigger",()=>{});
            //setInterval(()=> {
            //code for the drums playing goes here
            //box1.actionManager.processTrigger("trigger",()=>{});
            //},8000);
            //box1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
            //alert('player clicked');
            //}));
            //box1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {
            //console.log(" scene typing...");
            //if (evt.sourceEvent.key == "r") {
            //}
            //}));
            //box1.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnKeyUpTrigger, parameter: "r" }, function (evt) {
            //console.log("typing r...");
            //if (evt.sourceEvent.key == "r") {
            //}
            //}));
            //console.log(this.engine);
            //console.log(this.scene);
            //console.log(BABYLON);
            this.init_physics();
            this.create2DHUD();
            //this.setupeditor();
            //this.create2D_BattleHUD();
            //this.createinventoryHUD();
            //this.createstorageUI();
            //this.createlootUI();
            //BABYLON.DebugLayer().show();
            //this.scene.debugLayer.show(false);
            //this.scene.debugLayer.show(true);
            //this.createbattle_prototype();
            this.create_input();
            //this.create_gamepadinput();
            //this.create_movement();
            //this.ScenePickObject();
            //this.simple_scene();
            //this.simpleterrain()
            //this.simpleterrain01();
            this.simpleterrain03();
            //this.simpleterrain04();
            //this.spawn_character({y:32});
            var npc = this.spawn_character({ y: 64 });
            console.log(npc);
            npc.status.bshop = true;
            var item0 = new _RPGItem.RPGItem({ name: "Potion MP" });
            npc.status.shop.push(item0);
            this.spawn_character({ y: 32, bplayer: true });
            //console.log(player);
            //this.create_character();
            //this.loadmap_requestXML();
            /*
            var panel_group2d = new BABYLON.Group2D({
                parent:this.screencanvas,
                id:"panel_group2d"+"test",
                marginAlignment: "h: left, v: top",
                height:100,
                width:100
                //scale:0.6 //limited since backgroundRoundRadius effect render
                //scale:1 //limited since backgroundRoundRadius effect render
            });
            var panel = this.create_R2D_Drag01(panel_group2d,{text:'DISPLAY',x:0,y:0,width:500});
            */
        }
    }]);

    return Babylonjs_game;
}(_babylonjs_framework.Babylonjs_framework);

},{"../babylonjs_framework/babylonjs_framework":4,"./character/Babylonjs_game_character":12,"./controller/Babylonjs_game_controller":13,"./editor/Babylonjs_game_editor":14,"./hud/Babylonjs_game_hud":15,"./hud/Babylonjs_game_hud_battle":16,"./hud/Babylonjs_game_hud_inventory":17,"./hud/Babylonjs_game_hud_loot":18,"./hud/Babylonjs_game_hud_market":19,"./hud/Babylonjs_game_hud_shop":20,"./hud/Babylonjs_game_hud_skills":21,"./hud/Babylonjs_game_hud_storage":22,"./hud/Babylonjs_game_hud_trade":23,"./jqueryui/Babylonjs_game_jqueryui":24,"./load/Babylonjs_game_load":25,"./network/Babylonjs_game_network":26,"./physics/Babylonjs_game_physics":27,"./rpg/ObjectRPGID":28,"./rpg/RPGItem":32,"./rpg/RPGStats":37,"./rpg/RPGStatus":38,"./scene/Babylonjs_game_scene":40,"./system/Babylonjs_game_assets":41,"./system/Babylonjs_game_battle":42,"./system/Babylonjs_game_gundb":43,"./system/Babylonjs_game_loadsave":44,"./system/Babylonjs_game_parse":46,"./terrain/Babylonjs_game_terrain":47,"./ui/Babylonjs_game_ui":48}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_character = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require('../system/Babylonjs_game_module');

var _RPGCharacter = require('../rpg/RPGCharacter');

var _RPGNPCCharacter = require('../rpg/RPGNPCCharacter');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_character = exports.Babylonjs_game_character = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_character, _Babylonjs_game_modul);

    function Babylonjs_game_character(args) {
        _classCallCheck(this, Babylonjs_game_character);

        return _possibleConstructorReturn(this, (Babylonjs_game_character.__proto__ || Object.getPrototypeOf(Babylonjs_game_character)).call(this, args));
    }

    _createClass(Babylonjs_game_character, [{
        key: 'create_character',
        value: function create_character(args) {
            //console.log('create_character');
            args = args || {};
            var self = this;
            var tmpmodel = this.getmesh("CubeBody");
            //console.log("here tmp model?");
            tmpmodel.isVisible = true;
            //var objphysics = BABYLON.MeshBuilder.CreateCylinder("indicator", { height: 1, diameterTop: 0, diameterBottom: 0.5 }, this.scene);
            var objphysics = BABYLON.MeshBuilder.CreateSphere("indicator", { diameter: 1, diameterX: 1 }, this.scene);
            objphysics.isVisible = false;
            tmpmodel.objphysics = objphysics;
            tmpmodel.objtype = "npc";

            //console.log(tmpmodel.id);
            //console.log(tmpmodel.uniqueId);

            objphysics.setPhysicsState({ impostor: BABYLON.PhysicsEngine.SphereImpostor, move: true, restitution: 0, mass: 1, friction: 10 });
            //console.log(typeof args['x']);
            //console.log(args['x'],args['y'],args['z']);
            //var px = Number( args['x'] ) ;
            //console.log(px);

            objphysics.position.x = Number(args['x']);
            objphysics.position.y = Number(args['y']);
            objphysics.position.z = Number(args['z']);

            //console.log(objphysics.position);


            //console.log(args['x'],":",args['y'],":",args['z']);
            //console.log(objphysics.position.x,":",objphysics.position.y,":",objphysics.position.z);
            objphysics.showBoundingBox = true;

            var keys = self.keys;
            tmpmodel.facedir = 0;
            var currentAngle = 0;

            var Material = new BABYLON.StandardMaterial("material", this.scene);
            Material.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);

            var hit = BABYLON.Mesh.CreateBox("hit", 0.5, this.scene);
            hit.material = Material;

            tmpmodel.update = function () {
                //console.log(leftstickmove);
                //console.log(this.uniqueId);
                var needMove = false;
                if (self.controllerid == this.id) {
                    //vector forward direction
                    //this breaks
                    var forward = self.scene.activeCamera.getFrontPosition(1).subtract(self.scene.activeCamera.position).normalize();
                    forward.y = 0;
                    //get rotation dir
                    //var diffAngle = Math.atan2(-forward.x,-forward.z);
                    var diffAngle = Math.atan2(forward.x, forward.z);
                    //var currentAngle = 0;
                    //console.log(keys.left);
                    if (keys.left) {
                        //console.log("left");
                        currentAngle = diffAngle + Math.PI / 2;
                        needMove = true;
                    }
                    if (keys.right) {
                        currentAngle = diffAngle - Math.PI / 2;
                        needMove = true;
                    }
                    if (keys.forward) {
                        currentAngle = diffAngle + Math.PI;;
                        needMove = true;
                    }
                    if (keys.back) {
                        currentAngle = diffAngle;
                        needMove = true;
                    }

                    //gamepad
                    if (self.leftstickmove) {
                        var joyangle = Math.atan2(self.joyleftdir.x, -self.joyleftdir.z);
                        currentAngle = diffAngle + joyangle + Math.PI;
                        tmpmodel.rotation.y = currentAngle;
                        var rot = diffAngle + joyangle;
                        var v2 = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0, 0, 10), BABYLON.Matrix.RotationY(rot));
                        tmpmodel.objphysics.physicsImpostor.setLinearVelocity(v2);
                    }

                    if (needMove) {
                        var v2 = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0, 0, -10), BABYLON.Matrix.RotationY(currentAngle));
                        tmpmodel.objphysics.physicsImpostor.setLinearVelocity(v2);
                        tmpmodel.rotation.y = currentAngle;
                        v2 = null;
                        tmpmodel.facedir = currentAngle;
                    }

                    var objpos = tmpmodel.objphysics.position.clone();
                    objpos = objpos.add(new BABYLON.Vector3(0, -0.5, 0));
                    tmpmodel.position = objpos;

                    if (needMove == false) {
                        tmpmodel.objphysics.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(0, 0, 0));
                    }

                    diffAngle = null;
                    currentAngle = null;
                    forward = null;
                } else {
                    if (needMove == false) {
                        tmpmodel.objphysics.physicsImpostor.setAngularVelocity(new BABYLON.Vector3(0, 0, 0));
                    }

                    var objpos = tmpmodel.objphysics.position.clone();
                    objpos = objpos.add(new BABYLON.Vector3(0, -0.5, 0));
                    tmpmodel.position = objpos;
                }
            };

            tmpmodel.interact = function () {
                console.log("interact");
                //console.log("???" + model.facedir);
                var fdir = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(0, 0, -2), BABYLON.Matrix.RotationY(tmpmodel.facedir));
                var rayPick = new BABYLON.Ray(tmpmodel.objphysics.position, fdir, 2);
                var meshFound = self.scene.pickWithRay(rayPick, function (item) {
                    //console.log(item.name);
                    //console.log(item.objtype);
                    if (item.objtype == null) {
                        return false;
                    }
                    if (item.objtype.indexOf("npc") == 0) {
                        return true;
                    } else {
                        return false;
                    }
                });
                if (meshFound != null && meshFound.pickedPoint != null) {
                    console.log("found!");
                    //meshFound
                    console.log(meshFound.pickedMesh);
                    if (typeof meshFound.pickedMesh.interactmenu === 'function') {
                        meshFound.pickedMesh.interactmenu();
                    }

                    hit.position = meshFound.pickedPoint;
                } else {
                    //console.log("not found!");
                }
                rayPick = null;
                fdir = null;
            };

            tmpmodel.interactmenu = function () {
                //console.log(this);
                if (this.status != null) {
                    self.npc = this.status;
                    if (this.status.bshop) {
                        self.checkshop();
                    }
                }
            };

            //var name = args['name'] || "none";
            //console.log(name)
            return tmpmodel;
        }
    }]);

    return Babylonjs_game_character;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../rpg/RPGCharacter":29,"../rpg/RPGNPCCharacter":34,"../system/Babylonjs_game_module":45}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_controller = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require('../system/Babylonjs_game_module');

var _RPGStatus = require('../rpg/RPGStatus');

var _RPGStats = require('../rpg/RPGStats');

var _ObjectRPGID = require('../rpg/ObjectRPGID');

var _RPGNPCCharacter = require('../rpg/RPGNPCCharacter');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_controller = exports.Babylonjs_game_controller = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_controller, _Babylonjs_game_modul);

    function Babylonjs_game_controller(args) {
        _classCallCheck(this, Babylonjs_game_controller);

        return _possibleConstructorReturn(this, (Babylonjs_game_controller.__proto__ || Object.getPrototypeOf(Babylonjs_game_controller)).call(this, args));
    }

    _createClass(Babylonjs_game_controller, [{
        key: 'create_movement',
        value: function create_movement() {
            //console.log("create movement");
            var self = this;
            var camera = new BABYLON.ArcRotateCamera("arcCamera1", 0, 0, 10, BABYLON.Vector3.Zero(), this.scene);
            camera.lowerRadiusLimit = camera.upperRadiusLimit = camera.radius;
            camera.attachControl(this.canvas, false);
            camera.setPosition(new BABYLON.Vector3(0, 5, 5));
            this.scene.activeCamera.attachControl(self.canvas);
            this.scene.activeCamera = camera;
            //console.log(camera);
            this.thirdcamera = camera;

            //var box = BABYLON.Mesh.CreateBox("box", 2, this.scenes[this.scenename]);
            //var boxMaterial = new BABYLON.StandardMaterial("material", this.scenes[this.scenename]);
            //boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
            //box.material = boxMaterial;
            //console.log(box);
            //var model = this.getmesh("CubeBody");
            var Material = new BABYLON.StandardMaterial("material", this.scene);
            Material.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
            //console.log("here?");
            //console.log( this.create_character);
            var model = this.create_character({ x: 0, y: 0.5, z: 0 });
            //console.log("end model?");
            //console.log(model);

            this.controllerid = model.id;
            this.model = model;
            camera.setTarget(model);
        }
    }, {
        key: 'spawn_character',
        value: function spawn_character(args) {
            args = args || {};
            var self = this;

            var _status = new _RPGStatus.RPGStatus();
            //var _status = new ObjectRPGID();
            console.log(_status);

            if (args == null) {
                args = {};
            };
            var _x = Number(args['x']) || 0;
            var _y = Number(args['y']) || 1;
            var _z = Number(args['z']) || 0;
            if (args['position'] != null) {
                _x = args['position']['x'] || 0;
                _y = args['position']['y'] || 0;
                _z = args['position']['z'] || 0;
            }

            var bplayer = typeof args['bplayer'] === 'boolean' ? args['bplayer'] : false;
            //console.log("create movement");
            var self = this;
            var camera = new BABYLON.ArcRotateCamera("arcCamera1", 0, 0, 10, BABYLON.Vector3.Zero(), this.scene);
            camera.lowerRadiusLimit = camera.upperRadiusLimit = camera.radius;
            camera.attachControl(this.canvas, false);
            camera.setPosition(new BABYLON.Vector3(0, 5, 5));
            this.scene.activeCamera.attachControl(self.canvas);
            if (bplayer) {
                this.scene.activeCamera = camera;
                this.thirdcamera = camera;
            }
            var Material = new BABYLON.StandardMaterial("material", this.scene);
            Material.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
            var model = this.create_character({ x: _x, y: _y, z: _z });
            model.rpgobj = new _RPGNPCCharacter.RPGNPCCharacter(args);

            model.status = _status;

            if (bplayer) {
                this.controllerid = model.id;
                this.model = model;
            }
            camera.setTarget(model);

            return model;
        }
    }, {
        key: 'create_input',
        value: function create_input() {
            var self = this;

            //this.keys={letft:0,right:0,forward:0,back:0};
            window.addEventListener("keydown", handleKeyDown, false);
            window.addEventListener("keyup", handleKeyUp, false);
            function handleKeyDown(evt) {
                //console.log(evt.keyCode);
                if (evt.keyCode == 69) {
                    //E
                    if (self.model != null) {
                        //console.log(self.model);
                        if (typeof self.model.interact === 'function') {
                            self.model.interact();
                        }
                    }
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
    }, {
        key: 'create_gamepadinput',
        value: function create_gamepadinput() {
            var self = this;
            var gamepadConnected = function gamepadConnected(gamepad) {
                console.log(gamepad);
                //console.log(gamepad.gamepad);
                if (typeof gamepad.onlefttriggerchanged === 'function') {
                    gamepad.onlefttriggerchanged(function (values) {
                        console.log(values);
                    });
                } else {
                    console.log("left trigger function doesn't exist");
                }
                if (typeof gamepad.onrighttriggerchanged === 'function') {
                    gamepad.onrighttriggerchanged(function (values) {
                        console.log(values);
                    });
                } else {
                    console.log("right trigger function doesn't exist");
                }

                gamepad.onleftstickchanged(function (values) {
                    self.leftstickmove = false;
                    if (values.y < 0.1 && values.y > -0.1) {} else {
                        //console.log("x: ",values.x, " y: " , values.y );
                        self.joyleftdir.z = values.y;
                        self.leftstickmove = true;
                    }
                    if (values.x < 0.1 && values.x > -0.1) {} else {
                        //console.log("x: ",values.x, " y: " , values.y );
                        self.joyleftdir.x = values.x;
                        self.leftstickmove = true;
                    }
                    //console.log("x: ",values.x, " y: " , values.y );
                });

                gamepad.onrightstickchanged(function (values) {

                    if (values.y < 0.1 && values.y > -0.1) {} else {
                        //console.log("x: ",values.x, " y: " , values.y );
                        self.joyrightdir.y = values.y;
                    }
                    if (values.x < 0.1 && values.x > -0.1) {
                        //console.log("x: ",values.x, " y: " , values.y );
                    } else {
                        //console.log("x: ",values.x, " y: " , values.y );
                        self.joyrightdir.x = values.x;
                    }
                    //console.log("x: ",values.x, " y: " , values.y );
                });

                gamepad.onbuttondown(function (buttonIndex) {
                    //alert(buttonIndex);
                    //console.log(buttonIndex);
                });

                gamepad.onbuttonup(function (buttonIndex) {});
            };

            var gamepads = new BABYLON.Gamepads(gamepadConnected);

            // for google chrome start the monitoring if navigator.getGamepads() has a gamepad at index 0 for example
            // this is because chrome doesn't seem to support the gamepadconnected/gamepaddisconnected events perfectly yet,
            // it only detects the gamepad if you plug it in again but not if it is already connected
            if (navigator.getGamepads()[0]) {
                gamepads._startMonitoringGamepads();
            }
        }
    }]);

    return Babylonjs_game_controller;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../rpg/ObjectRPGID":28,"../rpg/RPGNPCCharacter":34,"../rpg/RPGStats":37,"../rpg/RPGStatus":38,"../system/Babylonjs_game_module":45}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_editor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require('../system/Babylonjs_game_module');

var _RPGCube = require('../rpg/RPGCube');

var _RPGSphere = require('../rpg/RPGSphere');

var _RPGCylinder = require('../rpg/RPGCylinder');

var _RPGPlane = require('../rpg/RPGPlane');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_editor = exports.Babylonjs_game_editor = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_editor, _Babylonjs_game_modul);

    function Babylonjs_game_editor(args) {
        _classCallCheck(this, Babylonjs_game_editor);

        return _possibleConstructorReturn(this, (Babylonjs_game_editor.__proto__ || Object.getPrototypeOf(Babylonjs_game_editor)).call(this, args));
    }

    _createClass(Babylonjs_game_editor, [{
        key: 'parse_object',
        value: function parse_object(args) {
            var _obj;
            if (args != null) {
                if (args['freecamera'] != null) {
                    _obj = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this.scene);
                }

                if (args['scene'] != null) {
                    _obj = new BABYLON.Scene(this.engine);
                }

                if (args['hemisphericlight'] != null) {
                    _obj = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);
                }

                if (args['geometrytype'] != null) {
                    if (args['geometrytype'] == 'cube') {
                        _obj = this.parse_createcube(args);
                    }

                    if (args['geometrytype'] == 'sphere') {
                        //_obj = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, this.scene);
                        _obj = this.parse_createsphere(args);
                    }

                    if (args['geometrytype'] == 'ground') {
                        _obj = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, this.scene);
                        //_obj = this.parse_createplane(args);
                    }

                    if (args['geometrytype'] == 'plane') {
                        //_obj = BABYLON.Mesh.CreatePlane("plane", 10.0, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
                        _obj = this.parse_createplane(args);
                    }

                    if (args['geometrytype'] == 'disc') {
                        _obj = BABYLON.Mesh.CreateDisc("disc", 5, 30, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
                    }

                    if (args['geometrytype'] == 'cylinder') {
                        //_obj = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
                        _obj = this.parse_createcylinder(args);
                    }

                    if (args['geometrytype'] == 'torus') {
                        _obj = BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
                    }

                    if (args['geometrytype'] == 'knot') {
                        _obj = BABYLON.Mesh.CreateTorusKnot("knot", 2, 0.5, 128, 64, 2, 3, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
                    }
                    if (args['geometrytype'] == 'lines') {
                        //_obj = BABYLON.Mesh.CreateLines("lines", [
                        //new BABYLON.Vector3(-10, 0, 0),
                        //new BABYLON.Vector3(10, 0, 0),
                        //new BABYLON.Vector3(0, 0, -10),
                        //new BABYLON.Vector3(0, 0, 10)
                        //], scene);
                    }

                    if (args['dashedLines'] != null) {
                        //_obj = BABYLON.Mesh.CreateDashedLines("dashedLines", [v1, v2, ... vn], dashSize, gapSize, dashNb, scene);
                    }

                    if (args['ribbon'] != null) {
                        //_obj = BABYLON.Mesh.CreateRibbon("ribbon", [path1, path2, ..., pathn], false, false, 0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
                    }

                    if (args['tube'] != null) {
                        //_obj = BABYLON.Mesh.CreateTube("tube", [V1, V2, ..., Vn], radius, tesselation, radiusFunction, cap, scene, false, BABYLON.Mesh.DEFAULTSIDE);
                    }

                    if (args['tiledhround'] != null) {
                        //_obj = BABYLON.Mesh.CreateTiledGround("Tiled Ground", -3, -3, 3, 3, subdivisions, precision, scene, false);
                    }

                    if (args['position'] != null) {
                        _obj.position.x = args['position']['x'] || 0;
                        _obj.position.y = args['position']['y'] || 0;
                        _obj.position.z = args['position']['z'] || 0;
                    }
                    if (args['rotation'] != null) {
                        _obj.rotation.x = args['rotation']['x'] || 0;
                        _obj.rotation.y = args['rotation']['y'] || 0;
                        _obj.rotation.z = args['rotation']['z'] || 0;
                    }

                    if (args['scaling'] != null) {
                        _obj.scaling.x = args['scaling']['x'] || 1;
                        _obj.scaling.y = args['scaling']['y'] || 1;
                        _obj.scaling.z = args['scaling']['z'] || 1;
                    }
                }
            } else {}
            return _obj;
        }
    }, {
        key: 'parse_createplane',
        value: function parse_createplane(args) {
            //console.log("found");
            //console.log(args);
            var _obj = null;
            var params = {};
            //if(args['box'] != null){
            //var _obj = BABYLON.MeshBuilder.CreateBox("ground", {height:1,width:20,depth:20}, this.scene);
            //args = args['box'];
            params.size = args['parameters']['size'] || 1;
            params.width = args['parameters']['width'] || 1;
            params.height = args['parameters']['height'] || 1;
            //console.log(params);
            var _obj = BABYLON.MeshBuilder.CreatePlane("plane", params, this.scene);
            _obj.rpgobj = new _RPGCube.RPGCube(args);
            //console.log(args['position']);
            //}
            return _obj;
        }
    }, {
        key: 'parse_createcube',
        value: function parse_createcube(args) {
            //console.log("found");
            //console.log(args);
            var _obj = null;
            var params = {};
            //if(args['box'] != null){
            //var _obj = BABYLON.MeshBuilder.CreateBox("ground", {height:1,width:20,depth:20}, this.scene);
            //args = args['box'];
            params.height = args['parameters']['height'] || 1;
            params.width = args['parameters']['width'] || 1;
            params.depth = args['parameters']['depth'] || 1;
            //console.log(params);
            var _obj = BABYLON.MeshBuilder.CreateBox("box", params, this.scene);
            _obj.rpgobj = new _RPGCube.RPGCube(args);
            //console.log(args['position']);
            //}
            return _obj;
        }
    }, {
        key: 'parse_createsphere',
        value: function parse_createsphere(args) {
            console.log(args);
            var params = {};
            var _obj = null;
            //params.diameterTop = args['parameters']['diameter'] || 1;
            params.diameter = args['parameters']['diameter'] || 1;
            _obj = BABYLON.MeshBuilder.CreateSphere('sphere', params, this.scene);
            _obj.rpgobj = new _RPGSphere.RPGSphere(args);
            return _obj;
        }
    }, {
        key: 'parse_createcylinder',
        value: function parse_createcylinder(args) {
            var params = {};
            var _obj = null;
            console.log("parse_createcylinder");
            //params.diameterTop = args['parameters']['diameterTop'] || 1;
            params.diameter = args['parameters']['diameter'] || 1;
            params.tessellation = Number(args['parameters']['tessellation'] || 4);
            //console.log(params);
            _obj = BABYLON.MeshBuilder.CreateCylinder('Cylinder', params, this.scene);
            //_obj = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, this.scene);
            _obj.rpgobj = new _RPGCylinder.RPGCylinder(args);
            return _obj;
        }

        //===========================================
        //
        //===========================================

    }, {
        key: 'getGroundPosition',
        value: function getGroundPosition() {
            var scene = this.scene;
            // Use a predicate to get position on the ground
            //var pickinfo = scene.pick(scene.pointerX, scene.pointerY);
            //return pickinfo.pickedPoint;
            return new BABYLON.Vector2(scene.pointerX, scene.pointerY);
        }
    }, {
        key: 'clickMesh',
        value: function clickMesh(lastMesh, currentMesh) {
            // If we click again the already selected mesh then there is no reason to remove axis and add them again
            if (lastMesh == currentMesh) return;

            // Show axis for the current mesh
            for (var i = 0; i < currentMesh.getChildren().length; i++) {
                currentMesh.getChildren()[i].isVisible = true;
            } // Remove axis for the previous mesh
            if (lastMesh != null) {
                if (lastMesh.getChildren().length > 0) for (var i = 0; i < lastMesh.getChildren().length; i++) {
                    lastMesh.getChildren()[i].isVisible = false;
                }
            }
        }
    }, {
        key: 'scenepick_editor',
        value: function scenepick_editor() {
            var self = this;
            // Events
            var startingPoint;
            var currentMesh;
            var lastMesh;
            var pickedAxis = "";
            //When pointer down event is raised
            this.scene.onPointerDown = function (evt, pickInfo) {
                // if the click hits the ground object, we change the impact position
                if (pickInfo.hit) {
                    //console.log(pickInfo);
                    self.selectobject = pickInfo.pickedMesh;
                    self.updateselectobject();

                    // Check if an axis is clicked
                    if (pickInfo.pickedMesh.name == "X" || pickInfo.pickedMesh.name == "Y" || pickInfo.pickedMesh.name == "Z") {
                        pickedAxis = pickInfo.pickedMesh.name;
                        currentMesh = pickInfo.pickedMesh.parent;
                        startingPoint = self.getGroundPosition(evt);

                        if (startingPoint) {
                            // we need to disconnect camera from canvas
                            setTimeout(function () {
                                self.camera.detachControl(self.canvas);
                            }, 0);
                        }
                    } else {
                        // Show axis for the clicked mesh. I think the meshes with axis should have some flag that should be checked here
                        self.clickMesh(lastMesh, pickInfo.pickedMesh);
                        lastMesh = pickInfo.pickedMesh;
                    }
                    //impact.position.x = pickResult.pickedPoint.x;
                    //impact.position.y = pickResult.pickedPoint.y;
                    //console.log("HIT"+pickResult.pickedPoint);
                }
            };

            var onPointerDown = function onPointerDown(evt) {
                if (evt.button !== 0) {
                    return;
                }

                // check if we clicked a mesh
                var pickInfo = self.scene.pick(self.scene.pointerX, self.scene.pointerY);

                if (pickInfo.hit) {
                    // Check if an axis is clicked
                    if (pickInfo.pickedMesh.name == "X" || pickInfo.pickedMesh.name == "Y" || pickInfo.pickedMesh.name == "Z") {
                        pickedAxis = pickInfo.pickedMesh.name;
                        currentMesh = pickInfo.pickedMesh.parent;
                        startingPoint = getGroundPosition(evt);

                        if (startingPoint) {
                            // we need to disconnect camera from canvas
                            setTimeout(function () {
                                self.camera.detachControl(self.canvas);
                            }, 0);
                        }
                    } else {
                        // Show axis for the clicked mesh. I think the meshes with axis should have some flag that should be checked here
                        self.clickMesh(lastMesh, pickInfo.pickedMesh);
                        lastMesh = pickInfo.pickedMesh;
                    }
                }
            };

            var onPointerUp = function onPointerUp() {
                if (startingPoint) {
                    self.camera.attachControl(self.canvas, true);
                    startingPoint = null;
                    return;
                }
            };

            var onPointerMove = function onPointerMove(evt) {
                if (!startingPoint) {
                    return;
                }

                var current = self.getGroundPosition(evt);
                console.log(current);
                if (!current) {
                    return;
                }

                var compensationFactor = 50;
                switch (pickedAxis) {
                    case "X":
                        var diff = current.subtract(startingPoint);
                        currentMesh.position.x -= diff.x / compensationFactor;
                        break;
                    case "Y":
                        var diff = current.subtract(startingPoint);
                        currentMesh.position.y -= diff.y / compensationFactor;
                        break;
                    case "Z":
                        var diff = current.subtract(startingPoint);
                        currentMesh.position.z += diff.x / compensationFactor;
                        break;
                }
                startingPoint = current;
            };

            self.canvas.addEventListener("pointerdown", onPointerDown, false);
            self.canvas.addEventListener("pointerup", onPointerUp, false);
            self.canvas.addEventListener("pointermove", onPointerMove, false);
        }
    }, {
        key: 'showAxis',
        value: function showAxis(size, mesh) {
            //http://www.babylonjs-playground.com/#11AOBV#2
            //http://www.html5gamedevs.com/topic/16687-axis-dragging/
            var scene = this.scene;
            var makeTextPlane = function makeTextPlane(text, color, size, name) {
                var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
                dynamicTexture.hasAlpha = true;
                dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color, "transparent", true);
                var plane = BABYLON.Mesh.CreatePlane(name, size * 3, scene, true);
                plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
                plane.material.backFaceCulling = false;
                plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
                plane.material.diffuseTexture = dynamicTexture;
                return plane;
            };

            // X AXIS
            var axisX = BABYLON.Mesh.CreateLines("axisX", [BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0)], scene);
            axisX.isVisible = false;
            axisX.parent = mesh;
            axisX.color = new BABYLON.Color3(1, 0, 0);
            var xChar = makeTextPlane("X", "red", size / 10, "X");
            xChar.isVisible = false;
            xChar.parent = mesh;
            xChar.position = new BABYLON.Vector3(0.9 * size, 0, 0);

            // Y AXIS
            var axisY = BABYLON.Mesh.CreateLines("axisY", [BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0)], scene);
            axisY.isVisible = false;
            axisY.parent = mesh;
            axisY.color = new BABYLON.Color3(0, 1, 0);
            var yChar = makeTextPlane("Y", "green", size / 10, "Y");
            yChar.isVisible = false;
            yChar.parent = mesh;
            yChar.position = new BABYLON.Vector3(0, 1.1 * size, 0);

            // Z AXIS
            var axisZ = BABYLON.Mesh.CreateLines("axisZ", [BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size)], scene);
            axisZ.isVisible = false;
            axisZ.parent = mesh;
            axisZ.color = new BABYLON.Color3(0, 0, 1);
            var zChar = makeTextPlane("Z", "blue", size / 10, "Z");
            zChar.isVisible = false;
            zChar.parent = mesh;
            zChar.position = new BABYLON.Vector3(0, 0, 0.9 * size);
        }

        //===========================================
        //
        //===========================================

    }, {
        key: 'setupeditor',
        value: function setupeditor() {
            //console.log("setupeditor");
            var self = this;
            var editor_group2d = new BABYLON.Group2D({
                parent: this.screencanvas,
                id: "screencanvas_group2d",
                marginAlignment: "h: left, v: top"
                //scale:0.6 //limited since backgroundRoundRadius effect render
                //scale:1 //limited since backgroundRoundRadius effect render
            });

            var panel = this.create_R2D_Drag01(editor_group2d, { text: 'Drag Panel', x: 10, y: -142 });

            //tab
            this.create_R2D_Text01(panel, { text: "Object", balign: true, x: 10, y: -32 * 1, width: 70 });
            this.create_R2D_Text01(panel, { text: "Transform", balign: true, x: 84, y: -32 * 1, width: 70 });
            this.create_R2D_Text01(panel, { text: "Materials", balign: true, x: 158, y: -32 * 1, width: 70 });
            this.create_R2D_Text01(panel, { text: "Scripts", balign: true, x: 234, y: -32 * 1, width: 70 });
            this.create_R2D_Text01(panel, { text: "Animations", balign: true, x: 308, y: -32 * 1, width: 70 });

            //props
            var _obj = null;
            this.create_R2D_Text01(panel, { text: "ID:", x: 10, y: -32 * 2 });
            _obj = this.create_R2D_TextInput01(panel, { text: "None", x: 34, y: -32 * 2, returnarray: true });
            this.selectobject_text_id = _obj[1];

            this.create_R2D_Text01(panel, { text: "px", x: 10, y: -32 * 3 });
            _obj = this.create_R2D_TextInput01(panel, { text: "0", x: 34, y: -32 * 3, returnarray: true });
            this.selectobject_text_px = _obj[1];
            this.create_R2D_Text01(panel, { text: "py", x: 10, y: -32 * 4 });
            _obj = this.create_R2D_TextInput01(panel, { text: "0", x: 34, y: -32 * 4, returnarray: true });
            this.selectobject_text_py = _obj[1];
            this.create_R2D_Text01(panel, { text: "pz", x: 10, y: -32 * 5 });
            _obj = this.create_R2D_TextInput01(panel, { text: "0", x: 34, y: -32 * 5, returnarray: true });
            this.selectobject_text_pz = _obj[1];

            this.create_R2D_Text01(panel, { text: "rx", x: 10, y: -32 * 6 });
            _obj = this.create_R2D_TextInput01(panel, { text: "0", x: 34, y: -32 * 6, returnarray: true });
            this.selectobject_text_rx = _obj[1];
            this.create_R2D_Text01(panel, { text: "ry", x: 10, y: -32 * 7 });
            _obj = this.create_R2D_TextInput01(panel, { text: "0", x: 34, y: -32 * 7, returnarray: true });
            this.selectobject_text_ry = _obj[1];
            this.create_R2D_Text01(panel, { text: "rz", x: 10, y: -32 * 8 });
            _obj = this.create_R2D_TextInput01(panel, { text: "0", x: 34, y: -32 * 8, returnarray: true });
            this.selectobject_text_rz = _obj[1];

            this.create_R2D_Text01(panel, { text: "sx", x: 10, y: -32 * 9 });
            _obj = this.create_R2D_TextInput01(panel, { text: "1", x: 34, y: -32 * 9, returnarray: true });
            this.selectobject_text_sx = _obj[1];
            this.create_R2D_Text01(panel, { text: "sy", x: 10, y: -32 * 10 });
            _obj = this.create_R2D_TextInput01(panel, { text: "1", x: 34, y: -32 * 10, returnarray: true });
            this.selectobject_text_sy = _obj[1];
            this.create_R2D_Text01(panel, { text: "sz", x: 10, y: -32 * 11 });
            _obj = this.create_R2D_TextInput01(panel, { text: "1", x: 34, y: -32 * 11, returnarray: true });
            this.selectobject_text_sz = _obj[1];

            this.editor_ui = editor_group2d;
        }

        //===========================================
        //
        //===========================================

    }, {
        key: 'updateselectobject',
        value: function updateselectobject() {
            var self = this;
            if (self.selectobject != null) {

                $("#obj_px").spinner("value", self.selectobject.position.x);
                $("#obj_py").spinner("value", self.selectobject.position.y);
                $("#obj_pz").spinner("value", self.selectobject.position.z);

                $("#obj_rx").spinner("value", self.selectobject.rotation.x);
                $("#obj_ry").spinner("value", self.selectobject.rotation.y);
                $("#obj_rz").spinner("value", self.selectobject.rotation.z);

                $("#obj_sx").spinner("value", self.selectobject.scaling.x);
                $("#obj_sy").spinner("value", self.selectobject.scaling.y);
                $("#obj_sz").spinner("value", self.selectobject.scaling.z);

                /*
                if(self.selectobject_text_id !=null){
                    self.selectobject_text_id.text = self.selectobject.id;
                }
                //===
                if(self.selectobject_text_px !=null){
                    self.selectobject_text_px.text = self.selectobject.position.x.toString();
                    //console.log("found x",self.selectobject.position.x);
                }
                if(self.selectobject_text_py !=null){
                    self.selectobject_text_py.text = self.selectobject.position.y.toString();
                }
                if(self.selectobject_text_pz !=null){
                    self.selectobject_text_pz.text = self.selectobject.position.z.toString();
                }
                //===
                if(self.selectobject_text_rx !=null){
                    self.selectobject_text_rx.text = self.selectobject.rotation.x.toString();
                }
                if(self.selectobject_text_ry !=null){
                    self.selectobject_text_ry.text = self.selectobject.rotation.y.toString();
                }
                if(self.selectobject_text_rz !=null){
                    self.selectobject_text_rz.text = self.selectobject.rotation.z.toString();
                }
                //===
                if(self.selectobject_text_sx !=null){
                    self.selectobject_text_sx.text = self.selectobject.scaling.x.toString();
                }
                if(self.selectobject_text_sy !=null){
                    self.selectobject_text_sy.text = self.selectobject.scaling.y.toString();
                }
                if(self.selectobject_text_sz !=null){
                    self.selectobject_text_sz.text = self.selectobject.scaling.z.toString();
                }
                */
            }
        }
    }]);

    return Babylonjs_game_editor;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../rpg/RPGCube":30,"../rpg/RPGCylinder":31,"../rpg/RPGPlane":35,"../rpg/RPGSphere":36,"../system/Babylonjs_game_module":45}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_hud = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require("../system/Babylonjs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_hud = exports.Babylonjs_game_hud = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_hud, _Babylonjs_game_modul);

    function Babylonjs_game_hud(args) {
        _classCallCheck(this, Babylonjs_game_hud);

        return _possibleConstructorReturn(this, (Babylonjs_game_hud.__proto__ || Object.getPrototypeOf(Babylonjs_game_hud)).call(this, args));
    }

    _createClass(Babylonjs_game_hud, [{
        key: "createspacecavnas2D",
        value: function createspacecavnas2D() {
            //screenCanvas
            this.screencanvas = new BABYLON.ScreenSpaceCanvas2D(this.scene, {
                id: "ScreenCanvas",
                enableInteraction: true //,
            });
            //console.log(this.screencanvas);
        }
    }, {
        key: "hidemenus",
        value: function hidemenus() {
            var self = this;
            if (self.inventory_ui != null) {
                if (self.inventory_ui.isVisible) {
                    self.inventory_ui.levelVisible = false;
                }
            }
            if (self.skills_ui != null) {
                if (self.skills_ui.isVisible) {
                    self.skills_ui.levelVisible = false;
                }
            }

            if (self.map_ui != null) {
                if (self.map_ui.isVisible) {
                    self.map_ui.levelVisible = false;
                }
            }

            if (self.home_ui != null) {
                if (self.home_ui.isVisible) {
                    self.home_ui.levelVisible = false;
                }
            }

            if (self.settings_ui != null) {
                if (self.settings_ui.isVisible) {
                    self.settings_ui.levelVisible = false;
                }
            }

            if (self.editor_ui != null) {
                if (self.editor_ui.isVisible) {
                    self.editor_ui.levelVisible = false;
                }
            }
        }
    }, {
        key: "create2DHUD",
        value: function create2DHUD() {
            var self = this;
            var screencanvas_group2d = new BABYLON.Group2D({
                parent: this.screencanvas,
                id: "screencanvas_group2d",
                marginAlignment: "h: left, v: top"
                //scale:0.6 //limited since backgroundRoundRadius effect render
                //scale:1 //limited since backgroundRoundRadius effect render
            });

            this.create_R2D_Text01(screencanvas_group2d, { text: "Health:", balign: true, x: 10, y: -32 * 1, width: 64, height: 28 });
            this.create_R2D_Text01(screencanvas_group2d, { text: "Magic:", balign: true, x: 10, y: -32 * 2, width: 64, height: 28 });
            this.create_R2D_Text01(screencanvas_group2d, { text: "Stamina:", balign: true, x: 10, y: -32 * 3, width: 64, height: 28 });

            this.createprogressbar(screencanvas_group2d, { x: 90, y: -32, width: 128, height: 28, fcolor: "#64DD17FF" });
            this.createprogressbar(screencanvas_group2d, { x: 90, y: -64, width: 128, height: 28, fcolor: "#03A9F4FF" });
            this.createprogressbar(screencanvas_group2d, { x: 90, y: -96, width: 128, height: 28, fcolor: "#FF9800FF" });

            // RIGHT TOP
            var screencanvas_group2d_RT = new BABYLON.Group2D({
                parent: this.screencanvas,
                id: "screencanvas_group2d_RT",
                marginAlignment: "h: right, v: top"
                //scale:0.6 //limited since backgroundRoundRadius effect render
                //scale:1 //limited since backgroundRoundRadius effect render
            });

            new BABYLON.Rectangle2D({
                parent: screencanvas_group2d_RT, id: "R2DStamina", x: -36, y: -42, width: 32, height: 32, fill: "#263238FF"
            });

            //=======================================
            // Chat Area
            //=======================================

            // LEFT BOTTOM
            var screencanvas_group2d_LB = new BABYLON.Group2D({
                parent: this.screencanvas,
                id: "screencanvas_group2d_LB",
                marginAlignment: "h: left, v: bottom"
                //scale:0.6 //limited since backgroundRoundRadius effect render
                //scale:1 //limited since backgroundRoundRadius effect render
            });

            new BABYLON.Rectangle2D({
                parent: screencanvas_group2d_LB, id: "R2DStamina", x: 8, y: 8, width: 48, height: 32, fill: "#263238FF",
                children: [new BABYLON.Text2D("Chat:", { fontName: "10pt Arial", marginAlignment: "h: center, v: center" })]
            });

            //=======================================
            // Game options
            //=======================================

            // RIGHT BOTTOM
            var screencanvas_group2d_RB = new BABYLON.Group2D({
                parent: this.screencanvas,
                id: "screencanvas_group2d_RB",
                marginAlignment: "h: right, v: bottom"
                //scale:0.6 //limited since backgroundRoundRadius effect render
                //scale:1 //limited since backgroundRoundRadius effect render
            });

            this.AddButton(screencanvas_group2d_RB, { id: "R2DEditor", text: "Editor", x: -36 + 64 * 1 * -1, y: 4, width: 52, height: 32 }, function () {
                console.log("Editor..");
                if (self.editor_ui == null) {
                    self.setupeditor();
                } else {
                    //console.log(self.editor_ui);
                    if (self.editor_ui.isVisible) {
                        //console.log(false);
                        self.editor_ui.levelVisible = false;
                    } else {
                        self.hidemenus();
                        //console.log(true);
                        self.editor_ui.levelVisible = true;
                        self.updateinventorydisplay();
                    }
                }
            });

            this.AddButton(screencanvas_group2d_RB, { id: "R2DSettings", text: "Settings", x: -36 + 64 * 2 * -1, y: 4, width: 52, height: 32 }, function () {
                console.log("Settings..");
                if (self.settings_ui == null) {
                    //self.createinventoryHUD();
                } else {
                    //console.log(self.inventory_ui);
                    if (self.settings_ui.isVisible) {
                        //console.log(false);
                        self.settings_ui.levelVisible = false;
                    } else {
                        self.hidemenus();
                        //console.log(true);
                        self.settings_ui.levelVisible = true;
                        //self.updateinventorydisplay();
                    }
                }
            });

            this.AddButton(screencanvas_group2d_RB, { id: "R2DMap", text: "Map", x: -36 + 64 * 3 * -1, y: 4, width: 52, height: 32 }, function () {
                //console.log("map..");
                if (self.map_ui == null) {
                    //self.createinventoryHUD();
                } else {
                    //console.log(self.inventory_ui);
                    if (self.map_ui.isVisible) {
                        //console.log(false);
                        self.map_ui.levelVisible = false;
                    } else {
                        self.hidemenus();
                        //console.log(true);
                        self.map_ui.levelVisible = true;
                        //self.updateinventorydisplay();
                    }
                }
            });

            this.AddButton(screencanvas_group2d_RB, { id: "R2DSkills", text: "Skills", x: -36 + 64 * 4 * -1, y: 4, width: 52, height: 32 }, function () {
                console.log("R2DSkills clicked!");

                if (self.skills_ui == null) {
                    self.createskillsHUD();
                } else {
                    //console.log(self.skills_ui);
                    if (self.skills_ui.isVisible) {
                        //console.log(false);
                        self.skills_ui.levelVisible = false;
                    } else {
                        self.hidemenus();
                        //console.log(true);
                        self.skills_ui.levelVisible = true;
                    }
                }
            });

            this.AddButton(screencanvas_group2d_RB, { id: "R2DItems", text: "Items", x: -36 + 64 * 5 * -1, y: 4, width: 52, height: 32 }, function () {
                if (self.inventory_ui == null) {
                    self.createinventoryHUD();
                    self.updateinventorydisplay();
                } else {
                    //console.log(self.inventory_ui);
                    if (self.inventory_ui.isVisible) {
                        //console.log(false);
                        self.inventory_ui.levelVisible = false;
                    } else {
                        self.hidemenus();
                        //console.log(true);
                        self.inventory_ui.levelVisible = true;
                        self.updateinventorydisplay();
                    }
                }
            });

            this.AddButton(screencanvas_group2d_RB, { id: "R2DHome", text: "Home", x: -36 + 64 * 6 * -1, y: 4, width: 52, height: 32 }, function () {
                console.log("home..");
                if (self.home_ui == null) {
                    self.createinventoryHUD();
                    self.updateinventorydisplay();
                } else {
                    if (self.home_ui.isVisible) {
                        self.home_ui.levelVisible = false;
                    } else {
                        self.hidemenus();
                        self.home_ui.levelVisible = true;
                        //self.updateinventorydisplay();
                    }
                }
            });

            //this.setupeditor();
        }
    }]);

    return Babylonjs_game_hud;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_hud_battle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require('../system/Babylonjs_game_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_hud_battle = exports.Babylonjs_game_hud_battle = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_hud_battle, _Babylonjs_game_modul);

    function Babylonjs_game_hud_battle(args) {
        _classCallCheck(this, Babylonjs_game_hud_battle);

        return _possibleConstructorReturn(this, (Babylonjs_game_hud_battle.__proto__ || Object.getPrototypeOf(Babylonjs_game_hud_battle)).call(this, args));
    }

    _createClass(Babylonjs_game_hud_battle, [{
        key: 'create2D_BattleHUD',
        value: function create2D_BattleHUD() {
            var self = this;
            //button
            this.AddButton(this.screencanvas, { id: 'button_escape', text: 'Escape', x: 10, y: 22 * 0 + 10 }, function () {
                self.actionescape();
            });
            this.AddButton(this.screencanvas, { id: 'button_item', text: 'Items', x: 10, y: 22 * 1 + 10 }, function () {
                self.openitem();
            });
            this.AddButton(this.screencanvas, { id: 'button_skills', text: 'Skills', x: 10, y: 22 * 2 + 10 }, function () {
                self.openskills();
            });
            this.AddButton(this.screencanvas, { id: 'button_move', text: 'Move', x: 10, y: 22 * 3 + 10 }, function () {
                self.openitem();
            });
            this.AddButton(this.screencanvas, { id: 'button_attack', text: 'Attack', x: 10, y: 22 * 4 + 10 }, function () {
                self.actionattack();
            });
            this.AddButton(this.screencanvas, { id: 'button_attack', text: 'Enemy Attack', x: 150, y: 22 * 4 + 10 }, function () {
                self.actionenemyattack();
            });
            this.AddButton(this.screencanvas, { id: 'button_battle', text: 'Battle', x: 10, y: 22 * 5 + 10 }, function () {
                self.actionbattle();
            });
        }
    }]);

    return Babylonjs_game_hud_battle;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_hud_inventory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require("../system/Babylonjs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_hud_inventory = exports.Babylonjs_game_hud_inventory = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_hud_inventory, _Babylonjs_game_modul);

    function Babylonjs_game_hud_inventory(args) {
        _classCallCheck(this, Babylonjs_game_hud_inventory);

        return _possibleConstructorReturn(this, (Babylonjs_game_hud_inventory.__proto__ || Object.getPrototypeOf(Babylonjs_game_hud_inventory)).call(this, args));
    }

    _createClass(Babylonjs_game_hud_inventory, [{
        key: "createinventoryHUD",
        value: function createinventoryHUD() {
            console.log("createinventoryHUD();");

            var self = this;
            var inventory_group2d = new BABYLON.Group2D({
                parent: this.screencanvas,
                id: "inventory_group2d" + "test",
                marginAlignment: "h: left, v: top"
                //scale:0.6 //limited since backgroundRoundRadius effect render
                //scale:1 //limited since backgroundRoundRadius effect render
            });

            var panel = this.create_R2D_Drag01(inventory_group2d, { text: 'Drag Inventory', x: 10, y: -142 });

            this.create_R2D_Text01(panel, { text: "Items", balign: true, x: 10, y: -32 * 1, width: 70 });
            this.create_R2D_Drag02(panel, { text: 'Up', x: 64, y: -32 * 1, bdrag: false, width: 50, click: function click(event) {
                    console.log("Up");
                    //self.select_index_inventory = 0;
                    //self.selectInventory();
                    self.moveupinventory();
                    self.updateinventorydisplay();
                } });

            this.create_R2D_Drag02(panel, { text: 'Down', x: 128, y: -32 * 1, bdrag: false, width: 50, click: function click(event) {
                    console.log("Down");
                    //self.select_index_inventory = 0;
                    //self.selectInventory();
                    self.movedowninventory();
                    self.updateinventorydisplay();
                } });

            var width = 192;

            this.display_inventory[0] = this.create_R2D_Drag02(panel, { text: 'Item 00', x: 10, y: -32 * 2, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_inventory = 0;
                    self.selectInventory();
                } });
            this.display_inventory[1] = this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 3, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_inventory = 1;
                    self.selectInventory();
                } });
            this.display_inventory[2] = this.create_R2D_Drag02(panel, { text: 'Item 02', x: 10, y: -32 * 4, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_inventory = 2;
                    self.selectInventory();
                } });
            this.display_inventory[3] = this.create_R2D_Drag02(panel, { text: 'Item 03', x: 10, y: -32 * 5, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_inventory = 3;
                    self.selectInventory();
                } });
            this.display_inventory[4] = this.create_R2D_Drag02(panel, { text: 'Item 04', x: 10, y: -32 * 6, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_inventory = 4;
                    self.selectInventory();
                } });
            this.display_inventory[5] = this.create_R2D_Drag02(panel, { text: 'Item 05', x: 10, y: -32 * 7, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_inventory = 5;
                    self.selectInventory();
                } });
            this.display_inventory[6] = this.create_R2D_Drag02(panel, { text: 'Item 06', x: 10, y: -32 * 8, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_inventory = 6;
                    self.selectInventory();
                } });
            this.display_inventory[7] = this.create_R2D_Drag02(panel, { text: 'Item 07', x: 10, y: -32 * 9, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_inventory = 7;
                    self.selectInventory();
                } });
            this.display_inventory[8] = this.create_R2D_Drag02(panel, { text: 'Item 08', x: 10, y: -32 * 10, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_inventory = 8;
                    self.selectInventory();
                } });
            this.display_inventory[9] = this.create_R2D_Drag02(panel, { text: 'Item 09', x: 10, y: -32 * 11, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_inventory = 9;
                    self.selectInventory();
                } });

            //this.button_inventory_10 = this.create_R2D_Drag02(panel,{text:'Select',x:10,y:-32*12,bdrag:false,click:(event)=>{
            //console.log("click item!");
            //console.log(self.select_index_inventory);
            //self.selectInventory();
            //}});
            this.inventory_ui = inventory_group2d;

            this.create_R2D_Drag02(panel, { text: 'Used', x: 256, y: -32 * 1, bdrag: false, width: 50, click: function click(event) {
                    console.log("Used");
                    self.selectitem_used();
                } });

            this.create_R2D_Drag02(panel, { text: 'Drop', x: 256, y: -32 * 2, bdrag: false, width: 50, click: function click(event) {
                    console.log("Drop");
                    self.selectitem_drop();
                } });

            this.create_R2D_Drag02(panel, { text: 'Equip', x: 256, y: -32 * 3, bdrag: false, width: 50, click: function click(event) {
                    console.log("Equip");
                    self.selectitem_equip();
                } });

            this.create_R2D_Drag02(panel, { text: 'Sort', x: 256, y: -32 * 4, bdrag: false, width: 50, click: function click(event) {
                    console.log("Sort");
                    self.selectitem_sort();
                } });

            this.create_R2D_Drag02(panel, { text: 'Scrap', x: 256, y: -32 * 5, bdrag: false, width: 50, click: function click(event) {
                    console.log("Scrap");
                    self.selectitem_scrap();
                } });
        }
    }, {
        key: "updateinventorydisplay",
        value: function updateinventorydisplay() {
            var self = this;
            //this.display_inventory
            //this.inventory;
            //console.log(this.display_inventory[0].children[0].children[0].text);
            //this.display_inventory[0].children[0].children[0].text = "test";
            var index = this.scroll_inventory_y;
            for (var i = 0; i < this.display_inventory.length; i++) {
                if (this.inventory[i + index] != null) {
                    this.display_inventory[i].children[0].children[0].text = this.inventory[i + index].name;
                } else {
                    this.display_inventory[i].children[0].children[0].text = "Empty";
                }
            }
            index = null;
        }
    }, {
        key: "selectInventory",
        value: function selectInventory() {
            var self = this;
            //self.select_index_inventory = 0;
            console.log(self.select_index_inventory);
            var _index_ = self.select_index_inventory + this.scroll_inventory_y;
            if (this.inventory[_index_] != null) {
                console.log("check options");
                console.log(this.inventory[_index_].name);
            }
        }
    }, {
        key: "moveupinventory",
        value: function moveupinventory() {
            this.scroll_inventory_y -= 1;
            if (this.inventory.length < 10) {
                this.scroll_inventory_y = 0;
                console.log("scroll less item than 10");
                return;
            }
            if (this.scroll_inventory_y < 0) {
                this.scroll_inventory_y = 0;
            }
            console.log(this.scroll_inventory_y);
        }
    }, {
        key: "movedowninventory",
        value: function movedowninventory() {
            this.scroll_inventory_y += 1;
            if (this.inventory.length < 10) {
                this.scroll_inventory_y = 0;
                console.log("scroll less item than 10");
                return;
            }
            if (this.scroll_inventory_y > this.inventory.length - 10) {
                this.scroll_inventory_y = this.inventory.length - 10;
            }
            console.log(this.scroll_inventory_y);
        }
    }, {
        key: "selectitem_used",
        value: function selectitem_used() {
            console.log("selectitem_used");
        }
    }, {
        key: "selectitem_drop",
        value: function selectitem_drop() {
            console.log("selectitem_drop");
        }
    }, {
        key: "selectitem_equip",
        value: function selectitem_equip() {
            console.log("selectitem_equip");
        }
    }, {
        key: "selectitem_sort",
        value: function selectitem_sort() {
            console.log("selectitem_sort");
        }
    }, {
        key: "selectitem_scrap",
        value: function selectitem_scrap() {
            console.log("selectitem_scrap");
        }
    }]);

    return Babylonjs_game_hud_inventory;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_hud_loot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require("../system/Babylonjs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_hud_loot = exports.Babylonjs_game_hud_loot = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_hud_loot, _Babylonjs_game_modul);

    function Babylonjs_game_hud_loot(args) {
        _classCallCheck(this, Babylonjs_game_hud_loot);

        return _possibleConstructorReturn(this, (Babylonjs_game_hud_loot.__proto__ || Object.getPrototypeOf(Babylonjs_game_hud_loot)).call(this, args));
    }

    _createClass(Babylonjs_game_hud_loot, [{
        key: "createlootUI",
        value: function createlootUI() {
            console.log("createlootUI();");
            var self = this;
            var loot_group2d = new BABYLON.Group2D({
                parent: this.screencanvas,
                id: "loot_group2d",
                marginAlignment: "h: left, v: top"
                //scale:0.6 //limited since backgroundRoundRadius effect render
                //scale:1 //limited since backgroundRoundRadius effect render
            });

            var panel = this.create_R2D_Drag01(loot_group2d, { text: 'Drag Loot', x: 10, y: -142 });
            this.create_R2D_Text01(panel, { text: "Items", balign: true, x: 10, y: -32 * 1, width: 70 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 2 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 3 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 4 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 5 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 6 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 7 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 8 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 9 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 10 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 11 });
        }
    }]);

    return Babylonjs_game_hud_loot;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_hud_market = undefined;

var _Babylonjs_game_module = require('../system/Babylonjs_game_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_hud_market = exports.Babylonjs_game_hud_market = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_hud_market, _Babylonjs_game_modul);

    function Babylonjs_game_hud_market(args) {
        _classCallCheck(this, Babylonjs_game_hud_market);

        return _possibleConstructorReturn(this, (Babylonjs_game_hud_market.__proto__ || Object.getPrototypeOf(Babylonjs_game_hud_market)).call(this, args));
    }

    return Babylonjs_game_hud_market;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_hud_shop = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require("../system/Babylonjs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_hud_shop = exports.Babylonjs_game_hud_shop = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_hud_shop, _Babylonjs_game_modul);

    function Babylonjs_game_hud_shop(args) {
        _classCallCheck(this, Babylonjs_game_hud_shop);

        return _possibleConstructorReturn(this, (Babylonjs_game_hud_shop.__proto__ || Object.getPrototypeOf(Babylonjs_game_hud_shop)).call(this, args));
    }

    _createClass(Babylonjs_game_hud_shop, [{
        key: "createshopHUD",
        value: function createshopHUD() {
            console.log("createinventoryHUD();");
            var self = this;
            var shop_group2d = new BABYLON.Group2D({
                parent: this.screencanvas,
                id: "shop_group2d",
                marginAlignment: "h: left, v: top"
                //scale:0.6 //limited since backgroundRoundRadius effect render
                //scale:1 //limited since backgroundRoundRadius effect render
            });
            var width = 192;

            var panel = this.create_R2D_Drag01(shop_group2d, { text: 'Drag Shop', x: 10, y: -142 });

            this.display_shop[0] = this.create_R2D_Drag02(panel, { text: 'Item 00', x: 10, y: -32 * 2, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_shop = 0;
                    self.selectShop();
                } });
            this.display_shop[1] = this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 3, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_shop = 1;
                    self.selectShop();
                } });
            this.display_shop[2] = this.create_R2D_Drag02(panel, { text: 'Item 02', x: 10, y: -32 * 4, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_shop = 2;
                    self.selectShop();
                } });
            this.display_shop[3] = this.create_R2D_Drag02(panel, { text: 'Item 03', x: 10, y: -32 * 5, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_shop = 3;
                    self.selectShop();
                } });
            this.display_shop[4] = this.create_R2D_Drag02(panel, { text: 'Item 04', x: 10, y: -32 * 6, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_shop = 4;
                    self.selectShop();
                } });
            this.display_shop[5] = this.create_R2D_Drag02(panel, { text: 'Item 05', x: 10, y: -32 * 7, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_shop = 5;
                    self.selectShop();
                } });
            this.display_shop[6] = this.create_R2D_Drag02(panel, { text: 'Item 06', x: 10, y: -32 * 8, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_shop = 6;
                    self.selectShop();
                } });
            this.display_shop[7] = this.create_R2D_Drag02(panel, { text: 'Item 07', x: 10, y: -32 * 9, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_shop = 7;
                    self.selectShop();
                } });
            this.display_shop[8] = this.create_R2D_Drag02(panel, { text: 'Item 08', x: 10, y: -32 * 10, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_shop = 8;
                    self.selectShop();
                } });
            this.display_shop[9] = this.create_R2D_Drag02(panel, { text: 'Item 09', x: 10, y: -32 * 11, width: width, bdrag: false, click: function click(event) {
                    //console.log("click item!");
                    self.select_index_shop = 9;
                    self.selectShop();
                } });
            this.shop_ui = shop_group2d;
        }
    }, {
        key: "selectShop",
        value: function selectShop() {
            var self = this;
            //self.select_index_inventory = 0;
            console.log(self.select_index_shop);
            var _index_ = self.select_index_shop + this.scroll_shop_y;
            var items = this.npc.shop;

            if (items[_index_] != null) {
                console.log("check options");
                console.log(items[_index_].name);
            }
            _index_ = null;
        }
    }, {
        key: "updateshop",
        value: function updateshop() {
            var self = this;
            //this.display_inventory
            //this.inventory;
            //console.log(this.display_inventory[0].children[0].children[0].text);
            //this.display_inventory[0].children[0].children[0].text = "test";
            var index = this.scroll_shop_y;
            var items = this.npc.shop;
            if (items != null) {
                //console.log(items);
                for (var i = 0; i < this.display_shop.length; i++) {
                    //console.log((i + index));
                    //console.log(items[i + index]);
                    if (items[i + index] != null) {
                        this.display_shop[i].children[0].children[0].text = items[i + index].name;
                    } else {
                        this.display_shop[i].children[0].children[0].text = "Empty";
                    }
                }
            }
            index = null;
        }
    }, {
        key: "checkshop",
        value: function checkshop() {
            if (this.shop_ui == null) {
                this.createshopHUD();
                this.updateshop();
            } else {
                if (this.shop_ui.isVisible) {
                    this.shop_ui.levelVisible = false;
                } else {
                    this.updateshop();
                    this.shop_ui.levelVisible = true;
                }
            }
        }
    }]);

    return Babylonjs_game_hud_shop;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_hud_skills = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require("../system/Babylonjs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_hud_skills = exports.Babylonjs_game_hud_skills = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_hud_skills, _Babylonjs_game_modul);

    function Babylonjs_game_hud_skills(args) {
        _classCallCheck(this, Babylonjs_game_hud_skills);

        return _possibleConstructorReturn(this, (Babylonjs_game_hud_skills.__proto__ || Object.getPrototypeOf(Babylonjs_game_hud_skills)).call(this, args));
    }

    _createClass(Babylonjs_game_hud_skills, [{
        key: "createskillsHUD",
        value: function createskillsHUD() {
            console.log("createinventoryHUD();");
            var self = this;
            var skills_group2d = new BABYLON.Group2D({
                parent: this.screencanvas,
                id: "inventory_group2d" + "test",
                marginAlignment: "h: left, v: top"
                //scale:0.6 //limited since backgroundRoundRadius effect render
                //scale:1 //limited since backgroundRoundRadius effect render
            });

            var panel = this.create_R2D_Drag01(skills_group2d, { text: 'Drag Skills', x: 10, y: -142 });

            this.create_R2D_Text01(panel, { text: "Items", balign: true, x: 10, y: -32 * 1, width: 70 });

            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 2 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 3 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 4 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 5 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 6 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 7 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 8 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 9 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 10 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 11 });
            this.skills_ui = skills_group2d;
        }
    }]);

    return Babylonjs_game_hud_skills;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_hud_storage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require("../system/Babylonjs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_hud_storage = exports.Babylonjs_game_hud_storage = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_hud_storage, _Babylonjs_game_modul);

    function Babylonjs_game_hud_storage(args) {
        _classCallCheck(this, Babylonjs_game_hud_storage);

        return _possibleConstructorReturn(this, (Babylonjs_game_hud_storage.__proto__ || Object.getPrototypeOf(Babylonjs_game_hud_storage)).call(this, args));
    }

    _createClass(Babylonjs_game_hud_storage, [{
        key: "createstorageUI",
        value: function createstorageUI() {
            console.log("createstorageUI();");
            var self = this;
            var storage_group2d = new BABYLON.Group2D({
                parent: this.screencanvas,
                id: "loot_group2d",
                marginAlignment: "h: left, v: top"
                //scale:0.6 //limited since backgroundRoundRadius effect render
                //scale:1 //limited since backgroundRoundRadius effect render
            });

            var panel = this.create_R2D_Drag01(storage_group2d, { text: 'Drag Storage', x: 10, y: -142 });
            this.create_R2D_Text01(panel, { text: "Items", balign: true, x: 10, y: -32 * 1, width: 70 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 2 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 3 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 4 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 5 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 6 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 7 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 8 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 9 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 10 });
            this.create_R2D_Drag02(panel, { text: 'Item 01', x: 10, y: -32 * 11 });
        }
    }]);

    return Babylonjs_game_hud_storage;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_hud_trade = undefined;

var _Babylonjs_game_module = require('../system/Babylonjs_game_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_hud_trade = exports.Babylonjs_game_hud_trade = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_hud_trade, _Babylonjs_game_modul);

    function Babylonjs_game_hud_trade(args) {
        _classCallCheck(this, Babylonjs_game_hud_trade);

        return _possibleConstructorReturn(this, (Babylonjs_game_hud_trade.__proto__ || Object.getPrototypeOf(Babylonjs_game_hud_trade)).call(this, args));
    }

    return Babylonjs_game_hud_trade;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_jqueryui = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require("../system/Babylonjs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_jqueryui = exports.Babylonjs_game_jqueryui = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_jqueryui, _Babylonjs_game_modul);

    function Babylonjs_game_jqueryui(args) {
        _classCallCheck(this, Babylonjs_game_jqueryui);

        return _possibleConstructorReturn(this, (Babylonjs_game_jqueryui.__proto__ || Object.getPrototypeOf(Babylonjs_game_jqueryui)).call(this, args));
    }

    _createClass(Babylonjs_game_jqueryui, [{
        key: "create_window_jqui",
        value: function create_window_jqui() {

            //console.log("window?");
            //this.create_assets_jqui();
            //this.create_scene_jqui();
            //this.create_character_jqui();
            //this.create_sceneobject_jqui();
            //this.create_codeeditor_jqui();
            //this.create_worldsettings_jqui();
            //this.create_terrain_jqui();
            //this.create_shape_jqui();

            //this.create_navmenu();
            //this.create_leftsidebar();
            //this.create_rightsidebar();
            //this.create_login_jqui();
        }
    }, {
        key: "create_login_jqui",
        value: function create_login_jqui() {
            var _div = document.createElement("div");
            _div.id = "login";
            var texthtml = "\n        <br>User:<input id=\"login_username\" value=\"guest\">\n        <br>Pass:<input id=\"login_password\" value=\"guest\">\n        <button onclick=\"BABYLONJSAPI.ui_login();\">Login</button>\n        <button onclick=\"BABYLONJSAPI.ui_register();\">Register</button>\n        ";

            _div.innerHTML = texthtml;

            document.getElementsByTagName('body')[0].appendChild(_div);

            $(function () {
                $("#login").dialog();
                //$("#login").dialog('close');
            });
        }
    }, {
        key: "ui_login",
        value: function ui_login() {
            console.log(document.getElementById("login_username").value);
            console.log(document.getElementById("login_password").value);
            this.gunLogin(document.getElementById("login_username").value, document.getElementById("login_password").value, function (res) {
                console.log("Status login:");
                console.log(res);
            });
        }
    }, {
        key: "_getgunkey",
        value: function _getgunkey(_username) {
            return 'users/' + _username;
        }
    }, {
        key: "ui_register",
        value: function ui_register() {
            console.log(document.getElementById("login_username").value);
            console.log(document.getElementById("login_password").value);
            this.gunRegister(document.getElementById("login_username").value, document.getElementById("login_password").value, function (res) {
                console.log("Status login:");
                console.log(res);
            });
        }
    }, {
        key: "gunLogin",
        value: function gunLogin(_user, _pass, cb, opt) {
            var self = this;
            cb = cb || function () {};
            opt = opt || {};

            var guser = this.gun.get(self._getgunkey(_user), function (error, node) {
                //console.log(error);
                //console.log(node);
                if (node == null && error == null) {
                    //cb('user do not exist!');
                    cb('error!');
                }
                if (node != null) {
                    console.log(node);
                    cb('found!');
                }
            });
        }
    }, {
        key: "gunRegister",
        value: function gunRegister(_user, _pass, cb, opt) {
            var self = this;
            cb = cb || function () {};
            opt = opt || {};

            var guser = this.gun.get(self._getgunkey(_user), function (error, node) {
                //console.log(error);
                //console.log(node);
                if (node == null && error == null) {
                    //cb('user do not exist!');
                    cb('create user');
                    guser.put({ access: "base" });
                }
                if (node != null) {
                    cb('User Exist');
                }
            });
        }
    }, {
        key: "create_leftsidebar",
        value: function create_leftsidebar() {
            //http://jsfiddle.net/eHded/4/
            //http://stackoverflow.com/questions/19392453/jquery-show-hide-sliding-panel-from-left-side
            var _style = document.createElement("style");
            var _style_ = "\n        .panel {\n        \twidth:300px;\n        \tfloat:left;\n        \theight:550px;\n        \tbackground:#d9dada;\n        \tposition:relative;\n        \tleft:-300px;\n        }\n\n        .panel.expand {\n            left: 0;\n        }\n\n        .slider-arrow {\n        \tpadding:5px;\n        \twidth:10px;\n        \tfloat:left;\n        \tbackground:#d9dada;\n        \tfont:400 12px Arial, Helvetica, sans-serif;\n        \tcolor:#000;\n        \ttext-decoration:none;\n        \tposition:relative;\n        \tleft:-300px;\n        }";
            _style.innerHTML = _style_;
            document.getElementsByTagName('head')[0].appendChild(_style);

            var _div = document.createElement("div");
            //_div.id="container";
            //_div.style = "float:right;";
            _div.style.position = "absolute";
            _div.style.top = 0;
            _div.style.left = 0;
            //_div.style.width = "100%";
            //_div.style.height = "100%";
            _div.innerHTML = "\n            <div class=\"panel\">Hello World</div>\n            <a href=\"javascript:void(0);\" class=\"slider-arrow show\">&raquo;</a>";
            //document.getElementById('TopRight').appendChild(_div);
            document.getElementsByTagName('body')[0].appendChild(_div);

            $(function () {

                $('.slider-arrow').click(function () {
                    $('.panel').toggleClass('expand');
                });
            });
        }
    }, {
        key: "create_rightsidebar",
        value: function create_rightsidebar() {
            //http://jsfiddle.net/shijukbabu/QgD5Y/8/
            var _style = document.createElement("style");
            var _style_ = "\n        #side{\n            float:right;\n            width:50px;\n            height:50px;\n            background:#BBB;\n        }\n\n        .hide{\n            display:none;\n        }\n\n        #slidable{\n            float:right;\n            height:50px;\n            background:#888;\n            width:200px;\n        }";
            _style.innerHTML = _style_;
            document.getElementsByTagName('head')[0].appendChild(_style);

            var _div = document.createElement("div");
            _div.id = "container";
            _div.style = "float:right;";
            _div.style.position = "absolute";
            _div.style.top = 0;
            _div.style.right = 0;
            //_div.style.width = "100%";
            //_div.style.height = "100%";
            _div.innerHTML = "\n            <div id=\"slidable\"class=\"hide\">Foobar</div>\n            <div id=\"side\"></div>";
            //document.getElementById('TopRight').appendChild(_div);
            document.getElementsByTagName('body')[0].appendChild(_div);

            $(function () {
                $("#side").click(function () {
                    $('#slidable').animate({ width: 'toggle' });
                });
            });
        }
    }, {
        key: "create_navmenu",
        value: function create_navmenu() {
            var _div = document.createElement("div");
            _div.id = "TopRight";
            _div.style.position = "absolute";
            _div.style.top = 0;
            _div.style.left = 0;
            //_div.style.width = "100%";
            //_div.style.height = "100%";

            var strhtml = "<ul id=\"navmenu\">";
            strhtml += "<li>";
            //strhtml += `<div><span class="ui-icon ui-icon-disk"></span>Save</div>`;
            strhtml += "<div><span class=\"ui-icon ui-icon-plus\"></span>Menu</div>";
            strhtml += "<ul>";

            strhtml += "<li>";
            strhtml += "<div onclick=\"$('#assets').dialog('open');\"><span class=\"ui-icon ui-icon-newwin\"></span>Assets</div>";
            strhtml += "</li>";

            strhtml += "<li>";
            strhtml += "<div onclick=\"$('#scene').dialog('open');\"><span class=\"ui-icon ui-icon-newwin\"></span>Scene</div>";
            strhtml += "</li>";

            strhtml += "<li>";
            strhtml += "<div onclick=\"$('#character').dialog('open');\"><span class=\"ui-icon ui-icon-newwin\"></span>Character</div>";
            strhtml += "</li>";

            strhtml += "<li>";
            strhtml += "<div onclick=\"$('#sceneobject').dialog('open');\"><span class=\"ui-icon ui-icon-newwin\"></span>Scene Object</div>";
            strhtml += "</li>";

            strhtml += "<li>";
            strhtml += "<div onclick=\"$('#scripts').dialog('open');\"><span class=\"ui-icon ui-icon-newwin\"></span>Scripts</div>";
            strhtml += "</li>";

            strhtml += "<li>";
            strhtml += "<div onclick=\"$('#codeeditor').dialog('open');\"><span class=\"ui-icon ui-icon-newwin\"></span>Script Editor</div>";
            strhtml += "</li>";

            strhtml += "<li>";
            strhtml += "<div onclick=\"$('#shape').dialog('open');\"><span class=\"ui-icon ui-icon-newwin\"></span>Shape</div>";
            strhtml += "</li>";

            strhtml += "<li>";
            strhtml += "<div onclick=\"$('#terrain').dialog('open');\"><span class=\"ui-icon ui-icon-newwin\"></span>Terrain</div>";
            strhtml += "</li>";

            strhtml += "</ul>";

            strhtml += "</li>";

            strhtml += "<li>";
            strhtml += "<div onclick=\"BABYLONJSAPI.SaveSceneMap();\"><span class=\"ui-icon ui-icon-plus\"></span>Save Scene</div>";
            strhtml += "</li>";

            strhtml += "<li>";
            strhtml += "<div onclick=\"BABYLONJSAPI.LoadSceneMap();\"><span class=\"ui-icon ui-icon-plus\"></span>Load Scene</div>";
            strhtml += "</li>";

            strhtml += "<li>";
            strhtml += "<div onclick=\"BABYLONJSAPI.ClearSceneMap();\"><span class=\"ui-icon ui-icon-plus\"></span>Clear Scene</div>";
            strhtml += "</li>";

            strhtml += "<li>";
            strhtml += "<div onclick=\"BABYLONJSAPI.DeleteSceneMap();\"><span class=\"ui-icon ui-icon-plus\"></span>Delete Scene</div>";
            strhtml += "</li>";

            strhtml += "</ul>";

            _div.innerHTML = strhtml;
            document.getElementsByTagName('body')[0].appendChild(_div);

            $(function () {
                $("#navmenu").menu();
            });
        }
    }, {
        key: "create_worldsettings_jqui",
        value: function create_worldsettings_jqui() {
            var _div = document.createElement("div");
            _div.id = "worldsettings";
            document.getElementsByTagName('body')[0].appendChild(_div);

            $(function () {
                $("#worldsettings").dialog();
                $("#worldsettings").dialog('close');
            });
        }
    }, {
        key: "create_assets_jqui",
        value: function create_assets_jqui() {
            var div_assets = document.createElement("div");
            div_assets.id = "assets";
            document.getElementsByTagName('body')[0].appendChild(div_assets);

            $(function () {
                $("#assets").dialog();
                $("#assets").dialog('close');
            });
        }
    }, {
        key: "create_scene_jqui",
        value: function create_scene_jqui() {
            var self = this;
            var _div = document.createElement("div");
            _div.id = "scene";
            var strhtml = "<button onclick=\"BABYLONJSAPI.ui_updatesceneobject();\">Refresh</button>\n        <button onclick=\"BABYLONJSAPI.ui_delete_select_sceneobject();\">Delete</button>\n        <br><span>Selected:</span> <span id=\"select-result\">none</span>";
            strhtml += "<ol id=\"selectsceneobj\" style=\"list-style-type: none; margin: 0; padding: 0; width: 60%;  \">";
            //strhtml +=    `<li class="ui-widget-content">Item 1</li>`;
            strhtml += "</ol>";
            _div.innerHTML = strhtml;

            document.getElementsByTagName('body')[0].appendChild(_div);
            //var selectsceneobj = document.getElementById("selectsceneobj");

            $(function () {
                $("#scene").dialog();
                $("#scene").dialog('close');
                $("#selectsceneobj").selectable({
                    stop: function stop() {
                        console.log("selected");
                        var result = $("#select-result").empty();
                        $(".ui-selected", this).each(function () {
                            console.log(this);
                            console.log(this.id);
                            if (this.id != null) {
                                self.ui_select_sceneobject(this.id);
                            }
                            var index = $("#selectsceneobj li").index(this);
                            result.append(" #" + (index + 1));
                        });
                    }
                });
                //var ELList = `<li class="ui-widget-content">Item 1</li>`;
                //$( "#selectsceneobj" ).append( ELList );
                //$( "#selectsceneobj" ).empty();
                //$('.container').append(listHTML);
            });
        }
        //BABYLONJSAPI.ui_updatesceneobject();

    }, {
        key: "ui_updatesceneobject",
        value: function ui_updatesceneobject() {
            $("#selectsceneobj").empty();
            for (var i = 0; i < this.scene.meshes.length; i++) {
                if (this.scene.meshes[i].rpgobj != null) {
                    var rpgobj = this.scene.meshes[i].rpgobj;
                    var ELList = "<li class=\"ui-widget-content\" id=\"" + rpgobj.uuid + "\">" + rpgobj.nameClass + "</li>";
                    $("#selectsceneobj").append(ELList);
                }
            }
        }
    }, {
        key: "ui_select_sceneobject",
        value: function ui_select_sceneobject(_id) {
            console.log("select object");
            for (var i = 0; i < this.scene.meshes.length; i++) {
                if (this.scene.meshes[i].rpgobj != null) {
                    //var rpgobj = this.scene.meshes[i].rpgobj;
                    if (this.scene.meshes[i].rpgobj.uuid == _id) {
                        this.selectobject = this.scene.meshes[i];
                        this.updateselectobject();
                    }
                }
            }
        }
    }, {
        key: "ui_delete_select_sceneobject",
        value: function ui_delete_select_sceneobject() {
            var _this2 = this;

            console.log("delete select object");
            if (this.selectobject != null) {
                if (this.selectobject.rpgobj != null) {
                    this.check_gunsceneobj(this.selectobject.rpgobj['uuid'], function (bfind, id) {
                        //console.log("....CALLS");
                        var gscene = _this2.gun.get('scene');
                        if (bfind) {
                            console.log("set scene object delete");
                            if (id != null) {
                                console.log(id);
                                gscene.path(id).put(null);
                            }
                        }
                        console.log("object delete!");
                        //need to change this later
                        _this2.selectobject.dispose();
                    });
                }
            }
        }

        //BABYLONJSAPI.ui_create_character();

    }, {
        key: "create_character_jqui",
        value: function create_character_jqui() {
            var _div = document.createElement("div");
            _div.id = "character";
            var _strui = "\n        PX:<input id=\"char_px\" value=\"0\">\n        <br>PY:<input id=\"char_py\" value=\"1\">\n        <br>PZ:<input id=\"char_pz\" value=\"0\">\n        <br><button onclick=\"BABYLONJSAPI.ui_create_character();\">Create Character</button>\n        ";

            _div.innerHTML = _strui;
            document.getElementsByTagName('body')[0].appendChild(_div);
            $(function () {
                $("#character").dialog();
                $("#character").dialog('close');
            });
        }
    }, {
        key: "ui_create_character",
        value: function ui_create_character() {

            this.spawn_character({
                x: document.getElementById("char_px").value || 0,
                y: document.getElementById("char_py").value || 0,
                z: document.getElementById("char_pz").value || 0
            });

            //var npc = this.spawn_character({y: 64});
        }
    }, {
        key: "create_sceneobject_jqui",
        value: function create_sceneobject_jqui() {
            var self = this;
            var div_sceneobject = document.createElement("div");
            div_sceneobject.id = "sceneobject";

            var strhtml = "";
            strhtml += "<div id=\"accordion_sceneobject\">";
            strhtml += "<h3>Transform</h3>";
            strhtml += "<div>";

            strhtml += "PX:<input id=\"obj_px\" value=\"0\">";
            strhtml += "<br>PY:<input id=\"obj_py\" value=\"0\">";
            strhtml += "<br>PZ:<input id=\"obj_pz\" value=\"0\">";

            strhtml += "<br>RX:<input id=\"obj_rx\" value=\"0\">";
            strhtml += "<br>RY:<input id=\"obj_ry\" value=\"0\">";
            strhtml += "<br>RZ:<input id=\"obj_rz\" value=\"0\">";
            strhtml += "<br>SX:<input id=\"obj_sx\" value=\"1\">";
            strhtml += "<br>SY:<input id=\"obj_sy\" value=\"1\">";
            strhtml += "<br>SZ:<input id=\"obj_sz\" value=\"1\">";

            strhtml += "</div>";
            strhtml += "<h3>Mesh</h3>";
            strhtml += "<div>";
            strhtml += "<p>\n                    Mesh\n                     </p>";
            strhtml += "</div>";
            strhtml += "<h3>Material</h3>";
            strhtml += "<div>";
            strhtml += "<p>\n                    Mesh\n                     </p>";
            strhtml += "</div>";
            strhtml += "<h3>Animation</h3>";
            strhtml += "<div>";
            strhtml += "<p>\n                    Mesh\n                     </p>";
            strhtml += "</div>";
            strhtml += "<h3>Physics</h3>";
            strhtml += "<div>";
            strhtml += "<p>\n                    Mesh\n                     </p>";
            strhtml += "</div>";
            strhtml += "<h3>Scripts</h3>";
            strhtml += "<div>";
            strhtml += "<p>\n                    Mesh\n                     </p>";
            strhtml += "</div>";
            strhtml += "";

            div_sceneobject.innerHTML = strhtml;
            document.getElementsByTagName('body')[0].appendChild(div_sceneobject);

            $(function () {
                $("#sceneobject").dialog({ width: 400 });
                $("#accordion_sceneobject").accordion();

                var obj_px = $("#obj_px").spinner({ step: 0.01, numberFormat: "n",
                    spin: function spin(event, ui) {
                        //console.log( ui.value);
                        $(this).val(ui.value).trigger('value_changed');
                    } }).on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        console.log(this.value);
                        $(this).val(this.value).trigger('value_changed');
                    }
                }).on('value_changed', function (e) {
                    //console.log('value changed to '+$(this).val());
                    //console.log($(this).val());
                    if (self.selectobject != null) {
                        self.selectobject.position.x = Number($(this).val());
                        if (self.selectobject.rpgobj != null) {
                            self.selectobject.rpgobj.position.x = Number($(this).val());
                        }
                    }
                });

                $("#obj_py").spinner({ step: 0.01, numberFormat: "n",
                    spin: function spin(event, ui) {
                        //console.log( ui.value);
                        $(this).val(ui.value).trigger('value_changed');
                    } }).on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        console.log(this.value);
                        $(this).val(this.value).trigger('value_changed');
                    }
                }).on('value_changed', function (e) {
                    //console.log('value changed to '+$(this).val());
                    //console.log($(this).val());
                    if (self.selectobject != null) {
                        self.selectobject.position.y = Number($(this).val());
                        if (self.selectobject.rpgobj != null) {
                            self.selectobject.rpgobj.position.y = Number($(this).val());
                        }
                    }
                });
                $("#obj_pz").spinner({ step: 0.01, numberFormat: "n",
                    spin: function spin(event, ui) {
                        //console.log( ui.value);
                        $(this).val(ui.value).trigger('value_changed');
                    } }).on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        console.log(this.value);
                        $(this).val(this.value).trigger('value_changed');
                    }
                }).on('value_changed', function (e) {
                    //console.log('value changed to '+$(this).val());
                    //console.log($(this).val());
                    if (self.selectobject != null) {
                        self.selectobject.position.z = Number($(this).val());
                        if (self.selectobject.rpgobj != null) {
                            self.selectobject.rpgobj.position.z = Number($(this).val());
                        }
                    }
                });

                $("#obj_rx").spinner({ step: 0.01, numberFormat: "n",
                    spin: function spin(event, ui) {
                        //console.log( ui.value);
                        $(this).val(ui.value).trigger('value_changed');
                    } }).on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        console.log(this.value);
                        $(this).val(this.value).trigger('value_changed');
                    }
                }).on('value_changed', function (e) {
                    //console.log('value changed to '+$(this).val());
                    //console.log($(this).val());
                    if (self.selectobject != null) {
                        self.selectobject.rotation.x = Number($(this).val());
                    }
                });
                $("#obj_ry").spinner({ step: 0.01, numberFormat: "n",
                    spin: function spin(event, ui) {
                        //console.log( ui.value);
                        $(this).val(ui.value).trigger('value_changed');
                    } }).on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        console.log(this.value);
                        $(this).val(this.value).trigger('value_changed');
                    }
                }).on('value_changed', function (e) {
                    //console.log('value changed to '+$(this).val());
                    //console.log($(this).val());
                    if (self.selectobject != null) {
                        self.selectobject.rotation.y = Number($(this).val());
                    }
                });
                $("#obj_rz").spinner({ step: 0.01, numberFormat: "n",
                    spin: function spin(event, ui) {
                        //console.log( ui.value);
                        $(this).val(ui.value).trigger('value_changed');
                    } }).on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        console.log(this.value);
                        $(this).val(this.value).trigger('value_changed');
                    }
                }).on('value_changed', function (e) {
                    //console.log('value changed to '+$(this).val());
                    //console.log($(this).val());
                    if (self.selectobject != null) {
                        self.selectobject.rotation.z = Number($(this).val());
                    }
                });

                $("#obj_sx").spinner({ step: 0.01, numberFormat: "n",
                    spin: function spin(event, ui) {
                        //console.log( ui.value);
                        $(this).val(ui.value).trigger('value_changed');
                    } }).on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        console.log(this.value);
                        $(this).val(this.value).trigger('value_changed');
                    }
                }).on('value_changed', function (e) {
                    //console.log('value changed to '+$(this).val());
                    //console.log($(this).val());
                    if (self.selectobject != null) {
                        self.selectobject.scaling.x = Number($(this).val());
                    }
                });
                $("#obj_sy").spinner({ step: 0.01, numberFormat: "n",
                    spin: function spin(event, ui) {
                        //console.log( ui.value);
                        $(this).val(ui.value).trigger('value_changed');
                    } }).on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        console.log(this.value);
                        $(this).val(this.value).trigger('value_changed');
                    }
                }).on('value_changed', function (e) {
                    //console.log('value changed to '+$(this).val());
                    //console.log($(this).val());
                    if (self.selectobject != null) {
                        self.selectobject.scaling.y = Number($(this).val());
                    }
                });
                $("#obj_sz").spinner({ step: 0.01, numberFormat: "n",
                    spin: function spin(event, ui) {
                        //console.log( ui.value);
                        $(this).val(ui.value).trigger('value_changed');
                    } }).on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        console.log(this.value);
                        $(this).val(this.value).trigger('value_changed');
                    }
                }).on('value_changed', function (e) {
                    //console.log('value changed to '+$(this).val());
                    //console.log($(this).val());
                    if (self.selectobject != null) {
                        self.selectobject.scaling.z = Number($(this).val());
                    }
                });

                $("#sceneobject").dialog('close');
            });
        }
    }, {
        key: "create_codeeditor_jqui",
        value: function create_codeeditor_jqui() {
            var _div = document.createElement("div");
            _div.id = "codeeditor";
            _div.innerHTML = "<textarea id=\"editor\"></textarea>";
            document.getElementsByTagName('body')[0].appendChild(_div);

            $(function () {
                $("#codeeditor").dialog();
                $("#codeeditor").dialog('close');
            });

            /*
            tinymce.init({
              selector: '#editor',
              menubar: false,
              plugins: "codesample",
              toolbar: 'undo redo | code | BtnSave',
                setup: function (editor) {
                editor.addButton('BtnSave', {
                  text: 'Save',
                  icon: false,
                  onclick: function () {
            		  console.log("save?");
                      //editor.insertContent('&nbsp;<b>It\'s my button!</b>&nbsp;');
                  }
                });
              }
            });
            */
        }
    }, {
        key: "create_terrain_jqui",
        value: function create_terrain_jqui() {
            var _div = document.createElement("div");
            _div.id = "terrain";
            _div.innerHTML += "Camera Position: <input id=\"terrain_camera\" type=\"checkbox\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "x:<input id=\"terrain_x\" class=\"numbersOnly\" value=\"0\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "y:<input id=\"terrain_y\" class=\"numbersOnly\" value=\"0\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "z:<input id=\"terrain_z\" class=\"numbersOnly\" value=\"0\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "<button onclick=\"BABYLONJSAPI.ui_createterrain();\">Create Terrain</button>";

            document.getElementsByTagName('body')[0].appendChild(_div);

            $(function () {
                $("#terrain").dialog();
                $("#terrain").dialog('close');
            });
        }

        //BABYLONJSAPI.ui_createterrain();

    }, {
        key: "ui_createterrain",
        value: function ui_createterrain() {
            console.log("test click!");
            var pos_x = document.getElementById("terrain_x").value;
            //console.log(pos_x);
            var pos_y = document.getElementById("terrain_y").value;
            var pos_z = document.getElementById("terrain_z").value;

            this.createterrain({ x: pos_x, y: pos_y, z: pos_z });
        }

        //BABYLONJSAPI.ui_selectshape();

    }, {
        key: "create_shape_jqui",
        value: function create_shape_jqui() {
            var _div = document.createElement("div");
            _div.id = "shape";
            _div.innerHTML += "Camera Position: <input id=\"terrain_camera\" type=\"checkbox\">";
            _div.innerHTML += "<br>";

            var options = "<select id=\"sceneshape\" onclick=\"BABYLONJSAPI.ui_selectshape();\">";
            options += "<option value=\"cube\">Cube</option>";
            options += "<option value=\"cylinder\">Cylinder</option>";
            options += "<option value=\"sphere\">Sphere</option>";
            options += "<option value=\"plane\">Plane</option>";
            options += "</select>";
            _div.innerHTML += options;

            _div.innerHTML += "<br>";
            _div.innerHTML += "height:<input id=\"shape_height\" class=\"numbersOnly\" value=\"1\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "width:<input id=\"shape_width\" class=\"numbersOnly\" value=\"1\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "depth:<input id=\"shape_depth\" class=\"numbersOnly\" value=\"1\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "diameter:<input id=\"shape_diameter\" class=\"numbersOnly\" value=\"1\" style=\"display:none;\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "segments:<input id=\"shape_segments\" class=\"numbersOnly\" value=\"1\" style=\"display:none;\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "diameterTop:<input id=\"shape_diameterTop\" class=\"numbersOnly\" value=\"1\" style=\"display:none;\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "tessellation:<input id=\"shape_tessellation\" class=\"numbersOnly\" value=\"4\" style=\"display:none;\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "x:<input id=\"shape_x\" class=\"numbersOnly\" value=\"0\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "y:<input id=\"shape_y\" class=\"numbersOnly\" value=\"0\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "z:<input id=\"shape_z\" class=\"numbersOnly\" value=\"0\">";
            _div.innerHTML += "<br>";
            _div.innerHTML += "<button onclick=\"BABYLONJSAPI.ui_createshape();\">Create Shape</button>";

            _div.innerHTML += "";
            document.getElementsByTagName('body')[0].appendChild(_div);

            $(function () {
                $("#shape").dialog();
                $("#shape").dialog('close');
            });
        }
    }, {
        key: "ui_selectshape",
        value: function ui_selectshape() {
            //https://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#box
            this.selectsceneshape = document.getElementById("sceneshape").value || 'cube';
            console.log(document.getElementById("shape_height").style.display);
            document.getElementById("shape_height").style.display = "none";
            document.getElementById("shape_width").style.display = "none";
            document.getElementById("shape_depth").style.display = "none";
            document.getElementById("shape_diameter").style.display = "none";
            document.getElementById("shape_segments").style.display = "none";
            document.getElementById("shape_diameterTop").style.display = "none";
            document.getElementById("shape_tessellation").style.display = "none";

            if (this.selectsceneshape == 'cube') {
                document.getElementById("shape_height").style.display = "inline";
                document.getElementById("shape_width").style.display = "inline";
                document.getElementById("shape_depth").style.display = "inline";
            }

            if (this.selectsceneshape == 'sphere') {
                document.getElementById("shape_diameter").style.display = "inline";
            }

            if (this.selectsceneshape == 'cylinder') {
                //document.getElementById("shape_diameterTop").style.display = "inline";
                document.getElementById("shape_diameter").style.display = "inline";
                document.getElementById("shape_tessellation").style.display = "inline";
            }
        }
    }, {
        key: "ui_createshape",
        value: function ui_createshape() {
            this.selectsceneshape = document.getElementById("sceneshape").value || 'box';

            this.shape_x = document.getElementById("shape_x").value || 1;
            this.shape_y = document.getElementById("shape_y").value || 1;
            this.shape_z = document.getElementById("shape_z").value || 1;

            if (this.selectsceneshape == "cube") {
                var shape_height = document.getElementById("shape_height").value;
                var shape_width = document.getElementById("shape_width").value;
                var shape_depth = document.getElementById("shape_depth").value;
                this.parse_object({ geometrytype: 'cube',
                    parameters: {
                        height: shape_height,
                        width: shape_width,
                        depth: shape_depth },
                    position: {
                        x: this.shape_x,
                        y: this.shape_y,
                        z: this.shape_z
                    }
                });
            }

            if (this.selectsceneshape == "sphere") {
                this.parse_object({ geometrytype: 'sphere',
                    parameters: {
                        diameter: document.getElementById("shape_diameter").value
                    },
                    position: {
                        x: this.shape_x,
                        y: this.shape_y,
                        z: this.shape_z
                    }
                });
            }

            if (this.selectsceneshape == "cylinder") {
                this.parse_object({ geometrytype: 'cylinder',
                    parameters: {
                        //diameterTop: document.getElementById("shape_diameterTop").value,
                        diameter: document.getElementById("shape_diameter").value,
                        tessellation: document.getElementById("shape_tessellation").value
                    },
                    position: {
                        x: this.shape_x,
                        y: this.shape_y,
                        z: this.shape_z
                    }
                });
            }

            //console.log(this.selectsceneshape);
            console.log("add shape to scene!");
        }
    }]);

    return Babylonjs_game_jqueryui;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_load = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require('../system/Babylonjs_game_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_load = exports.Babylonjs_game_load = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_load, _Babylonjs_game_modul);

    function Babylonjs_game_load(args) {
        _classCallCheck(this, Babylonjs_game_load);

        return _possibleConstructorReturn(this, (Babylonjs_game_load.__proto__ || Object.getPrototypeOf(Babylonjs_game_load)).call(this, args));
    }

    _createClass(Babylonjs_game_load, [{
        key: 'loadmap_requestXML',
        value: function loadmap_requestXML() {
            console.log("init map json load...");
            var self = this;
            var req = new XMLHttpRequest();
            req.open('GET', 'http://127.0.0.1/prototype.json');
            req.onreadystatechange = function () {
                //alert(req.responseText);
                //console.log(req.responseText);
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        //alert(req.responseText);
                        //console.log(req.responseText);
                        self.prase_mapjson(req.responseText);
                        //console.log("done loading?");
                    }
                } else {
                        //alert("Error loading page\n");
                        //console.log("Error loading page\n");
                    }
            };
            req.send();
        }
    }]);

    return Babylonjs_game_load;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_network = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require('../system/Babylonjs_game_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_network = exports.Babylonjs_game_network = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_network, _Babylonjs_game_modul);

    function Babylonjs_game_network(args) {
        _classCallCheck(this, Babylonjs_game_network);

        return _possibleConstructorReturn(this, (Babylonjs_game_network.__proto__ || Object.getPrototypeOf(Babylonjs_game_network)).call(this, args));
        //var propertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
        //var propertyNames = Object.getOwnPropertyNames(this);
        //propertyNames.forEach(function(key) {
        //console.log(key);
        //if(key != constructor){
        //var desc = Object.getOwnPropertyDescriptor(this, key);
        //console.log(desc);
        //Object.defineProperty(clone, key, desc);
        //}
        //});
        /*
        for(var fun in propertyNames){
            //console.log(fun);
            //console.log(propertyNames[fun]);
            if(propertyNames[fun] != "constructor"){
                args[propertyNames[fun]] = this[propertyNames[fun]];
            }else{
                //console.log('ignore ' + propertyNames[fun] );
            }
        }
        */
    }

    _createClass(Babylonjs_game_network, [{
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

    return Babylonjs_game_network;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_physics = undefined;

var _Babylonjs_game_module = require('../system/Babylonjs_game_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_physics = exports.Babylonjs_game_physics = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_physics, _Babylonjs_game_modul);

    function Babylonjs_game_physics(args) {
        _classCallCheck(this, Babylonjs_game_physics);

        return _possibleConstructorReturn(this, (Babylonjs_game_physics.__proto__ || Object.getPrototypeOf(Babylonjs_game_physics)).call(this, args));
    }

    return Babylonjs_game_physics;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    Project Name: bes-threejs
    Link:https://github.com/Lightnet/bes-threejs
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/

function uuid() {
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

var ObjectRPGID = exports.ObjectRPGID = function () {
	_createClass(ObjectRPGID, null, [{
		key: 'getClass',
		value: function getClass() {
			return 'ObjectRPGID';
		}
	}]);

	function ObjectRPGID(args) {
		_classCallCheck(this, ObjectRPGID);

		args = args || { rotation: {}, scale: {} };
		//args[''] ||
		this.gundbid = args['gundbid'] || "";
		this.uuid = args['uuid'] || uuid();
		this.nameClass = "ObjectRPGID";

		this.hashid = args['hashid'] || "";
		this.id = args['id'] || "";
		this.name = args['name'] || "none";
		this.description = args['description'] || "none";
		this.objtype = args['objtype'] || "none";

		this.parameters = args['parameters'] || {};

		this.binteract = args['binteract'] || false;
		this.bused = args['bused'] || false;
		this.bdrop = args['bdrop'] || false;
		this.bthrow = args['bthrow'] || false;
		this.btrigger = args['btrigger'] || false;
		this.events = args['events'] || {};
		this.tag = args['tag'] || "";
		this.children = args['children'] || {};
		this.scripts = args['scripts'] || {};

		this.buyprice = args['buyprice'] || 0;
		this.sellprice = args['sellprice'] || 0;
		this.keywords = args['keywords'] || {};

		this.stack = args['stack'] || 1;
		this.maxstack = args['maxstack'] || 1;

		this.x = args['x'] || 0;
		this.y = args['y'] || 0;
		this.z = args['z'] || 0;

		if (args['position'] != null) {
			this.position = {
				"x": args['position']['x'] || 0,
				"y": args['position']['y'] || 0,
				"z": args['position']['z'] || 0
			};
			//console.log("??????");
		} else {
			//console.log("Default");
			this.position = { "x": 0, "y": 0, "z": 0 };
		}

		if (args['x'] != null) {
			this.position.x = args['x'] || 0;
		}
		if (args['y'] != null) {
			this.position.y = args['y'] || 0;
		}
		if (args['z'] != null) {
			this.position.z = args['z'] || 0;
		}

		if (args['rotation'] != null) {
			this.rotation = {
				x: args['rotation']['x'] || 0,
				y: args['rotation']['y'] || 0,
				z: args['rotation']['z'] || 0
			};
		} else {
			this.rotation = { x: 0, y: 0, z: 0 };
		}

		if (args['scaling'] != null) {
			this.scaling = {
				x: args['scaling']['x'] || 0,
				y: args['scaling']['y'] || 0,
				z: args['scaling']['z'] || 0
			};
		} else {
			this.scaling = {
				x: 0,
				y: 0,
				z: 0
			};
		}
	}

	return ObjectRPGID;
}();

},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RPGCharacter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectRPGID2 = require('./ObjectRPGID');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var RPGCharacter = exports.RPGCharacter = function (_ObjectRPGID) {
    _inherits(RPGCharacter, _ObjectRPGID);

    _createClass(RPGCharacter, null, [{
        key: 'getClass',
        value: function getClass() {
            return 'RPGCharacter';
        }
    }]);

    function RPGCharacter(args) {
        _classCallCheck(this, RPGCharacter);

        var _this = _possibleConstructorReturn(this, (RPGCharacter.__proto__ || Object.getPrototypeOf(RPGCharacter)).call(this, args));

        _this.objtype = "character";
        _this.nameClass = "RPGCharacter";
        return _this;
    }

    return RPGCharacter;
}(_ObjectRPGID2.ObjectRPGID);

},{"./ObjectRPGID":28}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RPGCube = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectRPGID2 = require('./ObjectRPGID');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var RPGCube = exports.RPGCube = function (_ObjectRPGID) {
    _inherits(RPGCube, _ObjectRPGID);

    _createClass(RPGCube, null, [{
        key: 'getClass',
        value: function getClass() {
            return 'RPGCube';
        }
    }]);

    function RPGCube(args) {
        _classCallCheck(this, RPGCube);

        var _this = _possibleConstructorReturn(this, (RPGCube.__proto__ || Object.getPrototypeOf(RPGCube)).call(this, args));

        _this.objtype = "mesh";
        _this.nameClass = "RPGCube";
        _this.geometrytype = 'cube';
        return _this;
    }

    return RPGCube;
}(_ObjectRPGID2.ObjectRPGID);

},{"./ObjectRPGID":28}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RPGCylinder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectRPGID2 = require('./ObjectRPGID');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var RPGCylinder = exports.RPGCylinder = function (_ObjectRPGID) {
    _inherits(RPGCylinder, _ObjectRPGID);

    _createClass(RPGCylinder, null, [{
        key: 'getClass',
        value: function getClass() {
            return 'RPGCylinder';
        }
    }]);

    function RPGCylinder(args) {
        _classCallCheck(this, RPGCylinder);

        var _this = _possibleConstructorReturn(this, (RPGCylinder.__proto__ || Object.getPrototypeOf(RPGCylinder)).call(this, args));

        _this.objtype = "mesh";
        _this.nameClass = "RPGCylinder";
        _this.geometrytype = 'cylinder';
        return _this;
    }

    return RPGCylinder;
}(_ObjectRPGID2.ObjectRPGID);

},{"./ObjectRPGID":28}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RPGItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectRPGID2 = require('./ObjectRPGID');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var RPGItem = exports.RPGItem = function (_ObjectRPGID) {
    _inherits(RPGItem, _ObjectRPGID);

    _createClass(RPGItem, null, [{
        key: 'getClass',
        value: function getClass() {
            return 'RPGItem';
        }
    }]);

    function RPGItem(args) {
        _classCallCheck(this, RPGItem);

        var _this = _possibleConstructorReturn(this, (RPGItem.__proto__ || Object.getPrototypeOf(RPGItem)).call(this, args));

        _this.objtype = "item";
        _this.nameClass = "RPGItem";
        return _this;
    }

    return RPGItem;
}(_ObjectRPGID2.ObjectRPGID);

},{"./ObjectRPGID":28}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RPGMesh = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectRPGID2 = require('./ObjectRPGID');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var RPGMesh = exports.RPGMesh = function (_ObjectRPGID) {
    _inherits(RPGMesh, _ObjectRPGID);

    _createClass(RPGMesh, null, [{
        key: 'getClass',
        value: function getClass() {
            return 'RPGMesh';
        }
    }]);

    function RPGMesh(args) {
        _classCallCheck(this, RPGMesh);

        var _this = _possibleConstructorReturn(this, (RPGMesh.__proto__ || Object.getPrototypeOf(RPGMesh)).call(this, args));

        _this.objtype = "mesh";
        _this.nameClass = "RPGMesh";
        return _this;
    }

    return RPGMesh;
}(_ObjectRPGID2.ObjectRPGID);

},{"./ObjectRPGID":28}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RPGNPCCharacter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectRPGID2 = require('./ObjectRPGID');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var RPGNPCCharacter = exports.RPGNPCCharacter = function (_ObjectRPGID) {
    _inherits(RPGNPCCharacter, _ObjectRPGID);

    _createClass(RPGNPCCharacter, null, [{
        key: 'getClass',
        value: function getClass() {
            return 'RPGNPCCharacter';
        }
    }]);

    function RPGNPCCharacter(args) {
        _classCallCheck(this, RPGNPCCharacter);

        var _this = _possibleConstructorReturn(this, (RPGNPCCharacter.__proto__ || Object.getPrototypeOf(RPGNPCCharacter)).call(this, args));

        _this.objtype = "npc";
        _this.nameClass = "RPGNPCCharacter";
        return _this;
    }

    return RPGNPCCharacter;
}(_ObjectRPGID2.ObjectRPGID);

},{"./ObjectRPGID":28}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RPGPlane = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectRPGID2 = require('./ObjectRPGID');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var RPGPlane = exports.RPGPlane = function (_ObjectRPGID) {
    _inherits(RPGPlane, _ObjectRPGID);

    _createClass(RPGPlane, null, [{
        key: 'getClass',
        value: function getClass() {
            return 'RPGPlane';
        }
    }]);

    function RPGPlane(args) {
        _classCallCheck(this, RPGPlane);

        var _this = _possibleConstructorReturn(this, (RPGPlane.__proto__ || Object.getPrototypeOf(RPGPlane)).call(this, args));

        _this.objtype = "mesh";
        _this.nameClass = "RPGPlane";
        _this.geometrytype = 'plane';
        return _this;
    }

    return RPGPlane;
}(_ObjectRPGID2.ObjectRPGID);

},{"./ObjectRPGID":28}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RPGSphere = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectRPGID2 = require('./ObjectRPGID');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var RPGSphere = exports.RPGSphere = function (_ObjectRPGID) {
    _inherits(RPGSphere, _ObjectRPGID);

    _createClass(RPGSphere, null, [{
        key: 'getClass',
        value: function getClass() {
            return 'RPGSphere';
        }
    }]);

    function RPGSphere(args) {
        _classCallCheck(this, RPGSphere);

        var _this = _possibleConstructorReturn(this, (RPGSphere.__proto__ || Object.getPrototypeOf(RPGSphere)).call(this, args));

        _this.objtype = "mesh";
        _this.nameClass = "RPGSphere";
        _this.geometrytype = 'sphere';
        return _this;
    }

    return RPGSphere;
}(_ObjectRPGID2.ObjectRPGID);

},{"./ObjectRPGID":28}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    Project Name: bes-threejs
    Link:https://github.com/Lightnet/bes-threejs
    Created By: Lightnet
    License: cc (creative commons)

    Information: Please read the readme.md file for more information.
*/

var RPGStats = exports.RPGStats = function () {
		_createClass(RPGStats, null, [{
				key: "getClass",
				value: function getClass() {
						return 'RPGStats';
				}
		}]);

		function RPGStats(args) {
				_classCallCheck(this, RPGStats);

				this.nameClass = "RPGStats";

				this.str = 0;
				this.vit = 0;
				this.dex = 0;
				this.agi = 0;
				this.int = 0;

				this.wisdom = 0;
				this.charisma = 0;
				this.luck = 0;

				this.perception = 0;
		}

		return RPGStats;
}();

},{}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.RPGStatus = undefined;

var _ObjectRPGID2 = require('./ObjectRPGID');

var _RPGStats = require('./RPGStats');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var RPGStatus = exports.RPGStatus = function (_ObjectRPGID) {
		_inherits(RPGStatus, _ObjectRPGID);

		function RPGStatus(args) {
				_classCallCheck(this, RPGStatus);

				var _this = _possibleConstructorReturn(this, (RPGStatus.__proto__ || Object.getPrototypeOf(RPGStatus)).call(this, args));

				_this.objtype = "status";
				_this.nameClass = "RPGStatus";
				args = args || {};

				_this.stats = new _RPGStats.RPGStats();

				_this.health = args['health'] || 5;
				_this.maxhealth = 5;

				_this.magic = 0;
				_this.magicmax = 0;

				_this.stamina = 100;
				_this.maxstamina = 100;

				_this.psyche = 100;
				_this.maxpsyche = 100;

				_this.conditions = [];
				_this.skills = [];
				_this.inventory = [];
				_this.equipments = [];

				_this.speed = 1;
				_this.criticalhit = 1;

				_this.attack = args['attack'] || 1;
				_this.defense = args['defense'] || 0;

				_this.magicattack = 0;
				_this.magicdefense = 0;

				_this.totalattack = 1;
				_this.totaldefense = 0;

				_this.totalmagicattack = 0;
				_this.totalmagicdefense = 0;

				_this.bshop = false;
				_this.shop = [];

				_this.queryaction = ""; //attack, skill
				_this.target = null;
				_this.targets = null;
				_this.targettype = "single"; //single, multiples, selected, area
				_this.readyaction = false;
				_this.finishaction = false;

				_this.mesh = null;
				_this.bphysics = true;
				_this.isdead = false;
				_this.targets = [];

				//this.isfinishanimation = false;
				//this.isactionfinish = false;
				_this.isturnfinish = false;
				_this.bskipturn = false;

				return _this;
		}

		return RPGStatus;
}(_ObjectRPGID2.ObjectRPGID);

},{"./ObjectRPGID":28,"./RPGStats":37}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RPGTerrain = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectRPGID2 = require('./ObjectRPGID');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var RPGTerrain = exports.RPGTerrain = function (_ObjectRPGID) {
    _inherits(RPGTerrain, _ObjectRPGID);

    _createClass(RPGTerrain, null, [{
        key: 'getClass',
        value: function getClass() {
            return 'RPGTerrain';
        }
    }]);

    function RPGTerrain(args) {
        _classCallCheck(this, RPGTerrain);

        var _this = _possibleConstructorReturn(this, (RPGTerrain.__proto__ || Object.getPrototypeOf(RPGTerrain)).call(this, args));

        _this.objtype = "terrain";
        _this.nameClass = "RPGTerrain";
        return _this;
    }

    return RPGTerrain;
}(_ObjectRPGID2.ObjectRPGID);

},{"./ObjectRPGID":28}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_scene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require("../system/Babylonjs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_scene = exports.Babylonjs_game_scene = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_scene, _Babylonjs_game_modul);

    function Babylonjs_game_scene(args) {
        _classCallCheck(this, Babylonjs_game_scene);

        return _possibleConstructorReturn(this, (Babylonjs_game_scene.__proto__ || Object.getPrototypeOf(Babylonjs_game_scene)).call(this, args));
    }

    _createClass(Babylonjs_game_scene, [{
        key: "simple_scene",
        value: function simple_scene() {
            var scene = this.scene;
            //===============================================
            // simple scene
            //===============================================
            var light = new BABYLON.PointLight("light", new BABYLON.Vector3(10, 10, 0), this.scenes[this.scenename]);

            var box = BABYLON.Mesh.CreateBox("box", 2, this.scenes[this.scenename]);
            var boxMaterial = new BABYLON.StandardMaterial("material", this.scenes[this.scenename]);
            boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
            box.material = boxMaterial;
            box.position.y = 10;
            box.position.x = -3;

            this.camera.setTarget(BABYLON.Vector3.Zero());
            //var box = BABYLON.Mesh.CreateBox("box", 2, this.scenes[this.scenename]);
            //box.position.y = 10;
            //box.position.x = -3;

            var box1 = BABYLON.Mesh.CreateBox("box", 1.0, scene);
            box1.position.x = -5;
            box1.position.y = 1;
            //box1.physicsImpostor = new BABYLON.PhysicsImpostor(box1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
            box1.setPhysicsState({ impostor: BABYLON.PhysicsEngine.BoxImpostor, move: false, restitution: 1, mass: 0, friction: 0.5 });
            box1.showBoundingBox = true;
            var box2 = BABYLON.Mesh.CreateBox("box", 1.0, scene);
            box2.position.x = 5;
            box2.position.y = 1;
            //box2.physicsImpostor = new BABYLON.PhysicsImpostor(box2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
            box2.setPhysicsState({ impostor: BABYLON.PhysicsEngine.BoxImpostor, move: false, restitution: 1, mass: 0, friction: 0.5 });
            box2.showBoundingBox = true;
            //https://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#box
            // Let's try our built-in 'ground' shape.  Params: name, width, depth, subdivisions, scene
            //var ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 2, this.scene);
            var ground = BABYLON.MeshBuilder.CreateBox("ground", { height: 1, width: 20, depth: 20 }, scene);
            //ground.scale.x = 100;
            //ground.scale.y = 100;
            ground.setPhysicsState({ impostor: BABYLON.PhysicsEngine.BoxImpostor, move: false, restitution: 0, mass: 0, friction: 10 });
            ground.showBoundingBox = true;
        }
    }]);

    return Babylonjs_game_scene;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.Babylonjs_game_assets = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require("./Babylonjs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_assets = exports.Babylonjs_game_assets = function (_Babylonjs_game_modul) {
				_inherits(Babylonjs_game_assets, _Babylonjs_game_modul);

				function Babylonjs_game_assets(args) {
								_classCallCheck(this, Babylonjs_game_assets);

								return _possibleConstructorReturn(this, (Babylonjs_game_assets.__proto__ || Object.getPrototypeOf(Babylonjs_game_assets)).call(this, args));
				}

				_createClass(Babylonjs_game_assets, [{
								key: "init_assets",
								value: function init_assets() {
												this.assetsManager = new BABYLON.AssetsManager(this.scene);
								}
				}, {
								key: "add_assets_mesh",
								value: function add_assets_mesh(filepath, objectname) {
												var self = this;
												var meshTask = this.assetsManager.addMeshTask("object task" + this.uuid(), objectname, "assets/", filepath);
												meshTask.onSuccess = function (task) {
																//task.loadedMeshes[0].position = BABYLON.Vector3.Zero();
																task.loadedMeshes[0].position = new BABYLON.Vector3(0, 2, 3);
																//console.log(task.loadedMeshes[0].position);
																task.loadedMeshes[0].isVisible = false;
																self.meshes.push(task.loadedMeshes[0]);
																self.models.push({ mesh: task.loadedMeshes[0], skeleton: null });
												};
								}
				}, {
								key: "finish_assets_load",
								value: function finish_assets_load(cb) {
												this.assetsManager.onFinish = function (tasks) {
																//console.log('assets loaded!');
																//self.setup_game();
																cb();
																//self.engine.hideLoadingUI();
																//self.loadmap_requestXML();
												};
								}
				}, {
								key: "load_assets",
								value: function load_assets() {
												this.assetsManager.load();
								}
				}, {
								key: "createscene_assets",
								value: function createscene_assets() {
												var self = this;
												//console.log("adding preload assets...");

												this.init_assets();

												this.add_assets_mesh("block_character03.babylon", "CubeBody");

												this.add_assets_mesh("arm_cube.babylon", "Cube");

												this.add_assets_mesh("block_floor.babylon", "block_floor");
												this.add_assets_mesh("block_wall.babylon", "block_wall");
												this.add_assets_mesh("block_stair.babylon", "block_stair");
												this.add_assets_mesh("block_frame_door.babylon", "block_framedoor");
												this.add_assets_mesh("block_ceiling.babylon", "block_ceiling");

												this.finish_assets_load(function () {
																self.setup_game();
												});

												this.load_assets();

												/*
            this.assetsManager = new BABYLON.AssetsManager(this.scene);
            var filepath = "block_character03.babylon";
            var objectname = "CubeBody";
            var meshTask = this.assetsManager.addMeshTask("cubebody task", objectname, "assets/", filepath);
            meshTask.onSuccess = function (task) {
            //task.loadedMeshes[0].position = BABYLON.Vector3.Zero();
            task.loadedMeshes[0].position = new BABYLON.Vector3(0,2,3);
            //console.log(task.loadedMeshes[0].position);
            task.loadedMeshes[0].isVisible = false;
            self.meshes.push(task.loadedMeshes[0]);
            self.models.push({mesh:task.loadedMeshes[0],skeleton:null});
            }
            filepath = "arm_cube.babylon";
            objectname = "Cube";
            var meshTask2 = this.assetsManager.addMeshTask("cube task", objectname, "assets/", filepath);
            meshTask2.onSuccess = function (task) {
            //task.loadedMeshes[0].position = BABYLON.Vector3.Zero();
            task.loadedMeshes[0].isVisible = false;
            self.meshes.push(task.loadedMeshes[0]);
            self.models.push({mesh:task.loadedMeshes[0],skeleton:null});
            }
            this.assetsManager.onFinish = function(tasks) {
            //console.log('assets loaded!');
            self.setup_game();
            //self.engine.hideLoadingUI();
                //self.loadmap_requestXML();
            };
            this.assetsManager.load();
            */

												/*
            //self.setup_game();
            var filepath = "block_character03.babylon";
            var objectname = "CubeBody";
            //var filepath = "arm_cube.babylon";
            //var objectname = "Cube";
            BABYLON.SceneLoader.ImportMesh(objectname, "/assets/", filepath, this.scene, function (newMeshes, particleSystems, skeletons) {
            	console.log(newMeshes[0]);
            	newMeshes[0].isVisible = false;
            	//self.scene.beginAnimation(newMeshes[0], 0, 15, true, 0.5); //works
            	//self.scene.beginAnimation(newMeshes[0], 11, 20, true, 0.5); //works
            	self.meshes.push(newMeshes[0]);
            	self.models.push({mesh:newMeshes[0],skeleton:skeletons[0]});
            	self.setup_game();
            });
            */
								}
				}, {
								key: "getMeshAssets",
								value: function getMeshAssets(_name) {
												var model = null;
												for (var i = 0; i < this.models.length; i++) {
																if (this.models[i].mesh.name == _name) {
																				var mid = this.uuid(); //random id generator
																				//model = this.meshes[i].clone(mid,null,true);
																				model = this.models[i].mesh.clone("mesh" + mid);
																				var mid = this.uuid(); //random id generator
																				model.position = new BABYLON.Vector3(0, 0, 3);
																				if (this.models[i].mesh.skeleton != null) {
																								model.skeleton = this.models[i].mesh.skeleton.clone("skeleton" + mid);
																				}
																				break;
																}
												}
												return model; //null or object
								}
				}, {
								key: "getmesh",
								value: function getmesh(_name) {
												//console.log("get mesh?");
												var model = null;
												for (var i = 0; i < this.models.length; i++) {
																//console.log(this.models[i].mesh.name," : ",_name);
																if (this.models[i].mesh.name == _name) {
																				//console.log("match????");
																				var mid = this.uuid(); //random id generator
																				//model = this.meshes[i].clone(mid,null,true);
																				model = this.models[i].mesh.clone("mesh" + mid);
																				var mid = this.uuid(); //random id generator
																				model.position = new BABYLON.Vector3(0, 0, 3);
																				if (this.models[i].mesh.skeleton != null) {
																								model.skeleton = this.models[i].mesh.skeleton.clone("skeleton" + mid);
																				}
																				//model.skeleton = this.models[i].skeleton.clone("skeleton"+mid);
																				//this.scene.beginAnimation(model.skeleton, 40, 60, true, 0.5); //works /// works
																				//console.log("done?");
																				break;
																}
												}
												/*
            for(var i = 0 ; i < this.meshes.length;i++){
            	if(this.meshes[i].name == _name){
            		var mid = uuid();//random id generator
            		//model = this.meshes[i].clone(mid,null,true);
            		model = this.meshes[i].clone(mid);
            		var mid = uuid();//random id generator
            		model.skeleton = this.meshes[i].skeleton.clone(mid);
            		this.scene.beginAnimation(model, 40, 60, true, 0.5); //works /// works
            		break;
            	}
            }
            */
												return model; //null or object
								}
				}]);

				return Babylonjs_game_assets;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"./Babylonjs_game_module":45}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Babylonjs_game_battle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require("./Babylonjs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_battle = exports.Babylonjs_game_battle = function (_Babylonjs_game_modul) {
	_inherits(Babylonjs_game_battle, _Babylonjs_game_modul);

	function Babylonjs_game_battle(args) {
		_classCallCheck(this, Babylonjs_game_battle);

		return _possibleConstructorReturn(this, (Babylonjs_game_battle.__proto__ || Object.getPrototypeOf(Babylonjs_game_battle)).call(this, args));
	}

	_createClass(Babylonjs_game_battle, [{
		key: "createbattle_prototype",
		value: function createbattle_prototype() {
			var self = this;
			var player = new RPGStatus({ name: "player", health: 10 });
			//console.log(this.assetsManager);

			var model = this.getmesh("CubeBody");
			//console.log(model);
			if (model != null) {
				model.rpgstatus = player;
				console.log(player);
				player.mesh = model;
				player.mesh.isVisible = true;
				player.mesh.position.x = 3;
				player.mesh.position.z = 0;
				player.mesh.position.y = 0;
				player.mesh.rotation.y = Math.PI / 2; //90
				this.create_spaceworld_status(self.scene, player.mesh, player);
			}
			this.parties.push(player);

			var enemy = new RPGStatus({ name: "enemy", health: 1 });
			console.log(enemy);
			var model2 = this.getmesh("CubeBody");
			if (model2 != null) {
				model2.rpgstatus = enemy;
				enemy.mesh = model2;
				model2.isVisible = true;
				model2.position.x = -3;
				model2.position.z = 0;
				model2.position.y = 0;
				model2.rotation.y = Math.PI / 2 * -1; //-90
				this.create_spaceworld_status(this.scene, model2, enemy);
			}
			this.enemies.push(enemy);

			player.targets.push(enemy);
			enemy.targets.push(player);

			this.turns.push(player);
			this.turns.push(enemy);

			//this.scenename = "sceneassets";
			//this.scenes['sceneassets'];
		}
	}, {
		key: "actionbattle",
		value: function actionbattle() {
			console.log("action battle ...");
			console.log(this.parties[0]);
			//check if party health is not zero for attack
			//this.opponentAttack(this.parties[0],this.enemies[0]);
			//this.opponentAttack(this.enemies[0],this.parties[0]);
			this.checkcharacter_turns();
		}
	}, {
		key: "opponentAttack",
		value: function opponentAttack(_Attack, _defender) {
			console.log("opponentAttack ...");
			if (_Attack.health > 0) {
				_defender.health = _defender.health - _Attack.attack;
			}
			if (_defender.health <= 0) {
				_defender.health = 0;
			}
		}
	}, {
		key: "setupbattle",
		value: function setupbattle() {
			console.log("set up");
		}
	}, {
		key: "createbattle",
		value: function createbattle() {
			console.log("create battle");
		}
	}, {
		key: "openitem",
		value: function openitem() {
			console.log("open item ...");
			console.log(this.parties[0]);
		}
	}, {
		key: "openskills",
		value: function openskills() {
			console.log("open skills ...");
			console.log(this.parties[0]);
		}
	}, {
		key: "actionattack",
		value: function actionattack() {
			//var self = this;
			//console.log("action player attack ...");
			//console.log(  this.parties[0].mesh.uniqueId   );
			//self.scene.beginAnimation(this.parties[0].mesh.skeleton, 0, 10, false, 0.5); //works /// works
			//this.opponentAttack(this.parties[0],this.enemies[0]);
			//this.opponentAttack(this.enemies[0],this.parties[0]);
			//this.checkcharacter_turns();
		}
	}, {
		key: "actionenemyattack",
		value: function actionenemyattack() {
			var _this2 = this;

			var self = this;
			console.log("action enemy attack ...");
			self.scene.beginAnimation(this.enemies[0].mesh.skeleton, 0, 10, false, 0.5, function () {
				console.log("finish attack");
				self.opponentAttack(_this2.enemies[0], _this2.parties[0]);
				self.enemies[0].isturnfinish = true;

				self.scene.beginAnimation(_this2.parties[0].mesh.skeleton, 30, 40, false, 0.5, function () {
					self.checkcharacters_battle();
				});
			}); //works
			//this.opponentAttack(this.parties[0],this.enemies[0]);
		}
	}, {
		key: "actionmove",
		value: function actionmove() {
			console.log("action move ...");
			//console.log(this.parties[0]);
		}
	}, {
		key: "actionescape",
		value: function actionescape() {
			console.log("action escape ...");
			//console.log(this.parties[0]);
		}
	}, {
		key: "playattackaction",
		value: function playattackaction() {
			console.log("player attack action");
		}
	}, {
		key: "characteraction_turn",
		value: function characteraction_turn(currentcharacter) {
			var self = this;
			console.log("action enemy attack ...");
			//attack
			if (currentcharacter.health <= 0) {
				currentcharacter.isturnfinish = true;
				self.checkcharacters_battle();
			} else {
				if (currentcharacter.targets[0].health <= 0) {
					//console.log("DEFENCE FALSE???");
					//make sure the target is skip if health is zero
					currentcharacter.isturnfinish = true;
					currentcharacter.targets[0].isturnfinish = true;
					console.log(currentcharacter.targets[0]);
					//for(var i = 0; i < this.turns.length;i++){
					//if(this.turns[i] == currentcharacter.targets[0]){
					//this.turns[i].isturnfinish = true;
					//break;
					//}
					//}
					self.checkcharacters_battle();
				} else {
					self.scene.beginAnimation(currentcharacter.mesh.skeleton, 0, 10, false, 0.5, function () {
						console.log("finish attack");
						self.opponentAttack(currentcharacter, currentcharacter.targets[0]);
						currentcharacter.isturnfinish = true;
						//being hit
						self.scene.beginAnimation(currentcharacter.targets[0].mesh.skeleton, 30, 40, false, 0.5, function () {
							self.checkcharacters_battle();
						});
					}); //works
				}
			}
		}
	}, {
		key: "checkcharacter_turns",
		value: function checkcharacter_turns() {
			for (var i = 0; i < this.turns.length; i++) {
				if (this.turns[i].isturnfinish == false) {
					console.log("start current turn character");
					console.log(this.turns[i].name);
					this.characteraction_turn(this.turns[i]);
					break;
				}
			}
		}
	}, {
		key: "checkcharacters_battle",
		value: function checkcharacters_battle() {
			console.log("checking...");
			var count = 0;
			var bfinishturns = false;

			for (var i = 0; i < this.turns.length; i++) {
				console.log(this.turns[i].name + ":" + this.turns[i].isturnfinish);
				if (this.turns[i].isturnfinish == true) {
					count += 1;
				}
			}

			if (count == this.turns.length) {
				bfinishturns = true;
			}
			//console.log(count + ":" + this.turns.length);

			console.log("bfinishturns:" + bfinishturns);
			if (bfinishturns) {
				console.log("done!");
				this.battle_turnreset();
			} else {
				console.log("next action attack for character!");
				this.checkcharacter_turns();
			}
			bfinishturns = null;
			count = null;
		}
	}, {
		key: "battle_turnreset",
		value: function battle_turnreset() {
			for (var pi = 0; pi < this.parties.length; pi++) {
				if (this.parties[pi].isturnfinish == true) {
					this.parties[pi].isturnfinish = false;
				}
			}

			for (var pi = 0; pi < this.enemies.length; pi++) {
				if (this.enemies[pi].isturnfinish == true) {
					this.enemies[pi].isturnfinish = false;
				}
			}
		}
	}]);

	return Babylonjs_game_battle;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"./Babylonjs_game_module":45}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_gundb = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require('./Babylonjs_game_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


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
//import '../../../js/gun.js';

var Babylonjs_game_gundb = exports.Babylonjs_game_gundb = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_gundb, _Babylonjs_game_modul);

    function Babylonjs_game_gundb(args) {
        _classCallCheck(this, Babylonjs_game_gundb);

        return _possibleConstructorReturn(this, (Babylonjs_game_gundb.__proto__ || Object.getPrototypeOf(Babylonjs_game_gundb)).call(this, args));
    }
    //BABYLONJSAPI.SaveSceneMap();

    _createClass(Babylonjs_game_gundb, [{
        key: 'setup_GunDBScript',
        value: function setup_GunDBScript() {
            Gun.chain.live = function (cb, opt) {
                return this.on(function (val, field) {
                    delete val._;
                    cb.call(this, val, field);
                }, opt);
            };

            Gun.chain.value = function (cb, opt) {
                return this.val(function (val, field) {
                    delete val._;
                    cb.call(this, val, field);
                }, opt);
            };

            Gun.chain.each = function () {
                var each = this.map();
                return this.val.apply(each, arguments);
            };

            function gunObjDataAssign(self, data) {
                for (var i in data) {
                    if (_typeof(data[i]) === 'object') {
                        if (data[i] != null) {
                            //console.log(data[i]);
                            var id = data[i]['#'];
                            data[i] = {}; //clear id hash
                            self.get(id).val(function (objdata) {
                                delete objdata._;
                                data[i] = objdata;
                                //console.log(objdata);
                                gunObjDataAssign(self, objdata);
                            });
                        }
                    }
                }
            }

            Gun.chain.valueobj = function (cb, opt) {
                return this.val(function (val, field) {

                    if (val != null) {
                        delete val._;
                    }
                    gunObjDataAssign(this, val);
                    cb.call(this, val, field);
                }, opt);
            };

            Gun.chain.liveobj = function (cb, opt) {
                return this.on(function (val, field) {
                    delete val._;
                    gunObjDataAssign(this, val);
                    cb.call(this, val, field);
                }, opt);
            };

            Gun.chain.eachobj = function () {
                var each = this.map();
                return this.valueobj.apply(each, arguments);
            };
        }
    }, {
        key: 'init_gundb',
        value: function init_gundb() {
            //this.setup_GunDBScript();
            //http://stackoverflow.com/questions/7667958/clear-localstorage
            localStorage.clear();

            //this.peers = ['http://127.0.0.1/gun'];
            //this.peers = ['http://127.0.0.1/gun','https://hgdb.herokuapp.com/gun'];
            this.peers = ['https://hgdb.herokuapp.com/gun'];
            this.gun = Gun(this.peers);
            console.log("init gundb...");
            //var gun = this.gun;
            //this.gun.get('scene');
            //gun bug using different way to handle angular 2 from requirejs
            this.gun.get('scene').each(function (_obj) {
                //console.log(_obj)
            });
            console.log("need to call out function to init?");
        }
    }]);

    return Babylonjs_game_gundb;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"./Babylonjs_game_module":45}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_loadsave = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require('./Babylonjs_game_module');

var _RPGTerrain = require('../rpg/RPGTerrain');

var _RPGMesh = require('../rpg/RPGMesh');

var _RPGCube = require('../rpg/RPGCube');

var _RPGSphere = require('../rpg/RPGSphere');

var _RPGCylinder = require('../rpg/RPGCylinder');

var _RPGNPCCharacter = require('../rpg/RPGNPCCharacter');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_loadsave = exports.Babylonjs_game_loadsave = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_loadsave, _Babylonjs_game_modul);

    function Babylonjs_game_loadsave(args) {
        _classCallCheck(this, Babylonjs_game_loadsave);

        return _possibleConstructorReturn(this, (Babylonjs_game_loadsave.__proto__ || Object.getPrototypeOf(Babylonjs_game_loadsave)).call(this, args));
    }

    //BABYLONJSAPI.SaveSceneMap();

    _createClass(Babylonjs_game_loadsave, [{
        key: 'check_gunsceneobj',
        value: function check_gunsceneobj(uuid, cb) {
            //console.log("------------------- start");
            var self = this;
            this.gun.get('scene').value(function (data) {

                console.log("check scene?" + Object.keys(data).length);
                var bfound = false;
                var count = 0;
                function checkid(state, id) {
                    if (Object.keys(data).length - 1 == count && state == false && bfound == false) {
                        console.log("not found object!");
                        cb(false);
                    }
                }
                for (var o in data) {
                    if (data[o] != null) {
                        if (data[o]['#'] != null) {
                            console.log(data[o]['#']);
                            self.gun.get(data[o]['#']).value(function (objdata) {
                                console.log(objdata);
                                if (objdata['uuid'] != null) {
                                    if (objdata['uuid'].toString() == String(uuid)) {
                                        console.log(objdata['uuid']);
                                        //return cb(true, data[o]['#']);
                                        bfound = true;
                                        //console.log("found!");
                                        //return checkid(true,data[o]['#']);
                                        return cb(true, data[o]['#']);
                                    }
                                }
                            });
                        }
                    }
                    checkid(false);
                    count++;
                }
                //return cb(bfound);
                //console.log("END GUN CHECK...");
                //console.log(data[1]);
            });
            //return cb(false);
            //console.log("------------------- end");
        }

        //BABYLONJSAPI.SaveSceneMap();

    }, {
        key: 'SaveObject',
        value: function SaveObject(obj) {
            var _this2 = this;

            //console.log(typeof obj);
            //console.log(obj , ":" ,RPGTerrain);
            console.log(obj);

            if (obj instanceof _RPGMesh.RPGMesh) {
                //console.log("match! RPGMesh");
            } else if (obj instanceof _RPGTerrain.RPGTerrain) {
                //console.log("match! RPGTerrain");
            } else if (obj instanceof _RPGCube.RPGCube) {
                //console.log("match! RPGCube");
            } else if (obj instanceof _RPGSphere.RPGSphere) {
                //console.log("match! RPGSphere");
            } else if (obj instanceof _RPGCylinder.RPGCylinder) {
                console.log("match! RPGCylinder");
            } else if (obj instanceof _RPGNPCCharacter.RPGNPCCharacter) {
                console.log("match! RPGNPCCharacter");
            } else {
                console.log("Not match getClass!");
                return;
            }

            //console.log("saving object data????");
            this.check_gunsceneobj(obj['uuid'], function (bfind, id) {
                //console.log("....CALLS");
                var gscene = _this2.gun.get('scene');
                //check child keys var is object to put var
                function gunObjectAssign(_gun, _obj) {
                    for (var i in _obj) {
                        if (_typeof(_obj[i]) == 'object') {
                            console.log(i);
                            //pathing for object child of object
                            _gun.path(i).put(_obj[i]);
                            gunObjectAssign(_gun.path(i), _obj[i]);
                        }
                    }
                }
                if (bfind) {
                    console.log("set object scene[update]");
                    if (id != null) {
                        console.log(id);
                        gscene.path(id).put(obj);
                        gunObjectAssign(gscene.path(id), obj);
                    }
                } else {
                    console.log("save object scene[insert]");
                    //console.log(obj);
                    gscene.set(obj);
                }
                console.log("object save?");
            });
        }
    }, {
        key: 'SaveCharacter',
        value: function SaveCharacter(args) {}

        //BABYLONJSAPI.SaveSceneMap();

    }, {
        key: 'SaveSceneMap',
        value: function SaveSceneMap() {
            //console.log(this.scene.meshes);
            for (var i = 0; i < this.scene.meshes.length; i++) {
                if (this.scene.meshes[i].rpgobj != null) {
                    console.log("found! rpgobj");
                    //console.log(this.scene.meshes[i].rpgobj);
                    this.SaveObject(this.scene.meshes[i].rpgobj);
                }
                if (this.scene.meshes[i].status != null) {
                    console.log("found! status");
                    this.SaveCharacter(this.scene.meshes[i].status);
                }
            }
        }
    }, {
        key: 'prase_gobject',
        value: function prase_gobject(obj) {
            //this.scene.meshes
            var bfound = false;
            for (var i = 0; i < this.scene.meshes.length; i++) {
                if (this.scene.meshes[i].rpgobj != null) {
                    if (this.scene.meshes[i].rpgobj.uuid == obj['uuid']) {
                        bfound = true;
                        break;
                    }
                }
            }
            if (bfound == false) {
                //console.log(obj);
                if (obj.nameClass != null) {
                    if (obj.nameClass == _RPGTerrain.RPGTerrain.getClass()) {
                        //console.log("found! RPGTerrain");
                        this.createterrain(obj);
                    }

                    if (obj.nameClass == _RPGMesh.RPGMesh.getClass()) {
                        //console.log("found! RPGMesh");
                    }

                    if (obj.nameClass == _RPGCube.RPGCube.getClass()) {
                        //console.log("found! RPGCube");
                        //console.log(obj);
                        this.parse_object(obj);
                    }

                    if (obj.nameClass == _RPGSphere.RPGSphere.getClass()) {
                        //console.log("found! RPGSphere");
                        this.parse_object(obj);
                    }

                    if (obj.nameClass == _RPGCylinder.RPGCylinder.getClass()) {
                        //console.log("found! RPGCylinder");
                        this.parse_object(obj);
                    }

                    if (obj.nameClass == _RPGNPCCharacter.RPGNPCCharacter.getClass()) {
                        //console.log("found! RPGCylinder");
                        this.create_character(obj);
                    }
                }
            } else {
                console.log("update object scene?");
            }
        }

        //BABYLONJSAPI.LoadSceneMap();

    }, {
        key: 'LoadSceneMap',
        value: function LoadSceneMap() {
            console.log("LOAD SCENE MAP");
            //this.gun.get('scene');
            console.log(this.gun);
            var self = this;
            this.gun.get('scene').valueobj(function (data) {
                console.log("SCENE?");
                for (var o in data) {
                    console.log(data[o]);
                    if (data[o] != null) {
                        console.log(data[o]);
                        self.prase_gobject(data[o]);
                    }
                }
            });
            //load scene...
            this.ui_updatesceneobject();
        }

        //BABYLONJSAPI.DeleteSceneMap();

    }, {
        key: 'DeleteSceneMap',
        value: function DeleteSceneMap() {
            this.gun.get('scene').each(function (data) {
                console.log(data);
                //if(data)
            });

            var gscene = this.gun.get('scene');
            //gscene.get('EK3GlvzlK1Pi0Sg2hhhdZC5H').put(null);
        }
    }, {
        key: 'ClearSceneMap',
        value: function ClearSceneMap() {
            console.log("clear scene...");

            if (this.scene != null) {
                var objscene = this.scene;
                for (var i = objscene.meshes.length; i > 0; i--) {
                    objscene.meshes[0].dispose();
                }
            }

            /*
            var delobjs = [];
            //console.log(this.scene.meshes.length);
            for(var i = 0; i < this.scene.meshes.length;i++){
                //console.log(this.scene.meshes[i]);
                if(this.scene.meshes[i].rpgobj !=null){
                    //console.log(this.scene.meshes[i]);
                    //this.scene.meshes[i].dispose();
                    //console.log(this.scene.meshes[i].dispose());
                    delobjs.push(this.scene.meshes[i]);
                }
            }
            for(var j = 0; j < delobjs.length;j++){
                delobjs[j].dispose();
            }
            delobjs = null;
            //console.log(this.scene.meshes.length);
            */
        }
    }]);

    return Babylonjs_game_loadsave;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../rpg/RPGCube":30,"../rpg/RPGCylinder":31,"../rpg/RPGMesh":33,"../rpg/RPGNPCCharacter":34,"../rpg/RPGSphere":36,"../rpg/RPGTerrain":39,"./Babylonjs_game_module":45}],45:[function(require,module,exports){
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
//simple module add class to the support build.
var Babylonjs_game_module = exports.Babylonjs_game_module = function Babylonjs_game_module(args) {
    _classCallCheck(this, Babylonjs_game_module);

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

},{}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Babylonjs_game_parse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require("./Babylonjs_game_module");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_parse = exports.Babylonjs_game_parse = function (_Babylonjs_game_modul) {
	_inherits(Babylonjs_game_parse, _Babylonjs_game_modul);

	function Babylonjs_game_parse(args) {
		_classCallCheck(this, Babylonjs_game_parse);

		return _possibleConstructorReturn(this, (Babylonjs_game_parse.__proto__ || Object.getPrototypeOf(Babylonjs_game_parse)).call(this, args));
	}

	_createClass(Babylonjs_game_parse, [{
		key: "prase_mapjson",
		value: function prase_mapjson(stringdata) {
			console.log("init string map");
			var self = this;
			var mappdata = self.mappdata;
			var scriptcount = self.scriptcount;

			var modelfiles = [];
			var modelcount = 0;

			mappdata = JSON.parse(stringdata);
			if (mappdata == null) {
				console.log("error!");
				return;
			}
			//console.log(mappdata);
			scriptcount = 0;

			loadentities();

			//load 3d models and texture a
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
						/*
      threejsapi.LoadModelFile(modelfiles[mi],(object)=>{
      console.log('//========================================');
      //console.log(object.name);//console.log(object.uuid);
      console.log(object);
      modelcount++;
      console.log("models: "+modelcount + ":" +(modelfiles.length));
      if(modelcount == modelfiles.length){
      //console.log('Finish loading file models!');
      //console.log('init scripts!');
      loadscriptfiles();
      }
      });
      */
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
						//threejsapi.parseObject(mappdata.entities[i]);
						self.parse_object(mappdata.entities[i]);
					}
					console.log('Finish loading!');

					//self.hideloadingscreen();

					//self.loadScript("/assets/test1.js", function(){
					//initialization code
					//console.log("test? js");
					//});
					//console.log(threejsapi);
				}
				self.setup_game();
			}
		}
	}]);

	return Babylonjs_game_parse;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"./Babylonjs_game_module":45}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_terrain = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require('../system/Babylonjs_game_module');

var _RPGTerrain = require('../rpg/RPGTerrain');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_terrain = exports.Babylonjs_game_terrain = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_terrain, _Babylonjs_game_modul);

    function Babylonjs_game_terrain(args) {
        _classCallCheck(this, Babylonjs_game_terrain);

        return _possibleConstructorReturn(this, (Babylonjs_game_terrain.__proto__ || Object.getPrototypeOf(Babylonjs_game_terrain)).call(this, args));
    }

    _createClass(Babylonjs_game_terrain, [{
        key: 'createterrain',
        value: function createterrain(args) {
            args = args || {};
            //http://www.babylonjs-playground.com/#PF032
            //http://www.html5gamedevs.com/topic/23973-editing-height-map-terrain/

            //args['y'] = 1;

            var _x = args['x'] || 0;
            var _y = args['y'] || 0;
            var _z = args['z'] || 0;

            var showBoundingBox = args['showBoundingBox'] || false;
            var wireframe = args['wireframe'] || false;
            //var ground = BABYLON.Mesh.CreateGround("ground", 128, 128, 2, this.scene, false);//not error
            //var ground = BABYLON.Mesh.CreateGround("ground", 128, 128, 32, this.scene, false);//error
            var ground = BABYLON.Mesh.CreateGround("ground", 128, 128, 32, this.scene, false);
            var uuid = args['uuid'] || this.uuid();
            ground.rpgobj = new _RPGTerrain.RPGTerrain(args);
            var material = new BABYLON.StandardMaterial("mat", this.scene);
            material.diffuseColor = new BABYLON.Color3(1, 1, 1);
            ground.material = material;
            ground.material.wireframe = wireframe;

            ground.position.x = _x;
            ground.position.y = _y;
            ground.position.z = _z;
            //console.log(ground);
            var vp = ground.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            for (var i = 0; i < vp.length - 3; i += 3) {
                //vp[i + 1] = Math.floor(Math.random() * 8);
            }
            ground.setVerticesData(BABYLON.VertexBuffer.PositionKind, vp, false); //this is correct function params height set
            ground.showBoundingBox = showBoundingBox;
            //ground.setPhysicsState({ impostor: BABYLON.PhysicsEngine.MeshImpostor, restitution: 0.9, mass:0, friction:1}); //bugged

            ground.setPhysicsState({ impostor: BABYLON.PhysicsEngine.HeightmapImpostor, restitution: 0.9, mass: 0, friction: 1 }); //works
            //console.log(ground);
            return ground;
        }
    }, {
        key: 'simpleterrain_load_hieghtmap',
        value: function simpleterrain_load_hieghtmap() {
            var ground = BABYLON.Mesh.CreateGroundFromHeightMap('your-mesh-name', '/path/to/heightmap.png', 100, // width of the ground mesh (x axis)
            100, // depth of the ground mesh (z axis)
            40, // number of subdivisions
            0, // min height
            50, // max height
            this.scene, false, // updateable?
            null // callback when mesh is ready
            );
        }
    }, {
        key: 'simpleterrain01',
        value: function simpleterrain01() {
            //http://www.babylonjs-playground.com/#PF032
            //http://www.html5gamedevs.com/topic/23973-editing-height-map-terrain/
            var ground = BABYLON.Mesh.CreateGround("ground", 128, 128, 2, this.scene, true);
            var material = new BABYLON.StandardMaterial("mat", this.scene);
            material.diffuseColor = new BABYLON.Color3(1, 1, 1);
            ground.material = material;
            ground.material.wireframe = true;

            console.log(ground);

            var vp = ground.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            //var nm = ground.getVerticesData(BABYLON.VertexBuffer.NormalKind);
            //console.log(vp.length);
            //console.log(vp);
            //console.log(nm);
            //ground.geometry.
            //for (var i =0; i  < vp.length-3; i += 3) {
            //vp[i - 1] = Math.floor(Math.random() * 16);
            //console.log(vp[i - 2]);
            //}
            //console.log(JSON);

            this.engine.runRenderLoop(function () {
                var vp = ground.getVerticesData(BABYLON.VertexBuffer.PositionKind);
                for (var i = 0; i < vp.length - 3; i += 3) {
                    vp[i + 1] = Math.floor(Math.random() * 32);
                }

                ground.setVerticesData(BABYLON.VertexBuffer.PositionKind, vp, false); //this is correct function params height set
                /*
                var vertexData = BABYLON.VertexData.CreateGroundFromHeightMap({
                width:128, height: 128,
                subdivisions: 2,
                minHeight: 0, maxHeight: 10,
                buffer: vp, bufferWidth: 6, bufferHeight: 6
                });
                vertexData.applyToMesh(ground, true);
                */
            });

            //for (var i =0; i  < vp.length; i += 3) {
            //vp[i + 3] = Math.floor(Math.random() * 16);
            //buffer.push(0, 0, 0);
            //}


            /*
            var vertexData = BABYLON.VertexData.CreateGroundFromHeightMap({
            width:128, height: 128,
            subdivisions: 2,
            minHeight: 0, maxHeight: 10,
            buffer: vp, bufferWidth: 6, bufferHeight: 6
            });
            vertexData.applyToMesh(ground, true);
            */

            /*
            var buffer = [];
            for (var i = 26; i > 0; i--) {
            buffer.push(i, i, i);
                //buffer.push(0, 0, 0);
            }
            var vertexData = BABYLON.VertexData.CreateGroundFromHeightMap({
            width:32, height: 32,
            subdivisions: 2,
            minHeight: 0, maxHeight: 10,
            buffer: buffer, bufferWidth: 6, bufferHeight: 6
            });
            vertexData.applyToMesh(ground, true);
            */

            /*
            this.engine.runRenderLoop(function() {
                //console.log(Math.random(0,256));
                //console.log("main render!");
                Math.floor(Math.random() * 255)
                var buffer = [];
                //buffer.push(128, 0, 0);
                //buffer.push(0, 0, 0);
                //buffer.push(0, 0, 0);
            	for (var i = 64; i > 0; i--) {
                    //buffer.push(0, 0, 0);
            		//buffer.push(Math.floor(Math.random() * 16),Math.floor(Math.random() * 16) , Math.floor(Math.random() * 16));
                    buffer.push(Math.floor(Math.random() * 16),0,0);
                    //buffer.push(0, 10, 0);
                      //if(64%2){
                        //buffer.push(0, 10, 0);
                    //}else{
                        //buffer.push(0, 0, 0);
                    //}
              	}
              	var vertexData = BABYLON.VertexData.CreateGroundFromHeightMap({
                    width:32, height: 32,
            		subdivisions: 8,
            		minHeight: 0, maxHeight: 200,
            		buffer: buffer, bufferWidth: 6, bufferHeight: 6
            	});
            	vertexData.applyToMesh(ground, true);
            });
            */
        }
    }, {
        key: 'simpleterrain02',
        value: function simpleterrain02() {
            //http://www.babylonjs-playground.com/#1ED5OQ#5
            //http://www.html5gamedevs.com/topic/23973-editing-height-map-terrain/
            //http://www.html5gamedevs.com/topic/23973-editing-height-map-terrain/
            var sections = 6;

            var ground = BABYLON.Mesh.CreateGround("ground", 4, 4, sections, this.scene, true);
            ground.material = new BABYLON.StandardMaterial("gmat", this.scene);
            ground.material.wireframe = true;
            ground.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
            ground.material.backFaceCulling = false;

            var buffer = [];

            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);

            buffer.push(255, 255, 255);
            buffer.push(255, 255, 255);
            buffer.push(255, 255, 255);
            buffer.push(255, 255, 255);
            buffer.push(255, 255, 255);
            buffer.push(255, 255, 255);
            buffer.push(255, 255, 255);
            buffer.push(255, 255, 255);

            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);

            buffer.push(127, 127, 127);
            buffer.push(127, 127, 127);
            buffer.push(127, 127, 127);
            buffer.push(127, 127, 127);
            buffer.push(127, 127, 127);
            buffer.push(127, 127, 127);
            buffer.push(127, 127, 127);
            buffer.push(127, 127, 127);

            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);

            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            buffer.push(0, 0, 0);
            console.log(buffer.length);
            console.log((sections + 1) * (sections + 1) * 3);
            var minHeight = 0;
            var maxHeight = 2;
            // ground.applyDisplacementMapFromBuffer(buffer, sections, sections, minHeight, maxHeight);
            var vertexData = BABYLON.VertexData.CreateGroundFromHeightMap({
                width: 4, height: 4,
                subdivisions: sections,
                minHeight: 0, maxHeight: 2,
                buffer: buffer, bufferWidth: 6, bufferHeight: 6
            });
            vertexData.applyToMesh(ground, true);
            // scene.debugLayer.show();
        }
    }, {
        key: 'simpleterrain03',
        value: function simpleterrain03() {
            //http://www.babylonjs-playground.com/#PF032
            //http://www.html5gamedevs.com/topic/23973-editing-height-map-terrain/
            var ground = BABYLON.Mesh.CreateGround("ground", 128, 128, 2, this.scene, false);
            var material = new BABYLON.StandardMaterial("mat", this.scene);
            material.diffuseColor = new BABYLON.Color3(1, 1, 1);
            ground.material = material;
            ground.material.wireframe = true;
            //console.log(ground);
            var vp = ground.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            for (var i = 0; i < vp.length - 3; i += 3) {
                vp[i + 1] = Math.floor(Math.random() * 8);
            }
            ground.setVerticesData(BABYLON.VertexBuffer.PositionKind, vp, false); //this is correct function params height set
            ground.showBoundingBox = true;
            ground.setPhysicsState({ impostor: BABYLON.PhysicsEngine.MeshImpostor, restitution: 0.9, mass: 0, friction: 1 });
        }
    }, {
        key: 'simpleterrain04',
        value: function simpleterrain04() {
            //http://www.babylonjs-playground.com/#PF032
            //http://www.html5gamedevs.com/topic/23973-editing-height-map-terrain/
            var ground = BABYLON.Mesh.CreateGround("ground", 128, 128, 2, this.scene, false);
            var material = new BABYLON.StandardMaterial("mat", this.scene);
            material.diffuseColor = new BABYLON.Color3(1, 1, 1);
            ground.material = material;
            ground.material.wireframe = true;
            //console.log(ground);
            var vp = ground.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            for (var i = 0; i < vp.length - 3; i += 3) {
                //vp[i + 1] = Math.floor(Math.random() * 8);
            }
            ground.setVerticesData(BABYLON.VertexBuffer.PositionKind, vp, false); //this is correct function params height set
            ground.showBoundingBox = true;
            ground.setPhysicsState({ impostor: BABYLON.PhysicsEngine.MeshImpostor, restitution: 0.9, mass: 0, friction: 1 });
        }
    }, {
        key: 'simpleterrain05',
        value: function simpleterrain05() {
            // Ground
            var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "assets/heightMap.png", 100, 100, 100, 0, 10, this.scene, false);
            //var groundMaterial = new BABYLON.StandardMaterial("ground", this.scene);
            //groundMaterial.diffuseTexture = new BABYLON.Texture("assets/ground.jpg", this.scene);
            ground.showBoundingBox = true;
            //ground.setPhysicsState({ impostor: BABYLON.PhysicsEngine.HeightmapImpostor, restitution: 0, mass:0, friction:1});
            //ground.setPhysicsState({ impostor: BABYLON.PhysicsEngine.BoxImpostor, restitution: 0.9, mass:0, friction:1});
        }
    }]);

    return Babylonjs_game_terrain;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../rpg/RPGTerrain":39,"../system/Babylonjs_game_module":45}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Babylonjs_game_ui = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Babylonjs_game_module = require('../system/Babylonjs_game_module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Project Name: bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Link:https://github.com/Lightnet/bes-threejs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Created By: Lightnet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   License: cc (creative commons)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Information: Please read the readme.md file for more information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Babylonjs_game_ui = exports.Babylonjs_game_ui = function (_Babylonjs_game_modul) {
    _inherits(Babylonjs_game_ui, _Babylonjs_game_modul);

    function Babylonjs_game_ui(args) {
        _classCallCheck(this, Babylonjs_game_ui);

        return _possibleConstructorReturn(this, (Babylonjs_game_ui.__proto__ || Object.getPrototypeOf(Babylonjs_game_ui)).call(this, args));
    }

    //===========================================
    // @params Default Canvas2D
    //===========================================

    _createClass(Babylonjs_game_ui, [{
        key: 'createspacecavnas2D',
        value: function createspacecavnas2D() {
            //screenCanvas
            this.screencanvas = new BABYLON.ScreenSpaceCanvas2D(this.scene, {
                id: "ScreenCanvas",
                enableInteraction: true //,
            });
            //console.log(this.screencanvas);
        }

        //===========================================
        // @params Progress bar
        //===========================================

    }, {
        key: 'createprogressbar',
        value: function createprogressbar(_parent, args) {

            var self = this;
            if (args == null) {
                args = {};
            };

            var _id = typeof args['id'] === 'string' ? args['id'] : "progressbar";

            var _fcolor = typeof args['fcolor'] === 'string' ? args['fcolor'] : '#64DD17FF';
            //console.log(_fcolor);
            var _x = typeof args['x'] === 'number' ? args['x'] : 0; //rect position
            var _y = typeof args['y'] === 'number' ? args['y'] : 0;
            var _width = typeof args['width'] === 'number' ? args['width'] : 128; //rect size
            var _height = typeof args['height'] === 'number' ? args['height'] : 28;

            //background bar
            var R2SRectBackground = new BABYLON.Rectangle2D({
                parent: _parent, id: "R2DB" + _id, x: _x, y: _y, width: _width, height: _height, fill: "#263238FF"
            });
            //background bar
            var R2SRectForeground = new BABYLON.Rectangle2D({
                parent: R2SRectBackground, id: "R2DF" + _id, x: 2, y: 2, width: _width, height: _height - 4, fill: _fcolor
            });

            return [R2SRectBackground, R2SRectForeground];
        }

        //===========================================
        // @params BOX DRAG 01
        //===========================================

    }, {
        key: 'create_R2D_Drag01',
        value: function create_R2D_Drag01(_parent, args) {
            //RIGHT TOP DRAG
            var self = this;
            if (args == null) {
                args = {};
            };

            var _x = typeof args['x'] === 'number' ? args['x'] : 0; //rect position
            var _y = typeof args['y'] === 'number' ? args['y'] : 0;
            var _width = typeof args['width'] === 'number' ? args['width'] : 128; //rect size
            var _height = typeof args['height'] === 'number' ? args['height'] : 32;

            var _text = typeof args['text'] === 'string' ? args['text'] : 'Drag';

            var panel = new BABYLON.Rectangle2D({
                parent: _parent, id: "R2Dpanel", x: _x, y: _y, width: _width, height: _height, fill: "#263238FF"
            });

            var paneldrag = new BABYLON.Rectangle2D({
                parent: panel, id: "R2Dpaneldrag", x: 0, y: 0, width: _width - 4, height: _height - 4, fill: "#455A64FF",
                children: [new BABYLON.Text2D(_text, { x: 5, y: 0, fontName: "10pt Arial", marginAlignment: "h: center, v: center" })]
            });
            panel.bdrag = false;
            panel.dragpostion = new BABYLON.Vector2(0, 0);
            paneldrag.pointerEventObservable.add(function (d, s) {
                //button2Rect.levelVisible = !button2Rect.levelVisible;
                //console.log("PointerDown!");
                //console.log(d);
                //console.log(buttonRect);
                panel.bdrag = true;
                panel.dragpostion = d.primitivePointerPos;
            }, BABYLON.PrimitivePointerInfo.PointerDown);

            paneldrag.pointerEventObservable.add(function (d, s) {
                //console.log("PointerUp!");
                panel.bdrag = false;
            }, BABYLON.PrimitivePointerInfo.PointerUp);
            //console.log(this.engine);
            //this.screencanvas.size.height
            //this.screencanvas.viewportSize.height
            paneldrag.pointerEventObservable.add(function (d, s) {
                //console.log(d.canvasPointerPos);
                //console.log(d.primitivePointerPos);
                if (panel.bdrag) {
                    panel.x = d.canvasPointerPos.x - panel.dragpostion.x;
                    panel.y = -(self.screencanvas.size.height - (d.canvasPointerPos.y + panel.dragpostion.y) + 32);
                }
            }, BABYLON.PrimitivePointerInfo.PointerMove);
            paneldrag.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, panel, "bdrag", false));
            return panel;
        }

        //===========================================
        // @params BOX DRAG 02
        //===========================================

    }, {
        key: 'create_R2D_Drag02',
        value: function create_R2D_Drag02(_parent, args) {
            //RIGHT TOP DRAG
            var self = this;
            if (args == null) {
                args = {};
            };

            var _x = typeof args['x'] === 'number' ? args['x'] : 0; //rect position
            var _y = typeof args['y'] === 'number' ? args['y'] : 0;
            var _width = typeof args['width'] === 'number' ? args['width'] : 128; //rect size
            var _height = typeof args['height'] === 'number' ? args['height'] : 32;

            //console.log(typeof args['click']);
            var _call = typeof args['click'] === 'function' ? args['click'] : null;
            var _bdrag = typeof args['bdrag'] === 'boolean' ? args['bdrag'] : true;
            var _text = typeof args['text'] === 'string' ? args['text'] : 'Drag';

            var panel = new BABYLON.Rectangle2D({
                parent: _parent, id: "R2Dpanel", x: _x, y: _y, width: _width, height: _height, fill: "#263238FF"
            });

            var paneldrag = new BABYLON.Rectangle2D({
                parent: panel, id: "R2Dpaneldrag", x: 0, y: 0, width: _width - 4, height: _height - 4, fill: "#455A64FF",
                children: [new BABYLON.Text2D(_text, { x: 5, y: 0, fontName: "10pt Arial", marginAlignment: "h: center, v: center" })]
            });
            panel.bdrag = false;
            panel.dragpostion = new BABYLON.Vector2(0, 0);
            //console.log(_parent);
            // DOWN
            paneldrag.pointerEventObservable.add(function (d, s) {
                //button2Rect.levelVisible = !button2Rect.levelVisible;
                //console.log("PointerDown!");
                //console.log(d);
                //console.log(buttonRect);
                if (_bdrag) {
                    panel.bdrag = true;
                    panel.dragpostion = d.primitivePointerPos;
                }
            }, BABYLON.PrimitivePointerInfo.PointerDown);
            // UP
            paneldrag.pointerEventObservable.add(function (d, s) {
                //console.log("PointerUp!");
                if (_bdrag) {
                    panel.bdrag = false;
                }
                if (_call != null) {
                    _call(d);
                }
            }, BABYLON.PrimitivePointerInfo.PointerUp);
            //console.log(this.engine);
            //this.screencanvas.size.height
            //this.screencanvas.viewportSize.height
            // MOVE
            paneldrag.pointerEventObservable.add(function (d, s) {
                //console.log(d.canvasPointerPos);
                //console.log(d.primitivePointerPos);
                if (_bdrag) {
                    if (panel.bdrag) {
                        panel.x = d.canvasPointerPos.x - panel.dragpostion.x - _parent.x;
                        panel.y = -(self.screencanvas.size.height - (d.canvasPointerPos.y + panel.dragpostion.y - _parent.y) + 32);
                    }
                }
            }, BABYLON.PrimitivePointerInfo.PointerMove);
            paneldrag.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, panel, "bdrag", false));
            return panel;
        }

        //===========================================
        // @params TEXT BOX
        //===========================================

    }, {
        key: 'create_R2D_Text01',
        value: function create_R2D_Text01(_parent, args) {
            if (args == null) {
                args = {};
            };
            var panel;
            //console.log(typeof args['color']);
            var _color = typeof args['color'] === 'string' ? args['color'] : '#263238FF';
            var _width = typeof args['width'] === 'number' ? args['width'] : 128;
            var _height = typeof args['height'] === 'number' ? args['height'] : 32;
            var _x = typeof args['x'] === 'number' ? args['x'] : 0; //rect position
            var _y = typeof args['y'] === 'number' ? args['y'] : 0;
            var _tx = typeof args['tx'] === 'number' ? args['tx'] : 2; //text position
            var _ty = typeof args['ty'] === 'number' ? args['ty'] : 0;
            var _text = typeof args['text'] === 'string' ? args['text'] : 'none';
            //console.log(typeof args['balign']);
            var _balign = typeof args['balign'] === 'boolean' ? args['align'] : false;

            var _config = {};
            _config['fontName'] = "10pt Arial";
            if (_balign) {
                _config['marginAlignment'] = "h: center, v: center";
            } else {
                _config['x'] = _tx;
                _config['y'] = _ty;
            }
            var text2d = new BABYLON.Text2D(_text, _config);

            panel = new BABYLON.Rectangle2D({
                parent: _parent, id: "R2D" + _text, x: _x, y: _y, width: _width, height: _height, fill: _color,
                children: [text2d]
            });
            return panel;
        }

        //===========================================
        // @params INPUT TEXT
        //===========================================

    }, {
        key: 'create_R2D_TextInput01',
        value: function create_R2D_TextInput01(_parent, args) {
            var self = this;
            if (args == null) {
                args = {};
            };
            var panel;
            //console.log(typeof args['color']);
            var _color = typeof args['color'] === 'string' ? args['color'] : '#263238FF';
            var _width = typeof args['width'] === 'number' ? args['width'] : 128;
            var _height = typeof args['height'] === 'number' ? args['height'] : 32;
            var _x = typeof args['x'] === 'number' ? args['x'] : 0; //rect position
            var _y = typeof args['y'] === 'number' ? args['y'] : 0;
            var _tx = typeof args['tx'] === 'number' ? args['tx'] : 2; //text position
            var _ty = typeof args['ty'] === 'number' ? args['ty'] : 0;
            var _text = typeof args['text'] === 'string' ? args['text'] : 'none';
            //console.log(typeof args['balign']);
            var _balign = typeof args['balign'] === 'boolean' ? args['align'] : false;
            var _returnarray = typeof args['returnarray'] === 'boolean' ? args['returnarray'] : false;

            var _config = {};
            _config['fontName'] = "10pt Arial";
            if (_balign) {
                _config['marginAlignment'] = "h: center, v: center";
            } else {
                _config['x'] = _tx;
                _config['y'] = _ty;
            }
            var text2d = new BABYLON.Text2D(_text, _config);

            panel = new BABYLON.Rectangle2D({
                parent: _parent, id: "R2D" + _text, x: _x, y: _y, width: _width, height: _height, fill: _color,
                children: [text2d]
            });
            //console.log(text2d);
            function TextInputKey(e) {
                console.log(e.keyCode);
                if (e.keyCode == 8) {
                    //console.log('BACKSPACE was pressed');
                    var llen = text2d.text.length;
                    //text2d.text = text2d.text.substring(1, llen);//first letter
                    text2d.text = text2d.text.substring(0, llen - 1); //last letter
                    // Call event.preventDefault() to stop the character before the cursor
                    // from being deleted. Remove this line if you don't want to do that.
                    e.preventDefault();
                }
                if (e.keyCode == 46) {
                    //console.log('DELETE was pressed');
                    // Call event.preventDefault() to stop the character after the cursor
                    // from being deleted. Remove this line if you don't want to do that.
                    e.preventDefault();
                }

                if (e.keyCode == 13) {
                    //console.log('DELETE was pressed');
                    // Call event.preventDefault() to stop the character after the cursor
                    // from being deleted. Remove this line if you don't want to do that.
                    //console.log('remove listener');
                    document.removeEventListener("keydown", TextInputKey);
                    e.preventDefault();
                }

                var txt = String.fromCharCode(e.which);
                //console.log(txt + ' : ' + e.which);

                if (!txt.match(/[A-Za-z0-9+#.]/)) {
                    return false;
                } else {
                    //console.log("TYPEING?");
                    text2d.text = text2d.text + txt;
                }
                //console.log("test?");
            }

            panel.bedit_text = false;

            panel.pointerEventObservable.add(function (d, s) {
                //console.log("PointerDown!");
                //window.addEventListener("keypress",TextInputKey );
            }, BABYLON.PrimitivePointerInfo.PointerDown);

            panel.pointerEventObservable.add(function (d, s) {
                //console.log("PointerUp!");
                document.addEventListener("keydown", TextInputKey);
            }, BABYLON.PrimitivePointerInfo.PointerUp);

            //console.log(panel);
            //panel.actionManager = new BABYLON.ActionManager(this.scene);

            panel.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function (evt) {
                console.log("out!");
                document.removeEventListener("keydown", TextInputKey);
            }));

            panel.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {
                console.log("typing...");
                //document.removeEventListener("keydown",TextInputKey );
            }));

            //console.log(this.scene);

            //this.scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {
            //console.log(" scene typing...");
            //if (evt.sourceEvent.key == "r") {
            //}
            //}));


            if (_returnarray) {
                return [panel, text2d];
            } else {
                return panel;
            }
        }

        //===========================================
        // @params BUTTON
        //===========================================

    }, {
        key: 'AddButton',
        value: function AddButton(_scenecanvas, args, _callback) {

            if (args == null) {
                args = {};
            };

            var _color = typeof args['color'] === 'string' ? args['color'] : '#263238FF';
            var _width = typeof args['width'] === 'number' ? args['width'] : 100;
            var _height = typeof args['height'] === 'number' ? args['height'] : 20;
            var _x = typeof args['x'] === 'number' ? args['x'] : 0; //rect position
            var _y = typeof args['y'] === 'number' ? args['y'] : 0;

            var _text = typeof args['text'] === 'string' ? args['text'] : 'none';
            var _id = typeof args['id'] === 'string' ? args['id'] : "R2D" + _text;

            var buttonRect = new BABYLON.Rectangle2D({ parent: _scenecanvas, id: _id, x: _x, y: _y, width: _width, height: _height, fill: _color,
                children: [new BABYLON.Text2D(_text, { fontName: "12pt Arial", marginAlignment: "h: center, v: center" })] });
            buttonRect.pointerEventObservable.add(function (d, s) {
                //console.log("click2");
                _callback();
            }, BABYLON.PrimitivePointerInfo.PointerUp);
            return buttonRect;
        }

        //===========================================
        // @params 3D GUI Health/Progress Bar
        //===========================================

    }, {
        key: 'create_spaceworld_status',
        value: function create_spaceworld_status(_scene, _model, _status) {
            var self = this;

            var healthBarMaterial = new BABYLON.StandardMaterial("hb1mat", _scene);
            healthBarMaterial.diffuseColor = BABYLON.Color3.Green();
            healthBarMaterial.backFaceCulling = false;
            healthBarMaterial.emissiveColor = new BABYLON.Color3(0, 0.5, 0); //brighten light without light object

            var healthBarContainerMaterial = new BABYLON.StandardMaterial("hb2mat", _scene);
            healthBarContainerMaterial.diffuseColor = BABYLON.Color3.Blue();
            healthBarContainerMaterial.backFaceCulling = false;
            healthBarContainerMaterial.emissiveColor = new BABYLON.Color3(0, 0, 0.5); //brighten light without light object

            var dynamicTexture = new BABYLON.DynamicTexture("dt1", 512, _scene, true);
            dynamicTexture.hasAlpha = true;

            var healthBarTextMaterial = new BABYLON.StandardMaterial("hb3mat", _scene);
            healthBarTextMaterial.diffuseTexture = dynamicTexture;
            healthBarTextMaterial.backFaceCulling = false;
            healthBarTextMaterial.diffuseColor = BABYLON.Color3.Green();
            healthBarTextMaterial.emissiveColor = new BABYLON.Color3(0, 0.5, 0); //brighten light without light object

            var healthBarContainer = BABYLON.MeshBuilder.CreatePlane("hb2", { width: 2, height: .5, subdivisions: 4 }, _scene);
            var healthBar = BABYLON.MeshBuilder.CreatePlane("hb1", { width: 2, height: .5, subdivisions: 4 }, _scene);

            var healthBarText = BABYLON.MeshBuilder.CreatePlane("hb3", { width: 2, height: 2, subdivisions: 4 }, _scene);
            healthBarText.material = healthBarMaterial;

            healthBarContainer.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;

            healthBar.renderingGroupId = 1;
            healthBarText.renderingGroupId = 1;
            healthBarContainer.renderingGroupId = 1;

            healthBar.position = new BABYLON.Vector3(0, 0, -.01); // Move in front of container slightly.  Without this there is flickering.
            healthBarContainer.position = new BABYLON.Vector3(0, 3, 0); // Position above player.
            healthBarText.position = new BABYLON.Vector3(1.5, -.4, 0);

            healthBar.parent = healthBarContainer;
            healthBarContainer.parent = _model;
            healthBarText.parent = healthBarContainer;

            healthBar.material = healthBarMaterial;
            healthBarContainer.material = healthBarContainerMaterial;
            healthBarText.material = healthBarTextMaterial;

            //console.log(healthBar.material);
            //console.log(healthBarContainer);
            //console.log(healthBarText);

            var alive = true;
            var alpha = 3;
            var healthPercentage = 100;

            var status = _status;

            self.engine.runRenderLoop(function () {

                if (alive) {
                    healthPercentage = status.health / status.maxhealth * 100;
                    //console.log(healthPercentage);
                    healthBar.scaling.x = healthPercentage / 100;
                    healthBar.position.x = (1 - healthPercentage / 100) * -1;

                    if (healthBar.scaling.x < 0) {
                        //alive = false;
                        //healthPercentage = 100;
                        alpha = 3;
                        healthBarTextMaterial.diffuseColor = BABYLON.Color3.Green();
                        healthBarMaterial.diffuseColor = BABYLON.Color3.Green();
                    } else if (healthBar.scaling.x < .5) {
                        healthBarMaterial.diffuseColor = BABYLON.Color3.Yellow();
                        healthBarTextMaterial.diffuseColor = BABYLON.Color3.Yellow();
                    } else if (healthBar.scaling.x < .3) {
                        healthBarMaterial.diffuseColor = BABYLON.Color3.Red();
                        healthBarTextMaterial.diffuseColor = BABYLON.Color3.Red();
                    }

                    //
                    // Display Health Percentage.
                    // - Only update display if whole number.
                    //
                    if (Math.round(healthPercentage) == healthPercentage) {
                        var textureContext = dynamicTexture.getContext();
                        var size = dynamicTexture.getSize();
                        var text = healthPercentage + "%";

                        textureContext.clearRect(0, 0, size.width, size.height);

                        textureContext.font = "bold 120px Calibri";
                        var textSize = textureContext.measureText(text);
                        textureContext.fillStyle = "white";
                        textureContext.fillText(text, (size.width - textSize.width) / 2, (size.height - 120) / 2);

                        dynamicTexture.update();
                    }
                    //healthPercentage -= .5;
                    alpha += 0.01;
                }
            });
        }
    }]);

    return Babylonjs_game_ui;
}(_Babylonjs_game_module.Babylonjs_game_module);

},{"../system/Babylonjs_game_module":45}],49:[function(require,module,exports){
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
    template: '\n        Assets\n        <div style="width:100%;height:100%;overflow-y:scroll;">\n\n        </div>\n        <!--<button (click)="refresh()">Refresh</button>-->\n        <!--\n        <div *ngIf="gameservice.scene">\n            <a *ngFor="let obj of gameservice.scene.children">\n                <label>{{obj.name}}</label>\n            </a>\n        </div>\n        -->\n    '
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

},{"../services/game.service":68,"@angular/core":"@angular/core"}],50:[function(require,module,exports){
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

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CodeEditor = exports.CodeEditor = (_dec = (0, _core.Component)({
    selector: 'codeeditor-component',
    template: '\n    <div ace-editor\n       [text]="text"\n       [options]="options"\n       [readOnly]="false"\n       [autoUpdateContent]="true"\n       (textChanged)="onChange($event)"\n       style="min-height: 200px; height:100%; width:100%; overflow: auto;margin: 0;padding : 0;"></div>\n    '
}), _dec(_class = function () {
    function CodeEditor(gameservice) {
        _classCallCheck(this, CodeEditor);

        this.options = { printMargin: false };
        this.gameservice = null;
        this.text = '\nfunction Test(){\n    console.log("hello world text");\n}\n\n//Test();\n\n//console.log("test");\nconsole.log(this);\n    ';

        //console.log(gameservice);
        this.gameservice = gameservice;
        this.gameservice.textscript = this.text;
    }
    //options:any = {maxLines: 1000, printMargin: false};


    _createClass(CodeEditor, [{
        key: 'onChange',
        value: function onChange(code) {
            //console.log(this.text);
            //console.log("new code", code);
            this.gameservice.textscript = code;
        }
    }]);

    return CodeEditor;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], CodeEditor);

},{"../services/game.service":68,"@angular/core":"@angular/core","ng2-ace-editor":"ng2-ace-editor","zone.js/dist/zone":"zone.js/dist/zone"}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConsolePanel = undefined;

var _dec, _class; //http://stackoverflow.com/questions/36342437/show-console-log-in-an-html-element-in-javascript
//http://stackoverflow.com/questions/20256760/javascript-console-log-to-html


var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConsolePanel = exports.ConsolePanel = (_dec = (0, _core.Component)({
    selector: 'consolepanel',
    //styleUrls:  ['./components/editorpanel.component.css'],
    template: '\n        <div id="myLog" style="float:left;height:100%;width:100%;margin:0;padding:0;overflow-y:auto;">\n        </div>\n    '
}), _dec(_class = function ConsolePanel() {
    /*
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("myLog").appendChild(node);
      }
    }
    */

    _classCallCheck(this, ConsolePanel);
}) || _class);

},{"@angular/core":"@angular/core"}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditorMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

require('../../js/babylon.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorMenu = exports.EditorMenu = (_dec = (0, _core.Component)({
    selector: 'editormenu',
    styleUrls: ['./components/editormenu.component.css'],
    template: '\n    <ul>\n    <li class="dropdown" >\n    <a href="#" class="dropbtn">File</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#" (click)="scriptopenscene();">Open Scene</a>\n      <a href="#" (click)="scriptloadscene();">Load Scene</a>\n      <a href="#" (click)="scriptsavescene();">Save Scene</a>\n      <a href="#" (click)="scriptclearscene();">Clear Scene</a>\n      <a href="#" (click)="scriptdeletescene();">Delete Scene</a>\n    </div>\n    </li>\n    <li class="dropdown">\n    <a href="#" class="dropbtn">Edit</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#" (click)="scriptdeleteobject();">Delete Object</a>\n    </div>\n    </li>\n\n    <li class="dropdown">\n    <a href="#" class="dropbtn">Components</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#" (click)="addcube();" >Cube</a>\n      <a href="#" (click)="addspshere();">Sphere</a>\n      <a href="#" (click)="addsplane();">Plane</a>\n      <a href="#" (click)="addterrain();">Terrain</a>\n      <!--<a href="#" (click)="addmesh();">Mesh</a>-->\n      <a href="#" (click)="addmaterial();">Material</a>\n      <a href="#" (click)="addcharacter();">Character</a>\n    </div>\n    </li>\n    <!--\n    <li class="dropdown"><a href="#" class="dropbtn">Packages</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#">Scripts</a>\n      <a href="#">Mods</a>\n    </div>\n    </li>\n    <li class="dropdown"><a href="#" class="dropbtn">Help</a>\n    <div class="dropdown-content" style="z-index:5">\n      <a href="#">Docs</a>\n      <a href="#">About</a>\n    </div>\n    </li>\n    <li><a href="#" class="dropbtn" (click)="scriptbuild();">Build</a></li>\n    <li><a href="#" class="dropbtn" (click)="scriptdebug();">Debug</a></li>\n    <li><a href="#" class="dropbtn" (click)="scriptplay();">Play</a></li>\n    <li><a href="#" class="dropbtn" (click)="scriptstop();">Stop</a></li>\n    -->\n    </ul>\n    '
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
            if (this.gameservice.app != null) {
                this.gameservice.app.LoadSceneMap();
            }
        }
    }, {
        key: 'scriptsavescene',
        value: function scriptsavescene() {
            console.log("scriptsavescene");
            if (this.gameservice.app != null) {
                this.gameservice.app.SaveSceneMap();
            }
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

            if (this.gameservice.app != null) {
                this.gameservice.app.ClearSceneMap();
            }
            /*
            if(this.gameservice.scene !=null){
                var objscene = this.gameservice.scene;
                for(var i = objscene.meshes.length; i > 0 ;i--){
                    objscene.meshes[0].dispose();
                }
            }
            */
        }
    }, {
        key: 'scriptdeleteobject',
        value: function scriptdeleteobject() {
            //console.log('scriptdeleteobject');
            if (this.gameservice.selectobject != null) {
                this.gameservice.selectobject.dispose();
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
            $("#shapecube").dialog('open');
        }
    }, {
        key: 'addspshere',
        value: function addspshere() {
            console.log("addspshere");
            $("#shapesphere").dialog('open');
        }
    }, {
        key: 'addsplane',
        value: function addsplane() {
            console.log("addsplane");
            $("#shapeplane").dialog('open');
        }
    }, {
        key: 'addterrain',
        value: function addterrain() {
            console.log("addsplane");
            $("#shapeterrain").dialog('open');
        }
    }, {
        key: 'addcharacter',
        value: function addcharacter() {
            console.log("addsplane");
            $("#shapecharacter").dialog('open');
        }
    }, {
        key: 'addmesh',
        value: function addmesh() {
            console.log("addmesh");
            //$("#").dialog('open');
        }
    }, {
        key: 'addmaterial',
        value: function addmaterial() {
            console.log("addmaterial > ?");
            $("#objectmaterial").dialog('open');
        }
    }]);

    return EditorMenu;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], EditorMenu);

},{"../../js/babylon.min.js":1,"../services/game.service":68,"@angular/core":"@angular/core"}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditorPanel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorPanel = exports.EditorPanel = (_dec = (0, _core.Component)({
    selector: 'editorpanel',
    styleUrls: ['./components/editorpanel.component.css'],
    template: '\n        <div style="height:100%;width:100%;margin:0;padding:0;">\n            <div style="width:100%;height:32px;margin:0;padding:0;">\n                <ul>\n                    <li> <a class="dropbtn" href="#" (click)="setscriptpanel()">Script</a> </li>\n                    <li> <a class="dropbtn" href="#" (click)="setconsolepanel()">Console</a> </li>\n                </ul>\n            </div>\n            <div [hidden]="bconsole"style="width:100%;height:80%;background-color: #00ff00;">\n                <consolepanel></consolepanel>\n            </div>\n            <div [hidden]="bscript" style="width:100%;height:100%;">\n                <div style="width:20%;height:100%;float:left;margin:0;padding:0;">\n                    <scripteditormenu></scripteditormenu>\n                    <scripteditorexplore></scripteditorexplore>\n                </div>\n                <div style="width:80%;height:100%;float:left;">\n                    <codeeditor-component style="margin:0;padding:0;"></codeeditor-component>\n                </div>\n            </div>\n        </div>\n    '
}), _dec(_class = function () {
    function EditorPanel() {
        _classCallCheck(this, EditorPanel);

        this.bscript = false;
        this.bconsole = true;
    }

    _createClass(EditorPanel, [{
        key: 'setscriptpanel',
        value: function setscriptpanel() {
            this.bconsole = true;
            this.bscript = false;
        }
    }, {
        key: 'setconsolepanel',
        value: function setconsolepanel() {
            this.bscript = true;
            this.bconsole = false;
        }
    }]);

    return EditorPanel;
}()) || _class);

},{"@angular/core":"@angular/core"}],54:[function(require,module,exports){
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

require('../../js/babylon.min.js');

var _babylonjs_game = require('../babylonjs_game/babylonjs_game');

require('../../js/jquery.min.js');

require('../../js/jquery-ui.min.js');

require('../../js/jquery.layout.min.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameEditor = exports.GameEditor = (_dec = (0, _core.Component)({
    selector: 'gameeditor',
    template: '\n    <editormenu></editormenu>\n    <div id="container" style="height:100%;">\n        <div class="ui-layout-center" style="margin:0;padding:0;overflow:hidden;">\n            <canvas id="renderCanvas"></canvas>\n        </div>\n        <div class="ui-layout-north">\n\n        </div>\n        <div class="ui-layout-south" style="margin:0;padding:0;">\n            <editorpanel></editorpanel>\n        </div>\n        <div class="ui-layout-east" style="margin:0;padding:0;overflow:hidden;">\n            <scene-list></scene-list>\n            <objectprops></objectprops>\n        </div>\n        <div class="ui-layout-west" style="margin:0;padding:0;overflow:hidden;">\n            <assets-list></assets-list>\n        </div>\n    </div>\n    <shapecubemodal></shapecubemodal>\n    <shapespheremodal></shapespheremodal>\n    <shapesplanemodal></shapesplanemodal>\n    <shapeterrainmodal></shapeterrainmodal>\n    <objectmaterialmodal></objectmaterialmodal>\n    <shapecharactermodal></shapecharactermodal>\n    '
}), _dec(_class = function () {
    function GameEditor(gameservice) {
        _classCallCheck(this, GameEditor);

        this.scene = null;

        this.gameservice = gameservice;
    }

    _createClass(GameEditor, [{
        key: 'ngOnInit',
        value: function ngOnInit() {
            var self = this;
            console.log("init layout!");
            this.setup_layout();
            //window.addEventListener('load',()=>{
            //console.log("loaded?");
            self.init();
            //},false);
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
            if (this.scene != null) {
                var layout = $('#container').layout();
                var width = layout.state.center.innerWidth;
                var height = layout.state.center.innerHeight;
                //this.camera.aspect = width / height;
                //this.camera.updateProjectionMatrix();
                //this.renderer.setSize( width,height );
                //this.scene.width = width;
                //this.scene.height = height;
                //console.log("resize");
                layout = null;
                width = null;
                height = null;
            }
        }
    }, {
        key: 'init',
        value: function init() {
            var config = {};
            config = { mode: "editor" };
            var baylonjs_Game = new _babylonjs_game.Babylonjs_game(config);
            console.log(baylonjs_Game);
            baylonjs_Game.init();
            //baylonjs_Game.setup_GunDBScript();
            this.gameservice.app = baylonjs_Game;
            this.gameservice.scene = baylonjs_Game.scene;
        }
    }]);

    return GameEditor;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], GameEditor);

},{"../../js/babylon.min.js":1,"../../js/jquery-ui.min.js":1,"../../js/jquery.layout.min.js":1,"../../js/jquery.min.js":1,"../babylonjs_game/babylonjs_game":11,"../services/game.service":68,"@angular/core":"@angular/core","rxjs/add/operator/map":"rxjs/add/operator/map"}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

require('../../js/babylon.min.js');

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

},{"../../js/babylon.min.js":1,"../services/game.service":68,"@angular/core":"@angular/core"}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ObjectMaterialModal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectMaterialModal = exports.ObjectMaterialModal = (_dec = (0, _core.Component)({
    selector: 'objectmaterialmodal',
    template: '\n        <div id="objectmaterial">\n            Create: Material\n            <br>Camera Position: <input id="terrain_camera" type="checkbox">\n            <!--<br><select id="sceneshape" onclick="this.gameservice.app.ui_selectshape();">-->\n            <!--</select>-->\n\n            <!--\n            <br>Height: <input type="number" [(ngModel)]="shape_height" >\n            <br>Width: <input type="number" [(ngModel)]="shape_width" >\n            <br>Depth: <input type="number" [(ngModel)]="shape_depth" >\n            -->\n            <br>\n            <br>px: <input type="number" [(ngModel)]="shape_x" >\n            <br>py: <input type="number" [(ngModel)]="shape_y" >\n            <br>pz: <input type="number" [(ngModel)]="shape_z" >\n            <br>\n            <br><button (click)="createshape();">Create Shape</button>\n        </div>\n    '
}), _dec(_class = function () {
    function ObjectMaterialModal(gameservice) {
        _classCallCheck(this, ObjectMaterialModal);

        this.shape_height = 1;
        this.shape_width = 1;
        this.shape_depth = 1;
        this.shape_x = 0;
        this.shape_y = 0;
        this.shape_z = 0;

        this.gameservice = gameservice;
    }

    _createClass(ObjectMaterialModal, [{
        key: 'createshape',
        value: function createshape() {
            if (this.gameservice.app != null) {
                //console.log("pass");
                console.log(this);
                console.log(this.shape_height);

                this.gameservice.app.parse_object({ geometrytype: 'cube',
                    parameters: {
                        height: this.shape_height,
                        width: this.shape_width,
                        depth: this.shape_depth },
                    position: {
                        x: this.shape_x,
                        y: this.shape_y,
                        z: this.shape_z
                    }
                });
            } else {
                //console.log("fail");
            }
        }
    }, {
        key: 'ngOnInit',
        value: function ngOnInit() {
            var self = this;
            console.log("init modal!");
            $("#objectmaterial").dialog();
            $("#objectmaterial").dialog('close');
        }
    }]);

    return ObjectMaterialModal;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], ObjectMaterialModal);

},{"../services/game.service":68,"@angular/core":"@angular/core"}],57:[function(require,module,exports){
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
    template: '\n        <div style="height:50%;width:100%;overflow-y:scroll;">\n            Props:\n            <!--<button (click)="refresh()">Refresh</button>-->\n            <div *ngIf="gameservice.selectobject">\n                Object: {{gameservice.selectobject.id}}<button (click)="meshdelete()">Delete</button>\n                <br><label>px:<input type="number" ng-model=\'val | number: 2\' [ngModel]="gameservice.selectobject.position.x" value="{{gameservice.selectobject.position.x}}" (ngModelChange)="objposx($event)" step ="0.000001" /></label>\n                <br><label>py:<input type="number" [ngModel]="gameservice.selectobject.position.y" value="{{gameservice.selectobject.position.y}}" (ngModelChange)="objposy($event)" step ="0.000001" /></label>\n                <br><label>pz:<input type="number" [ngModel]="gameservice.selectobject.position.z" value="{{gameservice.selectobject.position.z}}" (ngModelChange)="objposz($event)" step ="0.000001" /></label>\n            </div>\n        </div>\n    '
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
                this.gameservice.selectobject.dispose();
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

},{"../services/game.service":68,"@angular/core":"@angular/core"}],58:[function(require,module,exports){
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
    styleUrls: ['./components/scene.component.css'],
    template: '\n        <div style="height:50%;width:100%;overflow-y:scroll;">\n            Scene\n            <!--<button (click)="refresh()">Refresh</button>-->\n            <div *ngIf="gameservice.scene">\n                <ul>\n                <li *ngFor="let obj of gameservice.scene.meshes">\n                    <label style="display: block;" (click)="selectobject(obj)">{{obj.name}}</label >\n                </li>\n                </ul>\n            </div>\n        </div>\n    '
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
            console.log(this.gameservice.scene.meshes);
        }
    }]);

    return SceneList;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], SceneList);

},{"../services/game.service":68,"@angular/core":"@angular/core"}],59:[function(require,module,exports){
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

},{"@angular/core":"@angular/core"}],60:[function(require,module,exports){
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

},{"@angular/core":"@angular/core"}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScriptEditorMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScriptEditorMenu = exports.ScriptEditorMenu = (_dec = (0, _core.Component)({
    selector: 'scripteditormenu',
    template: '\n        Action\n        <button (click)="ScriptReload();">Reload</button>\n        <button (click)="ScriptSave();">Save</button>\n        <button (click)="ScriptRun();">Run</button>\n        <button (click)="ScriptCreate();">Create</button>\n        <button (click)="ScriptDelete();">Delete</button>\n    '
}), _dec(_class = function () {
    function ScriptEditorMenu(gameservice) {
        _classCallCheck(this, ScriptEditorMenu);

        this.gameservice = null;

        //console.log(gameservice);
        this.gameservice = gameservice;
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
            if (this.gameservice.textscript != null) {
                //console.log(this.gameservice.textscript);
                var runscript = document.getElementById("runscript");
                if (runscript != null) {
                    document.getElementById("runscript").remove();
                    this.AddScript();
                } else {
                    this.AddScript();
                }
            }
        }
    }, {
        key: 'AddScript',
        value: function AddScript() {
            if (this.gameservice != null) {
                var _script = document.createElement("script");
                _script.innerHTML = this.gameservice.textscript;
                document.getElementsByTagName('body')[0].appendChild(_script);
            }
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
Reflect.defineMetadata('design:paramtypes', [_game.GameService], ScriptEditorMenu);

},{"../services/game.service":68,"@angular/core":"@angular/core"}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShapeCharacterModal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShapeCharacterModal = exports.ShapeCharacterModal = (_dec = (0, _core.Component)({
    selector: 'shapecharactermodal',
    template: '\n        <div id="shapecharacter">\n            Create: Character\n            <br>Camera Position: <input id="terrain_camera" type="checkbox">\n            <!--<br><select id="sceneshape" onclick="this.gameservice.app.ui_selectshape();">-->\n            <!--</select>-->\n\n            <!--\n            <br>Height: <input type="number" [(ngModel)]="shape_height" >\n            <br>Width: <input type="number" [(ngModel)]="shape_width" >\n            <br>Depth: <input type="number" [(ngModel)]="shape_depth" >\n            -->\n            <br>\n            <br>px: <input type="number" [(ngModel)]="shape_x" >\n            <br>py: <input type="number" [(ngModel)]="shape_y" >\n            <br>pz: <input type="number" [(ngModel)]="shape_z" >\n            <br>\n            <br><button (click)="createshape();">Create Shape</button>\n        </div>\n    '
}), _dec(_class = function () {
    function ShapeCharacterModal(gameservice) {
        _classCallCheck(this, ShapeCharacterModal);

        this.shape_x = 0;
        this.shape_y = 0;
        this.shape_z = 0;

        this.gameservice = gameservice;
    }
    //shape_height = 1;
    //shape_width = 1;
    //shape_depth = 1;

    _createClass(ShapeCharacterModal, [{
        key: 'createshape',
        value: function createshape() {
            if (this.gameservice.app != null) {
                //console.log("pass");
                console.log(this);
                console.log(this.shape_height);

                this.gameservice.app.spawn_character({
                    x: this.shape_x,
                    y: this.shape_y,
                    z: this.shape_z
                });
            } else {
                //console.log("fail");
            }
        }
    }, {
        key: 'ngOnInit',
        value: function ngOnInit() {
            var self = this;
            console.log("init modal!");
            $("#shapecharacter").dialog();
            $("#shapecharacter").dialog('close');
        }
    }]);

    return ShapeCharacterModal;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], ShapeCharacterModal);

},{"../services/game.service":68,"@angular/core":"@angular/core"}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShapeCubeModal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShapeCubeModal = exports.ShapeCubeModal = (_dec = (0, _core.Component)({
    selector: 'shapecubemodal',
    template: '\n        <div id="shapecube">\n            Shape: Cube\n            <br>Camera Position: <input id="terrain_camera" type="checkbox">\n            <!--<br><select id="sceneshape" onclick="this.gameservice.app.ui_selectshape();">-->\n            <!--</select>-->\n            <br>Height: <input type="number" [(ngModel)]="shape_height" >\n            <br>Width: <input type="number" [(ngModel)]="shape_width" >\n            <br>Depth: <input type="number" [(ngModel)]="shape_depth" >\n            <br>\n            <br>px: <input type="number" [(ngModel)]="shape_x" >\n            <br>py: <input type="number" [(ngModel)]="shape_y" >\n            <br>pz: <input type="number" [(ngModel)]="shape_z" >\n            <br>\n            <br><button (click)="createshape();">Create Shape</button>\n        </div>\n    '
}), _dec(_class = function () {
    function ShapeCubeModal(gameservice) {
        _classCallCheck(this, ShapeCubeModal);

        this.shape_height = 1;
        this.shape_width = 1;
        this.shape_depth = 1;
        this.shape_x = 0;
        this.shape_y = 0;
        this.shape_z = 0;

        this.gameservice = gameservice;
    }

    _createClass(ShapeCubeModal, [{
        key: 'createshape',
        value: function createshape() {
            if (this.gameservice.app != null) {
                //console.log("pass");
                console.log(this);
                console.log(this.shape_height);

                this.gameservice.app.parse_object({ geometrytype: 'cube',
                    parameters: {
                        height: this.shape_height,
                        width: this.shape_width,
                        depth: this.shape_depth },
                    position: {
                        x: this.shape_x,
                        y: this.shape_y,
                        z: this.shape_z
                    }
                });
            } else {
                //console.log("fail");
            }
        }
    }, {
        key: 'ngOnInit',
        value: function ngOnInit() {
            var self = this;
            console.log("init modal!");
            $("#shapecube").dialog();
            $("#shapecube").dialog('close');
        }
    }]);

    return ShapeCubeModal;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], ShapeCubeModal);

},{"../services/game.service":68,"@angular/core":"@angular/core"}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShapePlaneModal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShapePlaneModal = exports.ShapePlaneModal = (_dec = (0, _core.Component)({
    selector: 'shapesplanemodal',
    template: '\n        <div id="shapeplane">\n            Shape: Plane\n            <br>Camera Position: <input id="terrain_camera" type="checkbox">\n            <br>Size: <input type="number" [(ngModel)]="shape_size" >\n            <br>Height: <input type="number" [(ngModel)]="shape_height" >\n            <br>Width: <input type="number" [(ngModel)]="shape_width" >\n\n\n            <br>\n            <br>px: <input type="number" [(ngModel)]="shape_x" >\n            <br>py: <input type="number" [(ngModel)]="shape_y" >\n            <br>pz: <input type="number" [(ngModel)]="shape_z" >\n            <br>\n            <br><button (click)="createshape();">Create Shape</button>\n        </div>\n    '
}), _dec(_class = function () {
    function ShapePlaneModal(gameservice) {
        _classCallCheck(this, ShapePlaneModal);

        this.shape_size = 1;
        this.shape_height = 1;
        this.shape_width = 1;
        this.shape_x = 0;
        this.shape_y = 0;
        this.shape_z = 0;

        this.gameservice = gameservice;
    }

    _createClass(ShapePlaneModal, [{
        key: 'createshape',
        value: function createshape() {
            if (this.gameservice.app != null) {
                //console.log("pass");
                console.log(this);
                console.log(this.shape_height);

                this.gameservice.app.parse_object({ geometrytype: 'plane',
                    parameters: {
                        height: this.shape_height,
                        width: this.shape_width,
                        size: this.shape_size },
                    position: {
                        x: this.shape_x,
                        y: this.shape_y,
                        z: this.shape_z
                    }
                });
            } else {
                //console.log("fail");
            }
        }
    }, {
        key: 'ngOnInit',
        value: function ngOnInit() {
            var self = this;
            console.log("init modal!");
            $("#shapeplane").dialog();
            $("#shapeplane").dialog('close');
        }
    }]);

    return ShapePlaneModal;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], ShapePlaneModal);

},{"../services/game.service":68,"@angular/core":"@angular/core"}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShapeSphereModal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShapeSphereModal = exports.ShapeSphereModal = (_dec = (0, _core.Component)({
    selector: 'shapespheremodal',
    template: '\n        <div id="shapesphere">\n            Shape: Sphere\n            <br>Camera Position: <input id="terrain_camera" type="checkbox">\n            <br>Diameter: <input type="number" [(ngModel)]="shape_diameter" >\n            <br>\n            <br>px: <input type="number" [(ngModel)]="shape_x" >\n            <br>py: <input type="number" [(ngModel)]="shape_y" >\n            <br>pz: <input type="number" [(ngModel)]="shape_z" >\n            <br>\n            <br><button (click)="createshape();">Create Shape</button>\n        </div>\n    '
}), _dec(_class = function () {
    function ShapeSphereModal(gameservice) {
        _classCallCheck(this, ShapeSphereModal);

        this.shape_diameter = 1;
        this.shape_x = 0;
        this.shape_y = 0;
        this.shape_z = 0;

        this.gameservice = gameservice;
    }

    _createClass(ShapeSphereModal, [{
        key: 'createshape',
        value: function createshape() {
            if (this.gameservice.app != null) {
                //console.log("pass");
                console.log(this);
                console.log(this.shape_height);

                this.gameservice.app.parse_object({ geometrytype: 'sphere',
                    parameters: {
                        diameter: this.shape_diameter
                    },
                    position: {
                        x: this.shape_x,
                        y: this.shape_y,
                        z: this.shape_z
                    }
                });
            } else {
                //console.log("fail");
            }
        }
    }, {
        key: 'ngOnInit',
        value: function ngOnInit() {
            var self = this;
            console.log("init modal!");
            $("#shapesphere").dialog();
            $("#shapesphere").dialog('close');
        }
    }]);

    return ShapeSphereModal;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], ShapeSphereModal);

},{"../services/game.service":68,"@angular/core":"@angular/core"}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShapeTerrainModal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

var _game = require('../services/game.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShapeTerrainModal = exports.ShapeTerrainModal = (_dec = (0, _core.Component)({
    selector: 'shapeterrainmodal',
    template: '\n        <div id="shapeterrain">\n            Shape: Terrain\n            <br>Camera Position: <input id="terrain_camera" type="checkbox">\n            <!--<br><select id="sceneshape" onclick="this.gameservice.app.ui_selectshape();">-->\n            <!--</select>-->\n\n            <!--\n            <br>Height: <input type="number" [(ngModel)]="shape_height" >\n            <br>Width: <input type="number" [(ngModel)]="shape_width" >\n            <br>Depth: <input type="number" [(ngModel)]="shape_depth" >\n            -->\n            <br>\n            <br>px: <input type="number" [(ngModel)]="shape_x" >\n            <br>py: <input type="number" [(ngModel)]="shape_y" >\n            <br>pz: <input type="number" [(ngModel)]="shape_z" >\n            <br>\n            <br><button (click)="createshape();">Create Shape</button>\n        </div>\n    '
}), _dec(_class = function () {
    function ShapeTerrainModal(gameservice) {
        _classCallCheck(this, ShapeTerrainModal);

        this.shape_height = 1;
        this.shape_width = 1;
        this.shape_depth = 1;
        this.shape_x = 0;
        this.shape_y = 0;
        this.shape_z = 0;

        this.gameservice = gameservice;
    }

    _createClass(ShapeTerrainModal, [{
        key: 'createshape',
        value: function createshape() {
            if (this.gameservice.app != null) {
                //console.log("pass");
                console.log(this);
                console.log(this.shape_height);

                this.gameservice.app.createterrain({
                    x: this.shape_x,
                    y: this.shape_y,
                    z: this.shape_z
                });
            } else {
                //console.log("fail");
            }
        }
    }, {
        key: 'ngOnInit',
        value: function ngOnInit() {
            var self = this;
            console.log("init modal!");
            $("#shapeterrain").dialog();
            $("#shapeterrain").dialog('close');
        }
    }]);

    return ShapeTerrainModal;
}()) || _class);
Reflect.defineMetadata('design:paramtypes', [_game.GameService], ShapeTerrainModal);

},{"../services/game.service":68,"@angular/core":"@angular/core"}],67:[function(require,module,exports){
'use strict';

require('babel-polyfill');

require('zone.js/dist/zone');

var _platformBrowserDynamic = require('@angular/platform-browser-dynamic');

var _app = require('./app.module');

//main entry and setup boot

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app.AppModule);

},{"./app.module":3,"@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic","babel-polyfill":"babel-polyfill","zone.js/dist/zone":"zone.js/dist/zone"}],68:[function(require,module,exports){
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
    this.textscriptname = '';
    this.textscript = '';
}
//scripteditor = null;
) || _class);

},{"@angular/core":"@angular/core"}]},{},[67])

//# sourceMappingURL=app.js.map
