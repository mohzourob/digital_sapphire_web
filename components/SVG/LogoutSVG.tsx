import { RootStateOrAny, useSelector } from "react-redux";

const LogoutSVG = () => {
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)" fill={theme === "dark" ? "#FFF" : "#20283B"}>
        <path d="M15 13a1 1 0 0 0-1 1v4c0 .551-.448 1-1 1h-3V4c0-.854-.544-1.617-1.362-1.9L8.342 2H13c.552 0 1 .45 1 1v3a1 1 0 1 0 2 0V3c0-1.654-1.346-3-3-3H2.25c-.038 0-.07.017-.107.022C2.095.018 2.049 0 2 0 .897 0 0 .897 0 2v18c0 .854.544 1.617 1.362 1.901l6.018 2.006c.204.063.407.093.62.093 1.103 0 2-.897 2-2v-1h3c1.654 0 3-1.346 3-3v-4a1 1 0 0 0-1-1Z" />
        <path d="m23.707 9.293-4-4A1 1 0 0 0 18 6v3h-4a1 1 0 0 0 0 2h4v3a1 1 0 0 0 1.707.707l4-4a.999.999 0 0 0 0-1.414Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path
            fill={theme === "dark" ? "#FFF" : "#20283B"}
            d="M0 0h20v20H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoutSVG;
