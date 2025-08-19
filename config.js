require("dotenv").config();

module.exports = {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX || "!",
  owner: process.env.OWNER || "1079022798523093032",
  clientId: process.env.CLIENT_ID
};