import * as React from "react"
import { useState } from "react"
import Button from "@/components/ui/styledButton"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Services() {
    // All available images
    const allImages = [
        { src: "/images/individual.jpeg", alt: "Individual Counselling", description: "One-on-one sessions focused on your unique needs.", title: "Personal Care" },
        { src: "/images/group.jpeg", alt: "Group Counselling", description: "Supportive sessions for collective growth.", title: "Community Support" },
        { src: "/images/marital.jpeg", alt: "Marital Counselling", description: "Helping couples build stronger relationships.", title: "Relationship Guidance" },
        { src: "/images/family.jpeg", alt: "Family Counselling", description: "Fostering understanding within families.", title: "Family Harmony" },
        { src: "/images/holistic.jpeg", alt: "Holistic Counselling", description: "A holistic approach to mental well-being.", title: "Complete Wellness" },
        { src: "/images/supportive.jpeg", alt: "Supportive Counselling", description: "Emotional support through life’s challenges.", title: "Emotional Care" },
        { src: "/images/personal.jpeg", alt: "Personal Growth", description: "Achieve personal and professional goals.", title: "Self-Development" },
        { src: "/images/communication.jpeg", alt: "Communication Counselling", description: "Enhancing communication skills for better relationships.", title: "Effective Communication" }
    ]

    const slides = [allImages.slice(0, 4), allImages.slice(4, 8)]
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
      <div className="flex flex-col h-screen p-5">
        <div className="flex flex-row justify-between items-center p-5 bg-blue-500 rounded-2xl">
            <div className="flex flex-row justify-center gap-5 items-center p-5">
                <button className="solutions nunito">Our Services</button>
                <p className="nunito font-bold">Transformative Counselling</p>
            </div>
            <div>
                <Button/>
            </div>
        </div>

        <div className="flex flex-row p-3 justify-center items-center gap-5">
            {slides[currentSlide].map((image, index) => (
                <div 
                    key={index} 
                    className="individual-counselling flex flex-col justify-between p-3" 
                    style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '20px', height: '450px', width: '50%' }}
                >
                    <div className="glassmorphism p-1">
                        <p className="nunito text-white">{image.alt}</p>
                    </div>
                    <div className="glassmorphism p-2">
                        <p className="text-md font-bold nunito">{image.title}</p>
                        <p className="nunito">{image.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-row justify-between items-center p-5">
            <div className="flex justify-start px-5 gap-4 w-1/6">
                <button 
                    onClick={handlePrev}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full flex items-center justify-center"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={handleNext}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full flex items-center justify-center"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
            <div className="w-5/6">
                <p className="nunito text-end">Transformative counselling offers personalized support through individual therapy, group sessions, and marital or family counselling. It fosters personal growth, strengthens relationships, and promotes emotional well-being. With a holistic approach, it addresses mental, emotional, and relational challenges, empowering individuals and communities to navigate life’s complexities with resilience and self-awareness.</p>
            </div>
        </div>
      </div>
    );
} 

/* Additional styling */
const styles = `
.glassmorphism {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: white;
}
`
