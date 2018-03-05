# Dimension Setter
## By MH Creative
### Getting Started
Include file in head of `index.html` file:  
`<script src="./js/dimension-setter-vanilla.js"></script>`

To set height of image, simply include `onload="heightAssign('#image-ex')"` in your HTML:  
e.g.  
`<img src="https://placehold.it/320x150" id="image-ex" onload="heightAssign('#image-ex')" />`

The method works for classname selectors. The first element with the class name will be targeted.

For Browserify:  
`var DimSet = require('./dimension-setter.js');`
