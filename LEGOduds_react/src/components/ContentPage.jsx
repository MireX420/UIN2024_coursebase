<<<<<<< HEAD
import {products} from '../assets/legoduds'
import Title from './Title'
import ProductCard from './ProductCard'

export default function ContentPage({amount, setAmount, category}){
    return(
        <main>
          <Title category={category}/>
          {products.map(product => 
          <ProductCard 
          key={product.prodid} 
          category={product.category} 
          title={product.title} 
          img={product.imagefile} 
          price={product.price} 
          amount={amount}
          setAmount={setAmount}
          /> )}
=======
import Title from './Title'
import ProductCard from './ProductCard'
import {products} from '../assets/legoduds'
export default function ContentPage(){
    return(
        <main>
          <Title />
          {products.map(product => <ProductCard key={product.prodid} category={product.category} title={product.title} img={product.imagefile} price={product.price}/> )}
>>>>>>> 7d67130d907711cfda06838cef59d09f15092864
        </main>
    )
}