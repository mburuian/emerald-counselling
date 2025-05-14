import * as React from "react"
import { useState } from "react"
import Button from "@/components/ui/styledButton"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Services() {
    // All available images
    const allImages = [
        { src: "/images/session3.jpeg", alt: "Comprehensive Counselling for Every Journey", description: "Discover the transformative power of tailored counselling services designed to meet your unique needs. Emerald Counselling specializes in individual, group, marital, and family support, ensuring that every session is focused on your personal journey toward healing and growth. Our compassionate professionals are here to provide a safe space where you can express your thoughts and feelings freely." },
        { src: "/images/session5.jpeg", alt: "Empowering Individuals and Families.", description: "Our individual counselling sessions are designed to help you overcome personal challenges and foster self-discovery. Group support offers a collaborative environment for shared healing, while marital guidance focuses on enhancing communication and connection. Family counselling aims to improve dynamics and promote understanding among loved ones." },
        { src: "/images/session.jpeg", alt: "Affordable Care with Lasting Impact", description: "At Emerald Counselling, we believe that quality mental health support should be accessible to everyone. Our services are designed to be affordable without compromising on the quality of care. Start your journey towards emotional clarity and healthier relationships today. Let us help you navigate your path to well-being with understanding and compassion.", },
       
    ]

    const slides = [allImages.slice(0, 2), allImages.slice(2, 4)]
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
      <div className="flex flex-col h-screen p-5">

        <div className="flex flex-row p-3 justify-center items-center gap-5">
            {slides[currentSlide].map((image, index) => (
                <div 
                    key={index} 
                    className="individual-counselling flex flex-col justify-between p-3" 
                    style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '20px', height: '500px', width: '50%' }}
                >
                    <div className="glassmorphism p-1">
                        <p className="nunito text-white">{image.alt}</p>
                    </div>
                    <div className="glassmorphism p-2">
                        <div>
                            <p className="text-md font-bold nunito">{image.title}</p>
                            <p className="nunito text-black">{image.description}</p>
                            <div className="h-5"></div>
                            <Button/>
                        </div>
                        
                    </div>
                   
                </div>
                
            ))}
            
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-row justify-between items-center p-5">
            <div className="flex justify-start px-5 gap-4 w-1/6">
                <button 
                    onClick={handlePrev}
                    className="bg-[#0400ff] hover:bg-blue-600 text-white p-2 rounded-full flex items-center justify-center"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={handleNext}
                    className="bg-[#0400ff]  hover:bg-blue-600 text-white p-2 rounded-full flex items-center justify-center"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
            <div className="w-5/6">
                <p className="nunito text-end">Emerald Counselling offers personalized support through individual, group, marital, and family counselling. With a focus on accessible, quality care, their compassionate professionals provide a safe space for healing and growth. Experience transformative support tailored to your needs and build healthier relationships on your journey to well-being.</p>
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
