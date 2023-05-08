# Mimetic
## A library for scaling fonts
_"Mimetic" - relating to, constituting, or habitually practising mimesis_

<img src="https://user-images.githubusercontent.com/7676299/236578193-a523cc8c-7187-45bf-8ef4-c6ef9c295eb8.gif">

> ### The Problem
> **You want your fonts to scale to the [viewport](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts#what_is_a_viewport) because its not the 1970s**. Although you can scale fonts using _[viewport-percentage lengths](https://www.w3.org/TR/css-values-3/#viewport-relative-lengths)_ it's not usually recommended:
> - Fonts using viewport units will not be affeced by the browser's built-in zoom, thus breaking [accessibiilty](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)
> - Responsive desing becomes more tedious since each font will require an additonal viewport value to be paired with a fixed set of values
>
> ### The solution
> Mimetic scales your _[rem](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units)_ and _[em](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units)_ values relative to the browser's viewport whilst respecting the [device-pixel-ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)
> which means: 
> - Fonts and other elements can scale when you resize the window
> - The browser's zoom will be able to increase and decrease your pages entities
> - There is no need to create breakpoints beyond the _mimetic-breakpoint_ _[default 1024px/ 64em]_

### How it works
The _mimetic-breakpoint_ is the viewport width when Mimetic begins to scale your rem and em values.
- Create your responsive/ mobile first webiste as normal within the mimetic-breakpoint _[0 to 1024px/ 64em]_
- Ensure all the px and font values are in rem units (em works too but it's recommended to use rem to avoid compounding)
- Import the mimetic function and call it ideally in the head of the document
- Resize the window past the mimetic-breakpoint

### Can Mimetic detect the desktop browser's zoom level?
Yes. Although this is possible, it's not recommended to make your applicaton rely on it. Treat this feature as an enhancement not a necessity.


### Support
Mimetic supports all everygreen browsers and gracefully falls back to your 1024px (64em) design for unsupported browsers.

**By default, Mimetic is not a JavaScript dependency pre-se. If Mimetic or JavaScript fails, the web page will still be accessible**

### Install
`npm i mimetic` 

### First Meaningful Paint
Ideally MIMETIC should execute before other scripts that directly alter or affect the DOM.
But it does require the DOM to load first.

### Usage
```javascript
mimetic();
```
### Standalone zoom detection
```javascript
mimetic({
  scale: false,
  onZoom: (a,b,c,d) => console.log(a,b,c,d);
});
```

### Options
Below is the list of config options passed as an object:

| Property  | Value  | Description | Default |  
|---|---|---|---|
| cutOffWidth | String - CSS units  | The minimal width to disable scaling | 0 |    
| enableScale | Booolean  | Enables scaling of relative units | true |  
| loadEvent | String - LoadEvent type  | native load event to use before auctioning | "DOMContentLoaded" | 
| mobileWidth | String - CSS units | The minimal width to disable scaling for mobile devices  | "40em" |
| onResize | ({viewportWidth, innerWidth, evalDPR, calculatedDPR, normalizedDPR}) => {} | Callback on scale and or zoom | undefined |   
| onScale | ({viewportWidth, innerWidth, evalDPR, calculatedDPR, normalizedDPR}) => {} | Callback on resize only | undefined |  
| onZoom | ({viewportWidth, innerWidth, evalDPR, calculatedDPR, normalizedDPR}) => {} | Callback on zoom only | undefined |
| preserveDevicePixelRatio | Boolean | Normalises the device pixel ratio for high ratio devices | false |
| relativeDesignWidth | String - CSS units  | The width relative to the font size | "1024px" |
| scaleDelay | Number - Milliseconds | The debounced delay to call on resize | 16  |


> ### Why is Mimetic a thing
> In an ideal world, typoography that scales with it's surroundings produces more harmonised astetics and can upscalling automatically.
>
> ### What about alternatives?
> Most alternatives appear to have some combination of the below issues:
>
> Inconsistent browser compatibility, difficult to no ability to zoom thus breaking accessibility, doesn't scale padding/ margin/ line-height and other relative dimensions, doesn’t respect the style attributes on elements. Must always specify relative dimensions (padding/ margin)(More maintenance), you can’t specify relative dimensions, scales to a container only, framework dependent, lacks a breakpoint, fonts blur or is no longer being maintained.


Big thanks to [BrowserStack](https://www.browserstack.com) for sponsoring the cross browser & device testing of this project.

MIT © 2023 Julien Etienne.
