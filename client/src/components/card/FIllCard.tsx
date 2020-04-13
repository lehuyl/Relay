import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';

const { TextArea } = Input;


const FillCard = () => {
    return (
      <div>
      <Input placeholder="Title" allowClear />
      <br />
       <br />
       <TextArea placeholder="Content" allowClear />
     </div>
    )
}

export default FillCard