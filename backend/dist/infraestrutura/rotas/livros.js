"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotasLivros = void 0;
const LivrosController_1 = require("../controllers/LivrosController");
const express_1 = require("express");
const rotasLivros = (0, express_1.Router)();
exports.rotasLivros = rotasLivros;
const livrosController = new LivrosController_1.LivrosController();
rotasLivros.get("/", livrosController.buscarTodos.bind(livrosController));
rotasLivros.get("/:isbn", livrosController.buscarLivroPorIsbn.bind(livrosController));
rotasLivros.post("/", livrosController.cadastrarNovoLivro.bind(livrosController));
rotasLivros.patch("/:isbn", livrosController.atualizarLivro.bind(livrosController));
rotasLivros.delete("/:isbn", livrosController.deletarLivro.bind(livrosController));
