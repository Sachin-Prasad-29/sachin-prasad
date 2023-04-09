import { ProjectData } from '../../Interface/ProjectInterface';
interface Props {
    handleCount: (value: number) => void;
    projects: ProjectData[];
}
const ShowMore = ({ handleCount, projects }: Props) => {
    return (
        <div
            style={{
                width: '40px',
                color: 'lightblue',
                cursor: 'pointer',
                margin: '0 auto',
            }}
            onClick={(e) => {
                handleCount(projects.length - 1);
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
            </svg>
        </div>
    );
};

export default ShowMore;
