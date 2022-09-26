"use strict";
exports.id = 712;
exports.ids = [712];
exports.modules = {

/***/ 3204:
/***/ ((module) => {



const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 3743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$v": () => (/* binding */ footerProjectDescription),
/* harmony export */   "Ah": () => (/* binding */ footerContactText),
/* harmony export */   "DZ": () => (/* binding */ navContainer),
/* harmony export */   "FV": () => (/* binding */ navLinks),
/* harmony export */   "G1": () => (/* binding */ sideBarModelHeading),
/* harmony export */   "Iv": () => (/* binding */ homeExamples),
/* harmony export */   "JE": () => (/* binding */ homeIntroText),
/* harmony export */   "Jn": () => (/* binding */ referenceContainer),
/* harmony export */   "KV": () => (/* binding */ sideBarIndex),
/* harmony export */   "L2": () => (/* binding */ sideBarSubHeading),
/* harmony export */   "LL": () => (/* binding */ referenceSideBar),
/* harmony export */   "Lf": () => (/* binding */ homeCodeExamples),
/* harmony export */   "NT": () => (/* binding */ referenceSideBarContainer),
/* harmony export */   "Nk": () => (/* binding */ aboutContent),
/* harmony export */   "OZ": () => (/* binding */ homeDownloadSubtext),
/* harmony export */   "Pk": () => (/* binding */ homeAcknowledgementsHeading),
/* harmony export */   "Qf": () => (/* binding */ typewriter),
/* harmony export */   "So": () => (/* binding */ homeIntroLogo),
/* harmony export */   "TD": () => (/* binding */ homeDownload),
/* harmony export */   "W9": () => (/* binding */ navLogo),
/* harmony export */   "Yk": () => (/* binding */ navGithubLogo),
/* harmony export */   "Yo": () => (/* binding */ downloadContent),
/* harmony export */   "Zt": () => (/* binding */ footerContactHeading),
/* harmony export */   "bo": () => (/* binding */ homeExamplesItemImage),
/* harmony export */   "cP": () => (/* binding */ navLinkText),
/* harmony export */   "ci": () => (/* binding */ referenceContent),
/* harmony export */   "cz": () => (/* binding */ homeContainer),
/* harmony export */   "d0": () => (/* binding */ homeExamplesItem),
/* harmony export */   "e$": () => (/* binding */ homeExamplesHeading),
/* harmony export */   "iy": () => (/* binding */ homeGsocLogo),
/* harmony export */   "jR": () => (/* binding */ homeExamplesItemContainer),
/* harmony export */   "ls": () => (/* binding */ homeIntro),
/* harmony export */   "mE": () => (/* binding */ homeProcessingLogo),
/* harmony export */   "nC": () => (/* binding */ container),
/* harmony export */   "pY": () => (/* binding */ footerContact),
/* harmony export */   "ro": () => (/* binding */ homeExamplesItemDescription),
/* harmony export */   "rq": () => (/* binding */ homeAcknowledgements),
/* harmony export */   "s$": () => (/* binding */ homeDownloadHeading),
/* harmony export */   "tp": () => (/* binding */ homeAcknowledgementsLogoContainer),
/* harmony export */   "ty": () => (/* binding */ sideBarHeading),
/* harmony export */   "z9": () => (/* binding */ sideBarItems)
/* harmony export */ });
/* unused harmony exports typing, blinkCaret, showSideBar, hideSideBar, referenceSideBarButton, referenceSideBarIcon */
// Exports
var container = "layout-module--container--eLBMS";
var navContainer = "layout-module--nav-container--lv6SL";
var navLogo = "layout-module--nav-logo--dqILr";
var navGithubLogo = "layout-module--nav-github-logo--f3aCR";
var navLinks = "layout-module--nav-links--EROwB";
var navLinkText = "layout-module--nav-link-text--ac2nV";
var footerContact = "layout-module--footer-contact--KApfo";
var footerContactHeading = "layout-module--footer-contact-heading--ffPqQ";
var footerContactText = "layout-module--footer-contact-text--S06pC";
var footerProjectDescription = "layout-module--footer-project-description--wIghm";
var homeContainer = "layout-module--home-container--lkTLl";
var homeIntro = "layout-module--home-intro--bIrZU";
var homeIntroText = "layout-module--home-intro-text--6zF90";
var homeIntroLogo = "layout-module--home-intro-logo--+T2Hi";
var typewriter = "layout-module--typewriter--m9k+0";
var typing = "layout-module--typing--H+q2H";
var blinkCaret = "layout-module--blink-caret--Nr5YU";
var homeExamples = "layout-module--home-examples--jTZXc";
var homeExamplesHeading = "layout-module--home-examples-heading--RyFhC";
var homeExamplesItemContainer = "layout-module--home-examples-item-container--TCwMz";
var homeExamplesItem = "layout-module--home-examples-item--PCwLj";
var homeExamplesItemImage = "layout-module--home-examples-item-image--iMOTG";
var homeExamplesItemDescription = "layout-module--home-examples-item-description--hB0gF";
var homeCodeExamples = "layout-module--home-code-examples--M2yjH";
var homeDownload = "layout-module--home-download--7X-U1";
var homeDownloadHeading = "layout-module--home-download-heading---piSx";
var homeDownloadSubtext = "layout-module--home-download-subtext--7TOyL";
var homeAcknowledgements = "layout-module--home-acknowledgements--MtDe-";
var homeAcknowledgementsHeading = "layout-module--home-acknowledgements-heading--y3aGz";
var homeAcknowledgementsLogoContainer = "layout-module--home-acknowledgements-logo-container--k6g1c";
var homeGsocLogo = "layout-module--home-gsoc-logo--dSQ3n";
var homeProcessingLogo = "layout-module--home-processing-logo--d0Dwm";
var referenceContainer = "layout-module--reference-container--XIGz7";
var referenceSideBarContainer = "layout-module--reference-side-bar-container--2D8Lw";
var showSideBar = "layout-module--show-side-bar--puplZ";
var hideSideBar = "layout-module--hide-side-bar--47akr";
var referenceSideBar = "layout-module--reference-side-bar--Uzjy1";
var referenceSideBarButton = "layout-module--reference-side-bar-button--Zmjrb";
var referenceSideBarIcon = "layout-module--reference-side-bar-icon--3-ebl";
var sideBarHeading = "layout-module--side-bar-heading--LHmYs";
var sideBarItems = "layout-module--side-bar-items--X-pD8";
var sideBarSubHeading = "layout-module--side-bar-sub-heading--H5qE2";
var sideBarModelHeading = "layout-module--side-bar-model-heading--hDfte";
var sideBarIndex = "layout-module--side-bar-index--GmX4L";
var referenceContent = "layout-module--reference-content--mU787";
var downloadContent = "layout-module--download-content--P0+ar";
var aboutContent = "layout-module--about-content--4UU-R";


/***/ }),

