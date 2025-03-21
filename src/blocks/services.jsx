import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import Button from "@/components/ui/styledButton"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Services() {
    // All available images
    const allImages = [
        { src: "/images/individual.jpeg", alt: "Image 1" },
        { src: "/images/group.jpeg", alt: "Image 1" },
        { src: "/images/marital.jpeg", alt: "Image 1" },
        { src: "/images/family.jpeg", alt: "Image 1" },
        { src: "/images/holistic.jpeg", alt: "Image 1" },
        { src: "/images/supportive.jpeg", alt: "Image 1" },
        { src: "/images/personal.jpeg", alt: "Image 1" },
        { src: "/images/communication.jpeg", alt: "Image 1" }
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
      <div className="flex flex-col h-screen p-5 ">
        <div className="flex flex-row justify-between items-center p-5 bg-blue-500 rounded-2xl">
            <div className="flex flex-row justify-center gap-5 items-center p-5">
                <button className="solutions nunito">Our Services</button>
                <p className="nunito font-bold">Transformative Counselling</p>
            </div>
            
            <div className="">
                <Button/>
            </div>
        </div>

        <div className="flex flex-row p-5 justify-center items-center gap-5">
            {slides[currentSlide].map((image, index) => (
                <Image
                    key={`${index}-${image.src}`}
                    src={image.src}
                    alt={image.alt}
                    width={100}
                    height={100}
                    className="empower3"
                    unoptimized={true}
                />
            ))}
        </div>
        
        {/* Navigation buttons */}
        <div className="flex flex-row justify-between items-center p-5">
            <div className="flex justify-start px-5 gap-4">
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
            <div>
                <Button/>
            </div>
        </div>
      </div>
    );
}
