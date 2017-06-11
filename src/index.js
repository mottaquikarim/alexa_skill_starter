const {config} = require('./config')
const {buildSpeechletResponse} = require('./utils')
const {
    getWelcomeResponse,
    intentRequest,
} = require('./responses');

const init = (event, context, callback) => {
    const {request, session} = event;
    const {type} = request;

    let response = [];
    try {
        switch(type) {
            case 'LaunchRequest':
                response = getWelcomeResponse();
                break;
            case 'IntentRequest':
                response = intentRequest(request, session);
                break;
            default:
                response = getWelcomeResponse();
        }

        response.then(speechletParams => callback(null, {
            version: '1.0',
            sessionAttributes: {},
            response: buildSpeechletResponse(...speechletParams),
        }));
    }
    catch(e) {
        callback(err);
    }
};

module.exports = {
    init,
};
