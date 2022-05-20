import { RootStateOrAny, useSelector } from "react-redux";

const TwitterSVG = ({ fill, width }: any) => {
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
        d="M16.757 7.864a4.443 4.443 0 0 1-1.279.35c.46-.275.813-.711.979-1.231-.43.255-.907.44-1.413.54a2.226 2.226 0 0 0-3.792 2.03 6.317 6.317 0 0 1-4.587-2.325 2.223 2.223 0 0 0 .689 2.97 2.219 2.219 0 0 1-1.009-.278v.028c0 1.079.768 1.978 1.785 2.183a2.237 2.237 0 0 1-1.005.038 2.228 2.228 0 0 0 2.08 1.545 4.466 4.466 0 0 1-3.296.922 6.3 6.3 0 0 0 3.411 1c4.094 0 6.332-3.391 6.332-6.332 0-.096-.002-.192-.006-.288a4.531 4.531 0 0 0 1.11-1.152Z"
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

export default TwitterSVG;
