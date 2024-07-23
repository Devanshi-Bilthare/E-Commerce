import React from 'react'
import { Spin } from 'antd';
import 'antd/dist/antd';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Spin size="large"/>
    </div>
  )
}

export default Loading