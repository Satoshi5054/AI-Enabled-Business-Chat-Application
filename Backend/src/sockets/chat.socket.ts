import { Server, Socket } from "socket.io";
import {prisma} from "../prisma/client.js";

export const chatSocket = (io: Server, socket: Socket) =>{
    socket.on("join_room", async ({ chatId, userId })=>{
        try{
            const isMember = await prisma.chatMember.findUnique({
                where:{
                    userId_chatId: {
                        userId,
                        chatId
                    }
                }
            })
        }catch(error){
            console.error("Error checking membership:", error);
            return;
        }
    })
}