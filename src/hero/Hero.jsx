import './Hero.css';
import phoneImg from './phone.png';


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Awesome App<br />App Landing Template</h1>
                <p>
                    An awesome landing page template to showcase your app features, screenshots,
                    pricing, testimonials, and download links.
                </p>
                <ul>
                    <li>Fully Responsive and Powered by Bootstrap</li>
                    <li>Easy to Customize and Setup</li>
                </ul>
                <button className="start-btn">Start Exploring</button>
            </div>
            <div className="hero-image">
                <img src={phoneImg} alt="Awesome App" />
            </div>
        </section>
    );
};

export default Hero;