import React, { Component } from 'react'
import { findCharacter } from '../services/avatarApi';
import CharacterList from '../components/characters/CharacterList';
export default class AvatarContainer extends Component {
    state = {
        loading: true,
        characters: [],
    }

    async componentDidMount() {
        const characters = await findCharacter();
        this.setState({
            characters,
            loading: false,
        })
    }

    render() {
        const { loading, characters } = this.state;

        if (loading) return <h1>Loading</h1>
        return (
                <CharacterList characters={characters} />
        )
    }
}


// for mocking use msw 
// https://github.com/mswjs/msw
// look at react router dom 