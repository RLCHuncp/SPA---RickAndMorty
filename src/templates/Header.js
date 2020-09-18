const Header = () => {
    const view = `
    <div class="Header-main">
        <div className="Header-logo">
            <h1>
                <a href="/">
                <i class="fas fa-home"></i>
                RickAndMorty
                </a>
            </h1>
        </div>
        <div class="Header-nav">
            <a href="#/about">
                About
            </a>
        </div>
    </div>
    `;
    return view;
};

export default Header;