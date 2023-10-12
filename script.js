$(document).ready(function () {
    const chatBox = $(".chat-box");
    const userInput = $("#user-input");
    const sendButton = $("#send-button");

    const preWrittenResponses = [
        "Hello currently I am working on an LLM for a real medical client that will provide services as this project lightly discusses",
        "Thank you for continuing to test the functionality.",
        "The project encompasses fine-tuning ChatGPT but simultaneously I am training a model using TensorFlow.",
        "Have a great day as this is my last available message."
    ];
    let responseIndex = 0;

    // Function to add a user message to the chat box
    function addUserMessage(message) {
        const messageDiv = $("<div>").addClass("message sent").html(`<p>${message}</p>`);
        chatBox.append(messageDiv);
        userInput.val("");
        chatBox.scrollTop(chatBox.prop("scrollHeight")); // Scroll to the bottom
    }

    // Function to add a system response to the chat box
    function addSystemResponse() {
        if (responseIndex < preWrittenResponses.length) {
            const response = preWrittenResponses[responseIndex];
            const messageDiv = $("<div>").addClass("message received").html(`<p>${response}</p>`);
            chatBox.append(messageDiv);
            responseIndex++;
            chatBox.scrollTop(chatBox.prop("scrollHeight")); // Scroll to the bottom
        }
    }

    // Event listener for the Send button
    sendButton.on("click", function () {
        const userMessage = userInput.val().trim();
        if (userMessage !== "") {
            addUserMessage(userMessage);
            addSystemResponse();
        }
    });
});
