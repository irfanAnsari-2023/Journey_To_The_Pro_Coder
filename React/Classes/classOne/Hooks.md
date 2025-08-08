## Challenge 1 : Mastering useState in React

In this exercide , you' ll learn how to use the useState hook for the managing state in various scenarios, including basic usage, arrays, objetcs nad arrays of objects.

Step 1: Basic Usage of useState

    - create a new file called Counter.jsx
    - Inside this file, create a functional component called Counter.
    - Use useState to manage a simple counter state

        - Initialize the state with a value of  0
        - Create a btn to increment the counter by 1 when clicked
        - Display the current value of the counter

Step 2: useState with an Array of Data

    - create a new file called TodoList.jsx
    - Inside this file, create a functional component called TodoList.
    - Use useState to manage an array of todo items

        - Initialize the state with an empty array
        - Create a form to add new todo items to the list
        - Display the list of todo items

Step 3: useState with an obj of data

    - Create a new file called Profile.jsx
    - Inside this file, create a functional component called Profile.
    - Use useState to manage an obj with user profile information

        - Initialize the state with an obj containing name and age
        - Provide input fields to update the name and age
        - Display the updated profile information

Step 4: useState with an Array of Objects

    -  Create a new file called ShoppingList.jsx
    - Inside this file, create a functional component called ShoppingList.
    - Use useState to manage an array of  obj, where each obj represents a shopping item with name and quantity

        - Initialize the state with an empty array
        - Create a form to add new item to the list
        - Display the list of shopping items

Step 5: Render all the components in App.jsx

---

## Challenge 2 : Understanding useEffect in React

In this exercise, you'll practice using the useEffect hook in different scenarios, including fetching data, handling side effects.

Step 1: Basic usage of useEffect

    - create a new file called BasicEffect.jsx
    - Inside this file, create a functional component called BasicEffect.
    - Use useEffect to log a msg to the console whenever the component mounts(i.e when it's rendered the first time).

Step 2: useEffect with Dependencies

    - create a new file called CounterEffect.jsx
    - Inside this file, create a functional component called CounterEffect.
    - Use useEffect to update the document the title whenever a counter value changes.

        - initialize a count state with 0 using useState
        - Render a btn that increment the count
        - Use useEffect to update the document title  whenever count changes.

Step 3: useEffect for fetching Data

    - create a new file called FetchDataComponent.jsx
    - Inside this file, create a functional component called FetchDataComponent.
    - Use useEffect to fetch data from an API when the component mounts

        - use the API endpoint https://jsonplaceholder.typicode.com/posts to fetch some data
        - Store the data in a state var and display the title of the first post

---

## Challenge 3 : Using Context and useContext in React

In this exercise, you'll learn how to :

    - Create a Context
    - Use useContext to access data from the Context
    - Share state and function between components without using props

Step 1: Creating a Context

    - Creata a new file called UserContext.jsx
    - Inside this file, create a functional component called UserContext.
    - Create a UserProvider component that will hold the shared state.

Step 2: Using useContext in Components

    - Creata a new file called UserProfile.jsx
    - Inside this file, create a functional component called UserProfile.
    - This component will access the user data from UserContext using the useContext hook.

Step 3: Updating the Context Data

    - Creata a new file called UserUser.jsx
    - Inside this file, create a functional component called UserUser that allows the user to update their name.

---

## challenge 4 : Using useReducer in React

In this exercise, you'll learn how to:

    - Define a reduce rfunc. to manage state logic
    - Use the useReducer hook to manage complex state in React component.
    - Dispatch actions to update state

Step 1: Setting up the Reducer func.

    - Creata a new file called CounterReducer.jsx
    - Inside this file, create a functional component called CounterReducer.
    - Define a reducer func. that will manage counter's state.

Step 2: Using useReducer Hook

    - Creata a new file called Counter.jsx
    - Inside this file, create a functional component called Counter.
    - use the useReducer hook to manage the state of the counter.

Step 3: Extending the reducer with more actions

    - Modify the counterReducer.js file to add more actions for increasing and decreasing by a specific amount.

Step 4: Using Payloads in Actions

    - Update the Counter.jsx file to allow the user to increase or decrease the count by a specific value using an input field.

Step 5: Rendering the Counter in App.jsx

---

## Challenge 5 : Using useRef in React

In this exercise, you'll learn how to :

    - Use useRef to ref. DOM elements
    - Use useRef to store values that persist b/w renders without triggering re-renders

Step 1: Accessing a DOM element with useRef

    - Creata a new file called FocusInput.jsx
    - Inside this file, create a functional component called FocusInput that will focun on an i/p field when a btn is clicked, using the useRef hook.

Step 2: Persisting values b/w renders with useRef

    - Creata a new file called Timer.jsx
    - Inside this file, create a functional component called Timer, where the timer's interval is stored using useRef.
