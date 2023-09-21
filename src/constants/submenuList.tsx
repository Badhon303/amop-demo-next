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
    url: "/m2m",
    icon: <Wifi className="w-3 h-3" />,
    submenu: true,
    submenuItems: [
      { title: "Inventory", url: "/m2m/inventory" },
      { title: "Bulk Change", url: "/m2m/bulk-change" },
      { title: "Carrier Rate Plans", url: "/m2m/carrier-rate-plans" },
      { title: "Customer Rate Plans", url: "/m2m/customer-rate-plans" },
      { title: "Customer Rate Pools", url: "/m2m/customer-rate-pools" },
      { title: "Revenue Assurance", url: "/m2m/revenue-assurance" },
      { title: "Reports", url: "/m2m/reports" },
    ],
  },
  {
    title: "Mobility",
    url: "mobility",
    icon: <Smartphone className="w-3 h-3" />,
    submenu: true,
    submenuItems: [
      { title: "Inventory", url: "/mobility/inventory" },
      { title: "Bulk Change", url: "/mobility/bulk-change" },
      { title: "Carrier Rate Plans", url: "/mobility/carrier-rate-plans" },
      { title: "Customer Rate Plans", url: "/mobility/customer-rate-plans" },
      { title: "Customer Rate Pools", url: "/mobility/customer-rate-pools" },
      { title: "Revenue Assurance", url: "/mobility/revenue-assurance" },
      { title: "Reports", url: "/mobility/reports" },
    ],
  },
  {
    title: "Optimization",
    url: "/optimization",
    icon: <Settings className="w-3 h-3" />,
    submenu: false,
    submenuItems: [],
  },
  {
    title: "Customer Charges",
    url: "/customer-charges",
    icon: <DollarSign className="w-3 h-3" />,
    submenu: false,
    submenuItems: [],
  },
  {
    title: "People",
    url: "people",
    icon: <Users className="w-3 h-3" />,
    submenu: true,
    submenuItems: [{ title: "Users", url: "/people/users" }],
  },
  {
    title: "Settings",
    url: "settings",
    icon: <Wrench className="w-3 h-3" />,
    submenu: true,
    submenuItems: [
      {
        title: "Provider Charge Mapping",
        url: "/settings/provider-charge-mapping",
      },
      { title: "Partners", url: "/settings/partners" },
    ],
  },
  {
    title: "Device Management",
    url: "device-management",
    icon: <Router className="w-3 h-3" />,
    submenu: true,
    submenuItems: [
      { title: "Inventory", url: "/device-management" },
      { title: "Provisioning", url: "/device-management/provisioning" },
      { title: "Reports", url: "/device-management/reports" },
      {
        title: "Revenue Assurance",
        url: "/device-management/revenue-assurance",
      },
    ],
  },
]

export default Menus
