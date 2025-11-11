import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pessoasRoutes from "./routes/pessoas.js";
import experienciasRoutes from "./routes/experiencias.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de Currículo AOS funcionando!");
});

app.use("/pessoas", pessoasRoutes);
app.use("/experiencias", experienciasRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

const app = express();
app.use(express.json()); // ← ESSENCIAL para o POST funcionar

app.use("/pessoas", pessoasRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando na porta 3000");
});

