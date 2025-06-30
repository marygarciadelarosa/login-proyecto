import { useEffect, useState } from "react";
import axios from "axios";

function Protected() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("access_token");

        axios.get("http://127.0.0.1:8000/protegido/", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setMessage(response.data.message);
        })
        .catch(error => {
            setMessage("Acceso denegado o token inválido.");
            console.error(error);
        });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.reload();
    };

    return (
        <div>
            <h2>Vista Protegida</h2>
            <p>{message}</p>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
}

export default Protected;