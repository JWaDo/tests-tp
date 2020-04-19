class EmailService {
    constructor() {}

    send(User) {
        return User && User.age >=  18 ? true : false;
    }

}

module.exports = EmailService;