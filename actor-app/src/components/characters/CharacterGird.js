

import React from 'react'

const CharacterGird = ({items, isLoading}) => {
    return (
       isLoading ? <h1>Loading i...</h1> 
       : <section className="cards">
           {
               items.map(item => (
               <h2  key={item.char_id}>{item.name}</h2>
           ))}
       </section>
    
    )
}

export default CharacterGird

