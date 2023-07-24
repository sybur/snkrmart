import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [loading, setloading] = useState(false);
    const[email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const Navigate = useNavigate();
   
    const onSubmit = (event) => {
        console.log('submit');
        setloading(true);
        event.preventDefault();

        setTimeout(() => {
            setloading(false);
            Navigate('/app/dashboard');

        }, 1500);

    };

    return (
        <main style={{ textAlign: 'center' }}>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                        <lable>Email:</lable>
                        <input 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                   
                    <div style={{ marginBottom: "20px" }}>
                        </div>

                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                        <lable>Password:</lable>
                        <input 
                        type="password"
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)} />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        </div>
                    {loading ? <div>Loading...</div> : <button type="submit">Login</button>}
                   
            </form>
        </main>
    )
};

export default Login;
