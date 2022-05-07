import { NextApiRequest, NextApiResponse } from 'next';
import { WrongCredentialsError } from 'lib/dto/errors/wrong-credentials.error';
import { getUser } from 'lib/storage/users';
import { withSessionRoute } from 'lib/session';
import { OkRespoonse } from 'lib/dto/responses/ok.response';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { username, password } = body;
  const user = getUser(username);
  if (!user) {
    res.status(401).json(new WrongCredentialsError());
    return;
  }

  if (user.password !== password) {
    res.status(401).send(new WrongCredentialsError());
    return;
  }

  req.session.user = { username };
  await req.session.save();
  res.send(new OkRespoonse());
};

export default withSessionRoute(login);
