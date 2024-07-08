const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { ContactIndex } from "./pages/ContactIndex.jsx"
import { ContactDetails } from "./cmps/ContactDetails.jsx"
import { HomePage } from "./pages/HomePage.jsx"

export function RootCmp() {

    return (
        <Router>
            <section className="app main-layout">
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<ContactIndex />}/>
                        <Route path="/contact/:contactId" element={<ContactDetails />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}

