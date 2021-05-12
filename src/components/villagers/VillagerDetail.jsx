import React from 'react'
import PropTypes from 'prop-types'
const VillagerDetail = ({ villager }) => {
    const { image, name, quote, personality, species, skill, url } = villager;

    return (
        <div role='group' aria-label='villager'>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>"{quote}"</p>
            <p>personality: {personality}</p>
            <p>species: {species}</p>
            <p>skill: {skill}</p>
            <a href={url}>{name}'s secret diary</a>
        </div>
    )
}

VillagerDetail.propTypes = {
    villager: PropTypes.object.isRequired,    
}

export default VillagerDetail
