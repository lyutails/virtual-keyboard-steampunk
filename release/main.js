(()=>{"use strict";const n=function(){function n(n,t,e,o){void 0===t&&(t="div"),void 0===e&&(e=""),void 0===o&&(o="");var r=document.createElement(t);r.className=e,r.textContent=o,n&&n.append(r),this.node=r}return n.prototype.destroy=function(){this.node.remove()},n}();var t,e=(t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},t(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),o=function(t){function o(e,o){var i=t.call(this,e,"div","background")||this,c=new n(i.node,"div","screen"),d=new n(i.node,"div","keyboard");return new n(i.node,"div","title_name_wrapper"),new n(i.node,"div","title_name"),new n(i.node,"div","dividing_line"),o.forEach((function(t){var e=new n(d.node,"div");t.forEach((function(n){new r(e.node,n).node.onclick=function(){c.node.textContent+=n}}))})),i}return e(o,t),o}(n),r=function(n){function t(t,e){return n.call(this,t,"div","keyboard_key",e)||this}return e(t,n),t}(n);new o(document.body,[["Esc","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"],["~ ё","! 1",'" 2',"№ 3","; 4","% 5",": 6","? 7","* 8","( 9",") 0","- _","+ =","Backspace"],["Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ"],["Caps Lock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","| \\","Enter"],["Shift","Я","Ч","С","М","И","Т","Ь","Б","Ю",", .","Shift"],["Ctrl","windows","Alt","Space","windows","Alt","Space","windows","rmb","Ctrl"]])})();