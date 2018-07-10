export default class UserController {

    constructor() {

    }

    index(context) {
        return context.body = "User index result";
    }

    all(context) {
        return context.body = "User all result";
    }
}