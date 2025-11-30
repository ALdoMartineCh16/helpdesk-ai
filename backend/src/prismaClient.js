// backend/src/prismaClient.js
const { PrismaClient } = require('@prisma/client');

let prisma;

const createClient = () => {
    // Prisma 7 puede requerir información sobre el engine ("client" engine).
    // Proveemos un "adapter" simple compatible con Postgres.
    // NOTA: el campo `provider` debe ser "postgres" (no "postgresql") según validación interna.
    return new PrismaClient({
        adapter: {
            adapterName: "binary", // nombre arbitrario razonable para la implementación nativa
            provider: "postgres"   // provider en runtime esperado (comprueba que sea "postgres")
        }
    });
};

if (process.env.NODE_ENV === 'production') {
    prisma = createClient();
} else {
    // evita múltiples instancias durante hot reload / nodemon
    if (!global.__prisma) {
        global.__prisma = createClient();
    }
    prisma = global.__prisma;
}

module.exports = prisma;
