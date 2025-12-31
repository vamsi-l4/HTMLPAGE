let latestLocation = null;

export default function handler(req, res) {
  if (req.method === "POST") {
    latestLocation = req.body;
    return res.status(200).json({ success: true });
  }

  if (req.method === "GET") {
    if (!latestLocation) {
      return res.status(404).json({ error: "No location yet" });
    }
    return res.status(200).json(latestLocation);
  }

  res.status(405).end();
}
