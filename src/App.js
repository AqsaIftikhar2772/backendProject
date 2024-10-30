import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

// middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGAN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(cookieParser());
export default app;

// comment
/*  cookie-parser
    mera server sa browser ki cookie ko access kar pao 
    or us ki cookies ko set kar pao us k liya cookie parser
    ko use krta ha */
/* express.static
 Serve static files from the "public" directory (store localy assets)*/
