import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
  const token = await db.sMSToken.create({
    data: {
      token: "123141",
      user: {
        connect: {
          id: 12334,
        },
      },
    },
  });
  console.log(token);
}
export default db;
