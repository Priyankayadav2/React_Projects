import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import { RiMessage2Fill } from "react-icons/ri";
import { MdPhone } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import { useState } from 'react';

const ContactForm = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");

    const[text,setText]=useState("");

    
    // let name,email,text;

    const onSubmit=(event)=>{
        event.preventDefault();//defualt refreshing 
        console.log(event);
        // name=event.target[0].value;
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
        // console.log({name,email,text});
    }
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<RiMessage2Fill  fontSize="25px"/> } />
                <Button  text="VIA CALL" icon={< MdPhone fontSize="25px"/>} />
                </div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={< AiTwotoneMail  fontSize="25px"/>} />

                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' />
                    </div>
                    <div className={styles.form_control}>
                    <label htmlFor='email'>EMAIL</label>
                    <input type='email' id='email' />
                    </div>
                    <div className={styles.form_control}>
                    <label htmlFor='text'>TEXT</label>
                    <textarea id='text' rows="8"  />
                    </div>
                    <div style={{ display:"flex", justifyContent:"end", }}> 
                    <Button text="SUBMIT " type="submit"/>
                    </div>
                    <div>
                        {name+" "+email+" "+text}
                    </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src='/images/contact_image.avif' alt="contact_image"/>
            </div>
        </section>
    )
    }
export default ContactForm
