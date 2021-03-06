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
exports.CreditCard = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var CreditCard = /** @class */ (function () {
    function CreditCard() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], CreditCard.prototype, "IDCreditCard", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CreditCard.prototype, "Number", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], CreditCard.prototype, "CardValidationValue", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (idClient) { return idClient.CreditCards; }),
        __metadata("design:type", User_1.User)
    ], CreditCard.prototype, "IDClient", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], CreditCard.prototype, "ModificationDate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], CreditCard.prototype, "CreationDate", void 0);
    CreditCard = __decorate([
        typeorm_1.Entity("creditcard")
    ], CreditCard);
    return CreditCard;
}());
exports.CreditCard = CreditCard;
