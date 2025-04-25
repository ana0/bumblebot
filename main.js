import { AtpAgent } from '@atproto/api';
import { createRestAPIClient } from "masto";
import * as dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

// Create a Bluesky Agent 
const agent = new AtpAgent({
    service: 'https://bsky.social',
  })

  const masto = createRestAPIClient({
    url: process.env.MASTODON_URL,
    accessToken: process.env.MASTODON_ACCESSTOKEN,
  });


async function main() {
    const myPost = "This is a test, I'm posting from a script"
    await agent.login({ identifier: process.env.BLUESKY_USERNAME, password: process.env.BLUESKY_PASSWORD})
    await agent.post({
        text: myPost,
    });
    await masto.v1.statuses.create({
        status: myPost,
      });
    console.log("Just posted!")
}

main();