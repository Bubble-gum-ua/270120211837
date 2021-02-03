import './App.css';
import BodyContainer from "./Components/BodyContainer";
import HeaderContainer from "./Components/HeaderContainer";


function App( props) {

    return (
        <div className="mainWrapp">
            <div>
                <HeaderContainer />
            </div>
            <div>
                <BodyContainer />
            </div>
        </div>
    );
}

export default App;
