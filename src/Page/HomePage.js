import { useEffect } from "react";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import Query from "../components/Query";
import Aos from "aos";

function HomePage() {

    useEffect(() => {
        Aos.init({
            offset: 400,
            duration: 1200
        });
    }, [])


    return (<main>
        <PageNav />
        <section className="homepageSection" data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="100">
            <h4 style={{ fontFamily: 'Covered By Your Grace, cursive', color: '#2DA950', fontSize: '30px' }}>
                Success Stories
            </h4>

            <h1 style={{ fontFamily: 'Manrope' }}>
                Every Success Journey<br /> we've encountered.
            </h1>
        </section>
        <div className="container">
            <div className="imageSection">
                <div className="imageContainer" data-aos="slide-up"
                    data-aos-duration="1000"
                    data-aos-delay="100">
                    <img src="image 2.png" alt="lady" />
                </div>
                <div className="forty" data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="100"><img src="d.png" alt="design" style={{ width: '95px' }} /><strong >40%</strong><br />
                    <p>Achieved reduction in project execution time by optimising team availability</p>
                </div>
                <div className="ten" data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="100"><img src="d2.png" alt="rocket" /><strong>10 DAYS</strong><p>Staff Deployment</p></div>
                <div className="last" data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200"><strong>$0.5</strong><p>MILLION</p><br /><span>Reduced client expenses<br /> by saving on hiring and<br /> employee costs.</span></div>
            </div>


            <div className="productSection" data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100">
                <h2>Enhance fortune 50<br /> company’s insights<br /> teams research <br />capabilities</h2>
                <img src="d3.png" alt="slide" />
                <div className="buttonContainer">
                    <button >Explore More <img src="d4.png" alt="arrow" style={{ margin: '19px' }} /></button>
                </div>
            </div>

        </div>
        <br />
        <br />
        <br />
        <Query />
        <Footer />
    </main>)
}
export default HomePage;