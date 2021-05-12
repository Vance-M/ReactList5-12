
export const findCharacter = async () => {
    const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    const char = await res.json();
    return char.map(character => ({
        id: character._id,
        name: character.name,
        image: character.photoUrl,
        enemies: character.enemies,
    }));
};

export const findSingleCharacter = async (id) => {
    const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    const char = await res.json();
    // console.log(char);
    return char;
    //  char.map(character => ({
    //     name: character.name,
    //     image: character.photoUrl,
    //     enemies: character.enemies,
    // }));
};