import { BrowserRouter, Routes, Route } from "react-router-dom"
import { publicPath } from "|/routes";
import DefaultLayout from "|/components/DefaultLayout";
import { Fragment } from "react";
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          {
            publicPath.map((route, index) => {
              const Ele = route.component;
              const Layout = route.layout === null ? Fragment : (route.layout ? route.layout : DefaultLayout);
              return <Route path={route.path} element={<Layout key={index}><Ele /></Layout>} />
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
