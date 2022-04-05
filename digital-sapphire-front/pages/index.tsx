import type { NextPage } from 'next';
import Head from 'next/head';
import { DatePicker, Space } from 'antd';

function onChange(date: any, dateString: any) {
  console.log(date, dateString);
}

const Home: NextPage = () => {
  return (
    <div>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
      </Space>
    </div>
  );
};

export default Home;
