import { Loading, ProtectedRouter } from "./components";
import { Login } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const { isLoading } = useSelector((state) => state.loading);

  return (
    <BrowserRouter>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/" element={<h1>Hola</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
