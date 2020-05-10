import mongoose from 'mongoose';
import http from 'http';
import app from './app';
import { setupWebsocket } from './websocket';

mongoose.connect(process.env.SERVER_TOKEN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const server = http.Server(app);
setupWebsocket(server);
server.listen(3333);
