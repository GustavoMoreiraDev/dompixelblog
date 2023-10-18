const db = require('./db');

function createPerson(email, password) {
  const sql = `INSERT INTO usuarios (email, password) VALUES (?, ?)`;
  const params = [email, password];
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      resolve(this.lastID);
    });
  });
}

function getPeople() {
  const sql = `SELECT * FROM usuarios`;
  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      resolve(rows);
    });
  });
}

function updatePerson(id, email, password) {
  const sql = `UPDATE usuarios SET email = ?, password = ? WHERE id = ?`;
  const params = [email, password, id];
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      resolve(this.changes);
    });
  });
}

function deletePerson(id) {
  const sql = `DELETE FROM usuarios WHERE id = ?`;
  const params = [id];
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      resolve(this.changes);
    });
  });
}

module.exports = { createPerson, getPeople, updatePerson, deletePerson };
