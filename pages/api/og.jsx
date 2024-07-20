/* eslint-env node */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const font = fetch(new URL("./Inter-SemiBold.otf", import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export default async function (req) {
  const inter = await font;

  const { searchParams } = new URL(req.url);

  const hasTitle = searchParams.has("title");
  const hasDescription = searchParams.has("description");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "Content Title";
  const description = hasDescription
    ? searchParams.get("description")?.slice(0, 200)
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
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, #333 24%, #333 27%, transparent 27%, transparent 74%, #333 74%, #333 77%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, #333 24%, #333 27%, transparent 27%, transparent 74%, #333 74%, #333 77%, transparent 77%, transparent)
            `,
          backgroundSize: "100px 100px",
          backgroundPosition: "-30px -10px",
          fontWeight: 600,
          color: "white",
        }}
      >
        <img
          style={{ position: "absolute", top: 20, right: 30 }}
          height="120"
          src={
            "https://bettercallgopal.vercel.app/personal/main-white-bg-trans.png"
          }
          alt="@bettercallgopal logo"
        />
        <p
          style={{
            flexDirection: "row",
            position: "absolute",
            alignItems: "center",
            bottom: 40,
            left: 80,
            margin: 0,
            fontSize: 30,
            letterSpacing: -1,
          }}
        >
          <img
            style={{
              borderRadius: "50%",
              marginRight: "20px",
            }}
            height="70"
            src={"https://bettercallgopal.vercel.app/people/gopalverma.png"}
            alt="@bettercallgopal logo"
          />
          Gopal Verma - www.gopx.dev
        </p>
        <h1
          style={{
            width: "900px",
            fontSize: 82,
            margin: "-90px 0 40px -2px",
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
            width: "900px",
            fontSize: 34,
            margin: "0 0 40px -2px",
            lineHeight: 1.3,
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
