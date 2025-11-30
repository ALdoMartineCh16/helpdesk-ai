// quick-seed.js (en backend/)
const bcrypt = require('bcrypt');
const prisma = require('./src/prismaClient');

async function main() {
    const pw = await bcrypt.hash('password123', 10);
    const u = await prisma.user.upsert({
        where: { email: 'alice@example.com' },
        update: {},
        create: { email: 'alice@example.com', password: pw, name: 'Alice' }
    });
    console.log('seeded user', u.email);
    prisma.$disconnect();
}
main().catch(e => { console.error(e); prisma.$disconnect(); });
