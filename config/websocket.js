const { Server} = require('socket.io')
const http = require("http")
const express = require("express");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Client connected');
  
    // Handle message events
    socket.on('message', async(data) => {
      console.log('Received message:', data);
  
     //save message
     try {
        // const message = await strapi.entity('message').create({
        //     message: data, // Set the message content
        //   });
      
        //   console.log('Message created:', message);
         // Echo the message back to the client
      socket.emit('message', data);
     } catch (error) {
        
     }
  
     
    });
  });

server.listen(3001, () => {
    console.log('server running at http://localhost:3000');
  });
  
  