import 'dotenv/config';
import express from "express";


const app = express();
const port = process.env.PORT || 3000;   //either use the env variable PORT or 3000 (if env PORT not available)

app.get("/", (req, res) => {
  res.send("Hello World!");
})


app.get("/twitter", (req, res) => {
  res.send("Hritikdotcom");
})

app.get("/login", (req, res) => {
  res.send("<h1> Please login at Coffee aur code </h1>")
})

app.get("/youtube", (req, res) => {
  res.send("<h2>Coffee aur code</h2>");
})


//Fetching from github :-
const githubData = {
  "login": "ItsMe1104",
  "id": 78407494,
  "node_id": "MDQ6VXNlcjc4NDA3NDk0",
  "avatar_url": "https://avatars.githubusercontent.com/u/78407494?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ItsMe1104",
  "html_url": "https://github.com/ItsMe1104",
  "followers_url": "https://api.github.com/users/ItsMe1104/followers",
  "following_url": "https://api.github.com/users/ItsMe1104/following{/other_user}",
  "gists_url": "https://api.github.com/users/ItsMe1104/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ItsMe1104/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ItsMe1104/subscriptions",
  "organizations_url": "https://api.github.com/users/ItsMe1104/orgs",
  "repos_url": "https://api.github.com/users/ItsMe1104/repos",
  "events_url": "https://api.github.com/users/ItsMe1104/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ItsMe1104/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-02-02T07:44:50Z",
  "updated_at": "2024-04-03T20:23:44Z"
}

app.get("/github", (req, res) => {
  res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
})