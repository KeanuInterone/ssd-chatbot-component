const ChatService = {
    sendMessage: async (message) => {
        // Simulate sending message to backend service with a 2-second delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Return a simulated response from the backend service
        return 'How ya goin, mate?';
    }
};

export default ChatService;