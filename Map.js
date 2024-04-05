const { workerData, parentPort } = require("worker_threads");
const fs = require("fs");
const { TERMO_BUSCA } = require("./variaveis");

const PATH_INTERMEDIARIO = "./intermediario.txt";

const MapFunction = (arquivo, palavra) => {
  const conteudo = fs.readFileSync(arquivo, "utf8", (err) => {
    if (err) {
      throw new Error("Erro ao ler o arquivo: " + err.message);
    }
  });
  const regex = new RegExp(palavra, "gi");
  const linhas = conteudo.split(/\n/);
  for (let i = 0; i < linhas.length; i++) {
    let conteudoLinha = linhas[i].split(/\n/);
    let termoBuscado = conteudoLinha.toString().match(regex);
    if (termoBuscado) {
      let linha = `${String(arquivo).slice(2)} 1`;
      if (i !== linhas.length - 1) {
        linha += "\n";
      }
      fs.appendFileSync(PATH_INTERMEDIARIO, linha, (err) => {
        if (err) {
          throw new Error(
            "Erro ao escrever no arquivo intermediário: " + err.message
          );
        }
      });
    }
  }
};

MapFunction(workerData.input, TERMO_BUSCA);
parentPort.postMessage({ input: workerData.input, status: "concluido" });
