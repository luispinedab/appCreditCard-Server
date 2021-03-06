"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var user_controller_1 = require("../controllers/user.controller");
router.get('/users', user_controller_1.getUsers);
router.put('/users/:id', user_controller_1.updateUser);
router.delete('/users/:id', user_controller_1.deleteUser);
exports.default = router;
