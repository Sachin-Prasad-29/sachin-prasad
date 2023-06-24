import { Technology } from '../../Interface/TechnologyInterface';
interface Props {
    tech: Technology;
    getTechLogo: (prop: string) => string | undefined;
}
const TechBadges = ({ tech, getTechLogo }: Props) => {
    return (
        <li>
            <a href={tech.url}>
                <div className="tech-box">
                    <span>
                        <img
                            className="tech-img"
                            src={getTechLogo(tech.logo)}
                            alt=""
                        />
                    </span>
                    <span
                        style={{
                            fontSize: '15px',
                            color: tech.color,
                        }}
                    >
                        {tech.name}
                    </span>
                </div>
            </a>
        </li>
    );
};

export default TechBadges;
