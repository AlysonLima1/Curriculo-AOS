import express from "express";
import { pool } from "../db.js";

const router = express.Router();

// Listar todas as experiências
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM experiencias ORDER BY id");
  res.json(result.rows);
});

// Buscar experiências de uma pessoa
router.get("/pessoa/:pessoa_id", async (req, res) => {
  const { pessoa_id } = req.params;
  const result = await pool.query(
    "SELECT * FROM experiencias WHERE pessoa_id = $1",
    [pessoa_id]
  );
  res.json(result.rows);
});

// Criar experiência
router.post("/", async (req, res) => {
  const { pessoa_id, cargo, empresa, descricao } = req.body;
  await pool.query(
    "INSERT INTO experiencias (pessoa_id, cargo, empresa, descricao) VALUES ($1, $2, $3, $4)",
    [pessoa_id, cargo, empresa, descricao]
  );
  res.send("Experiência cadastrada com sucesso!");
});

// Atualizar experiência
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { cargo, empresa, descricao } = req.body;
  await pool.query(
    "UPDATE experiencias SET cargo=$1, empresa=$2, descricao=$3 WHERE id=$4",
    [cargo, empresa, descricao, id]
  );
  res.send("Experiência atualizada com sucesso!");
});

// Deletar experiência
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM experiencias WHERE id = $1", [id]);
  res.send("Experiência deletada com sucesso!");
});

export default router;
