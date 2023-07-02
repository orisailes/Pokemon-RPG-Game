import React from 'react'
import Button from '../utils/Button'
import '../../css/toturial.css'

const PreBuy = ({ setShowToturial,mapRef }) => {

    return (
        <>
            <div
                className="toturial">
                <div className="toturial-grid">
                    <div>
                        <p>
                            Character Movement
                        </p>
                        <img src={require('../../img/toturial/keyboard_toturial.png')} alt="keyboard" />
                    </div>
                    <div>
                        <p>
                            Talk
                        </p>
                        <img  style={{height:'50px'}} src={require('../../img/toturial/space_toturial.png')} alt="space" />
                    </div>
                    <div className="to-forest">
                        <p>
                            To Forest
                        </p>
                        <img style={{height:'60px', width:'50px'}} src={require('../../img/toturial/to_forest.png')} alt="toForest" />
                    </div>
                    <div>
                        <p>
                            Look for wild Pokemons
                        </p>
                        <img src={require('../../img/map/enemyGrass.png')} alt="wildPokemons" />
                    </div>
                    <Button
                        text="got it"
                        onClick={() => {
                            mapRef.current.focus()
                            setShowToturial(false)
                        }}
                    />

                </div>

            </div>
        </>
    )
}

export default PreBuy