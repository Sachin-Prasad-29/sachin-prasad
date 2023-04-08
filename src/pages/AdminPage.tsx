import React, { useState } from 'react';

import AdminLogIn from '../components/adminComponents/AdminLogin';
import ExperienceForm from '../components/adminComponents/ExperienceForm';
import ProjectForm from '../components/adminComponents/ProjectForm';
import SocialForm from '../components/adminComponents/SocialForm';
import TechForm from '../components/adminComponents/TechForm';

const AdminPage = () => {
    const [showLogin, setShowLogin] = useState<boolean>(false);
    return (
        <div>
            {showLogin && <AdminLogIn setShowLogin={setShowLogin} />}
            {!showLogin && (
                <div className="admin-main">
                    <div className="admin-main__options">
                        <button className="admin-main__button">
                            Experience
                        </button>
                        <button className="admin-main__button">Project</button>
                        <button className="admin-main__button">Social</button>
                        <button className="admin-main__button">
                            Technology
                        </button>
                    </div>
                    <ExperienceForm />
                    <br />
                    <ProjectForm />
                    <br />
                    <SocialForm />
                    <br />
                    <TechForm />
                </div>
            )}
        </div>
    );
};

export default AdminPage;
