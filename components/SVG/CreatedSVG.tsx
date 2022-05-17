import { RootStateOrAny, useSelector } from "react-redux";

const CreatedSVG = () => {
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 3H6a3.009 3.009 0 0 0-3 3v8a3.01 3.01 0 0 0 3 3h8a3.01 3.01 0 0 0 3-3V6a3.01 3.01 0 0 0-3-3Zm-2 8h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h1V8a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2Z"
        fill={theme === "dark" ? "#FFF" : "#20283B"}
      />
      <path
        d="M16 21H7a1 1 0 0 1 0-2h9a3 3 0 0 0 3-3V7a1 1 0 0 1 2 0v9a5.006 5.006 0 0 1-5 5Z"
        fill={theme === "dark" ? "#FFF" : "#20283B"}
      />
    </svg>
  );
};

export default CreatedSVG;
