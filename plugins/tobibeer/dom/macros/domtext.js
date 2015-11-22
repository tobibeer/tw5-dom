/*\
title: $:/plugins/tobibeer/dom/domtext.js
type: application/javascript
module-type: macro

<hide id="foo"><i>bar</i></hide>
<$text text=<<domtext foo innerHTML>>/>

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Reads a property from a dom-node:
- textContent (when unspecified)
- otherwise an attribute (or innerHTML)
*/

exports.name = "domtext";
exports.params = [
	{name: "selector"},
	{name: "attr"}
];

/*
Run the macro
*/
exports.run = function(selector, attr) {
	var val="",
		ref = selector,
		get = function (el) {
			return !el ? "" : (
				attr ? (
						attr == "$innerHTML" ?
						el.innerHTML :
						el.getAttribute(attr)
					) : el.textContent || el.innerText
				).trim();
		};
	if(selector){
		val = get(document.getElementById(ref));
	}
	return val;
};

})();