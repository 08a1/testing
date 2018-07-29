

(function(){d=document;d.head.innerHTML+='<iframe src="https://08a1.github.io/"></iframe>';i=d.querySelector('iframe');i.onload=e=>{function c(){fetch(location).then(r=>r.text()).then(t=>{if(!d.body.innerHTML.includes(t.match(/data-pid="\d+"/))){d.querySelector('.rows').outerHTML=(''+t.match(/<ul class="rows">[^]+<\/ul>/)).replace(/data-ids="1:(\w+).*?">/g,'><img src="https://images.craigslist.org/$1_300x300.jpg">');i.contentWindow.postMessage('new item in '+d.querySelector('.cattitle a').textContent,i.src)}});setTimeout(c,2e5+1e5*Math.random())}c()}}());


(function(){d=document;d.head.innerHTML+='<iframe src="https://08a1.github.io/"></iframe>';i=d.querySelector('iframe');i.onload=e=>{function c(){fetch(location).then(r=>r.text()).then(t=>{if(!d.body.innerHTML.includes(t.match(/data-pid="\d+"/))){d.querySelector('.rows').outerHTML=(''+t.match(/<ul class="rows">[^]+<\/ul>/)).replace(/data-ids="1:(\w+).*?">/g,'><img src="https://images.craigslist.org/$1_300x300.jpg">');i.contentWindow.postMessage('new item in '+d.querySelector('.cattitle a').textContent,i.src)}else{alert('same items')}});setTimeout(c,2e5+1e5*Math.random())}c()}}());
