import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata = {
    title: "dAIgram by Vaib"
}

const goToDiagramPage = async (formData: FormData) => {
  "use server";
  const data = {
    topic: formData.get("diagram-name"),
    diagramType: formData.get("diagram-type"),
  };
  redirect(`/daigram/${data.topic}?diagramType=${data.diagramType}`);
};

export default function Daigram() {
  return (
    <div className="flex-1">
      <main className="container mx-auto p-8 flex flex-col items-center">
        <section className="text-center my-8">
          <h2 className="text-6xl font-bold">
            Generate Your d<span className="text-primary">AI</span>gram
          </h2>
        </section>
        <form
          action={goToDiagramPage}
          className="w-full md:w-1/2 lg:w-1/3 flex flex-col space-y-4"
        >
          <Input
            id="diagram-name"
            name="diagram-name"
            placeholder="Enter diagram name"
            required
          />
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
          <Button className="mx-auto w-full" type="submit" variant={"outline"}>
            Generate Diagram
          </Button>
        </form>
        <section className="mt-8 w-full">
          <h2 className="text-2xl font-semibold mb-4">
            Public Diagram Previews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="w-full">
              <CardContent>
                <Image
                  alt="Diagram Preview"
                  className="w-full h-auto"
                  height="200"
                  src="https://i.imgur.com/OpYET1J.png"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-lg font-medium mt-2">Diagram Title</h3>
                <p className="text-sm text-primary">Flowchart</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent>
                <Image
                  alt="Diagram Preview"
                  className="w-full h-auto"
                  height="200"
                  src="https://i.imgur.com/OpYET1J.png"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-lg font-medium mt-2">Diagram Title</h3>
                <p className="text-sm text-primary">Flowchart</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent>
                <Image
                  alt="Diagram Preview"
                  className="w-full h-auto"
                  height="200"
                  src="https://i.imgur.com/OpYET1J.png"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-lg font-medium mt-2">Diagram Title</h3>
                <p className="text-sm text-primary">Flowchart</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent>
                <Image
                  alt="Diagram Preview"
                  className="w-full h-auto"
                  height="200"
                  src="https://i.imgur.com/OpYET1J.png"
                  style={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-lg font-medium mt-2">Diagram Title</h3>
                <p className="text-sm text-primary">Flowchart</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
