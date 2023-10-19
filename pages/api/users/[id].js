import { getUserById, updatePerson, deletePerson } from "../../../backend/model";

export default async function handler(req, res) {

  const { query: { id }, method, body: { email, password, nome }} = req;

  switch (method) {
    case "GET":
      try {
        const user = await getUserById(id);
        res.status(200).json(user);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro no servidor"});
      }
      break;
    case "PUT":
      try {
        const changes = await updatePerson(id, email, password, nome);
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
