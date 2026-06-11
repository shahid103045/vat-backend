export default function handler(req, res) {
  if (req.url === '/api') {
    res.status(200).json({message: "I am blue HGGPS VAT backend is working"})
  } else {
    res.status(404).json({error: "Route not found"})
  }
}
