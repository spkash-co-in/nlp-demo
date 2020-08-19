const natural = require('natural');
class StemService {
    constructor() {
    }
    process(questionRepo) {
        natural.PorterStemmer.attach();
        questionRepo.forEach(question => {
            if (question!=null && question.data!=null) {
                question.mapStems(question.data.tokenizeAndStem());
                // console.log(question);
            }
        });
    }
}
module.exports = StemService;