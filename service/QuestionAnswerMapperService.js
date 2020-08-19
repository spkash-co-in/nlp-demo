const QuestionAnswerEntry = require('../model/QuestionAnswerEntry');
const Constants = require('../common/constants');
const Question = require('../model/Question');
const Answer = require('../model/Answer');

class QuestionAnswerMapperService {
    constructor(validatorService, tokenizerService, stemService, answerSenteceMapperService) {
        this.validatorService = validatorService;
        this.tokenizerService = tokenizerService;
        this.stemService = stemService;
        this.answerSenteceMapperService = answerSenteceMapperService;
        this.qna = [];
    }
    processRepos(questionsRepo, answersRepo) {
        questionsRepo.forEach(question => {
            let maxHit = 0, maxHitAns, maxHitSentence, maxHitAnsIndex;
            // console.log("------");
            // console.log(" Question : ", question.data);
            answersRepo.forEach((answer, answerIndex) => {
                answer.mappedSentences.forEach(sentence => {
                    let setenceStem = sentence.tokenizeAndStem();
                    let hits = question.stems.filter(value => setenceStem.includes(value));
                    // console.log("Hits count: ", hits.length, "Hits : ", hits, " Answer : ", answer, " Sentence : ", sentence);
                    if (hits.length > maxHit) {
                        maxHit = hits.length;
                        maxHitAns = answer;
                        maxHitSentence = sentence;
                        maxHitAnsIndex = answerIndex;
                    }
                });
            });
            this.qna.push(new QuestionAnswerEntry(question.data,maxHitAns.data,maxHitSentence,maxHit,maxHitAnsIndex));
            // answersRepo.splice(entry.ansIndex);
            // console.log("------");          
        });
        // console.log(this.qna);
    }
    process(paragraphSection, questionsSection, answersSection) {
        // validate the sections
        this.validatorService.validate(paragraphSection, 'paragraphSection');
        this.validatorService.validate(questionsSection, 'questionsSection');
        this.validatorService.validate(answersSection, 'answersSection');
        // tokenize the questions and stems
        let questions = this.tokenizerService.process(questionsSection, Constants.questionMarkPattern);
        let questionRepo = [];
        questions.forEach(token => questionRepo.push(new Question(token)));
        this.stemService.process(questionRepo);
        // tokenize paragraph
        let sentences = this.tokenizerService.process(paragraphSection, Constants.periodPattern);
        // tokenize answers
        let tokens = this.tokenizerService.process(answersSection, Constants.semicolonPattern);
        let answersRepo = [];
        tokens.forEach(token => answersRepo.push(new Answer(token)));
        // map sentences to answers
        this.answerSenteceMapperService.process(sentences,answersRepo);
        // map questions to answers
        this.processRepos(questionRepo,answersRepo);
        // console.log(this.qna);
    }
}
module.exports = QuestionAnswerMapperService;