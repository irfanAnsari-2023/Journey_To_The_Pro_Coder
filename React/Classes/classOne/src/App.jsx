import React from 'react'
import Greet from './components/Greet'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import JSXRules from './components/JSXRules'
import Greeting from './components/Greeting'
import ProductInfo from './components/ProductInfo'
import UserList from './components/UserList'
import ProductList from './components/ProductList'
import Person from '../Person'
import Product from './components/Product'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'

const App = () => {
  return (
    <div>
      {/* <WelcomeMessage />
      <Greeting />
      <ProductInfo />
      <Header />
      <MainContent />
      <JSXRules />
      <Footer /> */}

      {/* <UserList />

      <ProductList />

      <Person 
        name= "Irfan Ansari"
        age= {25}
      />

      <Product 
        name="Laptop"
        price={20000}
        /> */}
        <Greeting
        timeOfDay = "morning"
        />
        <Weather 
          temperature = {30}
          />
      <UserStatus />
     </div>

  )
}

export default App