# Structure du Backend

## Auth

> Prefix: `/auth`

### Endpoint [POST] `/register`

## Description

Cette route permet de créer un nouvel utilisateur dans la base de données, il chiffre également le mot de passe de l'utilisateur avant de le stocker dans la base de données. Si un utilisateur avec la même adresse e-mail existe déjà, la requête échouera.
Le serveur renvoie un token JWT qui permettra à l'utilisateur de s'authentifier sur les routes protégées.

## Paramètres

### Body

- **email (String, required):** Adresse e-mail de l'utilisateur.
- **password (String, required):** Mot de passe de l'utilisateur.
- **firstName (String, required):** Prénom de l'utilisateur.
- **lastName (String, required):** Nom de famille de l'utilisateur.

## Exemple de Requête

```json
{
    "email": "my.email@bip.com",
    "password": "myPassword123",
    "firstName": "John",
    "lastName": "Doe"
}
```

## Format de réponse (201 OK)

```json
{
    "ok": true,
    "data": {
        "token": "eg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQzYWNmZWI0NjU3MTU0Yjg1Y2VjMyIsImlhdCI6MTcwMjExNjA0NywiZXhwIjoxNzAyMjAyNDQ3fQ.hQ2Om2eiNVPquH9npiCC9hOUy3hoizsFVt8QACCPolU",
        "user": {
            "email": "my.email@gmail.com",
            "firstName": "John",
            "lastName": "Doe"
        }
    }
}
```

## Réponse possible

- **201 OK:** Utilisateur créé avec succès.
- **400 Bad Request:** Mauvaise requête, paramètres manquants ou invalides.
- **401 Unauthorized:** Mauvais identifiants.
- **500 Internal Server Error:** Erreur interne du serveur.
---

### Endpoint [POST] `/login`

## Description

Cette route permet de connecter un utilisateur existant à l'application. Si les identifiants sont corrects, le serveur renvoie un token JWT qui permettra à l'utilisateur de s'authentifier sur les routes protégées.

## Paramètres

### Body

- **email (String, required):** Adresse e-mail de l'utilisateur.
- **password (String, required):** Mot de passe de l'utilisateur.

## Format de réponse (200 OK)

```json
{
    "ok": true,
    "data": {
        "token": "eg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQzYWNmZWI0NjU3MTU0Yjg1Y2VjMyIsImlhdCI6MTcwMjExNjA0NywiZXhwIjoxNzAyMjAyNDQ3fQ.hQ2Om2eiNVPquH9npiCC9hOUy3hoizsFVt8QACCPolU",
        "user": {
            "email": "my.email@gmail.com",
            "firstName": "John",
            "lastName": "Doe"
        }
    }
}
```

## Réponse possible

- **200 OK:** Connexion réussie.
- **400 Bad Request:** Mauvaise requête, paramètres manquants ou invalides.
- **401 Unauthorized:** Mauvais identifiants.
- **500 Internal Server Error:** Erreur interne du serveur.

---


## Video

> Prefix: `/video`

### Endpoint [POST] `/post`

## Description

Cette route permet de créer une nouvelle video dans la base de données.

## Paramètres

### Header

- **Authorization (String, required):** Token JWT pour l'authentification.

### Body

- **title (String, required):** Titre de la video.
- **description (String, required):** Description de la vidéo.
- **videoUrl (String, required):** Url de la vidéo.
- **thumbnailUrl (String, required):** Url de l'image de la miniature.

## Exemple de Requête

```json
{
    "title": "titre video",
    "description": "je suis une description",
    "videoUrl": "https://www.youtube.com/watch?v=${item.id.videoId}",
    "thumbnailUrl": "../url/de/la/miniature"
}
```

## Format de réponse (201 OK)

```json
{
    "ok": true,
    "data": {
        "token": "eg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQzYWNmZWI0NjU3MTU0Yjg1Y2VjMyIsImlhdCI6MTcwMjExNjA0NywiZXhwIjoxNzAyMjAyNDQ3fQ.hQ2Om2eiNVPquH9npiCC9hOUy3hoizsFVt8QACCPolU",
        "video": {
            "title": "titre video",
            "description": "je suis une description"
        }
    }
}
```

## Réponse possible

- **201 OK:** Video créé avec succès.
- **400 Bad Request:** Mauvaise requête, paramètres manquants ou invalides.
- **401 Bad Token:** Mauvais token JWT.
- **500 Internal Server Error:** Erreur interne du serveur.
---

### Endpoint [GET] `/` 🔐

## Description

Cette route permet de récupérer la liste des éléments (vidéos).

## Paramètres

### Header

- **Authorization (String, required):** Token JWT pour l'authentification.

## Format de réponse (200 OK)

```json
{
    "ok": true,
    "data": [
        {
            "createdAt": "2023-01-01T00:00:00.000Z",
            "userId": "user123",
            "title": "titre video",
            "description": "je suis une description",
            "videoUrl": "https://www.youtube.com/watch?v=${item.id.videoId}",
            "thumbnailUrl": "../url/de/la/miniature",
            "likes": ["user123, user456"],
            "views": ["user456", "user789"]
        },
    ]
}
```

## Réponses Possibles
- **200 OK:** Liste des vidéos récupérée avec succès.
- **401 Unauthorized:** Mauvais token JWT.
- **500 Internal Server Error:** Erreur interne du serveur.

---

### Endpoint [GET] `/me` 🔐

## Description

Cette route permet de récupérer la liste des éléments (vidéos) appartenant à l'utilisateur connecté.

## Paramètres

### Header

- **Authorization (String, required):** Token JWT pour l'authentification.

## Format de réponse (200 OK)

