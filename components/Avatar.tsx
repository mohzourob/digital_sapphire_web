import { Avatar as AntAvatar } from "antd";

const Avatar = (props: any) => {
  return (
    <AntAvatar style={{ background: "var(--main-button-color)" }} {...props} />
  );
};

export default Avatar;
