import React from 'react'
import PropTypes from 'prop-types'

const VillagerDetail = ({ image, name, quote, personality, species,
skill, url }) => {
    return (
        <div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{quote}</p>
            <p>{personality}</p>
            <p>{species}</p>
            <p>{skill}</p>
            <a href={url}>more info</a>
        </div>
    )
}

VillagerDetail.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default VillagerDetail
