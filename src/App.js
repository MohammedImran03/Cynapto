import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from './components/Editor';

function App() {
  return (
    <>
     <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/editor" element={<Editor />} />
    </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
