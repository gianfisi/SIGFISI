"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuariosController_1 = __importDefault(require("../controllers/usuariosController"));
var UsuariosRoutes = /** @class */ (function () {
    function UsuariosRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    UsuariosRoutes.prototype.config = function () {
        this.router.get('/', usuariosController_1.default.index);
        // this.router.post('/', usuariosController.create);
    };
    return UsuariosRoutes;
}());
var usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
//# sourceMappingURL=usuariosRoutes.js.map