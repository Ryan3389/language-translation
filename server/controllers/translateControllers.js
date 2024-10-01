require('dotenv').config()
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.API_KEY
})

const translate = async (req, res) => {
    const userText = req.body.text
    try {
        const messages = [
            {
                role: 'system',
                content: 'You are a language translation expert. Translate the given text into French.'
            },
            {
                role: 'user',
                content: userText
            }
        ]

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages
        })

        const translatedText = response.choices[0].message.content

        res.status(200).json({ translatedText })

    } catch (error) {
        console.error('translate function, translateControllers.js: ', error)
    }
}

module.exports = { translate }