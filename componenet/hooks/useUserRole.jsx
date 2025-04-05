"use client";    
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

const useUserRole = () => {
  const { data: session, status } = useSession();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;

    const fetchRole = async () => {
      try {
        const res = await axios.get(`/api/user-role?email=${session?.user?.email}`);
        setRole(res.data.role);
      } catch (err) {
        console.error("Failed to fetch role:", err);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.email) {
      fetchRole();
    }
  }, [session, status]);

  return { role, loading };
};

export default useUserRole;