import  { useEffect, useState } from 'react';
import axios from '../../services/axios.instance ';
import { ProjectData } from '../../Interface/ProjectInterface';


const ProjectForm = () => {
    const [proData, setProData] = useState<ProjectData[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const payload = {
                method: 'GET',
                url: `/project`,
            };

            const response = await axios(payload);
            setProData(response.data);
        };

        fetch();
        return () => {};
    }, []);
    return (
        <div>
            {proData.map((eachExp) => {
                return (
                    <div key={eachExp._id} className="fetched-data">
                        <div>{eachExp.image}</div>
                        <div>{eachExp.title}</div>
                        <div>{eachExp.desc}</div>
                        <div>{eachExp.techstack}</div>
                        <div>{eachExp.repoUrl}</div>
                        <div>{eachExp.liveUrl}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectForm;