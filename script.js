!function(t){var e={};function s(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(i,o,function(e){return t[e]}.bind(null,o));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);const i=document.querySelector(".carousel__slides"),o=document.querySelector(".arrow_left"),r=document.querySelector(".arrow_right"),n=new class{constructor(t,e,s,i){this.background=t,this.slides=e,this.buttonLeft=s,this.buttonRight=i,this.slideNum=0,this.cooldown=!1,this.length=e.children.length,this.slides.onclick=this.screenHandler.bind(this),this.buttonLeft.onclick=this.leftHandler.bind(this),this.buttonRight.onclick=this.rightHandler.bind(this)}move(t){switch(t){case"right":this.slides.style.transform=`translateX(-${100*++this.slideNum}%)`;break;case"left":this.slides.style.transform=`translateX(-${100*--this.slideNum}%)`}}setCooldown(){this.cooldown=!0,setTimeout(()=>{this.cooldown=!1},300)}changeBackground(){this.background.classList.toggle("slider_blue"),this.buttonLeft.classList.toggle("arrow_blue"),this.buttonRight.classList.toggle("arrow_blue")}leftHandler(){if(!this.cooldown)if(this.slideNum<=this.length-1&&this.slideNum>0)this.move("left"),this.setCooldown(),this.changeBackground();else{this.slides.classList.remove("with-animation");const t=this.slides.children[this.length-1];this.move("right"),this.slides.children[this.length-1].remove(),this.slides.prepend(t),setTimeout(()=>{this.slides.classList.add("with-animation"),this.move("left"),this.changeBackground()},10),this.setCooldown()}}rightHandler(){if(!this.cooldown)if(this.slideNum>=0&&this.slideNum<this.length-1)this.move("right"),this.setCooldown(),this.changeBackground();else{this.slides.classList.remove("with-animation");const t=this.slides.children[0];this.move("left"),this.slides.children[0].remove(),this.slides.append(t),setTimeout(()=>{this.slides.classList.add("with-animation"),this.move("right")},10),this.setCooldown(),this.changeBackground()}}screenHandler(t){if("BUTTON"!=t.target.tagName)return;const e=t.target.id.match(/(?<=button\-)\w*/g).toString();this.slides.querySelector(`.${e}`).classList.toggle("phone__display_vertical_off")}}(document.querySelector(".slider"),i,o,r);window.slider=n;const l=new class{constructor(t,e,s){this.navList=t,this.navHeight=window.innerWidth>=768?95:71,this.cooldown=!1,this.timerID=null,this.sections=e,this.burgerButton=s,this.navigation=this.navList.parentElement,this.popup=this.navigation.parentElement,this.burgerButton.onclick=this.burgerHandler.bind(this),this.navList.onclick=this.clickHandler.bind(this),window.onscroll=this.scrollHandler.bind(this)}getSectionsCoords(){const t=new Map([["home",0]]);return this.sections.forEach(e=>{e.id&&t.set(e.id,e.offsetTop-this.navHeight)}),t}setCooldown(){this.cooldown=!0,this.timerID=setTimeout(()=>{this.cooldown=!1},800)}getSectionByCoord(t){const e=this.getSectionsCoords(),s=Array.from(e.values()),i=Array.from(e.keys());for(let e=s.length-1;e>=0;e--)if(t>=s[e])return i[e]}removeActiveStyle(){this.navList.querySelector(".link_nav_active").classList.remove("link_nav_active")}clickHandler(t){if("A"!=t.target.tagName)return;t.preventDefault(),this.removeActiveStyle();const e=t.target,s=e.href.match(/(?<=#)\w+$/g).toString(),i=this.getSectionsCoords().get(s);e.classList.add("link_nav_active"),this.cooldown?(clearInterval(this.timerID),this.setCooldown()):this.setCooldown(),window.scrollTo(0,i)}scrollHandler(){if(this.cooldown)return;const t=this.getSectionByCoord(window.pageYOffset),e=this.navList.querySelector(`[href="#${t}"]`);this.removeActiveStyle(),e.classList.add("link_nav_active")}burgerHandler(){this.navigation.classList.contains("navigation_show")?(this.burgerButton.classList.toggle("button_burger_active"),this.navigation.classList.toggle("navigation_show"),setTimeout(()=>{this.popup.classList.toggle("header__right_show")},500)):(this.burgerButton.classList.toggle("button_burger_active"),this.navigation.classList.toggle("navigation_show"),this.popup.classList.toggle("header__right_show"))}}(document.querySelector(".navigation__list"),document.querySelectorAll("section"),document.querySelector(".button_burger"));window.navigation=l;const c=new class{constructor(t,e){this.filterList=t,this.projectsList=e,this.filterList.onclick=this.filterHandler.bind(this),this.projectsList.onclick=this.projectHandler.bind(this)}sortProjects(){const t=Array.from(this.projectsList.children).sort((t,e)=>Math.random()-.5);this.projectsList.innerHTML="",this.projectsList.append(...t)}removeFilterActiveStyle(){this.filterList.querySelector(".button_filter_active").classList.remove("button_filter_active")}removeProjectActiveStyle(){const t=this.projectsList.querySelector(".link_project_active");console.log(t),t&&t.classList.remove("link_project_active")}filterHandler(t){"BUTTON"!=t.target.tagName||t.target.classList.contains("button_filter_active")||(this.removeFilterActiveStyle(),t.target.classList.add("button_filter_active"),this.sortProjects())}projectHandler(t){"IMG"==t.target.tagName&&(t.preventDefault(),this.removeProjectActiveStyle(),t.target.parentNode.classList.add("link_project_active"))}}(document.querySelector(".portfolio__filter-list"),document.querySelector(".portfolio__projects-list"));window.portfolio=c;const a=new class{constructor(t,e){this.form=t,this.formPopup=e,this.message=e.querySelector(".form-popup__message"),this.closeButton=e.querySelector(".form-popup__close-button"),this.closeButton.onclick=this.closePopup.bind(this),this.form.onsubmit=this.sumbitHanler.bind(this)}fillMessage(){const t=this.message.querySelector("#subject"),e=this.message.querySelector("#description"),{subject:s,description:i}=this.getFormInput();t.innerHTML=s,e.innerHTML=i}getFormInput(){const t=this.form.querySelector('[name="subject"]').value,e=this.form.querySelector('[name="description"]').value;return{subject:t||"Без темы",description:e||"Без описания"}}openPopup(){this.formPopup.classList.add("form-popup_show"),setTimeout(()=>{this.message.classList.add("form-popup__message_show")},10)}closePopup(){this.message.classList.remove("form-popup__message_show"),setTimeout(()=>{this.formPopup.classList.remove("form-popup_show"),this.reset()},500)}reset(){this.form.querySelectorAll("[name]").forEach(t=>{t.value=""})}sumbitHanler(t){t.preventDefault(),this.fillMessage(),this.openPopup(),setTimeout(()=>{this.closePopup()},5e3)}}(document.querySelector(".form"),document.querySelector(".form-popup"));window.form=a}]);