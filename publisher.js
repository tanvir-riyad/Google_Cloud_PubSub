const { PubSub } = require("@google-cloud/pubsub");

const pubsubClient = new PubSub({
  projectId: "playground-s-11-5578d791",
  keyFilename: "./key.json",
});

async function publishMessage() {
  const topicNameOrId = "pubsub-topic";
  const data = "this is another publisher message from node";
  const dataBuffer = Buffer.from(data);

  try {
    const messageID = await pubsubClient
      .topic(topicNameOrId)
      .publishMessage({ data: dataBuffer });
    console.log(`message ${messageID} published`);
  } catch (error) {
    console.error(`Received error: ${error.message}`);
  }
}
publishMessage().catch((error) => {
  console.error(error.message);
});
