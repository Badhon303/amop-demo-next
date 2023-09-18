const Menus = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: (
      <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 8.75V19"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 8.25H19"
        ></path>
      </svg>
    ),
  },
  {
    title: "M2M",
    url: "/m2m",
    icon: (
      <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18 9.25H13.75V5"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 15.25H14.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 12.25H14.25"
        ></path>
      </svg>
    ),
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
    icon: (
      <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
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
    icon: (
      <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 8.75V19"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 8.25H19"
        ></path>
      </svg>
    ),
  },
  {
    title: "Customer Charges",
    url: "/customer-charges",
    icon: (
      <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 8.75V19"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 8.25H19"
        ></path>
      </svg>
    ),
  },
  {
    title: "People",
    url: "people",
    icon: (
      <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    submenu: true,
    submenuItems: [{ title: "Users", url: "/people/users" }],
  },
  {
    title: "Settings",
    url: "settings",
    icon: (
      <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
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
    icon: (
      <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
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
