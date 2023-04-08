import { useEffect, useState } from 'react';

import axios from '../../services/axios.instance ';

interface ExpData {
    _id: string;
    org: string;
    desination: string;
    year: string;
    period: string;
    url: string;
    __v: number;
}

const ExperienceForm = () => {
    const [expData, setExpData] = useState<ExpData[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const payload = {
                method: 'GET',
                url: `/exp`,
            };

            const response = await axios(payload);
            setExpData(response.data);
        };

        fetch();
        return () => {};
    }, []);

    return (
        <div>
            {expData.map((eachExp) => {
                return (
                    <div key={eachExp._id} className="fetched-data">
                        <div>{eachExp.url}</div>
                        <div>{eachExp.org}</div>
                        <div>{eachExp.desination}</div>
                        <div>{eachExp.year}</div>
                        <div>{eachExp.period}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default ExperienceForm;
