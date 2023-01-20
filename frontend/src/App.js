import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <div >
        <h2> To-Do List Application</h2>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
