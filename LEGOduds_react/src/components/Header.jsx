import Cart from "./Cart";
<<<<<<< HEAD
export default function Header({amount}){
    
=======
export default function Header(){
>>>>>>> 7d67130d907711cfda06838cef59d09f15092864
    return(
      <header>
            <img id="logo" src="website_images/LD_logo.svg" alt="LEGOdudes nettbutikk" />
            <button id="carttoggle">
<<<<<<< HEAD
                <span id="cartcount">{amount}</span>
                <img id="carticon" src="website_images/legocart.svg" alt="Din handlevogn" />
            </button>
            <Cart/>
        </header>
    )
  }
=======
                <span id="cartcount">99</span>
                <img id="carticon" src="website_images/legocart.svg" alt="Din handlevogn" />
            </button>
            <Cart />
        </header>
    )
  }

>>>>>>> 7d67130d907711cfda06838cef59d09f15092864