/***/ 3040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HN": () => (/* binding */ B),
/* harmony export */   "Jv": () => (/* binding */ V)
/* harmony export */ });
/* unused harmony exports MainImage, Placeholder, generateImageData, getImage, getImageData, getLowResolutionImageURL, getSrc, getSrcSet, withArtDirection */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3072);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3204);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),u=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),d=function(e){return console.warn(e);},c=function(e,t){return e-t;},h=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function g(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function p(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,u=e.aspectRatio,d=e.formats,c=void 0===d?["auto","webp"]:d;return c=c.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:c,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!u&&(u=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(u||1.3333333333333333))):(r||(r=o&&u?o*u:s.width?s.width:o?Math.round(o/1.3333333333333333):800),u&&!o?o=Math.round(r/u):u||(u=r/o)),n({},e,{width:r,height:o,aspectRatio:u,layout:i,formats:c}));}function m(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=p(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function f(e){var t,a=(e=p(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,u=e.fit,c=e.options,m=e.width,f=e.height,b=e.filename,k=e.reporter,E=void 0===k?{warn:d}:k,M=e.backgroundColor,S=e.placeholderURL;if(a||E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=g(b)):i={width:m,height:f,format:(null==(t=i)?void 0:t.format)||g(b)||"auto"};var N=new Set(e.formats);(0===N.size||N.has("auto")||N.has(""))&&(N.delete("auto"),N.delete(""),N.add(i.format)),N.has("jpg")&&N.has("png")&&(E.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),N.delete("jpg"===i.format?"png":"jpg"));var x=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,u=void 0===o?{warn:d}:o,c=e.breakpoints,h=void 0===c?l:c,g=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(g.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+g.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.reporter,c=void 0===u?{warn:d}:u,h=a.width/a.height,g=v(void 0===l?s:l);if(i&&r){var p=y(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):800;var m=i;if(a.width<i||a.height<r){var f=a.width<i?"width":"height";c.warn("\nThe requested "+f+' "'+("width"===f?i:r)+'px" for the image '+t+" was larger than the actual image "+f+" of "+a[f]+"px. If possible, replace the current image with a larger one."),"width"===f?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:g.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}(e):"constrained"===i?w(e):"fullWidth"===i?w(n({breakpoints:h},e)):(u.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),I={sources:[]},W=e.sizes;W||(W=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}}(x.presentationWidth,o)),N.forEach(function(e){var t=x.sizes.map(function(t){var i=r(b,t,Math.round(t/x.aspectRatio),e,u,c);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;E.warn("["+a+"] The resolver for image "+b+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===x.unscaledWidth;})||t[0];i&&(I.fallback={src:i.src,srcSet:h(t),sizes:W});}else{var n;null==(n=I.sources)||n.push({srcSet:h(t),sizes:W,type:"image/"+e});}});var j={images:I,layout:o,backgroundColor:M};switch(S&&(j.placeholder={fallback:S}),o){case"fixed":j.width=x.presentationWidth,j.height=x.presentationHeight;break;case"fullWidth":j.width=1,j.height=1/x.aspectRatio;break;case"constrained":j.width=e.width||x.presentationWidth||1,j.height=(j.width||1)/x.aspectRatio;}return j;}var v=function(e){return Array.from(new Set([1].concat(e))).sort(c);};function w(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.breakpoints,d=e.layout,h=a.width/a.height,g=v(void 0===l?s:l);if(i&&r){var p=y(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(800,a.width))/h),i||(i=r*h);var m=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==u?void 0:u.length)>0?(t=u.filter(function(e){return e<=a.width;})).length<u.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==d||t.includes(i)||t.push(i),{sizes:t=t.sort(c),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}function y(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var b=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),k=(/* unused pure expression or super */ null && (["images","placeholder"]));function E(){return true&&true;}var M=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},S=function(e){var t,a,i;return null==(t=M(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},N=function(e){var t,a,i;return null==(t=M(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function x(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,d=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,b);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=u),f(n({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function I(e,t){var a,i,r,s=e.images,l=e.placeholder,u=n({},o(e,k),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=u.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=u.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=u.placeholder)||(r=i.sources).push.apply(r,l.sources)),u;}var W,j=["src","srcSet","loading","alt","shouldLoad"],R=["fallback","sources","shouldLoad"],_=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,u=t.shouldLoad,d=o(t,j);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",n({},d,{decoding:"async",loading:r,src:u?a:void 0,"data-src":u?void 0:a,srcSet:u?i:void 0,"data-srcset":u?void 0:i,alt:l}));},A=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,u=o(t,R),d=u.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_,n({},u,a,{sizes:d,shouldLoad:l}));return r.length?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:d});}),c):c;};_.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool},A.displayName="Picture",A.propTypes={alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string}),sources:prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired}),prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired})]))};var O=["fallback"],T=function(t){var a=t.fallback,i=o(t,O);return a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",n({},i));};T.displayName="Placeholder",T.propTypes={fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sources:null==(W=A.propTypes)?void 0:W.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var z=function(t){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A,n({},t)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A,n({},t,{shouldLoad:!0}))));};z.displayName="MainImage",z.propTypes=A.propTypes;var L=["children"],q=function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},C=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+i+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},D=function(a){var i=a.children,r=o(a,L);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C,n({},r)),i,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q,null));},P=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],H=["style","className"],F=function(e){return e.replace(/\n/g,"");},B=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,u=t.image,d=t.loading,c=void 0===d?"lazy":d,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,P);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=u.width,y=u.height,b=u.layout,k=u.images,M=u.placeholder,S=u.backgroundColor,N=function(e,t,a){var i={},r="gatsby-image-wrapper";return E()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(E()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),x=N.style,I=N.className,W=o(N,H),j={fallback:void 0,sources:[]};return k.fallback&&(j.fallback=n({},k.fallback,{srcSet:k.fallback.srcSet?F(k.fallback.srcSet):void 0})),k.sources&&(j.sources=k.sources.map(function(e){return n({},e,{srcSet:F(e.srcSet)});})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i,n({},W,{style:n({},x,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D,{layout:b,width:w,height:y},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(T,n({},function(e,t,a,i,r,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===a?(u.width=i,u.height=r,u.backgroundColor=o,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},u)});return E()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}(M,0,b,w,y,S,m,f))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),E()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,j,c,g)))));},G=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],V=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,G);return s&&console.warn(s),r?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(B),U=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},X=new Set(["fixed","fullWidth","constrained"]),Y={src:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),alt:function(e,t,a){return e.alt||""===e.alt?prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:U,height:U,sizes:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),layout:function(e){if(void 0!==e.layout&&!X.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};V.displayName="StaticImage",V.propTypes=Y;

/***/ }),

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3072);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9572);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3040);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3743);
const Layout=({children})=>{// get website title from gatsby-config.js
const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("3159585216");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:_layout_module_css__WEBPACK_IMPORTED_MODULE_2__/* .container */ .nC},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",null,data.site.siteMetadata.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__/* .StaticImage */ .Jv,{className:_layout_module_css__WEBPACK_IMPORTED_MODULE_2__/* .navLogo */ .W9,src:"../images/cm-kunika-logo.svg",alt:"Creative Machine Logo",__imageData:__webpack_require__(2548)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:_layout_module_css__WEBPACK_IMPORTED_MODULE_2__/* .navContainer */ .DZ},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:_layout_module_css__WEBPACK_IMPORTED_MODULE_2__/* .navLinks */ .FV},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{className:_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.navLinkItem},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/download",className:_layout_module_css__WEBPACK_IMPORTED_MODULE_2__/* .navLinkText */ .cP},"Download")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{className:_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.navLinkItem},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/reference/tutorial",className:_layout_module_css__WEBPACK_IMPORTED_MODULE_2__/* .navLinkText */ .cP},"Reference")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{className:_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.navLinkItem},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/about",className:_layout_module_css__WEBPACK_IMPORTED_MODULE_2__/* .navLinkText */ .cP},"About"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://github.com/jjeongin/creative-machine"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__/* .StaticImage */ .Jv,{className:_layout_module_css__WEBPACK_IMPORTED_MODULE_2__/* .navGithubLogo */ .Yk,src:"../images/GitHub-Mark-64px.png",alt:"GitHub Logo",__imageData:__webpack_require__(4939)})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",null,children));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 7610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ referenceTemplate)
});

