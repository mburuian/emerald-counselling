import Button from "@/components/ui/styledButton"
import Image from "next/image"

export default function info5(){
    
    return(
    <>
        <div className="flex flex-row justify-center h-screen p-10 w-full">
            <div className="flex flex-col w-2/6">
                <p className="nunito text-5xl font-bold ">Compassionate <span className="text-blue-500">Counselling Services</span> for Every Need</p>
                <div className="h-3"></div>
                <p className="text-xl nunito font-bold">Discover Your Path to Wellness with Emerald Counselling</p>
                <div className="h-3"></div>
                <p className="nunito">Experience a variety of affordable counselling options designed to meet your unique circumstances. Whether you seek individual support, group dynamics, marital guidance, or family resolutions, our skilled professionals are dedicated to fostering a safe, empathetic space for your healing journey. We understand that every individual and family has distinct needs, and we tailor our approach accordingly to ensure you feel seen and supported throughout your experience with us.</p>
                <div className="h-5"></div>
                <Button/>
            </div>
            <div className="w-4/6 ">
                <Image
                    src="/images/session6.jpeg"
                    alt="Image 1"
                    width={100}
                    height={100}
                    className="empower4"
                    unoptimized={true}
                />
            </div>
        </div>
    </>

    )
}