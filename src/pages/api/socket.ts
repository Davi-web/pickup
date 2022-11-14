import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";
import messageHandler from "../../utils/messageHandler";

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
  }
  
  interface InterServerEvents {
    ping: () => void;
  }
  
  interface SocketData {
    name: string;
    age: number;
  }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (res.socket.server.io) {
        console.log("Already set up");
        res.end();
        return;
      }
    
      const io = new Server<ClientToServerEvents,
      ServerToClientEvents,
      InterServerEvents,
      SocketData>(res.socket.server);
      res.socket.server.io = io;
    
      const onConnection = (socket) => {
        messageHandler(io, socket);
      };
    
      // Define actions inside
      io.on("connection", onConnection);
    
      console.log("Setting up socket");
      res.end();
 }
