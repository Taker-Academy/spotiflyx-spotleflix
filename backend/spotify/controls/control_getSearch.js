const { google } = require('googleapis');
const toke = require("../../functionUtils/handlingToken");
const fetch = require('node-fetch');
const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

function sendError(message)
{
    const response = {
        ok: false,
        error: message,
    };
    return response;
}

function errorInBody(search, num, res)
{
    if (!search || typeof search !== "string") {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        console.log(search);
        return 1;
    }
    if (num) {
        if (isNaN(num)) {
            res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
            return 1;
        }
        if (num <= 0) {
            res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
            return 1;
        }
    }
    return 0;
}

async function getAccessToken() {
    const authString = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${authString}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    return data.access_token;
}

async function searchTracks(query, accessToken) {
    const response = await fetch(`${SPOTIFY_API_BASE_URL}/search?q=${encodeURIComponent(query)}&type=track`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    const data = await response.json();
    return data.tracks.items.map(item => {
        return {
            title: item.name,
            artists: item.artists.map(artist => artist.name),
            album: item.album.name,
            trackUrl: item.external_urls.spotify,
            previewUrl: item.preview_url
        };
    });
}

async function searchMusic(query, num, res) {
    try {
        const accessToken = await getAccessToken();
        const tracks = await searchTracks(query, accessToken);
        return tracks.slice(0, num);
    } catch (error) {
        res.status(500).json(sendError("Erreur interne du serveur."));
        console.error('Erreur lors de la recherche de pistes musicales :', error);
        return [];
    }
}

function sendResponse(musics)
{
    const response = {
        ok: true,
        data: musics,
    };
    return response;
}

module.exports.setGetSearch = async (req, res) => {
    const tokId = req.headers.authorization;
    const resTok = await toke.verifyToken(tokId);

    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        const search = req.query.search;
        const num = parseInt(req.query.num) || 16;
        const errorBody = errorInBody(search, num, res);
        if (errorBody === 1) {
            return;
        }
        const resultSearch = await searchMusic(search, num, res);
        if (!resultSearch.length)
            return;
        console.log(resultSearch);
        res.status(200).json(sendResponse(resultSearch));
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};