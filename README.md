#MIMETIC

(Alpha)

MIMETIC is a Fluid Font Formatting Engine (It scales text according the window size)

MIMETIC was build for a Scalable Design workflow:

- No dependencies
- Supports IE9+ 
- Supports 
- exclude tags and selectors from traversing


MIMETIC requires:

- A full fluid design (percentages)
- Recommended use of rem units for font-size (Any can be used)
- You will still be required to customize media queries for mobile layouts 


MIMETIC considers a single width structure e.g,'1024' and scales the design to any screen size with minimal/ optional refinements necessary.

MIMETIC can be used with any frontend framework with the exception that any elements being directly animated (via JavaScript
applying inline styles) must be either excluded or included in the interpolateTags option.

##Implement

Include MIMETIC within the header and it will fire once all DOM assets have loaded. The head is recommended to pre-load the script.
Alternatively it may be feasible to include MIMETIC wihin the page.

