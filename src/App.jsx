
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { Header } from './layouts/header';
import { About } from './pages/Home/components/about';
function App() {
  return (
    <>
    
  <Header />

      
<Routes>

  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<About />} />

  

</Routes>
    
    
    </>
  );
}
export default App;
