// import { paragraphSection } from '../test-data/payload';
// import { TokenizerService } from '../service/TokenizerService';
require('../testCommon');
const testPayload = require('../test-data/payload');
const ValidatorService = require('../../service/ValidatorService');


describe('Given a tokenizer service', () => {
    let validatorService = new ValidatorService();
    it('should throw error for undefined data', () => {
        try {
            validatorService.validate(testPayload.undefinedParagraphSection, 'Undefined Paragraph');
        } catch (error) {
            expect(error.message).to.equal('Undefined Paragraph cannot be empty!');
        }
    });
    it('should throw error for null data', () => {
        try {
            validatorService.validate(null, 'Null Paragraph');
        } catch (error) {
            expect(error.message).to.equal('Null Paragraph cannot be empty!');
        }
    });
    it('should throw error for empty data', () => {
        try {
            validatorService.validate(' ','Empty Paragraph');
        } catch (error) {
            expect(error.message).to.equal('Empty Paragraph cannot be empty!');
        }
    });
});