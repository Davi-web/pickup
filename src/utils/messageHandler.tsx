const messageHandler = (io:any, socket:any ) => {
    const createdMessage = (msg:any) => {
      socket.broadcast.emit("newIncomingMessage", msg);
    };
  
    socket.on("createdMessage", createdMessage);
    
    socket.on("disconnect", () => {
      socket.off("createdMessage", createdMessage);
    }
    );
  };
export default messageHandler;