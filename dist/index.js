"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var creditcard_routes_1 = __importDefault(require("./routes/creditcard.routes"));
var login_routes_1 = __importDefault(require("./routes/login.routes"));
var typeorm_1 = require("typeorm");
var app = express_1.default();
typeorm_1.createConnection();
//middlewares
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
//Routes
app.use(user_routes_1.default, creditcard_routes_1.default, login_routes_1.default);
app.listen(3000);
console.log('Server on port', 3000);
