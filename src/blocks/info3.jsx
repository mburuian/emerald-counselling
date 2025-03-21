import { PlayCircle } from 'lucide-react';

export default function Info3(){
    return(
        <>
        <div className="h-screen bg-white p-3">
            <div className="container6">
                    <div className="glassmorphism2 flex flex-col items-center justify-center">
                        <div className="h-5"></div>
                        <PlayCircle size={68} color="#fff" />
                        <div className="h-5"></div>
                        <p className="text-3xl font-bold nunito text-white">Discover Affordable Counselling Services</p>
                        <div className="h-5"></div>
                        <p className="nunito text-center">Experience a supportive environment with Emerald Counselling, where your well-being is prioritized. Our tailored counselling services address your unique needs, empowering you to overcome challenges, improve relationships, and achieve emotional clarity.</p>
                        <div className="h-5"></div>
                        <div className='flex flex-row justify-center items-center p-5'>
                            <div className='flex flex-col w-1/4'>
                                <p className='nunito text-4xl font-bold'>Individual</p>
                                <div className="h-5"></div>
                                <p>Tailored sessions for personal growth.</p>
                            </div>
                            <div className='flex flex-col w-1/4'>
                                <p className='nunito text-4xl font-bold'>Group</p>
                                <div className="h-5"></div>
                                <p>Join a community for shared experiences.</p>
                            </div>
                            <div className='flex flex-col w-1/4'>
                                <p className='nunito text-4xl font-bold'>Marital</p>
                                <div className="h-5"></div>
                                <p>Strengthen communication and understanding.</p>
                            </div>
                            <div className='flex flex-col w-1/4'>
                                <p className='nunito text-4xl font-bold'>Family</p>
                                <div className="h-5"></div>
                                <p>Collaborative solutions for improved dynamics.</p>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
            
        </>
    )
}