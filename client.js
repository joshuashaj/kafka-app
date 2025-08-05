import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
    brokers: ["192.168.1.11:9092"],
});

export default kafka;