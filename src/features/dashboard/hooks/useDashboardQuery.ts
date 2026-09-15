import { useQuery } from "@tanstack/react-query";
import http from "../../../services/http";

const useDashboard = () => {
  // KPI cards
  const {
    data: kpis,
    isLoading: kpisLoading,
    isError: kpisError,
  } = useQuery({
    queryKey: ["dashboard-kpis"],
    queryFn: async () => {
      const response = await http.get("/admin/dashboard/kpis");
      return response.data;
    },
  });

  // Weekly report + chart
  const {
    data: weeklyReport,
    isLoading: weeklyLoading,
    isError: weeklyError,
  } = useQuery({
    queryKey: ["dashboard-weekly-report"],
    queryFn: async () => {
      const response = await http.get(
        "/admin/dashboard/weekly-report"
      );
      return response.data;
    },
  });

  // Realtime-Users
  const {
    data: usersData,
    isLoading: usersLoading,
    isError: usersError,
  } = useQuery({
    queryKey: ["realtime-users"],
    queryFn: async () => {
      const response = await http.get(
        "/admin/dashboard/realtime-users"
      );
      return response.data?.data ?? null;
    },
  });

  // Sales By Country
  const {
    data: salesByCountry,
    isLoading: countryLoading,
    isError: countryError,
  } = useQuery({
    queryKey: ["sales-by-country"],
    queryFn: async () => {
      const response = await http.get(
        "/admin/dashboard/sales-by-country"
      );
      return response.data?.data ?? [];
    },
  });

  // Sales By Country


  return {
    kpis,
    weeklyReport,
    usersData,
    salesByCountry,
   

    isLoading: kpisLoading || weeklyLoading || usersLoading || countryLoading ,
    isError: kpisError || weeklyError || usersError || countryError ,
  };
};

export default useDashboard;