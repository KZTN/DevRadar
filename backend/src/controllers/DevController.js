import api from '../services/api';
import Dev from '../models/Dev';
import parseStringAsArray from '../utils/parseStringAsArray';
import { findConnections, sendMessage } from '../websocket';

module.exports = {
    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },

    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;
        const dev = await Dev.findOne({ github_username });
        if (dev) {
            return res.json(dev);
        }
        const techsArray = parseStringAsArray(techs);
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
        const githubResponse = await api.get(`/users/${github_username}`);
        const { name = login, avatar_url, bio } = githubResponse.data;
        const devResponse = await Dev.create({
            github_username,
            name,
            bio,
            avatar_url,
            techs: techsArray,
            location,
        });
        const sendSocketMessageTo = findConnections(
            { latitude, longitude },
            techsArray
        );
        sendMessage(sendSocketMessageTo, 'new-dev', dev);
        return res.json(devResponse);
    },
};
