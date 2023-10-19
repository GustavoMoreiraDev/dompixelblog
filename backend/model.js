const db = require("./db");

function createPerson(email, password, nome) {
  const sql = `INSERT INTO usuarios (email, password, nome) VALUES (?, ?, ?)`;
  const params = [email, password, nome];
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) {
        if (err.code === "SQLITE_CONSTRAINT") {
          reject(new Error("Email já cadastrado"));
        } else {
          console.error(err.message);
          reject(err);
        }
      }
      const userId = this.lastID;
      const getUserSql = `SELECT * FROM usuarios WHERE id = ?`;
      db.get(getUserSql, [userId], (err, row) => {
        if (err) {
          console.error(err.message);
          reject(err);
        }
        resolve(row);
      });
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

function getUserById(id) {
  const sql = `SELECT * FROM usuarios WHERE id = ?`;
  return new Promise((resolve, reject) => {
    db.get(sql, [id], (err, row) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      resolve(row);
    });
  });
}

function updatePerson(id, email, password, nome) {
  const sql = `UPDATE usuarios SET email = ?, password = ?, nome = ? WHERE id = ?`;
  const params = [email, password, nome, id];
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

module.exports = { createPerson, getPeople, getUserById, updatePerson, deletePerson };