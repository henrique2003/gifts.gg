import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Store } from "../pages";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Store />} />
        {/* Default route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
