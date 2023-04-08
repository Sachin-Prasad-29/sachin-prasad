import { useState } from 'react';
interface Props {
    setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminLogin = (props: Props) => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isInvalid, setIsInvalid] = useState<boolean>(false);

    const handleLogin = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (userName !== process.env.REACT_APP_USER) {
            setIsInvalid(true);
            return;
        } else if (password !== process.env.REACT_APP_PASS) {
            setIsInvalid(true);
            return;
        } else {
            alert('WELCOME TO ADMIN MODULE');
            props.setShowLogin(false);
        }
    };

    return (
        <div className="login-forms">
            <h2>Admin Login</h2>
            <div className="input-box">
                <input
                    type="text"
                    id="full_name"
                    name="Username"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label>Username:</label>
            </div>
            <div className="input-box">
                <input
                    type="password"
                    id="full_name"
                    name="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password:</label>
            </div>
            {isInvalid && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                    WRONG USERNAME OR PASSWORD. TRY AGAIN !
                </div>
            )}
            <div className="btn">
                <button className="btn-submit" onClick={(e) => handleLogin(e)}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default AdminLogin;
