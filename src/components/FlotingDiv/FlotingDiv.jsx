import React from "react";

import './FlotingDiv.css'

const Flotingdiv = ({ image, txt1, txt2 }) => {
    return (
        <div className="flotingdiv">
            <img src={image} alt="" />
            <span>
                {txt1}
                <br />
                {txt2}
            </span>
        </div>

    )
}

export default Flotingdiv