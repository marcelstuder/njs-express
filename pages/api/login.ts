import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const SIGNING_KEY = 'svblhwlqweroshdfoasdfaTASDFjvaksdf';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error');
    return;
  }

  const { username, password } = req.body;
  res.json({ 
    token: jwt.sign({
      username,
      admin: username === 'admin' && password === 'admin'
    }, SIGNING_KEY)
  });
}
