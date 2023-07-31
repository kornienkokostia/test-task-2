import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { TaskOne } from './pages/Task1/TaskOne';
import { TaskTwo } from './pages/Task2/TaskTwo';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/task1" element={<TaskOne />}></Route>
        <Route path="/task2" element={<TaskTwo />}></Route>
      </Routes>
    </>
  );
};
