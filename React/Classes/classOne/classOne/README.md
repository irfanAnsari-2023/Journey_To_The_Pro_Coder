## Challenge 1:

Create a Greet component:

- Create a new file called `Greet.jsx` and inside that file, write a Greet component using the function declaration syntax.
- Afterward, refactor the Greet component to use arrow function syntax.
- Finally, register the Greet component in your `App.jsx` file so that you can see the result when running the app.

---

## Challenge 2: Rendering Multiple Components and Nesting Components

### Step 1: Create a Header Component

- Create a new file called `Header.jsx`.
- Inside this file, create a functional component named `Header`.
- The `Header` component should return a `<header>` element with the following:
  - An `<h1>` element with the text "Welcome to My Website!"
  - A `<nav>` element containing three links (`<a>`) with the text "Home", "About", and "Contact".

### Step 2: Create a Footer Component

- Create a new file called `Footer.jsx`
- Inside this file, create a functional component named `Footer`.
- The `Footer` component should return a `<footer>` element with a `<p>` containing the text "© 2025 My Website".

### Step 3: Create a MainContent Component

- Create a new file called `MainContent.jsx`
- Inside this file, create a functional component named `MainContent`.
- The `MainContent` component should return a `<main>` element containing:
  - An `<h2>` element with the text "Main content"
  - A `<p>` element with any text of your choice.

### Step 4: Render Components inside App.jsx

- In your `App.jsx` file, import the `Header`, `MainContent` and `Footer` components:
  ```js
  import Header from "./components/Header";
  import MainContent from "./components/MainContent";
  import Footer from "./components/Footer";
  ```

Inside the App component's return statement, render the three components inside a single `<div>`, in the following order:

- Header
- MainContent
- Footer

Your App.jsx should look like:

---

## Challenge 3: JSX Exercise

In this exercise, you will practice writing basic JSX code and rendering it in a React app.

### Step 1: Create a New Component

- Create a new file called `WelcomeMessage.jsx`
- Inside this file, write a functional component called `WelcomeMessage`.
- The component should return a `<div>` that contains:
  - An `<h1>` element that displays the msg: "Hello, World!"
  - A `<p>` element that displays the msg: "Welcome to the Learning JSX"

### Step 2: Render the Component in App.jsx

- Open the `App.jsx` file
- Import the `WelcomeMessage` component at the top of the file
- Inside the App component's return statement, render

### Step 3: Run the App

---

## Challenge 4: JSX Rules Exercise

### Step 1: Create a New Component

- Create a new file called `JSXRules.jsx`
- Inside this file, write a functional component called `JSXRules`
- The component should return a `<div>` containing the following:
  - An `<h1>` element with the text "JSX Rules"
  - A `<p>` that lists at least 3 rules of JSX:
    - JSX must return a single parent element.
    - JSX elements must be properly closed.
    - JSX attributes are written using camelCase (e.g. className, htmlFor, etc.)

---

## Challenge 5: Using Dynamic Content with {} in JSX

In this exercise, you'll learn how to inject dynamic data into JSX using curly braces `{}`.

### Step 1: Create a Greeting Component

- Create a new file called `Greeting.jsx`
- Inside this file, create a functional component named `Greeting`
- The `Greeting` component should return a `<div>` containing:
  - An `<h1>` element that dynamically displays a greeting message.
  - A `<p>` element that dynamically displays the current date.
- Use JS expression inside `{}` to dynamically render the following:
  - A name variable containing a name, such as "Irfan"
  - A `new Date()` object to display the current date.

### Step 2: Create a ProductInfo Component

- Create a new file called `ProductInfo.jsx`
- Inside this, create a functional component named `ProductInfo`
- This component should return a `<div>` that dynamically displays product details:
  - Use a product object that contains the following properties:
    - name: "Laptop"
    - price: 120000
    - availability: "In Stock"
  - Display the product name, price, and availability using `{}`.

### Step 3: Render the Component in App.jsx

---

## Challenge 6: Rendering a List of Data with .map()

In this exercise, you will learn how to render a list of items using the `.map()` method in JSX.

### Step 1: Create a UserList Component

- Create a new file called `UserList.jsx`
- Inside this file, create a functional component called `UserList`
- In the component, create a `users` array with the following objects:

```js
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 28 },
  { id: 3, name: "Charlie", age: 30 },
];
```

- Use the `.map()` method to render a list of users. Each user's name and age should be displayed inside a `<div>` element.
- Use `id` as the unique key for each list item.

### Step 2: Create a ProductList Component

- Create a new file called `ProductList.jsx`
- Inside this file, create a functional component called `ProductList`
- Create a `products` array with the following objects:

```js
const products = [
  { id: 1, name: "Phone", price: "1000" },
  { id: 2, name: "Tablet", price: "2000" },
  { id: 3, name: "Laptop", price: "3000" },
];
```

- Use the `.map()` method to render the list of products. Each product's name and price should be displayed inside a `<div>` element.
- Use `id` as the key for each product.

### Step 3: Render the Components in App.jsx

---

## Challenge 7: Using Props in React Components

In this exercise, you'll learn how to pass and use props in React components to make them dynamic and reusable.

### Step 1: Create a Person Component

- Create a new file called `Person.jsx`
- Inside this file, create a functional component called `Person`
- This component should accept props and render:
  - An `<h2>` element that displays the person's name.
  - A `<p>` element that displays the person's age.
- Use `props.name` and `props.age` to display the dynamic values passed from the parent component.

### Step 2: Create a Product Component

- Create a new file called `Product.jsx`
- Inside this file, create a functional component called `Product`
- This component should accept props and render:
  - An `<h2>` element that displays the product's name.
  - A `<p>` element that displays the product's price.
- Use `props.name` and `props.price` to display the dynamic values passed from the parent component.

### Step 3: Pass Props from App.jsx

---

## Challenge 8: Conditional Rendering in React

In this exercise, you'll practice different ways to render JSX conditionally in React components.

### Step 1: Create a Weather Component (if, else if, else)

- Create a new file called `Weather.jsx`
- Inside this file, create a functional component called `Weather`
- The component should:
  - Take the `temp` prop
  - Use `if`, `else if`, and `else` statements to conditionally render different messages based on the `temp` value:
    - If `temp < 15`: "It's cold"
    - If `temp` between 15 and 25: "It's nice outside"
    - If `temp > 25`: "It's hot outside"

### Step 2: Create a UserStatus Component (&& operator)

- Create a new file called `UserStatus.jsx`
- Inside this file, create a functional component called `UserStatus`
- The component should:
  - Take two boolean props `loggedIn`, `isAdmin`
  - Use the `&&` operator to display a message:
    - If `loggedIn` and `isAdmin`: "Welcome Admin"
    - If only `loggedIn`: "Welcome User"

### Step 3: Create a Greeting Component (ternary operator)

- Create a new file called `Greeting.jsx`
- Inside this file, create a functional component called `Greeting`
- The component should:
  - Take a `timeOfDay` prop (e.g., "morning", "afternoon")
  - Use the ternary operator to conditionally display different greetings:
    - If `timeOfDay === "morning"`: "Good morning!"
    - If `timeOfDay === "afternoon"`: "Good afternoon"

### Step 4: Render the Component in App.jsx
