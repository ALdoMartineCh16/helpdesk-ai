// prisma.config.cjs
require('dotenv').config({ path: '.env' });

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  throw new Error('DATABASE_URL no está definido en backend/.env — revisa el archivo y vuelve a intentar.');
}

module.exports = {
  datasource: {
    url: dbUrl
  }
};
