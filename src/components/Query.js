function Query() {
    return (
        <div className="container1" data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-delay="100">
            <div className="leftSide">
                <div className="mind">
                    <p>What's on your mind</p>
                </div>
                <div className="question">
                    <p>
                        Ask Questions
                    </p>
                </div>
                <div className="imageQuery" style={{ marginLeft: '-200px' }}>
                    <img src="Union.png" alt="union" />
                </div>
            </div>
            <div className="rightSide">
                <div className="doubts">
                    <p>Do you offer freelancers? </p>
                    <span>+</span>
                </div>
                <div className="doubts1">
                    <p>What’s the guarantee that I will be satisfied<br />
                        with the hired talent? </p>
                    <span>+</span>
                </div>
                <div className="doubts2">
                    <p>Can I hire multiple talents at once? </p>
                    <span>-</span>
                </div>
                <div className="dropDown">
                    <p >If unhappy with a project, communicate with the freelancer, allow for revisions, and <br /> refer to the agreement. Escalate to platform support if needed, considering <br />mediation. Review policies, seek collaborative solutions for resolution.</p>
                </div>


            </div>
        </div>
    )
}
export default Query;