import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';


const CharacterList = ({ characters }) => (
    <ul aria-label="characters">
        {characters.map((character) => (
            <li key={ character.name + character.enemies }>
                <Character
                    id={character.id}
                    name={character.name}
                    enemies={character.enemies}
                    image={character.image}
                />
            </li>
        ))}
    </ul>
);
    


Character.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            image: PropTypes.string,
            enemies: PropTypes.string
        })
    ),
};

export default CharacterList;