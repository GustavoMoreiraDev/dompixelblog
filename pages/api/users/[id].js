import { updatePerson, deletePerson } from "../../../backend/model";

export default async function handler(req, res) {

  const { query: { id }, method, body: { email, password, nome, avatar }} = req;

  switch (method) {
    case "PUT":
      try {
        const changes = await updatePerson(id, email, password, nome, avatar);
        res.status(200).json({ message: 'Usuario atualizado com sucesso!!'});
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro no servidor"});
      }
      break;
    case "DELETE":
      try {
        const changes = await deletePerson(id);
        res.status(200).json({ message: 'Usuario excluido com sucesso!!'});
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro no Servidor"});
      }
      break;
    default:
      res.setHeader("Allow", ["PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
