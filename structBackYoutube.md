# Structure du Backend

## Auth

> Prefix: `/ytb`

### Endpoint [GET] `/search`

## Description

Cette route permet de récupérer les données d'une vidéo Youtube.

## Paramètres

### Header

- **Authorization (String, required):** Token JWT pour l'authentification.

### Endpoint

- **search (String, required):** Phrase de recherche
- **num (String):** Nombre de vidéo a renvoyer (8 par défaut)
- **requette:** /search?search=valeur1&num=valeur2

## Format de réponse (200 OK)

```json
{
    "ok": true,
    "data": {
        {
            "token": "eg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQzYWNmZWI0NjU3MTU0Yjg1Y2VjMyIsImlhdCI6MTcwMjExNjA0NywiZXhwIjoxNzAyMjAyNDQ3fQ.hQ2Om2eiNVPquH9npiCC9hOUy3hoizsFVt8QACCPolU",
            "title": "SQUEEZIE - TOP 1",
            "description": "On veut tous faire top 1 sur Fortnite. Mais c'est pas donné à tout le monde. ABONNE-TOI !",
            "thumbnailUrl": "https://i.ytimg.com/vi/uGSu6mhk3RQ/default.jpg",
            "videoUrl": "https://www.youtube.com/watch?v=uGSu6mhk3RQ",
            "views": "47982379"
        }
    }
}
```

## Réponse possible

- **200 OK:** Données des vidéos bien importée.
- **400 Bad Request:** Mauvaise requête, paramètres manquants ou invalides.
- **401 Bad Token:** Mauvais token JWT.
- **500 Internal Server Error:** Erreur interne du serveur.
---

### Endpoint [GET] `/popular`

## Description

Cette route permet de récupérer les données d'une vidéo Youtube.

## Paramètres

### Header

- **Authorization (String, required):** Token JWT pour l'authentification.

### Endpoint

- **codeRegion (String):** Region ou trouver les vidéos les plus populaire (par défaut FR)
- **num (String):** Nombre de vidéo a renvoyer (8 par défaut)
- **requette:** /search?codeRegion=valeur1&num=valeur2

## Exemple de Requête

## Format de réponse (200 OK)

```json
{
    "ok": true,
    "data": {
        {
            "token": "eg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQzYWNmZWI0NjU3MTU0Yjg1Y2VjMyIsImlhdCI6MTcwMjExNjA0NywiZXhwIjoxNzAyMjAyNDQ3fQ.hQ2Om2eiNVPquH9npiCC9hOUy3hoizsFVt8QACCPolU",
            "title": "SQUEEZIE - TOP 1",
            "description": "On veut tous faire top 1 sur Fortnite. Mais c'est pas donné à tout le monde. ABONNE-TOI !",
            "thumbnailUrl": "https://i.ytimg.com/vi/uGSu6mhk3RQ/default.jpg",
            "videoUrl": "https://www.youtube.com/watch?v=uGSu6mhk3RQ",
            "views": "47982379"
        }
    }
}
```

## Réponse possible

- **200 OK:** Données des vidéos bien importée.
- **400 Bad Request:** Mauvaise requête, paramètres manquants ou invalides.
- **401 Bad Token:** Mauvais token JWT.
- **500 Internal Server Error:** Erreur interne du serveur.
---