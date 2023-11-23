import classNames from "classnames";
import { memo } from "react";

type GridProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  type?: "rows" | "cols";
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: number;
};
const Grid = memo(function Grid({
  type = "cols",
  size = 12,
  children,
  className,
  gap = 4,
  ...rest
}: GridProps) {
  return (
    <div className={classNames("grid", className)} {...rest}>
      {children}
    </div>
  );
});

export default Grid;
