FROM fusuf/whatsasena:latest

RUN git clone https://github.com/semoandroidwa/SemoBotV4 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/CEHunter30/media

CMD ["node", "bot.js"]
