import Image from "next/image"

export default function Info(){
    return(
        <>
            <div className="flex flex-row w-full p-5 h-screen">
                <div className="w-2/6">
                    <p className="nunito font-bold text-5xl">Discover how our compassionate counselling can change your life for the better. <span className="text-blue-500">Affordable</span>, <span className="text-blue-500">Accsessible</span>, and <span className="text-blue-500">Effective support</span></p>
                    <br />
                    <p className="nunito">Experience the transformative journey of mental wellness with Emerald Counselling, where we provide personalized sessions tailored to your unique needs. Whether you seek individual guidance, group support, marital improvement, or family solutions, our dedicated professionals are here to facilitate meaningful conversations and healing.</p>
                </div>
                <div className="w-4/6 flex flex-row gap-5">
                    <Image 
                        src="/images/miscs.webp" 
                        alt="Logo" 
                        width={400} 
                        height={90}
                        className="rounded-2xl" 
                    />
                    <Image 
                        src="/images/miscs2.webp" 
                        alt="Logo" 
                        width={400} 
                        height={90} 
                        className="rounded-2xl" 
                    />
                </div>
            </div>
        </>
    )
}