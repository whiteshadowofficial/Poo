FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Kaweeshachamodk/Poo /root/Poo
WORKDIR /root/Poo/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
