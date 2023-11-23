import { memo } from "react";

/**
 * Screen component
 */
const Screen = memo(function Screen({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
});

export default Screen;
