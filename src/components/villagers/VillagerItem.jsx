import React from 'react'
import PropTypes from 'prop-types'

const VillagerItem = ({ id, name, image, quote }) => (
    <>        
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{quote}</p>
    </>
)

VillagerItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
}

export default VillagerItem;