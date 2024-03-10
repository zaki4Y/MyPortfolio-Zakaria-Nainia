
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
 

  

</Routes>
    
    
    </>
  );
}
export default App;
