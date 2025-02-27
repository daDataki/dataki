
import './PreviousNext.css'

interface PreviousNextProps {
    className?: string;
   
    
  }

export default function PreviousNext({className}: PreviousNextProps) {
    return (
        <div className="flex justify-between w-full py-12">
            <h2 className={`font-antonio font-light  text-back-case  uppercase ${className}`}>back to <br /> more cases</h2>
            <div className={`flex justify-end items-end text-pre-next gap-6 w-1/2 text-sm  font-bold  font-Poppins ${className}`}>
                <h2 className="uppercase">Previous</h2>
                <h2 className="uppercase">Next</h2>
            </div>
            
        </div>
    )
}