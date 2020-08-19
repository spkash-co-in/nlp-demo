// import { paragraphSection } from '../test-data/payload';
// import { TokenizerService } from '../service/TokenizerService';
require('../testCommon');
const testPayload = require('../test-data/payload');
const StemService = require('../../service/stemService');
const Question = require('../../model/Question');

describe('Given a stem service', () => {
    let stemService = new StemService();
    it('should populate stems in questions', () => {
        let tokens = testPayload.questionsSectionTokens;
        let questionRepo = [];
        tokens.forEach(token => questionRepo.push(new Question(token)));
        stemService.process(questionRepo);
        questionRepo.forEach(question => {
            expect(question).not.to.equal(null);
            expect(question.data).not.to.equal(null);
            expect(question.stems).not.to.equal(null);
            expect(question.stems.length).not.to.equal(0);
        });
        // console.log(questionRepo);
    });
});