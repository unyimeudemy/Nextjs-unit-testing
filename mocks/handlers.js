import { rest } from "msw";

export const handlers = [
  rest.get("/api/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: "unyime" },
        { id: 2, name: "Emmanuel" },
        { id: 3, name: "udoh" },
      ])
    );
  }),

  rest.post("/api/auth", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];
