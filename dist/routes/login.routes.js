"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var login_controller_1 = require("../controllers/login.controller");
router.post('/login', login_controller_1.login);
router.get('/logout', login_controller_1.logout);
exports.default = router;
