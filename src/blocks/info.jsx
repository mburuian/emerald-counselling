"use client"
import Image from "next/image"
import Button from '@/components/ui/styledButton';

export default function Info(){
    return(
        <>
            

            <div className="flex flex-row w-full p-10 h-screen">
                <div className="w-2/6">
                    <p className="nunito font-bold text-5xl">Discover how our compassionate counselling can change your life for the better. <span className="text-[#0400ff] ">Affordable</span>, <span className="text-[#0400ff] ">Accsessible</span>, and <span className="text-[#0400ff] ">Effective support</span></p>
                    <br />
                    <p className="nunito">Experience the transformative journey of mental wellness with Emerald Counselling, where we provide personalized sessions tailored to your unique needs. Whether you seek individual guidance, group support, marital improvement, or family solutions, our dedicated professionals are here to facilitate meaningful conversations, emotional healing, and lasting positive change. We create a safe, supportive space to help you navigate challenges,  and achieve a fulfilling life.</p>
                    <br />
                    <Button/>
                </div>
                <div className="w-4/6 flex flex-row gap-5">
                    <div className="individual-counselling flex flex-col justify-between p-3">
                        <div className="glassmorphism p-3">
                            <p className="nunito text-white">Individual Counselling</p>
                        </div>
                        <div className="glassmorphism p-3">
                            <p className="text-md font-bold nunito">Personal Care</p>
                            <p className="nunito">One-on-one sessions focused on your unique needs.</p>
                        </div>  
                    </div>
                    <div className="flex flex-col">
                        <div className="marital-counselling flex flex-col justify-between p-3">
                            <div className="glassmorphism p-3">
                                <p className="nunito text-white">Marital Counselling</p>
                            </div>
                            <div className="glassmorphism p-3">
                                <p className="text-md font-bold nunito">Enhancing Relationships</p>
                                <p className="nunito">Improve communication and resolve conflicts.</p>
                            </div>  
                        </div>
                        <div className="container4">
                            <br />
                            <p className="font-bold nunito">Affordable Support</p>
                            <p className="nunito">Accessible Solutions Quality care within everyone's reach.</p>
                            <br />
                            <Button/>
                        </div>
                    </div>
                    
                </div>
            </div>

            
        </>
    )
}