var e=document.querySelector(".logo"),n=document.createElement("div"),t=document.createElement("div");n.classList.add("message"),t.classList.add("message","error-message"),n.innerHTML="Promise was resolved!",t.innerHTML="Promise was rejected!";var o=new Promise(function(n){e.addEventListener("click",function(){n()})}),c=new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected due to timeout"))},3e3)});o.then(function(){document.body.append(n)}).catch(function(){document.body.append(t)}),c.then(function(){document.body.append(n)}).catch(function(){document.body.append(t)});
//# sourceMappingURL=index.9efdfb72.js.map
