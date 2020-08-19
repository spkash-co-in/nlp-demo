class QuestionAnswerEntry {
    constructor(question, answer, sentence, hit, answerIndex) {
        this.qn = question;
        this.ans = answer;
        this.sentence = sentence;
        this.hit = hit;
        this.ansIndex = answerIndex;
    }
}
module.exports = QuestionAnswerEntry;