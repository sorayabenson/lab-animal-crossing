import React from 'react'
import PropTypes from 'prop-types'
import VillagerItem from './VillagerItem';

const VillagerList = ({ villagers }) => (
    <>
    <p>helllll</p>
    <ul 
        aria-label="villagers">
            {villagers.map((villager) => {
                <VillagerItem
                    id={villager.id}
                    name={villager.name}
                    image={villager.image}
                    quote={villager.quote}
                />
            })}
    </ul>
    </>
);

VillagerList.propTypes = {
    villagers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            quote: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default VillagerList;