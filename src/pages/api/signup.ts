import { NextApiRequest, NextApiResponse } from "next";
import { trpc } from "../../utils/trpc";


export default function signup(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "POST"){
        res.status(400).send({message: "Not a post request. Sorry!!"});
    }
   
    res.status(200).send({message: "User Created!"});
}