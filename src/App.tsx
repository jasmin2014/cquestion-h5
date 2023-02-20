import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Button, Popup } from 'antd-mobile';
import './dist.css';

import EwtQuestion from './components/Question';

function App() {
  // const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className="App">
      {/* <Button onClick={() => {setVisible(true)}}>点开弹框弹出</Button>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
        bodyStyle={{ height: '40vh' }}
      >
        弹出内容
      </Popup> */}
      <EwtQuestion />
    </div>
  );
}

export default App;
