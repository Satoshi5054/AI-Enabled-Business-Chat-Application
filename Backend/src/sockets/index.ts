import { Server } from "socket.io"
import { prisma } from "../prisma/client.js"

export const initSocket = (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("join_room", (roomId: string) => {
      socket.join(roomId);
    });

    socket.on("send_message", async (payload) => {
      const { content, senderId, roomId } = payload;

      const message = await prisma.message.create({
        data: {
          content,
          senderId,
          roomId,
        },
      });

      io.to(roomId).emit("receive_message", message);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
};
