// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.json({ message: "Backend do InstaVerifier rodando 🚀" });
});

// Rota de exemplo para verificar usuário (fake)
app.post("/verify", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username é obrigatório" });
  }

  // Exemplo: só valida se tiver mais de 3 caracteres
  if (username.length > 3) {
    return res.json({ valid: true, username });
  } else {
    return res.json({ valid: false, username });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
