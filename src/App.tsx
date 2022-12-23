import React, { useState } from 'react';
import { Col, Row } from 'antd';
import './App.css';
import 'antd/dist/reset.css';
import { observer } from "mobx-react-lite"
import InputTodo from "./components/InputTodo"
import ListTodo from './components/ListTodo';

const App =()=> {
  return (
    <div className="App">
      <Row>
        <Col span={12} offset={6}>
          <InputTodo/>
          <ListTodo/>
        </Col>
      </Row>
    </div>
  );
}


export default App; 
