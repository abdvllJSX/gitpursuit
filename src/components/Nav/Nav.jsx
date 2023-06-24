import "./Nav.scss"


export default function Nav({ darkmode, handleDarkMode }) {
    return (
        <nav style={darkmode ? {color: "white"} : {color: 'black'}}>
            <div className="nav-header">
                <h1>GITPURSUIT</h1>
            </div>

            <div className={darkmode ? "dark-toggler-container" :"toggler-container"} onClick={handleDarkMode}>
                <div className={darkmode ? "dark-toggler" : "toggler"}>
                </div>
            </div>
        </nav>
    )
}