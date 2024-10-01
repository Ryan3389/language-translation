const request = require('supertest');
const express = require('express');
const nock = require('nock');
const routes = require('../routes');

const app = express();
app.use(express.json());
app.use(routes);

describe('Translation API', () => {
    beforeAll(() => {
        nock('https://api.openai.com')
            .post('/v1/chat/completions', {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a language translation expert. Translate the given text into French.' },
                    { role: 'user', content: 'how are you' }
                ],
            })
            .reply(200, {
                choices: [
                    { message: { content: 'Comment ça va?' } }
                ]
            });
    });

    afterAll(() => {
        nock.cleanAll();
    });

    it('should translate text to French', async () => {
        const response = await request(app)
            .post('/api/translate')
            .send({ text: "how are you" });

        expect(response.status).toBe(200);
        expect(response.body.translatedText).toBe("Comment ça va?");
    });
});