// EXTERNAL MODULE: external "/Users/jlee/src/creative-machine-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(3072);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/layout.js
var layout = __webpack_require__(8678);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 5 modules
var gatsby_browser_entry = __webpack_require__(9572);
// EXTERNAL MODULE: ./src/components/layout.module.css
var layout_module = __webpack_require__(3743);
;// CONCATENATED MODULE: ./src/components/SideBar.js
const SideBar=()=>{return/*#__PURE__*/index_js_.createElement("ul",{className:layout_module/* referenceSideBar */.LL},/*#__PURE__*/index_js_.createElement("h1",{className:layout_module/* sideBarHeading */.ty},"Reference"),/*#__PURE__*/index_js_.createElement("div",{className:layout_module/* sideBarItems */.z9},/*#__PURE__*/index_js_.createElement("li",{className:layout_module/* sideBarIndex */.KV},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/reference/tutorial",className:layout_module.sideBarIndexLink},"\uD83E\uDD16 Tutorial")),/*#__PURE__*/index_js_.createElement("h2",{className:layout_module/* sideBarSubHeading */.L2},"\uD83D\uDCC1 Models"),/*#__PURE__*/index_js_.createElement("h3",{className:layout_module/* sideBarModelHeading */.G1},"\u25AB\uFE0F Computer Vision"),/*#__PURE__*/index_js_.createElement("li",{className:layout_module/* sideBarIndex */.KV},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/reference/models/object-detector",className:layout_module.sideBarIndexLink},"Object Detector")),/*#__PURE__*/index_js_.createElement("li",{className:layout_module/* sideBarIndex */.KV},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/reference/models/image-classifier",className:layout_module.sideBarIndexLink},"Image Classifier")),/*#__PURE__*/index_js_.createElement("li",{className:layout_module/* sideBarIndex */.KV},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/reference/models/pose-detector",className:layout_module.sideBarIndexLink},"Pose Detector")),/*#__PURE__*/index_js_.createElement("li",{className:layout_module/* sideBarIndex */.KV},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/reference/models/face-detector",className:layout_module.sideBarIndexLink},"Face Detector")),/*#__PURE__*/index_js_.createElement("h3",{className:layout_module/* sideBarModelHeading */.G1},"\u25AB\uFE0F Natural Language Processing"),/*#__PURE__*/index_js_.createElement("li",{className:layout_module/* sideBarIndex */.KV},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/reference/models/sentiment-analyzer",className:layout_module.sideBarIndexLink},"Sentiment Analyzer")),/*#__PURE__*/index_js_.createElement("h2",{className:layout_module/* sideBarSubHeading */.L2},"\uD83D\uDCC1 Objects"),/*#__PURE__*/index_js_.createElement("li",{className:layout_module/* sideBarIndex */.KV},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/reference/objects/ml-object",className:layout_module.sideBarIndexLink},"MLObject")),/*#__PURE__*/index_js_.createElement("li",{className:layout_module/* sideBarIndex */.KV},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/reference/objects/ml-label",className:layout_module.sideBarIndexLink},"MLLabel")),/*#__PURE__*/index_js_.createElement("li",{className:layout_module/* sideBarIndex */.KV},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/reference/objects/ml-keypoint",className:layout_module.sideBarIndexLink},"MLKeyPoint")),/*#__PURE__*/index_js_.createElement("li",{className:layout_module/* sideBarIndex */.KV},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/reference/objects/ml-pose",className:layout_module.sideBarIndexLink},"MLPose")),/*#__PURE__*/index_js_.createElement("li",{className:layout_module/* sideBarIndex */.KV},/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,{to:"/reference/objects/ml-face",className:layout_module.sideBarIndexLink},"MLFace"))));};/* harmony default export */ const components_SideBar = (SideBar);
;// CONCATENATED MODULE: ./src/templates/reference-page.js
function referenceTemplate({data}){// this prop will be injected by the GraphQL query below.
const{markdownRemark}=data;// data.markdownRemark holds your post data
const{frontmatter,html}=markdownRemark;return/*#__PURE__*/index_js_default().createElement(layout/* default */.Z,null,/*#__PURE__*/index_js_default().createElement("div",{className:layout_module/* referenceContainer */.Jn},/*#__PURE__*/index_js_default().createElement("div",{className:layout_module/* referenceSideBarContainer */.NT},/*#__PURE__*/index_js_default().createElement(components_SideBar,null)),/*#__PURE__*/index_js_default().createElement("div",{className:layout_module/* referenceContent */.ci,dangerouslySetInnerHTML:{__html:html}})));}const pageQuery="2058627228";

