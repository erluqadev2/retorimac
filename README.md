# Reto Rimac
Reto Rimac - Serverless nodejs con Api Gateway y Lambda AWS

## Apis

### Guardar Persona
* Method: POST
* URL: https://im2uq6ang4.execute-api.eu-central-1.amazonaws.com/dev/people
* Ejm Body : {
    "LANG": "EN",
    "name": "R5-D4",
    "height": "97",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, red",
    "eye_color": "red",
    "birth_year": "unknown",
    "gender": "n/a",
    "homeworld": "https://swapi.py4e.com/api/planets/1/",
    "films": [
        "https://swapi.py4e.com/api/films/1/"
    ],
    "species": [
        "https://swapi.py4e.com/api/species/2/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-10T15:57:50.959000Z",
    "edited": "2014-12-20T21:17:50.321000Z",
    "url": "https://swapi.py4e.com/api/people/8/"
}

### Consultar Persona por ID
* Method: GET
* URL: https://im2uq6ang4.execute-api.eu-central-1.amazonaws.com/dev/people/{id}
* Ejm: id : 84eab99c-2c02-40fd-8916-026c2585cdc1

### Obtener todas las personas
* Method: GET
* URL: https://im2uq6ang4.execute-api.eu-central-1.amazonaws.com/dev/people

## Apis integradas con SWAPI

### Consultar Persona por ID
* Method: GET
* URL: https://im2uq6ang4.execute-api.eu-central-1.amazonaws.com/dev/swapi/people/{id}
* Ejm: id: 10

### Obtener Persona de SWAPI y guardarla en BD
* Method: GET
* URL: https://im2uq6ang4.execute-api.eu-central-1.amazonaws.com/dev/swapi/people/{id}/save
* Ejm: id: 7
