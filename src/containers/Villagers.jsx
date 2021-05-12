import React, { Component } from 'react'
import VillagerList from '../components/villagers/VillagerList';
import { callVillagers } from '../services/animalCrossingAPI';

export default class Villagers extends Component {
    state = {
        loading: true,
        villagers: []
    }

    async componentDidMount() {
        const villagers = await callVillagers();

        this.setState({
            loading: false,
            villagers
        })
    }

    render() {
        const { loading, villagers } = this.state;

        if (loading) return <h1>circling for landing!</h1>

        return (
            <>
                <VillagerList villagers={villagers}/>
            </>
        )
    }
}
