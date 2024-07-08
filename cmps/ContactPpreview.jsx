
export function ContactPreview({contact}){
    return (
        <section className="contact-preview"> 
        <p> Full Name: <span> {contact.fullname}</span> </p>
        <p> Phone number: <span> {contact.phone}</span> </p>
        </section>
    )
}