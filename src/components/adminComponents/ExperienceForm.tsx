import { useEffect, useRef, useState } from 'react';
import { ExpData } from '../../Interface/ExperienceInterface';
import axios from '../../services/axios.instance ';

const ExperienceForm = () => {
    const [expData, setExpData] = useState<ExpData[]>([]);
    const [addExp, setAddExp] = useState<boolean>(false);
    // const [editExp, setEditExp] = useState<boolean>(false);
    const orgRef = useRef<HTMLInputElement>(null);
    const desinationRef = useRef<HTMLInputElement>(null);
    const yearRef = useRef<HTMLInputElement>(null);
    const periodRef = useRef<HTMLInputElement>(null);
    const urlRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!addExp) {
            setAddExp(true);
        } else {
            const org = orgRef.current?.value;
            const desination = desinationRef.current?.value;
            const year = yearRef.current?.value;
            const period = periodRef.current?.value;
            const url = urlRef.current?.value;
            const data = { org, desination, year, period, url };
            const payload = {
                method: 'POST',
                url: '/exp',
                data,
            };
            const response = await axios(payload);
            console.log(response.data);
            setAddExp(false);
        }
    };

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
        <div className="exp-box">
            <p className="fetched-data__heading">
                <span>Current Experience</span>
            </p>
            <div className="fetched-data">
                {expData.map((eachExp, index) => {
                    return (
                        <div key={eachExp._id} className="fetched-data__each">
                            <div className="edit-div">
                                <span>S.No : {index + 1} </span>
                                <div>
                                    <button className="edit-div__btn-edit">
                                        edit
                                    </button>
                                    <button className="edit-div__btn-delete">
                                        delete
                                    </button>
                                </div>
                            </div>
                            <div>
                                ORG : <span>{eachExp.org}</span>
                            </div>
                            <div>
                                DESINATION : <span>{eachExp.desination}</span>
                            </div>
                            <div>
                                YEAR : <span>{eachExp.year}</span>
                            </div>
                            <div>
                                PERIOD : <span>{eachExp.period}</span>
                            </div>
                            <div>
                                URL : <span> {eachExp.url}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="btn">
                <button onClick={(e) => handleSubmit(e)}>
                    {addExp && <> Submit</>}
                    {!addExp && <>Add New Experience</>}
                </button>
            </div>
            {addExp && (
                <div className="exp-box__form">
                    <div className="input-box">
                        <input type="text" name="Org" required ref={orgRef} />
                        <label>ORG : </label>
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            name="Desination"
                            required
                            ref={desinationRef}
                        />
                        <label>DESINATION : </label>
                    </div>
                    <div className="input-box">
                        <input type="text" name="Year" required ref={yearRef} />
                        <label>YEAR : </label>
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            name="Period"
                            required
                            ref={periodRef}
                        />
                        <label>PERIOD : </label>
                    </div>
                    <div className="input-box">
                        <input type="text" name="Url" required ref={urlRef} />
                        <label>URL : </label>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperienceForm;
