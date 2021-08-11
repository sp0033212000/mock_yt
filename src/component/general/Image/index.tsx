import {useMemo, useState} from "react";
import NextImage, {ImageProps as NextImageProps} from "next/image";

import {isSet} from "../../../helper/format.checker";
import Flexbox from "../Flexbox";
import classNames from "classnames";

type ImageProps = NextImageProps;

interface Props  {
    condition?: boolean;
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    imagePlaceholder?: React.ReactElement;
    className?: string;
    objectPosition?:
        | "bottom"
        | "center"
        | "left"
        | "left-bottom"
        | "left-top"
        | "right"
        | "right-bottom"
        | "right-top"
        | "top";
}

export const Image: React.FC<Props & ImageProps> = ({
                                           condition = true,
                                           className,
                                           objectPosition = "center",
                                           objectFit = "cover",
                                           imagePlaceholder,
                                           ...props
                                       }) => {
    const [isError, setIsError] = useState<boolean>(false);

    const shouldPlaceholderShow = useMemo(() => {
        return isSet(imagePlaceholder) && (isError || !isSet(props.src));
    }, [isError, imagePlaceholder, props.src]);

    return (
        <Flexbox
            condition={condition}
            justify="center"
            align="center"
            className={classNames(className, "overflow-hidden")}
        >
            {shouldPlaceholderShow ? (
                imagePlaceholder
            ) : (
                <NextImage
                    onLoad={() => setIsError(false)}
                    onError={() => setIsError(true)}
                    {...props}
                />
            )}
        </Flexbox>
    );
};

export default Image;
