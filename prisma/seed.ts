import { PrismaClient } from "@prisma/client";
import { statesSeeder } from "./seeders/States";
import { positionsSeeder } from "./seeders/Positions";
import { ageRangesSeeder } from "./seeders/AgeRanges";


const prisma = new PrismaClient()

async function main() {
    await statesSeeder()
    await positionsSeeder()
    await ageRangesSeeder()
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})