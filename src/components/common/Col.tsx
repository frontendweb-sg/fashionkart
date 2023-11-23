import classNames from "classnames";
import { memo } from "react";

type ColProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

const Col = memo(function Col({
  size,
  className,
  children,
  ...rest
}: ColProps) {
  return (
    <div
      className={classNames(size && `col-span-${size}`, className)}
      {...rest}
    >
      {children}
    </div>
  );
});

export default Col;
