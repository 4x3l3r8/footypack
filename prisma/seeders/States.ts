import { PrismaClient } from "@prisma/client";
import { states } from "../constants/states"

const prisma = new PrismaClient()

export async function statesSeeder() {
    try {
        console.info("***state seeder init****")
        for (const state of states) {
            await prisma.state.create({
                data: {
                    name: state.state,
                    cities: {
                        create: [...state.lgas.map((lga) => {
                            return ({
                                name: lga
                            })
                        })]
                    }
                }
            })
        }
        console.info("***state seeding complete****")
    } catch (e) {
        console.info("***state seeder failed****")
        throw new Error(String(e))
    }
}