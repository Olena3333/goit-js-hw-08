function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function E(e){return l=e,u=setTimeout(j,t),c?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function j(){var e=g();if(h(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,i-(e-l)):n}(e))}function S(e){return u=void 0,v&&r?b(e):(r=o=void 0,a)}function T(){var e=g(),n=h(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return E(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},T.flush=function(){return void 0===u?a:S(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b={inputNameEl:document.querySelector('.feedback-form [name="name"]'),inputMessageEl:document.querySelector('.feedback-form [name="message"]'),formEl:document.querySelector(".feedback-form")};b.formEl.addEventListener("input",e(t)((function(e){const t=e.target.name,n=e.target.value;E[t]=n,function(e,t){localStorage.setItem(e,JSON.stringify(t))}("formData",E)}),500)),b.formEl.addEventListener("submit",(e=>{e.preventDefault();const{email:t,message:n}=e.currentTarget.elements;if(!t.value||!n.value)return alert("fill all field");console.log(E),e.target.reset(),localStorage.removeItem("formData"),E={}}));let E={};!function(){const{email:e,message:t}=b.formEl.elements;E=function(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}("formData")||{},e.value=E.email||"",t.value=E.message||""}();
//# sourceMappingURL=03-feedback.cce72700.js.map