/***/ }),

/***/ 2548:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/creative-machine/static/43410be51679974b24d239753618f7f3/36d85/cm-kunika-logo.svg","srcSet":"/creative-machine/static/43410be51679974b24d239753618f7f3/6632a/cm-kunika-logo.svg 159w,\\n/creative-machine/static/43410be51679974b24d239753618f7f3/b7954/cm-kunika-logo.svg 318w,\\n/creative-machine/static/43410be51679974b24d239753618f7f3/36d85/cm-kunika-logo.svg 635w","sizes":"(min-width: 635px) 635px, 100vw"},"sources":[{"srcSet":"/creative-machine/static/43410be51679974b24d239753618f7f3/4fe68/cm-kunika-logo.webp 159w,\\n/creative-machine/static/43410be51679974b24d239753618f7f3/413df/cm-kunika-logo.webp 318w,\\n/creative-machine/static/43410be51679974b24d239753618f7f3/cc281/cm-kunika-logo.webp 635w","type":"image/webp","sizes":"(min-width: 635px) 635px, 100vw"}]},"width":635,"height":56.00000000000001}');

/***/ }),

/***/ 4939:
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/1c9ce/GitHub-Mark-64px.png","srcSet":"/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/fbc98/GitHub-Mark-64px.png 16w,\\n/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/914ee/GitHub-Mark-64px.png 32w,\\n/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/1c9ce/GitHub-Mark-64px.png 64w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/e789a/GitHub-Mark-64px.webp 16w,\\n/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/ef6ff/GitHub-Mark-64px.webp 32w,\\n/creative-machine/static/438c17272c5f0e9f4a6da34d3e4bc5bd/8257c/GitHub-Mark-64px.webp 64w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}');

/***/ })

};
;
//# sourceMappingURL=component---src-templates-reference-page-js.js.map