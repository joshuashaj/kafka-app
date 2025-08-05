import kafka from "./client.js";

const listTopicsWithPartitions = async () => {
    const admin = kafka.admin();
    await admin.connect();

    console.log("Fetching topic metadata...");
    const metadata = await admin.fetchTopicMetadata();

    console.log("\n📋 Available Topics with Partition Count:");
    metadata.topics.forEach(topic => {
        console.log(`- ${topic.name} (Partitions: ${topic.partitions.length})`);
    });

    await admin.disconnect();
    console.log("\nDisconnected from Kafka Admin");
};

listTopicsWithPartitions().catch(console.error);
