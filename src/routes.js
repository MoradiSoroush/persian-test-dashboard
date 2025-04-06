import Products from "./Pages/Products/Products"
import Offers from "./Pages/Offers/Offers"
import Comments from "./Pages/Comments/Comments"
import Shoppingcart from "./Pages/Shoppingcart/Shoppingcart"
import Users from "./Pages/Users/Users"

let routes = [
    {path:"/products",element:<Products />},
    {path:"/offers",element:<Offers />},
    {path:"/comments",element:<Comments />},
    {path:"/users",element:<Users />},
    {path:"/shoppingcart",element:<Shoppingcart />},
]

export default routes