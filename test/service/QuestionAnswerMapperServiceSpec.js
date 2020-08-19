// import { paragraphSection } from '../test-data/payload';
// import { TokenizerService } from '../service/TokenizerService';
require('../testCommon');
const testPayload = require('../test-data/payload');
const Constants = require('../../common/constants');
const Question = require('../../model/Question');
const Answer = require('../../model/Answer');
const ValidatorService = require('../../service/ValidatorService');
const TokenizerService = require('../../service/tokenizerService');
const StemService = require('../../service/stemService');
const AnswerSenteceMapperService = require('../../service/answerSentenceMapperService');
const QuestionAnswerMapperService = require('../../service/QuestionAnswerMapperService');


describe('Given a QuestionAnswerMapperService service', () => {
    let validatorService = new ValidatorService();
    let tokenizerService = new TokenizerService();
    let stemService = new StemService();
    let answerSenteceMapperService = new AnswerSenteceMapperService();
    let questionAnswerMapperService = new QuestionAnswerMapperService(validatorService, tokenizerService, stemService, answerSenteceMapperService);
    it('should map answers to questions based on hits', () => {
        questionAnswerMapperService.process(testPayload.paragraphSection, testPayload.questionsSection, testPayload.answersSection);
        questionAnswerMapperService.qna.forEach(qna => {
            expect(qna.qn).not.to.equal(null);
            expect(qna.ans).not.to.equal(null);
            expect(qna.sentence).not.to.equal(null);
            expect(qna.hit).not.to.equal(null);
            expect(qna.ansIndex).not.to.equal(null);
        });
        console.log(questionAnswerMapperService.qna);
    });
});