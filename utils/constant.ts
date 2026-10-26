import {
     FiLayout,
     FiDollarSign,
     FiCalendar,
     FiTruck,
     FiUsers,
     FiMessageSquare,
     FiTool,
     FiSettings,
     FiUser,
     FiGrid,
     FiTag,
     FiLayers,
} from "react-icons/fi";

export const NavLinks = [
     {title: "Home", url:"/"},
     { title: "Dealers", url: "/Dealers" },
     { title: "Vehicles", url: "/vehicles" },
     { title: "Shop", url: "/gallary" },
     { title: "Rent", url: "/rent" },
     { title: "Blog", url: "/blog" },
     { title: "About", url: "/about" },
     { title: "Contact Us", url: "/contact" },
]


export const adminNavLinks = [
     {
          label: "Dashboard",
          path: "/admin",
          icon: FiLayout,
     },
     {
          label: "Sales",
          path: "/admin/sales",
          icon: FiDollarSign,
     },
     {
          label: "Rentals",
          path: "/admin/rentals",
          icon: FiCalendar,
     },
     {
          label: "Cars",
          icon: FiTruck,
          children: [
               {
                    label: "Manage Categories",
                    path: "/admin/car-categories",
                    icon: FiGrid,
               },
               {
                    label: "Manage Makes",
                    path: "/admin/car-makes",
                    icon: FiTag,
               },
               {
                    label: "Manage Models",
                    path: "/admin/car-models",
                    icon: FiLayers,
               },
               {
                    label: "All Cars",
                    path: "/admin/cars",
                    icon: FiTruck,
               },
          ],
     },
     {
          label: "Dealers",
          path: "/admin/dealers",
          icon: FiUsers,
     },
     {
          label: "Messages",
          path: "/admin/messages",
          icon: FiMessageSquare,
     },
     {
          label: "Car Parts",
          path: "/admin/carpart",
          icon: FiTool,
     },
     {
          label: "Users",
          path: "/admin/users",
          icon: FiUsers,
     },
     {
          label: "Settings",
          path: "/admin/settings",
          icon: FiSettings,
     },
     {
          label: "Profile",
          path: "/admin/profile",
          icon: FiUser,
     },
];

