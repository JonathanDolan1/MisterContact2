const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { HomePage } from "./pages/HomePage.jsx"

export function RootCmp() {

    return (
        <Router>
            <section className="app main-layout">
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}