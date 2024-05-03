import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create user
  // await prisma.user.createMany({
  //   data: [
  //     { name: "いずみ" },
  //     { name: "つつみ" },
  //     { name: "もりた" },
  //     { name: "もりもと" },
  //   ],
  // });
  //
  // get users
  // const users = await prisma.user.findMany();
  // console.log(users);
  //
  // create season
  // await prisma.season.create({
  //   data: {
  //     name: "シーズン1",
  //   },
  // });
  //
  // get seasons
  // const seasons = await prisma.season.findMany();
  // console.log(seasons);
  //
  // create result
  // const res = await prisma.result.createMany({
  //   data: [
  //     {
  //       point: 60,
  //       rank: 1,
  //       userId: 1,
  //       seasonId: 1,
  //     },
  //     {
  //       point: 20,
  //       rank: 2,
  //       userId: 2,
  //       seasonId: 1,
  //     },
  //     {
  //       point: -30,
  //       rank: 3,
  //       userId: 3,
  //       seasonId: 1,
  //     },
  //     {
  //       point: -50,
  //       rank: 4,
  //       userId: 4,
  //       seasonId: 1,
  //     },
  //   ],
  // });
  // console.log(res);
  //
  // get results
  // const results = await prisma.result.findMany();
  // console.log(results);
  //
  // delete result
  // const res = await prisma.result.delete({
  //   where: {
  //     id: 1,
  //   },
  // });
  // console.log(res);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
