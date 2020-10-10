# Skillate Custom Buttons

This project is created to show how a single button component can be used across a SaaS application and to cater to all use cases.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

### Fortawesome
Button uses icon library of fontawesome which provides an extensive react plugin to manage all icons at one single place
Installation method can be found [here](https://fontawesome.com/how-to-use/on-the-web/using-with/react).
You can also use their pro icons to give more styles to the icons

### Emotions
The CSS of button is done in emotion language which gives more control around the variables such as typography, colors, size etc. You can use simple vanilla installation by following the steps [here](https://emotion.sh/docs/emotion#global-styles)

### Classnames
This library helps in managing multiple classes at ones. This wasn't required as this can be easily achieved by emotions. However, I went ahead and did it at the time. 

### React Router Dom
This is to handle button onclick or to function, this dependency can be easily get be rid of

## Functionality
The component changes it's style based on the props provided. You can make changes in theme.js file to control color, typography and sizes. The component has been designed with the intention to be used across a SaaS app. There are following props with thir functionality explained

### Category
Following are the values for props named "category"
* primary (default) : Main Colored button
* secondary-White : Meant to be used when background is white 
* secondary-grey : Meant to be used when background is very light grey
* borderless : Meant to be used along side a secondary button, e.g. cancel or back button
* skeleton : Meant to be used when bacground is dark

### Icon
The button can be accompanied with an icon. The props for the same are as follow 
* iconName  
* iconAlign
* iconColor

iconName takes in the font-awesome name of the icon as it is. Before you pass a name, make sure to import that icon first in the FAIcon file. If iconName is defined and no text is defined in the button then only icon button renders.
iconAlign is either left (default) or right
iconColor also takes in a string, which can be again defined as a mapping in FAIcon file.

### Other Props
Button also have some addition property as a props, they are
* isDanger : Red Color content
* isSuccess : green color content
* loading : when clicked and their is a wait period, this automatically adapts to the background color of the icon
* disabled : non clickable
* width : custom width
* height : custom height
* style : custom style



## Available Scripts

In the project directory, you can run:

npm install and then npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


