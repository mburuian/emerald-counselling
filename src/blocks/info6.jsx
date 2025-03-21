import { MapPin } from 'lucide-react';


export default function Info6(){
    return(
        <>
        <div className="h-screen bg-white p-3">
            <div className="container6">
                    <div className="glassmorphism2 flex flex-col items-center justify-center">
                        <div className="h-5"></div>
                        <p className="text-3xl font-bold nunito text-white">Embrace your Journey to mental wellness</p>
                        <div className="h-5"></div>
                        <p className="nunito text-center">Experience personalized and affordable counselling services with Emerald Counselling, tailored to meet your individual needs. Our offerings, including individual, group, marital, and family counselling, are designed to support you in your healing journey.</p>
                        <div className="h-5"></div>
                        <div className='flex flex-col justify-center items-center p-5'>
                            <div className='flex flex-row justify-center gap-5 items-center'>
                                <div className='flex flex-row glassmorphism2 items-center justify-center'>
                                    <MapPin size={24} color="#fff" />
                                    <p>Individual Counselling.</p>
                                </div>
                                <div className='flex flex-row glassmorphism2 items-center justify-center'>
                                    <MapPin size={24} color="#fff" />
                                    <p>Supportive Group Counselling.</p>
                                </div>
                                <div className='flex flex-row glassmorphism2 items-center justify-center'>
                                    <MapPin size={24} color="#fff" />
                                    <p>Transformative Marital Counselling.</p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-center gap-5 items-center'>
                                <div className='flex flex-row glassmorphism2 items-center justify-center'>
                                    <MapPin size={24} color="#fff" />
                                    <p>Family counselling for Dynamics.</p>
                                </div>
                                <div className='flex flex-row glassmorphism2 items-center justify-center'>
                                    <MapPin size={24} color="#fff" />
                                    <p>Guided path to healing.</p>
                                </div>
                                <div className='flex flex-row glassmorphism2 items-center justify-center'>
                                    <MapPin size={24} color="#fff" />
                                    <p>Empowering emotional Support</p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-center gap-5 items-center'>
                                <div className='flex flex-row glassmorphism2 items-center justify-center'>
                                    <MapPin size={24} color="#fff" />
                                    <p>Buidling Resilience together.</p>
                                </div>
                                <div className='flex flex-row glassmorphism2 items-center justify-center'>
                                    <MapPin size={24} color="#fff" />
                                    <p>Strengthening Connections.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
            
        </>
    )
}