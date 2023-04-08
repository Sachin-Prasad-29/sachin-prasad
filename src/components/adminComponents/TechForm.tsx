import { useEffect, useState } from 'react';
import axios from '../../services/axios.instance ';

interface TechData {
    _id: string;
    name: string;
    logo: string;
    color: string;
    url: string;
    __v: number;
}

const TechForm = () => {
    const [techData, setTechData] = useState<TechData[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const payload = {
                method: 'GET',
                url: `/tech`,
            };

            const response = await axios(payload);
            setTechData(response.data);
        };

        fetch();
        return () => {};
    }, []);
    return (
        <div>
            {techData.map((eachExp) => {
                return (
                    <div key={eachExp._id} className="fetched-data">
                        <div>{eachExp.name}</div>
                        <div>{eachExp.logo}</div>
                        <div>{eachExp.color}</div>
                        <div>{eachExp.url}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default TechForm;
