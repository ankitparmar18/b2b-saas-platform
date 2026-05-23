FROM eclipse-temurin:21-jdk-jammy
WORKDIR /app
COPY pom.xml .
RUN mkdir -p src
RUN apt-get update && apt-get install -y maven && rm -rf /var/lib/apt/lists/*
RUN mvn -q -B dependency:go-offline
COPY . .
RUN mvn -q -B package -DskipTests
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "target/tenant-service-0.0.1-SNAPSHOT.jar"]
