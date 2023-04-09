import Git from '../assets/images/git.svg';
import Insta from '../assets/images/insta.svg';
import Leetcode from '../assets/images/leetcode.svg';
import Linkedin from '../assets/images/linkedin.svg';
import Twitter from '../assets/images/twitter.svg';

interface SocialData {
    _id: string;
    logo: string;
    url: string;
    __v: number;
}

const FooterSection: React.FC<{ socials: SocialData[] }> = ({ socials }) => {
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
                            <li key={social._id}>
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
