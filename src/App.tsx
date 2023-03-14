import About from './components/AboutSection';
import Contact from './components/ContactSection';
import Experience from './components/ExperienceSection';
import Footer from './components/FooterSection';
import Introduction from './components/IntroductionSection';
import LoadingDots from './components/LoadingDots';
import NavBar from './components/NavBar';
import Project from './components/ProjectSection';
import './scss/style.scss';

const App: React.FC = () => {
    return (
        <div>
            {/* <LoadingDots /> */}
            <NavBar />
            <Introduction />
            <About />
            <Experience />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
