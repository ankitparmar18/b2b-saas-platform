FROM eclipse-temurin:21-jdk-jammy
WORKDIR /app
COPY . .
RUN mkdir -p src
RUN apt-get update && apt-get install -y maven && rm -rf /var/lib/apt/lists/*
RUN mvn -q -B dependency:go-offline
RUN mvn -q -B -pl api-gateway -am package -DskipTests spring-boot:repackage
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar"]
