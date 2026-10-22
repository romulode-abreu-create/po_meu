const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;
const calcularcomprimento = require('./calccom.js')
const calculartemperatura = require('./calctemp.js')
const calcularvelocidade = require('./calcvelo.js')

app.use(express.json());

app.get('/medicao', async (req, res) => {
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

app.get('/medicao/alta-velocidade', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM `medicoes` WHERE classificacao = "alta velocidade"');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({
      mensagem: "Erro Interno do Servidor",
      detalhes: error.message
    });
  }
})

app.get('/medicao/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.execute('SELECT * FROM `medicoes` WHERE `id`=?', [id]);
    res.status(200).json(rows[0]);

    if (rows.length === 0) {
      return res.status(404).json({
        mensagem: "não encontrado",
        detalhes: error.message
      });
    }

  } catch (error) {
    res.status(500).json({
      mensagem: "Erro Interno do Servidor",
      detalhes: error.message
    });
  }
})

app.post('/medicao', async (req, res) => {

  const { descricao, tipo, valor_original, unidade_original, } = req.body;
  if (!descricao || !tipo || !valor_original || !unidade_original) {
    return res.status(400).json({
      mensagem: "Verifique se todos os campos estão preenchidos",
      detalhes: error.message
    });
  }
  if (tipo == "temperatura") {
    const { valor_convertido, classificacao } = calculartemperatura(valor_original);
    const unidade_convertida = "fahrenheit"

    try {
      const [rows] = await db.execute('INSERT INTO `medicoes` (`descricao`,`tipo`,`valor_original`,`unidade_original`,`valor_convertido`,`unidade_convertida`,`classificacao`) VALUES (?,?,?,?,?,?,?);', [descricao, tipo, valor_original, unidade_original, valor_convertido, unidade_convertida, classificacao]);
      res.status(201).json({
        id: rows.insertId,
        descricao,
        tipo,
        valor_original,
        unidade_original,
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
  } else if (tipo == "comprimento") {
    const { valor_convertido, classificacao } = calcularcomprimento(valor_original)
    const unidade_convertida = "pés"

    try {
      const [rows] = await db.execute('INSERT INTO `medicoes` (`descricao`,`tipo`,`valor_original`,`unidade_original`,`valor_convertido`,`unidade_convertida`,`classificacao`) VALUES (?,?,?,?,?,?,?);', [descricao, tipo, valor_original, unidade_original, valor_convertido, unidade_convertida, classificacao]);

      res.status(201).json({
        id: rows.insertId,
        descricao,
        tipo,
        valor_original,
        unidade_original,
        valor_convertido,
        unidade_convertida,
        classificacao
      })
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro Interno do Servidor",
        detalhes: error.message
      });
    }
  } else if (tipo == "velocidade") {
    const { valor_convertido, classificacao } = calcularvelocidade(valor_original)
    const unidade_convertida = "m/s"

    try {
      const [rows] = await db.execute('INSERT INTO `medicoes` (`descricao`,`tipo`,`valor_original`,`unidade_original`,`valor_convertido`,`unidade_convertida`,`classificacao`) VALUES (?,?,?,?,?,?,?);', [descricao, tipo, valor_original, unidade_original, valor_convertido, unidade_convertida, classificacao]);

      res.status(201).json({
        id: rows.insertId,
        descricao,
        tipo,
        valor_original,
        unidade_original,
        valor_convertido,
        unidade_convertida,
        classificacao
      })
    } catch (error) {
      res.status(500).json({
        mensagem: "Erro Interno do Servidor",
        detalhes: error.message
      });
    }
  }
})



app.listen(port, () => {
  console.log(`funfando na porta:${port}`);
});