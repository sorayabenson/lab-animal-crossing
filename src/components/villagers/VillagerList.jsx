import React from 'react'
import PropTypes from 'prop-types'
import VillagerItem from './VillagerItem';

const VillagerList = ({ villagers }) => (
    <ul 
        aria-label="villagers">
            {villagers.map((villager) => {
                return (
                    <li key={villager.id} id={villager.id}>
                        <VillagerItem
                            id={villager.id}
                            name={villager.name}
                            image={villager.image}
                            quote={villager.quote}
                        />
                    </li>
                )
            })}
    </ul>
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