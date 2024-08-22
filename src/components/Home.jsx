import React from 'react'
import Header from './Header'
import Cardpizza from './Cardpizza'
import {pizzas} from '../data/pizzas.js'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='pizzasContainer'>
        {pizzas.map((pizza) =>
        <div key={pizza.id} className="cardPizza">
          <Cardpizza
          id = {pizza.id}
          name = {pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
          />
          </div>
        )}
      </div>
      </div>
  )
}

export default Home