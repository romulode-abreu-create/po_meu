const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;

// Middleware para interpretar requisições em formato JSON
app.use(express.json());

app.get('/atividade', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM `medicoes`');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({
      mensagem: "Erro Interno do Servidor",
      detalhes: error.message
    });
  }
})

app.post('/atividade', async (req, res) => {
  const { descricao, tipo, valor_original, unidade_original,  } = req.body;
  if (!descricao || !tipo || !valor_original || !unidade_original) {
    return res.status(400).json({
      mensagem: "Verifique se todos os campos estão preenchidos",
      detalhes: error.message
    });
  }
  try {
    const [rows] = await db.execute('INSERT INTO `medicoes` (`id`,`descricao`,`tipo`,`valor_original`,`unidade_original`,`valor_convertido`,`unidade_convertida`,`classificacao`) VALUES (?,?,?,?,?,?,?,?);', [`id`,`descricao`,`tipo`,`valor_original`,`unidade_original`,`valor_convertido`,`unidade_convertida`,`classificacao`]);
    res.status(201).json({
        id:rows.insertId,
        descricao,
        tipo,
        valor_original,
        valor_convertido,
        unidade_convertida,
        classificacao
      });
  } catch (error) {
    res.status(500).json({
      mensagem: "Erro Interno do Servidor",
      detalhes: error.message
    });
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando com sucesso em http://localhost:${port}`);
});