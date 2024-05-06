const { google } = require('googleapis');
const toke = require("../../../functionUtils/handlingToken");

const youtube = google.youtube({
  version: 'v3',
  auth: process.env.C_YTB_API,
});

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

async function getVideoDetails(videoId)
{
    console.log("tesst ==> " );
    try {
        const response = await youtube.videos.list({
            part: 'statistics',
            id: videoId,
        });
        const videoDetails = response.data.items[0].statistics;
        const views = videoDetails.viewCount;

        return views;
    } catch (error) {
        return -1;
    }
}

async function searchVideos(searchs, num, res)
{
    try {
        const response = await youtube.search.list({
            part: 'snippet',
            q: searchs,
            maxResults: num,
        });

        const videos = await Promise.all(response.data.items.map(async (item) => {
            const title = item.snippet.title;
            const description = item.snippet.description;
            const thumbnailUrl = item.snippet.thumbnails.default.url;
            const videoUrl = `https://www.youtube.com/watch?v=${item.id.videoId}`;
            console.log("id ==> " + item.id.videoId);
            const views = await getVideoDetails(item.id.videoId);
            if (views === -1) {
                return [];
            }
            return {title, description, thumbnailUrl, videoUrl, views};
        }));
        return videos;
    } catch (error) {
        res.status(500).json(sendError("Erreur interne du serveur."));
        console.error('Erreur lors de la recherche de vidéos :', error);
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

module.exports.setGetSearch = async (req, res) => {
    const tokId = req.headers.authorization;
    const tokenNID = tokId && tokId.split(' ')[1];
    const resTok = await toke.verifyToken(tokenNID);

    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        const search = req.query.search;
        const num = parseInt(req.query.num) || 8;
        const errorBody = errorInBody(search, num, res);
        if (errorBody === 1) {
            return;
        }
        const resultSearch = await searchVideos(search, num, res);
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