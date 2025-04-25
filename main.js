import { AtpAgent } from '@atproto/api';
import * as dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

// Create a Bluesky Agent 
const agent = new AtpAgent({
    service: 'https://bsky.social',
  })


async function main() {
    await agent.login({ identifier: process.env.BLUESKY_USERNAME, password: process.env.BLUESKY_PASSWORD})
    await agent.post({
        text: "This is a test, I'm posting from a script",
    });
    console.log("Just posted!")
}

main();