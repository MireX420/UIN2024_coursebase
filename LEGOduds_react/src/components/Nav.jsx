<<<<<<< HEAD
import { useState } from "react"
export default function Nav({category}){
    

=======
export default function Nav(){
>>>>>>> 7d67130d907711cfda06838cef59d09f15092864
    const categoryList = ["City", "Ninjago", "Castles and Knights", "Marine and Pirates", "Movie Characters"]
    return(
        <nav>
            <ul>
<<<<<<< HEAD
                {categoryList.map((item, index) => <li key={index+"cat"}><a className={category === item ? "active" : null} href="#">{item}</a></li> )}
=======
                {categoryList.map((item, index) => <li key={index+"cat"}><a href="#">{item}</a></li>)}
>>>>>>> 7d67130d907711cfda06838cef59d09f15092864
            </ul>
        </nav>
    )
}