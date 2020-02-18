"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_mysql_1 = __importDefault(require("promise-mysql"));
var keys_1 = __importDefault(require("./keys"));
var db = promise_mysql_1.default.createPool(keys_1.default.database);
db.getConnection()
    .then(function (connection) {
    db.releaseConnection(connection);
    console.log('DB conectada');
});
exports.default = db;
//# sourceMappingURL=database.js.map