export default async (req, res) => {
  try {

    res.json({envVars:process.env});
   
  }catch{
    res.status(500).json({ error: 'Error adding peace minutes' });

  }
};