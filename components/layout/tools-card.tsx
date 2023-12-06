import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { icons } from "lucide-react";
import { Tool } from "@/types/tools";

export default function ToolsCard({ tool }: { tool: Tool }) {
  const LucideIcon = icons[tool.iconName];
  return (
    <Link href={tool.path}>
      <Card>
        <CardContent>
          <img
            alt="Stable Diffusion XL"
            className="mb-4"
            height="200"
            src={tool.image}
            style={{
              aspectRatio: "350/200",
              objectFit: "cover",
            }}
            width="350"
          />
          <div className="flex items-center mb-2 space-x-2">
            <LucideIcon />
            <span className="text-xl">{tool.name}</span>
          </div>
          <p>{tool.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
