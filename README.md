# Generic Alexa Starter Kit
This is a generic boilerplate for building alexa apps with AWS Lambda.

## Tutorial

To begin, follow **[this](https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial)** tutorial.

I would highly recommend stepping through it in entireity before using this repo to customize.

Once you have ensured that you have a working Alexa Skill, I would recommend going through the entire process again, this time with a Node v6 AWS Lambda function, but this time using this repo to build out your custom functionality.

## How this code is structured

Consider the following Intent Schema from the tutorial above:

```json
{
  "intents": [
    {
      "intent": "MyColorIsIntent",
      "slots": [
        {
          "name": "Color",
          "type": "LIST_OF_COLORS"
        }
      ]
    },
    {
      "intent": "WhatsMyColorIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    }
  ]
}
```

Each of those intents have a corresponding `case` in `./src/index`.

Ideally, you would update those intents with your own custom ones - and you could configure Alexa's responses to those intents in `./src/responses`.

Note that all methods from the `./src/responses` module return promises - this is to help manage any asynch calls that you might have to do.

## How to run / build

0. Begin with `npm install`
1. Write code inside of `./src`. You can install any and all `npm packages` that you need (don't OD tho).
2. You may run `npm run watch` to watch your js code as you make changes **OR** you may run `npm run build` to build your zip file once after you are all done with changes.
3. The output of both `npm run` scripts is a zip file called `dist.zip` that lives in top level of your directory. Upload that to AWS Lambda function, hit `Save and Test`, then go to your Alexa Skill portal to test the code updates.

