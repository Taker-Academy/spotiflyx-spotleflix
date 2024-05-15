const { google } = require('googleapis');
const toke = require("../../functionUtils/handlingToken");
const fetch = require('node-fetch');
const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const playlistId = "37i9dQZF1DWVuV87wUBNwc"

function sendError(message)
{
    const response = {
        ok: false,
        error: message,
    };
    return response;
}

function errorInBody(num, res)
{
    if (isNaN(num)) {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (num <= 0) {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
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

async function getPlaylistTracks(playlistId, accessToken, num) {
    const response = await fetch(`${SPOTIFY_API_BASE_URL}/playlists/${playlistId}/tracks?limit=${num}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    const data = await response.json();
    return data.items.map(item => {
        const track = item.track;
        return {
            title: track.name,
            artists: track.artists.map(artist => artist.name),
            album: track.album.name,
            trackUrl: track.external_urls.spotify,
            previewUrl: track.preview_url,
            uri: track.uri,
        };
    });
}

async function searchMusicFromPlaylist(playlistId, num, res) {
    try {
        const accessToken = await getAccessToken();
        const tracks = await getPlaylistTracks(playlistId, accessToken, num);
        return tracks;
    } catch (error) {
        res.status(500).json(sendError("Erreur interne du serveur."));
        console.error('Erreur lors de la récupération des pistes de la playlist :', error);
        return [];
    }
}


function sendResponse(videos)
{
    const response = {
        ok: true,
        data: videos,
    };
    return response;
}

module.exports.setGetPop = async (req, res) => {
    const tokId = req.headers.authorization;
    const tokenNID = tokId && tokId.split(' ')[1];
    const resTok = await toke.verifyToken(tokenNID);

    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        const num = parseInt(req.query.num) || 16;
        const errorBody = errorInBody(num, res);
        if (errorBody === 1) {
            return;
        }
        const resultSearch = await searchMusicFromPlaylist(playlistId, num, res);
        if (!resultSearch.length)
            return;
        res.status(200).json(sendResponse(resultSearch));
        return;
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};
