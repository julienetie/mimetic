# Mimetic
## A tiny library for elegantly scaling fonts
_"Mimetic" - relating to, constituting, or habitually practising mimesis_

<img src="https://user-images.githubusercontent.com/7676299/236578193-a523cc8c-7187-45bf-8ef4-c6ef9c295eb8.gif">

> ### The Problem
> **You want your fonts to scale to the [viewport](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts#what_is_a_viewport) because its not the 1970s**. Although you can scale fonts using _[viewport-percentage lengths](https://www.w3.org/TR/css-values-3/#viewport-relative-lengths)_ it's not usually recommended:
> - Fonts using viewport units will not be affected by the browser's built-in zoom, thus breaking [accessibiilty](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility)
> - Responsive design becomes more tedious since each font will require an additional viewport value to be paired with a fixed set of values
>
> ### The solution
> Mimetic scales your _[rem](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units)_ and _[em](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units)_ values relative to the browser's viewport whilst respecting the [device-pixel-ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)
> which means: 
> - Fonts and other elements can scale when you resize the window
> - The browser's zoom will be able to increase and decrease your pages entities
> - There is no need to create breakpoints beyond the _memisis-breakpoint_ _[default 1024px/ 64em]_
>
> ### Why
> Ideally, typography that scales with its surroundings produces more harmonised aesthetics and can upscale automatically without intervention.  

### How it works
#### Mimetic scales fonts and any containers that use rem or em units
The **_mimesis-breakpoint_** is the viewport width when Mimetic begins to scale your rem and em values
- Create your responsive layout as normal within the _mimesis-breakpoint_ _[0 to 1024px/ 64em]_
- _px_ will not scale, so ensure fonts and fixed dimensions you want to scale are in _rem_ or _em_ units _(rem should be prefered to avoid compounding)_
- Import the mimetic function and call it early within the head of the document to avoid jittering the [first meaningful paint](https://developer.chrome.com/en/docs/lighthouse/performance/first-meaningful-paint/)
- Resize the window past the _mimesis-breakpoint_ to see it in effect


### Support
Mimetic supports all evergreen browsers and gracefully falls back to your 1024px (64em) design for unsupported browsers and devices.

### Install and use use
```javascript
<script type="module">
  import mimetic from './mimetic.js'
  mimetic()
</script>
```
or 

`npm i mimetic`

### Detecting the browser's zoom level
Although this is possible, it's recommended to not make your application depend on it. Treat this feature as an enhancement, not a necessity.
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

> ### The alternatives
> The pursuit of getting fonts to scale to the viewport impeccably is like treading a tightrope. 
> Below are some of the issues encountered when exploring alternative font-scaling libraries during the making of Mimietic.
>
> Inconsistent browser compatibility, difficult to no ability to zoom thus breaking accessibility, doesn't scale padding/ margin/ line-height and other relative dimensions, doesn’t respect the style attributes on elements. Must always specify relative dimensions (padding/ margin)(More maintenance), you can’t specify relative dimensions, scales to a container only, framework dependent, lacks a breakpoint, fonts blur or are no longer being maintained.

Big thanks to [BrowserStack](https://www.browserstack.com) for sponsoring the cross-browser & device testing of this project.

MIT © 2023 Julien Etienne
