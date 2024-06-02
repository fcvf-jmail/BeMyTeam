function NavBar() {
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Avatar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Games</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Create Game</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Market</a>
                </li>
            </ul>
        </>
    )
}

export default NavBar;