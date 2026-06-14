import {
  ChevronRight,
  ShoppingBag,
  User,
  MapPin,
  CreditCard,
  Tag,
  Bell,
  CircleHelp,
  Info,
  LogOut,
} from "lucide-react";

import BottomNav from "../components/BottomNav";

const menuItems = [
  {
    icon: ShoppingBag,
    title: "Orders",
  },
  {
    icon: User,
    title: "My Details",
  },
  {
    icon: MapPin,
    title: "Delivery Address",
  },
  {
    icon: CreditCard,
    title: "Payment Methods",
  },
  {
    icon: Tag,
    title: "Promo Code",
  },
  {
    icon: Bell,
    title: "Notifications",
  },
  {
    icon: CircleHelp,
    title: "Help",
  },
  {
    icon: Info,
    title: "About",
  },
];

function Account() {
  return (
    <div className="min-h-screen bg-white pb-24">

      {/* Profile Header */}
      <div className="flex items-center gap-4 px-5 pt-10">

        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <User size={30} />
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Guest User
          </h2>

          <p className="text-gray-500">
            guest@example.com
          </p>
        </div>

      </div>


     {/* Menu  */}
      <div className="mt-8">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                flex
                items-center
                justify-between
                px-5
                py-5
                border-b
              "
            >
              <div className="flex items-center gap-4">

                <Icon size={22} />

                <span>
                  {item.title}
                </span>

              </div>

              <ChevronRight size={18} />

            </div>
          );
        })}

      </div>


      {/* Logout */}
      <div className="px-5 mt-8">

        <button
          className="
            w-full
            bg-green-100
            text-green-600
            py-4
            rounded-2xl
            flex
            items-center
            justify-center
            gap-2
            font-semibold
          "
        >
          <LogOut size={20} />
          Log Out
        </button>

      </div>

      <BottomNav />

    </div>
  );
}

export default Account;