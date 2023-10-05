import { PrismaClient } from "@prisma/client";
import { ageRanges } from "../constants/ageRange"

const prisma = new PrismaClient()

export async function ageRangesSeeder() {
    try {
        console.info("***age range seeder init****")
        for (const ageRange of ageRanges) {
            await prisma.ageRange.create({
                data: {
                    min: ageRange.min,
                    max: ageRange.max
                }
            })
        }
        console.info("***age range seeding complete****")
    } catch (e) {
        console.info("***age range seeder failed****")
        throw new Error(String(e))
    }
}