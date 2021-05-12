import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ id, name, image, enemies }) => (
    <>
        <Link to={id}>
        <img src={image} alt={name} />
        </Link>
        <p>{name}</p>
        <p>{enemies}</p>
    </>
);

Character.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    enemies: PropTypes.string.isRequired
};


export default Character;