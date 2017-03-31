# MIMETIC

## Scalable Fonts & Zoom Detection

### What is this?
<img src="https://media.giphy.com/media/13NkUb5hwB1afK/giphy.gif">

#### (The sincerest form of flattery)


MIMETIC is a JavaScript _viewport engine_, that quantifies relative units to the viewport and _devicePixelRatio_ conditionally. Which means **text can scale to the viewport's dimensions without breaking the browser’s ability to zoom**.

### Browser Support 
MIMETIC supports IE9+

### Why?

It enables developers to:
- Design fluid website with fonts that scale to the viewport width.
- Have less / no maintainability for retina and high resolutions displays.
- Normalise the perceived _devicePixelRatio_ for high resolution tablet devices (optional). 
- Detect the zoom level on all modern desktop browsers IE9+
- Improve and fine-tune accessibility when the user utilities zoom.
- Control when and when not to scale via media queries.
- Take an existing Responsive Website and convert it instantly to a Scalable Website.
- Less screen resolutions to consider = Get more done in less time.
- Design more aesthetically pleasing websites.
- Future proof designs from MIMETIC sized rem units to future relative-percentile units by simply changing the unit and root font-size. 

### Why not use blah? 
Viewport units allow you to scale fonts to viewport dimensions but unfortunately they prevent the browser’s ability to zoom. This is important for accessibility. There are other libraries that can scale text to the viewport/ container but they either break zoom or have impractical cross browser compatibility issues. MIMETIC is able to decipher 

### What do I need to know?
There’s a few simple concepts you need to understand to create _Scalable Web Design_ via MIMETIC.
-  You must use relative units for all text preferably (REM units)
- MIMETIC scales all quantities not just font-size margins/ padding, width, height etc.
- Only work with percentiles and relative units when implementing layouts such as **%**, **vh**, **vw**, **rem**. 
- vh and vw units are ideal for translate/ translate3d.
- Mobile design is exactly as you know it.

### Install
`npm i mimetic` 

or 

`yarn add mimetic`

### Usage
Because MIMETIC is considered as a crucial part of the document’s styling it is encouraged to either:

- Inject the code directly within script tags in the head of your HTML

or 

- add the MIMETIC src via the script tag within the head of your HTML.

Execute MIMETIC preferably before all other scripts.
```javascript
Mimetic();
```

### Use MIMETIC as a standalone zoom detection library
MIMETIC can simply be used as a zoom detection library.
Simply by disabling scale and using the provided onZoom callback arguments:
```javascript
Mimetic({
  scale: false,
  onZoom: (a,b,c,d) => console.log(a,b,c,d);
});
```

### Size
MIMETIC has a **2.5kb gzip size** and will not exceed a 3.5kb gzip size. 

### Options
Below is the list of config options passed as an object:

| Property  | Value  | Description | Default |  
|---|---|---|---|
| cutOffWidth | String - CSS units  | The minimal width to disable scaling | 0 |    
| enableScale | Booolean  | Enables scaling of relative units | true |  
| loadEvent | String - LoadEvent type  | native load event to use before auctioning | "DOMContentLoaded" | 
| mobileWidth | String - CSS units | The minimal width to disable scaling for mobile devices  | "40em" |
| onResize | ( clientWidth , windowWidth, devicePixelRatio) => {} | Callback on scale and or zoom | undefined |   
| onScale | ( clientWidth , windowWidth, devicePixelRatio) => {} | Callback on resize only | undefined |  
| onZoom | ( clientWidth , windowWidth, devicePixelRatio) => {} | Callback on zoom only | undefined |
| preserveDevicePixelRatio | Boolean | Normalises the device pixel ratio for high ratio devices | false |
| relativeDesignWidth | String - CSS units  | The width relative to the font size | "1024px" |
| scaleDelay | Number - Milliseconds | The debounced delay to call on resize | 16  |


MIT (c) 2017 Julien Etienne.