import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
    const id = getHash();
    const character = await getData(id);
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src=${character.image} alt="${character.name}"/>
            <h2 class="Character-name">${character.name}</h2>
        </article>
        <article class="Characters-card">
                <h3>🎯 <span>Episodes:</span> ${character.episode.length}</h3>
                <h3>🎯 <span>Status:</span> ${character.status}</h3>
                <h3>🎯 <span>Species:</span> ${character.species}</h3>
                <h3>🎯 <span>Gender:</span> ${character.gender}</h3>
                <h3>🎯 <span>Origin:</span> ${character.origin.name}</h3>
                <h3>🎯 <span>Last location:</span> ${character.location.name}</h3>
        </article>
    </div>
    `;
    return view;
}

export default Character;