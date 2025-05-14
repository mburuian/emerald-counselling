"use client"
import './styles.css'
import Button from '@/components/ui/styledButton';


export default function Landing(){
    return(
        <>
        <div id="background">
            <div id="main" className='flex flex-row justify-between items-center w-full p-5'>
                <div className='flex flex-col p-3 w-3/6'>
                    <p className='text-5xl font-bold nunito'>Transforming <span className='text-[#0400ff] '>Lives</span> through compassionate support.</p>
                    <br />
                    <p className='nunito'>Discover how our compassionate counselling can change your life or better, Experience the tranormative  journey o mental wellness with emerald counselling ,where we provide personalised sessions tailored to your unque nedds  whether you seek individual sguidance ,group support, marital improvement or amily solutions , our dedicated proessionals are here to acilitate Meaningul conversations and healing</p>
                    <br />
                    <Button content="Request a Quota"/>
                </div>
                <div className='w-3/6 ' id='container1'>
                    <div className='container2 p-3 flex flex-col items-end justify-end'>
                        <div className='glassmorphism p-3 flex flex-col items-end justify-end'>
                            <p className='nunito text-end'>Discover the transformative power of tailored counselling services designed to meet your unique needs. Emerald Counselling specializes in individual, group, marital, and family support, ensuring that every session is focused on your personal journey toward healing and growth. Our compassionate professionals are here to provide a safe space where you can express your thoughts and feelings freely. </p>
                            <br />
                            <Button content="Get Started."/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        </>
    )
}