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
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    enemies: PropTypes.string
};


export default Character;