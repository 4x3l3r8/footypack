import { PrismaClient } from "@prisma/client";
import { positions } from "../constants/positions"

const prisma = new PrismaClient()

export async function positionsSeeder() {
    try {
        console.info("***position seeder init****")
        for (const position of positions) {
            await prisma.playPosition.create({
                data: {
                    position: position.position
                }
            })
        }
        console.info("***position seeding complete****")
    } catch (e) {
        console.info("***position seeder failed****")
        throw new Error(String(e))
    }
}