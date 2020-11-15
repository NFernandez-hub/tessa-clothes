import { AppRouter } from './router/AppRouter';
import { BasicLayOut } from './layout/BasicLayOut';


import './App.scss';

function App() {
  return (
    <div>
      <AppRouter>
        <BasicLayOut>
          {/* <CarritoModal>

        </CarritoModal> */}
        </BasicLayOut>
      </AppRouter>
    </div>
  );
}

export default App;
