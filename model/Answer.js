class Answer {
    constructor(data) {
        this.data = data;
        this.mappedSentences = [];
    }
    mapSentence(sentence) {
        this.mappedSentences.push(sentence);
    }
}
module.exports = Answer;