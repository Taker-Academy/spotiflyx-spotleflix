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
- **num (String):** Nombre de vidéo a renvoyer (8 par défaut)
- **requette:** /search?search=valeur1&num=valeur2

## Format de réponse (200 OK)

```json
{
    "ok": true,
    "data": {
        {
            "token": "eg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQzYWNmZWI0NjU3MTU0Yjg1Y2VjMyIsImlhdCI6MTcwMjExNjA0NywiZXhwIjoxNzAyMjAyNDQ3fQ.hQ2Om2eiNVPquH9npiCC9hOUy3hoizsFVt8QACCPolU",
            "title": "We Fell Apart - Slowed",
            "musicurl": "https://open.spotify.com/track/4oExAGoqR0JWK628dYaQ2f?si=f693d826f8af43a2",
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
            "token": "eg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQzYWNmZWI0NjU3MTU0Yjg1Y2VjMyIsImlhdCI6MTcwMjExNjA0NywiZXhwIjoxNzAyMjAyNDQ3fQ.hQ2Om2eiNVPquH9npiCC9hOUy3hoizsFVt8QACCPolU",
            "title": "We Feel Apart - Slowed",
            "videoUrl": "https://open.spotify.com/track/4oExAGoqR0JWK628dYaQ2f?si=f693d826f8af43a2",
            "author": "overatted",
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