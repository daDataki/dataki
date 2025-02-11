
import './PreviousNext.css'

export default function PreviousNext() {
    return (
        <div className="flex justify-between w-full p-12">
            <h2 className="font-antonio font-medium text-base text-black uppercase">back to <br /> more cases</h2>
            <div className="flex justify-end items-end gap-[13%] w-1/2 text-sm  font-medium text-black font-Poppins">
                <h2 className="uppercase">Previous</h2>
                <h2 className="uppercase">Next</h2>
            </div>
            
        </div>
    )
}