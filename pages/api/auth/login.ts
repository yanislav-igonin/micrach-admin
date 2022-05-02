import { getUser } from "lib/storage/users";
import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../../lib/session";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const {body} = req;
  const {username, password} = body;
  const user = getUser(username);
  if (!user) {
    res.status(401).send("User not found");
    return;
  }

  if (user.password !== password) {
    res.status(401).send("Invalid password");
    return;
  }

  req.session.user = { username };
  await req.session.save();
  res.send("OK");
};

export default withSessionRoute(login);
