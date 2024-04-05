const fs = require("fs");

const { PATH_INTERMEDIARIO, PATH_FINAL } = require("./variaveis");

const ReduceFunction = () => {
  console.log("Chamou reduce")
  fs.writeFileSync(PATH_FINAL, "", (err) => {
    if (err) {
      throw new Error("Erro ao escrever o arquivo: " + err.message);
    }
  });

  const conteudo = fs.readFileSync(PATH_INTERMEDIARIO, "utf8");
  const linhas = conteudo.split(/\n/);

  const contagem = {};

  linhas.forEach((linha) => {
    const [palavra, ocorrencias] = linha.split(" ");
    if (contagem[palavra]) {
      contagem[palavra] += parseInt(ocorrencias);
    } else {
      contagem[palavra] = parseInt(ocorrencias);
    }
  });

  Object.entries(contagem).forEach(([palavra, ocorrencias]) => {
    fs.appendFileSync(PATH_FINAL, `${palavra}: ${ocorrencias}\n`, (err) => {
      if (err) {
        throw new Error("Erro ao escrever o arquivo: " + err.message);
      }
    });
  });
};

module.exports = ReduceFunction;
