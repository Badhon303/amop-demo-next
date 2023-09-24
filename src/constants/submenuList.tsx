import {
  Home,
  Wifi,
  Smartphone,
  Settings,
  DollarSign,
  Users,
  Wrench,
  Router,
} from "lucide-react"

const Menus = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <Home className="w-3 h-3" />,
    submenu: false,
    submenuItems: [],
  },
  {
    title: "M2M",
    url: "",
    icon: <Wifi className="w-3 h-3" />,
    submenu: true,
    submenuItems: [
      { title: "Inventory", url: "" },
      { title: "Bulk Change", url: "" },
      { title: "Carrier Rate Plans", url: "" },
      { title: "Customer Rate Plans", url: "" },
      { title: "Customer Rate Pools", url: "" },
      { title: "Revenue Assurance", url: "" },
      { title: "Reports", url: "" },
    ],
  },
  {
    title: "Mobility",
    url: "",
    icon: <Smartphone className="w-3 h-3" />,
    submenu: true,
    submenuItems: [
      { title: "Inventory", url: "" },
      { title: "Bulk Change", url: "" },
      { title: "Carrier Rate Plans", url: "" },
      { title: "Customer Rate Plans", url: "" },
      { title: "Customer Rate Pools", url: "" },
      { title: "Revenue Assurance", url: "" },
      { title: "Reports", url: "" },
    ],
  },
  {
    title: "Optimization",
    url: "",
    icon: <Settings className="w-3 h-3" />,
    submenu: false,
    submenuItems: [],
  },
  {
    title: "Customer Charges",
    url: "",
    icon: <DollarSign className="w-3 h-3" />,
    submenu: false,
    submenuItems: [],
  },
  {
    title: "People",
    url: "",
    icon: <Users className="w-3 h-3" />,
    submenu: true,
    submenuItems: [{ title: "Users", url: "" }],
  },
  {
    title: "Settings",
    url: "",
    icon: <Wrench className="w-3 h-3" />,
    submenu: true,
    submenuItems: [
      {
        title: "Provider Charge Mapping",
        url: "",
      },
      { title: "Partners", url: "" },
    ],
  },
  {
    title: "Device Management",
    url: "",
    icon: <Router className="w-3 h-3" />,
    submenu: true,
    submenuItems: [
      { title: "Inventory", url: "/device-management" },
      { title: "Provisioning", url: "" },
      { title: "Reports", url: "" },
      {
        title: "Revenue Assurance",
        url: "",
      },
    ],
  },
]

export default Menus
