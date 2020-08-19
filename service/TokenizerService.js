const natural = require('natural');
const Constants = require('../common/constants');

class TokenizerService {
    constructor() {
    }
    process(section, delimiter) {
        const tokenizer = new natural.RegexpTokenizer({pattern: delimiter});
        return tokenizer.tokenize(this.removeNewLines(section));
    }
    removeNewLines(input) {
        return input.replace(Constants.newlineReplacer, Constants.space);
    }
}
module.exports = TokenizerService;