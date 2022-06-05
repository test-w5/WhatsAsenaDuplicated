FROM fusuf/whatsasena:latest

RUN git clone https://github.com/test-w5/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --network-concurrency 1

CMD ["node", "bot.js"]
