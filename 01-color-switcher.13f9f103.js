const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null;e.disabled=!0,t.disabled=!1,t.addEventListener("click",(function(){e.disabled=!1,d=setInterval((function(){return document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(d),e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.13f9f103.js.map