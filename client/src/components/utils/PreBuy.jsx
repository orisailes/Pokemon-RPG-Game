import React from 'react'
import Button from '../utils/Button'
import '../../css/prebuy.css'

const PreBuy = ({ pokemon, clickToBuy,cancel,preBuyText,user }) => {

    return (
        <div
            className="prebuy">
                <p>
                    You got: {user.money}<span className="dollar-sign">$</span>
                </p>
            <div className="pokemon-buy-popup-display">
                <img src={require(`../../img/pokemon-front/${pokemon.pokemon}.png`).default} alt={pokemon.pokemon} />
                <h3>
                    {pokemon.price}
                    <span className="dollar-sign">$</span>
                </h3>
            </div>
            <div className="btn-container">
            <Button text="buy" onClick={()=>clickToBuy(pokemon)}/>
            <Button text="cancel" onClick={()=>cancel()}/>
            </div>
            <div>
                <p>
                    {preBuyText}
                </p>
            </div>
        </div>
    )
}

export default PreBuy