import { Link } from "react-router-dom"
export default function CategoriesIndex(){
    const categories_array = ["Fruits", "Vegetables", "Electronics", "Clothing", "Books"]
    return(
    <>
        <h1>Categories</h1>
        <ul>
            {categories_array.map((category, index) => <li key={category+index}><Link to={category}>{category}</Link></li>)}
        </ul>
    </>
    )
}