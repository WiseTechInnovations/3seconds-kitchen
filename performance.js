// Pause offscreen animations and save mobile battery and bandwidth.
(()=>{const videos=[...document.querySelectorAll('.video-wall video')];if(!videos.length)return;
const small=matchMedia('(max-width:700px)');const reduced=matchMedia('(prefers-reduced-motion:reduce)');
const shown=v=>!!(v.offsetWidth&&v.offsetHeight);let observer;
function update(v,visible){if(!visible||document.hidden||reduced.matches||!shown(v)){v.pause();return;}const p=v.play();if(p&&p.catch)p.catch(()=>{});}
if('IntersectionObserver'in window){observer=new IntersectionObserver(entries=>entries.forEach(e=>update(e.target,e.isIntersecting)),{rootMargin:'100px'});videos.forEach(v=>observer.observe(v));}
else videos.forEach(v=>update(v,true));
document.addEventListener('visibilitychange',()=>videos.forEach(v=>update(v,!document.hidden)));
small.addEventListener?.('change',()=>videos.forEach(v=>update(v,true)));
reduced.addEventListener?.('change',()=>videos.forEach(v=>update(v,true)));
})();