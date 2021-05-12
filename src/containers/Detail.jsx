import React, { Component } from 'react'
import VillagerDetail from '../components/villagers/VillagerDetail'
import { villagerTicket } from '../services/animalCrossingAPI';

export default class Detail extends Component {
    state = {
        loading: true,
        villager: {}
    }

    async componentDidMount() {
        const villager = await villagerTicket(this.props.match.params.id);

        this.setState({
            loading: false,
            villager: villager
        })
    }
    
    render() {
        const { loading, villager } = this.state;

        if (loading) return <h1>a visitor is arriving!</h1>

        return (
            <VillagerDetail villager={villager}/>
        )
    }
}
