import React from 'react'
import Button from '../utils/Button'
import '../../css/prebuy.css'

const PreBuy = ({ product, clickToBuy, cancel, preBuyText, user }) => {


    return (
        <>
            <div
                className="prebuy">
                <div className="prebuy-grid">
                    <p className="you-got">
                        You got: {user.money}<span className="dollar-sign">$</span>
                    </p>
                    {
                        product === "pokeball" ?
                            <img
                            className="pokeball-pic"
                                src={require(`../../img/home/pokeball.png`).default}
                                alt="pokeball"
                            >
                            </img>
                            :
                            <img
                                src={require(`../../img/pokemon-front/${product.pokemon}.png`
                                ).default}
                                alt={product.pokemon}
                            />
                    }
                    <h3>
                        {product === "pokeball" ? "400" : product.price}
                        <span className="dollar-sign">$</span>
                    </h3>
                    <div className="btn-container">
                        <Button text="buy" onClick={() => clickToBuy(product)} />
                        <Button text="cancel" onClick={() => cancel()} />
                    </div>
                    <p className="prebuy-text">
                        {preBuyText}
                    </p>
                </div>

            </div>
        </>
    )
}

export default PreBuy