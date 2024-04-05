# Grep

Arquivo a ser executado: *main.js* - ./node main.js

- O arquivo **variaveis.js** contém as **variáveis** de controle da execução do programa. Inclusive, é lá na **CONSTANTE TERMO_BUSCA** que é definido qual o termo a ser buscado no algoritmo, que, por sua vez, é passado para a função map no arquivo *Map.js*, e, lá, **JÁ É CRIADO UM REGEX COM O TERMO_BUSCA** com as flags *gi*.

- O resultado final é o total de vezes que a palavra ou termo regex deu match nos arquivos. 