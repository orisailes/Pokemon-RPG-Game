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
                        <img src={require('../../img/toturial/keyboard_toturial.png').default} alt="keyboard" />
                    </div>
                    <div>
                        <p>
                            Talk
                        </p>
                        <img src={require('../../img/toturial/space_toturial.png').default} alt="space" />
                    </div>
                    <div className="to-forest">
                        <p>
                            To Forest
                        </p>
                        <img src={require('../../img/toturial/to_forest.png').default} alt="toForest" />
                    </div>
                    <div>
                        <p>
                            Look for wild Pokemons
                        </p>
                        <img src={require('../../img/map/enemyGrass.png').default} alt="wildPokemons" />
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