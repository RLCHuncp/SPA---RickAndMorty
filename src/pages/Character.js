import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
    const id = getHash();
    const character = await getData(id);
    const view = `
    <div className="Characters-inner">
        <article className="Characters-card">
            <img src=${character.image} alt="${character.name}"/>
            <h2>${character.name}</h2>
            <article className="Characters-card">
                <h3>Episodes: <span>${character.episode.length}</span></h3>
                <h3>Status: <span>${character.status}</span></h3>
                <h3>Species: <span>${character.species}</span></h3>
                <h3>Gender: <span>${character.gender}</span></h3>
                <h3>Origin: <span>${character.origin.name}</span></h3>
                <h3>Last location: <span>${character.location.name}</span></h3>
            </article>
        </article>
    </div>
    `;
    return view;
}

export default Character;