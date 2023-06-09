import { Categories } from "../Categories/Categories";
import { CartWidget } from "../../cart/CartWidget/CartWidget";
import { Link } from "react-router-dom";

export function NavBar() {
  const menuList = ["gamer", "notebook", "accesorios"];
  return (
    <nav className="navbar py-2 px-60 flex justify-evenly items-center border-b border-gray-200">
      <div className="flex-grow basis-0">
        <Link to={`/`} className="text-2xl font-bold text-gray-700 px-4 hover:bg-gray-500/10 hover:rounded-lg transition-all duration-700 ease-in-out">
          <span className="text-mint">M</span>undo
          <span className="text-mint">G</span>amer.
        </Link>
      </div>

      <Categories items={menuList} />
      <CartWidget />
    </nav>
  );
}
