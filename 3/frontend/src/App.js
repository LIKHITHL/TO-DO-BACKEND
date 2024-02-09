import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tasks from './Tasks';
import AddTasks from './AddTasks';
import EditTask from './EditTask';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tasks />}></Route>
          <Route path='/addTask' element={<AddTasks />}></Route>
          <Route path='/edit/:id' element={<EditTask />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
