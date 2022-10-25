import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db/client";


export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("get-user", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      return prisma.user.findUnique({
        where: {
          id: input.id
        },
      });
    }
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  });
