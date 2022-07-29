import { RootStateOrAny, useSelector } from "react-redux";

const ETHSVG = (props: any) => {
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  return (
    <svg
      style={{
        height: 20,
        width: 20,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      {...props}
    >
      <rect width="100%" height="100%" fill="transparent" />
      <path
        fill="none"
        stroke={theme === "dark" ? "#FFF" : "#20283B"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
        d="M128 16v224M216 128l-88 40-88-40"
      />
      <path
        fill="none"
        stroke={theme === "dark" ? "#FFF" : "#20283B"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
        d="m128 16 88 112-88 112-88-112 88-112z"
      />
    </svg>
  );
};

export default ETHSVG;
