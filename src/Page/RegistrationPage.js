import Spinner from "../components/Spinner";
import Form from "./Form";

const handleClick = () => {
    window.location.href = '/homepage';
    <Spinner />

}


function RegistrationPage() {
    return (
        <div>
            <div className="title">
                <img src="Vector1.png" alt="title" />
            </div>
            <div className="cancel">
                <button onClick={handleClick}><img src="d1.png" alt="cancel" /></button>
            </div>
            <div className="text">
                <p>Registration Form</p>
            </div>
            <div className="text2">
                <p>Start your success</p>
            </div>
            <div className="text3">
                <p>Journey Here</p>
            </div>
            <Form />
        </div>
    )
}
export default RegistrationPage;