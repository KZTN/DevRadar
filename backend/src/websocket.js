import socketio from 'socket.io';
import parseStringAsArray from './utils/parseStringAsArray';
import CalculateDistance from './utils/CalculateDistance';

let io;
const connections = [];

exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('connection', (socket) => {
        console.log(socket.id);
        const { latitude, longitude, techs } = socket.handshake.query;
        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs),
        });
    });
};

exports.findConnections = (coordinates, techs) => {
    return connections.filter((connection) => {
        return (
            CalculateDistance(coordinates, connection.coordinates) < 10 &&
            connection.techs.some((item) => techs.includes(item))
        );
    });
};

exports.sendMessage = (to, message, data) => {
    to.forEach((connection) => {
        io.to(connection.id).emit(message, data);
    });
};
