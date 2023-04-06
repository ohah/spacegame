import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import { Body, Header, SideBar } from 'components';

function App() {
  return (
    <Body>
      <div className="flex flex-none min-w-screen">
        <Header />
      </div>
      <div className="flex min-w-full min-h-full flex-grow">
        <SideBar />
        <div className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<div> ㅁㄴㅇㄹ </div>} />
          </Routes>
        </div>
      </div>
    </Body>
  );
}

export default App;
