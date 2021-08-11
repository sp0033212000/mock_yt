import classNames from "classnames";
import merge from "lodash.merge";
import { createElement, HTMLAttributes, useMemo } from "react";

interface Main extends MainProps {
    as?: "main";
}

interface Default extends DivProps {
    as?: undefined;
}

interface Div extends DivProps {
    as?: "div";
}

interface Footer extends FooterProps {
    as?: "footer";
}

interface Header extends HeaderProps {
    as?: "header";
}

interface Li extends LiProps {
    as?: "li";
}

interface UL extends ULProps {
    as?: "ul";
}

interface OL extends OLProps {
    as?: "ol";
}

interface Nav extends NavProps {
    as?: "nav";
}

interface Span extends SpanProps {
    as?: "span";
}

interface Label extends LabelProps {
    as?: "label";
}

type ElementProps =
    | Main
    | Div
    | Default
    | Footer
    | Header
    | Li
    | UL
    | OL
    | Nav
    | Span
    | Label;

interface Props {
    condition?: boolean;
    direction?: "row" | "col";
    justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
    align?: "start" | "end" | "center" | "baseline" | "stretch";
    expand?: boolean;
    shrink?: boolean;
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    customRef?: ElementProps["ref"];
}

export const Flexbox: React.FC<Props & ElementProps> = ({
                                                            as = "div",
                                                            condition = true,
                                                            children,
                                                            className,
                                                            direction,
                                                            justify,
                                                            align,
                                                            expand,
                                                            shrink,
                                                            wrap,
                                                            customRef,
                                                            ...props
                                                        }) => {
    const _className = useMemo<HTMLAttributes<HTMLElement>["className"]>(
        () =>
            classNames(
                className,
                "flex",
                {
                    "flex-shrink-0": shrink,
                    "flex-wrap": wrap === "wrap",
                    "flex-wrap-reverse": wrap === "wrap-reverse",
                    "flex-nowrap": wrap === "nowrap",
                },
                {
                    "flex-row": direction === "row",
                    "flex-col": direction === "col",
                },
                {
                    "justify-start": justify === "start",
                    "justify-end": justify === "end",
                    "justify-center": justify === "center",
                    "justify-between": justify === "between",
                    "justify-around": justify === "around",
                    "justify-evenly": justify === "evenly",
                },
                {
                    "items-start": align === "start",
                    "items-end": align === "end",
                    "items-center": align === "center",
                    "items-baseline": align === "baseline",
                    "items-stretch": align === "stretch",
                },
                { "flex-1": expand }
            ),
        [className, direction, justify, align, expand, shrink, wrap]
    );

    if (!condition) return null;

    return createElement(
        as,
        merge({}, { className: _className, ...props }, { ref: customRef }),
        children
    );
};

export default Flexbox;
