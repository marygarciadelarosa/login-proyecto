import Login from "./Login";
import Protected from "./Protected";

function App() {
    const token = localStorage.getItem("access_token");

    return (
        <div>
            {token ? <Protected /> : <Login />}
        </div>
    );
}

export default App;
