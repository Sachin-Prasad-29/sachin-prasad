import { MdWorkOutline } from 'react-icons/md';
import { ExpData } from '../../Interface/ExperienceInterface';
interface Props {
    experience: ExpData;
}

const ExperienceBadges = ({ experience }: Props) => {
    return (
        <tr >
            <td className="year">{experience.year}</td>
            <td>
                <span className="title">
                    <MdWorkOutline />
                    &emsp;{experience.desination}
                </span>
                <strong>
                    <br />
                    <a
                        href={experience.url}
                        target="_blank"
                        className="no-select"
                        rel="noopener noreferrer"
                    >
                        @{experience.org}
                    </a>
                </strong>
                <div className="time">{experience.period}</div>
            </td>
        </tr>
    );
};

export default ExperienceBadges;
