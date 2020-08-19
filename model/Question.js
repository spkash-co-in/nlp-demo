class Question {
    constructor(data) {
        this.data = data;
        this.stems = [];
    }
    mapStems(stems) {
        this.stems = stems;
    }
}
module.exports = Question;