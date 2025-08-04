"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/db/supabase";

const Page = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleUpdate = async () => {
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setMessage("Failed to update password.");
    } else {
      setMessage("Password updated successfully!");
      setTimeout(() => router.push("/sign-in"), 2000);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Set New Password</h2>
      <input
        type="password"
        className="w-full p-2 border rounded mb-2"
        placeholder="New password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full bg-black text-white p-2 rounded"
        onClick={handleUpdate}
      >
        Update Password
      </button>
      {message && <p className="mt-2 text-sm text-green-700">{message}</p>}
    </div>
  );
};

export default Page;
