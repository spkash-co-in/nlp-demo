require('../testCommon');
const testPayload = require('../test-data/payload');
const AnswerSentenceMapper = require('../../service/answerSentenceMapperService');
const Answer = require('../../model/Answer');

describe('Given a answerSentenceMapper service', () => {
    let answerSenteceMapperService = new AnswerSentenceMapper();
    it('should map matching sentences from paragraph to answer', () => {
        let sentences = testPayload.paragraphSectionTokens;
        let tokens = testPayload.answersSectionTokens;
        let answersRepo = [];
        tokens.forEach(token => answersRepo.push(new Answer(token)));
        answerSenteceMapperService.process(sentences,answersRepo);
        answersRepo.forEach(answer => {
            expect(answer).not.to.equal(null);
            expect(answer.data).not.to.equal(null);
            expect(answer.mappedSentences).not.to.equal(null);
            expect(answer.mappedSentences.length).not.to.equal(0);
        });
        // console.log(answersRepo);
    });
});