import { NextApiRequest, NextApiResponse } from "next";

export default function login(req: NextApiRequest, res: NextApiResponse) {

    const {username, password} = req.body;
    if(!username || !password) {
        res.status(400).send("Username is blank");
    }
    res.redirect(`/profile/${username}`);
}