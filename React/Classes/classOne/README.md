## challenge 1 - :

## chanllenge 2 : Rendering Multiple components and Nesting Components

In this exercise, you will learn how to create multiple components and render one component inside another.

Step1: Create a Header Component - Create a new file called Header.jsx. - Inside this file, create a functional component named Header. - The Header component should return a <header> element with the following: - A <h1> elememtn with the text "Welcome to My Website!" - A <nav> element containing threee links (<a>) with the text "Home", "About", and "contact".

Step 2: Create a Footer Component - Create a new file called "Footer.jsx" - Inside this file, create a functional component named Footer. - The Footer component should return a <footer> element with a <p> containing the text " @c 2025 My Website".

Step 3: Create a MainContent Component - Create a new file called MainContent.jsx - Inside this file, create a functional component named MainContent. - The MainContent component should return a <main> element containing :
-A <h2> element with the text "Main content" - A <p> element with any text of your choice.

Step 4: Render Components inside App.jsx - In your App.jsx file, import the Header, MainContent nad Footer component

        - import Header from "./compoonents/Header"
        - import MainContent from "./compoonents/MainContent
        - import Footer from "./compoonents/Footer

    - Inside the App component's return statement, render the three component inside a single <div>, in the following order:
        - Header
        - Maincontent
        - Footer

Your App.jsx sould look like

## Challenge 3 : JSX Exercise

In this exercise, you will practice writing basic Jsx code and rendering it in a REact app.

Step 1: Create a New Component - Create a new file called WelcomeMessage.jsx - Inside this file, write a functional component called WelcomeMessage. - The Component should return a <div> that contains: - A <h1> element that displays the msg : "Hello, World!" - A <p> element that displays the msg : "Welcome to the Learning JSX"

Step 2: Render the component in App.jsx - Open the App.jsx file - Import the welcomeMessage component at the top of the file - Inside the App component 's return statement , render

Step 3: run the app

## challenge 4 : JSX Rules Exercise

Step 1: Create a New Component - Create a new file called JSXRules.jsx - Inside this file, write a functional component called JSXRules.

The component should return a <div> containing the following : - A <h1> element with the text "JSX Rules" - A <p> that lists atleast 3 rules of JSX - JSX must return a single parent element. - JSX elements must be properly closed. - JSX attr. are written using camelCase(eg. className, htmlFor etc.)
