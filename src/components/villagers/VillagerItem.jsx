import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const VillagerItem = ({ id, name, image, quote }) => (
    <Link to={id}>        
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{quote}</p>
    </Link>
)

VillagerItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
}

export default VillagerItem;