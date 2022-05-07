// pages/api/logout.js

import { withIronSessionApiRoute } from "iron-session/next"

export default withIronSessionApiRoute(
  function logoutRoute(req, res, session) {
    req.session.destroy()
    res.redirect('/')
  },
  {
    cookieName: "myapp_cookiename",
    password: process.env.SECRET_KEY,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
)