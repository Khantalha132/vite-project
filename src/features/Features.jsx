import FeatureCard from "../featureCard/FeatureCard";
import "./Features.css";

import { FaCogs, FaMobileAlt, FaPalette, FaGlobe } from "react-icons/fa";
const Features = () => {
    <FeatureCard/>
    const features = [
        {
            icon: <FaMobileAlt />,
            title: "Showcase Your App",
            desc: "Showcase your app with this professional landing template."
        },
        {
            icon: <FaCogs />,
            title: "Easy to Customize",
            desc: "Easily change text and replace images to fit your app."
        },
        {
            icon: <FaPalette />,
            title: "Unlimited Colors",
            desc: "Change colors easily to match your brand style."
        },
        {
            icon: <FaGlobe />,
            title: "Responsive HTML5 CSS3",
            desc: "Built with modern standards for all devices."
        },
    ];

    return (
        <section className="features">
            {features.map((f, i) => (
                <FeatureCard key={i} {...f} />
            ))}
        </section>
    );
};

export default Features;