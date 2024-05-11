import * as React from 'react';
import "./Contact.css";
import emailjs from "@emailjs/browser";
import SparkleSVG from '@/components/SparkleSVG';
import Alert from '@/components/Alert';
import { AlertType } from '@/types';

interface Props { }

const ContactSection: React.FC<Props> = ({ }) => {
    return (
        <div className='contact-form-wrapper flex flex-col text-contact-label w-full' id="contact">
            <div className='flex flex-row items-center w-fit text-lg custom3:text-2xl gap-3 font-medium rounded-3xl border-2 border-textSmColor text-textSmColor px-8 py-2 mb-5'>
                <SparkleSVG />
                <p>Contact</p>
            </div>
            <p className="ContactSection__Slogan Slogan gradient-text pb-2 leading-tight">
                Let&apos;s make something <br></br>awesome together!
            </p>
            <ContactForm />
        </div>
    );
};

export default ContactSection;

interface ContactFormProps { }

interface Error {
    type: AlertType;
    message: string
}
const ContactForm: React.FC<ContactFormProps> = ({ }) => {
    const [error, setError] = React.useState<Error | null>();
    const EMAILJS_KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY;

    const initialFormData = {
        service_id: 'service_q7qz7n8',
        template_id: 'template_9tmyq5i',
        user_id: EMAILJS_KEY,
        template_params: {
            name: '',
            email: '',
            message: '',
        },
    };

    const [formData, setFormData] = React.useState(initialFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            template_params: {
                ...formData.template_params,
                [e.target.name]: e.target.value,
            },
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate the message field
        if (typeof formData.template_params.message !== "string") {
            setError({ type: AlertType.ERROR, message: "Your message is not a string." });
            return;
        }

        if (!formData.template_params.message.match(/^(?!.*<script>)(?!.*<\/script>)(?!.*<iframe>)(?!.*<\/iframe>)(?!.*<embed>)(?!.*<\/embed>)(?!.*<object>)(?!.*<\/object>)(?!.*<applet>)(?!.*<\/applet>)(?!.*<style>)(?!.*<\/style>)(?!.*<link>)(?!.*<\/link>)(?!.*<meta>)(?!.*<\/meta>).*$/)) {
            setError({ type: AlertType.ERROR, message: "Please enter a valid message without any HTML tags." });
            return;
        }

        const transformedMsg = formData.template_params.message.toLowerCase();
        if (
            transformedMsg.includes(" bot ") ||
            transformedMsg.includes("bot ") ||
            transformedMsg.includes(" money ") ||
            transformedMsg.includes(" rich ") ||
            transformedMsg.includes("crypto") ||
            transformedMsg.includes("robot ") ||
            transformedMsg.includes(" robot ")
        ) {
            setError({ type: AlertType.ERROR, message: "Unusual activities detected, please try again or contact me through Linkedin." });
            return;
        }

        if (formData.template_params.message.length < 10) {
            setError({ type: AlertType.ERROR, message: "Message must be at least 10 characters." });
            return;
        }

        emailjs
            .send(formData.service_id, formData.template_id, formData.template_params, { publicKey: EMAILJS_KEY })
            .then((response) => {
                console.log('Email sent successfully!', response);
                setError({ type: AlertType.SUCCESS, message: "Message sent successfully, please check your email for confirmation." }); // Clear any previous errors
                setFormData(initialFormData); // Reset the form data to initial values

                // Set a timer to remove the success message after 5 seconds
                setTimeout(() => {
                    setError(null);
                }, 5000);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setError({ type: AlertType.ERROR, message: "Message failed to send, please try again later." });
            });
    };


    return (
        <div className="login-box w-full text-dark-textPrimary mt-5">
            <form onSubmit={handleSubmit}>
                {error ? <Alert type={error.type} message={error.message} /> : null}
                <div className="user-box relative">
                    <input type="text" id="name" className="w-full custom2:w-1/2 text-base" name="name" required={true} pattern="^[a-zA-Z\s]+$" title="Name should only contain letters and spaces" onChange={handleChange} value={formData.template_params.name} />
                    <label htmlFor="name">Your Name *</label>
                </div>
                <div className="user-box relative">
                    <input type="email" className="w-full custom2:w-1/2 text-base" id="email" name="email" required={true} pattern="^[A-Za-z0-9._\%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$" title="Please enter a valid email address" onChange={handleChange} value={formData.template_params.email} />
                    <label htmlFor="email">Email Address *</label>
                </div>
                <div className="user-box relative">
                    <textarea name="message" className="w-full custom2:w-[80%] text-base" id="message" required={true} onChange={handleChange} value={formData.template_params.message} />
                    <label htmlFor="message">A Few Words *</label>
                </div>
                <div className='wrap'>
                    <button type="submit" className='btn-0 text-lg px-10 py-4'>Submit</button>
                </div>
            </form>
        </div>
    );
};