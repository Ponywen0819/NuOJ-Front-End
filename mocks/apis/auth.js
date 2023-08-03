import { rest } from "msw";
import { HOST } from "@/setting";

export const auth = [
  rest.post(`${HOST}/api/auth/login`, async (req, res, ctx) => {
    let req_json = await req.json();
    if (req_json.account === undefined || req_json.password === undefined) {
      return res(
        ctx.status(400),
        ctx.json({ message: "The format of the payload is incorrect." })
      );
    }
    if (req_json.account === "pony" && req_json.password === "0000") {
      return res(ctx.cookie("jwt", "ya"));
    } else if (req_json.account === "roy" && req_json.password === "0000") {
      return res(
        ctx.status(401),
        ctx.json({
          message: "The mail verification enabled but mail is not verify.",
        })
      );
    } else {
      return res(
        ctx.status(403),
        ctx.json({ message: "Incorrect account or password." })
      );
    }
  }),

  rest.post(`${HOST}/api/auth/logout`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.cookie("jwt", "", { expires: 0 }));
  }),

  rest.post(`${HOST}/api/auth/register`, async (req, res, ctx) => {
    let json = await req.json();
    let { handle, password, email } = json;
    if (handle === undefined || password === undefined || email === undefined) {
      return res(
        ctx.status(400),
        ctx.json({ message: "The format of the payload is incorrect." })
      );
    } else if (handle === "" || password === "" || email === "") {
      return res(
        ctx.status(400),
        ctx.json({ message: "The format of the payload is incorrect." })
      );
    } else if (handle === "pony" || email === "test@test.com") {
      return res(
        ctx.status(403),
        ctx.json({ message: "The email or the handle is repeated." })
      );
    } else if (
      handle === "invalidHandle" ||
      email === "invalidEmail" ||
      password === "invalidPassword"
    ) {
      return res(
        ctx.status(422),
        ctx.json({ message: `message": "Handle is invalid.` })
      );
    } else {
      return res(
        ctx.status(200),
        ctx.json({
          message: "OK.",
        })
      );
    }
  }),

  rest.post(`${HOST}/api/auth/verify_jwt`, async (req, res, ctx) => {
    let jwt = req.cookies?.jwt;
    if (jwt === "ya") {
      return res(
        ctx.status(200),
        ctx.json({
          data: {
            handle: "pony",
            email: "pony076152340@gmail.com",
          },
        })
      );
    } else {
      return res(ctx.status(401));
    }
  }),

  rest.get(`${HOST}/api/auth/oauth_info`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: "ok",
        github_oauth_url: "gitgub_url",
        google_oauth_url: "google_url",
      })
    );
  }),
];
