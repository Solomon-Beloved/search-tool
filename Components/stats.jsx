import {
  // MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  // MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  // MdWork,
} from "react-icons/md";
export const menu = [
  
      {
        title: "Dashboard",
        path: "/Dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/Dashboard/Users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/Dashboard/Products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/Dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ]


 


export const footer = [
  {
    title: "Users",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
