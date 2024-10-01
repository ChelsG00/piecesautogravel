'use client';
import React, { useState } from 'react';

const Try = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    message
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            
        } catch (error) {
            setError('Failed to submit form');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
            <form onSubmit={onSubmit}>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="email"
                />
                <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                ></textarea>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Try;

