import { CartItem } from "../CartItem/CartItem";
export const CartTable = ({cart}) => {
    return(
        <table className="w-full table-cell">
        <thead>
            <tr>
              <th>
                
              </th>
              <th>
                Nombre
              </th>
              <th>
                Precio
              </th>
              <th>
                cantidad
              </th>
            </tr>
        </thead>
        <tbody>
            {cart.map(item=> <CartItem key={item.item.id} {...item}/>)}
        </tbody>
      </table>
    )
}