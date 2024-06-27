window.__require=function t(e,o,n){function i(c,s){if(!o[c]){if(!e[c]){var p=c.split("/");if(p=p[p.length-1],!e[p]){var a="function"==typeof __require&&__require;if(!s&&a)return a(p,!0);if(r)return r(p,!0);throw new Error("Cannot find module '"+c+"'")}c=p}var l=o[c]={exports:{}};e[c][0].call(l.exports,function(t){return i(e[c][1][t]||t)},l,l.exports,t,e,o,n)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<n.length;c++)i(n[c]);return i}({Bullet:[function(t,e,o){"use strict";cc._RF.push(e,"fd73efK1y9CKLv+2JerjTNT","Bullet");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.angle=0,e.attack=4,e.speed=10,e.bulletLeve=1,e}return i(e,t),e.prototype.shot=function(t,e){this.game=t,this.enabled=!0;var o=t.weaponNode.parent.convertToWorldSpaceAR(t.weaponNode.getPosition());this.angle=-t.weaponNode.angle,this.node.angle=-this.angle;var n=cc.v2(o.x+50*Math.sin(this.angle/180*3.14),o.y+50*Math.cos(this.angle/180*3.14));this.setBullet(e),this.node.position=n,this.node.parent=cc.director.getScene()},e.prototype.setBullet=function(t){this.bulletLeve=t,this.node.getComponent(cc.Sprite).spriteFrame=this.game.spAtlas.getSpriteFrame("bullet"+this.bulletLeve)},e.prototype.update=function(t){var e=this.node.x,o=this.node.y;e+=t*this.speed*Math.sin(this.angle/180*3.14),o+=t*this.speed*Math.cos(this.angle/180*3.14),this.node.x=e,this.node.y=o,(this.node.x>cc.winSize.width+100||this.node.x<-100||this.node.y>cc.winSize.height+100||this.node.y<0)&&this.game.despawnBullet(this.node)},e.prototype.onCollisionEnter=function(t,e){var o=e.world.points;o[0].add(o[3]).mul(.5),this.game.despawnBullet(this.node)},e.prototype.getAttackValue=function(){return this.attack*this.bulletLeve},r([p],e.prototype,"speed",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],CoinController:[function(t,e,o){"use strict";cc._RF.push(e,"737abq6GhRCQ4hbk+Sfvku8","CoinController");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./Coins"),s=t("./NumUp"),p=cc._decorator,a=p.ccclass,l=p.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.coinPlusPrefab=null,e.coinsPrefab=null,e.number1=null,e.number2=null,e.number3=null,e.number4=null,e.number5=null,e.number6=null,e.timerAtlas=null,e.currentValue=0,e.toValue=0,e}return i(e,t),e.prototype.onLoad=function(){},e.prototype.init=function(){this.coinUpPool=new cc.NodePool,this.coinsPool=new cc.NodePool,this.setValue(this.currentValue)},e.prototype.prefixInteger=function(t,e){return(Array(e).join("0")+t).slice(-e)},e.prototype.setValue=function(t){var e=this.prefixInteger(t,6).split("");this.number1.spriteFrame=this.timerAtlas.getSpriteFrame(e[0].toString()),this.number2.spriteFrame=this.timerAtlas.getSpriteFrame(e[1].toString()),this.number3.spriteFrame=this.timerAtlas.getSpriteFrame(e[2].toString()),this.number4.spriteFrame=this.timerAtlas.getSpriteFrame(e[3].toString()),this.number5.spriteFrame=this.timerAtlas.getSpriteFrame(e[4].toString()),this.number6.spriteFrame=this.timerAtlas.getSpriteFrame(e[5].toString())},e.prototype.addCoins=function(t){this.currentValue+=t,this.setValue(this.currentValue)},e.prototype.reduceCoin=function(t){return this.currentValue>=t&&(this.setValue(this.currentValue-=t),!0)},e.prototype.gainCoins=function(t,e){this.coinUpPool.size()>0?this.coin_up=this.coinUpPool.get():this.coin_up=cc.instantiate(this.coinPlusPrefab),this.coin_up.getComponent(s.default).init(t,e,this),this.coinsPool.size()>0?this.oneCoin=this.coinsPool.get():this.oneCoin=cc.instantiate(this.coinsPrefab),this.oneCoin.getComponent(c.default).init(this);var o=this.node.convertToWorldSpaceAR(this.number3.node.position);this.oneCoin.getComponent(c.default).goDown(t,o),this.addCoins(e)},e.prototype.despawnCoins=function(t){this.coinsPool.put(t)},e.prototype.despawnCoinup=function(t){this.coinUpPool.put(t)},r([l(cc.Prefab)],e.prototype,"coinPlusPrefab",void 0),r([l(cc.Prefab)],e.prototype,"coinsPrefab",void 0),r([l(cc.Sprite)],e.prototype,"number1",void 0),r([l(cc.Sprite)],e.prototype,"number2",void 0),r([l(cc.Sprite)],e.prototype,"number3",void 0),r([l(cc.Sprite)],e.prototype,"number4",void 0),r([l(cc.Sprite)],e.prototype,"number5",void 0),r([l(cc.Sprite)],e.prototype,"number6",void 0),r([l(cc.SpriteAtlas)],e.prototype,"timerAtlas",void 0),r([l],e.prototype,"currentValue",void 0),r([l],e.prototype,"toValue",void 0),r([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./Coins":"Coins","./NumUp":"NumUp"}],Coins:[function(t,e,o){"use strict";cc._RF.push(e,"4bfcc8soWpBpY9UvUv74Z4g","Coins");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim=null,e}return i(e,t),e.prototype.init=function(t){this.cointroller=t,this.anim.play("gold_down")},e.prototype.goDown=function(t,e){this.node.parent=cc.director.getScene(),this.node.position=t;var o=cc.spawn(cc.moveTo(.8,e),cc.scaleTo(.8,.5)),n=cc.callFunc(this.despawnCoin,this);cc.sequence(o,n),cc.tween(this.node).then(o).then(n).start()},e.prototype.despawnCoin=function(){this.cointroller.despawnCoins(this.node)},r([p(cc.Animation)],e.prototype,"anim",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],FishType:[function(t,e,o){"use strict";var n;cc._RF.push(e,"9568eHKWrdBHpsNsOmYO/6R","FishType"),Object.defineProperty(o,"__esModule",{value:!0}),o.FishState=void 0,function(t){t[t.alive=0]="alive",t[t.dead=1]="dead"}(n||(n={})),o.FishState=n,cc._RF.pop()},{}],Fish:[function(t,e,o){"use strict";cc._RF.push(e,"22cd0aTCm5CvbUGmTmmcs80","Fish");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./FishType"),s=t("./Bullet"),p=cc._decorator,a=p.ccclass,l=p.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim=null,e.hp=10,e.gold=2,e.fishState=c.FishState.alive,e.bezier4=[cc.v2(50,50),cc.v2(400,100),cc.v2(1800,200)],e.bezierArray=new Array,e}return i(e,t),e.prototype.init=function(t){this.bezierArray.push(this.bezier4),this.game=t,this.enabled=!0,this.spawnFish(t)},e.prototype.spawnFish=function(t){t.fishTypes.length;var e=Math.floor(2*Math.random());this.fishType=t.fishTypes[e];var o=cc.v2(100*-Math.random()-200,600*(Math.random()-.5)+350);this.node.position=cc.find("Canvas").convertToNodeSpaceAR(o);var n=Math.floor(Math.random()*this.bezierArray.length),i=this.bezierArray[n],r=i[0],s=Math.atan(r.y/r.x);this.node.angle=180*-s/3.14,this.node.getComponent(cc.Sprite).spriteFrame=this.game.spAtlas.getSpriteFrame(this.fishType.name+"_run_0"),this.hp=5+Math.floor(5*Math.random()),this.gold=this.fishType.gold,this.fishState=c.FishState.alive,this.anim.play(this.fishType.name+"_run"),this.node.parent=cc.find("Canvas"),this.lastPosition=this.node.getPosition(),this.changeCollider(),this.swimming(i)},e.prototype.changeCollider=function(){this.node.getComponent(cc.BoxCollider).size=this.node.getContentSize()},e.prototype.swimming=function(t){cc.winSize;var e=10*Math.random()+10;console.log("@@@swimming",e,t);var o=cc.bezierBy(e,t);cc.tween(this.node).then(o).start()},e.prototype.onLoad=function(){},e.prototype.update=function(){this.updateDegree()},e.prototype.updateDegree=function(){var t=this.node.getPosition();if(!(this.lastPosition.sub(t).mag()<1)){var e=t.sub(this.lastPosition),o=cc.v2(e).signAngle(cc.v2(1,0))/Math.PI*180;this.node.angle=-o,this.lastPosition=t,this.beAttack()}},e.prototype.beAttack=function(){if(this.isDie()){this.node.stopAllActions(),this.anim.play(this.fishType.name+"_die").on("finished",this.dieCallback,this);var t=this.node.parent.convertToWorldSpaceAR(this.node.position);this.game.gainCoins(t,this.gold)}else this.despawnFish()},e.prototype.dieCallback=function(){cc.log("fish die"),this.node.stopAllActions(),this.game.despawnFish(this.node)},e.prototype.despawnFish=function(){(this.node.x>900||this.node.x<-1e3||this.node.y>600||this.node.y<-900)&&(this.node.stopAllActions(),this.game.despawnFish(this.node))},e.prototype.isDie=function(){return this.fishState==c.FishState.dead},e.prototype.onCollisionEnter=function(t){var e=t.node.getComponent(s.default);this.hp-=e.getAttackValue(),this.hp<=0&&(this.fishState=c.FishState.dead),console.log("@@@Fish Hit hp",this.hp)},r([l(cc.Animation)],e.prototype,"anim",void 0),r([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./Bullet":"Bullet","./FishType":"FishType"}],Game:[function(t,e,o){"use strict";cc._RF.push(e,"4af5edxCA1IgI7GLcT2eZXt","Game");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./Fish"),s=t("./Bullet"),p=t("./Net"),a=t("./CoinController"),l=t("./Weapon"),u=cc._decorator,h=u.ccclass,f=u.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fishPrefab=null,e.weaponNode=null,e.bulletPrefab=null,e.netPrefab=null,e.coinController=null,e.spAtlas=null,e.gameOverNode=null,e.bgm=null,e}return i(e,t),e.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0,this.bulletPool=new cc.NodePool(s.default),this.fishPool=new cc.NodePool(c.default);for(var t=0;t<10;++t){var e=cc.instantiate(this.fishPrefab);this.fishPool.put(e)}this.netsPool=new cc.NodePool,this.coinController.getComponent(a.default).init(),this.weaponNode.getComponent(l.default).init(),cc.find("Canvas/gameBg").zIndex=-1,cc.find("Canvas/bottomBar").zIndex=1,this.gameOverNode.zIndex=2,this.gameOverNode.active=!1;var o=this;cc.debug.setDisplayStats(!0),cc.loader.loadRes("fishconfig",function(t,e){t?cc.error(t.message||t):(o.fishTypes=e.json,o.schedule(o.creatFish,2))}),this.node.on(cc.Node.EventType.TOUCH_START,function(t){var e=o.weaponNode.parent.convertToNodeSpaceAR(t.getLocation()),n=o.weaponNode.getPosition(),i=e.sub(n).signAngle(cc.v2(0,1))/Math.PI*180;o.weaponNode.angle=-i;var r=o.weaponNode.getComponent(l.default).curLevel;o.shot(r)},this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(){},this),this.node.on(cc.Node.EventType.TOUCH_END,function(){},this)},e.prototype.shot=function(t){this.bulletPool.size()>0?this.oneBullet=this.bulletPool.get(this):this.oneBullet=cc.instantiate(this.bulletPrefab),this.coinController.getComponent(a.default).reduceCoin(t)?this.oneBullet.getComponent(s.default).shot(this,t):0==this.coinController.getComponent(a.default).currentValue&&this.gameOver()},e.prototype.creatFish=function(){for(var t=0;t<3;++t)(this.fishPool.size()>0?this.fishPool.get(this):cc.instantiate(this.fishPrefab)).getComponent(c.default).init(this)},e.prototype.castNet=function(t){this.netsPool.size()>0?this.oneNet=this.netsPool.get(this):this.oneNet=cc.instantiate(this.netPrefab);var e=this.weaponNode.getComponent(l.default).curLevel;this.oneNet.getComponent(p.default).init(t,this,e)},e.prototype.despawnFish=function(t){this.fishPool.put(t)},e.prototype.despawnBullet=function(t){this.bulletPool.put(t)},e.prototype.despawnNet=function(t){this.netsPool.put(t)},e.prototype.gainCoins=function(t,e){this.coinController.getComponent(a.default).gainCoins(t,e)},e.prototype.gameOver=function(){this.gameOverNode.active=!0,this.unscheduleAllCallbacks()},e.prototype.gameRestart=function(){cc.director.loadScene("mainscene")},r([f(cc.Prefab)],e.prototype,"fishPrefab",void 0),r([f(cc.Node)],e.prototype,"weaponNode",void 0),r([f(cc.Prefab)],e.prototype,"bulletPrefab",void 0),r([f(cc.Prefab)],e.prototype,"netPrefab",void 0),r([f(cc.Node)],e.prototype,"coinController",void 0),r([f(cc.SpriteAtlas)],e.prototype,"spAtlas",void 0),r([f(cc.Node)],e.prototype,"gameOverNode",void 0),r([f({type:cc.AudioClip})],e.prototype,"bgm",void 0),r([h],e)}(cc.Component);o.default=d,cc._RF.pop()},{"./Bullet":"Bullet","./CoinController":"CoinController","./Fish":"Fish","./Net":"Net","./Weapon":"Weapon"}],Net:[function(t,e,o){"use strict";cc._RF.push(e,"f44ce3XvqRGsalzFMsIzXhv","Net");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim=null,e.curLevel=1,e}return i(e,t),e.prototype.init=function(t,e,o){this.curLevel=o,this.node.parent=cc.director.getScene(),this.node.position=t,this.game=e,this.anim.play("net_"+this.curLevel)},e.prototype.despawnNet=function(){this.game.despawnNet(this.node)},r([p(cc.Animation)],e.prototype,"anim",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],NumUp:[function(t,e,o){"use strict";cc._RF.push(e,"fc121wk/tZKbpMMPfOS1Mhf","NumUp");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim=null,e.numAtlas=null,e.tensPlace=null,e.onesPlace=null,e}return i(e,t),e.prototype.init=function(t,e,o){this.cointroller=o;var n=e.toString().split("");1==n.length?(this.onesPlace.node.active=!1,this.tensPlace.spriteFrame=this.numAtlas.getSpriteFrame("goldnum_"+n[0])):(this.onesPlace.node.active=!0,this.tensPlace.spriteFrame=this.numAtlas.getSpriteFrame("goldnum_"+n[0]),this.onesPlace.spriteFrame=this.numAtlas.getSpriteFrame("goldnum_"+n[1])),this.node.parent=cc.director.getScene(),this.node.position=t,this.anim.play("coin_up").on("stop",this.despawn,this)},e.prototype.despawn=function(){this.cointroller.despawnCoinup(this.node)},r([p(cc.Animation)],e.prototype,"anim",void 0),r([p(cc.SpriteAtlas)],e.prototype,"numAtlas",void 0),r([p(cc.Sprite)],e.prototype,"tensPlace",void 0),r([p(cc.Sprite)],e.prototype,"onesPlace",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],WaveComponent:[function(t,e,o){"use strict";cc._RF.push(e,"a3f1elleeBBZIdYMqS3lCi2","WaveComponent");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=(c.property,c.executeInEditMode),a=c.requireComponent,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._time=0,e}return i(e,t),e.prototype.start=function(){cc.dynamicAtlasManager.enabled=!1,this.material=this.node.getComponent(cc.Sprite).getMaterial(0),this.setResolution()},e.prototype.update=function(t){this._time+=t,this.material.setProperty("time",this._time)},e.prototype.setResolution=function(){this.material.setProperty("resolution",cc.v2(this.node.width,this.node.height))},r([s,p,a(cc.Sprite)],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],Weapon:[function(t,e,o){"use strict";cc._RF.push(e,"20cc77d8/1GWqTQQJry8tDM","Weapon");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anim=null,e}return i(e,t),e.prototype.init=function(){this.curLevel=1,this.total=this.anim.getClips().length},e.prototype.plus=function(){this.curLevel+1>this.total?this.curLevel=this.total:this.curLevel++,this.anim.play("weapon_level_"+this.curLevel)},e.prototype.reduce=function(){this.curLevel<2?this.curLevel=1:this.curLevel--,this.anim.play("weapon_level_"+this.curLevel)},r([p(cc.Animation)],e.prototype,"anim",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],use_reversed_rotateTo:[function(t,e){"use strict";cc._RF.push(e,"42fe2B7u75B0INY0x/KaTGI","use_reversed_rotateTo"),cc.RotateTo._reverse=!0,cc._RF.pop()},{}],"use_v2.1.x_cc.Action":[function(t,e){"use strict";cc._RF.push(e,"4b1d0Spsx9D2rYhXREjnuxO","use_v2.1.x_cc.Action"),cc.macro.ROTATE_ACTION_CCW=!0,cc._RF.pop()},{}]},{},["Bullet","CoinController","Coins","Fish","FishType","Game","Net","NumUp","Weapon","WaveComponent","use_reversed_rotateTo","use_v2.1.x_cc.Action"]);