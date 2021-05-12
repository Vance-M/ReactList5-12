import React, { Component } from 'react'
import request from 'superagent';
import { findSingleCharacter } from '../../services/avatarApi';

export default class CharacterDetail extends Component {
    state = {
        avatarEntry: {},
    }

    componentDidMount = async () => {
        this.setState({loading: true});
        const character = await findSingleCharacter(this.props.match.params.avatarId);
        this.setState({
            loading: false,
            avatarEntry: character
        });
    }



    render() {
        // console.log('1234' + this.state.avatarEntry);
        return (
            <div className='avatarEntry'>

               {
                this.state.loading
                    ? <h1>Loading</h1>
                    : <div>
                        <img src={this.state.avatarEntry.photoUrl} alt="avatar" />
                        <h1>{this.state.avatarEntry.name}</h1>
                        <p>{this.state.avatarEntry.enemies}</p>
                   </div>
               }
            </div>
        )
    }
}
