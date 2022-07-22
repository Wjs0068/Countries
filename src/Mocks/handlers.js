import { rest } from "msw";
export const handlers = [
  rest.get("https://restcountries.com/v3.1/all", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: { common: "Country GreenLand" },
          flags: { png: "https://flagcdn.com/w320/gl.png" },
        },
        {
          name: { common: "Country El Salvador" },
          flags: { png: "https://flagcdn.com/w320/sv.png" },
        },
      ])
    );
  }),
];
