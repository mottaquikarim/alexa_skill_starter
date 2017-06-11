const buildSpeechletResponse = (title, output, repromptText, shouldEndSession)  => Object.assign({}, {
    outputSpeech: {
        type: 'PlainText',
        text: output,
    },
    card: {
        type: 'Simple',
        title: `${title}`,
        content: `${output}`,
    },
    reprompt: {
        outputSpeech: {
            type: 'PlainText',
            text: repromptText,
        },
    },
    shouldEndSession,
});

module.exports = {
    buildSpeechletResponse,
}

