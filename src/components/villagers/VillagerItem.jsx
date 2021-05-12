import React from 'react'
import PropTypes from 'prop-types'

const VillagerItem = ({ id, name, image, quote }) => (
    <li
        key={id}
        id={id}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{quote}</p>
    </li>
)

VillagerItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
}

export default VillagerItem;