import kafka from "./client.js";

const increasePartitions = async () => {
    const admin = kafka.admin();
    await admin.connect();

    const topicName = "rider-updates";
    const newPartitionCount = 4; // must be greater than current

    console.log(`Increasing partitions for topic "${topicName}" to ${newPartitionCount}...`);

    await admin.createPartitions({
        topicPartitions: [
            {
                topic: topicName,
                count: newPartitionCount,
            },
        ],
    });

    console.log(`Partitions for topic "${topicName}" increased to ${newPartitionCount}`);

    await admin.disconnect();
};

increasePartitions().catch(console.error);
