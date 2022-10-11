import { NextApiRequest, NextApiResponse } from "next";
import { trpc } from "../../utils/trpc";

export default function login(req: NextApiRequest, res: NextApiResponse) {

    const {username, password} = req.body;
    if(!username || !password) {
        res.status(400).send("Username is blank");
    }
    const postUser = trpc.useMutation(["example.post-user"]);
    

    res.redirect(`/profile/${username}`);
}