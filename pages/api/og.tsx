/* eslint-env node */
import { ImageResponse } from "@vercel/og";
import Image from "next/image";

export const config = {
  runtime: "edge",
};

const font = fetch(new URL("./Inter-SemiBold.otf", import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export default async function (req: any) {
  const inter = await font;

  const { searchParams } = new URL(req.url);

  // ?title=<title>
  const hasTitle = searchParams.has("title");
  const hasDescription = searchParams.has("description");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "Content Title";
  const description = hasDescription
    ? searchParams.get("description")?.slice(0, 100)
    : "Content Discription";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#030303",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #333 5%, transparent 0%), radial-gradient(circle at 75px 75px, #333 5%, transparent 0%)",
          backgroundSize: "100px 100px",
          backgroundPosition: "-30px -10px",
          fontWeight: 600,
          color: "white",
        }}
      >
        <img
          style={{ position: "absolute", top: 70, left: 80 }}
          height="48"
          src={
            "https://bettercallgopal.vercel.app/personal/full-white-bg-trans.png"
          }
          alt="@bettercallgopal logo"
        />
        <p
          style={{
            position: "absolute",
            bottom: 70,
            left: 80,
            margin: 0,
            fontSize: 30,
            letterSpacing: -1,
          }}
        >
          Gopal Verma's devsite for sharing code, content, and showcase
          projects!
        </p>
        <h1
          style={{
            fontSize: 82,
            margin: "0 0 40px -2px",
            lineHeight: 1.1,
            textShadow: "0 2px 30px #000",
            letterSpacing: -4,
            backgroundImage: "linear-gradient(90deg, #fff 40%, #aaa)",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
            color: "transparent",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 34,
            margin: "0 0 40px -2px",
            lineHeight: 1.1,
            textShadow: "0 2px 30px #000",
            letterSpacing: -1,
            backgroundImage: "linear-gradient(90deg, #fff 40%, #aaa)",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
            color: "transparent",
          }}
        >
          {description}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "inter",
          data: inter,
          style: "normal",
        },
      ],
    },
  );
}
