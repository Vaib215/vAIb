import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import DiagramCode from "@/components/layout/diagram-code";
import { Suspense } from "react";
import { generateDiagram } from "@/lib/diagram";

export default async function SingleDAIgram({
  params,
  searchParams,
}: {
  params: { topic: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const diagramCode = await generateDiagram(params.topic, searchParams.diagramType as string);
  return (
    <div className="flex-1 flex">
      <div className="flex-1 flex flex-col p-8">
        <div className="grid grid-cols-4 items-center mb-4">
          <h1 className="capitalize text-2xl col-span-2">
            {decodeURIComponent(params.topic)}
          </h1>
          <Select name="diagram-type" required>
            <SelectTrigger id="diagram-type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="flowchart">Flowchart</SelectItem>
              <SelectItem value="sequenceDiagram">Sequence Diagram</SelectItem>
              <SelectItem value="classDiagram">Class Diagram</SelectItem>
              <SelectItem value="stateDiagram-v2">State Diagram</SelectItem>
              <SelectItem value="erDiagram">
                Entity Relationship Diagram
              </SelectItem>
              <SelectItem value="journey">User Journey Diagram</SelectItem>
              <SelectItem value="gantt">Gantt Chart</SelectItem>
              <SelectItem value="pie">Pie Chart</SelectItem>
              <SelectItem value="requirementDiagram">
                Requirement Diagram
              </SelectItem>
              <SelectItem value="gitGraph">Git Graph</SelectItem>
              {/* Add more options for other diagram types */}
            </SelectContent>
          </Select>
          <Button className="ml-4">Regenerate</Button>
        </div>
        <Suspense fallback={<div>Loading</div>}>
          <DiagramCode
            code={diagramCode}
          />
        </Suspense>
      </div>
      <div className="flex-1 p-8">
        <div className="w-full h-full border rounded flex items-center justify-center">
          <img
            alt="Mermaid Diagram"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
      </div>
    </div>
  );
}
