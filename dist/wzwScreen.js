/* wzwgame v1.0.0 by Microanswer,web:http://test.microanswer.cn/wzwgame/index.html */
!function(l){var i={width:190,height:250,atomRowCount:21,atomColCount:11,atomBorder:1.5,atomInset:2,atomSpace:3,splitPosition:.7,splitSize:1,fontSize:13,fontHeight:15,background:"#9facaa",color1:"#000000",color2:"#8f9997"},m={STRINGS:{score:"Score",best:"Best",level:"Level",pause:"PAUSE",fps:"FPS"}};function c(t,o){if("string"==typeof t)this.dom=document.querySelector(t);else{if("object"!=typeof t)throw new Error("未知的选择器。");t.jquery&&0<t.length?this.dom=t[0]:this.dom=t}this.option=c.assign({},i,o||{}),e.call(this),function(){var t=document.createElement("canvas");t.width=t.style.width=this.option.width,t.height=t.style.height=this.option.height,t.style.margin="0",t.style.padding="0",t.style.background=this.option.background,this.canvasDom=t,this.dom.appendChild(t),this.canvas=this.canvasDom.getContext("2d")}.call(this),function(){var t={};t.splitPosition=this.option.width*this.option.splitPosition,t.atomSpace=this.option.atomSpace||1,t.atomWidth=(t.splitPosition-t.atomSpace*(this.option.atomColCount+1))/this.option.atomColCount,t.atomHeight=(this.option.height-t.atomSpace*(this.option.atomRowCount+1))/this.option.atomRowCount,t.fontItalic="italic normal "+this.option.fontSize+"px arial",t.fontBold="normal bold "+this.option.fontSize+"px arial",this.drawParam=t}.call(this),function(){var a=this,r=0,s="";setTimeout(function(){a.fps=r,r=0},1e3),function t(){var o=Date.now();r+=1,function(){this.logicFun&&this.logicFun()}.call(a);var i=Date.now();(function(t){t.clearRect(0,0,this.option.width,this.option.height),t.save(),t.beginPath();var o=t.fillStyle;t.fillStyle=this.option.background,t.fillRect(0,0,this.option.width,this.option.height),t.fillStyle=o,function(a){var r=this,s=0,l=0,t=a.fillStyle,o=a.strokeStyle,i=a.lineWidth;c.each(r.option.atomRowCount,function(t,n){s+=r.drawParam.atomSpace,l=0,c.each(r.option.atomColCount,function(t,o){l+=r.drawParam.atomSpace;var i,e=0;r.atoms&&(e=r.atoms[n][o]),f.call(r,a,e,s,l),!r.animArr||(i=r.animArr[n][o])!==e&&1===i&&f.call(r,a,i,s,l),l+=r.drawParam.atomWidth}),s+=r.drawParam.atomHeight}),a.fillStyle=t,a.strokeStyle=o,a.lineWidth=i}.call(this,t);var i=t.strokeStyle,e=t.lineWidth;t.strokeStyle=this.option.color1,t.lineWidth=this.option.splitSize,t.moveTo(this.drawParam.splitPosition,0),t.lineTo(this.drawParam.splitPosition,this.option.height),t.stroke(),t.strokeStyle=i,t.lineWidth=e,function(e){var n=this,t=e.fillStyle,o=e.lineWidth,i=e.strokeStyle,a=e.font,r=n.option.fontHeight,s=n.drawParam.splitPosition+5;e.strokeStyle=n.option.color1,e.fillStyle=n.option.color1,e.font=n.drawParam.fontItalic,e.fillText(m.STRINGS.score,s,r),e.font=n.drawParam.fontBold,e.fillText(n.score,s,r+=n.option.fontHeight),e.font=n.drawParam.fontItalic,e.fillText(m.STRINGS.level,s,r+=n.option.fontHeight),e.font=n.drawParam.fontBold,e.fillText(n.level,s,r+=n.option.fontHeight);var l=r+5,h=s;c.each(4,function(t,i){l+=n.drawParam.atomSpace,h=s,c.each(4,function(t,o){h+=n.drawParam.atomSpace,f.call(n,e,n.statusAtoms?n.statusAtoms[i][o]:0,l,h),h+=n.drawParam.atomWidth}),l+=n.drawParam.atomHeight}),r=l+5,e.strokeStyle=e.fillStyle=n.option.color1,e.font=n.drawParam.fontItalic,e.fillText(m.STRINGS.best,s,r+=n.option.fontHeight),e.font=n.drawParam.fontBold,e.fillText(n.best,s,r+=n.option.fontHeight),r+=5,e.fillStyle=n.paused?n.option.color1:n.option.color2,e.font=n.drawParam.fontItalic,e.fillText(m.STRINGS.pause,s,r+=n.option.fontHeight),e.strokeStyle=e.fillStyle=n.option.color1,e.font=n.drawParam.fontItalic,e.fillText(m.STRINGS.fps,s,n.option.height-n.option.fontHeight-2),e.font=n.drawParam.fontBold,e.fillText(n.fps,s,n.option.height-2),e.font=a,e.strokeStyle=i,e.fillStyle=t,e.lineWidth=o}.call(this,t),t.closePath(),t.restore()}).call(a,a.canvas);var e=Date.now();l.requestAnimationFrame?(s="requestAnimationFrame",l.requestAnimationFrame(t)):l.webkitRequestAnimationFrame?(s="webkitRequestAnimationFrame",l.webkitRequestAnimationFrame(t)):(s="setTimeout",setTimeout(t,16));var n=Date.now();l.testspan&&(l.testspan.innerText="逻辑耗时："+(i-o)+"ms, 绘制耗时："+(e-i)+"ms, 帧请求("+s+")耗时："+(n-e)+"ms, 帧间隔:"+(o-a.lastttime)+"ms"),a.lastttime=Date.now()}()}.call(this)}function e(){this.atoms=void 0,this.statusAtoms=void 0,this.fps=60,this.score=0,this.paused=!1,this.level=0,this.best=0}function f(t,o,i,e){t.strokeStyle=t.fillStyle=0<o?this.option.color1:this.option.color2,t.lineWidth=this.option.atomBorder,t.strokeRect(e,i,this.drawParam.atomWidth,this.drawParam.atomHeight),t.fillRect(e+this.option.atomInset,i+this.option.atomInset,this.drawParam.atomWidth-2*this.option.atomInset,this.drawParam.atomHeight-2*this.option.atomInset)}function s(i,o,e){var n,t,a=this;function r(t){var o=n[t];if(o)return a.animResult!==i?"kill":void(a.animArr=o)}o<i.animArr.length?(n=i.animArr[o],t=i.animTime[o],c.scroll(0,n.length,{goo:r,end:function(t){r(t),e&&e(i.animName,o),s.call(a,i,o+1,e)},kill:function(){e&&e(i.animName,-1)}},t)):a.animArr=void 0}c.prototype.reset=function(){e.call(this)},c.prototype.makeNewArr=function(e){var o=this,n=[];return c.each(o.option.atomRowCount,function(t,i){n[i]=[],c.each(o.option.atomColCount,function(t,o){n[i][o]=e?e(i,o):0})}),n},c.prototype.playAnim=function(t,o){if(!t)throw new Error("请指定要执行的动画。");var i=this,e=t.call(i);if(e.animArr.length!==e.animTime.length)throw new Error("时间配置与动画不匹配。");i.animArr=i.makeNewArr(),i.animResult=e,s.call(i,e,0,o)},c.prototype.updateAtomArr=function(t){this.atoms=void 0,this.atoms=t},c.prototype.updateStatusAtoms=function(t){this.statusAtoms=void 0,this.statusAtoms=t},c.prototype.regLogic=function(t){this.logicFun=t},c.prototype.setLevel=function(t){this.level=t},c.prototype.setScore=function(t){this.score=t},c.prototype.setPause=function(t){this.paused=t},c.prototype.setBest=function(t){this.best=t},c.assign=function(){var t=arguments[0];if(t){for(var o=1;o<arguments.length;o++){var i=arguments[o];if(i)for(var e in i)t[e]=i[e]}return t}},c.each=function(t,o){if(t)if(Array.isArray(t))for(var i=0;i<t.length;i++)o&&o(t[i],i,t);else if(Number.isInteger(t))for(i=1;i<=t;i++)o&&o(i,i-1,t)},c.each2=function(e,n){e&&n&&c.each(e.length,function(t,i){c.each(t,function(t,o){n(t,i,o,e)})})},c.scroll=function(t,n,a,o){var r,s,l,h=t||0,m=n-h;0!=m?(r=!1,s=o||500,l=Date.now(),function e(){setTimeout(function(){var t=Date.now()-l,o=t/s,i=h+Math.floor(o*m);if(!r&&"kill"===(a&&a.goo&&a.goo(i)))return void(a.kill&&a.kill());s<=t?(r=!0,a.end(n)):setTimeout(e,1e3/60)},1e3/60)}()):a&&a.end&&a.end(n)},c.mergeArr=function(t,a,r,s,l){r=r||0,s=s||0,c.each(t,function(t,n){c.each(t,function(t,o){if(n+r<a.length&&o+s<a[n].length){var i=n+r,e=o+s;if(e<0||i<0)return;a[i][e]=l?l(i,e,n,o):t}})})},c.mergeArr2=function(e,t,n,a,r){n=n||0,a=a||0;var s=[];return c.each(t,function(t,i){s[i]=[],c.each(t,function(t,o){s[i][o]=t,n<=i&&a<=o&&i<n+e.length&&o<a+e[0].length&&(s[i][o]=r?r(i,o,i-n,o-a):e[i-n][o-a])})}),s},c.random=function(t,o){return Math.floor(Math.random()*(o-t)+t)};var n={getItem:function(t){console.warn("getItem不支持localstorage、sessionstorage")},setItem:function(t,o){console.warn("setItem不支持localstorage、sessionstorage")},removeItem:function(t){console.warn("removeItem不支持localstorage、sessionstorage")}};function t(t){t=t||{},this.height=4,this.width=4,this.time=50,this.offsetRow=t.offsetRow,this.offsetCol=t.offsetCol,this.frams=[[[1,0,0,1],[0,1,1,0],[0,1,1,0],[1,0,0,1]],[[0,1,1,0],[1,0,0,1],[1,0,0,1],[0,1,1,0]]],this.currentFram=0,this.keepTime=t.keepTime||1e3;var o=this;setTimeout(function(){t.onEnd&&t.onEnd.call(o)},this.keepTime)}c.storeGet=function(t){var o=(localStorage||sessionStorage||n).getItem(t);return o?JSON.parse(o):o},c.storeSet=function(t,o){return(localStorage||sessionStorage||n).setItem(t,JSON.stringify(o))},c.storeRemove=function(t){return(localStorage||sessionStorage||n).removeItem(t)},c.ANIM={CIRCLE:function(){for(var i=this,n=[],t="l",o=i.option.atomRowCount*i.option.atomColCount,e=function(){return this.makeNewArr(function(t,o){return[t,o]})}.call(i);n.length<o;){if("l"===t){for(r=0;r<e.length;r++)n.push(e[r].shift());t="b"}else if("b"===t){for(var a=e.pop(),r=0;r<a.length;r++)n.push(a[r]);t="r"}else if("r"===t){for(r=e.length-1;0<=r;r--)n.push(e[r].pop());t="t"}else if("t"===t){var s=e.shift();for(r=s.length-1;0<=r;r--)n.push(s[r]);t="l"}}var l=[];return c.each(n,function(t,o){var e=i.makeNewArr();c.each(o+1,function(t,o){var i=n[o];e[i[0]][i[1]]=1}),l.push(e)}),{animName:"CIRCLE",animArr:[l,l.concat([]).reverse()],animTime:[2e3,2e3]}},B2T:function(){var a=this,r=[];return c.each(a.option.atomRowCount,function(t,o){o=a.option.atomRowCount-t;for(var i=a.makeNewArr(),e=o;e<a.option.atomRowCount;e++)for(var n=0;n<a.option.atomColCount;n++)i[e][n]=1;r.push(i)}),{animName:"B2T",animArr:[r,r.concat([]).reverse()],animTime:[700,700]}},T2B:function(){var a=this,r=[];return c.each(a.option.atomRowCount,function(t,o){for(var i=a.makeNewArr(),e=0;e<=o;e++)for(var n=0;n<a.option.atomColCount;n++)i[e][n]=1;r.push(i)}),{animName:"T2B",animArr:[r,r.concat([]).reverse()],animTime:[700,700]}},COP:function(){for(var t=this,o=[],i=0,e=0,n=0;;){for(var a=i,r=t.option.atomRowCount-(i+1),s=t.makeNewArr(),e=0;e<=a;e++)for(n=0;n<t.option.atomColCount;n++)s[e][n]=1;for(e=t.option.atomRowCount-1;r<=e;e--)for(n=0;n<t.option.atomColCount;n++)s[e][n]=1;if(o.push(s),a===r||1===Math.abs(a-r))break;i++}return{animName:"COP",animArr:[o,o.concat([]).reverse()],animTime:[600,600]}}},c.LETTER={A:[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1]],B:[[1,1,1,1,0],[0,1,0,0,1],[0,1,1,1,0],[0,1,0,0,1],[1,1,1,1,0]],C:[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,0],[1,0,0,0,1],[0,1,1,1,0]],D:[[1,1,1,1,0],[0,1,0,0,1],[0,1,0,0,1],[0,1,0,0,1],[1,1,1,1,0]],E:[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,1,1,1]],F:[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0]],G:[[0,1,1,1,0],[1,0,0,0,0],[1,0,1,1,1],[1,0,0,0,1],[0,1,1,1,0]],H:[[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1]],I:[[0,1,1,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,1,0]],J:[[0,1,1,1,0],[0,0,0,1,0],[0,0,0,1,0],[1,0,0,1,0],[0,1,1,0,0]],K:[[0,1,0,0,1],[0,1,0,1,0],[0,1,1,0,0],[0,1,0,1,0],[0,1,0,0,1]],L:[[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,0]],M:[[1,1,1,1,0],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1]],N:[[1,0,0,0,1],[1,1,0,0,1],[1,0,1,0,1],[1,0,0,1,1],[1,0,0,0,1]],O:[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],P:[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0]],Q:[[0,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,0],[0,1,1,1,1]],R:[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0],[1,0,1,0,0],[1,0,0,1,1]],S:[[0,1,1,1,1],[1,0,0,0,0],[0,1,1,1,0],[0,0,0,0,1],[1,1,1,1,0]],T:[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],U:[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],V:[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],W:[[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,1,1,1,0]],X:[[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1]],Y:[[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],Z:[[1,1,1,1,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,1,1,1,1]]},l.WzwScreen=c,t.prototype.update=function(){Date.now()-(this.lastTime||0)>=this.time&&(this.currentFram=0===this.currentFram?1:0,this.lastTime=Date.now())},t.prototype.getCurrentFrame=function(){return this.frams[this.currentFram]},l.WzwBomb=t}(window);