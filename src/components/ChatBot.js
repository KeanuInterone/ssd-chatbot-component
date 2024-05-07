import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import RecommendedMessages from './RecommendedMessages';
import UserInput from './UserInput';
import ChatService from '../services/ChatService';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [showRecommendedMessages, setShowRecommendedMessages] = useState(true);
    const [typing, setTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Display initial message from the chatbot
        setMessages([{ text: "Hello, how can I help you?", isUser: false }]);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSendMessage = async (message) => {
        // Display user message
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: message, isUser: true }
        ]);
        setShowRecommendedMessages(false); // Hide recommended messages after user sends first message
        setTyping(true); // Show typing indicator while waiting for response from ChatService

        try {
            // Simulate fetching response from ChatService (replace with actual API call)
            const response = await ChatService.sendMessage(message);
            // Display response from the chatbot
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: response, isUser: false }
            ]);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setTyping(false); // Hide typing indicator after receiving response
        }
    };

    const handleRecommendedMessageClick = (message) => {
        handleSendMessage(message); // Send recommended message when clicked
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <Message key={index} message={message.text} isUser={message.isUser} />
                ))}
                {typing && <TypingIndicator />} {/* Show typing indicator if typing */}
                <div ref={messagesEndRef} />
            </div>
            {showRecommendedMessages && (
                <RecommendedMessages
                    messages={["What size roaster should I get?", "What's starter for?", "Can you make and order for me?", "Let's add another message", "And another one"]}
                    onMessageClick={handleRecommendedMessageClick}
                />
            )}
            <UserInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatBot;
