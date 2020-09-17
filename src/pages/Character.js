// Nuestros peronajes
const Character = () => {
    // vamos establecer como van a vivir nuestro personajae
    const view = `
    <div className="Characters-inner">
        <article className="Characters-card">
            <img src="image" alt="name-image"/>
            <h2>Name</h2>
            <article className="Characters-card">
                <h3>Episodes:</h3>
                <h3>Status:</h3>
                <h3>Species:</h3>
                <h3>Gender:</h3>
                <h3>Origin:</h3>
                <h3>Last location:</h3>
            </article>
        </article>
    </div>
    `;
    return view;
}

export default Character;