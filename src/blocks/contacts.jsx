import Button from "@/components/ui/styledButton"

export default function Contacts(){
    return(
        <>
            <div className="flex flex-col h-screen p-5">
                <p className="nunito font-bold text-5xl text-center">Connect with Emerald Counselling</p>
                <div className="h-5"></div>
                <p className="text-center nunito">Your journey to mental well-being starts now. Emerald Counselling offers a range of affordable counselling services tailored to meet your unique needs, from individual support to family guidance. Our dedicated professionals are here to provide the clarity and healing you deserve.</p>
                <div className="h-5"></div>
                <div className="flex flex-col justify-center items-center"><Button/></div>
                <div className="h-5"></div>
                <p className="nunito text-center" >Experience transformative counselling services that are effective and affordable. Let’s embark on this healing journey together.</p>

            </div>
        </>
    )
}