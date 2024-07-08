import { ContactPreview } from "./ContactPpreview";

export function ContactList({ contacts }) {
    return (
        <ul className="contact-list">
            {contacts.map(contact =>
                <li className="contact-preview" key={contact._id}>
                    <ContactPreview contact={contact} />
                    <div>
                        <button onClick={() => onRemoveContact(contact._id)}>x</button>
                        <button onClick={() => onEditCar(contact)}>Edit</button>
                    </div>
                </li>
            )}
        </ul >
    )
}