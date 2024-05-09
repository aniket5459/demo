import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";


function ConfirmationPage() {
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        let intervalId
        if (timer > 0) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [timer]);

    useEffect(() => {
        if (timer === 0) {
            <Spinner />
            window.location.href = '/homepage';

        }
    }, [timer])


    return (
        <div>
            <div>
                <div className="title">
                    <img src="Vector1.png" alt="title" />
                </div>
            </div>
            <div className="confirm">
                <img src="d5.png" alt="check" />
            </div>
            <div className="text" style={{ marginTop: '20px' }}>
                <p>Success Submitted</p>
            </div>
            <div className="text2">
                <p>Congratulations</p>
            </div>
            <div className="text4">
                <p>Your request has been successfully submitted to us. We</p>
            </div>
            <div className="text4">
                <p>will validate your information and reach out to your </p>
            </div>
            <div className="text4">
                <p>shortly with updates </p>
            </div>
            <div className="redirect">
                <p>Redirecting you to Homepage in <strong>{timer} Seconds</strong> </p>
            </div>
        </div>
    )
}
export default ConfirmationPage;