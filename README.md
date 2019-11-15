#  wallet account user api

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript rest api.

[Mongoose]is a modeling tool for MongoDB.

## Start with docker compose

Docker compose in this project is include api and mongodb database.

Run followed command in project directory.

```bash
  docker-compose up -d # build images, create and run containers in background
```

If container is created, first time it can takes 5 Minutes to install the node modules. 
you can access api on http://localhost:5000.

If you want apply your modified code into the running container, you can add build option.

```bash
  docker-compose up -d --build # if source code is changed
```

After use compose, you have to stop and remove containers.

```bash
  docker-compose down # stop and remove container in compose
```


## Documentation API

```bash
localhost:5000/api/v1
```

## Security Token
Getting an access token for your API

```bash
curl --request POST \
  --url https://dev-67i29vew.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"YcWsLXX32f7R933yKJGTpudKV1i5sWe2","client_secret":"an71njKOFsX6TrPYA3FpE25IEXPjbVNWz-b5WQLzpfBWr9nl9nbLdB-KUQZpWxXd","audience":"https:///wallet-account-user-service.com","grant_type":"client_credentials"}'

```
Reponse
```bash
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EQXpOVE5HUVVZNFJrTkJOVFZHT0RJM1FqVXdRVEU0TkVRM1JqZENOVFpDTkVFM04wSTVRZyJ9.eyJpc3MiOiJodHRwczovL2Rldi02N2kyOXZldy5hdXRoMC5jb20vIiwic3ViIjoiWWNXc0xYWDMyZjdSOTMzeUtKR1RwdWRLVjFpNXNXZTJAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vL3dhbGxldC1hY2NvdW50LXVzZXItc2VydmljZS5jb20iLCJpYXQiOjE1NzM3NzI5NDQsImV4cCI6MTU3Mzg1OTM0NCwiYXpwIjoiWWNXc0xYWDMyZjdSOTMzeUtKR1RwdWRLVjFpNXNXZTIiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.ZJIf4dZGUettaZbszdSFUwtxjkUkf93ofARoIx70V7L9lvrRQG0UCABS9HJ-3n0005CFoQBxscVX0khU2oyO1O82Xa6uEeCgLCQZh6bsbipgkIg8BhCujRL1nsgcz9vSoU7tx7Ea30FA57bwQR5SWDvwpr8KezNANW-cApWYNc52Gfb3kWf26-JO46EwMSZgVnGH4HbqCRGwkrmrda9VdRDegfmagM1VZNjh-r4BeHhUgjHG8RGuEhm4W5ppim-_-yk86q6T8ybErT9txNYA5dpa4KrXCuvAPAu1T0iJvCfuAdhQbRjwc1jiogazkjTWpV66-0CWZldVYPB46tFMJA",
  "token_type": "Bearer"
}
```
Sending the Token API

```bash
curl --request GET \
  --url http://path_to_your_api/ \
  --header 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5EQXpOVE5HUVVZNFJrTkJOVFZHT0RJM1FqVXdRVEU0TkVRM1JqZENOVFpDTkVFM04wSTVRZyJ9.eyJpc3MiOiJodHRwczovL2Rldi02N2kyOXZldy5hdXRoMC5jb20vIiwic3ViIjoiWWNXc0xYWDMyZjdSOTMzeUtKR1RwdWRLVjFpNXNXZTJAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vL3dhbGxldC1hY2NvdW50LXVzZXItc2VydmljZS5jb20iLCJpYXQiOjE1NzM3NzI5NDQsImV4cCI6MTU3Mzg1OTM0NCwiYXpwIjoiWWNXc0xYWDMyZjdSOTMzeUtKR1RwdWRLVjFpNXNXZTIiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.ZJIf4dZGUettaZbszdSFUwtxjkUkf93ofARoIx70V7L9lvrRQG0UCABS9HJ-3n0005CFoQBxscVX0khU2oyO1O82Xa6uEeCgLCQZh6bsbipgkIg8BhCujRL1nsgcz9vSoU7tx7Ea30FA57bwQR5SWDvwpr8KezNANW-cApWYNc52Gfb3kWf26-JO46EwMSZgVnGH4HbqCRGwkrmrda9VdRDegfmagM1VZNjh-r4BeHhUgjHG8RGuEhm4W5ppim-_-yk86q6T8ybErT9txNYA5dpa4KrXCuvAPAu1T0iJvCfuAdhQbRjwc1jiogazkjTWpV66-0CWZldVYPB46tFMJA'
  ```

## Test

TODO