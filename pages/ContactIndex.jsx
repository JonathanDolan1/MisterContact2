import { useEffect } from "react";
import { loadContacts, removeContact } from "../store/actions/contact.actions";


export function ContactIndex() {

    useEffect(() => {
        loadContacts(filterBy)
            .catch(() => {
                showErrorMsg('Could not load todos')
            })
    }, [filterBy])

    function onRemoveContact(contactId) {
        removeContact(contactId)
            .then(() => {
                console.log('removed contact ' + contactId);
                showSuccessMsg(`Removed contact with ${contactId} id successfully`)
            })
            .catch(() => showErrorMsg('Had trouble removing the contact'))
    }

    return (
        <section className="contact-index">
            <contactList />
        </section>
    )
}

