import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a href="#">Item</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="#">Collection</a>
    </Menu.Item>
  </Menu>
);

const ArrowDropdown = () => {
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Create <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default ArrowDropdown;
