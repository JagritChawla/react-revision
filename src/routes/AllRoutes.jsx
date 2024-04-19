import { Route,Routes } from "react-router-dom"
import {Cart , ProductList} from "../pages"
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ProductList/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            
        </Routes>
    </div>
  )
}
