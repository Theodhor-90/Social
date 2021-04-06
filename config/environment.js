const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = `mongodb+srv://bloggerAdmin:9TuCmR09hmcaGunV@blogger.pnrg8.mongodb.net/Blogger?retryWrites=true&w=majority`;
const secret = 'Lcy46!*(45fdN>';

module.exports = { port, dbURI, secret };