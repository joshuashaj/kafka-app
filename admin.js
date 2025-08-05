import  kafka  from "./client.js";

const init = async () => {
    const admin = kafka.admin();

    console.log("Connecting to Kafka Admin...");
    await admin.connect();
    console.log("Connected to Kafka Admin");

    console.log("Creating topic 'rider-updates'...");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 5
            }
        ]
    });
    console.log("Topic 'rider-updates' created");

    console.log("Disconnecting from Kafka Admin...");
    await admin.disconnect();
    console.log("Disconnected from Kafka Admin");
}

init().catch(console.error);