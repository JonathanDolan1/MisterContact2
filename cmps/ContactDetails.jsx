

export function ContactDetails({contact}){

    return (
        <section className="contact-details">
            <div className="fullname">
                {contact.fullname}
            </div>
            <div className="phone">
                {contact.phone}
            </div>
        </section>
    )

}