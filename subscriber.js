const { PubSub } = require("@google-cloud/pubsub");

const pubsubClient = new PubSub({
  projectId: "playground-s-11-5578d791",
  keyFilename: "./key.json",
});

function ListenMessages() {
  const subscriptionNameOrId = "pubsub-topic-sub";
  const subscription = pubsubClient.subscription(subscriptionNameOrId);

  let messageCount = 0;

  function messageHandler(message) {
    console.log(`receivde message ${message.id}`);
    console.log(`Data : ${message.data}`);
    messageCount += 1;
  }
  subscription.on("message", messageHandler);
}
ListenMessages();
