import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/UI/AdminHeader";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
