import { Suspense } from 'react';
import RoutesApp from './routes/index-routes'; 
import "primereact/resources/themes/lara-light-indigo/theme.css";    
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';    

function App() {
  return (
    <Suspense>
      <RoutesApp/>
    </Suspense>
  );
}

export default App;
