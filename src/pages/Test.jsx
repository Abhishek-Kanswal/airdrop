import React from "react";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-10">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-toggleBg aspect-video rounded-xl" />
        <div className="bg-toggleBg aspect-video rounded-xl" />
        <div className="bg-toggleBg aspect-video rounded-xl" />
      </div>
      <div className="bg-toggleBg min-h-[100vh] flex-1 rounded-xl md:min-h-min">
      </div>
    </div>
  );
}
