# Decentralized Social

### A script-based interaction with Mastodon and Bluesky

**PREP-STEPs** Required: Sign up for [bluesky](https://bsky.app/) and [mastodon](https://joinmastodon.org/). If you don't know what mastodon instance to join, I recommend mastodon.social. 

**STEP ONE**

Install node js: https://nodejs.org/en/download

**STEP TWO** 

Clone down the class repo with git

```git clone https://github.com/ana0/bumblebot.git```

**STEP THREE**

Back in your terminal, enter the class repo

```
cd bumblebot
```

and then let's install the dependencies

```
npm install
```

**STEP FOUR** 

In the class repo, using a text editor make a file called `.env`. You can use any text editor to do this, including `nano` which we used in the intro the CLI class, notepad on windows, or TextEdit on osx. 

Put this in the .env file:

```
BLUESKY_USERNAME=
BLUESKY_PASSWORD=
MASTODON_URL=
MASTODON_ACCESSTOKEN=
```

You can also fill in your bluesky username and password, and the url from your mastodon instance. 

**STEP FIVE**

Now let's go make your mastodon access token.

When logged in to mastodon click on `Edit Profile`, then `Development` and then`New Application`. Give it a name, but you don't need to change the default scope or worry about any of the other settings for now. Click `Submit` and copy your access token into the `.env` file.

**STEP SIX**

Again using a text editor of your choice, open up `main.js` and give it a read. See if you can figure out what which parts of it do what. Edit the line 20, that starts with `const myPost = ` to say whatever you want to post

**STEP SEVEN**

In the terminal again, run

```
npm run post
```