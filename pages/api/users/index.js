import { createPerson, getPeople } from "../../../backend/model";

export default async function handler(req, res) {
  const {
    method,
    body: { email, password, nome },
  } = req;

  switch (method) {
    case "POST":
      try {
        const users = await getPeople();
        const user = users.find((u) => u.email === email);
        if (user) {
          res.status(201).json({ message: "Email já cadastrado" });
        } else {
          const personId = await createPerson(email, password, nome);
          res.status(201).json({ message: "Usuário criado com sucesso" });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro no servidor" });
      }
      break;
    case "GET":
      try {
        const people = await getPeople();
        res.status(200).json(people);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro no servidor" });
      }
      break;
    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
