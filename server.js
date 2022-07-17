const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.static("./index.html"));

app.listen(PORT, () => {
  console.log(`Подключаюсь к ${PORT}!`);
});
