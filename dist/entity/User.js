"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var CreditCard_1 = require("./CreditCard");
var UserType_1 = require("./UserType");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "IDUser", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "FirstName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "LastName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], User.prototype, "Identification", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return UserType_1.UserType; }, function (IDUserType) { return IDUserType.users; }),
        __metadata("design:type", UserType_1.UserType)
    ], User.prototype, "IDUserType", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "Nickname", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "Password", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return CreditCard_1.CreditCard; }, function (creditcard) { return creditcard.IDClient; }),
        __metadata("design:type", Array)
    ], User.prototype, "CreditCards", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], User.prototype, "ModificationDate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], User.prototype, "CreationDate", void 0);
    User = __decorate([
        typeorm_1.Entity("user")
    ], User);
    return User;
}());
exports.User = User;
