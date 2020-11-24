import { AppRouter } from './router/AppRouter';
import { BasicLayOut } from './layout/BasicLayOut';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {

  return (
    <div>
      <ToastContainer />
      <AppRouter>
        <BasicLayOut>

        </BasicLayOut>
      </AppRouter>
    </div>
  );
}

export default App;
