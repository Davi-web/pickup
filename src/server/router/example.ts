import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db/client";
import { signUpSchema } from "../../common/validation/auth";
import * as trpc from "@trpc/server";
import { hash } from "argon2";

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
  })
  .mutation("delete-user",{
    input: z.object({
      email: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.user.delete({
        where: {
          email: input.email,
        },
      })
    }
  })
  .mutation("post-user", {
    input: signUpSchema,
    async resolve({input, ctx}) {
      const {username, email, password} = input;
      const exists = await ctx.prisma.user.findFirst({
        where:{
          email
       }
      });
      if(exists) {
        throw new trpc.TRPCError({
          code: "BAD_REQUEST",
          message: "User already exists",
        })
      }
      return {status: 2};

    }
  });
