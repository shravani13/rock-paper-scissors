import { useChoiceContext } from "../../Context/choiceContext"
import { elements } from "../elements";
import {useNavigate} from 'react-router-dom';
export const Result =()=>{
    const navigate=useNavigate();
    const {choice,score, setScore} = useChoiceContext();
    const userChoice=elements[choice];
    function getRandomNum(){
        let num=Math.floor(Math.random()*5);
        console.log(num);
        return num;
    }
    
const housePick=()=>{
    let computerChoice,result;
    switch (getRandomNum()){
        case 0:
            computerChoice=elements['scissors'];
            if(choice=='paper' || choice=='lizard'){
                setScore((prev)=>prev+1);
                result='YOU LOSE'
            }
            else if(choice=='scissors'){
                result='DRAW'
            }
            break;
        case 1:
            computerChoice=elements['spock'];
            if(choice=='scissors' || choice=='rock'){
                setScore((prev)=>prev+1);
                result='YOU LOSE'
            }
            else if(choice=='spock'){
                result='DRAW'
            }
            break;
        case 2:
            computerChoice=elements['paper'];
            if(choice=='rock' || choice=='spock'){
                setScore((prev)=>prev+1);
                result='YOU LOSE'
            }
            else if(choice=='paper'){
                result='DRAW'
            }
            break;
        case 3:
            computerChoice=elements['lizard'];
            if(choice=='spock' || choice=='paper'){
                setScore((prev)=>prev+1);
                result='YOU LOSE'
            }
            else if(choice=='lizard'){
                result='DRAW'
            }
            break;
        case 4:
            computerChoice=elements['rock'];
            if(choice=='lizard' || choice=='scissors'){
                setScore((prev)=>prev+1);
                result='YOU LOSE'
            }
            else if(choice=='rock'){
                result='DRAW'
            }
            break;
    }
    console.log(score,result);
    return[computerChoice,result];
    
}
    const onPlayClick=()=>{
        navigate('/')
    }
    
    return(
        <>
        <div className="bg-gradient-to-b from-darkBlue to-blue font-BarlowSemiCondensed font-bold">
        <div className="flex gap-14 text-white">
        <div>
        <p className="mb-4 text-sm">YOU PICKED</p>
        {userChoice} 
        </div>
        
        <div>
            <p className=" text-xl text-center mt-8 mb-4">{housePick()[1] || 'YOU WIN'}</p>
            <button onClick={onPlayClick}  className='bg-white px-4 py-2 rounded-md text-blue'>PLAY AGAIN</button>
        </div>
        <div>
        <p className="mb-4 text-sm">THE HOUSE PICKED</p>
        {housePick()[0]}
        </div>
        
        </div>
        
        </div>
        
        </>
    )
}