import { useNavigate } from "react-router-dom";
function Nav(){
    const navigate = useNavigate();
    return(
        <div className="flex py-4 bg-black lg:py-10">
            <div className="pl-16 pr-72">
                <h1 className="text-xl font-bold px-2 text-white lg:text-2xl px-10 ">Flex Forma </h1>
            </div>
            <div className="flex">
              <button title="To Gain Weight" onClick={()=> navigate('/gainsgalaxy')} className="rounded-xl hover:bg-red-700"><h1 className="text-xl font-bold px-10 text-white">GainsGalaxy</h1></button> 
              <button title="To Loss Weight" onClick={()=> navigate('/slimsavvy')} className="rounded-xl hover:bg-red-700"><h1 className="text-xl font-bold px-10 text-white">SlimSavvy</h1></button> 
              <button title="To Get Fit" onClick={()=> navigate('/fitfusion')} className="rounded-xl hover:bg-red-700"><h1 className="text-xl font-bold px-10 text-white">FitFusion</h1></button>
            </div>
        </div>
    )
}
export default Nav;