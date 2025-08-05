import kafka from "./client.js";
const group = process.argv[2];

const init = async () => {
    const consumer = kafka.consumer({ groupId: group });
    await consumer.connect();
    console.log("Connected to Kafka Consumer");

    await consumer.subscribe({ topic: "rider-updates", fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(
                `${group}: [${topic}]: PART:${partition}:`,
                message.value.toString()
            );
        },
    });
    console.log("Consumer is running and listening for messages...");

}

init().catch(console.error);