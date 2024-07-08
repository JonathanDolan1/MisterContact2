
const { useNavigate } = ReactRouter
const { NavLink } = ReactRouterDOM

export function AppHeader() {
    const navigate = useNavigate()

    return (
        <header className="app-header full main-layout">
            <section className="header-container">
            <h1>Contact App</h1>
            <nav className="app-nav">
                    <NavLink to="/" >Home Page</NavLink>
                    <NavLink to="/contacts" >Contacts</NavLink>
                </nav>
            </section>
        </header>
    )
}