const sqlite3 = require('sqlite3').verbose();

const DB_PATH = './backend/db.sqlite';

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) { console.error(err.message); throw err}
  // console.log('Conexão com Banco realizada com sucesso!!');
});
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      nome TEXT
    )
  `);
});

module.exports = db;