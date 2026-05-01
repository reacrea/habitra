import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as v,S as y,T as b,U as x,V as S,W as C,X as w,Y as T,Z as E,_ as D,at as O,b as ee,ct as k,et as A,g as j,h as te,it as ne,j as M,k as N,lt as P,m as re,nt as F,ot as I,p as ie,q as L,rt as ae,st as oe,tt as se,ut as ce,v as le,w as ue,x as de,y as R,z as fe}from"./index-gGlAZNfZ.js";var pe=!1,me=e=>e!=null,he=e=>e.filter(me);function ge(e){return(...t)=>{for(let n of e)n&&n(...t)}}var z=e=>typeof e==`function`&&!e.length?e():e,_e=e=>Array.isArray(e)?e:e?[e]:[];function ve(e,...t){return typeof e==`function`?e(...t):e}var ye=pe?e=>fe()?w(e):e:w;function be(e,t,n,r){let i=e.length,a=t.length,o=0;if(!a){for(;o<i;o++)n(e[o]);return}if(!i){for(;o<a;o++)r(t[o]);return}for(;o<a&&t[o]===e[o];o++);let s,c;t=t.slice(o),e=e.slice(o);for(s of t)e.includes(s)||r(s);for(c of e)t.includes(c)||n(c)}function xe(e){let[t,n]=m(),r=e?.throw?(e,t)=>{throw n(e instanceof Error?e:Error(t)),e}:(e,t)=>{n(e instanceof Error?e:Error(t))},i=e?.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),a=e?.prefix?`${e.prefix}.`:``,o=new Map,s=new Proxy({},{get(t,n){let s=o.get(n);s||(s=m(void 0,{equals:!1}),o.set(n,s)),s[0]();let c=i.reduce((e,t)=>{if(e!==null||!t)return e;try{return t.getItem(`${a}${n}`)}catch(e){return r(e,`Error reading ${a}${n} from ${t.name}`),null}},null);return c!==null&&e?.deserializer?e.deserializer(c,n,e.options):c}});return e?.sync!==!1&&E(()=>{let e=e=>{let t=!1;i.forEach(n=>{try{n!==e.storageArea&&e.key&&e.newValue!==n.getItem(e.key)&&(e.newValue?n.setItem(e.key,e.newValue):n.removeItem(e.key),t=!0)}catch(t){r(t,`Error synching api ${n.name} from storage event (${e.key}=${e.newValue})`)}}),t&&e.key&&o.get(e.key)?.[1]()};`addEventListener`in globalThis?(globalThis.addEventListener(`storage`,e),w(()=>globalThis.removeEventListener(`storage`,e))):(i.forEach(t=>t.addEventListener?.(`storage`,e)),w(()=>i.forEach(t=>t.removeEventListener?.(`storage`,e))))}),[s,(t,n,s)=>{let c=e?.serializer?e.serializer(n,t,s??e.options):n,l=`${a}${t}`;i.forEach(e=>{try{e.getItem(l)!==c&&e.setItem(l,c)}catch(n){r(n,`Error setting ${a}${t} to ${c} in ${e.name}`)}});let u=o.get(t);u&&u[1]()},{clear:()=>i.forEach(e=>{try{e.clear()}catch(t){r(t,`Error clearing ${e.name}`)}}),error:t,remove:e=>i.forEach(t=>{try{t.removeItem(`${a}${e}`)}catch(n){r(n,`Error removing ${a}${e} from ${t.name}`)}}),toJSON:()=>{let t={},n=(n,r)=>{if(!t.hasOwnProperty(n)){let i=r&&e?.deserializer?e.deserializer(r,n,e.options):r;i&&(t[n]=i)}};return i.forEach(e=>{if(typeof e.getAll==`function`){let t;try{t=e.getAll()}catch(t){r(t,`Error getting all values from in ${e.name}`)}for(let e of t)n(e,t[e])}else{let i=0,a;try{for(;a=e.key(i++);)t.hasOwnProperty(a)||n(a,e.getItem(a))}catch(t){r(t,`Error getting all values from ${e.name}`)}}}),t}}]}var Se=xe,Ce=e=>(typeof e.clear==`function`||(e.clear=()=>{let t;for(;t=e.key(0);)e.removeItem(t)}),e),we=e=>{if(!e)return``;let t=``;for(let n in e){if(!e.hasOwnProperty(n))continue;let r=e[n];t+=r instanceof Date?`; ${n}=${r.toUTCString()}`:typeof r==`boolean`?`; ${n}`:`; ${n}=${r}`}return t},B=Ce({_cookies:[globalThis.document,`cookie`],getItem:e=>B._cookies[0][B._cookies[1]].match(`(^|;)\\s*`+e+`\\s*=\\s*([^;]+)`)?.pop()??null,setItem:(e,t,n)=>{let r=B.getItem(e);B._cookies[0][B._cookies[1]]=`${e}=${t}${we(n)}`;let i=Object.assign(new Event(`storage`),{key:e,oldValue:r,newValue:t,url:globalThis.document.URL,storageArea:B});window.dispatchEvent(i)},removeItem:e=>{B._cookies[0][B._cookies[1]]=`${e}=deleted${we({expires:new Date(0)})}`},key:e=>{let t=null,n=0;return B._cookies[0][B._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(r,i)=>(!t&&i&&n++===e&&(t=i),``)),t},get length(){let e=0;return B._cookies[0][B._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,t=>(e+=+!!t,``)),e}}),Te=1024,Ee=796,De=700,Oe=`bottom-right`,ke=`bottom`,Ae=!1,je=500,Me=500,Ne=500,Pe=Object.keys(se)[0],Fe=1,Ie=Object.keys(u)[0],Le=h({client:void 0,onlineManager:void 0,queryFlavor:``,version:``,shadowDOMTarget:void 0});function V(){return P(Le)}var Re=class extends Error{},ze=h(void 0),Be=e=>{let[n,r]=m(null),i=()=>{let e=n();e!=null&&(e.close(),r(null))},s=(t,i)=>{if(n()!=null)return;let a=window.open(``,`TSQD-Devtools-Panel`,`width=${t},height=${i},popup`);if(!a)throw new Re(`Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.`);a.document.head.innerHTML=``,a.document.body.innerHTML=``,ue(a.document),a.document.title=`TanStack Query Devtools`,a.document.body.style.margin=`0`,a.addEventListener(`pagehide`,()=>{e.setLocalStore(`pip_open`,`false`),r(null)}),[...(V().shadowDOMTarget||document).styleSheets].forEach(e=>{try{let t=[...e.cssRules].map(e=>e.cssText).join(``),n=document.createElement(`style`),r=e.ownerNode,i=``;r&&`id`in r&&(i=r.id),i&&n.setAttribute(`id`,i),n.textContent=t,a.document.head.appendChild(n)}catch{let t=document.createElement(`link`);if(e.href==null)return;t.rel=`stylesheet`,t.type=e.type,t.media=e.media.toString(),t.href=e.href,a.document.head.appendChild(t)}}),o([`focusin`,`focusout`,`pointermove`,`keydown`,`pointerdown`,`pointerup`,`click`,`mousedown`,`input`],a.document),e.setLocalStore(`pip_open`,`true`),r(a)};N(()=>{if((e.localStore.pip_open??`false`)===`true`&&!e.disabled)try{s(Number(window.innerWidth),Number(e.localStore.height||Me))}catch(t){if(t instanceof Re){console.error(t.message),e.setLocalStore(`pip_open`,`false`),e.setLocalStore(`open`,`false`);return}throw t}}),N(()=>{let e=(V().shadowDOMTarget||document).querySelector(`#_goober`),t=n();if(e&&t){let n=new MutationObserver(()=>{let n=(V().shadowDOMTarget||t.document).querySelector(`#_goober`);n&&(n.textContent=e.textContent)});n.observe(e,{childList:!0,subtree:!0,characterDataOldValue:!0}),w(()=>{n.disconnect()})}});let c=t(()=>({pipWindow:n(),requestPipWindow:s,closePipWindow:i,disabled:e.disabled??!1}));return a(ze.Provider,{value:c,get children(){return e.children}})},Ve=()=>t(()=>{let e=P(ze);if(!e)throw Error(`usePiPWindow must be used within a PiPProvider`);return e()}),He=h(()=>`dark`);function H(){return P(He)}var Ue={À:`A`,Á:`A`,Â:`A`,Ã:`A`,Ä:`A`,Å:`A`,Ấ:`A`,Ắ:`A`,Ẳ:`A`,Ẵ:`A`,Ặ:`A`,Æ:`AE`,Ầ:`A`,Ằ:`A`,Ȃ:`A`,Ç:`C`,Ḉ:`C`,È:`E`,É:`E`,Ê:`E`,Ë:`E`,Ế:`E`,Ḗ:`E`,Ề:`E`,Ḕ:`E`,Ḝ:`E`,Ȇ:`E`,Ì:`I`,Í:`I`,Î:`I`,Ï:`I`,Ḯ:`I`,Ȋ:`I`,Ð:`D`,Ñ:`N`,Ò:`O`,Ó:`O`,Ô:`O`,Õ:`O`,Ö:`O`,Ø:`O`,Ố:`O`,Ṍ:`O`,Ṓ:`O`,Ȏ:`O`,Ù:`U`,Ú:`U`,Û:`U`,Ü:`U`,Ý:`Y`,à:`a`,á:`a`,â:`a`,ã:`a`,ä:`a`,å:`a`,ấ:`a`,ắ:`a`,ẳ:`a`,ẵ:`a`,ặ:`a`,æ:`ae`,ầ:`a`,ằ:`a`,ȃ:`a`,ç:`c`,ḉ:`c`,è:`e`,é:`e`,ê:`e`,ë:`e`,ế:`e`,ḗ:`e`,ề:`e`,ḕ:`e`,ḝ:`e`,ȇ:`e`,ì:`i`,í:`i`,î:`i`,ï:`i`,ḯ:`i`,ȋ:`i`,ð:`d`,ñ:`n`,ò:`o`,ó:`o`,ô:`o`,õ:`o`,ö:`o`,ø:`o`,ố:`o`,ṍ:`o`,ṓ:`o`,ȏ:`o`,ù:`u`,ú:`u`,û:`u`,ü:`u`,ý:`y`,ÿ:`y`,Ā:`A`,ā:`a`,Ă:`A`,ă:`a`,Ą:`A`,ą:`a`,Ć:`C`,ć:`c`,Ĉ:`C`,ĉ:`c`,Ċ:`C`,ċ:`c`,Č:`C`,č:`c`,C̆:`C`,c̆:`c`,Ď:`D`,ď:`d`,Đ:`D`,đ:`d`,Ē:`E`,ē:`e`,Ĕ:`E`,ĕ:`e`,Ė:`E`,ė:`e`,Ę:`E`,ę:`e`,Ě:`E`,ě:`e`,Ĝ:`G`,Ǵ:`G`,ĝ:`g`,ǵ:`g`,Ğ:`G`,ğ:`g`,Ġ:`G`,ġ:`g`,Ģ:`G`,ģ:`g`,Ĥ:`H`,ĥ:`h`,Ħ:`H`,ħ:`h`,Ḫ:`H`,ḫ:`h`,Ĩ:`I`,ĩ:`i`,Ī:`I`,ī:`i`,Ĭ:`I`,ĭ:`i`,Į:`I`,į:`i`,İ:`I`,ı:`i`,Ĳ:`IJ`,ĳ:`ij`,Ĵ:`J`,ĵ:`j`,Ķ:`K`,ķ:`k`,Ḱ:`K`,ḱ:`k`,K̆:`K`,k̆:`k`,Ĺ:`L`,ĺ:`l`,Ļ:`L`,ļ:`l`,Ľ:`L`,ľ:`l`,Ŀ:`L`,ŀ:`l`,Ł:`l`,ł:`l`,Ḿ:`M`,ḿ:`m`,M̆:`M`,m̆:`m`,Ń:`N`,ń:`n`,Ņ:`N`,ņ:`n`,Ň:`N`,ň:`n`,ŉ:`n`,N̆:`N`,n̆:`n`,Ō:`O`,ō:`o`,Ŏ:`O`,ŏ:`o`,Ő:`O`,ő:`o`,Œ:`OE`,œ:`oe`,P̆:`P`,p̆:`p`,Ŕ:`R`,ŕ:`r`,Ŗ:`R`,ŗ:`r`,Ř:`R`,ř:`r`,R̆:`R`,r̆:`r`,Ȓ:`R`,ȓ:`r`,Ś:`S`,ś:`s`,Ŝ:`S`,ŝ:`s`,Ş:`S`,Ș:`S`,ș:`s`,ş:`s`,Š:`S`,š:`s`,Ţ:`T`,ţ:`t`,ț:`t`,Ț:`T`,Ť:`T`,ť:`t`,Ŧ:`T`,ŧ:`t`,T̆:`T`,t̆:`t`,Ũ:`U`,ũ:`u`,Ū:`U`,ū:`u`,Ŭ:`U`,ŭ:`u`,Ů:`U`,ů:`u`,Ű:`U`,ű:`u`,Ų:`U`,ų:`u`,Ȗ:`U`,ȗ:`u`,V̆:`V`,v̆:`v`,Ŵ:`W`,ŵ:`w`,Ẃ:`W`,ẃ:`w`,X̆:`X`,x̆:`x`,Ŷ:`Y`,ŷ:`y`,Ÿ:`Y`,Y̆:`Y`,y̆:`y`,Ź:`Z`,ź:`z`,Ż:`Z`,ż:`z`,Ž:`Z`,ž:`z`,ſ:`s`,ƒ:`f`,Ơ:`O`,ơ:`o`,Ư:`U`,ư:`u`,Ǎ:`A`,ǎ:`a`,Ǐ:`I`,ǐ:`i`,Ǒ:`O`,ǒ:`o`,Ǔ:`U`,ǔ:`u`,Ǖ:`U`,ǖ:`u`,Ǘ:`U`,ǘ:`u`,Ǚ:`U`,ǚ:`u`,Ǜ:`U`,ǜ:`u`,Ứ:`U`,ứ:`u`,Ṹ:`U`,ṹ:`u`,Ǻ:`A`,ǻ:`a`,Ǽ:`AE`,ǽ:`ae`,Ǿ:`O`,ǿ:`o`,Þ:`TH`,þ:`th`,Ṕ:`P`,ṕ:`p`,Ṥ:`S`,ṥ:`s`,X́:`X`,x́:`x`,Ѓ:`Г`,ѓ:`г`,Ќ:`К`,ќ:`к`,A̋:`A`,a̋:`a`,E̋:`E`,e̋:`e`,I̋:`I`,i̋:`i`,Ǹ:`N`,ǹ:`n`,Ồ:`O`,ồ:`o`,Ṑ:`O`,ṑ:`o`,Ừ:`U`,ừ:`u`,Ẁ:`W`,ẁ:`w`,Ỳ:`Y`,ỳ:`y`,Ȁ:`A`,ȁ:`a`,Ȅ:`E`,ȅ:`e`,Ȉ:`I`,ȉ:`i`,Ȍ:`O`,ȍ:`o`,Ȑ:`R`,ȑ:`r`,Ȕ:`U`,ȕ:`u`,B̌:`B`,b̌:`b`,Č̣:`C`,č̣:`c`,Ê̌:`E`,ê̌:`e`,F̌:`F`,f̌:`f`,Ǧ:`G`,ǧ:`g`,Ȟ:`H`,ȟ:`h`,J̌:`J`,ǰ:`j`,Ǩ:`K`,ǩ:`k`,M̌:`M`,m̌:`m`,P̌:`P`,p̌:`p`,Q̌:`Q`,q̌:`q`,Ř̩:`R`,ř̩:`r`,Ṧ:`S`,ṧ:`s`,V̌:`V`,v̌:`v`,W̌:`W`,w̌:`w`,X̌:`X`,x̌:`x`,Y̌:`Y`,y̌:`y`,A̧:`A`,a̧:`a`,B̧:`B`,b̧:`b`,Ḑ:`D`,ḑ:`d`,Ȩ:`E`,ȩ:`e`,Ɛ̧:`E`,ɛ̧:`e`,Ḩ:`H`,ḩ:`h`,I̧:`I`,i̧:`i`,Ɨ̧:`I`,ɨ̧:`i`,M̧:`M`,m̧:`m`,O̧:`O`,o̧:`o`,Q̧:`Q`,q̧:`q`,U̧:`U`,u̧:`u`,X̧:`X`,x̧:`x`,Z̧:`Z`,z̧:`z`},We=Object.keys(Ue).join(`|`),Ge=new RegExp(We,`g`);function Ke(e){return e.replace(Ge,e=>Ue[e])}var qe={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function Je(e,t,n){if(n||={},n.threshold=n.threshold??qe.MATCHES,!n.accessors){let r=Ye(e,t,n);return{rankedValue:e,rank:r,accessorIndex:-1,accessorThreshold:n.threshold,passed:r>=n.threshold}}let r=et(e,n.accessors),i={rankedValue:e,rank:qe.NO_MATCH,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let e=0;e<r.length;e++){let a=r[e],o=Ye(a.itemValue,t,n),{minRanking:s,maxRanking:c,threshold:l=n.threshold}=a.attributes;o<s&&o>=qe.MATCHES?o=s:o>c&&(o=c),o=Math.min(o,c),o>=l&&o>i.rank&&(i.rank=o,i.passed=!0,i.accessorIndex=e,i.accessorThreshold=l,i.rankedValue=a.itemValue)}return i}function Ye(e,t,n){return e=Qe(e,n),t=Qe(t,n),t.length>e.length?qe.NO_MATCH:e===t?qe.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?qe.EQUAL:e.startsWith(t)?qe.STARTS_WITH:e.includes(` ${t}`)?qe.WORD_STARTS_WITH:e.includes(t)?qe.CONTAINS:t.length===1?qe.NO_MATCH:Xe(e).includes(t)?qe.ACRONYM:Ze(e,t))}function Xe(e){let t=``;return e.split(` `).forEach(e=>{e.split(`-`).forEach(e=>{t+=e.substr(0,1)})}),t}function Ze(e,t){let n=0,r=0;function i(e,t,r){for(let i=r,a=t.length;i<a;i++)if(t[i]===e)return n+=1,i+1;return-1}function a(e){let r=1/e,i=n/t.length;return qe.MATCHES+i*r}let o=i(t[0],e,0);if(o<0)return qe.NO_MATCH;r=o;for(let n=1,a=t.length;n<a;n++){let a=t[n];if(r=i(a,e,r),!(r>-1))return qe.NO_MATCH}return a(r-o)}function Qe(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=Ke(e)),e}function $e(e,t){let n=t;typeof t==`object`&&(n=t.accessor);let r=n(e);return r==null?[]:Array.isArray(r)?r:[String(r)]}function et(e,t){let n=[];for(let r=0,i=t.length;r<i;r++){let i=t[r],a=nt(i),o=$e(e,i);for(let e=0,t=o.length;e<t;e++)n.push({itemValue:o[e],attributes:a})}return n}var tt={maxRanking:1/0,minRanking:-1/0};function nt(e){return typeof e==`function`?tt:{...tt,...e}}var rt={data:``},it=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||rt},at=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ot=/\/\*[^]*?\*\/|  +/g,st=/\n+/g,ct=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?ct(o,a):a+`{`+ct(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=ct(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=ct.p?ct.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},lt={},ut=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+ut(e[n]);return t}return e},dt=(e,t,n,r,i)=>{let a=ut(e),o=lt[a]||(lt[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!lt[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=at.exec(e.replace(ot,``));)t[4]?r.shift():t[3]?(n=t[3].replace(st,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(st,` `).trim();return r[0]})(e):e;lt[o]=ct(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&lt.g?lt.g:null;return n&&(lt.g=lt[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(lt[o],t,r,s),o},ft=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:ct(e,``):!1===e?``:e}return e+r+(a??``)},``);function U(e){let t=this||{},n=e.call?e(t.p):e;return dt(n.unshift?n.raw?ft(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,it(t.target),t.g,t.o,t.k)}U.bind({g:1}),U.bind({k:1});function pt(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=pt(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function W(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=pt(e))&&(r&&(r+=` `),r+=t);return r}function mt(e,n){let r=I(e),{onChange:i}=n,a=new Set(n.appear?void 0:r),o=new WeakSet,[s,c]=m([],{equals:!1}),[l]=ce(),u=e=>{c(t=>(t.push.apply(t,e),t));for(let t of e)o.delete(t)},d=(e,t,n)=>e.splice(n,0,t);return t(t=>{let n=s(),r=e();if(r[ie],I(l))return l(),t;if(n.length){let e=t.filter(e=>!n.includes(e));return n.length=0,i({list:e,added:[],removed:[],unchanged:e,finishRemoved:u}),e}return I(()=>{let e=new Set(r),n=r.slice(),s=[],c=[],l=[];for(let e of r)(a.has(e)?l:s).push(e);let f=!s.length;for(let r=0;r<t.length;r++){let i=t[r];e.has(i)||(o.has(i)||(c.push(i),o.add(i)),d(n,i,r)),f&&i!==n[r]&&(f=!1)}return!c.length&&f?t:(i({list:n,added:s,removed:c,unchanged:l,finishRemoved:u}),a=e,n)})},n.appear?[]:r.slice())}function ht(...e){return ge(e)}var gt=e=>e instanceof Element;function _t(e,t){if(t(e))return e;if(typeof e==`function`&&!e.length)return _t(e(),t);if(Array.isArray(e)){let n=[];for(let r of e){let e=_t(r,t);e&&(Array.isArray(e)?n.push.apply(n,e):n.push(e))}return n.length?n:null}return null}function vt(e,n=gt,r=gt){let i=t(e),a=t(()=>_t(i(),n));return a.toArray=()=>{let e=a();return Array.isArray(e)?e:e?[e]:[]},a}function yt(e){return t(()=>{let t=e.name||`s`;return{enterActive:(e.enterActiveClass||t+`-enter-active`).split(` `),enter:(e.enterClass||t+`-enter`).split(` `),enterTo:(e.enterToClass||t+`-enter-to`).split(` `),exitActive:(e.exitActiveClass||t+`-exit-active`).split(` `),exit:(e.exitClass||t+`-exit`).split(` `),exitTo:(e.exitToClass||t+`-exit-to`).split(` `),move:(e.moveClass||t+`-move`).split(` `)}})}function bt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function xt(e,t,n,r){let{onBeforeEnter:i,onEnter:a,onAfterEnter:o}=t;i?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r?.();a?.(n,()=>s())}),bt(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!a||a.length<2)&&(n.addEventListener(`transitionend`,s),n.addEventListener(`animationend`,s))});function s(t){(!t||t.target===n)&&(n.removeEventListener(`transitionend`,s),n.removeEventListener(`animationend`,s),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),o?.(n))}}function St(e,t,n,r){let{onBeforeExit:i,onExit:a,onAfterExit:o}=t;if(!n.parentNode)return r?.();i?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),a?.(n,()=>s()),bt(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!a||a.length<2)&&(n.addEventListener(`transitionend`,s),n.addEventListener(`animationend`,s))});function s(t){(!t||t.target===n)&&(r?.(),n.removeEventListener(`transitionend`,s),n.removeEventListener(`animationend`,s),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),o?.(n))}}var Ct=e=>{let t=yt(e);return mt(vt(()=>e.children).toArray,{appear:e.appear,onChange({added:n,removed:r,finishRemoved:i,list:a}){let o=t();for(let t of n)xt(o,e,t);let s=[];for(let e of a)e.isConnected&&(e instanceof HTMLElement||e instanceof SVGElement)&&s.push({el:e,rect:e.getBoundingClientRect()});queueMicrotask(()=>{let e=[];for(let{el:t,rect:n}of s)if(t.isConnected){let r=t.getBoundingClientRect(),i=n.left-r.left,a=n.top-r.top;(i||a)&&(t.style.transform=`translate(${i}px, ${a}px)`,t.style.transitionDuration=`0s`,e.push(t))}document.body.offsetHeight;for(let t of e){let e=function(n){(n.target===t||/transform$/.test(n.propertyName))&&(t.removeEventListener(`transitionend`,e),t.classList.remove(...o.move))};t.classList.add(...o.move),t.style.transform=t.style.transitionDuration=``,t.addEventListener(`transitionend`,e)}});for(let t of r)St(o,e,t,()=>i([t]))}})},wt=Symbol(`fallback`);function Tt(e){for(let t of e)t.dispose()}function Et(e,t,n,r={}){let i=new Map;return w(()=>Tt(i.values())),()=>{let n=e()||[];return n[ie],I(()=>{if(!n.length)return Tt(i.values()),i.clear(),r.fallback?[p(e=>(i.set(wt,{dispose:e}),r.fallback()))]:[];let e=Array(n.length),o=i.get(wt);if(!i.size||o){o?.dispose(),i.delete(wt);for(let r=0;r<n.length;r++){let i=n[r],o=t(i,r);a(e,i,r,o)}return e}let s=new Set(i.keys());for(let r=0;r<n.length;r++){let o=n[r],c=t(o,r);s.delete(c);let l=i.get(c);l?(e[r]=l.mapped,l.setIndex?.(r),l.setItem(()=>o)):a(e,o,r,c)}for(let e of s)i.get(e)?.dispose(),i.delete(e);return e})};function a(e,t,r,a){p(o=>{let[s,c]=m(t),l={setItem:c,dispose:o};if(n.length>1){let[e,t]=m(r);l.setIndex=t,l.mapped=n(s,e)}else l.mapped=n(s);i.set(a,l),e[r]=l.mapped})}}function Dt(e){let{by:n}=e;return t(Et(()=>e.each,typeof n==`function`?n:e=>e[n],e.children,`fallback`in e?{fallback:()=>e.fallback}:void 0))}function Ot(e,t,n,r){return e.addEventListener(t,n,r),ye(e.removeEventListener.bind(e,t,n,r))}function kt(e,t,n,r){let i=()=>{_e(z(e)).forEach(e=>{e&&_e(z(t)).forEach(t=>Ot(e,t,n,r))})};typeof e==`function`?N(i):M(i)}function At(e,t){let n=new ResizeObserver(e);return w(n.disconnect.bind(n)),{observe:e=>n.observe(e,t),unobserve:n.unobserve.bind(n)}}function jt(e,t,n){let r=new WeakMap,{observe:i,unobserve:a}=At(e=>{for(let n of e){let{contentRect:e,target:i}=n,a=Math.round(e.width),o=Math.round(e.height),s=r.get(i);(!s||s.width!==a||s.height!==o)&&(t(e,i,n),r.set(i,{width:a,height:o}))}},n);N(t=>{let n=he(_e(z(e)));return be(n,t,i,a),n},[])}var Mt=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Nt(e){let t={},n;for(;n=Mt.exec(e);)t[n[1]]=n[2];return t}function Pt(e,t){if(typeof e==`string`){if(typeof t==`string`)return`${e};${t}`;e=Nt(e)}else typeof t==`string`&&(t=Nt(t));return{...e,...t}}function Ft(e,t,n=-1){return n in e?[...e.slice(0,n),t,...e.slice(n)]:[...e,t]}function It(e,t){let n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Lt(e){return typeof e==`number`}function Rt(e){return Object.prototype.toString.call(e)===`[object String]`}function zt(e){return typeof e==`function`}function Bt(e){return t=>`${e()}-${t}`}function Vt(e,t){return e?e===t||e.contains(t):!1}function Ht(e,t=!1){let{activeElement:n}=Wt(e);if(!n?.nodeName)return null;if(Gt(n)&&n.contentDocument)return Ht(n.contentDocument.body,t);if(t){let e=n.getAttribute(`aria-activedescendant`);if(e){let t=Wt(n).getElementById(e);if(t)return t}}return n}function Ut(e){return Wt(e).defaultView||window}function Wt(e){return e?e.ownerDocument||e:document}function Gt(e){return e.tagName===`IFRAME`}var Kt=(e=>(e.Escape=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`,e.Space=` `,e.ArrowDown=`ArrowDown`,e.ArrowLeft=`ArrowLeft`,e.ArrowRight=`ArrowRight`,e.ArrowUp=`ArrowUp`,e.End=`End`,e.Home=`Home`,e.PageDown=`PageDown`,e.PageUp=`PageUp`,e))(Kt||{});function qt(e){return typeof window<`u`&&window.navigator!=null?e.test(window.navigator.userAgentData?.platform||window.navigator.platform):!1}function Jt(){return qt(/^Mac/i)}function Yt(){return qt(/^iPhone/i)}function Xt(){return qt(/^iPad/i)||Jt()&&navigator.maxTouchPoints>1}function Zt(){return Yt()||Xt()}function Qt(){return Jt()||Zt()}function G(e,t){return t&&(zt(t)?t(e):t[0](t[1],e)),e?.defaultPrevented}function K(e){return t=>{for(let n of e)G(t,n)}}function $t(e){return Jt()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function q(e){if(e)if(tn())e.focus({preventScroll:!0});else{let t=nn(e);e.focus(),rn(t)}}var en=null;function tn(){if(en==null){en=!1;try{document.createElement(`div`).focus({get preventScroll(){return en=!0,!0}})}catch{}}return en}function nn(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function rn(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}var an=[`input:not([type='hidden']):not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`button:not([disabled])`,`a[href]`,`area[href]`,`[tabindex]`,`iframe`,`object`,`embed`,`audio[controls]`,`video[controls]`,`[contenteditable]:not([contenteditable='false'])`],on=[...an,`[tabindex]:not([tabindex="-1"]):not([disabled])`],sn=`${an.join(`:not([hidden]),`)},[tabindex]:not([disabled]):not([hidden])`,cn=on.join(`:not([hidden]):not([tabindex="-1"]),`);function ln(e,t){let n=Array.from(e.querySelectorAll(sn)).filter(un);return t&&un(e)&&n.unshift(e),n.forEach((e,t)=>{if(Gt(e)&&e.contentDocument){let r=e.contentDocument.body,i=ln(r,!1);n.splice(t,1,...i)}}),n}function un(e){return dn(e)&&!fn(e)}function dn(e){return e.matches(sn)&&pn(e)}function fn(e){return Number.parseInt(e.getAttribute(`tabindex`)||`0`,10)<0}function pn(e,t){return e.nodeName!==`#comment`&&mn(e)&&hn(e,t)&&(!e.parentElement||pn(e.parentElement,e))}function mn(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r=t!==`none`&&n!==`hidden`&&n!==`collapse`;if(r){if(!e.ownerDocument.defaultView)return r;let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:i}=t(e);r=n!==`none`&&i!==`hidden`&&i!==`collapse`}return r}function hn(e,t){return!e.hasAttribute(`hidden`)&&(e.nodeName===`DETAILS`&&t&&t.nodeName!==`SUMMARY`?e.hasAttribute(`open`):!0)}function gn(e,t,n){let r=t?.tabbable?cn:sn,i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){return t?.from?.contains(e)?NodeFilter.FILTER_REJECT:e.matches(r)&&pn(e)&&(!t?.accept||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t?.from&&(i.currentNode=t.from),i}function _n(e){let t=e;for(;t&&!vn(t);)t=t.parentElement;return t||document.scrollingElement||document.documentElement}function vn(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function yn(){}function bn(e,t){let[n,r]=e,i=!1,a=t.length;for(let e=a,o=0,s=e-1;o<e;s=o++){let[a,c]=t[o],[l,u]=t[s],[,d]=t[s===0?e-1:s-1]||[0,0],f=(c-u)*(n-a)-(a-l)*(r-c);if(u<c){if(r>=u&&r<c){if(f===0)return!0;f>0&&(r===u?r>d&&(i=!i):i=!i)}}else if(c<u){if(r>c&&r<=u){if(f===0)return!0;f<0&&(r===u?r<d&&(i=!i):i=!i)}}else if(r===c&&(n>=l&&n<=a||n>=a&&n<=l))return!0}return i}function J(e,t){return L(e,t)}var xn=new Map,Sn=new Set;function Cn(){if(typeof window>`u`)return;let e=e=>{if(!e.target)return;let n=xn.get(e.target);n||(n=new Set,xn.set(e.target,n),e.target.addEventListener(`transitioncancel`,t)),n.add(e.propertyName)},t=e=>{if(!e.target)return;let n=xn.get(e.target);if(n&&(n.delete(e.propertyName),n.size===0&&(e.target.removeEventListener(`transitioncancel`,t),xn.delete(e.target)),xn.size===0)){for(let e of Sn)e();Sn.clear()}};document.body.addEventListener(`transitionrun`,e),document.body.addEventListener(`transitionend`,t)}typeof document<`u`&&(document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,Cn):Cn());function wn(e,t){let n=Tn(e,t,`left`),r=Tn(e,t,`top`),i=t.offsetWidth,a=t.offsetHeight,o=e.scrollLeft,s=e.scrollTop,c=o+e.offsetWidth,l=s+e.offsetHeight;n<=o?o=n:n+i>c&&(o+=n+i-c),r<=s?s=r:r+a>l&&(s+=r+a-l),e.scrollLeft=o,e.scrollTop=s}function Tn(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){i-=e[r];break}t=t.offsetParent}return i}function En(e,t){if(document.contains(e)){let t=document.scrollingElement||document.documentElement;if(window.getComputedStyle(t).overflow!==`hidden`){let{left:t,top:n}=e.getBoundingClientRect();e?.scrollIntoView?.({block:`nearest`});let{left:r,top:i}=e.getBoundingClientRect();(Math.abs(t-r)>1||Math.abs(n-i)>1)&&e.scrollIntoView?.({block:`nearest`})}else{let n=_n(e);for(;e&&n&&e!==t&&n!==t;)wn(n,e),e=n,n=_n(e)}}}var Dn={border:`0`,clip:`rect(0 0 0 0)`,"clip-path":`inset(50%)`,height:`1px`,margin:`0 -1px -1px 0`,overflow:`hidden`,padding:`0`,position:`absolute`,width:`1px`,"white-space":`nowrap`};function On(e,t){let[n,r]=m(kn(t?.()));return N(()=>{r(e()?.tagName.toLowerCase()||kn(t?.()))}),n}function kn(e){return Rt(e)?e:void 0}function Y(e){let[t,n]=F(e,[`as`]);if(!t.as)throw Error("[kobalte]: Polymorphic is missing the required `as` prop.");return a(re,L(n,{get component(){return t.as}}))}var An=Object.defineProperty,jn=(e,t)=>{for(var n in t)An(e,n,{get:t[n],enumerable:!0})};jn({},{Button:()=>Fn,Root:()=>Pn});var Mn=[`button`,`color`,`file`,`image`,`reset`,`submit`];function Nn(e){let t=e.tagName.toLowerCase();return t===`button`?!0:t===`input`&&e.type?Mn.indexOf(e.type)!==-1:!1}function Pn(e){let n,[r,i]=F(J({type:`button`},e),[`ref`,`type`,`disabled`]),o=On(()=>n,()=>`button`),s=t(()=>{let e=o();return e==null?!1:Nn({tagName:e,type:r.type})}),c=t(()=>o()===`input`),l=t(()=>o()===`a`&&n?.getAttribute(`href`)!=null);return a(Y,L({as:`button`,ref(e){let t=ht(e=>n=e,r.ref);typeof t==`function`&&t(e)},get type(){return s()||c()?r.type:void 0},get role(){return!s()&&!l()?`button`:void 0},get tabIndex(){return!s()&&!l()&&!r.disabled?0:void 0},get disabled(){return s()||c()?r.disabled:void 0},get"aria-disabled"(){return!s()&&!c()&&r.disabled?!0:void 0},get"data-disabled"(){return r.disabled?``:void 0}},i))}var Fn=Pn;function In(e){let[n,r]=m(e.defaultValue?.()),i=t(()=>e.value?.()!==void 0),a=t(()=>i()?e.value?.():n());return[a,t=>{I(()=>{let n=ve(t,a());return Object.is(n,a())||(i()||r(n),e.onChange?.(n)),n})}]}function Ln(e){let[t,n]=In(e);return[()=>t()??!1,n]}function Rn(e){let[t,n]=In(e);return[()=>t()??[],n]}function zn(e={}){let[t,n]=Ln({value:()=>z(e.isSelected),defaultValue:()=>!!z(e.defaultIsSelected),onChange:t=>e.onSelectedChange?.(t)});return{isSelected:t,setIsSelected:t=>{!z(e.isReadOnly)&&!z(e.isDisabled)&&n(t)},toggle:()=>{!z(e.isReadOnly)&&!z(e.isDisabled)&&n(!t())}}}function Bn(e){let t=e.startIndex??0,n=e.startLevel??0,r=[],i=t=>{if(t==null)return``;let n=e.getKey??`key`,r=Rt(n)?t[n]:n(t);return r==null?``:String(r)},a=t=>{if(t==null)return``;let n=e.getTextValue??`textValue`,r=Rt(n)?t[n]:n(t);return r==null?``:String(r)},o=t=>{if(t==null)return!1;let n=e.getDisabled??`disabled`;return(Rt(n)?t[n]:n(t))??!1},s=t=>{if(t!=null)return Rt(e.getSectionChildren)?t[e.getSectionChildren]:e.getSectionChildren?.(t)};for(let c of e.dataSource){if(Rt(c)||Lt(c)){r.push({type:`item`,rawValue:c,key:String(c),textValue:String(c),disabled:o(c),level:n,index:t}),t++;continue}if(s(c)!=null){r.push({type:`section`,rawValue:c,key:``,textValue:``,disabled:!1,level:n,index:t}),t++;let i=s(c)??[];if(i.length>0){let a=Bn({dataSource:i,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:t,startLevel:n+1});r.push(...a),t+=a.length}}else r.push({type:`item`,rawValue:c,key:i(c),textValue:a(c),disabled:o(c),level:n,index:t}),t++}return r}function Vn(e,n=[]){return t(()=>{let t=Bn({dataSource:z(e.dataSource),getKey:z(e.getKey),getTextValue:z(e.getTextValue),getDisabled:z(e.getDisabled),getSectionChildren:z(e.getSectionChildren)});for(let e=0;e<n.length;e++)n[e]();return e.factory(t)})}var Hn=new Set([`Avst`,`Arab`,`Armi`,`Syrc`,`Samr`,`Mand`,`Thaa`,`Mend`,`Nkoo`,`Adlm`,`Rohg`,`Hebr`]),Un=new Set([`ae`,`ar`,`arc`,`bcc`,`bqi`,`ckb`,`dv`,`fa`,`glk`,`he`,`ku`,`mzn`,`nqo`,`pnb`,`ps`,`sd`,`ug`,`ur`,`yi`]);function Wn(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize().script??``;return Hn.has(t)}let t=e.split(`-`)[0];return Un.has(t)}function Gn(e){return Wn(e)?`rtl`:`ltr`}function Kn(){let e=typeof navigator<`u`&&(navigator.language||navigator.userLanguage)||`en-US`;return{locale:e,direction:Gn(e)}}var qn=Kn(),Jn=new Set;function Yn(){qn=Kn();for(let e of Jn)e(qn)}function Xn(){let[e,n]=m(qn),r=t(()=>e());return E(()=>{Jn.size===0&&window.addEventListener(`languagechange`,Yn),Jn.add(n),w(()=>{Jn.delete(n),Jn.size===0&&window.removeEventListener(`languagechange`,Yn)})}),{locale:()=>r().locale,direction:()=>r().direction}}var Zn=h();function Qn(){let e=Xn();return P(Zn)||e}var $n=new Map;function er(e){let{locale:n}=Qn(),r=t(()=>n()+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():``));return t(()=>{let t=r(),i;return $n.has(t)&&(i=$n.get(t)),i||(i=new Intl.Collator(n(),e),$n.set(t,i)),i})}var tr=class e extends Set{anchorKey;currentKey;constructor(t,n,r){super(t),t instanceof e?(this.anchorKey=n||t.anchorKey,this.currentKey=r||t.currentKey):(this.anchorKey=n,this.currentKey=r)}};function nr(e){let[t,n]=In(e);return[()=>t()??new tr,n]}function rr(e){return Qt()?e.altKey:e.ctrlKey}function ir(e){return Jt()?e.metaKey:e.ctrlKey}function ar(e){return new tr(e)}function or(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function sr(e){let n=J({selectionMode:`none`,selectionBehavior:`toggle`},e),[r,i]=m(!1),[a,o]=m(),[s,c]=nr({value:t(()=>{let e=z(n.selectedKeys);return e==null?e:ar(e)}),defaultValue:t(()=>{let e=z(n.defaultSelectedKeys);return e==null?new tr:ar(e)}),onChange:e=>n.onSelectionChange?.(e)}),[l,u]=m(z(n.selectionBehavior));return N(()=>{let e=s();z(n.selectionBehavior)===`replace`&&l()===`toggle`&&typeof e==`object`&&e.size===0&&u(`replace`)}),N(()=>{u(z(n.selectionBehavior)??`toggle`)}),{selectionMode:()=>z(n.selectionMode),disallowEmptySelection:()=>z(n.disallowEmptySelection)??!1,selectionBehavior:l,setSelectionBehavior:u,isFocused:r,setFocused:i,focusedKey:a,setFocusedKey:o,selectedKeys:s,setSelectedKeys:e=>{(z(n.allowDuplicateSelectionEvents)||!or(e,s()))&&c(e)}}}function cr(e){let[t,n]=m(``),[r,i]=m(-1);return{typeSelectHandlers:{onKeyDown:a=>{if(z(e.isDisabled))return;let o=z(e.keyboardDelegate),s=z(e.selectionManager);if(!o.getKeyForSearch)return;let c=lr(a.key);if(!c||a.ctrlKey||a.metaKey)return;c===` `&&t().trim().length>0&&(a.preventDefault(),a.stopPropagation());let l=n(e=>e+c),u=o.getKeyForSearch(l,s.focusedKey())??o.getKeyForSearch(l);u==null&&ur(l)&&(l=l[0],u=o.getKeyForSearch(l,s.focusedKey())??o.getKeyForSearch(l)),u!=null&&(s.setFocusedKey(u),e.onTypeSelect?.(u)),clearTimeout(r()),i(window.setTimeout(()=>n(``),500))}}}}function lr(e){return e.length===1||!/^[A-Z]/i.test(e)?e:``}function ur(e){return e.split(``).every(t=>t===e[0])}function dr(e,n,r){let i=L({selectOnFocus:()=>z(e.selectionManager).selectionBehavior()===`replace`},e),a=()=>n(),{direction:o}=Qn(),s={top:0,left:0};kt(()=>z(i.isVirtualized)?void 0:a(),`scroll`,()=>{let e=a();e&&(s={top:e.scrollTop,left:e.scrollLeft})});let{typeSelectHandlers:c}=cr({isDisabled:()=>z(i.disallowTypeAhead),keyboardDelegate:()=>z(i.keyboardDelegate),selectionManager:()=>z(i.selectionManager)}),l=()=>z(i.orientation)??`vertical`,u=e=>{G(e,c.onKeyDown),e.altKey&&e.key===`Tab`&&e.preventDefault();let t=n();if(!t?.contains(e.target))return;let r=z(i.selectionManager),a=z(i.selectOnFocus),s=t=>{t!=null&&(r.setFocusedKey(t),e.shiftKey&&r.selectionMode()===`multiple`?r.extendSelection(t):a&&!rr(e)&&r.replaceSelection(t))},u=z(i.keyboardDelegate),d=z(i.shouldFocusWrap),f=r.focusedKey();switch(e.key){case l()===`vertical`?`ArrowDown`:`ArrowRight`:if(u.getKeyBelow){e.preventDefault();let t;t=f==null?u.getFirstKey?.():u.getKeyBelow(f),t==null&&d&&(t=u.getFirstKey?.(f)),s(t)}break;case l()===`vertical`?`ArrowUp`:`ArrowLeft`:if(u.getKeyAbove){e.preventDefault();let t;t=f==null?u.getLastKey?.():u.getKeyAbove(f),t==null&&d&&(t=u.getLastKey?.(f)),s(t)}break;case l()===`vertical`?`ArrowLeft`:`ArrowUp`:if(u.getKeyLeftOf){e.preventDefault();let t=o()===`rtl`,n;n=f==null?t?u.getFirstKey?.():u.getLastKey?.():u.getKeyLeftOf(f),s(n)}break;case l()===`vertical`?`ArrowRight`:`ArrowDown`:if(u.getKeyRightOf){e.preventDefault();let t=o()===`rtl`,n;n=f==null?t?u.getLastKey?.():u.getFirstKey?.():u.getKeyRightOf(f),s(n)}break;case`Home`:if(u.getFirstKey){e.preventDefault();let t=u.getFirstKey(f,ir(e));t!=null&&(r.setFocusedKey(t),ir(e)&&e.shiftKey&&r.selectionMode()===`multiple`?r.extendSelection(t):a&&r.replaceSelection(t))}break;case`End`:if(u.getLastKey){e.preventDefault();let t=u.getLastKey(f,ir(e));t!=null&&(r.setFocusedKey(t),ir(e)&&e.shiftKey&&r.selectionMode()===`multiple`?r.extendSelection(t):a&&r.replaceSelection(t))}break;case`PageDown`:u.getKeyPageBelow&&f!=null&&(e.preventDefault(),s(u.getKeyPageBelow(f)));break;case`PageUp`:u.getKeyPageAbove&&f!=null&&(e.preventDefault(),s(u.getKeyPageAbove(f)));break;case`a`:ir(e)&&r.selectionMode()===`multiple`&&z(i.disallowSelectAll)!==!0&&(e.preventDefault(),r.selectAll());break;case`Escape`:e.defaultPrevented||(e.preventDefault(),z(i.disallowEmptySelection)||r.clearSelection());break;case`Tab`:if(!z(i.allowsTabNavigation)){if(e.shiftKey)t.focus();else{let e=gn(t,{tabbable:!0}),n,r;do r=e.lastChild(),r&&(n=r);while(r);n&&!n.contains(document.activeElement)&&q(n)}break}}},d=e=>{let t=z(i.selectionManager),n=z(i.keyboardDelegate),r=z(i.selectOnFocus);if(t.isFocused()){e.currentTarget.contains(e.target)||t.setFocused(!1);return}if(e.currentTarget.contains(e.target)){if(t.setFocused(!0),t.focusedKey()==null){let i=e=>{e!=null&&(t.setFocusedKey(e),r&&t.replaceSelection(e))},a=e.relatedTarget;a&&e.currentTarget.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_FOLLOWING?i(t.lastSelectedKey()??n.getLastKey?.()):i(t.firstSelectedKey()??n.getFirstKey?.())}else if(!z(i.isVirtualized)){let e=a();if(e){e.scrollTop=s.top,e.scrollLeft=s.left;let n=e.querySelector(`[data-key="${t.focusedKey()}"]`);n&&(q(n),wn(e,n))}}}},f=e=>{let t=z(i.selectionManager);e.currentTarget.contains(e.relatedTarget)||t.setFocused(!1)},p=e=>{a()===e.target&&e.preventDefault()},m=()=>{let e=z(i.autoFocus);if(!e)return;let t=z(i.selectionManager),r=z(i.keyboardDelegate),a;e===`first`&&(a=r.getFirstKey?.()),e===`last`&&(a=r.getLastKey?.());let o=t.selectedKeys();o.size&&(a=o.values().next().value),t.setFocused(!0),t.setFocusedKey(a);let s=n();s&&a==null&&!z(i.shouldUseVirtualFocus)&&q(s)};return E(()=>{i.deferAutoFocus?setTimeout(m,0):m()}),N(T([a,()=>z(i.isVirtualized),()=>z(i.selectionManager).focusedKey()],e=>{let[t,n,r]=e;if(n)r&&i.scrollToKey?.(r);else if(r&&t){let e=t.querySelector(`[data-key="${r}"]`);e&&wn(t,e)}})),{tabIndex:t(()=>{if(!z(i.shouldUseVirtualFocus))return z(i.selectionManager).focusedKey()==null?0:-1}),onKeyDown:u,onMouseDown:p,onFocusIn:d,onFocusOut:f}}function fr(e,n){let r=()=>z(e.selectionManager),i=()=>z(e.key),a=()=>z(e.shouldUseVirtualFocus),o=e=>{r().selectionMode()!==`none`&&(r().selectionMode()===`single`?r().isSelected(i())&&!r().disallowEmptySelection()?r().toggleSelection(i()):r().replaceSelection(i()):e?.shiftKey?r().extendSelection(i()):r().selectionBehavior()===`toggle`||ir(e)||`pointerType`in e&&e.pointerType===`touch`?r().toggleSelection(i()):r().replaceSelection(i()))},s=()=>r().isSelected(i()),c=()=>z(e.disabled)||r().isDisabled(i()),l=()=>!c()&&r().canSelectItem(i()),u=null,d=t=>{l()&&(u=t.pointerType,t.pointerType===`mouse`&&t.button===0&&!z(e.shouldSelectOnPressUp)&&o(t))},f=t=>{l()&&t.pointerType===`mouse`&&t.button===0&&z(e.shouldSelectOnPressUp)&&z(e.allowsDifferentPressOrigin)&&o(t)},p=t=>{l()&&(z(e.shouldSelectOnPressUp)&&!z(e.allowsDifferentPressOrigin)||u!==`mouse`)&&o(t)},m=e=>{!l()||![`Enter`,` `].includes(e.key)||(rr(e)?r().toggleSelection(i()):o(e))},h=e=>{c()&&e.preventDefault()},g=e=>{let t=n();a()||c()||!t||e.target===t&&r().setFocusedKey(i())},_=t(()=>{if(!(a()||c()))return i()===r().focusedKey()?0:-1}),v=t(()=>z(e.virtualized)?void 0:i());return N(T([n,i,a,()=>r().focusedKey(),()=>r().isFocused()],([t,n,r,i,a])=>{t&&n===i&&a&&!r&&document.activeElement!==t&&(e.focus?e.focus():q(t))})),{isSelected:s,isDisabled:c,allowsSelection:l,tabIndex:_,dataKey:v,onPointerDown:d,onPointerUp:f,onClick:p,onKeyDown:m,onMouseDown:h,onFocus:g}}var pr=class{collection;state;constructor(e,t){this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(e==null||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if(this.state.selectionMode()===`none`)return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys().has(t)}isEmpty(){return this.state.selectedKeys().size===0}isSelectAll(){if(this.isEmpty())return!1;let e=this.state.selectedKeys();return this.getAllSelectableKeys().every(t=>e.has(t))}firstSelectedKey(){let e;for(let t of this.state.selectedKeys()){let n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index<e.index;(!e||r)&&(e=n)}return e?.key}lastSelectedKey(){let e;for(let t of this.state.selectedKeys()){let n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index>e.index;(!e||r)&&(e=n)}return e?.key}extendSelection(e){if(this.selectionMode()===`none`)return;if(this.selectionMode()===`single`){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=this.state.selectedKeys(),r=n.anchorKey||t,i=new tr(n,r,t);for(let e of this.getKeyRange(r,n.currentKey||t))i.delete(e);for(let e of this.getKeyRange(t,r))this.canSelectItem(e)&&i.add(e);this.state.setSelectedKeys(i)}getKeyRange(e,t){let n=this.collection().getItem(e),r=this.collection().getItem(t);return n&&r?n.index!=null&&r.index!=null&&n.index<=r.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let n=[],r=e;for(;r!=null;){let e=this.collection().getItem(r);if(e&&e.type===`item`&&n.push(r),r===t)return n;r=this.collection().getKeyAfter(r)}return[]}getKey(e){let t=this.collection().getItem(e);return t?!t||t.type!==`item`?null:t.key:e}toggleSelection(e){if(this.selectionMode()===`none`)return;if(this.selectionMode()===`single`&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=new tr(this.state.selectedKeys());n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection()&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode()===`none`)return;let t=this.getKey(e);if(t==null)return;let n=this.canSelectItem(t)?new tr([t],t,t):new tr;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode()===`none`)return;let t=new tr;for(let n of e){let e=this.getKey(n);if(e!=null&&(t.add(e),this.selectionMode()===`single`))break}this.state.setSelectedKeys(t)}selectAll(){this.selectionMode()===`multiple`&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){let e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new tr)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode()!==`none`&&(this.selectionMode()===`single`?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior()===`toggle`||t&&t.pointerType===`touch`?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;let t=this.selectedKeys();if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;for(let n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){if(this.state.selectionMode()===`none`)return!1;let t=this.collection().getItem(e);return t!=null&&!t.disabled}isDisabled(e){let t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){let e=[];return(t=>{for(;t!=null;){if(this.canSelectItem(t)){let n=this.collection().getItem(t);if(!n)continue;n.type===`item`&&e.push(t)}t=this.collection().getKeyAfter(t)}})(this.collection().getFirstKey()),e}},mr=class{keyMap=new Map;iterable;firstKey;lastKey;constructor(e){this.iterable=e;for(let t of e)this.keyMap.set(t.key,t);if(this.keyMap.size===0)return;let t,n=0;for(let[e,r]of this.keyMap)t?(t.nextKey=e,r.prevKey=t.key):(this.firstKey=e,r.prevKey=void 0),r.type===`item`&&(r.index=n++),t=r,t.nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){return this.keyMap.get(e)?.prevKey}getKeyAfter(e){return this.keyMap.get(e)?.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}};function hr(e){let t=sr(e),n=Vn({dataSource:()=>z(e.dataSource),getKey:()=>z(e.getKey),getTextValue:()=>z(e.getTextValue),getDisabled:()=>z(e.getDisabled),getSectionChildren:()=>z(e.getSectionChildren),factory:t=>e.filter?new mr(e.filter(t)):new mr(t)},[()=>e.filter]),r=new pr(n,t);return i(()=>{let e=t.focusedKey();e!=null&&!n().getItem(e)&&t.setFocusedKey(void 0)}),{collection:n,selectionManager:()=>r}}var gr=h();function _r(){return P(gr)}function vr(){let e=_r();if(e===void 0)throw Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}function yr(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function br(e,t){let n=t.ref();if(!n)return-1;let r=e.length;if(!r)return-1;for(;r--;){let t=e[r]?.ref();if(t&&yr(t,n))return r+1}return 0}function xr(e){let t=e.map((e,t)=>[t,e]),n=!1;return t.sort(([e,t],[r,i])=>{let a=t.ref(),o=i.ref();return a===o||!a||!o?0:yr(a,o)?(e>r&&(n=!0),-1):(e<r&&(n=!0),1)}),n?t.map(([e,t])=>t):e}function Sr(e,t){let n=xr(e);e!==n&&t(n)}function Cr(e){let t=e[0],n=e[e.length-1]?.ref(),r=t?.ref()?.parentElement;for(;r;){if(n&&r.contains(n))return r;r=r.parentElement}return Wt(r).body}function wr(e,t){N(()=>{let n=setTimeout(()=>{Sr(e(),t)});w(()=>clearTimeout(n))})}function Tr(e,t){if(typeof IntersectionObserver!=`function`){wr(e,t);return}let n=[];N(()=>{let r=()=>{let r=!!n.length;n=e(),r&&Sr(e(),t)},i=Cr(e()),a=new IntersectionObserver(r,{root:i});for(let t of e()){let e=t.ref();e&&a.observe(e)}w(()=>a.disconnect())})}function Er(e={}){let[t,n]=Rn({value:()=>z(e.items),onChange:t=>e.onItemsChange?.(t)});Tr(t,n);let r=e=>(n(t=>Ft(t,e,br(t,e))),()=>{n(t=>{let n=t.filter(t=>t.ref()!==e.ref());return t.length===n.length?t:n})});return{DomCollectionProvider:e=>a(gr.Provider,{value:{registerItem:r},get children(){return e.children}})}}function Dr(e){let t=vr(),n=J({shouldRegisterItem:!0},e);N(()=>{n.shouldRegisterItem&&w(t.registerItem(n.getItem()))})}var Or=[`top`,`right`,`bottom`,`left`],kr=Math.min,Ar=Math.max,jr=Math.round,Mr=Math.floor,Nr=e=>({x:e,y:e}),Pr={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Fr(e,t,n){return Ar(e,kr(t,n))}function Ir(e,t){return typeof e==`function`?e(t):e}function Lr(e){return e.split(`-`)[0]}function Rr(e){return e.split(`-`)[1]}function zr(e){return e===`x`?`y`:`x`}function Br(e){return e===`y`?`height`:`width`}function Vr(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Hr(e){return zr(Vr(e))}function Ur(e,t,n){n===void 0&&(n=!1);let r=Rr(e),i=Hr(e),a=Br(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Qr(o)),[o,Qr(o)]}function Wr(e){let t=Qr(e);return[Gr(e),t,Gr(t)]}function Gr(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var Kr=[`left`,`right`],qr=[`right`,`left`],Jr=[`top`,`bottom`],Yr=[`bottom`,`top`];function Xr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?qr:Kr:t?Kr:qr;case`left`:case`right`:return t?Jr:Yr;default:return[]}}function Zr(e,t,n,r){let i=Rr(e),a=Xr(Lr(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Gr)))),a}function Qr(e){let t=Lr(e);return Pr[t]+e.slice(t.length)}function $r(e){return{top:0,right:0,bottom:0,left:0,...e}}function ei(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:$r(e)}function ti(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function ni(e,t,n){let{reference:r,floating:i}=e,a=Vr(t),o=Hr(t),s=Br(o),c=Lr(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Rr(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function ri(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Ir(t,e),p=ei(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=ti(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=ti(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var ii=50,ai=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:ri},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ni(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<ii&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=ni(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},oi=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Ir(e,t)||{};if(l==null)return{};let d=ei(u),f={x:n,y:r},p=Hr(i),m=Br(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,E=kr(d[_],T),D=kr(d[v],T),O=E,ee=C-h[m]-D,k=C/2-h[m]/2+w,A=Fr(O,k,ee),j=!c.arrow&&Rr(i)!=null&&k!==A&&a.reference[m]/2-(k<O?E:D)-h[m]/2<0,te=j?k<O?k-O:k-ee:0;return{[p]:f[p]+te,data:{[p]:A,centerOffset:k-A-te,...j&&{alignmentOffset:te}},reset:j}}}),si=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Ir(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Lr(r),_=Vr(o),v=Lr(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Qr(o)]:Wr(o)),x=p!==`none`;!d&&x&&b.push(...Zr(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Ur(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==Vr(t))||T.every(e=>Vr(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Vr(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}};function ci(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function li(e){return Or.some(t=>e[t]>=0)}var ui=function(e){return e===void 0&&(e={}),{name:`hide`,options:e,async fn(t){let{rects:n,platform:r}=t,{strategy:i=`referenceHidden`,...a}=Ir(e,t);switch(i){case`referenceHidden`:{let e=ci(await r.detectOverflow(t,{...a,elementContext:`reference`}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:li(e)}}}case`escaped`:{let e=ci(await r.detectOverflow(t,{...a,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:li(e)}}}default:return{}}}}},di=new Set([`left`,`top`]);async function fi(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Lr(n),s=Rr(n),c=Vr(n)===`y`,l=di.has(o)?-1:1,u=a&&c?-1:1,d=Ir(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var pi=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await fi(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},mi=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Ir(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Vr(Lr(i)),p=zr(f),m=u[p],h=u[f];if(o){let e=p===`y`?`top`:`left`,t=p===`y`?`bottom`:`right`,n=m+d[e],r=m-d[t];m=Fr(n,m,r)}if(s){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=h+d[e],r=h-d[t];h=Fr(n,h,r)}let g=c.fn({...t,[p]:m,[f]:h});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[p]:o,[f]:s}}}}}},hi=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Ir(e,t),u=await o.detectOverflow(t,l),d=Lr(i),f=Rr(i),p=Vr(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=kr(h-u[g],v),x=kr(m-u[_],y),S=!t.middlewareData.shift,C=b,w=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(w=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=v),S&&!f){let e=Ar(u.left,0),t=Ar(u.right,0),n=Ar(u.top,0),r=Ar(u.bottom,0);p?w=m-2*(e!==0||t!==0?e+t:Ar(u.left,u.right)):C=h-2*(n!==0||r!==0?n+r:Ar(u.top,u.bottom))}await c({...t,availableWidth:w,availableHeight:C});let T=await o.getDimensions(s.floating);return m!==T.width||h!==T.height?{reset:{rects:!0}}:{}}}};function gi(){return typeof window<`u`}function _i(e){return bi(e)?(e.nodeName||``).toLowerCase():`#document`}function vi(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function yi(e){return((bi(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function bi(e){return gi()?e instanceof Node||e instanceof vi(e).Node:!1}function xi(e){return gi()?e instanceof Element||e instanceof vi(e).Element:!1}function Si(e){return gi()?e instanceof HTMLElement||e instanceof vi(e).HTMLElement:!1}function Ci(e){return!gi()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof vi(e).ShadowRoot}function wi(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Fi(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Ti(e){return/^(table|td|th)$/.test(_i(e))}function Ei(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Di=/transform|translate|scale|rotate|perspective|filter/,Oi=/paint|layout|strict|content/,ki=e=>!!e&&e!==`none`,Ai;function ji(e){let t=xi(e)?Fi(e):e;return ki(t.transform)||ki(t.translate)||ki(t.scale)||ki(t.rotate)||ki(t.perspective)||!Ni()&&(ki(t.backdropFilter)||ki(t.filter))||Di.test(t.willChange||``)||Oi.test(t.contain||``)}function Mi(e){let t=Li(e);for(;Si(t)&&!Pi(t);){if(ji(t))return t;if(Ei(t))return null;t=Li(t)}return null}function Ni(){return Ai??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Ai}function Pi(e){return/^(html|body|#document)$/.test(_i(e))}function Fi(e){return vi(e).getComputedStyle(e)}function Ii(e){return xi(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Li(e){if(_i(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Ci(e)&&e.host||yi(e);return Ci(t)?t.host:t}function Ri(e){let t=Li(e);return Pi(t)?e.ownerDocument?e.ownerDocument.body:e.body:Si(t)&&wi(t)?t:Ri(t)}function zi(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Ri(e),i=r===e.ownerDocument?.body,a=vi(r);if(i){let e=Bi(a);return t.concat(a,a.visualViewport||[],wi(r)?r:[],e&&n?zi(e):[])}else return t.concat(r,zi(r,[],n))}function Bi(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Vi(e){let t=Fi(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Si(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=jr(n)!==a||jr(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Hi(e){return xi(e)?e:e.contextElement}function Ui(e){let t=Hi(e);if(!Si(t))return Nr(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Vi(t),o=(a?jr(n.width):n.width)/r,s=(a?jr(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Wi=Nr(0);function Gi(e){let t=vi(e);return!Ni()||!t.visualViewport?Wi:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ki(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==vi(e)?!1:t}function qi(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Hi(e),o=Nr(1);t&&(r?xi(r)&&(o=Ui(r)):o=Ui(e));let s=Ki(a,n,r)?Gi(a):Nr(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=vi(a),t=r&&xi(r)?vi(r):r,n=e,i=Bi(n);for(;i&&r&&t!==n;){let e=Ui(i),t=i.getBoundingClientRect(),r=Fi(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=vi(i),i=Bi(n)}}return ti({width:u,height:d,x:c,y:l})}function Ji(e,t){let n=Ii(e).scrollLeft;return t?t.left+n:qi(yi(e)).left+n}function Yi(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Ji(e,n),y:n.top+t.scrollTop}}function Xi(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=yi(r),s=t?Ei(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Nr(1),u=Nr(0),d=Si(r);if((d||!d&&!a)&&((_i(r)!==`body`||wi(o))&&(c=Ii(r)),d)){let e=qi(r);l=Ui(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Yi(o,c):Nr(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Zi(e){return Array.from(e.getClientRects())}function Qi(e){let t=yi(e),n=Ii(e),r=e.ownerDocument.body,i=Ar(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Ar(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Ji(e),s=-n.scrollTop;return Fi(r).direction===`rtl`&&(o+=Ar(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}var $i=25;function ea(e,t){let n=vi(e),r=yi(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Ni();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Ji(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=$i&&(a-=o)}else l<=$i&&(a+=l);return{width:a,height:o,x:s,y:c}}function ta(e,t){let n=qi(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Si(e)?Ui(e):Nr(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function na(e,t,n){let r;if(t===`viewport`)r=ea(e,n);else if(t===`document`)r=Qi(yi(e));else if(xi(t))r=ta(t,n);else{let n=Gi(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ti(r)}function ra(e,t){let n=Li(e);return n===t||!xi(n)||Pi(n)?!1:Fi(n).position===`fixed`||ra(n,t)}function ia(e,t){let n=t.get(e);if(n)return n;let r=zi(e,[],!1).filter(e=>xi(e)&&_i(e)!==`body`),i=null,a=Fi(e).position===`fixed`,o=a?Li(e):e;for(;xi(o)&&!Pi(o);){let t=Fi(o),n=ji(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&(i.position===`absolute`||i.position===`fixed`)||wi(o)&&!n&&ra(e,o))?r=r.filter(e=>e!==o):i=t,o=Li(o)}return t.set(e,r),r}function aa(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Ei(t)?[]:ia(t,this._c):[].concat(n),r],o=na(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=na(t,a[e],i);s=Ar(n.top,s),c=kr(n.right,c),l=kr(n.bottom,l),u=Ar(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function oa(e){let{width:t,height:n}=Vi(e);return{width:t,height:n}}function sa(e,t,n){let r=Si(t),i=yi(t),a=n===`fixed`,o=qi(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Nr(0);function l(){c.x=Ji(i)}if(r||!r&&!a)if((_i(t)!==`body`||wi(i))&&(s=Ii(t)),r){let e=qi(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?Yi(i,s):Nr(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function ca(e){return Fi(e).position===`static`}function la(e,t){if(!Si(e)||Fi(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return yi(e)===n&&(n=n.ownerDocument.body),n}function ua(e,t){let n=vi(e);if(Ei(e))return n;if(!Si(e)){let t=Li(e);for(;t&&!Pi(t);){if(xi(t)&&!ca(t))return t;t=Li(t)}return n}let r=la(e,t);for(;r&&Ti(r)&&ca(r);)r=la(r,t);return r&&Pi(r)&&ca(r)&&!ji(r)?n:r||Mi(e)||n}var da=async function(e){let t=this.getOffsetParent||ua,n=this.getDimensions,r=await n(e.floating);return{reference:sa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function fa(e){return Fi(e).direction===`rtl`}var pa={convertOffsetParentRelativeRectToViewportRelativeRect:Xi,getDocumentElement:yi,getClippingRect:aa,getOffsetParent:ua,getElementRects:da,getClientRects:Zi,getDimensions:oa,getScale:Ui,isElement:xi,isRTL:fa};function ma(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ha(e,t){let n=null,r,i=yi(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Mr(d),h=Mr(i.clientWidth-(u+f)),g=Mr(i.clientHeight-(d+p)),_=Mr(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Ar(0,kr(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!ma(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function ga(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Hi(e),u=i||a?[...l?zi(l):[],...t?zi(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?ha(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?qi(e):null;c&&g();function g(){let t=qi(e);h&&!ma(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var _a=pi,va=mi,ya=si,ba=hi,xa=ui,Sa=oi,Ca=(e,t,n)=>{let r=new Map,i={platform:pa,...n},a={...i.platform,_c:r};return ai(e,t,{...i,platform:a})},wa=h();function Ta(){let e=P(wa);if(e===void 0)throw Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var Ea=O(`<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">`),Da=30,Oa=Da/2,ka={top:180,right:-90,bottom:0,left:90};function Aa(t){let n=Ta(),[r,i]=F(J({size:Da},t),[`ref`,`style`,`size`]),o=()=>n.currentPlacement().split(`-`)[0],s=ja(n.contentRef),c=()=>s()?.getPropertyValue(`background-color`)||`none`,l=()=>s()?.getPropertyValue(`border-${o()}-color`)||`none`,u=()=>s()?.getPropertyValue(`border-${o()}-width`)||`0px`,d=()=>Number.parseInt(u())*2*(Da/r.size),f=()=>`rotate(${ka[o()]} ${Oa} ${Oa}) translate(0 2)`;return a(Y,L({as:`div`,ref(e){let t=ht(n.setArrowRef,r.ref);typeof t==`function`&&t(e)},"aria-hidden":`true`,get style(){return Pt({position:`absolute`,"font-size":`${r.size}px`,width:`1em`,height:`1em`,"pointer-events":`none`,fill:c(),stroke:l(),"stroke-width":d()},r.style)}},i,{get children(){let t=Ea(),n=t.firstChild;return M(()=>e(n,`transform`,f())),t}}))}function ja(e){let[t,n]=m();return N(()=>{let t=e();t&&n(Ut(t).getComputedStyle(t))}),t}function Ma(e){let t=Ta(),[n,r]=F(e,[`ref`,`style`]);return a(Y,L({as:`div`,ref(e){let r=ht(t.setPositionerRef,n.ref);typeof r==`function`&&r(e)},"data-popper-positioner":``,get style(){return Pt({position:`absolute`,top:0,left:0,"min-width":`max-content`},n.style)}},r))}function Na(e){let{x:t=0,y:n=0,width:r=0,height:i=0}=e??{};if(typeof DOMRect==`function`)return new DOMRect(t,n,r,i);let a={x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:n+i,left:t};return{...a,toJSON:()=>a}}function Pa(e,t){return{contextElement:e,getBoundingClientRect:()=>{let n=t(e);return n?Na(n):e?e.getBoundingClientRect():Na()}}}function Fa(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var Ia={top:`bottom`,right:`left`,bottom:`top`,left:`right`};function La(e,t){let[n,r]=e.split(`-`),i=Ia[n];return r?n===`left`||n===`right`?`${i} ${r===`start`?`top`:`bottom`}`:r===`start`?`${i} ${t===`rtl`?`right`:`left`}`:`${i} ${t===`rtl`?`left`:`right`}`:`${i} center`}function Ra(e){let t=J({getAnchorRect:e=>e?.getBoundingClientRect(),placement:`bottom`,gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[n,r]=m(),[i,o]=m(),[s,c]=m(t.placement),l=()=>Pa(t.anchorRef?.(),t.getAnchorRect),{direction:u}=Qn();async function d(){let e=l(),r=n(),a=i();if(!e||!r)return;let o=(a?.clientHeight||0)/2,s=typeof t.gutter==`number`?t.gutter+o:t.gutter??o;r.style.setProperty(`--kb-popper-content-overflow-padding`,`${t.overflowPadding}px`),e.getBoundingClientRect();let d=[_a(({placement:e})=>({mainAxis:s,crossAxis:e.split(`-`)[1]?void 0:t.shift,alignmentAxis:t.shift}))];if(t.flip!==!1){let e=typeof t.flip==`string`?t.flip.split(` `):void 0;if(e!==void 0&&!e.every(Fa))throw Error("`flip` expects a spaced-delimited list of placements");d.push(ya({padding:t.overflowPadding,fallbackPlacements:e}))}(t.slide||t.overlap)&&d.push(va({mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding})),d.push(ba({padding:t.overflowPadding,apply({availableWidth:e,availableHeight:n,rects:i}){let a=Math.round(i.reference.width);e=Math.floor(e),n=Math.floor(n),r.style.setProperty(`--kb-popper-anchor-width`,`${a}px`),r.style.setProperty(`--kb-popper-content-available-width`,`${e}px`),r.style.setProperty(`--kb-popper-content-available-height`,`${n}px`),t.sameWidth&&(r.style.width=`${a}px`),t.fitViewport&&(r.style.maxWidth=`${e}px`,r.style.maxHeight=`${n}px`)}})),t.hideWhenDetached&&d.push(xa({padding:t.detachedPadding})),a&&d.push(Sa({element:a,padding:t.arrowPadding}));let f=await Ca(e,r,{placement:t.placement,strategy:`absolute`,middleware:d,platform:{...pa,isRTL:()=>u()===`rtl`}});if(c(f.placement),t.onCurrentPlacementChange?.(f.placement),!r)return;r.style.setProperty(`--kb-popper-content-transform-origin`,La(f.placement,u()));let p=Math.round(f.x),m=Math.round(f.y),h;if(t.hideWhenDetached&&(h=f.middlewareData.hide?.referenceHidden?`hidden`:`visible`),Object.assign(r.style,{top:`0`,left:`0`,transform:`translate3d(${p}px, ${m}px, 0)`,visibility:h}),a&&f.middlewareData.arrow){let{x:e,y:t}=f.middlewareData.arrow,n=f.placement.split(`-`)[0];Object.assign(a.style,{left:e==null?``:`${e}px`,top:t==null?``:`${t}px`,[n]:`100%`})}}N(()=>{let e=l(),t=n();!e||!t||w(ga(e,t,d,{elementResize:typeof ResizeObserver==`function`}))}),N(()=>{let e=n(),r=t.contentRef?.();!e||!r||queueMicrotask(()=>{e.style.zIndex=getComputedStyle(r).zIndex})});let f={currentPlacement:s,contentRef:()=>t.contentRef?.(),setPositionerRef:r,setArrowRef:o};return a(wa.Provider,{value:f,get children(){return t.children}})}var za=Object.assign(Ra,{Arrow:Aa,Context:wa,usePopperContext:Ta,Positioner:Ma}),Ba=`data-kb-top-layer`,Va,Ha=!1,Ua=[];function Wa(e){return Ua.findIndex(t=>t.node===e)}function Ga(e){return Ua[Wa(e)]}function Ka(e){return Ua[Ua.length-1].node===e}function qa(){return Ua.filter(e=>e.isPointerBlocking)}function Ja(){return[...qa()].slice(-1)[0]}function Ya(){return qa().length>0}function Xa(e){let t=Wa(Ja()?.node);return Wa(e)<t}function Za(e){Ua.push(e)}function Qa(e){let t=Wa(e);t<0||Ua.splice(t,1)}function $a(){for(let{node:e}of Ua)e.style.pointerEvents=Xa(e)?`none`:`auto`}function eo(e){if(Ya()&&!Ha){let t=Wt(e);Va=document.body.style.pointerEvents,t.body.style.pointerEvents=`none`,Ha=!0}}function to(e){if(Ya())return;let t=Wt(e);t.body.style.pointerEvents=Va,t.body.style.length===0&&t.body.removeAttribute(`style`),Ha=!1}var no={layers:Ua,isTopMostLayer:Ka,hasPointerBlockingLayer:Ya,isBelowPointerBlockingLayer:Xa,addLayer:Za,removeLayer:Qa,indexOf:Wa,find:Ga,assignPointerEventToLayers:$a,disableBodyPointerEvents:eo,restoreBodyPointerEvents:to},ro=`interactOutside.pointerDownOutside`,io=`interactOutside.focusOutside`;function ao(e,t){let n,r=yn,i=()=>Wt(t()),a=t=>e.onPointerDownOutside?.(t),o=t=>e.onFocusOutside?.(t),s=t=>e.onInteractOutside?.(t),c=n=>{let r=n.target;return!(r instanceof Element)||r.closest(`[${Ba}]`)||!Vt(i(),r)||Vt(t(),r)?!1:!e.shouldExcludeElement?.(r)},l=e=>{function n(){let n=t(),r=e.target;if(!n||!r||!c(e))return;let i=K([a,s]);r.addEventListener(ro,i,{once:!0});let o=new CustomEvent(ro,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:e.button===2||$t(e)&&e.button===0}});r.dispatchEvent(o)}e.pointerType===`touch`?(i().removeEventListener(`click`,n),r=n,i().addEventListener(`click`,n,{once:!0})):n()},u=e=>{let n=t(),r=e.target;if(!n||!r||!c(e))return;let i=K([o,s]);r.addEventListener(io,i,{once:!0});let a=new CustomEvent(io,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:!1}});r.dispatchEvent(a)};N(()=>{z(e.isDisabled)||(n=window.setTimeout(()=>{i().addEventListener(`pointerdown`,l,!0)},0),i().addEventListener(`focusin`,u,!0),w(()=>{window.clearTimeout(n),i().removeEventListener(`click`,r),i().removeEventListener(`pointerdown`,l,!0),i().removeEventListener(`focusin`,u,!0)}))})}function oo(e){let t=t=>{t.key===Kt.Escape&&e.onEscapeKeyDown?.(t)};N(()=>{if(z(e.isDisabled))return;let n=e.ownerDocument?.()??Wt();n.addEventListener(`keydown`,t),w(()=>{n.removeEventListener(`keydown`,t)})})}var so=h();function co(){return P(so)}function lo(e){let t,n=co(),[r,i]=F(e,[`ref`,`disableOutsidePointerEvents`,`excludedElements`,`onEscapeKeyDown`,`onPointerDownOutside`,`onFocusOutside`,`onInteractOutside`,`onDismiss`,`bypassTopMostLayerCheck`]),o=new Set([]),s=e=>{o.add(e);let t=n?.registerNestedLayer(e);return()=>{o.delete(e),t?.()}};ao({shouldExcludeElement:e=>t?r.excludedElements?.some(t=>Vt(t(),e))||[...o].some(t=>Vt(t,e)):!1,onPointerDownOutside:e=>{!t||no.isBelowPointerBlockingLayer(t)||!r.bypassTopMostLayerCheck&&!no.isTopMostLayer(t)||(r.onPointerDownOutside?.(e),r.onInteractOutside?.(e),e.defaultPrevented||r.onDismiss?.())},onFocusOutside:e=>{r.onFocusOutside?.(e),r.onInteractOutside?.(e),e.defaultPrevented||r.onDismiss?.()}},()=>t),oo({ownerDocument:()=>Wt(t),onEscapeKeyDown:e=>{!t||!no.isTopMostLayer(t)||(r.onEscapeKeyDown?.(e),!e.defaultPrevented&&r.onDismiss&&(e.preventDefault(),r.onDismiss()))}}),E(()=>{if(!t)return;no.addLayer({node:t,isPointerBlocking:r.disableOutsidePointerEvents,dismiss:r.onDismiss});let e=n?.registerNestedLayer(t);no.assignPointerEventToLayers(),no.disableBodyPointerEvents(t),w(()=>{t&&(no.removeLayer(t),e?.(),no.assignPointerEventToLayers(),no.restoreBodyPointerEvents(t))})}),N(T([()=>t,()=>r.disableOutsidePointerEvents],([e,t])=>{if(!e)return;let n=no.find(e);n&&n.isPointerBlocking!==t&&(n.isPointerBlocking=t,no.assignPointerEventToLayers()),t&&no.disableBodyPointerEvents(e),w(()=>{no.restoreBodyPointerEvents(e)})},{defer:!0}));let c={registerNestedLayer:s};return a(so.Provider,{value:c,get children(){return a(Y,L({as:`div`,ref(e){let n=ht(e=>t=e,r.ref);typeof n==`function`&&n(e)}},i))}})}function uo(e={}){let[t,n]=Ln({value:()=>z(e.open),defaultValue:()=>!!z(e.defaultOpen),onChange:t=>e.onOpenChange?.(t)}),r=()=>{n(!0)},i=()=>{n(!1)};return{isOpen:t,setIsOpen:n,open:r,close:i,toggle:()=>{t()?i():r()}}}function fo(e){return t=>(e(t),()=>e(void 0))}var X=e=>typeof e==`function`?e():e,po=e=>{let n=t(()=>{let t=X(e.element);if(t)return getComputedStyle(t)}),r=()=>n()?.animationName??`none`,[i,a]=m(X(e.show)?`present`:`hidden`),o=`none`;return N(t=>{let i=X(e.show);return I(()=>{if(t===i)return i;let e=o,s=r();i?a(`present`):s===`none`||n()?.display===`none`?a(`hidden`):a(t===!0&&e!==s?`hiding`:`hidden`)}),i}),N(()=>{let t=X(e.element);if(!t)return;let n=e=>{e.target===t&&(o=r())},s=e=>{let n=r().includes(e.animationName);e.target===t&&n&&i()===`hiding`&&a(`hidden`)};t.addEventListener(`animationstart`,n),t.addEventListener(`animationcancel`,s),t.addEventListener(`animationend`,s),w(()=>{t.removeEventListener(`animationstart`,n),t.removeEventListener(`animationcancel`,s),t.removeEventListener(`animationend`,s)})}),{present:()=>i()===`present`||i()===`hiding`,state:i,setState:a}},mo=[`id`,`name`,`validationState`,`required`,`disabled`,`readOnly`];function ho(e){let n=J({id:`form-control-${g()}`},e),[r,i]=m(),[a,o]=m(),[s,c]=m(),[l,u]=m();return{formControlContext:{name:()=>z(n.name)??z(n.id),dataset:t(()=>({"data-valid":z(n.validationState)===`valid`?``:void 0,"data-invalid":z(n.validationState)===`invalid`?``:void 0,"data-required":z(n.required)?``:void 0,"data-disabled":z(n.disabled)?``:void 0,"data-readonly":z(n.readOnly)?``:void 0})),validationState:()=>z(n.validationState),isRequired:()=>z(n.required),isDisabled:()=>z(n.disabled),isReadOnly:()=>z(n.readOnly),labelId:r,fieldId:a,descriptionId:s,errorMessageId:l,getAriaLabelledBy:(e,t,n)=>{let i=n!=null||r()!=null;return[n,r(),i&&t!=null?e:void 0].filter(Boolean).join(` `)||void 0},getAriaDescribedBy:e=>[s(),l(),e].filter(Boolean).join(` `)||void 0,generateId:Bt(()=>z(n.id)),registerLabel:fo(i),registerField:fo(o),registerDescription:fo(c),registerErrorMessage:fo(u)}}}var go=h();function _o(){let e=P(go);if(e===void 0)throw Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function vo(e){let t=_o(),n=J({id:t.generateId(`description`)},e);return N(()=>w(t.registerDescription(n.id))),a(Y,L({as:`div`},()=>t.dataset(),n))}function yo(e){let t,n=_o(),[r,i]=F(J({id:n.generateId(`label`)},e),[`ref`]),o=On(()=>t,()=>`label`);return N(()=>w(n.registerLabel(i.id))),a(Y,L({as:`label`,ref(e){let n=ht(e=>t=e,r.ref);typeof n==`function`&&n(e)},get for(){return d(()=>o()===`label`)()?n.fieldId():void 0}},()=>n.dataset(),i))}function bo(e,t){N(T(e,e=>{if(e==null)return;let n=xo(e);n!=null&&(n.addEventListener(`reset`,t,{passive:!0}),w(()=>{n.removeEventListener(`reset`,t)}))}))}function xo(e){return So(e)?e.form:e.closest(`form`)}function So(e){return e.matches(`textarea, input, select, button`)}function Co(e){let t=_o(),[n,r]=F(J({id:t.generateId(`error-message`)},e),[`forceMount`]),i=()=>t.validationState()===`invalid`;return N(()=>{i()&&w(t.registerErrorMessage(r.id))}),a(R,{get when(){return n.forceMount||i()},get children(){return a(Y,L({as:`div`},()=>t.dataset(),r))}})}var wo=`focusScope.autoFocusOnMount`,To=`focusScope.autoFocusOnUnmount`,Eo={bubbles:!1,cancelable:!0},Do={stack:[],active(){return this.stack[0]},add(e){e!==this.active()&&this.active()?.pause(),this.stack=It(this.stack,e),this.stack.unshift(e)},remove(e){this.stack=It(this.stack,e),this.active()?.resume()}};function Oo(e,t){let[n,r]=m(!1),i={pause(){r(!0)},resume(){r(!1)}},a=null,o=t=>e.onMountAutoFocus?.(t),s=t=>e.onUnmountAutoFocus?.(t),c=()=>Wt(t()),l=()=>{let e=c().createElement(`span`);return e.setAttribute(`data-focus-trap`,``),e.tabIndex=0,Object.assign(e.style,Dn),e},u=()=>{let e=t();return e?ln(e,!0).filter(e=>!e.hasAttribute(`data-focus-trap`)):[]},d=()=>{let e=u();return e.length>0?e[0]:null},f=()=>{let e=u();return e.length>0?e[e.length-1]:null},p=()=>{let e=t();if(!e)return!1;let n=Ht(e);return!n||Vt(e,n)?!1:dn(n)};N(()=>{let e=t();if(!e)return;Do.add(i);let n=Ht(e);if(!Vt(e,n)){let t=new CustomEvent(wo,Eo);e.addEventListener(wo,o),e.dispatchEvent(t),t.defaultPrevented||setTimeout(()=>{q(d()),Ht(e)===n&&q(e)},0)}w(()=>{e.removeEventListener(wo,o),setTimeout(()=>{let t=new CustomEvent(To,Eo);p()&&t.preventDefault(),e.addEventListener(To,s),e.dispatchEvent(t),t.defaultPrevented||q(n??c().body),e.removeEventListener(To,s),Do.remove(i)},0)})}),N(()=>{let r=t();if(!r||!z(e.trapFocus)||n())return;let i=e=>{let t=e.target;t?.closest(`[${Ba}]`)||(Vt(r,t)?a=t:q(a))},o=e=>{let t=e.relatedTarget??Ht(r);t?.closest(`[${Ba}]`)||Vt(r,t)||q(a)};c().addEventListener(`focusin`,i),c().addEventListener(`focusout`,o),w(()=>{c().removeEventListener(`focusin`,i),c().removeEventListener(`focusout`,o)})}),N(()=>{let r=t();if(!r||!z(e.trapFocus)||n())return;let i=l();r.insertAdjacentElement(`afterbegin`,i);let a=l();r.insertAdjacentElement(`beforeend`,a);function o(e){let t=d(),n=f();e.relatedTarget===t?q(n):q(t)}i.addEventListener(`focusin`,o),a.addEventListener(`focusin`,o);let s=new MutationObserver(e=>{for(let t of e)t.previousSibling===a&&(a.remove(),r.insertAdjacentElement(`beforeend`,a)),t.nextSibling===i&&(i.remove(),r.insertAdjacentElement(`afterbegin`,i))});s.observe(r,{childList:!0,subtree:!1}),w(()=>{i.removeEventListener(`focusin`,o),a.removeEventListener(`focusin`,o),i.remove(),a.remove(),s.disconnect()})})}var ko=`data-live-announcer`;function Ao(e){N(()=>{z(e.isDisabled)||w(No(z(e.targets),z(e.root)))})}var jo=new WeakMap,Mo=[];function No(e,t=document.body){let n=new Set(e),r=new Set,i=e=>{for(let t of e.querySelectorAll(`[${ko}], [${Ba}]`))n.add(t);let t=e=>{if(n.has(e)||e.parentElement&&r.has(e.parentElement)&&e.parentElement.getAttribute(`role`)!==`row`)return NodeFilter.FILTER_REJECT;for(let t of n)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),o=t(e);if(o===NodeFilter.FILTER_ACCEPT&&a(e),o!==NodeFilter.FILTER_REJECT){let e=i.nextNode();for(;e!=null;)a(e),e=i.nextNode()}},a=e=>{let t=jo.get(e)??0;e.getAttribute(`aria-hidden`)===`true`&&t===0||(t===0&&e.setAttribute(`aria-hidden`,`true`),r.add(e),jo.set(e,t+1))};Mo.length&&Mo[Mo.length-1].disconnect(),i(t);let o=new MutationObserver(e=>{for(let t of e)if(!(t.type!==`childList`||t.addedNodes.length===0)&&![...n,...r].some(e=>e.contains(t.target))){for(let e of t.removedNodes)e instanceof Element&&(n.delete(e),r.delete(e));for(let e of t.addedNodes)(e instanceof HTMLElement||e instanceof SVGElement)&&(e.dataset.liveAnnouncer===`true`||e.dataset.reactAriaTopLayer===`true`)?n.add(e):e instanceof Element&&i(e)}});o.observe(t,{childList:!0,subtree:!0});let s={observe(){o.observe(t,{childList:!0,subtree:!0})},disconnect(){o.disconnect()}};return Mo.push(s),()=>{o.disconnect();for(let e of r){let t=jo.get(e);if(t==null)return;t===1?(e.removeAttribute(`aria-hidden`),jo.delete(e)):jo.set(e,t-1)}s===Mo[Mo.length-1]?(Mo.pop(),Mo.length&&Mo[Mo.length-1].observe()):Mo.splice(Mo.indexOf(s),1)}}var Po=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},Fo=new Map,Io=e=>{N(()=>{let t=X(e.style)??{},n=X(e.properties)??[],r={};for(let n in t)r[n]=e.element.style[n];let i=Fo.get(e.key);i?i.activeCount++:Fo.set(e.key,{activeCount:1,originalStyles:r,properties:n.map(e=>e.key)}),Object.assign(e.element.style,e.style);for(let t of n)e.element.style.setProperty(t.key,t.value);w(()=>{let t=Fo.get(e.key);if(t){if(t.activeCount!==1){t.activeCount--;return}Fo.delete(e.key);for(let[n,r]of Object.entries(t.originalStyles))e.element.style[n]=r;for(let n of t.properties)e.element.style.removeProperty(n);e.element.style.length===0&&e.element.removeAttribute(`style`),e.cleanup?.()}})})},Lo=(e,t)=>{switch(t){case`x`:return[e.clientWidth,e.scrollLeft,e.scrollWidth];case`y`:return[e.clientHeight,e.scrollTop,e.scrollHeight]}},Ro=(e,t)=>{let n=getComputedStyle(e),r=t===`x`?n.overflowX:n.overflowY;return r===`auto`||r===`scroll`||e.tagName===`HTML`&&r===`visible`},zo=(e,t,n)=>{let r=t===`x`&&window.getComputedStyle(e).direction===`rtl`?-1:1,i=e,a=0,o=0,s=!1;do{let[e,c,l]=Lo(i,t),u=l-e-r*c;(c!==0||u!==0)&&Ro(i,t)&&(a+=u,o+=c),i===(n??document.documentElement)?s=!0:i=i._$host??i.parentElement}while(i&&!s);return[a,o]},[Bo,Vo]=m([]),Ho=e=>Bo().indexOf(e)===Bo().length-1,Uo=e=>{let t=L({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:`padding`,restoreScrollPosition:!0,allowPinchZoom:!1},e),n=g(),r=[0,0],i=null,a=null;N(()=>{X(t.enabled)&&(Vo(e=>[...e,n]),w(()=>{Vo(e=>e.filter(e=>e!==n))}))}),N(()=>{if(!X(t.enabled)||!X(t.hideScrollbar))return;let{body:e}=document,n=window.innerWidth-e.offsetWidth;if(X(t.preventScrollbarShift)){let r={overflow:`hidden`},i=[];n>0&&(X(t.preventScrollbarShiftMode)===`padding`?r.paddingRight=`calc(${window.getComputedStyle(e).paddingRight} + ${n}px)`:r.marginRight=`calc(${window.getComputedStyle(e).marginRight} + ${n}px)`,i.push({key:`--scrollbar-width`,value:`${n}px`}));let a=window.scrollY,o=window.scrollX;Io({key:`prevent-scroll`,element:e,style:r,properties:i,cleanup:()=>{X(t.restoreScrollPosition)&&n>0&&window.scrollTo(o,a)}})}else Io({key:`prevent-scroll`,element:e,style:{overflow:`hidden`}})}),N(()=>{!Ho(n)||!X(t.enabled)||(document.addEventListener(`wheel`,s,{passive:!1}),document.addEventListener(`touchstart`,o,{passive:!1}),document.addEventListener(`touchmove`,c,{passive:!1}),w(()=>{document.removeEventListener(`wheel`,s),document.removeEventListener(`touchstart`,o),document.removeEventListener(`touchmove`,c)}))});let o=e=>{r=Go(e),i=null,a=null},s=e=>{let n=e.target,r=X(t.element),i=Wo(e),a=Math.abs(i[0])>Math.abs(i[1])?`x`:`y`,o=Ko(n,a,a===`x`?i[0]:i[1],r),s;s=r&&Po(r,n)?!o:!0,s&&e.cancelable&&e.preventDefault()},c=e=>{let n=X(t.element),o=e.target,s;if(e.touches.length===2)s=!X(t.allowPinchZoom);else{if(i==null||a===null){let t=Go(e).map((e,t)=>r[t]-e),n=Math.abs(t[0])>Math.abs(t[1])?`x`:`y`;i=n,a=n===`x`?t[0]:t[1]}if(o.type===`range`)s=!1;else{let e=Ko(o,i,a,n);s=n&&Po(n,o)?!e:!0}}s&&e.cancelable&&e.preventDefault()}},Wo=e=>[e.deltaX,e.deltaY],Go=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],Ko=(e,t,n,r)=>{let[i,a]=zo(e,t,r!==null&&Po(r,e)?r:void 0);return!(n>0&&Math.abs(i)<=1||n<0&&Math.abs(a)<1)},qo=Uo,Jo={};jn(Jo,{Description:()=>vo,ErrorMessage:()=>Co,Item:()=>$o,ItemControl:()=>es,ItemDescription:()=>ts,ItemIndicator:()=>ns,ItemInput:()=>rs,ItemLabel:()=>is,Label:()=>as,RadioGroup:()=>ss,Root:()=>os,useRadioGroupContext:()=>Xo});var Yo=h();function Xo(){let e=P(Yo);if(e===void 0)throw Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var Zo=h();function Qo(){let e=P(Zo);if(e===void 0)throw Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function $o(e){let n=_o(),r=Xo(),[i,o]=F(J({id:`${n.generateId(`item`)}-${g()}`},e),[`value`,`disabled`,`onPointerDown`]),[s,c]=m(),[l,u]=m(),[d,f]=m(),[p,h]=m(),[_,v]=m(!1),y=t(()=>r.isDefaultValue(i.value)),b=t(()=>r.isSelectedValue(i.value)),x=t(()=>i.disabled||n.isDisabled()||!1),S=e=>{G(e,i.onPointerDown),_()&&e.preventDefault()},C=t(()=>({...n.dataset(),"data-disabled":x()?``:void 0,"data-checked":b()?``:void 0})),w={value:()=>i.value,dataset:C,isDefault:y,isSelected:b,isDisabled:x,inputId:s,labelId:l,descriptionId:d,inputRef:p,select:()=>r.setSelectedValue(i.value),generateId:Bt(()=>o.id),registerInput:fo(c),registerLabel:fo(u),registerDescription:fo(f),setIsFocused:v,setInputRef:h};return a(Zo.Provider,{value:w,get children(){return a(Y,L({as:`div`,role:`group`,onPointerDown:S},C,o))}})}function es(e){let t=Qo(),[n,r]=F(J({id:t.generateId(`control`)},e),[`onClick`,`onKeyDown`]);return a(Y,L({as:`div`,onClick:e=>{G(e,n.onClick),t.select(),t.inputRef()?.focus()},onKeyDown:e=>{G(e,n.onKeyDown),e.key===Kt.Space&&(t.select(),t.inputRef()?.focus())}},()=>t.dataset(),r))}function ts(e){let t=Qo(),n=J({id:t.generateId(`description`)},e);return N(()=>w(t.registerDescription(n.id))),a(Y,L({as:`div`},()=>t.dataset(),n))}function ns(e){let t=Qo(),[n,r]=F(J({id:t.generateId(`indicator`)},e),[`ref`,`forceMount`]),[i,o]=m(),{present:s}=po({show:()=>n.forceMount||t.isSelected(),element:()=>i()??null});return a(R,{get when(){return s()},get children(){return a(Y,L({as:`div`,ref(e){let t=ht(o,n.ref);typeof t==`function`&&t(e)}},()=>t.dataset(),r))}})}function rs(e){let t=_o(),n=Xo(),r=Qo(),[i,o]=F(J({id:r.generateId(`input`)},e),[`ref`,`style`,`aria-labelledby`,`aria-describedby`,`onChange`,`onFocus`,`onBlur`]),s=()=>[i[`aria-labelledby`],r.labelId(),i[`aria-labelledby`]!=null&&o[`aria-label`]!=null?o.id:void 0].filter(Boolean).join(` `)||void 0,c=()=>[i[`aria-describedby`],r.descriptionId(),n.ariaDescribedBy()].filter(Boolean).join(` `)||void 0,[l,u]=m(!1);return N(T([()=>r.isSelected(),()=>r.value()],e=>{if(!e[0]&&e[1]===r.value())return;u(!0);let t=r.inputRef();t?.dispatchEvent(new Event(`input`,{bubbles:!0,cancelable:!0})),t?.dispatchEvent(new Event(`change`,{bubbles:!0,cancelable:!0}))},{defer:!0})),N(()=>w(r.registerInput(o.id))),a(Y,L({as:`input`,ref(e){let t=ht(r.setInputRef,i.ref);typeof t==`function`&&t(e)},type:`radio`,get name(){return t.name()},get value(){return r.value()},get checked(){return r.isSelected()},get required(){return t.isRequired()},get disabled(){return r.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return Pt({...Dn},i.style)},get"aria-labelledby"(){return s()},get"aria-describedby"(){return c()},onChange:e=>{if(G(e,i.onChange),e.stopPropagation(),!l()){n.setSelectedValue(r.value());let t=e.target;t.checked=r.isSelected()}u(!1)},onFocus:e=>{G(e,i.onFocus),r.setIsFocused(!0)},onBlur:e=>{G(e,i.onBlur),r.setIsFocused(!1)}},()=>r.dataset(),o))}function is(e){let t=Qo(),n=J({id:t.generateId(`label`)},e);return N(()=>w(t.registerLabel(n.id))),a(Y,L({as:`label`,get for(){return t.inputId()}},()=>t.dataset(),n))}function as(e){return a(yo,L({as:`span`},e))}function os(e){let t,[n,r,i]=F(J({id:`radiogroup-${g()}`,orientation:`vertical`},e),[`ref`,`value`,`defaultValue`,`onChange`,`orientation`,`aria-labelledby`,`aria-describedby`],mo),[o,s]=In({value:()=>n.value,defaultValue:()=>n.defaultValue,onChange:e=>n.onChange?.(e)}),{formControlContext:c}=ho(r);bo(()=>t,()=>s(n.defaultValue??``));let l=()=>c.getAriaLabelledBy(z(r.id),i[`aria-label`],n[`aria-labelledby`]),u=()=>c.getAriaDescribedBy(n[`aria-describedby`]),d=t=>t===e.defaultValue,f=e=>e===o(),p={ariaDescribedBy:u,isDefaultValue:d,isSelectedValue:f,setSelectedValue:e=>{if(!(c.isReadOnly()||c.isDisabled())&&(s(e),t))for(let e of t.querySelectorAll(`[type='radio']`)){let t=e;t.checked=f(t.value)}}};return a(go.Provider,{value:c,get children(){return a(Yo.Provider,{value:p,get children(){return a(Y,L({as:`div`,ref(e){let r=ht(e=>t=e,n.ref);typeof r==`function`&&r(e)},role:`radiogroup`,get id(){return z(r.id)},get"aria-invalid"(){return c.validationState()===`invalid`||void 0},get"aria-required"(){return c.isRequired()||void 0},get"aria-disabled"(){return c.isDisabled()||void 0},get"aria-readonly"(){return c.isReadOnly()||void 0},get"aria-orientation"(){return n.orientation},get"aria-labelledby"(){return l()},get"aria-describedby"(){return u()}},()=>c.dataset(),i))}})}})}var ss=Object.assign(os,{Description:vo,ErrorMessage:Co,Item:$o,ItemControl:es,ItemDescription:ts,ItemIndicator:ns,ItemInput:rs,ItemLabel:is,Label:as}),cs=class{collection;ref;collator;constructor(e,t,n){this.collection=e,this.ref=t,this.collator=n}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;t!=null;){let e=this.collection().getItem(t);if(e&&e.type===`item`&&!e.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;t!=null;){let e=this.collection().getItem(t);if(e&&e.type===`item`&&!e.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;e!=null;){let t=this.collection().getItem(e);if(t&&t.type===`item`&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;e!=null;){let t=this.collection().getItem(e);if(t&&t.type===`item`&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){return this.ref?.()?.querySelector(`[data-key="${e}"]`)??null}getKeyPageAbove(e){let t=this.ref?.(),n=this.getItem(e);if(!t||!n)return;let r=Math.max(0,n.offsetTop+n.offsetHeight-t.offsetHeight),i=e;for(;i&&n&&n.offsetTop>r;)i=this.getKeyAbove(i),n=i==null?null:this.getItem(i);return i}getKeyPageBelow(e){let t=this.ref?.(),n=this.getItem(e);if(!t||!n)return;let r=Math.min(t.scrollHeight,n.offsetTop-n.offsetHeight+t.offsetHeight),i=e;for(;i&&n&&n.offsetTop<r;)i=this.getKeyBelow(i),n=i==null?null:this.getItem(i);return i}getKeyForSearch(e,t){let n=this.collator?.();if(!n)return;let r=t==null?this.getFirstKey():this.getKeyBelow(t);for(;r!=null;){let t=this.collection().getItem(r);if(t){let i=t.textValue.slice(0,e.length);if(t.textValue&&n.compare(i,e)===0)return r}r=this.getKeyBelow(r)}}};function ls(e,n,r){let i=er({usage:`search`,sensitivity:`base`});return dr({selectionManager:()=>z(e.selectionManager),keyboardDelegate:t(()=>z(e.keyboardDelegate)||new cs(e.collection,n,i)),autoFocus:()=>z(e.autoFocus),deferAutoFocus:()=>z(e.deferAutoFocus),shouldFocusWrap:()=>z(e.shouldFocusWrap),disallowEmptySelection:()=>z(e.disallowEmptySelection),selectOnFocus:()=>z(e.selectOnFocus),disallowTypeAhead:()=>z(e.disallowTypeAhead),shouldUseVirtualFocus:()=>z(e.shouldUseVirtualFocus),allowsTabNavigation:()=>z(e.allowsTabNavigation),isVirtualized:()=>z(e.isVirtualized),scrollToKey:t=>z(e.scrollToKey)?.(t),orientation:()=>z(e.orientation)},n)}var us=h();function ds(){return P(us)}var fs=h();function ps(){return P(fs)}var ms=h();function hs(){return P(ms)}function gs(){let e=hs();if(e===void 0)throw Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var _s=h();function vs(){let e=P(_s);if(e===void 0)throw Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var ys=h();function bs(){let e=P(ys);if(e===void 0)throw Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function xs(e){let n,r=bs(),i=gs(),[o,s]=F(J({id:r.generateId(`item-${g()}`)},e),[`ref`,`textValue`,`disabled`,`closeOnSelect`,`checked`,`indeterminate`,`onSelect`,`onPointerMove`,`onPointerLeave`,`onPointerDown`,`onPointerUp`,`onClick`,`onKeyDown`,`onMouseDown`,`onFocus`]),[c,l]=m(),[u,d]=m(),[f,p]=m(),h=()=>i.listState().selectionManager(),_=()=>s.id,v=()=>h().focusedKey()===_(),y=()=>{o.onSelect?.(),o.closeOnSelect&&setTimeout(()=>{i.close(!0)})};Dr({getItem:()=>({ref:()=>n,type:`item`,key:_(),textValue:o.textValue??f()?.textContent??n?.textContent??``,disabled:o.disabled??!1})});let b=fr({key:_,selectionManager:h,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>o.disabled},()=>n),x=e=>{G(e,o.onPointerMove),e.pointerType===`mouse`&&(o.disabled?i.onItemLeave(e):(i.onItemEnter(e),e.defaultPrevented||(q(e.currentTarget),i.listState().selectionManager().setFocused(!0),i.listState().selectionManager().setFocusedKey(_()))))},S=e=>{G(e,o.onPointerLeave),e.pointerType===`mouse`&&i.onItemLeave(e)},C=e=>{G(e,o.onPointerUp),!o.disabled&&e.button===0&&y()},w=e=>{if(G(e,o.onKeyDown),!e.repeat&&!o.disabled)switch(e.key){case`Enter`:case` `:y();break}},T=t(()=>{if(o.indeterminate)return`mixed`;if(o.checked!=null)return o.checked}),E=t(()=>({"data-indeterminate":o.indeterminate?``:void 0,"data-checked":o.checked&&!o.indeterminate?``:void 0,"data-disabled":o.disabled?``:void 0,"data-highlighted":v()?``:void 0})),D={isChecked:()=>o.checked,dataset:E,setLabelRef:p,generateId:Bt(()=>s.id),registerLabel:fo(l),registerDescription:fo(d)};return a(_s.Provider,{value:D,get children(){return a(Y,L({as:`div`,ref(e){let t=ht(e=>n=e,o.ref);typeof t==`function`&&t(e)},get tabIndex(){return b.tabIndex()},get"aria-checked"(){return T()},get"aria-disabled"(){return o.disabled},get"aria-labelledby"(){return c()},get"aria-describedby"(){return u()},get"data-key"(){return b.dataKey()},get onPointerDown(){return K([o.onPointerDown,b.onPointerDown])},get onPointerUp(){return K([C,b.onPointerUp])},get onClick(){return K([o.onClick,b.onClick])},get onKeyDown(){return K([w,b.onKeyDown])},get onMouseDown(){return K([o.onMouseDown,b.onMouseDown])},get onFocus(){return K([o.onFocus,b.onFocus])},onPointerMove:x,onPointerLeave:S},E,s))}})}function Ss(e){let[t,n]=F(J({closeOnSelect:!1},e),[`checked`,`defaultChecked`,`onChange`,`onSelect`]),r=zn({isSelected:()=>t.checked,defaultIsSelected:()=>t.defaultChecked,onSelectedChange:e=>t.onChange?.(e),isDisabled:()=>n.disabled});return a(xs,L({role:`menuitemcheckbox`,get checked(){return r.isSelected()},onSelect:()=>{t.onSelect?.(),r.toggle()}},n))}var Cs={next:(e,t)=>e===`ltr`?t===`horizontal`?`ArrowRight`:`ArrowDown`:t===`horizontal`?`ArrowLeft`:`ArrowUp`,previous:(e,t)=>Cs.next(e===`ltr`?`rtl`:`ltr`,t)},ws={first:e=>e===`horizontal`?`ArrowDown`:`ArrowRight`,last:e=>e===`horizontal`?`ArrowUp`:`ArrowLeft`};function Ts(e){let n=bs(),r=gs(),i=ds(),{direction:o}=Qn(),[s,c]=F(J({id:n.generateId(`trigger`)},e),[`ref`,`id`,`disabled`,`onPointerDown`,`onClick`,`onKeyDown`,`onMouseOver`,`onFocus`]),l=()=>n.value();i!==void 0&&(l=()=>n.value()??s.id,i.lastValue()===void 0&&i.setLastValue(l));let u=On(()=>r.triggerRef(),()=>`button`),f=t(()=>u()===`a`&&r.triggerRef()?.getAttribute(`href`)!=null);N(T(()=>i?.value(),e=>{f()&&e===l()&&r.triggerRef()?.focus()}));let p=()=>{i===void 0?r.toggle(!0):r.isOpen()?i.value()===l()&&i.closeMenu():(i.autoFocusMenu()||i.setAutoFocusMenu(!0),r.open(!1))};return N(()=>w(r.registerTriggerId(s.id))),a(Pn,L({ref(e){let t=ht(r.setTriggerRef,s.ref);typeof t==`function`&&t(e)},get"data-kb-menu-value-trigger"(){return n.value()},get id(){return s.id},get disabled(){return s.disabled},"aria-haspopup":`true`,get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return d(()=>!!r.isOpen())()?r.contentId():void 0},get"data-highlighted"(){return l()!==void 0&&i?.value()===l()?!0:void 0},get tabIndex(){return i===void 0?void 0:i.value()===l()||i.lastValue()===l()?0:-1},onPointerDown:e=>{G(e,s.onPointerDown),e.currentTarget.dataset.pointerType=e.pointerType,!s.disabled&&e.pointerType!==`touch`&&e.button===0&&p()},onMouseOver:e=>{G(e,s.onMouseOver),r.triggerRef()?.dataset.pointerType!==`touch`&&!s.disabled&&i!==void 0&&i.value()!==void 0&&i.setValue(l)},onClick:e=>{G(e,s.onClick),s.disabled||e.currentTarget.dataset.pointerType===`touch`&&p()},onKeyDown:e=>{if(G(e,s.onKeyDown),!s.disabled){if(f())switch(e.key){case`Enter`:case` `:return}switch(e.key){case`Enter`:case` `:case ws.first(n.orientation()):e.stopPropagation(),e.preventDefault(),En(e.currentTarget),r.open(`first`),i?.setAutoFocusMenu(!0),i?.setValue(l);break;case ws.last(n.orientation()):e.stopPropagation(),e.preventDefault(),r.open(`last`);break;case Cs.next(o(),n.orientation()):if(i===void 0)break;e.stopPropagation(),e.preventDefault(),i.nextMenu();break;case Cs.previous(o(),n.orientation()):if(i===void 0)break;e.stopPropagation(),e.preventDefault(),i.previousMenu();break}}},onFocus:e=>{G(e,s.onFocus),i!==void 0&&e.currentTarget.dataset.pointerType!==`touch`&&i.setValue(l)},role:i===void 0?void 0:`menuitem`},()=>r.dataset(),c))}function Es(e){let t,n=bs(),r=gs(),i=ds(),o=ps(),{direction:s}=Qn(),[c,l]=F(J({id:n.generateId(`content-${g()}`)},e),[`ref`,`id`,`style`,`onOpenAutoFocus`,`onCloseAutoFocus`,`onEscapeKeyDown`,`onFocusOutside`,`onPointerEnter`,`onPointerMove`,`onKeyDown`,`onMouseDown`,`onFocusIn`,`onFocusOut`]),u=0,f=()=>r.parentMenuContext()==null&&i===void 0&&n.isModal(),p=ls({selectionManager:r.listState().selectionManager,collection:r.listState().collection,autoFocus:r.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!r.listState().selectionManager().isFocused(),orientation:()=>n.orientation()===`horizontal`?`vertical`:`horizontal`},()=>t);Oo({trapFocus:()=>f()&&r.isOpen(),onMountAutoFocus:e=>{i===void 0&&c.onOpenAutoFocus?.(e)},onUnmountAutoFocus:c.onCloseAutoFocus},()=>t);let m=e=>{if(Vt(e.currentTarget,e.target)&&(e.key===`Tab`&&r.isOpen()&&e.preventDefault(),i!==void 0&&e.currentTarget.getAttribute(`aria-haspopup`)!==`true`))switch(e.key){case Cs.next(s(),n.orientation()):e.stopPropagation(),e.preventDefault(),r.close(!0),i.setAutoFocusMenu(!0),i.nextMenu();break;case Cs.previous(s(),n.orientation()):if(e.currentTarget.hasAttribute(`data-closed`))break;e.stopPropagation(),e.preventDefault(),r.close(!0),i.setAutoFocusMenu(!0),i.previousMenu();break}},h=e=>{c.onEscapeKeyDown?.(e),i?.setAutoFocusMenu(!1),r.close(!0)},_=e=>{c.onFocusOutside?.(e),n.isModal()&&e.preventDefault()},v=e=>{G(e,c.onPointerEnter),r.isOpen()&&(r.parentMenuContext()?.listState().selectionManager().setFocused(!1),r.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0))},y=e=>{if(G(e,c.onPointerMove),e.pointerType!==`mouse`)return;let t=e.target,n=u!==e.clientX;Vt(e.currentTarget,t)&&n&&(r.setPointerDir(e.clientX>u?`right`:`left`),u=e.clientX)};N(()=>w(r.registerContentId(c.id))),w(()=>r.setContentRef(void 0));let b={ref:ht(e=>{r.setContentRef(e),t=e},c.ref),role:`menu`,get id(){return c.id},get tabIndex(){return p.tabIndex()},get"aria-labelledby"(){return r.triggerId()},onKeyDown:K([c.onKeyDown,p.onKeyDown,m]),onMouseDown:K([c.onMouseDown,p.onMouseDown]),onFocusIn:K([c.onFocusIn,p.onFocusIn]),onFocusOut:K([c.onFocusOut,p.onFocusOut]),onPointerEnter:v,onPointerMove:y,get"data-orientation"(){return n.orientation()}};return a(R,{get when(){return r.contentPresent()},get children(){return a(R,{get when(){return o===void 0||r.parentMenuContext()!=null},get fallback(){return a(Y,L({as:`div`},()=>r.dataset(),b,l))},get children(){return a(za.Positioner,{get children(){return a(lo,L({get disableOutsidePointerEvents(){return d(()=>!!f())()&&r.isOpen()},get excludedElements(){return[r.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return Pt({"--kb-menu-content-transform-origin":`var(--kb-popper-content-transform-origin)`,position:`relative`},c.style)},onEscapeKeyDown:h,onFocusOutside:_,get onDismiss(){return r.close}},()=>r.dataset(),b,l))}})}})}})}function Ds(e){let t,n=bs(),r=gs(),[i,o]=F(e,[`ref`]);return qo({element:()=>t??null,enabled:()=>r.contentPresent()&&n.preventScroll()}),a(Es,L({ref(e){let n=ht(e=>{t=e},i.ref);typeof n==`function`&&n(e)}},o))}var Os=h();function ks(){let e=P(Os);if(e===void 0)throw Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}function As(e){let t=J({id:bs().generateId(`group-${g()}`)},e),[n,r]=m(),i={generateId:Bt(()=>t.id),registerLabelId:fo(r)};return a(Os.Provider,{value:i,get children(){return a(Y,L({as:`div`,role:`group`,get"aria-labelledby"(){return n()}},t))}})}function js(e){let t=ks(),[n,r]=F(J({id:t.generateId(`label`)},e),[`id`]);return N(()=>w(t.registerLabelId(n.id))),a(Y,L({as:`span`,get id(){return n.id},"aria-hidden":`true`},r))}function Ms(e){let t=gs();return a(Y,L({as:`span`,"aria-hidden":`true`},()=>t.dataset(),J({children:`▼`},e)))}function Ns(e){return a(xs,L({role:`menuitem`,closeOnSelect:!0},e))}function Ps(e){let t=vs(),[n,r]=F(J({id:t.generateId(`description`)},e),[`id`]);return N(()=>w(t.registerDescription(n.id))),a(Y,L({as:`div`,get id(){return n.id}},()=>t.dataset(),r))}function Fs(e){let t=vs(),[n,r]=F(J({id:t.generateId(`indicator`)},e),[`forceMount`]);return a(R,{get when(){return n.forceMount||t.isChecked()},get children(){return a(Y,L({as:`div`},()=>t.dataset(),r))}})}function Is(e){let t=vs(),[n,r]=F(J({id:t.generateId(`label`)},e),[`ref`,`id`]);return N(()=>w(t.registerLabel(n.id))),a(Y,L({as:`div`,ref(e){let r=ht(t.setLabelRef,n.ref);typeof r==`function`&&r(e)},get id(){return n.id}},()=>t.dataset(),r))}function Ls(e){let t=gs();return a(R,{get when(){return t.contentPresent()},get children(){return a(le,e)}})}var Rs=h();function zs(){let e=P(Rs);if(e===void 0)throw Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}function Bs(e){let[t,n]=F(J({id:bs().generateId(`radiogroup-${g()}`)},e),[`value`,`defaultValue`,`onChange`,`disabled`]),[r,i]=In({value:()=>t.value,defaultValue:()=>t.defaultValue,onChange:e=>t.onChange?.(e)});return a(Rs.Provider,{value:{isDisabled:()=>t.disabled,isSelectedValue:e=>e===r(),setSelectedValue:e=>i(e)},get children(){return a(As,n)}})}function Vs(e){let t=zs(),[n,r]=F(J({closeOnSelect:!1},e),[`value`,`onSelect`]);return a(xs,L({role:`menuitemradio`,get checked(){return t.isSelectedValue(n.value)},onSelect:()=>{n.onSelect?.(),t.setSelectedValue(n.value)}},r))}function Hs(e,t,n){let r=e.split(`-`)[0],i=n.getBoundingClientRect(),a=[],o=t.clientX,s=t.clientY;switch(r){case`top`:a.push([o,s+5]),a.push([i.left,i.bottom]),a.push([i.left,i.top]),a.push([i.right,i.top]),a.push([i.right,i.bottom]);break;case`right`:a.push([o-5,s]),a.push([i.left,i.top]),a.push([i.right,i.top]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]);break;case`bottom`:a.push([o,s-5]),a.push([i.right,i.top]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]),a.push([i.left,i.top]);break;case`left`:a.push([o+5,s]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]),a.push([i.left,i.top]),a.push([i.right,i.top]);break}return a}function Us(e,t){return t?bn([e.clientX,e.clientY],t):!1}function Ws(e){let n=bs(),r=_r(),i=hs(),o=ds(),s=ps(),[c,l]=F(J({placement:n.orientation()===`horizontal`?`bottom-start`:`right-start`},e),[`open`,`defaultOpen`,`onOpenChange`]),u=0,d=null,f=`right`,[p,h]=m(),[g,_]=m(),[v,y]=m(),[b,x]=m(),[S,C]=m(!0),[T,E]=m(l.placement),[D,O]=m([]),[ee,k]=m([]),{DomCollectionProvider:A}=Er({items:ee,onItemsChange:k}),j=uo({open:()=>c.open,defaultOpen:()=>c.defaultOpen,onOpenChange:e=>c.onOpenChange?.(e)}),{present:te}=po({show:()=>n.forceMount()||j.isOpen(),element:()=>b()??null}),ne=hr({selectionMode:`none`,dataSource:ee}),M=e=>{C(e),j.open()},P=(e=!1)=>{j.close(),e&&i&&i.close(!0)},re=e=>{C(e),j.toggle()},I=()=>{let e=b();e&&(q(e),ne.selectionManager().setFocused(!0),ne.selectionManager().setFocusedKey(void 0))},ie=()=>{s==null?I():setTimeout(()=>I())},ae=e=>{O(t=>[...t,e]);let t=i?.registerNestedMenu(e);return()=>{O(t=>It(t,e)),t?.()}},oe=e=>f===d?.side&&Us(e,d?.area),se=e=>{oe(e)&&e.preventDefault()},ce=e=>{oe(e)||ie()},le=e=>{oe(e)&&e.preventDefault()};Ao({isDisabled:()=>!(i==null&&j.isOpen()&&n.isModal()),targets:()=>[b(),...D()].filter(Boolean)}),N(()=>{let e=b();if(!e||!i)return;let t=i.registerNestedMenu(e);w(()=>{t()})}),N(()=>{i===void 0&&o?.registerMenu(n.value(),[b(),...D()])}),N(()=>{i!==void 0||o===void 0||(o.value()===n.value()?(v()?.focus(),o.autoFocusMenu()&&M(!0)):P())}),N(()=>{i!==void 0||o===void 0||j.isOpen()&&o.setValue(n.value())}),w(()=>{i===void 0&&o?.unregisterMenu(n.value())});let ue={dataset:t(()=>({"data-expanded":j.isOpen()?``:void 0,"data-closed":j.isOpen()?void 0:``})),isOpen:j.isOpen,contentPresent:te,nestedMenus:D,currentPlacement:T,pointerGraceTimeoutId:()=>u,autoFocus:S,listState:()=>ne,parentMenuContext:()=>i,triggerRef:v,contentRef:b,triggerId:p,contentId:g,setTriggerRef:y,setContentRef:x,open:M,close:P,toggle:re,focusContent:ie,onItemEnter:se,onItemLeave:ce,onTriggerLeave:le,setPointerDir:e=>f=e,setPointerGraceTimeoutId:e=>u=e,setPointerGraceIntent:e=>d=e,registerNestedMenu:ae,registerItemToParentDomCollection:r?.registerItem,registerTriggerId:fo(h),registerContentId:fo(_)};return a(A,{get children(){return a(ms.Provider,{value:ue,get children(){return a(R,{when:s===void 0,get fallback(){return l.children},get children(){return a(za,L({anchorRef:v,contentRef:b,onCurrentPlacementChange:E},l))}})}})}})}function Gs(e){let{direction:t}=Qn();return a(Ws,L({get placement(){return t()===`rtl`?`left-start`:`right-start`},flip:!0},e))}var Ks={close:(e,t)=>e===`ltr`?[t===`horizontal`?`ArrowLeft`:`ArrowUp`]:[t===`horizontal`?`ArrowRight`:`ArrowDown`]};function qs(e){let t=gs(),n=bs(),[r,i]=F(e,[`onFocusOutside`,`onKeyDown`]),{direction:o}=Qn();return a(Es,L({onOpenAutoFocus:e=>{e.preventDefault()},onCloseAutoFocus:e=>{e.preventDefault()},onFocusOutside:e=>{r.onFocusOutside?.(e);let n=e.target;Vt(t.triggerRef(),n)||t.close()},onKeyDown:e=>{G(e,r.onKeyDown);let i=Vt(e.currentTarget,e.target),a=Ks.close(o(),n.orientation()).includes(e.key),s=t.parentMenuContext()!=null;i&&a&&s&&(t.close(),q(t.triggerRef()))}},i))}var Js=[`Enter`,` `],Ys={open:(e,t)=>e===`ltr`?[...Js,t===`horizontal`?`ArrowRight`:`ArrowDown`]:[...Js,t===`horizontal`?`ArrowLeft`:`ArrowUp`]};function Xs(e){let t,n=bs(),r=gs(),[i,o]=F(J({id:n.generateId(`sub-trigger-${g()}`)},e),[`ref`,`id`,`textValue`,`disabled`,`onPointerMove`,`onPointerLeave`,`onPointerDown`,`onPointerUp`,`onClick`,`onKeyDown`,`onMouseDown`,`onFocus`]),s=null,c=()=>{s&&window.clearTimeout(s),s=null},{direction:l}=Qn(),u=()=>i.id,f=()=>{let e=r.parentMenuContext();if(e==null)throw Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return e.listState().selectionManager()},p=()=>r.listState().collection(),m=()=>f().focusedKey()===u(),h=fr({key:u,selectionManager:f,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>i.disabled},()=>t),_=e=>{G(e,i.onClick),!r.isOpen()&&!i.disabled&&r.open(!0)},v=e=>{if(G(e,i.onPointerMove),e.pointerType!==`mouse`)return;let t=r.parentMenuContext();if(t?.onItemEnter(e),!e.defaultPrevented){if(i.disabled){t?.onItemLeave(e);return}!r.isOpen()&&!s&&(r.parentMenuContext()?.setPointerGraceIntent(null),s=window.setTimeout(()=>{r.open(!1),c()},100)),t?.onItemEnter(e),e.defaultPrevented||(r.listState().selectionManager().isFocused()&&(r.listState().selectionManager().setFocused(!1),r.listState().selectionManager().setFocusedKey(void 0)),q(e.currentTarget),t?.listState().selectionManager().setFocused(!0),t?.listState().selectionManager().setFocusedKey(u()))}},y=e=>{if(G(e,i.onPointerLeave),e.pointerType!==`mouse`)return;c();let t=r.parentMenuContext(),n=r.contentRef();if(n){t?.setPointerGraceIntent({area:Hs(r.currentPlacement(),e,n),side:r.currentPlacement().split(`-`)[0]}),window.clearTimeout(t?.pointerGraceTimeoutId());let i=window.setTimeout(()=>{t?.setPointerGraceIntent(null)},300);t?.setPointerGraceTimeoutId(i)}else{if(t?.onTriggerLeave(e),e.defaultPrevented)return;t?.setPointerGraceIntent(null)}t?.onItemLeave(e)},b=e=>{G(e,i.onKeyDown),!e.repeat&&(i.disabled||Ys.open(l(),n.orientation()).includes(e.key)&&(e.stopPropagation(),e.preventDefault(),f().setFocused(!1),f().setFocusedKey(void 0),r.isOpen()||r.open(`first`),r.focusContent(),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(p().getFirstKey())))};return N(()=>{if(r.registerItemToParentDomCollection==null)throw Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");w(r.registerItemToParentDomCollection({ref:()=>t,type:`item`,key:u(),textValue:i.textValue??t?.textContent??``,disabled:i.disabled??!1}))}),N(T(()=>r.parentMenuContext()?.pointerGraceTimeoutId(),e=>{w(()=>{window.clearTimeout(e),r.parentMenuContext()?.setPointerGraceIntent(null)})})),N(()=>w(r.registerTriggerId(i.id))),w(()=>{c()}),a(Y,L({as:`div`,ref(e){let n=ht(e=>{r.setTriggerRef(e),t=e},i.ref);typeof n==`function`&&n(e)},get id(){return i.id},role:`menuitem`,get tabIndex(){return h.tabIndex()},"aria-haspopup":`true`,get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return d(()=>!!r.isOpen())()?r.contentId():void 0},get"aria-disabled"(){return i.disabled},get"data-key"(){return h.dataKey()},get"data-highlighted"(){return m()?``:void 0},get"data-disabled"(){return i.disabled?``:void 0},get onPointerDown(){return K([i.onPointerDown,h.onPointerDown])},get onPointerUp(){return K([i.onPointerUp,h.onPointerUp])},get onClick(){return K([_,h.onClick])},get onKeyDown(){return K([b,h.onKeyDown])},get onMouseDown(){return K([i.onMouseDown,h.onMouseDown])},get onFocus(){return K([i.onFocus,h.onFocus])},onPointerMove:v,onPointerLeave:y},()=>r.dataset(),o))}function Zs(e){let t=ds(),[n,r]=F(J({id:`menu-${g()}`,modal:!0},e),[`id`,`modal`,`preventScroll`,`forceMount`,`open`,`defaultOpen`,`onOpenChange`,`value`,`orientation`]),i=uo({open:()=>n.open,defaultOpen:()=>n.defaultOpen,onOpenChange:e=>n.onOpenChange?.(e)}),o={isModal:()=>n.modal??!0,preventScroll:()=>n.preventScroll??o.isModal(),forceMount:()=>n.forceMount??!1,generateId:Bt(()=>n.id),value:()=>n.value,orientation:()=>n.orientation??t?.orientation()??`horizontal`};return a(ys.Provider,{value:o,get children(){return a(Ws,L({get open(){return i.isOpen()},get onOpenChange(){return i.setIsOpen}},r))}})}jn({},{Root:()=>Qs,Separator:()=>$s});function Qs(e){let t,[n,r]=F(J({orientation:`horizontal`},e),[`ref`,`orientation`]),i=On(()=>t,()=>`hr`);return a(Y,L({as:`hr`,ref(e){let r=ht(e=>t=e,n.ref);typeof r==`function`&&r(e)},get role(){return i()===`hr`?void 0:`separator`},get"aria-orientation"(){return n.orientation===`vertical`?`vertical`:void 0},get"data-orientation"(){return n.orientation}},r))}var $s=Qs,Z={};jn(Z,{Arrow:()=>Aa,CheckboxItem:()=>Ss,Content:()=>ec,DropdownMenu:()=>nc,Group:()=>As,GroupLabel:()=>js,Icon:()=>Ms,Item:()=>Ns,ItemDescription:()=>Ps,ItemIndicator:()=>Fs,ItemLabel:()=>Is,Portal:()=>Ls,RadioGroup:()=>Bs,RadioItem:()=>Vs,Root:()=>tc,Separator:()=>Qs,Sub:()=>Gs,SubContent:()=>qs,SubTrigger:()=>Xs,Trigger:()=>Ts});function ec(e){let t=bs(),n=gs(),[r,i]=F(e,[`onCloseAutoFocus`,`onInteractOutside`]),o=!1;return a(Ds,L({onCloseAutoFocus:e=>{r.onCloseAutoFocus?.(e),o||q(n.triggerRef()),o=!1,e.preventDefault()},onInteractOutside:e=>{r.onInteractOutside?.(e),(!t.isModal()||e.detail.isContextMenu)&&(o=!0)}},i))}function tc(e){return a(Zs,J({id:`dropdownmenu-${g()}`},e))}var nc=Object.assign(tc,{Arrow:Aa,CheckboxItem:Ss,Content:ec,Group:As,GroupLabel:js,Icon:Ms,Item:Ns,ItemDescription:Ps,ItemIndicator:Fs,ItemLabel:Is,Portal:Ls,RadioGroup:Bs,RadioItem:Vs,Separator:Qs,Sub:Gs,SubContent:qs,SubTrigger:Xs,Trigger:Ts}),Q={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{100:`ff`,90:`e5`,80:`cc`,70:`b3`,60:`99`,50:`80`,40:`66`,30:`4d`,20:`33`,10:`1a`,0:`00`},font:{size:{"2xs":`calc(var(--tsqd-font-size) * 0.625)`,xs:`calc(var(--tsqd-font-size) * 0.75)`,sm:`calc(var(--tsqd-font-size) * 0.875)`,md:`var(--tsqd-font-size)`,lg:`calc(var(--tsqd-font-size) * 1.125)`,xl:`calc(var(--tsqd-font-size) * 1.25)`,"2xl":`calc(var(--tsqd-font-size) * 1.5)`,"3xl":`calc(var(--tsqd-font-size) * 1.875)`,"4xl":`calc(var(--tsqd-font-size) * 2.25)`,"5xl":`calc(var(--tsqd-font-size) * 3)`,"6xl":`calc(var(--tsqd-font-size) * 3.75)`,"7xl":`calc(var(--tsqd-font-size) * 4.5)`,"8xl":`calc(var(--tsqd-font-size) * 6)`,"9xl":`calc(var(--tsqd-font-size) * 8)`},lineHeight:{xs:`calc(var(--tsqd-font-size) * 1)`,sm:`calc(var(--tsqd-font-size) * 1.25)`,md:`calc(var(--tsqd-font-size) * 1.5)`,lg:`calc(var(--tsqd-font-size) * 1.75)`,xl:`calc(var(--tsqd-font-size) * 2)`,"2xl":`calc(var(--tsqd-font-size) * 2.25)`,"3xl":`calc(var(--tsqd-font-size) * 2.5)`,"4xl":`calc(var(--tsqd-font-size) * 2.75)`,"5xl":`calc(var(--tsqd-font-size) * 3)`,"6xl":`calc(var(--tsqd-font-size) * 3.25)`,"7xl":`calc(var(--tsqd-font-size) * 3.5)`,"8xl":`calc(var(--tsqd-font-size) * 3.75)`,"9xl":`calc(var(--tsqd-font-size) * 4)`},weight:{thin:`100`,extralight:`200`,light:`300`,normal:`400`,medium:`500`,semibold:`600`,bold:`700`,extrabold:`800`,black:`900`}},breakpoints:{xs:`320px`,sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},border:{radius:{none:`0px`,xs:`calc(var(--tsqd-font-size) * 0.125)`,sm:`calc(var(--tsqd-font-size) * 0.25)`,md:`calc(var(--tsqd-font-size) * 0.375)`,lg:`calc(var(--tsqd-font-size) * 0.5)`,xl:`calc(var(--tsqd-font-size) * 0.75)`,"2xl":`calc(var(--tsqd-font-size) * 1)`,"3xl":`calc(var(--tsqd-font-size) * 1.5)`,full:`9999px`}},size:{0:`0px`,.25:`calc(var(--tsqd-font-size) * 0.0625)`,.5:`calc(var(--tsqd-font-size) * 0.125)`,1:`calc(var(--tsqd-font-size) * 0.25)`,1.5:`calc(var(--tsqd-font-size) * 0.375)`,2:`calc(var(--tsqd-font-size) * 0.5)`,2.5:`calc(var(--tsqd-font-size) * 0.625)`,3:`calc(var(--tsqd-font-size) * 0.75)`,3.5:`calc(var(--tsqd-font-size) * 0.875)`,4:`calc(var(--tsqd-font-size) * 1)`,4.5:`calc(var(--tsqd-font-size) * 1.125)`,5:`calc(var(--tsqd-font-size) * 1.25)`,5.5:`calc(var(--tsqd-font-size) * 1.375)`,6:`calc(var(--tsqd-font-size) * 1.5)`,6.5:`calc(var(--tsqd-font-size) * 1.625)`,7:`calc(var(--tsqd-font-size) * 1.75)`,8:`calc(var(--tsqd-font-size) * 2)`,9:`calc(var(--tsqd-font-size) * 2.25)`,10:`calc(var(--tsqd-font-size) * 2.5)`,11:`calc(var(--tsqd-font-size) * 2.75)`,12:`calc(var(--tsqd-font-size) * 3)`,14:`calc(var(--tsqd-font-size) * 3.5)`,16:`calc(var(--tsqd-font-size) * 4)`,20:`calc(var(--tsqd-font-size) * 5)`,24:`calc(var(--tsqd-font-size) * 6)`,28:`calc(var(--tsqd-font-size) * 7)`,32:`calc(var(--tsqd-font-size) * 8)`,36:`calc(var(--tsqd-font-size) * 9)`,40:`calc(var(--tsqd-font-size) * 10)`,44:`calc(var(--tsqd-font-size) * 11)`,48:`calc(var(--tsqd-font-size) * 12)`,52:`calc(var(--tsqd-font-size) * 13)`,56:`calc(var(--tsqd-font-size) * 14)`,60:`calc(var(--tsqd-font-size) * 15)`,64:`calc(var(--tsqd-font-size) * 16)`,72:`calc(var(--tsqd-font-size) * 18)`,80:`calc(var(--tsqd-font-size) * 20)`,96:`calc(var(--tsqd-font-size) * 24)`},shadow:{xs:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 2px 0 rgb(0 0 0 / 0.05)`,sm:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e=`rgb(0 0 0 / 0.1)`)=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e=`rgb(0 0 0 / 0.1)`)=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e=`rgb(0 0 0 / 0.1)`)=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e=`rgb(0 0 0 / 0.25)`)=>`0 25px 50px -12px ${e}`,inner:(e=`rgb(0 0 0 / 0.05)`)=>`inset 0 2px 4px 0 ${e}`,none:()=>`none`},zIndices:{hide:-1,auto:`auto`,base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},rc=O(`<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),ic=O(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),ac=O(`<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),oc=O(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),sc=O(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),cc=O(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg style=transform:rotate(90deg)><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),lc=O(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg style=transform:rotate(-90deg)><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`),uc=O(`<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),dc=O(`<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),fc=O(`<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),pc=O(`<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">`),mc=O(`<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">`),hc=O(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),gc=O(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),_c=O(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>`),vc=O(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),yc=O(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),bc=O(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),xc=O(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>`),Sc=O(`<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Cc=O(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),wc=O(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>`),Tc=O(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Ec=O(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),Dc=O(`<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>`);function Oc(){return rc()}function kc(){return ic()}function Ac(){return ac()}function jc(){return oc()}function Mc(){return sc()}function Nc(){return cc()}function Pc(){return lc()}function Fc(){return uc()}function Ic(){return dc()}function Lc(){return fc()}function Rc(){return pc()}function zc(){return mc()}function Bc(){return hc()}function Vc(){return gc()}function Hc(){return _c()}function Uc(){return vc()}function Wc(t){return(()=>{var n=yc(),r=n.firstChild;return M(()=>e(r,`stroke`,t.theme===`dark`?`#12B76A`:`#027A48`)),n})()}function Gc(){return bc()}function Kc(){return xc()}function qc(t){return[a(R,{get when(){return t.checked},get children(){var n=yc(),r=n.firstChild;return M(()=>e(r,`stroke`,t.theme===`dark`?`#9B8AFB`:`#6938EF`)),n}}),a(R,{get when(){return!t.checked},get children(){var n=Sc(),r=n.firstChild;return M(()=>e(r,`stroke`,t.theme===`dark`?`#9B8AFB`:`#6938EF`)),n}})]}function Jc(){return Cc()}function Yc(){return wc()}function Xc(){return Tc()}function Zc(){return Ec()}function Qc(){let t=g();return(()=>{var n=Dc(),r=n.firstChild,i=r.nextSibling,a=i.nextSibling,o=a.firstChild,s=a.nextSibling,c=s.firstChild,l=s.nextSibling,u=l.nextSibling,d=u.firstChild,f=u.nextSibling,p=f.firstChild,m=f.nextSibling,h=m.nextSibling,g=h.firstChild,_=h.nextSibling,v=_.firstChild,y=_.nextSibling,b=y.nextSibling,x=b.firstChild,S=b.nextSibling,C=S.firstChild,w=S.nextSibling,T=w.nextSibling,E=T.firstChild,D=T.nextSibling,O=D.firstChild,ee=D.nextSibling,k=ee.nextSibling,A=k.firstChild,j=k.nextSibling,te=j.firstChild,ne=j.nextSibling,M=ne.nextSibling,N=M.firstChild,P=M.nextSibling,re=P.firstChild,F=P.nextSibling,I=F.firstChild.nextSibling.nextSibling.nextSibling,ie=I.nextSibling,L=F.nextSibling,ae=L.firstChild,oe=L.nextSibling,se=oe.firstChild,ce=oe.nextSibling,le=ce.firstChild,ue=le.nextSibling,de=ue.nextSibling.firstChild,R=de.nextSibling,fe=R.nextSibling,pe=fe.nextSibling,me=pe.nextSibling,he=me.nextSibling,ge=he.nextSibling,z=ge.nextSibling,_e=z.nextSibling,ve=_e.nextSibling,ye=ve.nextSibling,be=ye.nextSibling,xe=ce.nextSibling,Se=xe.firstChild,Ce=xe.nextSibling,we=Ce.firstChild,B=Ce.nextSibling,Te=B.firstChild,Ee=Te.nextSibling,De=B.nextSibling,Oe=De.firstChild,ke=De.nextSibling,Ae=ke.firstChild,je=ke.nextSibling,Me=je.firstChild,Ne=Me.nextSibling,Pe=Ne.nextSibling,Fe=Pe.nextSibling,Ie=Fe.nextSibling,Le=Ie.nextSibling,V=Le.nextSibling,Re=V.nextSibling,ze=Re.nextSibling,Be=ze.nextSibling,Ve=Be.nextSibling,He=Ve.nextSibling,H=He.nextSibling,Ue=H.nextSibling,We=Ue.nextSibling,Ge=We.nextSibling,Ke=Ge.nextSibling,qe=Ke.nextSibling;return e(r,`id`,`a-${t}`),e(i,`fill`,`url(#a-${t})`),e(o,`id`,`am-${t}`),e(s,`id`,`b-${t}`),e(c,`filter`,`url(#am-${t})`),e(l,`mask`,`url(#b-${t})`),e(d,`id`,`ah-${t}`),e(f,`id`,`k-${t}`),e(p,`filter`,`url(#ah-${t})`),e(m,`mask`,`url(#k-${t})`),e(g,`id`,`ae-${t}`),e(_,`id`,`j-${t}`),e(v,`filter`,`url(#ae-${t})`),e(y,`mask`,`url(#j-${t})`),e(x,`id`,`ai-${t}`),e(S,`id`,`i-${t}`),e(C,`filter`,`url(#ai-${t})`),e(w,`mask`,`url(#i-${t})`),e(E,`id`,`aj-${t}`),e(D,`id`,`h-${t}`),e(O,`filter`,`url(#aj-${t})`),e(ee,`mask`,`url(#h-${t})`),e(A,`id`,`ag-${t}`),e(j,`id`,`g-${t}`),e(te,`filter`,`url(#ag-${t})`),e(ne,`mask`,`url(#g-${t})`),e(N,`id`,`af-${t}`),e(P,`id`,`f-${t}`),e(re,`filter`,`url(#af-${t})`),e(F,`mask`,`url(#f-${t})`),e(I,`id`,`m-${t}`),e(ie,`fill`,`url(#m-${t})`),e(ae,`id`,`ak-${t}`),e(oe,`id`,`e-${t}`),e(se,`filter`,`url(#ak-${t})`),e(ce,`mask`,`url(#e-${t})`),e(le,`id`,`n-${t}`),e(ue,`fill`,`url(#n-${t})`),e(de,`id`,`r-${t}`),e(R,`fill`,`url(#r-${t})`),e(fe,`id`,`s-${t}`),e(pe,`fill`,`url(#s-${t})`),e(me,`id`,`q-${t}`),e(he,`fill`,`url(#q-${t})`),e(ge,`id`,`p-${t}`),e(z,`fill`,`url(#p-${t})`),e(_e,`id`,`o-${t}`),e(ve,`fill`,`url(#o-${t})`),e(ye,`id`,`l-${t}`),e(be,`fill`,`url(#l-${t})`),e(Se,`id`,`al-${t}`),e(Ce,`id`,`d-${t}`),e(we,`filter`,`url(#al-${t})`),e(B,`mask`,`url(#d-${t})`),e(Te,`id`,`u-${t}`),e(Ee,`fill`,`url(#u-${t})`),e(Oe,`id`,`ad-${t}`),e(ke,`id`,`c-${t}`),e(Ae,`filter`,`url(#ad-${t})`),e(je,`mask`,`url(#c-${t})`),e(Me,`id`,`t-${t}`),e(Ne,`fill`,`url(#t-${t})`),e(Pe,`id`,`v-${t}`),e(Fe,`stroke`,`url(#v-${t})`),e(Ie,`id`,`aa-${t}`),e(Le,`stroke`,`url(#aa-${t})`),e(V,`id`,`w-${t}`),e(Re,`stroke`,`url(#w-${t})`),e(ze,`id`,`ac-${t}`),e(Be,`stroke`,`url(#ac-${t})`),e(Ve,`id`,`ab-${t}`),e(He,`stroke`,`url(#ab-${t})`),e(H,`id`,`y-${t}`),e(Ue,`stroke`,`url(#y-${t})`),e(We,`id`,`x-${t}`),e(Ge,`stroke`,`url(#x-${t})`),e(Ke,`id`,`z-${t}`),e(qe,`stroke`,`url(#z-${t})`),n})()}var $c=O(`<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`),el=O(`<button title="Copy object to clipboard">`),tl=O(`<button title="Remove all items"aria-label="Remove all items">`),nl=O(`<button title="Delete item"aria-label="Delete item">`),rl=O(`<button title="Toggle value"aria-label="Toggle value">`),il=O(`<button title="Bulk Edit Data"aria-label="Bulk Edit Data">`),al=O(`<div>`),ol=O(`<div><button> <span></span> <span> `),sl=O(`<input>`),cl=O(`<span>`),ll=O(`<div><label>:`),ul=O(`<div><div><button> [<!>...<!>]`);function dl(e,t){let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r}var fl=e=>{let n=H(),i=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,a=t(()=>n()===`dark`?xl(i):bl(i));return(()=>{var t=$c();return M(()=>r(t,W(a().expander,i`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&i`
            & svg {
              top: -1px;
            }
          `))),t})()},pl=n=>{let i=H(),o=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,c=t(()=>i()===`dark`?xl(o):bl(o)),[l,u]=m(`NoCopy`);return(()=>{var t=el();return de(t,`click`,l()===`NoCopy`?()=>{navigator.clipboard.writeText(ne(n.value)).then(()=>{u(`SuccessCopy`),setTimeout(()=>{u(`NoCopy`)},1500)},e=>{console.error(`Failed to copy: `,e),u(`ErrorCopy`),setTimeout(()=>{u(`NoCopy`)},1500)})}:void 0,!0),s(t,a(ee,{get children(){return[a(D,{get when(){return l()===`NoCopy`},get children(){return a(Hc,{})}}),a(D,{get when(){return l()===`SuccessCopy`},get children(){return a(Wc,{get theme(){return i()}})}}),a(D,{get when(){return l()===`ErrorCopy`},get children(){return a(Gc,{})}})]}})),M(n=>{var i=c().actionButton,a=`${l()===`NoCopy`?`Copy object to clipboard`:l()===`SuccessCopy`?`Object copied to clipboard`:`Error copying object to clipboard`}`;return i!==n.e&&r(t,n.e=i),a!==n.t&&e(t,`aria-label`,n.t=a),n},{e:void 0,t:void 0}),t})()},ml=e=>{let n=H(),i=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,o=t(()=>n()===`dark`?xl(i):bl(i)),c=V().client;return(()=>{var t=tl();return t.$$click=()=>{let t=e.activeQuery.state.data,n=oe(t,e.dataPath,[]);c.setQueryData(e.activeQuery.queryKey,n)},s(t,a(Kc,{})),M(()=>r(t,o().actionButton)),t})()},hl=e=>{let n=H(),i=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,o=t(()=>n()===`dark`?xl(i):bl(i)),c=V().client;return(()=>{var t=nl();return t.$$click=()=>{let t=e.activeQuery.state.data,n=l(t,e.dataPath);c.setQueryData(e.activeQuery.queryKey,n)},s(t,a(kc,{})),M(()=>r(t,W(o().actionButton))),t})()},gl=e=>{let n=H(),i=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,o=t(()=>n()===`dark`?xl(i):bl(i)),c=V().client;return(()=>{var t=rl();return t.$$click=()=>{let t=e.activeQuery.state.data,n=oe(t,e.dataPath,!e.value);c.setQueryData(e.activeQuery.queryKey,n)},s(t,a(qc,{get theme(){return n()},get checked(){return e.value}})),M(()=>r(t,W(o().actionButton,i`
          width: ${Q.size[3.5]};
          height: ${Q.size[3.5]};
        `))),t})()};function _l(e){return Symbol.iterator in e}function vl(n){let i=H(),o=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,c=t(()=>i()===`dark`?xl(o):bl(o)),l=V().client,[u,p]=m((n.defaultExpanded||[]).includes(n.label)),h=()=>p(e=>!e),[v,y]=m([]),b=t(()=>Array.isArray(n.value)?n.value.map((e,t)=>({label:t.toString(),value:e})):n.value!==null&&typeof n.value==`object`&&_l(n.value)&&typeof n.value[Symbol.iterator]==`function`?n.value instanceof Map?Array.from(n.value,([e,t])=>({label:e,value:t})):Array.from(n.value,(e,t)=>({label:t.toString(),value:e})):typeof n.value==`object`&&n.value!==null?Object.entries(n.value).map(([e,t])=>({label:e,value:t})):[]),x=t(()=>Array.isArray(n.value)?`array`:n.value!==null&&typeof n.value==`object`&&_l(n.value)&&typeof n.value[Symbol.iterator]==`function`?`Iterable`:typeof n.value==`object`&&n.value!==null?`object`:typeof n.value),S=t(()=>dl(b(),100)),C=n.dataPath??[],w=g();return(()=>{var t=al();return s(t,a(R,{get when(){return S().length},get children(){return[(()=>{var t=ol(),i=t.firstChild,o=i.firstChild,l=o.nextSibling,f=l.nextSibling.nextSibling,p=f.firstChild;return i.$$click=()=>h(),s(i,a(fl,{get expanded(){return u()}}),o),s(l,()=>n.label),s(f,()=>String(x()).toLowerCase()===`iterable`?`(Iterable) `:``,p),s(f,()=>b().length,p),s(f,()=>b().length>1?`items`:`item`,null),s(t,a(R,{get when(){return n.editable},get children(){var e=al();return s(e,a(pl,{get value(){return n.value}}),null),s(e,a(R,{get when(){return d(()=>!!n.itemsDeletable)()&&n.activeQuery!==void 0},get children(){return a(hl,{get activeQuery(){return n.activeQuery},dataPath:C})}}),null),s(e,a(R,{get when(){return d(()=>x()===`array`)()&&n.activeQuery!==void 0},get children(){return a(ml,{get activeQuery(){return n.activeQuery},dataPath:C})}}),null),s(e,a(R,{get when(){return d(()=>!!n.onEdit)()&&!_(n.value).meta},get children(){var e=il();return e.$$click=()=>{n.onEdit?.()},s(e,a(Uc,{})),M(()=>r(e,c().actionButton)),e}}),null),M(()=>r(e,c().actions)),e}}),null),M(n=>{var a=c().expanderButtonContainer,o=c().expanderButton,s=u()?`true`:`false`,l=c().info;return a!==n.e&&r(t,n.e=a),o!==n.t&&r(i,n.t=o),s!==n.a&&e(i,`aria-expanded`,n.a=s),l!==n.o&&r(f,n.o=l),n},{e:void 0,t:void 0,a:void 0,o:void 0}),t})(),a(R,{get when(){return u()},get children(){return[a(R,{get when(){return S().length===1},get children(){var e=al();return s(e,a(Dt,{get each(){return b()},by:e=>e.label,children:e=>a(vl,{get defaultExpanded(){return n.defaultExpanded},get label(){return e().label},get value(){return e().value},get editable(){return n.editable},get dataPath(){return[...C,e().label]},get activeQuery(){return n.activeQuery},get itemsDeletable(){return x()===`array`||x()===`Iterable`||x()===`object`}})})),M(()=>r(e,c().subEntry)),e}}),a(R,{get when(){return S().length>1},get children(){var e=al();return s(e,a(j,{get each(){return S()},children:(e,t)=>(()=>{var i=ul(),o=i.firstChild,l=o.firstChild,u=l.firstChild,d=u.nextSibling,f=d.nextSibling.nextSibling;return f.nextSibling,l.$$click=()=>y(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]),s(l,a(fl,{get expanded(){return v().includes(t)}}),u),s(l,t*100,d),s(l,t*100+100-1,f),s(o,a(R,{get when(){return v().includes(t)},get children(){var t=al();return s(t,a(Dt,{get each(){return e()},by:e=>e.label,children:e=>a(vl,{get defaultExpanded(){return n.defaultExpanded},get label(){return e().label},get value(){return e().value},get editable(){return n.editable},get dataPath(){return[...C,e().label]},get activeQuery(){return n.activeQuery}})})),M(()=>r(t,c().subEntry)),t}}),null),M(e=>{var t=c().entry,n=c().expanderButton;return t!==e.e&&r(o,e.e=t),n!==e.t&&r(l,e.t=n),e},{e:void 0,t:void 0}),i})()})),M(()=>r(e,c().subEntry)),e}})]}})]}}),null),s(t,a(R,{get when(){return S().length===0},get children(){var t=ll(),i=t.firstChild,o=i.firstChild;return e(i,`for`,w),s(i,()=>n.label,o),s(t,a(R,{get when(){return d(()=>!!(n.editable&&n.activeQuery!==void 0))()&&(x()===`string`||x()===`number`||x()===`boolean`)},get fallback(){return(()=>{var e=cl();return s(e,()=>f(n.value)),M(()=>r(e,c().value)),e})()},get children(){return[a(R,{get when(){return d(()=>!!(n.editable&&n.activeQuery!==void 0))()&&(x()===`string`||x()===`number`)},get children(){var t=sl();return t.addEventListener(`change`,e=>{let t=n.activeQuery.state.data,r=oe(t,C,x()===`number`?e.target.valueAsNumber:e.target.value);l.setQueryData(n.activeQuery.queryKey,r)}),e(t,`id`,w),M(n=>{var i=x()===`number`?`number`:`text`,a=W(c().value,c().editableInput);return i!==n.e&&e(t,`type`,n.e=i),a!==n.t&&r(t,n.t=a),n},{e:void 0,t:void 0}),M(()=>t.value=n.value),t}}),a(R,{get when(){return x()===`boolean`},get children(){var e=cl();return s(e,a(gl,{get activeQuery(){return n.activeQuery},dataPath:C,get value(){return n.value}}),null),s(e,()=>f(n.value),null),M(()=>r(e,W(c().value,c().actions,c().editableInput))),e}})]}}),null),s(t,a(R,{get when(){return d(()=>!!(n.editable&&n.itemsDeletable))()&&n.activeQuery!==void 0},get children(){return a(hl,{get activeQuery(){return n.activeQuery},dataPath:C})}}),null),M(e=>{var n=c().row,a=c().label;return n!==e.e&&r(t,e.e=n),a!==e.t&&r(i,e.t=a),e},{e:void 0,t:void 0}),t}}),null),M(()=>r(t,c().entry)),t})()}var yl=(e,t)=>{let{colors:n,font:r,size:i,border:a}=Q,o=(t,n)=>e===`light`?t:n;return{entry:t`
      & * {
        font-size: ${r.size.xs};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${o(n.gray[300],n.darkGray[400])};
      /* outline: 1px solid ${n.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${n.gray[400]};
      }
      & svg {
        width: ${i[3]};
        height: ${i[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${i[4]};
      min-height: ${i[4]};
      gap: ${i[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${i[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${i[1]};
      position: relative;
      /* outline: 1px solid ${n.green[400]}; */

      &:focus-visible {
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${o(n.gray[500],n.gray[500])};
      font-size: ${r.size.xs};
      margin-left: ${i[1]};
      /* outline: 1px solid ${n.yellow[400]}; */
    `,label:t`
      color: ${o(n.gray[700],n.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${o(n.purple[600],n.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${i[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${i[2]};
      width: 100%;
      margin: ${i[.25]} 0px;
      line-height: ${i[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${i[.5]} ${i[1]} ${i[.5]} ${i[1.5]};
      flex-grow: 1;
      border-radius: ${a.radius.xs};
      background-color: ${o(n.gray[200],n.darkGray[500])};

      &:hover {
        background-color: ${o(n.gray[300],n.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${o(n.gray[500],n.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${i[3]};
      height: ${i[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${o(n.gray[600],n.gray[400])};
      }

      &:focus-visible {
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
        outline-offset: 2px;
      }
    `}},bl=e=>yl(`light`,e),xl=e=>yl(`dark`,e);o([`click`]);var Sl=O(`<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>`),Cl=O(`<div>`),wl=O(`<div style=--tsqd-font-size:16px;max-height:100vh;height:100vh;width:100vw>`),Tl=O(`<aside aria-label="Tanstack query devtools"><div role=separator aria-label="Resize devtools panel"tabindex=0></div><button aria-label="Close tanstack query devtools">`),El=O(`<select name=tsqd-queries-filter-sort aria-label="Sort queries by">`),Dl=O(`<select name=tsqd-mutations-filter-sort aria-label="Sort mutations by">`),Ol=O(`<span>Asc`),kl=O(`<span>Desc`),Al=O(`<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">`),jl=O(`<div>Settings`),Ml=O(`<span>Position`),Nl=O(`<span>Top`),Pl=O(`<span>Bottom`),Fl=O(`<span>Left`),Il=O(`<span>Right`),Ll=O(`<span>Theme`),Rl=O(`<span>Light`),zl=O(`<span>Dark`),Bl=O(`<span>System`),Vl=O(`<span>Disabled Queries`),Hl=O(`<span>Show`),Ul=O(`<span>Hide`),Wl=O(`<div><div class=tsqd-queries-container>`),Gl=O(`<div><div class=tsqd-mutations-container>`),Kl=O(`<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>`),ql=O(`<option>Sort by `),Jl=O(`<div class=tsqd-query-disabled-indicator aria-hidden=true>disabled`),Yl=O(`<div class=tsqd-query-static-indicator aria-hidden=true>static`),Xl=O(`<button><div></div><code class=tsqd-query-hash>`),Zl=O(`<div role=tooltip id=tsqd-status-tooltip>`),Ql=O(`<span>`),$l=O(`<button><span aria-hidden=true></span><span>`),eu=O(`<button><span aria-hidden=true></span> Error`),tu=O(`<div><span aria-hidden=true></span>Trigger Error<select aria-label="Select error type to trigger"><option value disabled selected>`),nu=O(`<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">`),ru=O(`<form><textarea name=data aria-label="Edit query data as JSON"></textarea><div><span></span><div><button type=button>Cancel</button><button>Save`),iu=O(`<div><div role=heading aria-level=2>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span role=status aria-live=polite></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div role=heading aria-level=2>Actions</div><div><button><span aria-hidden=true></span>Refetch</button><button><span aria-hidden=true></span>Invalidate</button><button><span aria-hidden=true></span>Reset</button><button><span aria-hidden=true></span>Remove</button><button><span aria-hidden=true></span> Loading</button></div><div role=heading aria-level=2>Data </div><div role=heading aria-level=2>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">`),au=O(`<option>`),ou=O(`<div><div role=heading aria-level=2>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span role=status aria-live=polite></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div role=heading aria-level=2>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">`),[su,cu]=m(null),[lu,uu]=m(null),[du,fu]=m(0),[pu,mu]=m(!1),hu=e=>{let n=H(),i=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,o=t(()=>n()===`dark`?Fu(i):Pu(i)),c=t(()=>V().onlineManager);E(()=>{let e=c().subscribe(e=>{mu(!e)});w(()=>{e()})});let l=Ve(),u=t(()=>V().buttonPosition||Oe),f=t(()=>e.localStore.open===`true`?!0:e.localStore.open===`false`?!1:V().initialIsOpen||Ae),p=t(()=>e.localStore.position||V().position||ke),m;N(()=>{let t=m.parentElement,n=e.localStore.height||je,r=e.localStore.width||Ne,i=p();t.style.setProperty(`--tsqd-panel-height`,`${i===`top`?`-`:``}${n}px`),t.style.setProperty(`--tsqd-panel-width`,`${i===`left`?`-`:``}${r}px`)}),E(()=>{let e=()=>{let e=m.parentElement,t=getComputedStyle(e).fontSize;e.style.setProperty(`--tsqd-font-size`,t)};e(),window.addEventListener(`focus`,e),w(()=>{window.removeEventListener(`focus`,e)})});let h=t(()=>e.localStore.pip_open??`false`);return[a(R,{get when(){return d(()=>!!l().pipWindow)()&&h()==`true`},get children(){return a(le,{get mount(){return l().pipWindow?.document.body},get children(){return a(gu,{get children(){return a(vu,e)}})}})}}),(()=>{var t=Cl(),n=m;return typeof n==`function`?k(n,t):m=t,s(t,a(Ct,{name:`tsqd-panel-transition`,get children(){return a(R,{get when(){return d(()=>!!(f()&&!l().pipWindow))()&&h()==`false`},get children(){return a(_u,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),s(t,a(Ct,{name:`tsqd-button-transition`,get children(){return a(R,{get when(){return!f()},get children(){var t=Sl(),n=t.firstChild,i=n.nextSibling;return s(n,a(Qc,{})),i.$$click=()=>e.setLocalStore(`open`,`true`),s(i,a(Qc,{})),M(()=>r(t,W(o().devtoolsBtn,o()[`devtoolsBtn-position-${u()}`],`tsqd-open-btn-container`))),t}})}}),null),M(()=>r(t,W(i`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${p()===`top`||p()===`bottom`?`transform: translateY(var(--tsqd-panel-height));`:`transform: translateX(var(--tsqd-panel-width));`}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${u()===`relative`?`none;`:u()===`top-left`?`translateX(-72px);`:u()===`top-right`?`translateX(72px);`:`translateY(72px);`};
              opacity: 0;
            }
          `,`tsqd-transitions-container`))),t})()]},gu=e=>{let n=Ve(),i=H(),a=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,o=t(()=>i()===`dark`?Fu(a):Pu(a)),c=()=>{let{colors:e}=Q,t=(e,t)=>i()===`dark`?t:e;return du()<Ee?a`
        flex-direction: column;
        background-color: ${t(e.gray[300],e.gray[600])};
      `:a`
      flex-direction: row;
      background-color: ${t(e.gray[200],e.darkGray[900])};
    `};return N(()=>{let e=n().pipWindow,t=()=>{e&&fu(e.innerWidth)};e&&(e.addEventListener(`resize`,t),t()),w(()=>{e&&e.removeEventListener(`resize`,t)})}),(()=>{var t=wl();return s(t,()=>e.children),M(()=>r(t,W(o().panel,c(),{[a`
            min-width: min-content;
          `]:du()<De},`tsqd-main-panel`))),t})()},_u=n=>{let i=H(),o=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,c=t(()=>i()===`dark`?Fu(o):Pu(o)),l;E(()=>{l.focus()});let[u,d]=m(!1),f=t(()=>n.localStore.position||V().position||ke),p=e=>{let t=e.currentTarget.parentElement;if(!t)return;d(!0);let{height:r,width:i}=t.getBoundingClientRect(),a=e.clientX,o=e.clientY,s=0,c=b(3.5),l=b(12),p=e=>{if(e.preventDefault(),f()===`left`||f()===`right`){let r=f()===`right`?a-e.clientX:e.clientX-a;s=Math.round(i+r),s<l&&(s=l),n.setLocalStore(`width`,String(Math.round(s)));let o=t.getBoundingClientRect().width;Number(n.localStore.width)<o&&n.setLocalStore(`width`,String(o))}else{let t=f()===`bottom`?o-e.clientY:e.clientY-o;s=Math.round(r+t),s<c&&(s=c,cu(null)),n.setLocalStore(`height`,String(Math.round(s)))}},m=()=>{u()&&d(!1),document.removeEventListener(`mousemove`,p,!1),document.removeEventListener(`mouseup`,m,!1)};document.addEventListener(`mousemove`,p,!1),document.addEventListener(`mouseup`,m,!1)},h;E(()=>{jt(h,({width:e},t)=>{t===h&&fu(e)})}),N(()=>{let e=h.parentElement?.parentElement?.parentElement;if(!e)return;let t=C(`padding`,n.localStore.position||ke),r=n.localStore.position===`left`||n.localStore.position===`right`,i=(({padding:e,paddingTop:t,paddingBottom:n,paddingLeft:r,paddingRight:i})=>({padding:e,paddingTop:t,paddingBottom:n,paddingLeft:r,paddingRight:i}))(e.style);e.style[t]=`${r?n.localStore.width:n.localStore.height}px`,w(()=>{Object.entries(i).forEach(([t,n])=>{e.style[t]=n})})});let g=()=>{let{colors:e}=Q,t=(e,t)=>i()===`dark`?t:e;return du()<Ee?o`
        flex-direction: column;
        background-color: ${t(e.gray[300],e.gray[600])};
      `:o`
      flex-direction: row;
      background-color: ${t(e.gray[200],e.darkGray[900])};
    `};return(()=>{var t=Tl(),i=t.firstChild,u=i.nextSibling,d=h;typeof d==`function`?k(d,t):h=t,i.$$keydown=e=>{let t=b(3.5),r=b(12);if(f()===`top`||f()===`bottom`){if(e.key===`ArrowUp`||e.key===`ArrowDown`){e.preventDefault();let r=Number(n.localStore.height||je),i=f()===`bottom`?e.key===`ArrowUp`?10:-10:e.key===`ArrowDown`?10:-10,a=Math.max(t,r+i);n.setLocalStore(`height`,String(a))}}else if(e.key===`ArrowLeft`||e.key===`ArrowRight`){e.preventDefault();let t=Number(n.localStore.width||Ne),i=f()===`right`?e.key===`ArrowLeft`?10:-10:e.key===`ArrowRight`?10:-10,a=Math.max(r,t+i);n.setLocalStore(`width`,String(a))}},i.$$mousedown=p,u.$$click=()=>n.setLocalStore(`open`,`false`);var m=l;return typeof m==`function`?k(m,u):l=u,s(u,a(Ac,{})),s(t,a(vu,n),null),M(a=>{var s=W(c().panel,c()[`panel-position-${f()}`],g(),{[o`
            min-width: min-content;
          `]:du()<De&&(f()===`right`||f()===`left`)},`tsqd-main-panel`),l=f()===`bottom`||f()===`top`?`${n.localStore.height||je}px`:`auto`,d=f()===`right`||f()===`left`?`${n.localStore.width||Ne}px`:`auto`,p=f()===`top`||f()===`bottom`?`horizontal`:`vertical`,m=f()===`top`||f()===`bottom`?b(3.5):b(12),h=f()===`top`||f()===`bottom`?Number(n.localStore.height||je):Number(n.localStore.width||Ne),_=W(c().dragHandle,c()[`dragHandle-position-${f()}`],`tsqd-drag-handle`),v=W(c().closeBtn,c()[`closeBtn-position-${f()}`],`tsqd-minimize-btn`);return s!==a.e&&r(t,a.e=s),l!==a.t&&A(t,`height`,a.t=l),d!==a.a&&A(t,`width`,a.a=d),p!==a.o&&e(i,`aria-orientation`,a.o=p),m!==a.i&&e(i,`aria-valuemin`,a.i=m),h!==a.n&&e(i,`aria-valuenow`,a.n=h),_!==a.s&&r(i,a.s=_),v!==a.h&&r(u,a.h=v),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),t})()},vu=n=>{Du(),ku();let i,o=H(),c=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,l=t(()=>o()===`dark`?Fu(c):Pu(c)),f=Ve(),[p,h]=m(`queries`),g=t(()=>n.localStore.sort||Pe),_=t(()=>Number(n.localStore.sortOrder)||Fe),v=t(()=>n.localStore.mutationSort||Ie),y=t(()=>Number(n.localStore.mutationSortOrder)||Fe),b=t(()=>se[g()]),x=t(()=>u[v()]),S=t(()=>V().onlineManager),C=t(()=>V().client.getQueryCache()),w=t(()=>V().client.getMutationCache()),E=$(e=>e().getAll().length,!1),D=t(T(()=>[E(),n.localStore.filter,g(),_(),n.localStore.hideDisabledQueries],()=>{let e=C().getAll(),t=n.localStore.filter?e.filter(e=>Je(e.queryHash,n.localStore.filter||``).passed):[...e];return n.localStore.hideDisabledQueries===`true`&&(t=t.filter(e=>!e.isDisabled())),b()?t.sort((e,t)=>b()(e,t)*_()):t})),O=Au(e=>e().getAll().length,!1),ee=t(T(()=>[O(),n.localStore.mutationFilter,v(),y()],()=>{let e=w().getAll(),t=n.localStore.mutationFilter?e.filter(e=>Je(`${e.options.mutationKey?JSON.stringify(e.options.mutationKey)+` - `:``}${new Date(e.state.submittedAt).toLocaleString()}`,n.localStore.mutationFilter||``).passed):[...e];return x()?t.sort((e,t)=>x()(e,t)*y()):t})),A=e=>{n.setLocalStore(`position`,e)},j=e=>{let t=getComputedStyle(i).getPropertyValue(`--tsqd-font-size`);e.style.setProperty(`--tsqd-font-size`,t)};return[(()=>{var t=Kl(),o=t.firstChild,m=o.firstChild,b=m.firstChild,x=b.firstChild,T=x.nextSibling,E=T.firstChild,O=o.nextSibling,te=O.firstChild,ne=te.firstChild,N=ne.firstChild,P=ne.nextSibling,re=P.nextSibling,F=te.nextSibling,I=F.firstChild,ie=I.nextSibling,L=i;return typeof L==`function`?k(L,t):i=t,b.$$click=()=>{if(!f().pipWindow&&!n.showPanelViewOnly){n.setLocalStore(`open`,`false`);return}n.onClose&&n.onClose()},s(T,()=>V().queryFlavor,E),s(T,()=>V().version,null),s(m,a(Jo.Root,{get class(){return W(l().viewToggle)},get value(){return p()},"aria-label":`Toggle between queries and mutations view`,onChange:e=>{h(e),cu(null),uu(null)},get children(){return[a(Jo.Item,{value:`queries`,class:`tsqd-radio-toggle`,get children(){return[a(Jo.ItemInput,{}),a(Jo.ItemControl,{get children(){return a(Jo.ItemIndicator,{})}}),a(Jo.ItemLabel,{title:`Toggle Queries View`,children:`Queries`})]}}),a(Jo.Item,{value:`mutations`,class:`tsqd-radio-toggle`,get children(){return[a(Jo.ItemInput,{}),a(Jo.ItemControl,{get children(){return a(Jo.ItemIndicator,{})}}),a(Jo.ItemLabel,{title:`Toggle Mutations View`,children:`Mutations`})]}})]}}),null),s(o,a(R,{get when(){return p()===`queries`},get children(){return a(xu,{})}}),null),s(o,a(R,{get when(){return p()===`mutations`},get children(){return a(Su,{})}}),null),s(ne,a(Oc,{}),N),N.$$input=e=>{p()===`queries`?n.setLocalStore(`filter`,e.currentTarget.value):n.setLocalStore(`mutationFilter`,e.currentTarget.value)},s(P,a(R,{get when(){return p()===`queries`},get children(){var e=El();return e.addEventListener(`change`,e=>{n.setLocalStore(`sort`,e.currentTarget.value)}),s(e,()=>Object.keys(se).map(e=>(()=>{var t=ql();return t.firstChild,t.value=e,s(t,e,null),t})())),M(()=>e.value=g()),e}}),null),s(P,a(R,{get when(){return p()===`mutations`},get children(){var e=Dl();return e.addEventListener(`change`,e=>{n.setLocalStore(`mutationSort`,e.currentTarget.value)}),s(e,()=>Object.keys(u).map(e=>(()=>{var t=ql();return t.firstChild,t.value=e,s(t,e,null),t})())),M(()=>e.value=v()),e}}),null),s(P,a(Ac,{}),null),re.$$click=()=>{p()===`queries`?n.setLocalStore(`sortOrder`,String(_()*-1)):n.setLocalStore(`mutationSortOrder`,String(y()*-1))},s(re,a(R,{get when(){return(p()===`queries`?_():y())===1},get children(){return[Ol(),a(jc,{})]}}),null),s(re,a(R,{get when(){return(p()===`queries`?_():y())===-1},get children(){return[kl(),a(Mc,{})]}}),null),I.$$click=()=>{p()===`queries`?(Mu({type:`CLEAR_QUERY_CACHE`}),C().clear()):(Mu({type:`CLEAR_MUTATION_CACHE`}),w().clear())},s(I,a(kc,{})),ie.$$click=()=>{S().setOnline(!S().isOnline())},s(ie,(()=>{var e=d(()=>!!pu());return()=>e()?a(zc,{}):a(Rc,{})})()),s(F,a(R,{get when(){return d(()=>!f().pipWindow)()&&!f().disabled},get children(){var e=Al();return e.$$click=()=>{f().requestPipWindow(Number(window.innerWidth),Number(n.localStore.height??500))},s(e,a(Vc,{})),M(()=>r(e,W(l().actionsBtn,`tsqd-actions-btn`,`tsqd-action-open-pip`))),e}}),null),s(F,a(Z.Root,{gutter:4,get children(){return[a(Z.Trigger,{get class(){return W(l().actionsBtn,`tsqd-actions-btn`,`tsqd-action-settings`)},"aria-label":`Open settings menu`,title:`Open settings menu`,get children(){return a(Bc,{})}}),a(Z.Portal,{ref:e=>j(e),get mount(){return d(()=>!!f().pipWindow)()?f().pipWindow.document.body:document.body},get children(){return a(Z.Content,{get class(){return W(l().settingsMenu,`tsqd-settings-menu`)},get children(){return[(()=>{var e=jl();return M(()=>r(e,W(l().settingsMenuHeader,`tsqd-settings-menu-header`))),e})(),a(R,{get when(){return!n.showPanelViewOnly},get children(){return a(Z.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[a(Z.SubTrigger,{get class(){return W(l().settingsSubTrigger,`tsqd-settings-menu-sub-trigger`,`tsqd-settings-menu-sub-trigger-position`)},get children(){return[Ml(),a(Ac,{})]}}),a(Z.Portal,{ref:e=>j(e),get mount(){return d(()=>!!f().pipWindow)()?f().pipWindow.document.body:document.body},get children(){return a(Z.SubContent,{get class(){return W(l().settingsMenu,`tsqd-settings-submenu`)},get children(){return a(Z.RadioGroup,{"aria-label":`Position settings`,get value(){return n.localStore.position},onChange:e=>A(e),get children(){return[a(Z.RadioItem,{value:`top`,get class(){return W(l().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-top`)},get children(){return[Nl(),a(jc,{})]}}),a(Z.RadioItem,{value:`bottom`,get class(){return W(l().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-bottom`)},get children(){return[Pl(),a(Mc,{})]}}),a(Z.RadioItem,{value:`left`,get class(){return W(l().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-left`)},get children(){return[Fl(),a(Nc,{})]}}),a(Z.RadioItem,{value:`right`,get class(){return W(l().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-right`)},get children(){return[Il(),a(Pc,{})]}})]}})}})}})]}})}}),a(Z.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[a(Z.SubTrigger,{get class(){return W(l().settingsSubTrigger,`tsqd-settings-menu-sub-trigger`,`tsqd-settings-menu-sub-trigger-position`)},get children(){return[Ll(),a(Ac,{})]}}),a(Z.Portal,{ref:e=>j(e),get mount(){return d(()=>!!f().pipWindow)()?f().pipWindow.document.body:document.body},get children(){return a(Z.SubContent,{get class(){return W(l().settingsMenu,`tsqd-settings-submenu`)},get children(){return a(Z.RadioGroup,{get value(){return n.localStore.theme_preference},onChange:e=>{n.setLocalStore(`theme_preference`,e)},"aria-label":`Theme preference`,get children(){return[a(Z.RadioItem,{value:`light`,get class(){return W(l().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-top`)},get children(){return[Rl(),a(Fc,{})]}}),a(Z.RadioItem,{value:`dark`,get class(){return W(l().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-bottom`)},get children(){return[zl(),a(Ic,{})]}}),a(Z.RadioItem,{value:`system`,get class(){return W(l().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-left`)},get children(){return[Bl(),a(Lc,{})]}})]}})}})}})]}}),a(Z.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[a(Z.SubTrigger,{get class(){return W(l().settingsSubTrigger,`tsqd-settings-menu-sub-trigger`,`tsqd-settings-menu-sub-trigger-disabled-queries`)},get children(){return[Vl(),a(Ac,{})]}}),a(Z.Portal,{ref:e=>j(e),get mount(){return d(()=>!!f().pipWindow)()?f().pipWindow.document.body:document.body},get children(){return a(Z.SubContent,{get class(){return W(l().settingsMenu,`tsqd-settings-submenu`)},get children(){return a(Z.RadioGroup,{get value(){return n.localStore.hideDisabledQueries},"aria-label":`Hide disabled queries setting`,onChange:e=>n.setLocalStore(`hideDisabledQueries`,e),get children(){return[a(Z.RadioItem,{value:`false`,get class(){return W(l().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-show`)},get children(){return[Hl(),a(R,{get when(){return n.localStore.hideDisabledQueries!==`true`},get children(){return a(Jc,{})}})]}}),a(Z.RadioItem,{value:`true`,get class(){return W(l().settingsSubButton,`tsqd-settings-menu-position-btn`,`tsqd-settings-menu-position-btn-hide`)},get children(){return[Ul(),a(R,{get when(){return n.localStore.hideDisabledQueries===`true`},get children(){return a(Jc,{})}})]}})]}})}})}})]}})]}})}})]}}),null),s(t,a(R,{get when(){return p()===`queries`},get children(){var e=Wl(),t=e.firstChild;return s(t,a(Dt,{by:e=>e.queryHash,get each(){return D()},children:e=>a(yu,{get query(){return e()}})})),M(()=>r(e,W(l().overflowQueryContainer,`tsqd-queries-overflow-container`))),e}}),null),s(t,a(R,{get when(){return p()===`mutations`},get children(){var e=Gl(),t=e.firstChild;return s(t,a(Dt,{by:e=>e.mutationId,get each(){return ee()},children:e=>a(bu,{get mutation(){return e()}})})),M(()=>r(e,W(l().overflowQueryContainer,`tsqd-mutations-overflow-container`))),e}}),null),M(n=>{var i=W(l().queriesContainer,du()<Ee&&(su()||lu())&&c`
              height: 50%;
              max-height: 50%;
            `,du()<Ee&&!(su()||lu())&&c`
              height: 100%;
              max-height: 100%;
            `,`tsqd-queries-container`),a=W(l().row,`tsqd-header`),s=l().logoAndToggleContainer,u=W(l().logo,`tsqd-text-logo-container`),d=W(l().tanstackLogo,`tsqd-text-logo-tanstack`),f=W(l().queryFlavorLogo,`tsqd-text-logo-query-flavor`),h=W(l().row,`tsqd-filters-actions-container`),g=W(l().filtersContainer,`tsqd-filters-container`),v=W(l().filterInput,`tsqd-query-filter-textfield-container`),S=W(`tsqd-query-filter-textfield`),C=W(l().filterSelect,`tsqd-query-filter-sort-container`),w=`Sort order ${(p()===`queries`?_():y())===-1?`descending`:`ascending`}`,E=(p()===`queries`?_():y())===-1,D=W(l().actionsContainer,`tsqd-actions-container`),ee=W(l().actionsBtn,`tsqd-actions-btn`,`tsqd-action-clear-cache`),k=`Clear ${p()} cache`,A=W(l().actionsBtn,pu()&&l().actionsBtnOffline,`tsqd-actions-btn`,`tsqd-action-mock-offline-behavior`),j=`${pu()?`Unset offline mocking behavior`:`Mock offline behavior`}`,M=pu(),L=`${pu()?`Unset offline mocking behavior`:`Mock offline behavior`}`;return i!==n.e&&r(t,n.e=i),a!==n.t&&r(o,n.t=a),s!==n.a&&r(m,n.a=s),u!==n.o&&r(b,n.o=u),d!==n.i&&r(x,n.i=d),f!==n.n&&r(T,n.n=f),h!==n.s&&r(O,n.s=h),g!==n.h&&r(te,n.h=g),v!==n.r&&r(ne,n.r=v),S!==n.d&&r(N,n.d=S),C!==n.l&&r(P,n.l=C),w!==n.u&&e(re,`aria-label`,n.u=w),E!==n.c&&e(re,`aria-pressed`,n.c=E),D!==n.w&&r(F,n.w=D),ee!==n.m&&r(I,n.m=ee),k!==n.f&&e(I,`title`,n.f=k),A!==n.y&&r(ie,n.y=A),j!==n.g&&e(ie,`aria-label`,n.g=j),M!==n.p&&e(ie,`aria-pressed`,n.p=M),L!==n.b&&e(ie,`title`,n.b=L),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),M(()=>N.value=p()===`queries`?n.localStore.filter||``:n.localStore.mutationFilter||``),t})(),a(R,{get when(){return d(()=>p()===`queries`)()&&su()},get children(){return a(wu,{})}}),a(R,{get when(){return d(()=>p()===`mutations`)()&&lu()},get children(){return a(Tu,{})}})]},yu=n=>{let i=H(),o=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,c=t(()=>i()===`dark`?Fu(o):Pu(o)),{colors:l,alpha:u}=Q,d=(e,t)=>i()===`dark`?t:e,f=$(e=>e().find({queryKey:n.query.queryKey})?.state,!0,e=>e.query.queryHash===n.query.queryHash),p=$(e=>e().find({queryKey:n.query.queryKey})?.isDisabled()??!1,!0,e=>e.query.queryHash===n.query.queryHash),m=$(e=>e().find({queryKey:n.query.queryKey})?.isStatic()??!1,!0,e=>e.query.queryHash===n.query.queryHash),h=$(e=>e().find({queryKey:n.query.queryKey})?.isStale()??!1,!0,e=>e.query.queryHash===n.query.queryHash),g=$(e=>e().find({queryKey:n.query.queryKey})?.getObserversCount()??0,!0,e=>e.query.queryHash===n.query.queryHash),_=t(()=>S({queryState:f(),observerCount:g(),isStale:h()})),v=()=>_()===`gray`?o`
        background-color: ${d(l[_()][200],l[_()][700])};
        color: ${d(l[_()][700],l[_()][300])};
      `:o`
      background-color: ${d(l[_()][200]+u[80],l[_()][900])};
      color: ${d(l[_()][800],l[_()][300])};
    `;return a(R,{get when(){return f()},get children(){var t=Xl(),i=t.firstChild,o=i.nextSibling;return t.$$click=()=>cu(n.query.queryHash===su()?null:n.query.queryHash),s(i,g),s(o,()=>n.query.queryHash),s(t,a(R,{get when(){return p()},get children(){return Jl()}}),null),s(t,a(R,{get when(){return m()},get children(){return Yl()}}),null),M(a=>{var o=W(c().queryRow,su()===n.query.queryHash&&c().selectedQueryRow,`tsqd-query-row`),s=`Query key ${n.query.queryHash}${p()?`, disabled`:``}${m()?`, static`:``}`,l=W(v(),`tsqd-query-observer-count`);return o!==a.e&&r(t,a.e=o),s!==a.t&&e(t,`aria-label`,a.t=s),l!==a.a&&r(i,a.a=l),a},{e:void 0,t:void 0,a:void 0}),t}})},bu=n=>{let i=H(),o=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,c=t(()=>i()===`dark`?Fu(o):Pu(o)),{colors:l,alpha:u}=Q,f=(e,t)=>i()===`dark`?t:e,p=Au(e=>e().getAll().find(e=>e.mutationId===n.mutation.mutationId)?.state),m=Au(e=>{let t=e().getAll().find(e=>e.mutationId===n.mutation.mutationId);return t?t.state.isPaused:!1}),h=Au(e=>{let t=e().getAll().find(e=>e.mutationId===n.mutation.mutationId);return t?t.state.status:`idle`}),g=t(()=>v({isPaused:m(),status:h()})),_=()=>g()===`gray`?o`
        background-color: ${f(l[g()][200],l[g()][700])};
        color: ${f(l[g()][700],l[g()][300])};
      `:o`
      background-color: ${f(l[g()][200]+u[80],l[g()][900])};
      color: ${f(l[g()][800],l[g()][300])};
    `;return a(R,{get when(){return p()},get children(){var t=Xl(),i=t.firstChild,o=i.nextSibling;return t.$$click=()=>{uu(n.mutation.mutationId===lu()?null:n.mutation.mutationId)},s(i,a(R,{get when(){return g()===`purple`},get children(){return a(Zc,{})}}),null),s(i,a(R,{get when(){return g()===`green`},get children(){return a(Jc,{})}}),null),s(i,a(R,{get when(){return g()===`red`},get children(){return a(Xc,{})}}),null),s(i,a(R,{get when(){return g()===`yellow`},get children(){return a(Yc,{})}}),null),s(o,a(R,{get when(){return n.mutation.options.mutationKey},get children(){return[d(()=>JSON.stringify(n.mutation.options.mutationKey)),` -`,` `]}}),null),s(o,()=>new Date(n.mutation.state.submittedAt).toLocaleString(),null),M(a=>{var o=W(c().queryRow,lu()===n.mutation.mutationId&&c().selectedQueryRow,`tsqd-query-row`),s=`Mutation submitted at ${new Date(n.mutation.state.submittedAt).toLocaleString()}`,l=W(_(),`tsqd-query-observer-count`);return o!==a.e&&r(t,a.e=o),s!==a.t&&e(t,`aria-label`,a.t=s),l!==a.a&&r(i,a.a=l),a},{e:void 0,t:void 0,a:void 0}),t}})},xu=()=>{let e=$(e=>e().getAll().filter(e=>x(e)===`stale`).length),n=$(e=>e().getAll().filter(e=>x(e)===`fresh`).length),i=$(e=>e().getAll().filter(e=>x(e)===`fetching`).length),o=$(e=>e().getAll().filter(e=>x(e)===`paused`).length),c=$(e=>e().getAll().filter(e=>x(e)===`inactive`).length),l=H(),u=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,d=t(()=>l()===`dark`?Fu(u):Pu(u));return(()=>{var t=Cl();return s(t,a(Cu,{label:`Fresh`,color:`green`,get count(){return n()}}),null),s(t,a(Cu,{label:`Fetching`,color:`blue`,get count(){return i()}}),null),s(t,a(Cu,{label:`Paused`,color:`purple`,get count(){return o()}}),null),s(t,a(Cu,{label:`Stale`,color:`yellow`,get count(){return e()}}),null),s(t,a(Cu,{label:`Inactive`,color:`gray`,get count(){return c()}}),null),M(()=>r(t,W(d().queryStatusContainer,`tsqd-query-status-container`))),t})()},Su=()=>{let e=Au(e=>e().getAll().filter(e=>v({isPaused:e.state.isPaused,status:e.state.status})===`green`).length),n=Au(e=>e().getAll().filter(e=>v({isPaused:e.state.isPaused,status:e.state.status})===`yellow`).length),i=Au(e=>e().getAll().filter(e=>v({isPaused:e.state.isPaused,status:e.state.status})===`purple`).length),o=Au(e=>e().getAll().filter(e=>v({isPaused:e.state.isPaused,status:e.state.status})===`red`).length),c=H(),l=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,u=t(()=>c()===`dark`?Fu(l):Pu(l));return(()=>{var t=Cl();return s(t,a(Cu,{label:`Paused`,color:`purple`,get count(){return i()}}),null),s(t,a(Cu,{label:`Pending`,color:`yellow`,get count(){return n()}}),null),s(t,a(Cu,{label:`Success`,color:`green`,get count(){return e()}}),null),s(t,a(Cu,{label:`Error`,color:`red`,get count(){return o()}}),null),M(()=>r(t,W(u().queryStatusContainer,`tsqd-query-status-container`))),t})()},Cu=e=>{let n=H(),i=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,o=t(()=>n()===`dark`?Fu(i):Pu(i)),{colors:c,alpha:l}=Q,u=(e,t)=>n()===`dark`?t:e,f,[p,h]=m(!1),[g,_]=m(!1),v=t(()=>!(su()&&du()<Te&&du()>Ee||du()<Ee));return(()=>{var t=$l(),n=t.firstChild,m=n.nextSibling,y=f;return typeof y==`function`?k(y,t):f=t,t.addEventListener(`mouseleave`,()=>{h(!1),_(!1)}),t.addEventListener(`mouseenter`,()=>h(!0)),t.addEventListener(`blur`,()=>_(!1)),t.addEventListener(`focus`,()=>_(!0)),ae(t,L({get disabled(){return v()},get"aria-label"(){return`${e.label}: ${e.count}`},get class(){return W(o().queryStatusTag,!v()&&i`
            cursor: pointer;
            &:hover {
              background: ${u(c.gray[200],c.darkGray[400])}${l[80]};
            }
          `,`tsqd-query-status-tag`,`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>p()||g()?{"aria-describedby":`tsqd-status-tooltip`}:{}),!1,!0),s(t,a(R,{get when(){return d(()=>!v())()&&(p()||g())},get children(){var t=Zl();return s(t,()=>e.label),M(()=>r(t,W(o().statusTooltip,`tsqd-query-status-tooltip`))),t}}),n),s(t,a(R,{get when(){return v()},get children(){var t=Ql();return s(t,()=>e.label),M(()=>r(t,W(o().queryStatusTagLabel,`tsqd-query-status-tag-label`))),t}}),m),s(m,()=>e.count),M(t=>{var a=W(i`
            width: ${Q.size[1.5]};
            height: ${Q.size[1.5]};
            border-radius: ${Q.border.radius.full};
            background-color: ${Q.colors[e.color][500]};
          `,`tsqd-query-status-tag-dot`),s=W(o().queryStatusCount,e.count>0&&e.color!==`gray`&&i`
              background-color: ${u(c[e.color][100],c[e.color][900])};
              color: ${u(c[e.color][700],c[e.color][300])};
            `,`tsqd-query-status-tag-count`);return a!==t.e&&r(n,t.e=a),s!==t.t&&r(m,t.t=s),t},{e:void 0,t:void 0}),t})()},wu=()=>{let n=H(),i=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,o=t(()=>n()===`dark`?Fu(i):Pu(i)),{colors:l}=Q,u=(e,t)=>n()===`dark`?t:e,p=V().client,[h,g]=m(!1),[_,v]=m(`view`),[y,b]=m(!1),S=t(()=>V().errorTypes||[]),C=$(e=>e().getAll().find(e=>e.queryHash===su()),!1),w=$(e=>e().getAll().find(e=>e.queryHash===su()),!1),T=$(e=>e().getAll().find(e=>e.queryHash===su())?.state,!1),E=$(e=>e().getAll().find(e=>e.queryHash===su())?.state.data,!1),D=$(e=>{let t=e().getAll().find(e=>e.queryHash===su());return t?x(t):`inactive`}),O=$(e=>{let t=e().getAll().find(e=>e.queryHash===su());return t?t.state.status:`pending`}),ee=$(e=>e().getAll().find(e=>e.queryHash===su())?.getObserversCount()??0),k=t(()=>c(D())),j=()=>{Mu({type:`REFETCH`,queryHash:C()?.queryHash}),(C()?.fetch())?.catch(()=>{})},ne=e=>{let t=C();if(!t)return;Mu({type:`TRIGGER_ERROR`,queryHash:t.queryHash,metadata:{error:e?.name}});let n=e?.initializer(t)??Error(`Unknown error from devtools`),r=t.options;t.setState({data:void 0,status:`error`,error:n,fetchMeta:{...t.state.fetchMeta,__previousQueryOptions:r}})},P=()=>{let e=C();if(!e)return;Mu({type:`RESTORE_LOADING`,queryHash:e.queryHash});let t=e.state,n=e.state.fetchMeta?e.state.fetchMeta.__previousQueryOptions:null;e.cancel({silent:!0}),e.setState({...t,fetchStatus:`idle`,fetchMeta:null}),n&&e.fetch(n)};N(()=>{D()!==`fetching`&&g(!1)});let re=()=>k()===`gray`?i`
        background-color: ${u(l[k()][200],l[k()][700])};
        color: ${u(l[k()][700],l[k()][300])};
        border-color: ${u(l[k()][400],l[k()][600])};
      `:i`
      background-color: ${u(l[k()][100],l[k()][900])};
      color: ${u(l[k()][700],l[k()][300])};
      border-color: ${u(l[k()][400],l[k()][600])};
    `;return a(R,{get when(){return d(()=>!!C())()&&T()},get children(){var t=iu(),n=t.firstChild,c=n.nextSibling,d=c.firstChild,m=d.firstChild,x=m.firstChild,k=m.nextSibling,N=d.nextSibling,F=N.firstChild.nextSibling,I=N.nextSibling.firstChild.nextSibling,ie=c.nextSibling,L=ie.nextSibling,ae=L.firstChild,oe=ae.firstChild,se=ae.nextSibling,ce=se.firstChild,le=se.nextSibling,ue=le.firstChild,de=le.nextSibling,fe=de.firstChild,pe=de.nextSibling,me=pe.firstChild,he=me.nextSibling,ge=L.nextSibling;ge.firstChild;var z=ge.nextSibling,_e=z.nextSibling;return s(x,()=>f(C().queryKey,!0)),s(k,D),s(F,ee),s(I,()=>new Date(T().dataUpdatedAt).toLocaleTimeString()),ae.$$click=j,se.$$click=()=>{Mu({type:`INVALIDATE`,queryHash:C()?.queryHash}),p.invalidateQueries({queryKey:C()?.queryKey,exact:!0})},le.$$click=()=>{Mu({type:`RESET`,queryHash:C()?.queryHash}),p.resetQueries({queryKey:C()?.queryKey,exact:!0})},de.$$click=()=>{Mu({type:`REMOVE`,queryHash:C()?.queryHash}),p.removeQueries({queryKey:C()?.queryKey,exact:!0}),cu(null)},pe.$$click=()=>{if(C()?.state.data===void 0)g(!0),P();else{let e=C();if(!e)return;Mu({type:`TRIGGER_LOADING`,queryHash:e.queryHash});let t=e.options;e.fetch({...t,queryFn:()=>new Promise(()=>{}),gcTime:-1}),e.setState({data:void 0,status:`pending`,fetchMeta:{...e.state.fetchMeta,__previousQueryOptions:t}})}},s(pe,()=>O()===`pending`?`Restore`:`Trigger`,he),s(L,a(R,{get when(){return S().length===0||O()===`error`},get children(){var e=eu(),t=e.firstChild,n=t.nextSibling;return e.$$click=()=>{C().state.error?(Mu({type:`RESTORE_ERROR`,queryHash:C()?.queryHash}),p.resetQueries({queryKey:C()?.queryKey})):ne()},s(e,()=>O()===`error`?`Restore`:`Trigger`,n),M(n=>{var a=W(i`
                  color: ${u(l.red[500],l.red[400])};
                `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-error`),o=O()===`pending`,s=i`
                  background-color: ${u(l.red[500],l.red[400])};
                `;return a!==n.e&&r(e,n.e=a),o!==n.t&&(e.disabled=n.t=o),s!==n.a&&r(t,n.a=s),n},{e:void 0,t:void 0,a:void 0}),e}}),null),s(L,a(R,{get when(){return!(S().length===0||O()===`error`)},get children(){var e=tu(),t=e.firstChild,n=t.nextSibling.nextSibling;return n.firstChild,n.addEventListener(`change`,e=>{ne(S().find(t=>t.name===e.currentTarget.value))}),s(n,a(te,{get each(){return S()},children:e=>(()=>{var t=au();return s(t,()=>e.name),M(()=>t.value=e.name),t})()}),null),s(e,a(Ac,{}),null),M(a=>{var s=W(o().actionsSelect,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-error-multiple`),c=i`
                  background-color: ${Q.colors.red[400]};
                `,l=O()===`pending`;return s!==a.e&&r(e,a.e=s),c!==a.t&&r(t,a.t=c),l!==a.a&&(n.disabled=a.a=l),a},{e:void 0,t:void 0,a:void 0}),e}}),null),s(ge,()=>_()===`view`?`Explorer`:`Editor`,null),s(t,a(R,{get when(){return _()===`view`},get children(){var e=nu();return s(e,a(vl,{label:`Data`,defaultExpanded:[`Data`],get value(){return E()},editable:!0,onEdit:()=>v(`edit`),get activeQuery(){return C()}})),M(t=>A(e,`padding`,Q.size[2])),e}}),z),s(t,a(R,{get when(){return _()===`edit`},get children(){var t=ru(),n=t.firstChild,a=n.nextSibling,c=a.firstChild,d=c.nextSibling,f=d.firstChild,p=f.nextSibling;return t.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(e.currentTarget).get(`data`);try{let e=JSON.parse(t);C().setState({...C().state,data:e}),v(`view`)}catch{b(!0)}}),n.addEventListener(`focus`,()=>b(!1)),s(c,()=>y()?`Invalid Value`:``),f.$$click=()=>v(`view`),M(s=>{var m=W(o().devtoolsEditForm,`tsqd-query-details-data-editor`),h=o().devtoolsEditTextarea,g=y(),_=o().devtoolsEditFormActions,v=o().devtoolsEditFormError,b=o().devtoolsEditFormActionContainer,x=W(o().devtoolsEditFormAction,i`
                      color: ${u(l.gray[600],l.gray[300])};
                    `),S=W(o().devtoolsEditFormAction,i`
                      color: ${u(l.blue[600],l.blue[400])};
                    `);return m!==s.e&&r(t,s.e=m),h!==s.t&&r(n,s.t=h),g!==s.a&&e(n,`data-error`,s.a=g),_!==s.o&&r(a,s.o=_),v!==s.i&&r(c,s.i=v),b!==s.n&&r(d,s.n=b),x!==s.s&&r(f,s.s=x),S!==s.h&&r(p,s.h=S),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),M(()=>n.value=JSON.stringify(E(),null,2)),t}}),z),s(_e,a(vl,{label:`Query`,defaultExpanded:[`Query`,`queryKey`],get value(){return w()}})),M(e=>{var a=W(o().detailsContainer,`tsqd-query-details-container`),s=W(o().detailsHeader,`tsqd-query-details-header`),d=W(o().detailsBody,`tsqd-query-details-summary-container`),f=W(o().queryDetailsStatus,re()),p=W(o().detailsHeader,`tsqd-query-details-header`),m=W(o().actionsBody,`tsqd-query-details-actions-container`),g=W(i`
                color: ${u(l.blue[600],l.blue[400])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-refetch`),_=D()===`fetching`,v=i`
                background-color: ${u(l.blue[600],l.blue[400])};
              `,y=W(i`
                color: ${u(l.yellow[600],l.yellow[400])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-invalidate`),b=O()===`pending`,x=i`
                background-color: ${u(l.yellow[600],l.yellow[400])};
              `,S=W(i`
                color: ${u(l.gray[600],l.gray[300])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-reset`),C=O()===`pending`,w=i`
                background-color: ${u(l.gray[600],l.gray[400])};
              `,T=W(i`
                color: ${u(l.pink[500],l.pink[400])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-remove`),E=D()===`fetching`,ee=i`
                background-color: ${u(l.pink[500],l.pink[400])};
              `,j=W(i`
                color: ${u(l.cyan[500],l.cyan[400])};
              `,`tsqd-query-details-actions-btn`,`tsqd-query-details-action-loading`),te=h(),ne=i`
                background-color: ${u(l.cyan[500],l.cyan[400])};
              `,M=W(o().detailsHeader,`tsqd-query-details-header`),N=W(o().detailsHeader,`tsqd-query-details-header`),P=Q.size[2];return a!==e.e&&r(t,e.e=a),s!==e.t&&r(n,e.t=s),d!==e.a&&r(c,e.a=d),f!==e.o&&r(k,e.o=f),p!==e.i&&r(ie,e.i=p),m!==e.n&&r(L,e.n=m),g!==e.s&&r(ae,e.s=g),_!==e.h&&(ae.disabled=e.h=_),v!==e.r&&r(oe,e.r=v),y!==e.d&&r(se,e.d=y),b!==e.l&&(se.disabled=e.l=b),x!==e.u&&r(ce,e.u=x),S!==e.c&&r(le,e.c=S),C!==e.w&&(le.disabled=e.w=C),w!==e.m&&r(ue,e.m=w),T!==e.f&&r(de,e.f=T),E!==e.y&&(de.disabled=e.y=E),ee!==e.g&&r(fe,e.g=ee),j!==e.p&&r(pe,e.p=j),te!==e.b&&(pe.disabled=e.b=te),ne!==e.T&&r(me,e.T=ne),M!==e.A&&r(ge,e.A=M),N!==e.O&&r(z,e.O=N),P!==e.I&&A(_e,`padding`,e.I=P),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),t}})},Tu=()=>{let e=H(),n=V().shadowDOMTarget?U.bind({target:V().shadowDOMTarget}):U,i=t(()=>e()===`dark`?Fu(n):Pu(n)),{colors:o}=Q,c=(t,n)=>e()===`dark`?n:t,l=Au(e=>{let t=e().getAll().find(e=>e.mutationId===lu());return t?t.state.isPaused:!1}),u=Au(e=>{let t=e().getAll().find(e=>e.mutationId===lu());return t?t.state.status:`idle`}),d=t(()=>v({isPaused:l(),status:u()})),p=Au(e=>e().getAll().find(e=>e.mutationId===lu()),!1),m=()=>d()===`gray`?n`
        background-color: ${c(o[d()][200],o[d()][700])};
        color: ${c(o[d()][700],o[d()][300])};
        border-color: ${c(o[d()][400],o[d()][600])};
      `:n`
      background-color: ${c(o[d()][100],o[d()][900])};
      color: ${c(o[d()][700],o[d()][300])};
      border-color: ${c(o[d()][400],o[d()][600])};
    `;return a(R,{get when(){return p()},get children(){var e=ou(),t=e.firstChild,n=t.nextSibling,o=n.firstChild,c=o.firstChild,l=c.firstChild,h=c.nextSibling,g=o.nextSibling.firstChild.nextSibling,_=n.nextSibling,v=_.nextSibling,y=v.nextSibling,b=y.nextSibling,x=b.nextSibling,S=x.nextSibling,C=S.nextSibling,w=C.nextSibling;return s(l,a(R,{get when(){return p().options.mutationKey},fallback:`No mutationKey found`,get children(){return f(p().options.mutationKey,!0)}})),s(h,a(R,{get when(){return d()===`purple`},children:`pending`}),null),s(h,a(R,{get when(){return d()!==`purple`},get children(){return u()}}),null),s(g,()=>new Date(p().state.submittedAt).toLocaleTimeString()),s(v,a(vl,{label:`Variables`,defaultExpanded:[`Variables`],get value(){return p().state.variables}})),s(b,a(vl,{label:`Context`,defaultExpanded:[`Context`],get value(){return p().state.context}})),s(S,a(vl,{label:`Data`,defaultExpanded:[`Data`],get value(){return p().state.data}})),s(w,a(vl,{label:`Mutation`,defaultExpanded:[`Mutation`],get value(){return p()}})),M(a=>{var o=W(i().detailsContainer,`tsqd-query-details-container`),s=W(i().detailsHeader,`tsqd-query-details-header`),c=W(i().detailsBody,`tsqd-query-details-summary-container`),l=W(i().queryDetailsStatus,m()),u=W(i().detailsHeader,`tsqd-query-details-header`),d=Q.size[2],f=W(i().detailsHeader,`tsqd-query-details-header`),p=Q.size[2],g=W(i().detailsHeader,`tsqd-query-details-header`),T=Q.size[2],E=W(i().detailsHeader,`tsqd-query-details-header`),D=Q.size[2];return o!==a.e&&r(e,a.e=o),s!==a.t&&r(t,a.t=s),c!==a.a&&r(n,a.a=c),l!==a.o&&r(h,a.o=l),u!==a.i&&r(_,a.i=u),d!==a.n&&A(v,`padding`,a.n=d),f!==a.s&&r(y,a.s=f),p!==a.h&&A(b,`padding`,a.h=p),g!==a.r&&r(x,a.r=g),T!==a.d&&A(S,`padding`,a.d=T),E!==a.l&&r(C,a.l=E),D!==a.u&&A(w,`padding`,a.u=D),a},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e}})},Eu=new Map,Du=()=>{let e=t(()=>V().client.getQueryCache()),n=e().subscribe(t=>{y(()=>{for(let[n,r]of Eu.entries())r.shouldUpdate(t)&&r.setter(n(e))})});return w(()=>{Eu.clear(),n()}),n},$=(e,n=!0,r=()=>!0)=>{let i=t(()=>V().client.getQueryCache()),[a,o]=m(e(i),n?void 0:{equals:!1});return N(()=>{o(e(i))}),Eu.set(e,{setter:o,shouldUpdate:r}),w(()=>{Eu.delete(e)}),a},Ou=new Map,ku=()=>{let e=t(()=>V().client.getMutationCache()),n=e().subscribe(()=>{for(let[t,n]of Ou.entries())queueMicrotask(()=>{n(t(e))})});return w(()=>{Ou.clear(),n()}),n},Au=(e,n=!0)=>{let r=t(()=>V().client.getMutationCache()),[i,a]=m(e(r),n?void 0:{equals:!1});return N(()=>{a(e(r))}),Ou.set(e,a),w(()=>{Ou.delete(e)}),i},ju=`@tanstack/query-devtools-event`,Mu=({type:e,queryHash:t,metadata:n})=>{let r=new CustomEvent(ju,{detail:{type:e,queryHash:t,metadata:n},bubbles:!0,cancelable:!0});window.dispatchEvent(r)},Nu=(e,t)=>{let{colors:n,font:r,size:i,alpha:a,shadow:o,border:s}=Q,c=(t,n)=>e===`light`?t:n;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${o.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${Q.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${c(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${c(n.gray[400],n.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${Q.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${c(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${c(n.gray[400],n.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${i[14]};
      border-bottom: ${c(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${i[14]};
      border-top: ${c(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${c(n.gray[50],n.darkGray[700])};
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[600]};
      }
      & svg {
        color: ${c(n.gray[600],n.gray[400])};
        width: ${i[2]};
        height: ${i[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${i[2]};
      transform: translate(0, 100%);
      border-right: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${s.radius.sm} ${s.radius.sm};
      padding: ${i[.5]} ${i[1.5]} ${i[1]} ${i[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${i[2.5]};
        height: ${i[1.5]};
        width: calc(100% + ${i[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${i[2]};
      transform: translate(0, -100%);
      border-right: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${s.radius.sm} ${s.radius.sm} 0px 0px;
      padding: ${i[1]} ${i[1.5]} ${i[.5]} ${i[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${i[2.5]};
        height: ${i[1.5]};
        width: calc(100% + ${i[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${i[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: ${s.radius.sm} 0px 0px ${s.radius.sm};
      padding: ${i[1.5]} ${i[.5]} ${i[1.5]} ${i[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${i[5]});
        width: ${i[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${i[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${c(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px ${s.radius.sm} ${s.radius.sm} 0px;
      padding: ${i[1.5]} ${i[1]} ${i[1.5]} ${i[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${i[5]});
        width: ${i[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${c(n.gray[50],n.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n.purple[400]}${c(``,a[90])};
      }
      &:focus {
        outline: none;
        background-color: ${n.purple[400]}${c(``,a[90])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[800]};
        outline-offset: -2px;
        background-color: ${n.purple[400]}${c(``,a[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${Q.size[2]} ${Q.size[2.5]};
      gap: ${Q.size[2.5]};
      border-bottom: ${c(n.gray[300],n.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${i[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${Q.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${Q.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${c(n.gray[600],n.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(
        to right,
        ${c(`#ea4037, #ff9b11`,`#dd524b, #e9a03b`)}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${Q.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${Q.size[1.5]};
      box-sizing: border-box;
      height: ${Q.size[6.5]};
      background: ${c(n.gray[50],n.darkGray[500])};
      color: ${c(n.gray[700],n.gray[300])};
      border-radius: ${Q.border.radius.sm};
      font-size: ${r.size.sm};
      padding: ${Q.size[1]};
      padding-left: ${Q.size[1.5]};
      align-items: center;
      font-weight: ${r.weight.medium};
      border: ${c(`1px solid `+n.gray[300],`1px solid transparent`)};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${r.size.xs};
    `,queryStatusCount:t`
      font-size: ${r.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${c(n.gray[500],n.gray[400])};
      background-color: ${c(n.gray[200],n.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${Q.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${c(n.gray[50],n.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${Q.size[2]}));
      padding: ${Q.size[.5]} ${Q.size[2]};
      border-radius: ${Q.border.radius.sm};
      font-size: ${r.size.xs};
      border: 1px solid ${c(n.gray[400],n.gray[600])};
      color: ${c(n.gray[600],n.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${c(n.gray[400],n.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${c(n.gray[100],n.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${Q.size[2]};
      & > button {
        cursor: pointer;
        padding: ${Q.size[.5]} ${Q.size[1.5]} ${Q.size[.5]}
          ${Q.size[2]};
        border-radius: ${Q.border.radius.sm};
        background-color: ${c(n.gray[100],n.darkGray[400])};
        border: 1px solid ${c(n.gray[300],n.darkGray[200])};
        color: ${c(n.gray[700],n.gray[300])};
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r.lineHeight.sm};
        gap: ${Q.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${s.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        & svg {
          width: ${Q.size[3]};
          height: ${Q.size[3]};
          color: ${c(n.gray[500],n.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${i[.5]} ${i[2]};
      border-radius: ${Q.border.radius.sm};
      background-color: ${c(n.gray[100],n.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${Q.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${c(n.gray[300],n.darkGray[200])};
      height: min-content;
      color: ${c(n.gray[600],n.gray[400])};
      & > svg {
        width: ${i[3]};
        height: ${i[3]};
      }
      & input {
        font-size: ${r.size.xs};
        width: 100%;
        background-color: ${c(n.gray[100],n.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r.lineHeight.sm};
        color: ${c(n.gray[700],n.gray[300])};
        &::placeholder {
          color: ${c(n.gray[700],n.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,filterSelect:t`
      padding: ${Q.size[.5]} ${Q.size[2]};
      border-radius: ${Q.border.radius.sm};
      background-color: ${c(n.gray[100],n.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${Q.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${c(n.gray[300],n.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${c(n.gray[600],n.gray[400])};
        width: ${Q.size[2]};
        height: ${Q.size[2]};
      }
      & > select {
        appearance: none;
        color: ${c(n.gray[700],n.gray[300])};
        min-width: 100px;
        line-height: ${r.lineHeight.sm};
        font-size: ${r.size.xs};
        background-color: ${c(n.gray[100],n.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${Q.size[2]};
    `,actionsBtn:t`
      border-radius: ${Q.border.radius.sm};
      background-color: ${c(n.gray[100],n.darkGray[400])};
      border: 1px solid ${c(n.gray[300],n.darkGray[200])};
      width: ${Q.size[6.5]};
      height: ${Q.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${Q.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      & svg {
        color: ${c(n.gray[700],n.gray[300])};
        width: ${Q.size[3]};
        height: ${Q.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${c(n.yellow[700],n.yellow[500])};
        fill: ${c(n.yellow[700],n.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${c(n.gray[700],n.gray[300])};
      background-color: ${c(n.gray[50],n.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${c(n.gray[200],n.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${Q.size[1]};
        user-select: none;
        min-width: ${Q.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r.size.xs};
        font-weight: ${r.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${c(n.gray[300],n.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        min-height: ${Q.size[6]};
        flex: 1;
        padding: ${Q.size[1]} ${Q.size[2]};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${c(n.gray[300],n.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${Q.size[2]};
        color: ${c(n.gray[800],n.gray[300])};
        background-color: ${c(n.gray[300],n.darkGray[600])};
        border-bottom: 1px solid ${c(n.gray[300],n.darkGray[400])};
        font-size: ${r.size.xs};
      }

      & .tsqd-query-static-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${Q.size[2]};
        color: ${c(n.teal[800],n.teal[300])};
        background-color: ${c(n.teal[100],n.teal[900])};
        border-bottom: 1px solid ${c(n.teal[300],n.teal[700])};
        font-size: ${r.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${c(n.gray[200],n.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${c(n.gray[50],n.darkGray[700])};
      color: ${c(n.gray[700],n.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${c(n.gray[200],n.darkGray[600])};
      padding: ${Q.size[1.5]} ${Q.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      line-height: ${r.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${Q.size[1.5]} 0px ${Q.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${Q.size[2]};
        line-height: ${r.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${Q.size[1.5]};
      }

      & code {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r.size.xs};
        line-height: ${r.lineHeight.xs};
        max-width: 100%;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${n.darkGray[200]};
      border-radius: ${Q.border.radius.sm};
      font-weight: ${r.weight.medium};
      padding: ${Q.size[1]} ${Q.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${Q.size[2]} 0px ${Q.size[2]} 0px;
      display: flex;
      gap: ${Q.size[2]};
      padding: 0px ${Q.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r.size.xs};
        padding: ${Q.size[1]} ${Q.size[2]};
        display: flex;
        border-radius: ${Q.border.radius.sm};
        background-color: ${c(n.gray[100],n.darkGray[600])};
        border: 1px solid ${c(n.gray[300],n.darkGray[400])};
        align-items: center;
        gap: ${Q.size[2]};
        font-weight: ${r.weight.medium};
        line-height: ${r.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${s.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        &:hover {
          background-color: ${c(n.gray[200],n.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${i[1.5]};
          height: ${i[1.5]};
          border-radius: ${Q.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${r.size.xs};
      padding: ${Q.size[.5]} ${Q.size[2]};
      display: flex;
      border-radius: ${Q.border.radius.sm};
      overflow: hidden;
      background-color: ${c(n.gray[100],n.darkGray[600])};
      border: 1px solid ${c(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${Q.size[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.sm};
      color: ${c(n.red[500],n.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      & > span {
        width: ${i[1.5]};
        height: ${i[1.5]};
        border-radius: ${Q.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${Q.colors.red[400]};
      }
      & svg {
        width: ${Q.size[2]};
        height: ${Q.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${i[.5]};
      border-radius: ${Q.border.radius.sm};
      border: 1px solid ${c(n.gray[300],n.gray[700])};
      background-color: ${c(n.gray[50],n.darkGray[600])};
      font-size: ${r.size.xs};
      color: ${c(n.gray[700],n.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${i[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${Q.border.radius.xs};
      padding: ${Q.size[1]} ${Q.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${c(n.gray[700],n.gray[300])};
      & svg {
        color: ${c(n.gray[600],n.gray[400])};
        transform: rotate(-90deg);
        width: ${Q.size[2]};
        height: ${Q.size[2]};
      }
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${Q.size[1]} ${Q.size[1]};
      font-weight: ${r.weight.medium};
      border-bottom: 1px solid ${c(n.gray[300],n.darkGray[400])};
      color: ${c(n.gray[500],n.gray[400])};
      font-size: ${r.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${c(n.gray[700],n.gray[300])};
      font-size: ${r.size.xs};
      border-radius: ${Q.border.radius.xs};
      padding: ${Q.size[1]} ${Q.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${c(n.gray[600],n.gray[400])};
      }
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &[data-checked] {
        background-color: ${c(n.purple[100],n.purple[900])};
        color: ${c(n.purple[700],n.purple[300])};
        & svg {
          color: ${c(n.purple[700],n.purple[300])};
        }
        &:hover {
          background-color: ${c(n.purple[100],n.purple[900])};
        }
      }
    `,viewToggle:t`
      border-radius: ${Q.border.radius.sm};
      background-color: ${c(n.gray[200],n.darkGray[600])};
      border: 1px solid ${c(n.gray[300],n.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r.size.xs};
      color: ${c(n.gray[700],n.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r.lineHeight.md};
        }

        & label:hover {
          background-color: ${c(n.gray[100],n.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${c(n.gray[100],n.darkGray[400])};
        & label:hover {
          background-color: ${c(n.gray[100],n.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${Q.size[1.5]} 0 ${Q.size[2]};
        }
        border-right: 1px solid ${c(n.gray[300],n.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${Q.size[2]} 0 ${Q.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${i[2]};
      & > [data-error='true'] {
        outline: 2px solid ${c(n.red[200],n.red[800])};
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r.size.xs};
      border-radius: ${s.radius.sm};
      field-sizing: content;
      padding: ${i[2]};
      background-color: ${c(n.gray[100],n.darkGray[800])};
      color: ${c(n.gray[900],n.gray[100])};
      border: 1px solid ${c(n.gray[200],n.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${c(n.blue[200],n.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${i[2]};
      align-items: center;
      padding-top: ${i[1]};
      font-size: ${r.size.xs};
    `,devtoolsEditFormError:t`
      color: ${c(n.red[700],n.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${i[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r.size.xs};
      padding: ${i[1]} ${Q.size[2]};
      display: flex;
      border-radius: ${s.radius.sm};
      background-color: ${c(n.gray[100],n.darkGray[600])};
      border: 1px solid ${c(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${i[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover {
        background-color: ${c(n.gray[200],n.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},Pu=e=>Nu(`light`,e),Fu=e=>Nu(`dark`,e);o([`click`,`mousedown`,`keydown`,`input`]);var Iu=e=>{let[r,i]=Se({prefix:`TanstackQueryDevtools`}),o=n(),s=t(()=>{let t=e.theme||r.theme_preference||`system`;return t===`system`?o():t});return a(Le.Provider,{value:e,get children(){return a(Be,{localStore:r,setLocalStore:i,get children(){return a(He.Provider,{value:s,get children(){return a(hu,{localStore:r,setLocalStore:i})}})}})}})};export{Iu as default};