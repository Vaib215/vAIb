import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";
import { tools } from "../../utils/tools";
import ToolsCard from "./tools-card";

export function ToolsSection() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">TOOLS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 space-x-4 mb-6">
        <Button variant="default">All tools</Button>
        <Button variant="ghost">Highlight</Button>
        <Button variant="ghost">Image edition</Button>
        <Button variant="ghost">Stable diffusion</Button>
        <Button variant="ghost">Real-estate</Button>
        <Button variant="ghost">Portrait edition</Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((item, index) => (
          <ToolsCard key={index} tool={item} />
        ))}
      </div>
    </div>
  );
}
