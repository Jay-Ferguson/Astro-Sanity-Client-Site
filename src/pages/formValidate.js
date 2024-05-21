
import Botpoison from "@botpoison/node";

// or const Botpoison = require("@botpoison/node")

// 2. Create a new instance with your secret key
const botpoison = new Botpoison({
  secretKey: BOTPOISON_SECRET,
});

server.post('/message', async (req, res) => {
  const { message, _botpoison } = req.body;
  // 3. Verify the solution
  const { ok } = await botpoison.verify(_botpoison );
  if(!ok) {
    throw new Error('Invalid Botpoison solution')
    let errorMessage = 'Invalid Botpoison solution';
  }
  else {
   let verificationStatus = 'success';
  }

const verificationResponse = {
     status: verificationStatus,
     message: errorMessage || 'Verifcation successful',
  };
  res.setHeader('Content-Type', 'application/json');
  res.json(verificationResponse);
})