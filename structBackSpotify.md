# Structure du Backend

## Auth

> Prefix: `/spotify`

### Endpoint [GET] `/search`

## Description

Cette route permet de récupérer les musiques en fonction d'une recherche.

## Paramètres

### Header

- **Authorization (String, required):** Token JWT pour l'authentification.

### Endpoint

- **search (String, required):** Phrase de recherche
- **num (String):** Nombre de vidéo a renvoyer (16 par défaut)
- **requette:** /search?search=valeur1&num=valeur2

## Format de réponse (200 OK)

```json
{
    "ok": true,
    "data": {
        {
            "token": "eg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQzYWNmZWI0NjU3MTU0Yjg1Y2VjMyIsImlhdCI6MTcwMjExNjA0NywiZXhwIjoxNzAyMjAyNDQ3fQ.hQ2Om2eiNVPquH9npiCC9hOUy3hoizsFVt8QACCPolU",
            "title": "'We Fell In Love In October'",
            "artists": [ "'Ricky Jamaraz'" ],
            "album": "'We Fell In Love In October'",
            "trackUrl": "'https://open.spotify.com/track/0eZfgR3uXrk7X9Gt6zgVN3'",
            "previewUrl": "'https://p.scdn.co/mp3-preview/45485573b59f31dadd79e61e70c21f2f026baf49?cid=08747758e9484e119c9997ef5ff73020'"
        }
    }
}
```

## Réponse possible

- **200 OK:** Données des musiques bien importée.
- **400 Bad Request:** Mauvaise requête, paramètres manquants ou invalides.
- **401 Bad Token:** Mauvais token JWT.
- **500 Internal Server Error:** Erreur interne du serveur.
---

### Endpoint [GET] `/popular`

## Description

Cette route permet de récupérer les musiques de la playlist Hit du Moment.

## Paramètres

### Header

- **Authorization (String, required):** Token JWT pour l'authentification.

### Endpoint

- **num (String):** Nombre de musique a renvoyer (16 par défaut)
- **requette:** /search?num=valeur2

## Exemple de Requête

## Format de réponse (200 OK)

```json
{
    "ok": true,
    "data": {
        {
            "title": "Fortnight (feat. Post Malone)",
            "artists": [
                "Taylor Swift",
                "Post Malone"
            ],
            "album": "THE TORTURED POETS DEPARTMENT",
            "trackUrl": "https://open.spotify.com/track/2OzhQlSqBEmt7hmkYxfT6m",
            "previewUrl": null
        },
    }
}
```

## Réponse possible

- **200 OK:** Données des musiques bien importée.
- **400 Bad Request:** Mauvaise requête, paramètres manquants ou invalides.
- **401 Bad Token:** Mauvais token JWT.
- **500 Internal Server Error:** Erreur interne du serveur.
---