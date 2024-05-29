"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            { id: 1, name: 'John', email: 'john@gmail.com', role: 'admin' },
            { id: 2, name: 'Dave', email: 'dave@gmail.com', role: 'supervisor' },
        ];
    }
    getAll() {
        return this.users;
    }
    getAllSupervisors() {
        return this.users.filter((user) => user.role === 'supervisor');
    }
    getAllByRole(role) {
        console.log(role);
        return this.users.filter((user) => user.role === role);
    }
    getById(id) {
        return this.users.find((user) => user.id === id);
    }
    create(newUser) {
        const latestUser = this.users.sort((a, b) => b.id - a.id)[0];
        this.users.push({
            id: latestUser?.id + 1,
            ...newUser,
        });
    }
    updateById(id, updatedUser) {
        return this.users.map((user) => {
            return user.id === id
                ? {
                    ...user,
                    ...updatedUser,
                }
                : user;
        });
    }
    deleteById(id) {
        this.users.filter((user) => user.id !== id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map