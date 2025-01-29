import React from 'react'
import './Bookcard.css'

export default function Bookcard({ book, addToCart, selected, removeFromCart }) {
  return (
    <div className="bookCard">
      <img src={book.coverImage} alt={book.title} />
      <div className="cardInfo">
        <h2>{book.title}</h2>
        <span>{book.author}</span>
        <p>{book.description}</p>
        <h3>₹ {book.price}</h3>
      </div>
      <div className="spacer"></div>
      <button style={selected? {backgroundColor: "#f77f00c7"}:{}} onClick={()=>{selected?removeFromCart(book.id):addToCart(book.id)}}>{selected? "Remove from Cart": "Add to Cart"}</button>
    </div>
  )
}
