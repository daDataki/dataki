
import './PreviousNext.css'

export default function PreviousNext() {
    return (
        <div className="flex justify-between w-full py-12">
            <h2 className="font-antonio font-light  text-back-case  uppercase">back to <br /> more cases</h2>
            <div className="flex justify-end items-end text-pre-next gap-6 w-1/2 text-sm  font-bold  font-Poppins">
                <h2 className="uppercase">Previous</h2>
                <h2 className="uppercase">Next</h2>
            </div>
            
        </div>
    )
}