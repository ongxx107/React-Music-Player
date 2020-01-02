This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Music Player

Music player app made with React and Spotify API. Spotify API requires client id and client secret to generate the access token. This app is created to search tracks and artists. User can retrieve information about artist and his/her top tracks. Simple features like play and pause button are designed in this app.

## 1. Getting authentication

### 1.1. Getting client id and client secret on Spotify

Here is the [link](https://developer.spotify.com/my-applications/). After you log onto your profile, you are asked to create a new client id. Then you can get your client_id & client_secret. You have to configure Redirect URIs on your Spotify settings, for this case, you can generate the access token on http://localhost:8888/callback/ as redirect URI.

### 1.2. Getting Spotify access token

Download or git clone [this repository](https://github.com/spotify/web-api-auth-examples). Next, run:
```
npm install
```
When you finish installing, open authorization_code/app.js. Insert your given client_id, client_secret, redirect URI as the string type.

Then open terminal in authorization_code directory. Run:

```
node app.js
```

Open localhost:8888. Click the Log In Spotify button and accept its terms and conditions. It will redirect to your user profile page. Next copy the access token that's in search bar of your browser.

Note: the access token is only valid for one hour unless you configure refresh token.

## 2. Music Player App

### 2.1. Installing

Clone this repository and open terminal in this main directory. Run:
```
npm install
```

### 2.2. Modifying the token
Now paste token as a string in src/App.js. You need to change the string variable called accessToken.

### 2.3. Starting the app
Finally, start the app with:
```
npm start
```

The server runs on port localhost:3000.
