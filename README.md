# Breathing Timer

## Overview

A custom HTML pop-over that prevents the user from interacting with the page for 1 minute while encouraging them to breath mindfully. Great to break addictive loops on websites.

## Demo
https://lnsy-dev.github.io/EMDR-element/

## Why

When I quit drinking 8 years ago the single best book I read for it was **Hooked: How to Build Habit-Forming Products** by Nir Eyal. A lot of the best research about addiction has been generated and utilized by people trying to figure out how to make the internet more addictive. This is of course perverse and cruel. 

This custom HTML Element is intended to break these habit forming loops on a website, encouraging the user to focus themselves and move with intention. 

It is, I hope, humane software. 

## Use
Include breathing-timer.min.js in your code and include the breathing-timer custom element.

```html
<script type="module" src="./emdr-element.min.js"></script>

<emdr-element></emdr-element>

```

This places a div that encourages users to breath mindfully for one minute before entering a website. 

## Development

Clone the git repository: 

```sh
git clone git@github.com:lnsy-dev/EMDR-element.git
```

cd into the directory and start the application: 

```sh
cd emdr-timer
npm start
```

This will spin up a live server for editing. 

### Building

To build the application we use webpack. If you don't have webpack installed globally you can do

```sh
npm install

```

to install it. 

Run 

```
npm run build
```

to build the code. 

This will create the breathing-timer.min.js in the root directory. 

