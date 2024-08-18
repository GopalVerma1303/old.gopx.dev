import React from "react";
import styles from "@/pages/index.module.css";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

const SocialBundle: React.FC = () => {
  return (
    <div className="flex justify-center flex-col h-full">
      <div className="flex justify-center">
        <Link href="https://www.facebook.com/profile.php?id=100067485754453">
          <div className={styles.optimization}>
            <div
              className="flex items-center gap-[3px]"
              style={{ fontSize: ".9rem" }}
            >
              <FaFacebook />
              <code>Facebook</code>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link href="https://twitter.com/bettercallgopal">
          <div className={styles.optimization}>
            <div
              className="flex items-center gap-[3px]"
              style={{ fontSize: ".9rem" }}
            >
              <BsTwitter />
              <code>Twitter</code>
            </div>
          </div>
        </Link>
        <Link href="https://www.instagram.com/bettercallgopal">
          <div className={styles.optimization}>
            <div
              className="flex items-center gap-[3px]"
              style={{ fontSize: ".9rem" }}
            >
              <FaInstagram />
              <code>Instagram</code>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-center">
        <Link href="https://www.youtube.com/channel/UCgfABFAZox1a26_iyyUuYeg">
          <div className={styles.optimization}>
            <div
              className="flex items-center gap-[3px]"
              style={{ fontSize: ".9rem" }}
            >
              <FaYoutube />
              <code>YouTube</code>
            </div>
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/vermagopal">
          <div className={styles.optimization}>
            <div
              className="flex items-center gap-[3px]"
              style={{ fontSize: ".9rem" }}
            >
              <FaLinkedin />
              <code>LinkedIn</code>
            </div>
          </div>
        </Link>
        <Link href="https://www.reddit.com/user/Gopal__Verma/">
          <div className={styles.optimization}>
            <div
              className="flex items-center gap-[3px]"
              style={{ fontSize: ".9rem" }}
            >
              <FaReddit />
              <code>Reddit</code>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-center">
        <Link href="https://www.quora.com/profile/Gopal-Verma-301">
          <div className={styles.optimization}>
            <div
              className="flex items-center gap-[3px]"
              style={{ fontSize: ".9rem" }}
            >
              <FaQuora />
              <code>Quora</code>
            </div>
          </div>
        </Link>
        <Link href="https://in.pinterest.com/GopalVerma1303/_saved/">
          <div className={styles.optimization}>
            <div
              className="flex items-center gap-[3px]"
              style={{ fontSize: ".9rem" }}
            >
              <FaPinterest />
              <code>Pinterest</code>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-center">
        <Link href="https://discord.com/users/777003660244418570">
          <div className={styles.optimization}>
            <div
              className="flex items-center gap-[3px]"
              style={{ fontSize: ".9rem" }}
            >
              <FaDiscord />
              <code>Discord</code>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialBundle;
