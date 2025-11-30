const bcrypt = require('bcrypt');
const prisma = require('./src/prismaClient');

async function main() {
    const password = await bcrypt.hash('password123', 10);

    const user = await prisma.user.upsert({
        where: { email: 'alice@example.com' },
        update: {},
        create: {
            email: 'alice@example.com',
            password: password,
            name: 'Alice'
        }
    });

    console.log('✅ Usuario creado:', user.email);
    await prisma.$disconnect();
}

main().catch((e) => {
    console.error('❌ Error en seed:', e);
    prisma.$disconnect();
});
