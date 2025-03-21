import Image from "next/image"
import Button from "@/components/ui/styledButton"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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
                <div className="flex flex-row justify-between p-7 rounded-2xl">
                    <div className="p-7 w-4/6 bg-blue-500 rounded-2xl flex flex-row gap-3 h-fit">
                    <div className="flex flex-col justify-center items-center h-fit">
                            <div className="relative w-full max-w-xs">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    <CarouselItem>
                                    <Card className="p-0 m-0 bg-transparent border-0">
                                        <CardContent className="flex aspect-square items-center justify-center">
                                        <Image
                                            src="/images/misc5.jpg"
                                            alt="Image 1"
                                            width={100}
                                            height={100}
                                            className="empower2"
                                            unoptimized={true}
                                        />
                                        </CardContent>
                                    </Card>
                                    </CarouselItem>
                                    <CarouselItem>
                                    <Card className="p-0 m-0 bg-transparent border-0">
                                        <CardContent className="flex aspect-square items-center justify-center">
                                        <Image
                                            src="/images/friends.jpg"
                                            alt="Image 2"
                                            width={100}
                                            height={100}
                                            className="empower2"
                                            unoptimized={true}
                                        />
                                        </CardContent>
                                    </Card>
                                    </CarouselItem>
                                </CarouselContent>

                                {/* Position buttons below the carousel */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-4">
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </div>
                                </Carousel>

                            </div>
                        </div>

                        <div className="w-3/6 p-5">
                            <p className="text-3xl font-bold text-white nunito">Find Clarity and Healing in Your Journey</p>
                            <br />
                            <p className="text-white nunito">Emerald Counselling is dedicated to providing an empathetic platform for personal growth. Our qualified professionals focus on your unique needs, ensuring you receive the support that nurtures your mental wellbeing.</p>
                            <br />
                            <Button/>
                            <br />
                            
                            
                            
                            
                        </div>


                        

                </div>
                <div className="p-5 w-2/6">
                        <p className="text-4xl nunito font-bold">Empowering You with Compassionate Care at <span className="text-blue-500">Emerald Counselling.</span></p>
                        <br />
                        <p className="nunito">At Emerald Counselling, we believe that every individual deserves support tailored to their journey. Our caring professionals are dedicated to facilitating change and improvement in your life through personalized counselling, ensuring you feel understood and empowered every step of the way.</p>
                        

                </div>

            </div>

        </div>
            
        
        </>
    )
}