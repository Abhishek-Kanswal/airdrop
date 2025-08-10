import React, { useEffect, useState } from "react";
import { supabase } from "@/././../supabaseClient";
import AirdropRow from "@/components/ui/AirdropRow";
import { data, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const sample = {
  name: "Euphoria",
  logo: "https://via.placeholder.com/40",
  isNew: true,
  category: "Social",
  cost: 0,
  time: "1 min",
  status: "Potential",
  statusIcon: "🤔",
  date: "8 Aug 2025",
  type: "Airdrop",
  funding: 7.5,
  backers: ["https://via.placeholder.com/24", "https://via.placeholder.com/24"],
};

export default function ListDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("list_inner")
      .select("*")
      .eq("list_name", id);

    if (error) {
      navigate("/list");
    } else {
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  console.log(data);

  return (
    <div className="p-4 space-y-2">
      <AirdropRow project={sample} />
      <AirdropRow project={sample} />
      <AirdropRow project={sample} />
    </div>
  );
}
