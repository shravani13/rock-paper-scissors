import {useState} from 'react'
import { getBoxToBoxArrow } from 'curved-arrows'
import { rules } from 'eslint-plugin-react-refresh';
import {useNavigate} from 'react-router-dom'
import { useChoiceContext } from '../../Context/choiceContext';
import { elements } from '../elements';

export const GameStart=()=>{
    const navigate=useNavigate();
    const {setChoice} =useChoiceContext();
    const [rulesPage,setRulesPage]=useState(false);
    const onChoiceClick=(e)=>{
        setChoice(e.target.dataset.key);
        navigate('/result');
    }
    const setRules=()=>{
        setRulesPage(!rulesPage);
    }

    return(
        <>
            <div onClick={onChoiceClick}>
                <div className='text-center'>
                 {elements['scissors']}
                </div>
                <div className='inline-block ml-[28rem] mr-[12rem]' >
                    {elements['spock']}
                </div>
                <div className='inline-block' >
                    {elements['paper']}
                </div>
                <div className='inline-block ml-[32rem] mr-[2rem]' >
                    {elements['lizard']}
                </div>
                <div className='inline-block' >
                    {elements['rock']}
                </div>
            </div> 
            <br></br>
            
        
        </>
    )
}