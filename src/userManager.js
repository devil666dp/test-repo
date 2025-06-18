// User management utility
class UserManager {
    constructor() {
        this.users = [];
    }

    

    findUser(email) {
        return this.users.find(user => user.email === email);
    }

    deleteUser(email) {
        const index = this.users.findIndex(user => user.email === email);
        if (index > -1) {
            return this.users.splice(index, 1)[0];
        }
        return null;
    }

    getAllUsers() {
        return [...this.users];
    }
}

module.exports = UserManager;
