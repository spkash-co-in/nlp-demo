// import { paragraphSection } from '../test-data/payload';
// import { TokenizerService } from '../service/TokenizerService';
require('../testCommon');
const testPayload = require('../test-data/payload');
const TokenizerService = require('../../service/tokenizerService');
const Constants = require('../../common/constants');

describe('Given a tokenizer service', () => {
    let tokenizerService = new TokenizerService();
    it('should remove new lines', () => {
        const inputWithoutNewLines = tokenizerService.removeNewLines(testPayload.paragraphSection);
        expect(inputWithoutNewLines.includes("\n")).to.equal(false);
    });
    it('should remove new lines', () => {
        const inputWithoutNewLines = tokenizerService.removeNewLines(testPayload.paragraphSection);
        expect(inputWithoutNewLines.includes("\n")).to.equal(false);
    });
    it('should tokenize paragraph based on period', () => {
        let tokens = tokenizerService.process(testPayload.paragraphSection, Constants.periodPattern);
        expect(tokens.length).to.equal(14);
        expect(tokens).to.eql(testPayload.paragraphSectionTokens);
    });
    it('should tokenize questions based on questionMark', () => {
        let tokens = tokenizerService.process(testPayload.questionsSection, Constants.questionMarkPattern);
        expect(tokens.length).to.equal(5);
        expect(tokens).to.eql(testPayload.questionsSectionTokens);
    });
    it('should tokenize answers based on semicolon', () => {
        let tokens = tokenizerService.process(testPayload.answersSection, Constants.semicolonPattern);
        expect(tokens.length).to.equal(5);
        expect(tokens).to.eql(testPayload.answersSectionTokens);
    });
});