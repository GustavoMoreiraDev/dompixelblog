import { createPerson, getPeople } from '../../../backend/model';
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      const { email, password } = req.body;
      try {
        const personId = await createPerson(email, password);
        res.status(201).json({ message: 'Usuario criado com sucesso!!'});
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro no servidor'});
      }
      break;
    case 'GET':
      try {
        const people = await getPeople();
        res.status(200).json(people);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro no servidor' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}