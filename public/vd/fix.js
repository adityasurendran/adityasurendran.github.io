document.addEventListener('DOMContentLoaded',function(){
var h=location.hostname;
if(h.indexOf('192.168.')===0||h.indexOf('10.')===0||h==='localhost'||h.indexOf('vaultdrive.local')===0||h==='192.168.4.1')return;
var parts=location.pathname.split('/').filter(Boolean);
if(parts.length<1)return;var first='/'+parts[0];
var links=document.querySelectorAll('a[href^="/"]');
for(var i=0;i<links.length;i++){var u=links[i].getAttribute('href');
if(u==='/'){links[i].setAttribute('href',first+'/');}
else if(u.indexOf(first+'/')!==0&&u!==first){links[i].setAttribute('href',first+u);}}
var forms=document.querySelectorAll('form[action^="/"]');
for(var j=0;j<forms.length;j++){var a=forms[j].getAttribute('action');
if(a.indexOf(first+'/')!==0&&a!==first){forms[j].setAttribute('action',first+a);}}
var media=document.querySelectorAll('img[src^="/"],audio[src^="/"],video[src^="/"],source[src^="/"]');
for(var k=0;k<media.length;k++){var m=media[k].getAttribute('src');
if(m.indexOf(first+'/')!==0&&m!==first){media[k].setAttribute('src',first+m);}}
window.vd_base=function(p){var h2=location.hostname;
if(h2.indexOf('192.168.')===0||h2.indexOf('10.')===0||h2==='localhost'||h2.indexOf('vaultdrive.local')===0||h2==='192.168.4.1')return p;
var pp=location.pathname.split('/').filter(Boolean);
if(pp.length<1)return p;var f='/'+pp[0];
return (p.indexOf(f+'/')===0||p===f)?p:f+p;};
});
