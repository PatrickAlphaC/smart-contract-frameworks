# To build a Dockerized version execute: `docker build -t web3app .`
# To run the generated image execute: `docker run --env EPIRUS_LOGIN_TOKEN="<your login token>" web3app`
FROM ubuntu as Build
COPY . /root/app
RUN apt-get update && apt-get install -y \
	curl bash openjdk-11-jre \
	&& rm -rf /var/cache/apk/* \
	&& curl -L get.epirus.io | sh \
	&& /root/.epirus/epirus \
	&& cd /root/app \
	&& ./gradlew generateContractWrappers

FROM alpine
COPY --from=Build /root /root/
RUN apk add --no-cache bash openjdk11-jre\
	&& rm -rf /var/cache/apk/* \
	&& mkdir /opt/app
WORKDIR /root/app
ENTRYPOINT ["/root/.epirus/epirus", "run", "rinkeby"]
