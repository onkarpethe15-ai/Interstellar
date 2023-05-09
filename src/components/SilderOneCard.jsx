import React from 'react'

export default function SilderOneCard(props) {
    return (
        <div className='card'>
            <img className="product--image"
                src={props.url} alt="image" />
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <p>Discrpition2</p>
            <p><button>Apply </button></p>
        </div>
    )
}