```json
{
    "ok": true,
    "data": [
        {
            "createdAt": "2023-01-01T00:00:00.000Z",
            "title": "titre video",
            "description": "je suis une description",
            "videoUrl": "https://www.youtube.com/watch?v=${item.id.videoId}",
            "thumbnailUrl": "../url/de/la/miniature",
            "likes": ["user123, user456"],
            "views": ["user456", "user789"]
        },
    ]
}
```

## Réponses Possibles
- **200 OK:** Liste des vidéos de l'utilisateur récupérée avec succès.
- **401 Unauthorized:** Mauvais token JWT.
- **500 Internal Server Error:** Erreur interne du serveur.

---

### Endpoint [DELETE] `/:id` 🔐

## Description

Cette route permet à l'utilisateur propriétaire de supprimer un élément (vidéo) spécifique.

## Paramètres

### Header

- **Authorization (String, required):** Token JWT pour l'authentification.

### URL Paramètre

- **id (String, required):** ID de l'élément (vidéo) à supprimer.

## Format de réponse (200 OK)

```json
{
    "ok": true,
    "data": {
        "title": "Titre de la vidéo",
    }
}
```

## Réponses Possibles
- **200 OK:** Élément supprimé avec succès.
- **400 Bad Request:** Mauvaise requête, paramètres manquants ou invalides.
- **401 Unauthorized:** Mauvais token JWT.
- **403 Forbidden:** L'utilisateur n'est pas le propriétaire de l'élément.
- **404 Not Found:** Élément non trouvé.
- **500 Internal Server Error:** Erreur interne du serveur.

---

### Endpoint [POST] `/favorite/put` 🔐

## Description

Cette route permet à l'utilisateur de mettre une vidéos en favoris.

## Paramètres

### Header

- **Authorization (String, required):** Token JWT pour l'authentification.

### Body

- **videoId (String, required):** ID de l'élément (vidéos) à mettre en favoris.

## Format de réponse (201 OK)

```json
{
    "ok": true,
    "message": "post in favorite"
}
```

## Réponses Possibles
- **201 OK:** Favoris enregistré avec succès.
- **401 Unauthorized:** Mauvais token JWT.
- **404 Not Found:** Élément non trouvé.
- **409 Conflict:** Vous avez déjà mis ce post en favris.
- **500 Internal Server Error:** Erreur interne du serveur.

---

## Profile

> Prefix: `/profile`

### Endpoint [POST] `/password/modify/`

## Description

Cette route permet de modifier le mot de passe de l'utilisateur dans la base de données.

## Paramètres

### Header

- **Authorization (String, required):** Token JWT pour l'authentification.

### Body

- **password (String, required):** Mot de passe de l'utilisateur.
- **new_password (String, required):** Nouveau mot de passe de l'utilisateur.

## Exemple de Requête

```json
{
    "password": "jean.dupont",
    "new_password": "jean06.dupont",
}
```

## Format de réponse (201 OK)

```json
{
    "ok": true,
    "data": {
        "token": "eg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQzYWNmZWI0NjU3MTU0Yjg1Y2VjMyIsImlhdCI6MTcwMjExNjA0NywiZXhwIjoxNzAyMjAyNDQ3fQ.hQ2Om2eiNVPquH9npiCC9hOUy3hoizsFVt8QACCPolU",
    }
}
```

## Réponse possible

- **201 OK:** Mot de passe changer avec succès.
- **400 Bad Request:** Mauvaise requête, paramètres manquants ou invalides.
- **401 Bad Token:** Mauvais token JWT.
- **402 Bad Token:** Mot de passe acutel incorrect.
- **403 Bad Token:** Nouveau mot de passe identique à l'actuel.
- **500 Internal Server Error:** Erreur interne du serveur.
---

### Endpoint [POST] `/account/delete/`

## Description

Cette route permet de supprimer le compte de l'utilisateur dans la base de données.

## Paramètres

### Header

- **Authorization (String, required):** Token JWT pour l'authentification.

### Body

- **email (String, required):** email de l'utilisateur.

## Exemple de Requête

```json
{
    "email": "jean.dupont@gmail.com",
}
```

## Format de réponse (201 OK)

```json
{
    "ok": true,
    "data": {
        "token": "eg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQzYWNmZWI0NjU3MTU0Yjg1Y2VjMyIsImlhdCI6MTcwMjExNjA0NywiZXhwIjoxNzAyMjAyNDQ3fQ.hQ2Om2eiNVPquH9npiCC9hOUy3hoizsFVt8QACCPolU",
    }
}
```

## Réponse possible

- **201 OK:** Compte supprimer avec succès.
- **400 Bad Request:** Mauvaise requête, paramètres manquants ou invalides.
- **401 Bad Token:** Mauvais token JWT.
- **500 Internal Server Error:** Erreur interne du serveur.
---

### Endpoint [GET] `/email`

## Description

Cette route permet de récuperer l'email de l'utilisateur dans la base de données.

## Paramètres

### Header

- **Authorization (String, required):** Token JWT pour l'authentification.

## Format de réponse (201 OK)

```json
{
    "ok": true,
    "data": {
        "token": "eg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQzYWNmZWI0NjU3MTU0Yjg1Y2VjMyIsImlhdCI6MTcwMjExNjA0NywiZXhwIjoxNzAyMjAyNDQ3fQ.hQ2Om2eiNVPquH9npiCC9hOUy3hoizsFVt8QACCPolU",
    }
}
```

## Réponse possible

- **201 OK:** Mot de passe changer avec succès.
- **400 Bad Request:** Mauvaise requête, paramètres manquants ou invalides.
- **401 Bad Token:** Mauvais token JWT.
- **500 Internal Server Error:** Erreur interne du serveur.
---
