const { google } = require('googleapis');

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

function errorInBody(body, res)
{
    if (!(body)) {
        return 0;
    }
    if (typeof body !== "object") {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (body.num) {
        if (typeof body.num !== "string") {
            res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
            return 1;
        }
        const num = parseInt(body.num)
        if (isNaN(num)) {
            res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
            return 1;
        }
        if (num <= 0) {
            res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
            return 1;
        }
    }
    if (body.regionCode) {
        if(typeof body.regionCode !== "string") {
            res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
            return 1;
        }
    }
    return 0;
}

async function getVideoDetails(videoId, res)
{
    try {
        const response = await youtube.videos.list({
            part: 'statistics',
            id: videoId,
        });
        const videoDetails = response.data.items[0].statistics;
        const views = videoDetails.viewCount;

        return views;
    } catch (error) {
        res.status(500).json(sendError("Erreur interne du serveur."));
        console.error('Erreur lors de la récupération des détails de la vidéo :', error);
        return -1;
    }
}

async function searchVideos(regionCode, num, res)
{
    try {
        const response = await youtube.search.list({
            part: 'snippet',
            chart: 'mostPopular',
            regionCode: regionCode,
            maxResults: num,
        });

        const videos = await Promise.all(response.data.items.map(async (item) => {
            const title = item.snippet.title;
            const description = item.snippet.description;
            const thumbnailUrl = item.snippet.thumbnails.default.url;
            const videoUrl = `https://www.youtube.com/watch?v=${item.id.videoId}`;
            const views = await getVideoDetails(item.id.videoId, res);
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

module.exports.setGetPop = async (req, res) => {
    const tokId = req.headers.authorization;
    const tokenNID = tokId && tokId.split(' ')[1];
    const resTok = await toke.verifyToken(tokenNID);

    const body = req.body;
    var num = 8;
    var r_code = "FR";
    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        const errorBody = errorInBody(body, res);
        if (errorBody === 1) {
            return;
        }
        if (body.num) {
            num = parseInt(body.num);
        }
        if (body.regionCode) {
            num = body.regionCode;
        }
        const resultSearch = await searchVideos(r_code, num, res);
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
