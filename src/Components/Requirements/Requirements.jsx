import { GoPrimitiveDot } from 'react-icons/go'

function Requirements() {
    return (
        <>
            <h2 className="bold font-bold text-xl">Requirements</h2>
            <div className="flex flex-col mt-2">
                {["No AWS Cloud experience is necessary, we'll use the AWS Free Tier", "No IT prerequisites required"].map((rec)=>{
                    return (
                        <div key={rec} className="pl-3 flex items-center gap-3">
                            <GoPrimitiveDot size={14}/> 
                            <p className='text-sm'>{rec}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Requirements