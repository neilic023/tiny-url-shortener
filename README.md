## Description

     Url shortening system will provide unique short url's transformed from long url.
     The main value of the system is it's usage in eg. sms marketing campaigns where you need short urls.
     System at it's core will process api requests taking long urls and perform validation, creating DB collection with that url alias as well as timestamp, It will provide shortUrl to the api consumer with redirection to original target url.
     Main challenge would be to process large amount of tiny urls in batches. Advance features to implement would be url expiration,
     analytics by different intervals, url history for the consumer etc.

## Installing dependencies

```bash
$ npm install
```

## Running the app

```bash
# development frontend
$ cd frontend
$ npm run start

# development backend
$cd backend
$npm start

# watch mode backend
$ npm run start:dev

# production mode backend
$ npm run start:prod
```
