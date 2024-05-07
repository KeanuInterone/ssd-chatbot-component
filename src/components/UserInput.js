import React, { useState } from 'react';
import SendButton from './SendButton';

const UserInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() !== "") {
            onSendMessage(message);
            setMessage("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="user-input-form">
            <input
                type="text"
                value={message}
                onChange={handleChange}
                placeholder="Type a message..."
                className="user-input-field"
            />
            <SendButton onClick={handleSubmit} />
        </form>
    );
};

export default UserInput;