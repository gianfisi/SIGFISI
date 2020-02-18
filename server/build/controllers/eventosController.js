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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var EventosController = /** @class */ (function () {
    function EventosController() {
    }
    EventosController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT * FROM eventos e INNER JOIN solicitudes s ON s.id_solicitud = e.id_solicitud where s.estado = "aprobado"')];
                    case 1:
                        eventos = _a.sent();
                        res.json(eventos);
                        return [2 /*return*/];
                }
            });
        });
    };
    EventosController.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('SELECT id_evento, titulo, descripcion, imagen, categoria, e.nom_expositor, e.ape_expositor, fecha_inicio, lugar FROM eventos e INNER JOIN aulas a ON e.id_aula = e.id_aula INNER JOIN conferencias c on e.id_conferencia = c.id_conferencia INNER JOIN solicitudes s ON e.id_solicitud = s.id_solicitud WHERE id_evento = ?', [id])];
                    case 1:
                        eventos = _a.sent();
                        if (eventos.length > 0) {
                            return [2 /*return*/, res.json(eventos[0])];
                        }
                        res.status(404).json({ text: "El evento no existe" });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventosController.prototype.getTitulo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var titulo, eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        titulo = req.params.titulo;
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM eventos WHERE titulo = ?', [titulo])];
                    case 1:
                        eventos = _a.sent();
                        if (eventos.length > 0) {
                            return [2 /*return*/, res.json(eventos[0])];
                        }
                        res.status(404).json({ text: "El evento no existe" });
                        return [2 /*return*/];
                }
            });
        });
    };
    // public async create(req: Request ,res: Response): Promise<void>{
    //     await db.query('INSERT INTO eventos set ?',[req.body]);
    //     res.json({message: 'evento guardado'});
    // }
    EventosController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('INSERT INTO eventos(titulo, descripcion, imagen, categoria, nom_expositor, ape_expositor, id_aula, id_conferencia, id_solicitud) values (?,?,?,?,?,?,?,?,?)', [req.body.titulo, req.body.descripcion, req.body.imagen, req.body.categoria, req.body.nom_expositor, req.body.ape_expositor, req.body.id_aula, req.body.id_conferencia, req.body.id_solicitud])];
                    case 1:
                        _a.sent();
                        // await db.query('INSERT INTO solicitudes(estado) values ("proceso")');
                        // const solicitud = await db.query('SELECT id_solicitud FROM solicitudes ORDER BY id_solicitud DESC LIMIT 1;')
                        // await db.query('INSERT INTO conferencias(fecha_inicio, fecha_fin) values (?,?)',[req.body.fecha_inicio,req.body.fecha_fin]);
                        // const conferencia = await db.query('SELECT id_conferencia FROM conferencias ORDER BY id_conferencia DESC LIMIT 1;')
                        // await db.query('INSERT INTO eventos(titulo, descripcion, imagen, categoria, nom_expositor, ape_expositor, id_aula, id_conferencia, id_solicitud) values (?,?,?,?,?,?,?,?,?)',[req.body.titulo, req.body.descripcion,req.body.imagen,req.body.categoria,req.body.nom_expositor, req.body.ape_expositor,req.body.id_aula,conferencia,solicitud]);
                        res.json({ message: "evento creado" });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventosController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('UPDATE eventos set ? WHERE id =?', [req.body, id])];
                    case 1:
                        _a.sent();
                        res.json({ message: 'El evento fue actualizado' });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventosController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('DELETE * FROM eventos WHERE id = ?', [id])];
                    case 1:
                        eventos = _a.sent();
                        res.json({ message: 'El evento fue eliminado' });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventosController.prototype.aprobar = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('UPDATE solicitudes set estado = "aprobado" WHERE id_solicitud = ?', [id])];
                    case 1:
                        eventos = _a.sent();
                        res.json({ message: 'El evento fue aprobado' });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventosController.prototype.desaprobar = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('UPDATE solicitudes set estado = "desaprobado" WHERE id_solicitud = ?', [id])];
                    case 1:
                        eventos = _a.sent();
                        res.json({ message: 'El evento fue desaprobado' });
                        return [2 /*return*/];
                }
            });
        });
    };
    EventosController.prototype.solicitudes = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var eventos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT id_evento, titulo, descripcion, imagen, categoria, e.nom_expositor, e.ape_expositor, fecha_inicio, lugar, estado, e.id_solicitud FROM eventos e INNER JOIN aulas a ON a.id_aula = e.id_aula INNER JOIN conferencias c on e.id_conferencia = c.id_conferencia INNER JOIN solicitudes s ON e.id_solicitud = s.id_solicitud WHERE estado = "proceso"')];
                    case 1:
                        eventos = _a.sent();
                        res.json(eventos);
                        return [2 /*return*/];
                }
            });
        });
    };
    return EventosController;
}());
var eventosController = new EventosController();
exports.default = eventosController;
//# sourceMappingURL=eventosController.js.map