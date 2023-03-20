import { useEffect, useState } from 'react';
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
    const [wrapperClass, setWrapperClass] = useState<string>('');
    const [NavClass, setNavClass] = useState<string>('');
    const [IntroClass, setIntroClass] = useState<string>('');
    const [AboutClass, setAboutClass] = useState<string>('');
    const [ExpClass, setExpClass] = useState<string>('');
    const [ProjectClass, setProjectClass] = useState<string>('');
    const [ContactClass, setContactClass] = useState<string>('');
    const [FootClass, setFootClass] = useState<string>('');
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    setTimeout(() => {
        setWrapperClass('show');
    }, 2000);

    function handleScrollUp() {
        console.log('Scrolled up!', prevScrollPos);
        setNavClass('');
        if (prevScrollPos < 150) {
            // hide about us section
        }
        if (prevScrollPos < 1300) {
            // hide Experience  section
        }
        if (prevScrollPos < 2250) {
            // hide Project  section
        }
        if (prevScrollPos < 3500) {
            // hide Contact Us  section
        }
        if (prevScrollPos < 4000) {
            // hide Footer section
        }
    }

    function handleScrollDown() {
        console.log('Scrolled down!', prevScrollPos);
        setNavClass('active');
        if (prevScrollPos > 150) {
            // display about us section
        }
        if (prevScrollPos > 1300) {
            // display Experience  section
        }
        if (prevScrollPos > 2250) {
            // display Project  section
        }
        if (prevScrollPos > 3500) {
            // display Contact Us  section
        }
        if (prevScrollPos > 4000) {
            // display Footer section
        }
    }

    useEffect(() => {
        function handleScroll() {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > prevScrollPos) {
                handleScrollDown();
            } else {
                handleScrollUp();
            }
            setPrevScrollPos(currentScrollPos);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    return (
        <div>
            <LoadingDots />
            <div id="wrapper" className={wrapperClass}>
                <NavBar NavClass={NavClass} />
                <Introduction IntroClass={IntroClass} />
                <About AboutClass={AboutClass} />
                <Experience ExpClass={ExpClass} />
                <Project ProjectClass={ProjectClass} />
                <Contact ContactClass={ContactClass} />
                <Footer FootClass={FootClass} />
            </div>
        </div>
    );
};

export default App;
