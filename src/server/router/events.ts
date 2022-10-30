import { createRouter } from "./context";
import { z } from "zod";



export const eventsRouter = createRouter()
  .query("get-all-events" , {
    async resolve({ ctx }) {
      return await ctx.prisma.events.findMany();
    }
  })
  .query("get-event-by-sports-type", {
    input: z.object({
      type: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.events.findMany({
        where: {
          sportsType: input.type
        }
      });
    }
  })
  .mutation("post-events", {
    input: z.object({
      name: z.string(),
      description: z.string(),
      postedDate: z.date(),
      eventDate: z.date(),
      eventLocation: z.string(),
      postedBy: z.string(),
      sportsType: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.events.create({
        data: {
          eventName: input.name,
          eventDescription: input.description,
          postedDate: input.postedDate,
          postedBy:  input.postedBy,
          eventTime: input.eventDate,
          eventLocation: input.eventLocation,
          sportsType: input.sportsType,
        },
      });
    }
  })
