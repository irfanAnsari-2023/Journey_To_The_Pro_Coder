import React from 'react'
import StyleCard from './components/StyleCard'
import ProfileCard from './components/ProfileCard'
import IconComponent from './components/IconComponent'
import Move from './components/Move'
import Copy from './Copy'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'


const App = () => {
  return (
    <div>
    <StyleCard />
    <ProfileCard />
    <IconComponent />
    <Move />
    <Copy />

    <Counter />

    <TodoList />

    <Profile />

    <ShoppingList />
     </div>

  )
}

export default App