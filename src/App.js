import Header from "./Components/Header";
import Title from "./Components/Title";

const App = () => {
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-400 to-cyan-300">
            <Header />
            <Title />
            <div className="absolute block w-full flex justify-center bottom-12">
                <button className="btn">Mobile</button>
            </div>
        </div>
    );
}

export default App;