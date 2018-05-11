# **OSKRHQ.DS**
This is a Design System created for both Designers and Developers. The system makes use of a CSS architecture based on a shared anatomy (Color, Typography, Space, Depth, and Motion), and a variety of React Presentational Components built from this shared anatomy. The system also has a UI Kit with available Sketch Symbols matching these React Components so Designers and Developers are always in sync. 🤙🏽 

# **Installation**
```sh
npm i --save oskrhq-design-system
```

# **Usage**
1. Include the CSS Architecture in your SCSS files:

```scss
@import 'node_modules/oskrhq-design-system/styles/styles.scss';
```

2. Include any of the provided components in your project:

```javascript
import {DSAvatar, DSButton, DSRadio} from 'oskrhq-design-system';
```

3. Tell React to render the element in the DOM:

```javascript
ReactDOM.render(
    <DSButton type="primary" onClick={() => alert('Button clicked!')}>Press Me</DSButton>,
  document.querySelector('#app')
);
```

#### **Not using React?**
I got you. Although you will not be able to take advantage of the react Components, you can still make use of the Shared Anatomy of Styles using SASS. If that is the case, you only have to do step 1. In the `1-base` folder within, you will find what you need. 

#### **Are you a Designer?**
You are not lost, feel free to dig through the code but you will be more interested in the UI Kit which mirrors this repo code. You can find it [here](https://github.com/ogonzal87/oskrhq-uikit).

## Methodology
Read my Medium series [here](https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf)

## Licenses
* Source code is licensed under [MIT](https://opensource.org/licenses/MIT)

# FAQ's

### What is a Design System?
My definition is as follows: 
> (noun): A product made of living guidelines that communicates a unified set of UX and design decisions which promotes harmony across various media outputs.

### Why should I use a Design System?
If you are here, you already know why. 🤓

### What if the element/component I need is not in the UI Kit?
You can create your own components using the base Anatomy which provides some really useful utility sass functions, mixins and classes.  

### Supporting Material
1) Part I: [The Anatomy of all Interfaces](https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf)
2) Part II: [Crafting a New Visual Language](https://medium.muz.li/crafting-a-new-visual-language-912d3ac8df43)
2) Part III: [A Dictionary for a Design Language](https://blog.prototypr.io/a-dictionary-for-a-design-language-3afae1579586)

![Screenshot](./oskrhq-style-sheet.png)
