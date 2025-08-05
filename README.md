# kafka-app

docker run -p 2181:2181 zookeeper

docker run -p 9092:9092 ^
-e KAFKA_ZOOKEEPER_CONNECT=1<PRI_IP>:2181 ^
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://1<PRI_IP>:9092 ^
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 ^
confluentinc/cp-kafka:6.2.0


node admin.js

node producer.js

node consumer.js customer_group

