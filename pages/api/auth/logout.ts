import { NextApiRequest, NextApiResponse } from 'next';
import { WrongCredentialsError } from 'lib/errors/wrong-credentials.error';
import { withSessionRoute } from 'lib/session';
import { OkRespoonse } from 'lib/api/auth/common';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = req.session;
  if (!user) {
    res.status(401).json(new WrongCredentialsError());
  }
  await req.session.destroy();
  res.send(new OkRespoonse);
};

export default withSessionRoute(login);
