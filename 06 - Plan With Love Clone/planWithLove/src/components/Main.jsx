import React from 'react'
import Card from './Card'
import data from '../api/data'
import { useState } from 'react'

const Main = () => {

  const [cards, setCards] = useState(data);

  const removeCard = (id) => {
    const newCards = cards.filter( cards => cards.id !== id);
    setCards(newCards);
  }

  const refreshCards = () => {
    setCards(data);
  }

  if(cards.length === 0) {
    return (
      <div className='w-ful h-[70vh] flex flex-col gap-2 justify-center items-center'>
        <p className='text-2xl font-bold'>No Tours Left</p>
        <button className='bg-gray-100 px-16 py-2 text-xl' onClick={ () => refreshCards() }>Refresh</button>
      </div>
    )
  }

  return (
    <main className='w-full flex justify-center'>
        <div className='w-[1300px] flex flex-wrap gap-8 justify-center'>
            
            { cards.map( (currElem) => {
              return (
                <Card data={currElem} removeCard={removeCard} />
              )
            })}

        </div>
    </main>
  )
}

export default Main