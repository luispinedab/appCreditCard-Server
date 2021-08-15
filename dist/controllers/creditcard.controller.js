"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCreditCard = exports.deleteCreditCard = exports.updateCreditCard = exports.getCreditCard = exports.getCreditCards = void 0;
var typeorm_1 = require("typeorm");
var CreditCard_1 = require("../entity/CreditCard");
var User_1 = require("../entity/User");
var dbActions_1 = require("../persistence/dbActions");
var Cryptr = require('cryptr');
var cryptr = new Cryptr('myTotalySecretKey');
var getCreditCards = function (req, res) {
    var relations = ['IDClient'];
    return dbActions_1.dbActions.readandDecrypt(CreditCard_1.CreditCard, req, res, relations);
};
exports.getCreditCards = getCreditCards;
var getCreditCard = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var relations;
    return __generator(this, function (_a) {
        relations = ['IDClient'];
        return [2 /*return*/, dbActions_1.dbActions.readOne(CreditCard_1.CreditCard, req, res, relations)];
    });
}); };
exports.getCreditCard = getCreditCard;
var updateCreditCard = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var hashencriptedNumber, today, date, time, dateTime;
    return __generator(this, function (_a) {
        hashencriptedNumber = cryptr.encrypt(req.body.Number);
        console.log("number", cryptr.decrypt(hashencriptedNumber));
        req.body.Number = hashencriptedNumber;
        today = new Date();
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        dateTime = date + ' ' + time;
        req.body.ModificationDate = dateTime;
        console.log(req.params.id, req.body);
        return [2 /*return*/, dbActions_1.dbActions.update(CreditCard_1.CreditCard, req, res)];
    });
}); };
exports.updateCreditCard = updateCreditCard;
var deleteCreditCard = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, dbActions_1.dbActions.delete(CreditCard_1.CreditCard, req, res)];
    });
}); };
exports.deleteCreditCard = deleteCreditCard;
var createCreditCard = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var hashpasswordUser, hashencriptedNumber, today, date, time, dateTime, newUser, results, user, creditcards, exp, results_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hashpasswordUser = cryptr.encrypt(req.body.User.Password);
                req.body.User.Password = hashpasswordUser;
                hashencriptedNumber = cryptr.encrypt(req.body.CreditCard.Number);
                console.log("number", cryptr.decrypt(hashencriptedNumber));
                req.body.CreditCard.Number = hashencriptedNumber;
                today = new Date();
                date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                dateTime = date + ' ' + time;
                req.body.User.ModificationDate = dateTime;
                req.body.User.CreationDate = dateTime;
                req.body.CreditCard.ModificationDate = dateTime;
                req.body.CreditCard.CreationDate = dateTime;
                newUser = typeorm_1.getRepository(User_1.User).create(req.body.User);
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).save(newUser)];
            case 1:
                results = _a.sent();
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User)
                        .createQueryBuilder("User")
                        .select("User.IDUser")
                        .orderBy("User.IDUser", "DESC")
                        .getOne()];
            case 2:
                user = _a.sent();
                _a.label = 3;
            case 3:
                _a.trys.push([3, 5, , 6]);
                creditcards = req.body.CreditCard;
                creditcards.IDClient = user;
                exp = typeorm_1.getRepository(CreditCard_1.CreditCard).create(creditcards);
                return [4 /*yield*/, typeorm_1.getRepository(CreditCard_1.CreditCard).save(exp)];
            case 4:
                results_1 = _a.sent();
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                console.log("no hay experiencias");
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.createCreditCard = createCreditCard;
