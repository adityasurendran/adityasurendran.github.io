(function(){
// Dark mode
var dm=localStorage.getItem('vd_dark');
if(dm==='1')document.body.classList.add('dark');
// Language
var lang=localStorage.getItem('vd_lang')||'en';
window.vd_t=function(en,ga){return lang==='ga'?ga:en;};
// Apply dark mode toggle if button exists
document.addEventListener('DOMContentLoaded',function(){
var btn=document.getElementById('darkToggle');
if(btn){
if(dm==='1')btn.classList.add('on');
btn.addEventListener('click',function(){
var on=document.body.classList.toggle('dark');
localStorage.setItem('vd_dark',on?'1':'0');
btn.classList.toggle('on',on);
});
}
var en=document.getElementById('langEn'),ga=document.getElementById('langGa');
if(en&&ga){
if(lang==='ga')ga.classList.add('active');else en.classList.add('active');
en.addEventListener('click',function(){localStorage.setItem('vd_lang','en');location.reload();});
ga.addEventListener('click',function(){localStorage.setItem('vd_lang','ga');location.reload();});
}
// Apply Gaeilge translations
if(lang==='ga'){
var els=document.querySelectorAll('[data-ga]');
for(var k=0;k<els.length;k++){els[k].textContent=els[k].getAttribute('data-ga');}
var phs=document.querySelectorAll('[data-ga-ph]');
for(var m=0;m<phs.length;m++){phs[m].setAttribute('placeholder',phs[m].getAttribute('data-ga-ph'));}
var opts=document.querySelectorAll('option[data-ga]');
for(var o=0;o<opts.length;o++){opts[o].textContent=opts[o].getAttribute('data-ga');}
}
});
})();
