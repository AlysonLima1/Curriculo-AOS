import express from "express";
import { pool } from "../db.js";

const router = express.Router();

// Listar todas as pessoas
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM pessoas ORDER BY id");
  res.json(result.rows);
});

// Buscar pessoa por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("SELECT * FROM pessoas WHERE id = $1", [id]);
  res.json(result.rows[0]);
});

// Criar pessoa
router.post("/", async (req, res) => {
  const { nome, email, telefone, curso, periodo, instituicao, experiencia } = req.body;
  await pool.query(
    "INSERT INTO pessoas (nome, email, telefone, curso, periodo, instituicao, experiencia) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [nome, email, telefone, curso, periodo, instituicao, experiencia]
  );
  res.send("Pessoa cadastrada com sucesso!");
});

// Atualizar pessoa
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, curso, periodo, instituicao, experiencia } = req.body;
  await pool.query(
    "UPDATE pessoas SET nome=$1, email=$2, telefone=$3, curso=$4, periodo=$5, instituicao=$6, experiencia=$7 WHERE id=$8",
    [nome, email, telefone, curso, periodo, instituicao, experiencia, id]
  );
  res.send("Pessoa atualizada com sucesso!");
});

// Deletar pessoa
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM pessoas WHERE id = $1", [id]);
  res.send("Pessoa deletada com sucesso!");
});

export default router;

// Criar pessoa
router.post("/", async (req, res) => {
  try {
    const { nome, email, telefone, curso, periodo, instituicao, experiencia } = req.body;

    console.log("Recebido do Postman:", req.body);

    await pool.query(
      "INSERT INTO pessoas (nome, email, telefone, curso, periodo, instituicao, experiencia) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [nome, email, telefone, curso, periodo, instituicao, experiencia]
    );

    res.send("Pessoa cadastrada com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir pessoa:", error);
    res.status(500).send("Erro ao cadastrar pessoa");
  }
});

