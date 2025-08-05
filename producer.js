import kafka from "./client.js";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const init = async () => {
    const producer = kafka.producer();
    await producer.connect();

    rl.setPrompt("> ");
    rl.prompt();

    rl.on("line", async (line) => {
        const [riderName, location] = line.split(" ");

        await producer.send({
            topic: "rider-updates",
            messages: [
                {
                    partition: location.toLowerCase() === "north" ? 0 :
                        location.toLowerCase() === "south" ? 1 :
                            location.toLowerCase() === "east" ? 2 :
                            location.toLowerCase() === "west" ? 3 : "",
                    key: "location-update",
                    value: JSON.stringify({ name: riderName, location }),
                },
            ],
        });
    }).on("close", async () => {
        console.log("Exiting...");
        await producer.disconnect();
        process.exit(0);
    });
}

init().catch(console.error);