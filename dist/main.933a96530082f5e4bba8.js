(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=(()=>{const e=document.createElement("div");e.id="inputContainer";const t=document.createElement("input");t.type="text",t.className="city-input",t.name="city-input",e.appendChild(t);const n=document.createElement("button");return n.className="weather-search",n.textContent="Search",e.appendChild(n),e})(),n="228a3f9fe276acdf8c030f707cddc96f",a={weatherData:async function(e,t){try{const a=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=${t}&APPID=${n}`,{mode:"cors"});if(404!==a.status)return await a.json();alert("city not found")}catch(e){console.log(e)}}},r={hourlyWeatherData:async function(e,t){try{const a=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${e}&units=${t}&appid=${n}`);if(404!==a.status)return await a.json();alert("city not found")}catch(e){console.log(e)}}},i=(e,t=null,n=null,a=null,r=null,i=null)=>"input"===e?o.formElementCreator(e,t,n,a):"img"!==e?o.creator(e,t,n,a):o.imageElementCreator(e,t,n,a,r,i),c=(e,t=null,n=null)=>{const a=document.createElement("div");return null!==t&&a.classList.add(t),null!==n&&a.setAttribute("id",`${n}`),e.forEach((e=>{const[t,n,r,c,o,l]=e;a.appendChild(i(t,n,r,c,o,l))})),a},o=(()=>{const e=(e,t,n,a)=>{const r=document.createElement(e);return null!==t&&r.classList.add(t),null!==n&&r.setAttribute("id",`${n}`),"input"!==e?"span"===e?null!==a&&(r.innerHTML=a):null!==a&&(r.textContent=a):r.type=a,r};return{creator:e,imageElementCreator:(t,n,a,r,i,c)=>{const o=e(t,n,a,r);return null!==c&&(o.alt=c),null!==i&&(o.src=i),o},formElementCreator:(t,n,a,r)=>e(t,n,a,r)}})(),l=(()=>{const e=document.createElement("div");e.id="weatherContainer";const t=c([["p","cityName"]],"weather-header"),n=c([["button","metric",null,"C"],["button","imperial",null,"F"]],"units");t.append(n);const a=document.createElement("div");a.className="weather-details";const r=document.createElement("img");r.className="weather-img",r.src="#",a.appendChild(r);const o=document.createElement("p");o.className="main-weather",a.appendChild(o);const l=document.createElement("div");l.className="other-details";const s=document.createElement("p");s.className="weather-text",l.appendChild(s);const u=c([["p","max-temp",null],["p","min-temp",null],["p","visibility",null],["p","humidity",null]],"other-weather-info"),d=i("div","hourly-weather");for(let e=0;e<40;e++){const t=c([["p","day"],["img","weather-img"],["p","min-max"],["p","desc"]],"hourly-weather-"+e);d.appendChild(t)}const m=i("img","loader-image");return e.appendChild(t),e.appendChild(a),e.appendChild(l),e.appendChild(u),e.appendChild(d),e.appendChild(m),e})(),s=e.p+"bb036aaf0388f2d90df9db1855848943.gif",u=document.querySelector("#content");u.appendChild(t),u.appendChild(l);const d=document.querySelector(".city-input"),m=document.querySelector(".weather-search"),p=document.querySelector(".main-weather"),h=document.querySelector(".weather-img"),y=document.querySelector(".weather-header>.units"),w=document.querySelector(".cityName"),f=document.querySelector("#weatherContainer>.loader-image");f.src=s;let g={unit:"metric",symbol:"C"};m.addEventListener("click",(()=>{""!==d.value?($(d.value,g.unit),b(d.value,g.unit)):alert("city name must not be empty")}));const C=(e,t)=>{const n=document.querySelectorAll(".other-weather-info>p"),[a,r,i,c]=Array.from(n);a.innerHTML=`Max: ${e.main.temp_max}<span class='units'>&#176;${t}</span>`,r.innerHTML=`Min: ${e.main.temp_min}<span class='units'>&#176;${t}</span>`,i.textContent=`Visibility: ${Math.floor(e.visibility/1e3)}km`,c.textContent=`Humidity: ${e.main.humidity}%`},$=(e,t)=>{f.classList.add("show_loader"),a.weatherData(e,t).then((function(e){((e,t)=>{w.innerHTML=`${e.name}<span>, ${e.sys.country}</span>`,p.innerHTML=`${e.main.temp}<span class='units'>&#176;${t}</span>`,h.src=`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,document.querySelector(".weather-text").innerHTML=`Feels like ${e.main.feels_like}<span>&#176;${t}</span>. ${e.weather[0].description}`,C(e,t)})(e,g.symbol),f.classList.remove("show_loader")})).catch((e=>{console.log(e)}))},b=(e,t)=>{r.hourlyWeatherData(e,t).then((function(e){E(e.list,g.symbol)})).catch((e=>{console.log(e)}))},E=(e,t)=>{document.querySelectorAll(".hourly-weather>div").forEach((n=>{let a=Number(n.className.slice(-1));const[r,i,c,o]=Array.from(n.childNodes),l=new Date(1e3*e[a].dt);r.textContent=l.toDateString().replace("2023",""),i.src=`http://openweathermap.org/img/wn/${e[a].weather[0].icon}.png`,c.innerHTML=`${e[a].main.temp}<span>&#176;${t}</span>`,o.textContent=e[a].weather[0].description}))};window.addEventListener("load",(()=>{$("london",g.unit),b("london",g.unit),document.querySelector(".units>.metric").classList.add("selected")})),y.addEventListener("click",(e=>{document.querySelectorAll(".units>button").forEach((e=>{e.classList.remove("selected")})),g.unit=e.target.className;let t=w.textContent.split(",");$(t[0],g.unit),b(t[0],g.unit),"metric"===e.target.className?g.symbol="C":g.symbol="F",e.target.classList.add("selected")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUd0RXdCLEVBQU1JLGlCQUFpQixTQUFVbEYsSUFDN0JLLFNBQVNtRixpQkFBaUIsaUJBQWlCaEMsU0FBUWpDLElBQy9DQSxFQUFPOEIsVUFBVXdELE9BQU8sV0FBVyxJQUV2QzdCLEVBQWFsRCxLQUFPOUIsRUFBRThILE9BQU8xRyxVQUM3QixJQUFJQyxFQUFPUSxFQUFTTCxZQUFZdUcsTUFBTSxLQUN0QzVDLEVBQWtCOUQsRUFBSyxHQUFJMkQsRUFBYWxELE1BQ3hDc0QsRUFBd0IvRCxFQUFLLEdBQUkyRCxFQUFhbEQsTUFDcEIsV0FBdkI5QixFQUFFOEgsT0FBTzFHLFVBQ1I0RCxFQUFhQyxPQUFTLElBRXRCRCxFQUFhQyxPQUFTLElBRTFCakYsRUFBRThILE9BQU96RSxVQUFVQyxJQUFJLFdBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc2NyaXB0cy9pbnB1dENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL3dlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvZWxlbWVudF9jcmVhdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3NjcmlwdHMvd2VhdGhlckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbWFnZXMvZ2lybF9qdW1waW5nLmdpZiIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiY29uc3QgaW5wdXRDb250YWluZXIgPSAoKCk9PntcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuaWQgPSAnaW5wdXRDb250YWluZXInO1xuXG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRGaWVsZC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0RmllbGQuY2xhc3NOYW1lID0gJ2NpdHktaW5wdXQnO1xuICAgIGlucHV0RmllbGQubmFtZSA9ICdjaXR5LWlucHV0J1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnd2VhdGhlci1zZWFyY2gnO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdTZWFyY2gnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0pKCk7XG5cbmV4cG9ydCB7aW5wdXRDb250YWluZXJ9OyIsImNvbnN0IGFwaWtleSA9IHByb2Nlc3MuZW52LkFQSV9LRVk7XG5cbmNvbnN0IGdldFdlYXRoZXJEYXRhID0gKCgpID0+IHtcbiAgYXN5bmMgZnVuY3Rpb24gd2VhdGhlckRhdGEoY2l0eU5hbWUsIHVuaXQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mdW5pdHM9JHt1bml0fSZBUFBJRD0ke2FwaWtleX1gLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSA0MDQpIHtcbiAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBqc29uRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiY2l0eSBub3QgZm91bmRcIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgd2VhdGhlckRhdGEgfTtcbn0pKCk7XG5cbmNvbnN0IGdldEhvdXJseVdlYXRoZXJEYXRhID0gKCgpID0+IHtcbiAgYXN5bmMgZnVuY3Rpb24gaG91cmx5V2VhdGhlckRhdGEoY2l0eU5hbWUsIHVuaXQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eU5hbWV9JnVuaXRzPSR7dW5pdH0mYXBwaWQ9JHthcGlrZXl9YFxuICAgICAgKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDQwNCkge1xuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGpzb25EYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJjaXR5IG5vdCBmb3VuZFwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBob3VybHlXZWF0aGVyRGF0YSB9O1xufSkoKTtcblxuZXhwb3J0IHsgZ2V0V2VhdGhlckRhdGEsIGdldEhvdXJseVdlYXRoZXJEYXRhIH07XG4iLCJjb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZ05hbWUsIGNsYXNzTmFtZT1udWxsLCBpZE5hbWU9bnVsbCwgdGV4dD1udWxsLCBzcmM9bnVsbCwgYWx0PW51bGwpPT57XG4gICAgaWYodGFnTmFtZSA9PT0gJ2lucHV0Jyl7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q3JlYXRvci5mb3JtRWxlbWVudENyZWF0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQpO1xuICAgIH1lbHNlIGlmKHRhZ05hbWUgIT09ICdpbWcnKXtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDcmVhdG9yLmNyZWF0b3IodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICByZXR1cm4gZWxlbWVudENyZWF0b3IuaW1hZ2VFbGVtZW50Q3JlYXRvcih0YWdOYW1lLCBjbGFzc05hbWUsIGlkTmFtZSwgdGV4dCwgc3JjLCBhbHQpO1xuICAgIH1cbn1cblxuY29uc3QgZGl2UGFja2VyID0gKHZhbHVlcywgY2xhc3NOYW1lPW51bGwsIGlkTmFtZT1udWxsKT0+e1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZihjbGFzc05hbWUgIT09IG51bGwpe1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgaWYoaWROYW1lICE9PSBudWxsKXtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWROYW1lfWApO1xuICAgIH1cbiAgICB2YWx1ZXMuZm9yRWFjaCh2YWx1ZT0+e1xuICAgICAgICBjb25zdCBbdGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQsIHNyYywgYWx0XSA9IHZhbHVlO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgY2xhc3NOYW1lLCBpZE5hbWUsIHRleHQsIHNyYywgYWx0KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IGVsZW1lbnRDcmVhdG9yID0gKCgpPT57XG4gICAgY29uc3QgY3JlYXRvciA9ICh0YWdOYW1lLCBjbGFzc05hbWUsIGlkTmFtZSwgdGV4dCk9PntcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICAgIGlmKGNsYXNzTmFtZSAhPT0gbnVsbCl7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZihpZE5hbWUgIT09IG51bGwpe1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWROYW1lfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRhZ05hbWUgIT09ICdpbnB1dCcpe1xuICAgICAgICAgICAgaWYodGFnTmFtZSA9PT0gJ3NwYW4nKXtcbiAgICAgICAgICAgICAgICBpZih0ZXh0ICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKHRleHQgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGVsZW1lbnQudHlwZSA9IHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2VFbGVtZW50Q3JlYXRvciA9ICh0YWdOYW1lLCBjbGFzc05hbWUsIGlkTmFtZSwgdGV4dCwgc3JjLCBhbHQpPT57XG4gICAgICAgIC8vIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICAvLyBpZihhbHQgIT09IG51bGwpe1xuICAgICAgICAvLyAgICAgZWxlbWVudC5hbHQgPSBhbHQ7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYoc3JjICE9PSBudWxsKXtcbiAgICAgICAgLy8gICAgIGVsZW1lbnQuc3JjID0gc3JjO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHJldHVybiBlbGVtZW50O1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRvcih0YWdOYW1lLCBjbGFzc05hbWUsIGlkTmFtZSwgdGV4dCk7XG4gICAgICAgIGlmKGFsdCAhPT0gbnVsbCl7XG4gICAgICAgICAgICBlbGVtZW50LmFsdCA9IGFsdDtcbiAgICAgICAgfVxuICAgICAgICBpZihzcmMgIT09IG51bGwpe1xuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBzcmM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybUVsZW1lbnRDcmVhdG9yID0gKHRhZ05hbWUsIGNsYXNzTmFtZSwgaWROYW1lLCB0eXBlKT0+e1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRvcih0YWdOYW1lLCBjbGFzc05hbWUsIGlkTmFtZSwgdHlwZSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7Y3JlYXRvciwgaW1hZ2VFbGVtZW50Q3JlYXRvciwgZm9ybUVsZW1lbnRDcmVhdG9yfTtcbn0pKCk7XG5cbmV4cG9ydCB7Y3JlYXRlRWxlbWVudCwgZGl2UGFja2VyfTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBkaXZQYWNrZXIgfSBmcm9tIFwiLi9lbGVtZW50X2NyZWF0b3JcIjtcbmltcG9ydCB7IGdldEhvdXJseVdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vd2VhdGhlckRhdGFcIjtcbi8vIGltcG9ydCBsb2FkZXJJbWFnZSBmcm9tICcuLi9pbWFnZXMvd2VhdGhlcl9sb2FkZXIuZ2lmJztcblxuY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5pZCA9IFwid2VhdGhlckNvbnRhaW5lclwiO1xuXG4gIGNvbnN0IHdlYXRoZXJIZWFkZXIgPSBkaXZQYWNrZXIoW1tcInBcIiwgXCJjaXR5TmFtZVwiXV0sIFwid2VhdGhlci1oZWFkZXJcIik7XG4gIGNvbnN0IHVuaXRUb2dnbGVyID0gZGl2UGFja2VyKFxuICAgIFtcbiAgICAgIFtcImJ1dHRvblwiLCBcIm1ldHJpY1wiLCBudWxsLCBcIkNcIl0sXG4gICAgICBbXCJidXR0b25cIiwgXCJpbXBlcmlhbFwiLCBudWxsLCBcIkZcIl0sXG4gICAgXSxcbiAgICBcInVuaXRzXCJcbiAgKTtcbiAgd2VhdGhlckhlYWRlci5hcHBlbmQodW5pdFRvZ2dsZXIpO1xuXG4gIGNvbnN0IHdlYXRoZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2VhdGhlckRldGFpbHMuY2xhc3NOYW1lID0gXCJ3ZWF0aGVyLWRldGFpbHNcIjtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB3ZWF0aGVySW1hZ2UuY2xhc3NOYW1lID0gXCJ3ZWF0aGVyLWltZ1wiO1xuICB3ZWF0aGVySW1hZ2Uuc3JjID0gXCIjXCI7XG4gIHdlYXRoZXJEZXRhaWxzLmFwcGVuZENoaWxkKHdlYXRoZXJJbWFnZSk7XG5cbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWFpbldlYXRoZXIuY2xhc3NOYW1lID0gXCJtYWluLXdlYXRoZXJcIjtcbiAgd2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQobWFpbldlYXRoZXIpO1xuXG4gIGNvbnN0IG90aGVyV2VhdGhlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdGhlcldlYXRoZXJEZXRhaWxzLmNsYXNzTmFtZSA9IFwib3RoZXItZGV0YWlsc1wiO1xuXG4gIGNvbnN0IHdlYXRoZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHdlYXRoZXJUZXh0LmNsYXNzTmFtZSA9IFwid2VhdGhlci10ZXh0XCI7XG4gIG90aGVyV2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQod2VhdGhlclRleHQpO1xuXG4gIGNvbnN0IG90aGVyV2VhdGhlckluZm8gPSBkaXZQYWNrZXIoXG4gICAgW1xuICAgICAgW1wicFwiLCBcIm1heC10ZW1wXCIsIG51bGxdLFxuICAgICAgW1wicFwiLCBcIm1pbi10ZW1wXCIsIG51bGxdLFxuICAgICAgW1wicFwiLCBcInZpc2liaWxpdHlcIiwgbnVsbF0sXG4gICAgICBbXCJwXCIsIFwiaHVtaWRpdHlcIiwgbnVsbF0sXG4gICAgXSxcbiAgICBcIm90aGVyLXdlYXRoZXItaW5mb1wiXG4gICk7XG5cbiAgY29uc3QgaG91cmx5V2VhdGhlckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJob3VybHktd2VhdGhlclwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gICAgY29uc3QgaG91cmx5V2VhdGhlciA9IGRpdlBhY2tlcihcbiAgICAgIFtcbiAgICAgICAgW1wicFwiLCBcImRheVwiXSxcbiAgICAgICAgW1wiaW1nXCIsIFwid2VhdGhlci1pbWdcIl0sXG4gICAgICAgIFtcInBcIiwgXCJtaW4tbWF4XCJdLFxuICAgICAgICBbXCJwXCIsIFwiZGVzY1wiXSxcbiAgICAgIF0sXG4gICAgICBcImhvdXJseS13ZWF0aGVyLVwiICsgaVxuICAgICk7XG4gICAgaG91cmx5V2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChob3VybHlXZWF0aGVyKTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRlcl9pbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJsb2FkZXItaW1hZ2VcIik7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJIZWFkZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHMpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3RoZXJXZWF0aGVyRGV0YWlscyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdGhlcldlYXRoZXJJbmZvKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJseVdlYXRoZXJDb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZGVyX2ltYWdlKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufSkoKTtcblxuZXhwb3J0IHsgd2VhdGhlckNvbnRhaW5lciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJiMDM2YWFmMDM4OGYyZDkwZGY5ZGIxODU1ODQ4OTQzLmdpZlwiOyIsImltcG9ydCB7IGlucHV0Q29udGFpbmVyIH0gZnJvbSBcIi4vaW5wdXRDb250YWluZXJcIjtcbmltcG9ydCB7IGdldEhvdXJseVdlYXRoZXJEYXRhLCBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL3dlYXRoZXJEYXRhXCI7XG5pbXBvcnQgeyB3ZWF0aGVyQ29udGFpbmVyIH0gZnJvbSBcIi4vd2VhdGhlckNvbnRhaW5lclwiO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkZXJJbWFnZSBmcm9tICcuLi9pbWFnZXMvZ2lybF9qdW1waW5nLmdpZic7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XG5cbmNvbnN0IHNlYXJjaEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktaW5wdXQnKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXNlYXJjaCcpO1xuY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13ZWF0aGVyJyk7XG5jb25zdCBtYWluV2VhdGhlckltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW1nJyk7XG5jb25zdCB1bml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWhlYWRlcj4udW5pdHMnKTtcbmNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHlOYW1lJyk7XG5jb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlckNvbnRhaW5lcj4ubG9hZGVyLWltYWdlJyk7XG5sb2FkZXIuc3JjID0gbG9hZGVySW1hZ2U7XG5cbmxldCBzZWxlY3RlZFVuaXQgPSB7dW5pdDogJ21ldHJpYycsIHN5bWJvbDogJ0MnfTtcblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBpZihzZWFyY2hGaWVsZC52YWx1ZSAhPT0gJycpe1xuICAgICAgICBnZXRXZWF0aGVyRGV0YWlscyhzZWFyY2hGaWVsZC52YWx1ZSwgc2VsZWN0ZWRVbml0LnVuaXQpO1xuICAgICAgICBnZXRIb3VybHlXZWF0aGVyRGV0YWlscyhzZWFyY2hGaWVsZC52YWx1ZSwgc2VsZWN0ZWRVbml0LnVuaXQpO1xuICAgIH1lbHNle1xuICAgICAgICBhbGVydCgnY2l0eSBuYW1lIG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gICAgfVxufSlcblxuY29uc3QgZGlzcGxheVdlYXRoZXJEZXRhaWxzID0gKGRhdGEsIHVuaXQpPT57XG4gICAgY2l0eU5hbWUuaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfTxzcGFuPiwgJHtkYXRhLnN5cy5jb3VudHJ5fTwvc3Bhbj5gO1xuICAgIG1haW5XZWF0aGVyLmlubmVySFRNTCA9IGAke2RhdGEubWFpbi50ZW1wfTxzcGFuIGNsYXNzPSd1bml0cyc+JiMxNzY7JHt1bml0fTwvc3Bhbj5gO1xuICAgIG1haW5XZWF0aGVySW1hZ2Uuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItdGV4dCcpLmlubmVySFRNTCA9IGBGZWVscyBsaWtlICR7ZGF0YS5tYWluLmZlZWxzX2xpa2V9PHNwYW4+JiMxNzY7JHt1bml0fTwvc3Bhbj4uICR7ZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7XG4gICAgdXBkYXRlT3RoZXJJbmZvKGRhdGEsIHVuaXQpO1xufVxuXG5jb25zdCB1cGRhdGVPdGhlckluZm8gPSAoZGF0YSwgdW5pdCk9PntcbiAgICBjb25zdCBvdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3RoZXItd2VhdGhlci1pbmZvPnAnKTtcbiAgICBjb25zdCBbbWF4VGVtcCwgbWluVGVtcCwgdmlzaWJpbGl0eSwgaHVtaWRpdHldID0gQXJyYXkuZnJvbShvdGhlckluZm8pO1xuICAgIG1heFRlbXAuaW5uZXJIVE1MID0gYE1heDogJHtkYXRhLm1haW4udGVtcF9tYXh9PHNwYW4gY2xhc3M9J3VuaXRzJz4mIzE3Njske3VuaXR9PC9zcGFuPmA7XG4gICAgbWluVGVtcC5pbm5lckhUTUwgPSBgTWluOiAke2RhdGEubWFpbi50ZW1wX21pbn08c3BhbiBjbGFzcz0ndW5pdHMnPiYjMTc2OyR7dW5pdH08L3NwYW4+YDtcbiAgICB2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gYFZpc2liaWxpdHk6ICR7TWF0aC5mbG9vcihkYXRhLnZpc2liaWxpdHkvMTAwMCl9a21gO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGEubWFpbi5odW1pZGl0eX0lYDtcbn1cblxuY29uc3QgZ2V0V2VhdGhlckRldGFpbHMgPSAodmFsdWUsIHVuaXQpPT57XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ3Nob3dfbG9hZGVyJyk7XG4gICAgZ2V0V2VhdGhlckRhdGEud2VhdGhlckRhdGEodmFsdWUsIHVuaXQpXG4gICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBkaXNwbGF5V2VhdGhlckRldGFpbHMoZGF0YSwgc2VsZWN0ZWRVbml0LnN5bWJvbCk7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93X2xvYWRlcicpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycj0+e1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pXG59XG5cbmNvbnN0IGdldEhvdXJseVdlYXRoZXJEZXRhaWxzID0gKHZhbHVlLCB1bml0KT0+e1xuICAgIGdldEhvdXJseVdlYXRoZXJEYXRhLmhvdXJseVdlYXRoZXJEYXRhKHZhbHVlLCB1bml0KVxuICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmxpc3QpO1xuICAgICAgICBkaXNwbGF5SG91cmx5V2VhdGhlckRldGFpbHMoZGF0YS5saXN0LCBzZWxlY3RlZFVuaXQuc3ltYm9sKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnI9PntcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KVxufVxuXG5jb25zdCBkaXNwbGF5SG91cmx5V2VhdGhlckRldGFpbHMgPSAoZGF0YSwgdW5pdCk9PntcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cmx5LXdlYXRoZXI+ZGl2JykuZm9yRWFjaChkaXY9PntcbiAgICAgICAgbGV0IGN1cnJlbnRBcnJheSA9IE51bWJlcihkaXYuY2xhc3NOYW1lLnNsaWNlKC0xKSk7XG4gICAgICAgIGNvbnN0IFtkYXksIGltYWdlLCB3ZWF0aGVyLCB3ZWF0aGVyRGVzY10gPSBBcnJheS5mcm9tKGRpdi5jaGlsZE5vZGVzKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGFbY3VycmVudEFycmF5XS5kdCAqIDEwMDApO1xuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSBkYXRlLnRvRGF0ZVN0cmluZygpLnJlcGxhY2UoJzIwMjMnLCAnJyk7XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YVtjdXJyZW50QXJyYXldLndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcblxuICAgICAgICB3ZWF0aGVyLmlubmVySFRNTCA9IGAke2RhdGFbY3VycmVudEFycmF5XS5tYWluLnRlbXB9PHNwYW4+JiMxNzY7JHt1bml0fTwvc3Bhbj5gO1xuXG4gICAgICAgIHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gZGF0YVtjdXJyZW50QXJyYXldLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgfSlcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuICAgIGdldFdlYXRoZXJEZXRhaWxzKCdsb25kb24nLCBzZWxlY3RlZFVuaXQudW5pdCk7XG4gICAgZ2V0SG91cmx5V2VhdGhlckRldGFpbHMoJ2xvbmRvbicsIHNlbGVjdGVkVW5pdC51bml0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdHM+Lm1ldHJpYycpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59KVxuXG51bml0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bml0cz5idXR0b24nKS5mb3JFYWNoKGJ1dHRvbj0+e1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICB9KTtcbiAgICBzZWxlY3RlZFVuaXQudW5pdCA9IGUudGFyZ2V0LmNsYXNzTmFtZTtcbiAgICBsZXQgbmFtZSA9IGNpdHlOYW1lLnRleHRDb250ZW50LnNwbGl0KCcsJyk7XG4gICAgZ2V0V2VhdGhlckRldGFpbHMobmFtZVswXSwgc2VsZWN0ZWRVbml0LnVuaXQpO1xuICAgIGdldEhvdXJseVdlYXRoZXJEZXRhaWxzKG5hbWVbMF0sIHNlbGVjdGVkVW5pdC51bml0KTtcbiAgICBpZihlLnRhcmdldC5jbGFzc05hbWUgPT09ICdtZXRyaWMnKXtcbiAgICAgICAgc2VsZWN0ZWRVbml0LnN5bWJvbCA9ICdDJztcbiAgICB9ZWxzZXtcbiAgICAgICAgc2VsZWN0ZWRVbml0LnN5bWJvbCA9ICdGJztcbiAgICB9XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn0pXG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImciLCJnbG9iYWxUaGlzIiwidGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJpbnB1dENvbnRhaW5lciIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlucHV0RmllbGQiLCJ0eXBlIiwiY2xhc3NOYW1lIiwibmFtZSIsImFwcGVuZENoaWxkIiwiYnV0dG9uIiwidGV4dENvbnRlbnQiLCJhcGlrZXkiLCJnZXRXZWF0aGVyRGF0YSIsIndlYXRoZXJEYXRhIiwiYXN5bmMiLCJjaXR5TmFtZSIsInVuaXQiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsInN0YXR1cyIsImpzb24iLCJhbGVydCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldEhvdXJseVdlYXRoZXJEYXRhIiwiaG91cmx5V2VhdGhlckRhdGEiLCJ0YWdOYW1lIiwiaWROYW1lIiwidGV4dCIsImFsdCIsImVsZW1lbnRDcmVhdG9yIiwiZm9ybUVsZW1lbnRDcmVhdG9yIiwiY3JlYXRvciIsImltYWdlRWxlbWVudENyZWF0b3IiLCJkaXZQYWNrZXIiLCJ2YWx1ZXMiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiZm9yRWFjaCIsInZhbHVlIiwiaW5uZXJIVE1MIiwid2VhdGhlckNvbnRhaW5lciIsIndlYXRoZXJIZWFkZXIiLCJ1bml0VG9nZ2xlciIsImFwcGVuZCIsIndlYXRoZXJEZXRhaWxzIiwid2VhdGhlckltYWdlIiwibWFpbldlYXRoZXIiLCJvdGhlcldlYXRoZXJEZXRhaWxzIiwid2VhdGhlclRleHQiLCJvdGhlcldlYXRoZXJJbmZvIiwiaG91cmx5V2VhdGhlckNvbnRhaW5lciIsImkiLCJob3VybHlXZWF0aGVyIiwibG9hZGVyX2ltYWdlIiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWFyY2hGaWVsZCIsInNlYXJjaEJ1dHRvbiIsIm1haW5XZWF0aGVySW1hZ2UiLCJ1bml0cyIsImxvYWRlciIsInNlbGVjdGVkVW5pdCIsInN5bWJvbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRXZWF0aGVyRGV0YWlscyIsImdldEhvdXJseVdlYXRoZXJEZXRhaWxzIiwidXBkYXRlT3RoZXJJbmZvIiwiZGF0YSIsIm90aGVySW5mbyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXhUZW1wIiwibWluVGVtcCIsInZpc2liaWxpdHkiLCJodW1pZGl0eSIsIkFycmF5IiwiZnJvbSIsIm1haW4iLCJ0ZW1wX21heCIsInRlbXBfbWluIiwiTWF0aCIsImZsb29yIiwidGhlbiIsInN5cyIsImNvdW50cnkiLCJ0ZW1wIiwid2VhdGhlciIsImljb24iLCJmZWVsc19saWtlIiwiZGVzY3JpcHRpb24iLCJkaXNwbGF5V2VhdGhlckRldGFpbHMiLCJyZW1vdmUiLCJjYXRjaCIsImVyciIsImRpc3BsYXlIb3VybHlXZWF0aGVyRGV0YWlscyIsImxpc3QiLCJkaXYiLCJjdXJyZW50QXJyYXkiLCJOdW1iZXIiLCJzbGljZSIsImRheSIsImltYWdlIiwid2VhdGhlckRlc2MiLCJjaGlsZE5vZGVzIiwiZGF0ZSIsIkRhdGUiLCJkdCIsInRvRGF0ZVN0cmluZyIsInRhcmdldCIsInNwbGl0Il0sInNvdXJjZVJvb3QiOiIifQ==