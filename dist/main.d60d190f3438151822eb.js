(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=(()=>{const e=document.createElement("div");e.id="inputContainer";const t=document.createElement("input");t.type="text",t.className="city-input",t.name="city-input",e.appendChild(t);const n=document.createElement("button");return n.className="weather-search",n.textContent="Search",e.appendChild(n),e})(),n={weatherData:async function(e,t){try{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=${t}&APPID=228a3f9fe276acdf8c030f707cddc96f`,{mode:"cors"});if(404!==n.status)return await n.json();alert("city not found")}catch(e){console.log(e)}}},a={hourlyWeatherData:async function(e,t){try{const n=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${e}&units=${t}&appid=228a3f9fe276acdf8c030f707cddc96f`);if(404!==n.status)return await n.json();alert("city not found")}catch(e){console.log(e)}}},r=(e,t=null,n=null,a=null,r=null,c=null)=>"input"===e?i.formElementCreator(e,t,n,a):"img"!==e?i.creator(e,t,n,a):i.imageElementCreator(e,t,n,a,r,c),c=(e,t=null,n=null)=>{const a=document.createElement("div");return null!==t&&a.classList.add(t),null!==n&&a.setAttribute("id",`${n}`),e.forEach((e=>{const[t,n,c,i,o,l]=e;a.appendChild(r(t,n,c,i,o,l))})),a},i=(()=>{const e=(e,t,n,a)=>{const r=document.createElement(e);return null!==t&&r.classList.add(t),null!==n&&r.setAttribute("id",`${n}`),"input"!==e?"span"===e?null!==a&&(r.innerHTML=a):null!==a&&(r.textContent=a):r.type=a,r};return{creator:e,imageElementCreator:(t,n,a,r,c,i)=>{const o=e(t,n,a,r);return null!==i&&(o.alt=i),null!==c&&(o.src=c),o},formElementCreator:(t,n,a,r)=>e(t,n,a,r)}})(),o=(()=>{const e=document.createElement("div");e.id="weatherContainer";const t=c([["p","cityName"]],"weather-header"),n=c([["button","metric",null,"C"],["button","imperial",null,"F"]],"units");t.append(n);const a=document.createElement("div");a.className="weather-details";const i=document.createElement("img");i.className="weather-img",i.src="#",a.appendChild(i);const o=document.createElement("p");o.className="main-weather",a.appendChild(o);const l=document.createElement("div");l.className="other-details";const s=document.createElement("p");s.className="weather-text",l.appendChild(s);const u=c([["p","max-temp",null],["p","min-temp",null],["p","visibility",null],["p","humidity",null]],"other-weather-info"),d=r("div","hourly-weather");for(let e=0;e<40;e++){const t=c([["p","day"],["img","weather-img"],["p","min-max"],["p","desc"]],"hourly-weather-"+e);d.appendChild(t)}const m=r("img","loader-image");return e.appendChild(t),e.appendChild(a),e.appendChild(l),e.appendChild(u),e.appendChild(d),e.appendChild(m),e})(),l=e.p+"bb036aaf0388f2d90df9db1855848943.gif",s=document.querySelector("#content");s.appendChild(t),s.appendChild(o);const u=document.querySelector(".city-input"),d=document.querySelector(".weather-search"),m=document.querySelector(".main-weather"),p=document.querySelector(".weather-img"),h=document.querySelector(".weather-header>.units"),y=document.querySelector(".cityName"),w=document.querySelector("#weatherContainer>.loader-image");w.src=l;let f={unit:"metric",symbol:"C"};d.addEventListener("click",(()=>{""!==u.value?(C(u.value,f.unit),$(u.value,f.unit)):alert("city name must not be empty")}));const g=(e,t)=>{const n=document.querySelectorAll(".other-weather-info>p"),[a,r,c,i]=Array.from(n);a.innerHTML=`Max: ${e.main.temp_max}<span class='units'>&#176;${t}</span>`,r.innerHTML=`Min: ${e.main.temp_min}<span class='units'>&#176;${t}</span>`,c.textContent=`Visibility: ${Math.floor(e.visibility/1e3)}km`,i.textContent=`Humidity: ${e.main.humidity}%`},C=(e,t)=>{w.classList.add("show_loader"),n.weatherData(e,t).then((function(e){((e,t)=>{y.innerHTML=`${e.name}<span>, ${e.sys.country}</span>`,m.innerHTML=`${e.main.temp}<span class='units'>&#176;${t}</span>`,p.src=`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,document.querySelector(".weather-text").innerHTML=`Feels like ${e.main.feels_like}<span>&#176;${t}</span>. ${e.weather[0].description}`,g(e,t)})(e,f.symbol),w.classList.remove("show_loader")})).catch((e=>{console.log(e)}))},$=(e,t)=>{a.hourlyWeatherData(e,t).then((function(e){b(e.list,f.symbol)})).catch((e=>{console.log(e)}))},b=(e,t)=>{document.querySelectorAll(".hourly-weather>div").forEach((n=>{let a=Number(n.className.slice(-1));const[r,c,i,o]=Array.from(n.childNodes),l=new Date(1e3*e[a].dt);r.textContent=l.toDateString().replace("2023",""),c.src=`http://openweathermap.org/img/wn/${e[a].weather[0].icon}.png`,i.innerHTML=`${e[a].main.temp}<span>&#176;${t}</span>`,o.textContent=e[a].weather[0].description}))};window.addEventListener("load",(()=>{C("london",f.unit),$("london",f.unit),document.querySelector(".units>.metric").classList.add("selected")})),h.addEventListener("click",(e=>{document.querySelectorAll(".units>button").forEach((e=>{e.classList.remove("selected")})),f.unit=e.target.className;let t=y.textContent.split(",");C(t[0],f.unit),$(t[0],f.unit),"metric"===e.target.className?f.symbol="C":f.symbol="F",e.target.classList.add("selected")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDN0JLLFNBQVNrRixpQkFBaUIsaUJBQWlCaEMsU0FBUWhDLElBQy9DQSxFQUFPNkIsVUFBVXdELE9BQU8sV0FBVyxJQUV2QzdCLEVBQWFsRCxLQUFPN0IsRUFBRTZILE9BQU96RyxVQUM3QixJQUFJQyxFQUFPTyxFQUFTSixZQUFZc0csTUFBTSxLQUN0QzVDLEVBQWtCN0QsRUFBSyxHQUFJMEQsRUFBYWxELE1BQ3hDc0QsRUFBd0I5RCxFQUFLLEdBQUkwRCxFQUFhbEQsTUFDcEIsV0FBdkI3QixFQUFFNkgsT0FBT3pHLFVBQ1IyRCxFQUFhQyxPQUFTLElBRXRCRCxFQUFhQyxPQUFTLElBRTFCaEYsRUFBRTZILE9BQU96RSxVQUFVQyxJQUFJLFdBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy9pbnB1dENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL3dlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvZWxlbWVudF9jcmVhdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvd2VhdGhlckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbWFnZXMvZ2lybF9qdW1waW5nLmdpZiIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiY29uc3QgaW5wdXRDb250YWluZXIgPSAoKCk9PntcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuaWQgPSAnaW5wdXRDb250YWluZXInO1xuXG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRGaWVsZC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0RmllbGQuY2xhc3NOYW1lID0gJ2NpdHktaW5wdXQnO1xuICAgIGlucHV0RmllbGQubmFtZSA9ICdjaXR5LWlucHV0J1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnd2VhdGhlci1zZWFyY2gnO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdTZWFyY2gnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pKCk7XG5cbmV4cG9ydCB7aW5wdXRDb250YWluZXJ9OyIsImNvbnN0IGdldFdlYXRoZXJEYXRhID0gKCgpPT57XG4gICAgYXN5bmMgZnVuY3Rpb24gd2VhdGhlckRhdGEoY2l0eU5hbWUsIHVuaXQpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JnVuaXRzPSR7dW5pdH0mQVBQSUQ9MjI4YTNmOWZlMjc2YWNkZjhjMDMwZjcwN2NkZGM5NmZgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgIT09IDQwNCl7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb25EYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBhbGVydCgnY2l0eSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt3ZWF0aGVyRGF0YX07XG59KSgpO1xuXG5jb25zdCBnZXRIb3VybHlXZWF0aGVyRGF0YSA9ICgoKT0+e1xuICAgIGFzeW5jIGZ1bmN0aW9uIGhvdXJseVdlYXRoZXJEYXRhKGNpdHlOYW1lLCB1bml0KXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5TmFtZX0mdW5pdHM9JHt1bml0fSZhcHBpZD0yMjhhM2Y5ZmUyNzZhY2RmOGMwMzBmNzA3Y2RkYzk2ZmApO1xuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzICE9PSA0MDQpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBqc29uRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ2NpdHkgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7aG91cmx5V2VhdGhlckRhdGF9O1xufSkoKTtcblxuZXhwb3J0e2dldFdlYXRoZXJEYXRhLCBnZXRIb3VybHlXZWF0aGVyRGF0YX07IiwiY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWdOYW1lLCBjbGFzc05hbWU9bnVsbCwgaWROYW1lPW51bGwsIHRleHQ9bnVsbCwgc3JjPW51bGwsIGFsdD1udWxsKT0+e1xuICAgIGlmKHRhZ05hbWUgPT09ICdpbnB1dCcpe1xuICAgICAgICByZXR1cm4gZWxlbWVudENyZWF0b3IuZm9ybUVsZW1lbnRDcmVhdG9yKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWROYW1lLCB0ZXh0KTtcbiAgICB9ZWxzZSBpZih0YWdOYW1lICE9PSAnaW1nJyl7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q3JlYXRvci5jcmVhdG9yKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWROYW1lLCB0ZXh0KTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDcmVhdG9yLmltYWdlRWxlbWVudENyZWF0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQsIHNyYywgYWx0KTtcbiAgICB9XG59XG5cbmNvbnN0IGRpdlBhY2tlciA9ICh2YWx1ZXMsIGNsYXNzTmFtZT1udWxsLCBpZE5hbWU9bnVsbCk9PntcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYoY2xhc3NOYW1lICE9PSBudWxsKXtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIGlmKGlkTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkTmFtZX1gKTtcbiAgICB9XG4gICAgdmFsdWVzLmZvckVhY2godmFsdWU9PntcbiAgICAgICAgY29uc3QgW3RhZ05hbWUsIGNsYXNzTmFtZSwgaWROYW1lLCB0ZXh0LCBzcmMsIGFsdF0gPSB2YWx1ZTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHRhZ05hbWUsIGNsYXNzTmFtZSwgaWROYW1lLCB0ZXh0LCBzcmMsIGFsdCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBlbGVtZW50Q3JlYXRvciA9ICgoKT0+e1xuICAgIGNvbnN0IGNyZWF0b3IgPSAodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQpPT57XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICBpZihjbGFzc05hbWUgIT09IG51bGwpe1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaWROYW1lICE9PSBudWxsKXtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkTmFtZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0YWdOYW1lICE9PSAnaW5wdXQnKXtcbiAgICAgICAgICAgIGlmKHRhZ05hbWUgPT09ICdzcGFuJyl7XG4gICAgICAgICAgICAgICAgaWYodGV4dCAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZih0ZXh0ICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBlbGVtZW50LnR5cGUgPSB0ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGltYWdlRWxlbWVudENyZWF0b3IgPSAodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQsIHNyYywgYWx0KT0+e1xuICAgICAgICAvLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgLy8gaWYoYWx0ICE9PSBudWxsKXtcbiAgICAgICAgLy8gICAgIGVsZW1lbnQuYWx0ID0gYWx0O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmKHNyYyAhPT0gbnVsbCl7XG4gICAgICAgIC8vICAgICBlbGVtZW50LnNyYyA9IHNyYztcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQpO1xuICAgICAgICBpZihhbHQgIT09IG51bGwpe1xuICAgICAgICAgICAgZWxlbWVudC5hbHQgPSBhbHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc3JjICE9PSBudWxsKXtcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gc3JjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1FbGVtZW50Q3JlYXRvciA9ICh0YWdOYW1lLCBjbGFzc05hbWUsIGlkTmFtZSwgdHlwZSk9PntcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHR5cGUpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0b3IsIGltYWdlRWxlbWVudENyZWF0b3IsIGZvcm1FbGVtZW50Q3JlYXRvcn07XG59KSgpO1xuXG5leHBvcnQge2NyZWF0ZUVsZW1lbnQsIGRpdlBhY2tlcn07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZGl2UGFja2VyIH0gZnJvbSBcIi4vZWxlbWVudF9jcmVhdG9yXCI7XG5pbXBvcnQgeyBnZXRIb3VybHlXZWF0aGVyRGF0YSB9IGZyb20gXCIuL3dlYXRoZXJEYXRhXCI7XG4vLyBpbXBvcnQgbG9hZGVySW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL3dlYXRoZXJfbG9hZGVyLmdpZic7XG5cbmNvbnN0IHdlYXRoZXJDb250YWluZXIgPSAoKCk9PntcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuaWQgPSAnd2VhdGhlckNvbnRhaW5lcic7XG5cblxuICAgIC8vIGNvbnN0IGNvdW50cnlEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gY291bnRyeURldGFpbHMuY2xhc3NOYW1lID0gJ2NvdW50cnktZGV0YWlscyc7XG5cbiAgICAvLyBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAvLyBjaXR5TmFtZS5jbGFzc05hbWUgPSAnY2l0eU5hbWUnO1xuICAgIC8vIGNvdW50cnlEZXRhaWxzLmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcbiAgICBjb25zdCB3ZWF0aGVySGVhZGVyID0gZGl2UGFja2VyKFtbJ3AnLCAnY2l0eU5hbWUnXV0sICd3ZWF0aGVyLWhlYWRlcicpO1xuICAgIGNvbnN0IHVuaXRUb2dnbGVyID0gZGl2UGFja2VyKFtbJ2J1dHRvbicsICdtZXRyaWMnLCBudWxsLCAnQyddLCBbJ2J1dHRvbicsICdpbXBlcmlhbCcsIG51bGwsICdGJ11dLCAndW5pdHMnKTtcbiAgICB3ZWF0aGVySGVhZGVyLmFwcGVuZCh1bml0VG9nZ2xlcik7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlYXRoZXJEZXRhaWxzLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWRldGFpbHMnO1xuXG4gICAgY29uc3Qgd2VhdGhlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VhdGhlckltYWdlLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWltZyc7XG4gICAgd2VhdGhlckltYWdlLnNyYyA9ICcjJztcbiAgICB3ZWF0aGVyRGV0YWlscy5hcHBlbmRDaGlsZCh3ZWF0aGVySW1hZ2UpO1xuXG4gICAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWFpbldlYXRoZXIuY2xhc3NOYW1lID0gJ21haW4td2VhdGhlcic7XG4gICAgd2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQobWFpbldlYXRoZXIpO1xuXG4gICAgY29uc3Qgb3RoZXJXZWF0aGVyRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG90aGVyV2VhdGhlckRldGFpbHMuY2xhc3NOYW1lID0gJ290aGVyLWRldGFpbHMnO1xuXG4gICAgY29uc3Qgd2VhdGhlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2VhdGhlclRleHQuY2xhc3NOYW1lID0gJ3dlYXRoZXItdGV4dCc7XG4gICAgb3RoZXJXZWF0aGVyRGV0YWlscy5hcHBlbmRDaGlsZCh3ZWF0aGVyVGV4dCk7XG5cbiAgICBjb25zdCBvdGhlcldlYXRoZXJJbmZvID0gZGl2UGFja2VyKFtbJ3AnLCAnbWF4LXRlbXAnLCBudWxsXSwgWydwJywgJ21pbi10ZW1wJywgbnVsbF0sXG5bJ3AnLCAndmlzaWJpbGl0eScsIG51bGxdLCBbJ3AnLCAnaHVtaWRpdHknLCBudWxsXV0sICdvdGhlci13ZWF0aGVyLWluZm8nKTtcblxuICAgIGNvbnN0IGhvdXJseVdlYXRoZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaG91cmx5LXdlYXRoZXInKTtcbiAgICBmb3IobGV0IGk9MDsgaTw0MDsgaSsrKXtcbiAgICAgICAgY29uc3QgaG91cmx5V2VhdGhlciA9IGRpdlBhY2tlcihbWydwJywgJ2RheSddLCBbJ2ltZycsICd3ZWF0aGVyLWltZyddLCBbJ3AnLCAnbWluLW1heCddLCBbJ3AnLCAnZGVzYyddXSwgJ2hvdXJseS13ZWF0aGVyLScraSk7XG4gICAgICAgIGhvdXJseVdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5V2VhdGhlcik7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZGVyX2ltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJywgJ2xvYWRlci1pbWFnZScpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJIZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyRGV0YWlscyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG90aGVyV2VhdGhlckRldGFpbHMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdGhlcldlYXRoZXJJbmZvKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5V2VhdGhlckNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRlcl9pbWFnZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSkoKTtcblxuZXhwb3J0IHt3ZWF0aGVyQ29udGFpbmVyfTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmIwMzZhYWYwMzg4ZjJkOTBkZjlkYjE4NTU4NDg5NDMuZ2lmXCI7IiwiaW1wb3J0IHsgaW5wdXRDb250YWluZXIgfSBmcm9tIFwiLi9pbnB1dENvbnRhaW5lclwiO1xuaW1wb3J0IHsgZ2V0SG91cmx5V2VhdGhlckRhdGEsIGdldFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vd2VhdGhlckRhdGFcIjtcbmltcG9ydCB7IHdlYXRoZXJDb250YWluZXIgfSBmcm9tIFwiLi93ZWF0aGVyQ29udGFpbmVyXCI7XG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWRlckltYWdlIGZyb20gJy4uL2ltYWdlcy9naXJsX2p1bXBpbmcuZ2lmJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xuY29udGVudC5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGFpbmVyKTtcblxuY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1pbnB1dCcpO1xuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItc2VhcmNoJyk7XG5jb25zdCBtYWluV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdlYXRoZXInKTtcbmNvbnN0IG1haW5XZWF0aGVySW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbWcnKTtcbmNvbnN0IHVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaGVhZGVyPi51bml0cycpO1xuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eU5hbWUnKTtcbmNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyQ29udGFpbmVyPi5sb2FkZXItaW1hZ2UnKTtcbmxvYWRlci5zcmMgPSBsb2FkZXJJbWFnZTtcblxubGV0IHNlbGVjdGVkVW5pdCA9IHt1bml0OiAnbWV0cmljJywgc3ltYm9sOiAnQyd9O1xuXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGlmKHNlYXJjaEZpZWxkLnZhbHVlICE9PSAnJyl7XG4gICAgICAgIGdldFdlYXRoZXJEZXRhaWxzKHNlYXJjaEZpZWxkLnZhbHVlLCBzZWxlY3RlZFVuaXQudW5pdCk7XG4gICAgICAgIGdldEhvdXJseVdlYXRoZXJEZXRhaWxzKHNlYXJjaEZpZWxkLnZhbHVlLCBzZWxlY3RlZFVuaXQudW5pdCk7XG4gICAgfWVsc2V7XG4gICAgICAgIGFsZXJ0KCdjaXR5IG5hbWUgbXVzdCBub3QgYmUgZW1wdHknKTtcbiAgICB9XG59KVxuXG5jb25zdCBkaXNwbGF5V2VhdGhlckRldGFpbHMgPSAoZGF0YSwgdW5pdCk9PntcbiAgICBjaXR5TmFtZS5pbm5lckhUTUwgPSBgJHtkYXRhLm5hbWV9PHNwYW4+LCAke2RhdGEuc3lzLmNvdW50cnl9PC9zcGFuPmA7XG4gICAgbWFpbldlYXRoZXIuaW5uZXJIVE1MID0gYCR7ZGF0YS5tYWluLnRlbXB9PHNwYW4gY2xhc3M9J3VuaXRzJz4mIzE3Njske3VuaXR9PC9zcGFuPmA7XG4gICAgbWFpbldlYXRoZXJJbWFnZS5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci10ZXh0JykuaW5uZXJIVE1MID0gYEZlZWxzIGxpa2UgJHtkYXRhLm1haW4uZmVlbHNfbGlrZX08c3Bhbj4mIzE3Njske3VuaXR9PC9zcGFuPi4gJHtkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259YDtcbiAgICB1cGRhdGVPdGhlckluZm8oZGF0YSwgdW5pdCk7XG59XG5cbmNvbnN0IHVwZGF0ZU90aGVySW5mbyA9IChkYXRhLCB1bml0KT0+e1xuICAgIGNvbnN0IG90aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vdGhlci13ZWF0aGVyLWluZm8+cCcpO1xuICAgIGNvbnN0IFttYXhUZW1wLCBtaW5UZW1wLCB2aXNpYmlsaXR5LCBodW1pZGl0eV0gPSBBcnJheS5mcm9tKG90aGVySW5mbyk7XG4gICAgbWF4VGVtcC5pbm5lckhUTUwgPSBgTWF4OiAke2RhdGEubWFpbi50ZW1wX21heH08c3BhbiBjbGFzcz0ndW5pdHMnPiYjMTc2OyR7dW5pdH08L3NwYW4+YDtcbiAgICBtaW5UZW1wLmlubmVySFRNTCA9IGBNaW46ICR7ZGF0YS5tYWluLnRlbXBfbWlufTxzcGFuIGNsYXNzPSd1bml0cyc+JiMxNzY7JHt1bml0fTwvc3Bhbj5gO1xuICAgIHZpc2liaWxpdHkudGV4dENvbnRlbnQgPSBgVmlzaWJpbGl0eTogJHtNYXRoLmZsb29yKGRhdGEudmlzaWJpbGl0eS8xMDAwKX1rbWA7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5tYWluLmh1bWlkaXR5fSVgO1xufVxuXG5jb25zdCBnZXRXZWF0aGVyRGV0YWlscyA9ICh2YWx1ZSwgdW5pdCk9PntcbiAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnc2hvd19sb2FkZXInKTtcbiAgICBnZXRXZWF0aGVyRGF0YS53ZWF0aGVyRGF0YSh2YWx1ZSwgdW5pdClcbiAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGRpc3BsYXlXZWF0aGVyRGV0YWlscyhkYXRhLCBzZWxlY3RlZFVuaXQuc3ltYm9sKTtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dfbG9hZGVyJyk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyPT57XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcbn1cblxuY29uc3QgZ2V0SG91cmx5V2VhdGhlckRldGFpbHMgPSAodmFsdWUsIHVuaXQpPT57XG4gICAgZ2V0SG91cmx5V2VhdGhlckRhdGEuaG91cmx5V2VhdGhlckRhdGEodmFsdWUsIHVuaXQpXG4gICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEubGlzdCk7XG4gICAgICAgIGRpc3BsYXlIb3VybHlXZWF0aGVyRGV0YWlscyhkYXRhLmxpc3QsIHNlbGVjdGVkVW5pdC5zeW1ib2wpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycj0+e1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pXG59XG5cbmNvbnN0IGRpc3BsYXlIb3VybHlXZWF0aGVyRGV0YWlscyA9IChkYXRhLCB1bml0KT0+e1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VybHktd2VhdGhlcj5kaXYnKS5mb3JFYWNoKGRpdj0+e1xuICAgICAgICBsZXQgY3VycmVudEFycmF5ID0gTnVtYmVyKGRpdi5jbGFzc05hbWUuc2xpY2UoLTEpKTtcbiAgICAgICAgY29uc3QgW2RheSwgaW1hZ2UsIHdlYXRoZXIsIHdlYXRoZXJEZXNjXSA9IEFycmF5LmZyb20oZGl2LmNoaWxkTm9kZXMpO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0YVtjdXJyZW50QXJyYXldLmR0ICogMTAwMCk7XG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9IGRhdGUudG9EYXRlU3RyaW5nKCkucmVwbGFjZSgnMjAyMycsICcnKTtcblxuICAgICAgICBpbWFnZS5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhW2N1cnJlbnRBcnJheV0ud2VhdGhlclswXS5pY29ufS5wbmdgO1xuXG4gICAgICAgIHdlYXRoZXIuaW5uZXJIVE1MID0gYCR7ZGF0YVtjdXJyZW50QXJyYXldLm1haW4udGVtcH08c3Bhbj4mIzE3Njske3VuaXR9PC9zcGFuPmA7XG5cbiAgICAgICAgd2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBkYXRhW2N1cnJlbnRBcnJheV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICB9KVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG4gICAgZ2V0V2VhdGhlckRldGFpbHMoJ2xvbmRvbicsIHNlbGVjdGVkVW5pdC51bml0KTtcbiAgICBnZXRIb3VybHlXZWF0aGVyRGV0YWlscygnbG9uZG9uJywgc2VsZWN0ZWRVbml0LnVuaXQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bml0cz4ubWV0cmljJykuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn0pXG5cbnVuaXRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuaXRzPmJ1dHRvbicpLmZvckVhY2goYnV0dG9uPT57XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xuICAgIHNlbGVjdGVkVW5pdC51bml0ID0gZS50YXJnZXQuY2xhc3NOYW1lO1xuICAgIGxldCBuYW1lID0gY2l0eU5hbWUudGV4dENvbnRlbnQuc3BsaXQoJywnKTtcbiAgICBnZXRXZWF0aGVyRGV0YWlscyhuYW1lWzBdLCBzZWxlY3RlZFVuaXQudW5pdCk7XG4gICAgZ2V0SG91cmx5V2VhdGhlckRldGFpbHMobmFtZVswXSwgc2VsZWN0ZWRVbml0LnVuaXQpO1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ21ldHJpYycpe1xuICAgICAgICBzZWxlY3RlZFVuaXQuc3ltYm9sID0gJ0MnO1xuICAgIH1lbHNle1xuICAgICAgICBzZWxlY3RlZFVuaXQuc3ltYm9sID0gJ0YnO1xuICAgIH1cbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufSlcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsImlucHV0Q29udGFpbmVyIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiaW5wdXRGaWVsZCIsInR5cGUiLCJjbGFzc05hbWUiLCJuYW1lIiwiYXBwZW5kQ2hpbGQiLCJidXR0b24iLCJ0ZXh0Q29udGVudCIsImdldFdlYXRoZXJEYXRhIiwid2VhdGhlckRhdGEiLCJhc3luYyIsImNpdHlOYW1lIiwidW5pdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwic3RhdHVzIiwianNvbiIsImFsZXJ0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0SG91cmx5V2VhdGhlckRhdGEiLCJob3VybHlXZWF0aGVyRGF0YSIsInRhZ05hbWUiLCJpZE5hbWUiLCJ0ZXh0IiwiYWx0IiwiZWxlbWVudENyZWF0b3IiLCJmb3JtRWxlbWVudENyZWF0b3IiLCJjcmVhdG9yIiwiaW1hZ2VFbGVtZW50Q3JlYXRvciIsImRpdlBhY2tlciIsInZhbHVlcyIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJmb3JFYWNoIiwidmFsdWUiLCJpbm5lckhUTUwiLCJ3ZWF0aGVyQ29udGFpbmVyIiwid2VhdGhlckhlYWRlciIsInVuaXRUb2dnbGVyIiwiYXBwZW5kIiwid2VhdGhlckRldGFpbHMiLCJ3ZWF0aGVySW1hZ2UiLCJtYWluV2VhdGhlciIsIm90aGVyV2VhdGhlckRldGFpbHMiLCJ3ZWF0aGVyVGV4dCIsIm90aGVyV2VhdGhlckluZm8iLCJob3VybHlXZWF0aGVyQ29udGFpbmVyIiwiaSIsImhvdXJseVdlYXRoZXIiLCJsb2FkZXJfaW1hZ2UiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsInNlYXJjaEZpZWxkIiwic2VhcmNoQnV0dG9uIiwibWFpbldlYXRoZXJJbWFnZSIsInVuaXRzIiwibG9hZGVyIiwic2VsZWN0ZWRVbml0Iiwic3ltYm9sIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldFdlYXRoZXJEZXRhaWxzIiwiZ2V0SG91cmx5V2VhdGhlckRldGFpbHMiLCJ1cGRhdGVPdGhlckluZm8iLCJkYXRhIiwib3RoZXJJbmZvIiwicXVlcnlTZWxlY3RvckFsbCIsIm1heFRlbXAiLCJtaW5UZW1wIiwidmlzaWJpbGl0eSIsImh1bWlkaXR5IiwiQXJyYXkiLCJmcm9tIiwibWFpbiIsInRlbXBfbWF4IiwidGVtcF9taW4iLCJNYXRoIiwiZmxvb3IiLCJ0aGVuIiwic3lzIiwiY291bnRyeSIsInRlbXAiLCJ3ZWF0aGVyIiwiaWNvbiIsImZlZWxzX2xpa2UiLCJkZXNjcmlwdGlvbiIsImRpc3BsYXlXZWF0aGVyRGV0YWlscyIsInJlbW92ZSIsImNhdGNoIiwiZXJyIiwiZGlzcGxheUhvdXJseVdlYXRoZXJEZXRhaWxzIiwibGlzdCIsImRpdiIsImN1cnJlbnRBcnJheSIsIk51bWJlciIsInNsaWNlIiwiZGF5IiwiaW1hZ2UiLCJ3ZWF0aGVyRGVzYyIsImNoaWxkTm9kZXMiLCJkYXRlIiwiRGF0ZSIsImR0IiwidG9EYXRlU3RyaW5nIiwidGFyZ2V0Iiwic3BsaXQiXSwic291cmNlUm9vdCI6IiJ9