const periodPattern = /\./;
const questionMarkPattern = /\?/;
const semicolonPattern = /\;/;
const newline = '\n';
const semicolon = ';';
const space = ' ';
const newlineReplacer = new RegExp(newline, 'g');
module.exports = {
periodPattern,
questionMarkPattern,
semicolonPattern,
newline,
newlineReplacer,
space,
};