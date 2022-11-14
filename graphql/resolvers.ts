import { Context } from '@apollo/client';

// The context argument is helpful for passing things that any resolver might need, like authentication scope, database connections, and custom fetch functions.
// Here we are using it to access Prisma Client.
export const resolvers = {
  Query: {
    notes: (_parent: undefined, _args: undefined, ctx: Context) => {
      return ctx.prisma.note.findMany();
    },
  },
  Mutation: {
    createNote: (
      _parent: undefined,
      args: { id: string; title: string; content: string },
      ctx: Context,
    ) => {
      return ctx.prisma.note.create({
        data: {
          id: args.id,
          title: args.title,
          content: args.content,
        },
      });
    },
  },
};