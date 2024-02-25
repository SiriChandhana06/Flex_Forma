import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return(
        <div id="home" className="">
            <Nav/>
            <div className="pl-20 pt-28">
                <h1 className="text-6xl font-bold text-white">We Make You<br/> Love Yourself <br/> Again </h1>
            </div>
            <div className="pl-20 pt-6">
                <h1 className="text-xl font-semibold text-gray-500">We lake the headache out of getting fit. It's suitable for all <br/> levels of fitness and offers tailored and scalable workouts <br/> that'll ensure you'll never want to quit being fit </h1>
            </div>
            <div className="pl-20 pt-6 pb-14">
                <button  title="To Get Fit" onClick={()=>navigate('/fitfusion')} className="bg-red-700 border-2 border-black text-xl font-semibold text-white h-12 w-28 rounded-xl hover:bg-red-300 hover:text-black">Start Flex</button>
            </div>
        </div>
    )
}
export default Home;