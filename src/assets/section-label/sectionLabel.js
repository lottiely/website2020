import React from 'react';

const sectionLabel = (props) => {

    let renderTitle = () => {
        let letters = props.title.split('');
        let color = "lightGreen";

        return letters.map((letter, index) => {
            if(index !== 1 && letter !== ' '){
                color = (color === "darkGreen") ? "lightGreen" : "darkGreen";
            }
            return <span key={index} className={color}>{letter}</span>
        });
    }

    return (
        <div className="sectionLabel">
            <h1>{renderTitle()}
            <div className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            </h1>
        </div>
    )
};

export default sectionLabel;