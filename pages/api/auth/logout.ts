import { NextApiRequest, NextApiResponse } from 'next';
import { withSessionRoute } from 'lib/session';
import { OkRespoonse } from 'lib/dto/responses/ok.response';
import { UnauthorizedError } from 'lib/dto/errors/unauthorized.error';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = req.session;
  if (!user) {
    res.status(401).json(new UnauthorizedError());
  }
  await req.session.destroy();
  res.send(new OkRespoonse);
};

export default withSessionRoute(login);
