"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sigfisiController_1 = __importDefault(require("../controllers/sigfisiController"));
var SigfisiRoutes = /** @class */ (function () {
    function SigfisiRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    SigfisiRoutes.prototype.config = function () {
        this.router.get('/', sigfisiController_1.default.index);
        this.router.post('/', sigfisiController_1.default.create);
        this.router.put('/:id', sigfisiController_1.default.update);
        this.router.delete('/:id', sigfisiController_1.default.delete);
    };
    return SigfisiRoutes;
}());
var sigfisiRoutes = new SigfisiRoutes();
exports.default = sigfisiRoutes.router;
