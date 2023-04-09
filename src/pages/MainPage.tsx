import { useEffect, useState } from 'react';
import { ExpData } from '../Interface/ExperienceInterface';
import { ProjectData } from '../Interface/ProjectInterface';
import { TechData } from '../Interface/TechnologyInterface';
import About from '../components/AboutSection';
import Contact from '../components/ContactSection';
import Experience from '../components/ExperienceSection';
import Footer from '../components/FooterSection';
import Introduction from '../components/IntroductionSection';
import LoadingDots from '../components/LoadingDots';
import NavBar from '../components/NavBar';
import Project from '../components/ProjectSection';
import axios from '../services/axios.instance ';

interface SocialData {
    _id: string;
    logo: string;
    url: string;
    __v: number;
}

const MainPage = () => {
    const [wrapperClass, setWrapperClass] = useState<string>('');
    const [NavClass, setNavClass] = useState<string>('');
    const [AboutClass, setAboutClass] = useState<string>('');
    const [ExpClass, setExpClass] = useState<string>('');
    const [ProjectClass, setProjectClass] = useState<string>('');
    const [ContactClass, setContactClass] = useState<string>('');
    const [technologies, setTechnologies] = useState<TechData[]>([]);
    const [experiences, setExperiences] = useState<ExpData[]>([]);
    const [projects, setProjects] = useState<ProjectData[]>([]);
    const [socials, setSocials] = useState<SocialData[]>([]);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    setTimeout(() => {
        setWrapperClass('show');
    }, 2000);

    useEffect(() => {
        const fetchTechnologies = async () => {
            const payload = {
                method: 'GET',
                url: '/tech',
            };
            const response = await axios(payload);
            // console.log(response.data);
            setTechnologies(response.data);
        };
        const fetchExperience = async () => {
            const payload = {
                method: 'GET',
                url: '/exp',
            };
            const response = await axios(payload);
            // console.log(response.data);
            setExperiences(response.data);
        };
        const fetchProject = async () => {
            const payload = {
                method: 'GET',
                url: '/project',
            };
            const response = await axios(payload);
            // console.log(response.data);
            setProjects(response.data);
        };
        const fetchSocials = async () => {
            const payload = {
                method: 'GET',
                url: '/social',
            };
            const response = await axios(payload);
            // console.log(response.data);
            setSocials(response.data);
        };
        fetchExperience();
        fetchTechnologies();
        fetchProject();
        fetchSocials();
    }, []);
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
                {technologies.length > 0 && (
                    <About
                        AboutClass={AboutClass}
                        technologies={technologies}
                    />
                )}
                {experiences.length > 0 && (
                    <Experience ExpClass={ExpClass} experiences={experiences} />
                )}
                {projects.length > 0 && (
                    <Project ProjectClass={ProjectClass} projects={projects} />
                )}
                <Contact ContactClass={ContactClass} />
                {socials.length > 0 && <Footer socials={socials} />}
            </div>
        </div>
    );
};

export default MainPage;
