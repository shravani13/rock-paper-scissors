import { Rules } from "../Rules/Rules"
import { Score } from "../Score/Score"
export const Layout=(props)=>{
    return(
        <>
        <div className="bg-gradient-to-b from-darkBlue to-blue font-BarlowSemiCondensed font-bold">
        <header >
            <Score />
        </header>
        <main>
            {props.children}
        </main>
        
        <footer>
        <Rules />
        </footer>
        </div>
        </>
    )
}