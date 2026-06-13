import {
  House,
  Search,
  ShoppingCart,
  Heart,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Shop",
    path: "/home",
    icon: House,
  },
  {
    name: "Explore",
    path: "/explore",
    icon: Search,
  },
  {
    name: "Cart",
    path: "/cart",
    icon: ShoppingCart,
  },
  {
    name: "Favourite",
    path: "/favorites",
    icon: Heart,
  },
  {
    name: "Account",
    path: "/account",
    icon: User,
  },
];

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-green-500" : "text-gray-500"
              }`
            }
          >
            <Icon size={20} />

            <span className="text-xs mt-1">
              {item.name}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
}

export default BottomNav;