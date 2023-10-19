import { getPeople } from "../../backend/model";

export default async function handler(req, res) {
  const {
    method,
    body: { email, password },
  } = req;

  switch (method) {
    case "POST":
      try {
        const users = await getPeople();
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          res.status(200).json({ message: "Sucesso ao logar", id: user.id });
        } else {
          res.status(401).json({ error: "E-mail ou senha invalidos" });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro no Servidor" });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
