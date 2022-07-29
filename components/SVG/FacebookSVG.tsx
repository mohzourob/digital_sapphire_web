import { RootStateOrAny, useSelector } from "react-redux";

const FacebookSVG = ({ fill, width }: any) => {
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  return (
    <svg
      width={width || 20}
      height={width || 20}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.954 8.157a5.335 5.335 0 0 0-.901-.098c-.648 0-.69.282-.69.733v.802h1.62l-.142 1.662h-1.478v5.056h-2.029v-5.056H9.292V9.594h1.042V8.566c0-1.409.662-2.197 2.324-2.197.578 0 1 .084 1.55.197l-.254 1.591Z"
        fill={
          fill
            ? theme !== "light"
              ? "#FFF"
              : "#20283B"
            : theme === "light"
            ? "#FFF"
            : "#20283B"
        }
      />
    </svg>
  );
};

export default FacebookSVG;
