import About from './components/AboutSection';
import Experience from './components/ExperienceSection';
import Introduction from './components/IntroductionSection';
import LoadingDots from './components/LoadingDots';
import NavBar from './components/NavBar';
import Project from './components/ProjectSection';
import Contact from './components/ContactSection';
import Footer from './components/FooterSection';
import './scss/style.scss';

function App() {
    return (
        <div>
            {/* <LoadingDots /> */}
            <NavBar />
            <Introduction />
            <About />
            <Experience />
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
