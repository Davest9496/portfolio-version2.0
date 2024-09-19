import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
// import Projects from './pages/Projects/Projects';
import { projects } from "./data/ProjectData";
import Projects from './pages/Projects/Projects';

function App() {
  console.log(projects);
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/project/:id"
              element={<Projects projects={projects} />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
