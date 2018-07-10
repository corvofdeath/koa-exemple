export default class TesteController {

    constructor() {

    }

    index(context) {
        return context.body = "Index result";
    }

    user(context) {
        return context.body = "User result";
    }
}