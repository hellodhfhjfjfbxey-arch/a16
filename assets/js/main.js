(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var pg=$('pl-g');if(pg){var mt=0;function f(n,u){return (Math.round(n*10)/10).toLocaleString('en-US')+' '+u;}
 function pl(){var g=+pg.value,c={};[].forEach.call(document.querySelectorAll('#pl-c input'),function(i){c[i.value]=i.checked;});$('pl-go').textContent=g;var L=[];
  if(c.nib)L.push(['Nibbles',g*4+' to '+g*6+' small pieces']);if(c.st)L.push(['Starter',f(g*.12,'kg')+' of the main ingredient']);
  L.push(['Main',[f(g*.2,'kg')+' boneless meat or fish ('+f(g*.35,'kg')+' on the bone)',f(g*.3,'kg')+' vegetables, beans or cheese',f(g*.1,'kg')+' dry pasta or rice'][mt]]);
  if(c.sd)L.push(['Sides',f(g*.2,'kg')+' potatoes or grains, plus '+f(g*.15,'kg')+' greens']);L.push(['Bread',Math.ceil(g/4)+(g>4?' loaves':' loaf')]);if(c.ds)L.push(['Dessert',g+' portions, plus 2 spare']);
  L.push(['Water',f(g*.75,'litres')]);var crs=(c.nib?1:0)+(c.st?1:0)+1+(c.ds?1:0);L.push(['Plates',g*(crs+(c.sd?0:0))+' (one per course per guest)']);L.push(['Cutlery sets',g*crs]);L.push(['Napkins',g+2]);
  $('pl-o').innerHTML='<h3>Shopping &amp; table list</h3><p class="sub">Dinner for '+g+' &middot; '+crs+' courses</p><ul>'+L.map(function(x,i){return '<li style="animation-delay:'+i*40+'ms"><span>'+x[0]+'</span><b>'+x[1]+'</b></li>';}).join('')+'</ul><p class="nt">Rough guides for adult appetites. Make a little extra of the main if guests are hungry, and check diets and allergies in advance.</p>';}
 pg.addEventListener('input',pl);[].forEach.call(document.querySelectorAll('#pl-c input'),function(i){i.addEventListener('change',pl);});
 [].forEach.call(document.querySelectorAll('#pl-m button'),function(b){b.addEventListener('click',function(){mt=+b.getAttribute('data-v');[].forEach.call(document.querySelectorAll('#pl-m button'),function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});pl();});});pl();}
var sv=$('st-svg');if(sv){var sn=$('st-n'),tt='r',order=[],sel=-1;function names(n){var a=['Host'];for(var i=1;i<n;i++)a.push('G'+i);return a;}
 function draw(){var n=+sn.value,h='',pos=[];$('st-no').textContent=n;if(order.length!==n)order=names(n).map(function(_,i){return i;});
  if(tt==='r'){var R=n>10?120:100;h+='<circle cx="210" cy="210" r="'+R+'" class="tbl"/>';for(var i=0;i<n;i++){var a=-Math.PI/2+i*2*Math.PI/n;pos.push([210+(R+46)*Math.cos(a),210+(R+46)*Math.sin(a)]);}}
  else{var side=Math.ceil((n-2)/2),len=Math.max(200,side*56),x0=210-len/2;h+='<rect x="'+x0+'" y="160" width="'+len+'" height="100" rx="10" class="tbl"/>';pos.push([x0-40,210]);for(var i=0;i<side;i++)pos.push([x0+28+i*(len-56)/Math.max(1,side-1),118]);pos.push([x0+len+40,210]);for(var j=0;j<n-2-side;j++)pos.push([x0+len-28-j*(len-56)/Math.max(1,side-1),302]);pos=pos.slice(0,n);}
  var nm=names(n);pos.forEach(function(p,i){var who=nm[order[i]];h+='<g class="seat'+(order[i]===0?' h':'')+(sel===i?' sel':'')+'" data-i="'+i+'" tabindex="0" role="button" aria-label="Seat '+(i+1)+': '+who+'"><circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="22"/><text x="'+p[0].toFixed(1)+'" y="'+(p[1]+4).toFixed(1)+'">'+who+'</text></g>';});sv.innerHTML=h;
  [].forEach.call(sv.querySelectorAll('.seat'),function(s){function act(){var i=+s.getAttribute('data-i');if(sel<0)sel=i;else{var t=order[sel];order[sel]=order[i];order[i]=t;sel=-1;}draw();}s.addEventListener('click',act);s.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();act();}});});
  $('st-tip').textContent=tt==='r'?'Round tables keep everyone in one conversation. Sit the host nearest the kitchen and mix guests who do not know each other well.':'At a long table, put the host at one end and lively talkers in the middle so conversation reaches both ends.';}
 sn.addEventListener('input',function(){order=[];sel=-1;draw();});[].forEach.call(document.querySelectorAll('#st-t button'),function(b){b.addEventListener('click',function(){tt=b.getAttribute('data-v');[].forEach.call(document.querySelectorAll('#st-t button'),function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});sel=-1;draw();});});draw();}
})();
