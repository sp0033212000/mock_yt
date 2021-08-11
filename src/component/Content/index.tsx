import React from "react";
import classNames from "classnames";
import Image from "next/image";
import Flexbox from "@/component/general/Flexbox";

const randomImage = () => {
  const width = Math.floor(Math.random() * 50) + 700;
  const height = Math.floor(Math.random() * 50) + 250;
  return {
    width,
    height,
    src: `https://source.unsplash.com/random/${width}x${height}`,
  };
};

const Content = () => {
  return (
    <ul
      className={classNames(
        "w-full",
        "grid",
        "grid-cols-fit-card",
        "p-4",
        "gap-4"
      )}
    >
      {[...new Array(5)].map((_, idx) => {
        const { width, height, src } = randomImage();
        return (
          <Flexbox
            as={"li"}
            direction={"col"}
            key={idx}
            className={classNames("overflow-hidden")}
          >
            <Image
              src={src}
              width={"320px"}
              height={"128px"}
              layout={"responsive"}
              objectFit={"cover"}
              objectPosition={"center"}
            />
            <Flexbox className={classNames("p-2")}>
              <Flexbox
                className={classNames(
                  "w-10",
                  "h-10",
                  "relative",
                  "rounded-cl",
                  "overflow-hidden",
                  "flex-shrink-0"
                )}
              >
                <Image
                  src={src}
                  layout={"fill"}
                  objectFit={"cover"}
                  objectPosition={"center"}
                />
              </Flexbox>
              <div className={classNames("flex-1", "ml-4", "overflow-hidden")}>
                <p
                  className={classNames(
                    "overflow-hidden",
                    "flex-1",
                    "line-clamp-2",
                    "leading-4",
                    "font-bold",
                    "mb-1"
                  )}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus aut earum excepturi iste neque nostrum numquam sed
                  ullam veritatis? Consectetur dolore excepturi impedit
                  inventore magni mollitia odio optio ullam voluptates?
                </p>
                <p className={classNames("text-xs")}>
                  Somebody - Some Channel・nK views・n days ago
                </p>
              </div>
            </Flexbox>
          </Flexbox>
        );
      })}
    </ul>
  );
};

export default Content;
