export default function DiagramCode({
  code,
}: {
  code: string;
}) {
  return (
    <textarea
      className="w-full h-full p-4 border rounded resize-none"
      id="mermaid-code"
      placeholder={code}
    />
  );
}
