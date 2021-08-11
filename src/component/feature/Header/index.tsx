import React, { useRef, useState } from "react";
import Flexbox from "@/component/general/Flexbox";
import classNames from "classnames";
import Link from "next/link";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "@/public/images/icon.svg";
import useInteractiveOutsideTargetHandler from "../../../hooks/useInteractiveOutsideTargetHandler/useInteractiveOutsideTargetHandler";

const Header = () => {
  return (
    <Flexbox
      as="header"
      className={classNames(
        "px-10",
        "py-4",
        "sticky",
        "top-0",
        "border-b-2",
        "border-solid",
        "border-gray-400"
      )}
    >
      <Flexbox
        justify="center"
        align="center"
        className={classNames("w-40", "flex-shrink-0")}
      >
        <Icon />
      </Flexbox>
      <Flexbox
        align={"center"}
        className={classNames("flex-1", "mx-6", "relative")}
      >
        <input className={classNames("w-full", "h-full", "group")} />
        <div
          className={classNames(
            "absolute",
            "h-1.5",
            "bg-blue-400",
            "bottom-0",
            "rounded-full",
            "transition-width",
            "w-0",
            "focused-sibling:w-full"
          )}
        />
      </Flexbox>
      <Flexbox
        justify="center"
        align="center"
        className={classNames(
          "w-10",
          "h-10",
          "text-3xl",
          "flex-shrink-0",
          "text-gray-400"
        )}
      >
        <FontAwesomeIcon icon={faSearch} />
      </Flexbox>
      <User />
    </Flexbox>
  );
};

export default Header;

const User = () => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useInteractiveOutsideTargetHandler(ref.current, () => setShow(false));

  const handleClick: React.MouseEventHandler = (e) => {
    setShow((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Flexbox
        onClick={handleClick}
        justify={"center"}
        align={"center"}
        className={classNames(
          "w-10",
          "h-10",
          "bg-blue-500",
          "rounded-cl",
          "text-white",
          "font-bold",
          "ml-6",
          "relative"
        )}
      >
        W
        <div
          ref={ref}
          onClick={(e) => e.stopPropagation()}
          className={classNames(
            "absolute",
            "-bottom-4",
            "transform",
            "translate-y-full",
            "right-0",
            "shadow",
            "rounded-xl",
            "transition-max-height",
            "overflow-hidden",
            {
              "max-h-0": !show,
              "max-h-max": show,
            }
          )}
        >
          <Flexbox
            align={"center"}
            className={classNames("w-72", "px-6", "py-4")}
          >
            <Flexbox
              justify={"center"}
              align={"center"}
              className={classNames(
                "w-10",
                "h-10",
                "bg-blue-500",
                "rounded-cl",
                "text-white",
                "font-bold",
                "mr-2"
              )}
            >
              W
            </Flexbox>
            <div className={classNames("text-gray-900")}>
              <p className={classNames("font-bold", "text-2xl")}>Weiliao</p>
              <Link href="/">
                <span className={classNames("font-bold", "text-blue-500")}>
                  管理您的帳號
                </span>
              </Link>
            </div>
          </Flexbox>
        </div>
      </Flexbox>
    </React.Fragment>
  );
};
