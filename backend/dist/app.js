"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const capturarExcecoes_1 = require("./infraestrutura/middlewares/capturarExcecoes");
const capturarErro404_1 = require("./infraestrutura/middlewares/capturarErro404");
const imprimirLogRequisicoes_1 = require("./infraestrutura/middlewares/imprimirLogRequisicoes");
const rotas_1 = require("./infraestrutura/rotas");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(imprimirLogRequisicoes_1.imprimirLogRequisicoes);
app.use("/api", rotas_1.rotas);
app.use(capturarExcecoes_1.capturarExcecoes);
app.use(capturarErro404_1.capturarErro404);
