import { RootStateOrAny, useSelector } from "react-redux";

const InstagramSVG = () => {
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.621 13.8c-.805 0-1.53.34-2.045.88l-6.012-2.944c.02-.138.035-.278.035-.422 0-.14-.014-.277-.034-.412l6.004-2.911a2.814 2.814 0 0 0 2.052.887 2.825 2.825 0 1 0-2.824-2.824c0 .14.013.277.033.412L7.826 9.377a2.814 2.814 0 0 0-2.052-.888 2.825 2.825 0 1 0 2.045 4.77l6.013 2.944c-.021.137-.035.278-.035.422A2.825 2.825 0 1 0 16.62 13.8Z"
        fill={theme === "dark" ? "#FFF" : "#20283B"}
      />
    </svg>
  );
};

export default InstagramSVG;
