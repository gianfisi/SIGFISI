"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var SigfisiController = /** @class */ (function () {
    function SigfisiController() {
    }
    SigfisiController.prototype.index = function (req, res) {
        database_1.default.query('Describe usuario');
    };
    SigfisiController.prototype.create = function (req, res) {
        res.json({ text: 'creating a event' });
    };
    SigfisiController.prototype.update = function (req, res) {
        res.json({ text: 'updating a event' });
    };
    SigfisiController.prototype.delete = function (req, res) {
        res.json({ text: 'deleting a event' });
    };
    return SigfisiController;
}());
var sigfisiController = new SigfisiController();
exports.default = sigfisiController;
