import React, { useState } from 'react';

const BurgerBuilder = () =>{
    const [burgerState, setBurger] = useState({});

    return(
        <React.Fragment>
            <div>
                Burger
            </div>
            <div>
                Build Controls
            </div>
        </React.Fragment>
    )
}

export default BurgerBuilder