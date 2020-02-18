"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var authController_1 = require("../controllers/authController");
router.post('/signup', authController_1.signup);
router.post('/signin', authController_1.signin);
router.get('/profile', authController_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map