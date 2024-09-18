import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
// import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Projects from './pages/Projects/Projects';

// IMAGES
import manage from "./assets/portfolio/desktop/image-portfolio-manage@2x.jpg";
import bookmark from "./assets/portfolio/desktop/image-portfolio-bookmark@2x.jpg";
import insure from "./assets/portfolio/desktop/image-portfolio-insure@2x.jpg";
import fylo from "./assets/portfolio/desktop/image-portfolio-fylo@2x.jpg";

const projects = [
  {
    id: 1,
    image: manage,
    title: "Manage",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
  },
  {
    id: 2,
    image: bookmark,
    title: "Bookmark",
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
  },
  {
    id: 3,
    image: insure,
    title: "Insure",
    description:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
  },
  {
    id: 4,
    image: fylo,
    title: "Fylo",
    description:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
  },
];

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/portfolio"
              element={<Portfolio projects={projects} />}
            />
            <Route
              path="/project/:id"
              element={<Projects projects={projects} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Export the projects array so it can be imported in other files
export { projects };



export default App;
