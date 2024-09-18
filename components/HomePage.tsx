//@ts-nocheck

import React from "react";
import OrgBadge from "@/components/OrgBadge";
import ImageTooltip from "@/components/ImageTooltip";
import { RiTwitterXLine } from "react-icons/ri";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaReddit,
  FaLinkedin,
  FaQuora,
  FaPinterest,
  FaDiscord,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import {
  TIMELINE,
  RESUME,
  WORKING,
  STUDY,
  BUILDING,
  MAINTAINING,
  CORE_TEAM,
} from "@/content/me";
import Timeline from "@/components/Timeline";

const HomePage: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-3xl my-16 flex flex-col gap-y-8 px-8">
      <h1 className="text-4xl font-bold">Gopal Verma</h1>
      <p>
        Hey, I'm{" "}
        <span>
          <ImageTooltip
            hoverImage={{
              src: "/personal/me/twitter.png",
              alt: "my og",
              width: 200,
              height: 200,
            }}
            text="Gopal Verma"
            link="https://x.com/bettercallgopal"
          />
        </span>
        , an indie developer, open sourceror and full-stack developer.
      </p>

      <div className="flex flex-col">
        <p>
          Working at{" "}
          {WORKING.map((w, i) => (
            <OrgBadge key={i} name={w.name} link={w.link} logo={w.logo} />
          ))}
        </p>
        <p>
          Building{" "}
          {BUILDING.map((w, i) => (
            <OrgBadge key={i} name={w.name} link={w.link} logo={w.logo} />
          ))}
        </p>
        <p>
          Maintaining{" "}
          {MAINTAINING.map((w, i) => (
            <OrgBadge key={i} name={w.name} link={w.link} logo={w.logo} />
          ))}
        </p>
        <p>
          Core team of{" "}
          {CORE_TEAM.map((w, i) => (
            <OrgBadge key={i} name={w.name} link={w.link} logo={w.logo} />
          ))}
        </p>
        <p>
          Studied at{" "}
          {STUDY.map((w, i) => (
            <OrgBadge key={i} name={w.name} link={w.link} logo={w.logo} />
          ))}
        </p>
      </div>

      <p>
        Find my <ImageTooltip text="Stats-&-Streaks" link="/stats" />. Find my{" "}
        <ImageTooltip text="resume" link={RESUME} />.
      </p>

      <p>
        "*Building something people want*" is where my passion lies. You can
        find all my projects, contributions and collaborations here on my{" "}
        <ImageTooltip text="showcase" link="/showcase" />.
      </p>

      <p>
        I write <ImageTooltip text="blog posts" link="/blogs" /> about
        programming, tech, life etc. Occasionally, I make videos for{" "}
        <ImageTooltip
          text="YouTube"
          link="https://www.youtube.com/channel/UCgfABFAZox1a26_iyyUuYeg"
        />
        . You can discover my code snippets, notes, mindmaps, resources and
        detailed analyses in my interactive{" "}
        <ImageTooltip text="notebooks." link="/notebooks" />
      </p>

      <p>
        Outside of programming, being a mountain guy from{" "}
        <ImageTooltip
          hoverImage={{
            src: "/personal/me/utkd.jpg",
            alt: "my og",
            width: 200,
            height: 100,
          }}
          text="Uttarakhand"
          link="https://maps.app.goo.gl/pWWe9LMDAvabPUVL6"
        />
        , I enjoy mountain trekking and exploring valleys. Some of my memories
        can be found on{" "}
        <ImageTooltip
          text="Pintrest"
          link="https://www.pinterest.com/GopalVerma1303/"
        />
        .
      </p>

      <p>
        Right now I live in{" "}
        <ImageTooltip
          text="Chandigarh"
          hoverImage={{
            src: "/personal/me/chd.jpg",
            alt: "my og",
            width: 200,
            height: 100,
          }}
          link="https://maps.app.goo.gl/HxUHbDUukonBaqGH8"
        />
        . If you are around, feel free to reach me out, we could have some
        *chai* or work together.
      </p>

      <h2>Timeline</h2>
      <div className="ml-[2px]">
        <Timeline events={TIMELINE} />
      </div>
      <h2>Find me on</h2>
      <div className="flex gap-2 flex-wrap">
        <ImageTooltip
          text="Twitter"
          link="https://twitter.com/bettercallgopal"
          Icon={RiTwitterXLine}
        />
        <ImageTooltip
          text="Facebook"
          link="https://www.facebook.com/profile.php?id=100067485754453"
          Icon={FaFacebook}
        />
        <ImageTooltip
          text="Instagram"
          link="https://www.instagram.com/bettercallgopal"
          Icon={FaInstagram}
        />
        <ImageTooltip
          text="Reddit"
          link="https://www.reddit.com/user/Gopal__Verma/"
          Icon={FaReddit}
        />
        <ImageTooltip
          text="LinkedIn"
          link="https://www.linkedin.com/in/vermagopal"
          Icon={FaLinkedin}
        />
        <ImageTooltip
          text="Quora"
          link="https://www.quora.com/profile/Gopal-Verma-301"
          Icon={FaQuora}
        />
        <ImageTooltip
          text="YouTube"
          link="https://www.youtube.com/channel/UCgfABFAZox1a26_iyyUuYeg"
          Icon={FaYoutube}
        />
        <ImageTooltip
          text="Pinterest"
          link="https://in.pinterest.com/GopalVerma1303/_saved/"
          Icon={FaPinterest}
        />
        <ImageTooltip
          text="Discord"
          link="https://discord.com/users/777003660244418570"
          Icon={FaDiscord}
        />
      </div>
      <p>
        Mail me at{" "}
        <ImageTooltip
          text="business.gopalverma@gmail.com"
          link="mailto:business.gopalverma@gmail.com"
          Icon={FaEnvelope}
        />{" "}
        Or, book a{" "}
        <ImageTooltip
          Icon={FaPhone}
          text="personalized call"
          link="https://cal.com/bettercallgopal/personalizedcall"
        />
      </p>
      <p>
        Feel free to reach out if you have any questions or would like to
        collaborate. Thank you!
      </p>
    </div>
  );
};

export default HomePage;
