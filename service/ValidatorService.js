class ValidatorService {
    validate(input,type) {
        let errorMessage = `${type} cannot be empty!`;
        if (input=== null || input === undefined || input.trim().length == 0) {
            throw(new Error(errorMessage));
        }
    }
}
module.exports = ValidatorService;