import React from 'react';
import {Layout, Avatar, Menu, Breadcrumb, Row, Col, Input} from 'antd';


const { Search } = Input;

const SearchBar = () => {
    return (
        <Search
        placeholder="Search"
        onSearch={value => console.log(value)}
        style={{ width: 300 }}
      /> 
    )
}

export default SearchBar