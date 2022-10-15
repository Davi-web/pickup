import { createRouter } from "./context";
import { z } from "zod";
import { resolve } from "path";
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
      username: z.string(),
    }),
    async resolve({ input }) {
      return prisma.user.findFirst({
        where: {
          name: input.username,
        },
      });
    }
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  })
  .mutation("post-user", {
    input: z.object({
      username: z.string(),
      email: z.string(),
      password: z.string(),
    }),
    async resolve({input}) {
      const postUser = await prisma.user.create({
        data: {
          name: input.username,
          email: input.email,
          emailVerified: new Date(),
          image: "default",
          password: input.password,
        },
      });
      return {success: true, user: postUser};

    }
  });
