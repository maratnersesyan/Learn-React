import './Header.css'

function Header() {

    const Header = {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
    }
    const style = {
        color: 'red',
        fontSize: '2rem',
    }
    const headerStyle = {
        fontSize: 20,
        color: 'green',
    }
    return (
        <header className="container" style={Header}>
            <h1 style={style}>MARAT</h1>
            <h2 style={headerStyle}>Admin</h2>
        </header>
    )
}

export default Header