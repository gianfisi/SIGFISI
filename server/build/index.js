"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
var eventosRoutes_1 = __importDefault(require("./routes/eventosRoutes"));
var usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.use('', indexRoutes_1.default);
        this.app.use('/api/eventos', eventosRoutes_1.default);
        this.app.use('/api/usuarios', usuariosRoutes_1.default);
        this.app.use('/api/auth', authRoutes_1.default);
    };
    Server.prototype.start = function () {
        this.app.listen(this.app.get('port'), function () {
            console.log('Serve on port 3000');
        });
    };
    return Server;
}());
var server = new Server();
server.start();
//# sourceMappingURL=index.js.map