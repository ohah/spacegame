import { Route, Routes } from 'react-router-dom';

import { Office } from 'pages';

import { Auth, Body, Header, SideBar } from 'components';

function App() {
  return (
    <Body>
      <div className="flex flex-none min-w-screen">
        <Header />
      </div>
      <div className="flex min-w-full min-h-full flex-grow">
        <SideBar />
        <main className="flex-grow p-3">
          <Routes>
            <Route path="/" element={<Auth />}>
              <Route path="/" element={<Office />} />
              <Route path="/test" element={<Office />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Body>
  );
}

export default App;
