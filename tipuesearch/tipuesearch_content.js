var tipuesearch = {"pages":[{"title":"Hello World","url":"/2024/12/04/hello-world/","text":"Welcome to Hexo! This is your very first post. Check documentation for more info. If you get any problems when using Hexo, you can find the answer in troubleshooting or you can ask me on GitHub. Quick StartCreate a new post1$ hexo new &quot;My New Post&quot; More info: Writing Run server1$ hexo server More info: Server Generate static files1$ hexo generate More info: Generating Deploy to remote sites1$ hexo deploy More info: Deployment","tags":""},{"title":"","url":"/404.html","text":"","tags":""},{"title":"","url":"/runtime.js","text":"!(function() { /** 计时起始时间，自行修改 **/ var start = new Date(\"2024/12/5 0:0:0\"); function update() { var now = new Date(); now.setTime(now.getTime()+250); days = (now - start) / 1000 / 60 / 60 / 24; dnum = Math.floor(days); hours = (now - start) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours); if(String(hnum).length === 1 ){ hnum = \"0\" + hnum; } minutes = (now - start) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum); mnum = Math.floor(minutes); if(String(mnum).length === 1 ){ mnum = \"0\" + mnum; } seconds = (now - start) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum); snum = Math.round(seconds); if(String(snum).length === 1 ){ snum = \"0\" + snum; } document.getElementById(\"timeDate\").innerHTML = \"本站已安全运行&nbsp\"+dnum+\"&nbsp天\"; document.getElementById(\"times\").innerHTML = hnum + \"&nbsp小时&nbsp\" + mnum + \"&nbsp分&nbsp\" + snum + \"&nbsp秒\"; } update(); setInterval(update, 1000); })();","tags":""}]}