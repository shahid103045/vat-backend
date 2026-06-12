
export default function handler(req, res) {
  const vat = req.query.vat;
  
  // Test VAT number for HMRC
  if (vat === 'GB999973') {
    return res.json({
      name: 'HMRC Test Company Ltd',
      address: '123 Test Street, London, UK',
      status: 'Active',
      source: 'Dummy Test Data - Not Real HMRC'
    });
  }
}
}
