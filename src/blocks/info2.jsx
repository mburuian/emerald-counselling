import Image from "next/image"
import Button from "@/components/ui/styledButton"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


export default function Info2(){
    return(
        <>
        <div className="h-screen">
            <div className="flex flex-row justify-center items-center p-5 gap-2">
                        
                        <button className="solutions">Individual Counselling</button>
                        <button className="solutions">Group Support</button>
                        <button className="solutions">Marital Guidance</button>
                        <button className="solutions">Family Counselling</button>
                    <button className="solutions"> Affordable Rates</button>

                </div>
                <div className="flex flex-row justify-between p-5 rounded-2xl">
                    <div className="p-5 w-4/6 bg-blue-500 rounded-2xl flex flex-row gap-3 h-fit">
                        <Image 
                            src="/images/misc5.jpg" 
                            alt="Logo" 
                            width={100} 
                            height={100} 
                            className="empower"
                            unoptimized={true} 

                        />
                        <div className="w-3/6 p-5">
                            <p className="text-3xl font-bold text-white nunito">Find Clarity and Healing in Your Journey</p>
                            <br />
                            <p className="text-white nunito">Emerald Counselling is dedicated to providing an empathetic platform for personal growth. Our qualified professionals focus on your unique needs, ensuring you receive the support that nurtures your mental wellbeing.</p>
                            <br />
                            <Button/>
                            <br />
                            <div className="flex flex-row justify-between items-center">
                                <p className="nunito text-2xl font-bold text-white">1/2</p>

                                <div className="flex flex-row gap-4 justify-center ">
                                    <button className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-black bg-white hover:bg-gray-100 transition hover:cursor-pointer">
                                        <FaArrowLeft className="text-black text-xl" />
                                    </button>
                                    <button className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-black bg-blue-600 hover:bg-gray-100 transition hover:cursor-pointer">
                                    <FaArrowRight className="text-black text-xl" />
                                    </button>
                                </div>
                                
                                
                            </div>
                            
                        </div>


                        

                </div>
                <div className="p-5 w-2/6">
                        <p className="text-4xl nunito font-bold">Empowering You with Compassionate Care at Emerald Counselling.</p>
                        <br />
                        <p className="nunito">At Emerald Counselling, we believe that every individual deserves support tailored to their journey. Our caring professionals are dedicated to facilitating change and improvement in your life through personalized counselling, ensuring you feel understood and empowered every step of the way.</p>
                </div>
            </div>

        </div>
            
        
        </>
    )
}