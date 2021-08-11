import React from "react";
import classNames from "classnames";

import Link from "next/link";

import Flexbox from "@/component/general/Flexbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faFire, faHome } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Flexbox
      as={"footer"}
      className={classNames("fixed", "bottom-0", "w-full", "bg-white")}
    >
      <nav className={classNames("w-full")}>
        <Flexbox as={"ul"}>
          {route.map(({ title, icon }, idx) => (
            <Flexbox
              key={title}
              justify={"center"}
              align={"center"}
              className={classNames("flex-1", "cursor-pointer")}
            >
              <Link href={"/"}>
                <div className={classNames("h-14", "lg:h-16")}>
                  <Flexbox
                    direction={"col"}
                    justify={"center"}
                    align={"center"}
                    as={"span"}
                    className={classNames("h-full", "hover:text-gray-900", {
                      "text-gray-400": idx !== 0,
                      "text-gray-900": idx === 0,
                    })}
                  >
                    <Flexbox
                      as={"span"}
                      justify={"center"}
                      align={"center"}
                      className={classNames("text-lg", "lg:text-2xl")}
                    >
                      <FontAwesomeIcon icon={icon} />
                    </Flexbox>
                    <p className={classNames("text-xs", "lg:text-base")}>
                      {title}
                    </p>
                  </Flexbox>
                </div>
              </Link>
            </Flexbox>
          ))}
        </Flexbox>
      </nav>
    </Flexbox>
  );
};

export default Footer;

const route = [
  { title: "Home", icon: faHome },
  { title: "Trending", icon: faFire },
  { title: "Subscriptions", icon: faYoutube },
  { title: "Library", icon: faFilm },
];
