class AnswerSentenceMapperService {
    constructor() {

    }
    process(sentenceRepo, answersRepo) {
        sentenceRepo.forEach(sentence => {
            answersRepo.forEach(answer => {
                if (sentence.toLowerCase().includes(answer.data.toLowerCase())) {
                    answer.mapSentence(sentence);
                    // console.log("Sentence = ", sentence, " Answer = ", answer);
                }
            });
        });
    }
}
module.exports = AnswerSentenceMapperService;