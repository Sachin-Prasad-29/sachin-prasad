import React, { useState } from 'react';

import AdminLogIn from '../components/adminComponents/AdminLogin';
import ExperienceForm from '../components/adminComponents/ExperienceForm';
import ProjectForm from '../components/adminComponents/ProjectForm';
import SocialForm from '../components/adminComponents/SocialForm';
import TechForm from '../components/adminComponents/TechForm';

const AdminPage = () => {
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const [showExpForm, setShowExpFrom] = useState<boolean>(false);
    const [showProForm, setShowProForm] = useState<boolean>(false);
    const [showSocialForm, setShowSocialForm] = useState<boolean>(false);
    const [showTechForm, setShowTechForm] = useState<boolean>(false);

    const handleShowForm = (e: React.MouseEvent, prop: string) => {
        e.preventDefault();
        switch (prop) {
            case 'Exp':
                setShowExpFrom(true);
                setShowProForm(false);
                setShowSocialForm(false);
                setShowTechForm(false);
                return;
            case 'Pro':
                setShowExpFrom(false);
                setShowProForm(true);
                setShowSocialForm(false);
                setShowTechForm(false);
                return;
            case 'Social':
                setShowExpFrom(false);
                setShowProForm(false);
                setShowSocialForm(true);
                setShowTechForm(false);
                return;
            case 'Tech':
                setShowExpFrom(false);
                setShowProForm(false);
                setShowSocialForm(false);
                setShowTechForm(true);
                return;
        }
    };
    return (
        <div>
            {showLogin && <AdminLogIn setShowLogin={setShowLogin} />}
            {!showLogin && (
                <div className="admin-main">
                    <div className="admin-main__options">
                        <button
                            className="admin-main__button"
                            onClick={(e) => handleShowForm(e, 'Exp')}
                        >
                            Experience
                        </button>
                        <button
                            className="admin-main__button"
                            onClick={(e) => handleShowForm(e, 'Pro')}
                        >
                            Project
                        </button>
                        <button
                            className="admin-main__button"
                            onClick={(e) => handleShowForm(e, 'Social')}
                        >
                            Social
                        </button>
                        <button
                            className="admin-main__button"
                            onClick={(e) => handleShowForm(e, 'Tech')}
                        >
                            Technology
                        </button>
                    </div>
                    {showExpForm && <ExperienceForm />}
                    <br />
                    {showProForm && <ProjectForm />}
                    <br />
                    {showSocialForm && <SocialForm />}
                    <br />
                    {showTechForm && <TechForm />}
                </div>
            )}
        </div>
    );
};

export default AdminPage;
