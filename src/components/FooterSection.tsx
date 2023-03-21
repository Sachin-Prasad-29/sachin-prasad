import Git from '../assets/images/git.svg';
import Insta from '../assets/images/insta.svg';
import Leetcode from '../assets/images/leetcode.svg';
import Linkedin from '../assets/images/linkedin.svg';
import Twitter from '../assets/images/twitter.svg';
import socials from '../data/socials';

const FooterSection: React.FC = () => {
    return (
        <footer id="footer">
            <div className="footer">
                <ul className="social-icons">
                    {socials.map((social) => {
                        let Img: string;
                        switch (social.logo) {
                            case 'Insta':
                                Img = Insta;
                                break;
                            case 'Leetcode':
                                Img = Leetcode;
                                break;
                            case 'Git':
                                Img = Git;
                                break;
                            case 'Twitter':
                                Img = Twitter;
                                break;
                            case 'Linkedin':
                                Img = Linkedin;
                                break;
                            default:
                                Img = '';
                                break;
                        }
                        return (
                            <li key={social.sNo}>
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={Img} alt="" width={30} />
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <p>
                    Site Build using ➡️ React, Typescript, Scss and lots of Love
                    💕
                </p>
                <p>
                    © <span>{new Date().toISOString().substring(0, 4)}</span> -
                    Sachin
                </p>
            </div>
        </footer>
    );
};

export default FooterSection;
