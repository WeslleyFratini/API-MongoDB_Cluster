const app = require("@app");
const config = require("@config");

module.exports = (err) => {
  console.log("Erro ao conectar no banco de dados");

  app.listen(config.app.port, (err) => {
    if (err) {
      return console.log("erro");
    }
    console.log(`Iniciou em http://localhost:${config.app.port}`);
  });
};
