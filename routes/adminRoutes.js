import { Admin } from "../src/screens";
import { Dashboard } from "../src/screens/Admin";

export const adminRoutes = [
  {
    path: "/admin",
    component: <Admin />,
  },
  {
    path: "/admin/dashboard",
    component: <Dashboard />,
  },
];
