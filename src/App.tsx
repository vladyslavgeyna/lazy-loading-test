import { Route, Routes, BrowserRouter } from "react-router";
import { SideNav } from "./components/SideNav";
import { lazy, Suspense } from "react";
import { Loading } from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contacts = lazy(() => import("./pages/Contacts"));

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <SideNav />

        <div className="page-content">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
