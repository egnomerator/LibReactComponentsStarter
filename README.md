# LibReactComponentsStarter

My "template" starter app for bringing React--as a component library--into a .NET Core MVC web app

## Steps to see this app in action:

1. Clone the Repo
1. run the app in debug mode (IMPORTANT! just a heads-up--the first time will take about a minute or so, because it installs NPM packages)
1. Observe the new web page load with a table
1. preform CRUD operations on the table data

**note:** if you get a "digital envelope" error during build

- this is an error thrown during Webpack build running on Node.js version 17.0.1 (this is the version I saw it on)
    - I THINK that this error starts appearing in Node.js version 17+ but not totally sure
- FIX: look at branch "build-error-digital-envelop" which only has changes in the package.json file scripts to fix this

## What is this "React Editable Table Area" web page?

- it is entirely rendered and controlled by a set of React components
- a React component uses jQuery Ajax for HTTP-initiated CRUD operations
- an API to a React component library is defined and exposed globally by Webpack
- the global API is used to trigger an initial render of the React components
    - a reference to a webAPI object that uses jQuery Ajax is passed into the API for React to use

## What is this "React Editable Table Area" web page? (**details**)

- React components
    - a set of React components comprises everything in the main page area (between the nav bar and the footer)--this includes:
    - the "React" label and "Refresh" button
    - the 3-fields and labels ("Next Id", "First Name", "Last Name") and "Save Dev" button to create a new Dev
        - why devs? ... there's no good reason lol it's really just a list of objects with first name, last name, and id
    - the table displaying the Devs
    - "Dev Details" label and value (which displays something when you click a "View" button)
    - "Ajax Result" label and value (which displays something whenever an Ajax request is made)
- jQuery Ajax
    - the table data is populated via jQuery Ajax web calls
    - React is using jQuery Ajax for web calls
- Component Library API
    - there is a top-level module defining and exporting an object that represents an API
    - the webpack build is configured to expose this API globally, assigning it to a global variable called "ClientApp"
    - a class JavaScript file (wwwroot/js/Devs/index.js) uses the Component API to render the React table
        - `ClientApp.Components.renderDevsEditor(container, devsWebApi);`
            - the API requires a container reference so React knows where to render itself on the page
            - the API requires a reference to an object that it can use to make Ajax calls
    - the top-level API
        - this top-level API object is defined and exported in wwwroot/app/src/index.js
            - (don't have to have this top-level API but maybe you want more than just a React Components API)
        - Webpack is responsible for exposing this top-level API object as a global variable named "ClientApp"
        - this index.js file is the entry point that Webpack starts with
            - Webpack traces the module import statements and builds a graph of the module tree to bundle
    - the Components API
        - the top-level API contains a sub-API for the component library "ClientApp.Components"
        - this "Components" API is defined and exported in wwwroot/app/src/components/index.js
        - the top-level API imports this "Components" API
- jQuery Ajax
    - a JavaScript file (wwwroot/js/site.js) defines a global function for web calls utilizing jQuery Ajax
    - a JavaScript file (wwwroot/js/Devs/devsWebAPI.js) defines a global object to provide a specific API for CRUD operations on Devs
        - a reference to this object is passed to the React component
        - this object uses the site.js jQuery Ajax function for the web calls

## How does the JavaScript build happen? You said just run the app in debug mode.

- the `.csproj` file has a couple sections defined to integrate the JavaScript build process into the .NET build process
- it runs `npm ci` to ensure an exact copy of the NPM dependencies is installed
    - this only happens the first time, and then in the future, any time the package.json file is updated
- it runs the JavaScript build process by executing the NPM script defined in the package.json file
    - the specific script is the "dev" script if in Debug mode, otherwise the "prod" script
    - this step always runs for any .NET build (build/rebuild)

## What is the JavaScript build process?

The process will always be the same process whether running for dev, prod, watch mode, testing

- run a check on the TypeScript types using tsc (this is the TypeScript compiler)
    - IF this check fails, the build aborts immediately, otherwise continue
- run the actual build
    - this can be Webpack for dev or for prod
    - this can be Jest (for unit testing)

# Technologies

- .NET Core MVC web app
- jQuery
- React
- es6 modules, Webpack, Babel, JSX, TypeScript, Jest
