import { GoPrimitiveDot } from 'react-icons/go'

function Requirements() {
    return (
        <>
            <h2 className="bold font-bold text-2xl">Requirements</h2>
            <div className="flex flex-col ">
                {["No AWS Cloud experience is necessary, we'll use the AWS Free Tier", "No IT prerequisites required"].map((rec)=>{
                    return (
                        <div key={rec} className="pl-3 flex items-center gap-3">
                            <GoPrimitiveDot /> 
                            <small className='text-sm'>{rec}</small>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Requirements