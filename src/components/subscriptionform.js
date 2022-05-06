//In src/components/sub-form.component.js
import React, { useState } from 'react';
import * as blogStyles from './blogstyles.module.css'

const SubscriptionForm = () => {
    const [status, setStatus] = useState(null);
    const [email, setEmail] = useState('');

    //FORM_URL should be the same as the form action url pointed out above
    const FORM_URL = `https://app.convertkit.com/forms/3249692/subscriptions`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        try {
            const response = await fetch(
                FORM_URL,
                {
                    method: 'post',
                    body: data,
                    headers: {
                        accept: 'application/json',
                    },
                }
            );
            setEmail('');
            const json = await response.json();
            if (json.status === 'success') {
                setStatus('SUCCESS');
                return;
            }
        } catch (err) {
            setStatus('ERROR');
            console.log(err);
        }
    };

    const handleInputChange = event => {
        const {value} = event.target;
        setEmail(value);
    }

    return (
        <div className="sub">
            <h2>don't miss out!</h2>
            <p>
               If you've found any of my articles useful (or fun!), subscribe to receive more ME straight to your inbox! I'll make it interesting, I promise.
            </p>

            {status === 'SUCCESS' && <p className={blogStyles.success}>Thank You! Now, Go Check Your E-mail!</p>}
            {status === 'ERROR' && <p className={blogStyles.error}>Oops, Something went wrong! try again.</p>}

            <form className="sub__form"
                action={FORM_URL}
                method="post"
                onSubmit={handleSubmit}
            >
                <input
                    type="email"
                    aria-label="Your email"
                   //The name attribute should be the same as on you selected form.
                    name="email_address"
                    placeholder="Your email address"
                    onChange={handleInputChange}
                    value={email}
                    required
                />

                <button type="submit">
                    Subscribe
                </button>

            </form>

            <p className={blogStyles.subTag}>I won't send you spam and you can unsubscribe at any time</p>

        </div>
    );
};

export default SubscriptionForm