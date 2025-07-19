import { useChoiceContext } from "../../Context/choiceContext"

export const Score=()=>{
    const {score}=useChoiceContext();
    return(
        <div >
            <div className="flex place-content-between text-white flex-gap border-white border mx-[28rem] mb-8 p-4">
                <ul className="">
                    <li>ROCK</li>
                    <li>PAPER</li>
                    <li>SCISSORS</li>
                    <li>LIZARD</li>
                    <li>SPOCK</li>
                </ul>
                <div className="bg-gray-300 size-20 rounded-md px-4">
                    <h1 className="text-center pt-4 text-xs text-blue">SCORE</h1>
                    <p className="text-center text-4xl text-darkGray">{score}</p>
                </div>
            </div>
        </div>
    )
}