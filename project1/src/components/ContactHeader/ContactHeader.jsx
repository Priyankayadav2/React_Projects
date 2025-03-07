import styles from './ContactHeader.module.css'
const ContactHeader = () => {
return (
    <div className={`${styles.contact_section} containner`}>
    <h1>CONTACT US</h1>
    <p>A contact us paragraph should include your business's contact information,
        such as your phone number and email address.
        It should also include a call-to-action, and other ways to contact you,
        such as a contact form or social media links. </p>
    </div>
)
}

export default ContactHeader;