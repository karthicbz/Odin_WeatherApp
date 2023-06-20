# WeatherApp

---

This weather app was created entirely with `javascript` by manipulating `HTML` dom elements. Since making every `HTML` elements using `javascript` is hard, so I made a module called `element_creator.js` which contains a functions `CreateElement` and `divpacker` which can be used to create multiple html elements with one line.

for example

```javascript
const weatherHeader = divPacker([["p", "cityName"]], "weather-header");
```

the `element_creator` transform the above code into

```html
<div class="weather-header">
  <p class="cityName">London<span>, GB</span></p>
</div>
```

You can also combine the `CreateElement` and `divpacker` to make some complicated html elements :wink:.

it is also my first javascript project which use `async and await` module and I have fetched some cool gifs from [giphy](https://giphy.com/).

see the [live project here](https://karthicbz.github.io/Odin_WeatherApp/).

---

### Technologies used

- `Javascript`
- `Webpack`
- `async and await`

---

you can build and run this project by following this steps:

```
npm install
npm start
```
