import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import  from ''

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <div className="BarTender">
        <Header />
        <Routes>
          <Route path="/" element={</>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
