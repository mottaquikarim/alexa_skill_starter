const initSessionAttributes = () => {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};

    return sessionAttributes;
}

const getWelcomeResponse = () => {
    const cardTitle = 'Welcome';
    const speechOutput = 'Welcome to Alexa Bot. ';
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Ask me about x y and z ';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);
}

const getEndResponse = () => {
    const cardTitle = 'Conversation completed.';
    const speechOutput = 'Thanks for using Alexa Bot';
    const shouldEndSession = true;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            null,
            shouldEndSession
        ]);
}

const intentRequest = (intentRequest, session) => {
    const {intent} = intentRequest;
    const {name: intentName} = intent;

    switch (intentName) {
        case 'SomeRequestIntent':
            return /* implement your own response method here */;
        case 'AMAZON.StopIntent':
        case 'AMAZON.CancelIntent':
            return getEndResponse();
        default:
            return getWelcomeResponse();
    }
}

module.exports = {
    getWelcomeResponse,
    intentRequest,
    initSessionAttributes,
}
