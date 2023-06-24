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
    const [AboutClass, setAboutClass] = useState<string>('');
    const [ExpClass, setExpClass] = useState<string>('');
    const [ProjectClass, setProjectClass] = useState<string>('');
    const [ContactClass, setContactClass] = useState<string>('');

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    setTimeout(() => {
        setWrapperClass('show');
    }, 2000);

   

    useEffect(() => {
         function handleScrollUp() {
             setNavClass('');
             if (prevScrollPos < 150) {
                 setAboutClass('');
                 setExpClass('');
                 setProjectClass('');
                 setContactClass('');
             }
         }

         function handleScrollDown() {
             setNavClass('active');
             if (prevScrollPos > 150) {
                 // display about us section
                 setAboutClass('active');
             }
             if (prevScrollPos > 1300) {
                 // display Experience  section
                 setExpClass('active');
             }
             if (prevScrollPos > 2250) {
                 // display Project  section
                 setProjectClass('active');
             }
             if (prevScrollPos > 3500) {
                 // display Contact Us  section
                 setContactClass('active');
             }
         }
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
                <Introduction />
                <About AboutClass={AboutClass} />
                <Experience ExpClass={ExpClass} />
                <Project ProjectClass={ProjectClass} />
                <Contact ContactClass={ContactClass} />
                <Footer />
            </div>
        </div>
    );
};

export default App;
