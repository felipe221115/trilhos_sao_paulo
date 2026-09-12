export default async function handler(req, res) {
  const q = req.query.q;

  if (!q) {
    return res.status(400).json({
      error: "Digite algo para pesquisar."
    });
  }

  return res.status(200).json({
    resposta: `Pesquisa recebida: ${q}`
  });
}
