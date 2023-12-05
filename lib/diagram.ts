import axios from "axios";

export const generateDiagram = async (topic: string, diagramType: string) => {
  try {
    const diagramInfo: Record<string, string> = {
      flowchart: `flowchart
          A[Start] --> B{Should you?}
          B -- Yes --> C{{Do it}}
          B -- Maybe --> D[(Save for later)]
          B -- No --> E[Okay]`,
      sequenceDiagram: `sequenceDiagram
          Alice ->>+ Bob: Here's a message!
          Bob ->>- Alice: Hmm, ok, thanks.`,
      classDiagram: `classDiagram
          class ClassName {
            String stringName
            Long longName
            MyDatatype attributeName
  
            functionName(parameter) ReturnType
            functionName2(parameter2) ReturnType
          }`,
      stateDiagram: `stateDiagram-v2
          Stationary --> Moving : Begin moving
          Moving --> Stationary : Stop moving`,
      erDiagram: `erDiagram
          User {
            Int id PK
            String username
            Int serverId FK
          }
  
          Server {
            Int id PK
            String serverName
          }
  
          Server ||--o{ User : has`,
      journey: `journey
          title User Journey
          section Logging in
            Navigate to login: 4: Alice, Bob, Craig
            Entering details: 2: Alice, Bob
            Pressing button: 5: Alice`,
      gantt: `gantt
          Dated Milestone: milestone, m1, 2023-01-01, 1d
          Relative Milestone: milestone, m2, after m1, 1d
          Task 1: a1, 2023-01-01, 1d
          Task 2: a2, after a1, 1d
          Task 3: a3, 2023-01-01, 36hr`,
      pie: `pie
          title Fruits
          "Apples" : 50
          "Oranges" : 20
          "Grapes" : 9.99
          "Passionfruits" : 12.5`,
      requirementDiagram: `requirementDiagram
          requirement UptimeRequirement {
            id: 1
            text: Site Uptime 
            risk: Medium
            verifymethod: Analysis
          }
  
          element satisfyingElement {
            type: MyElement
            docref: ABC001
          }
  
          element containingElement {
            type: MyElement
            docref: ABC002
          }
  
          satisfyingElement - satisfies -> UptimeRequirement
          containingElement - contains -> UptimeRequirement`,
      gitGraph: `gitGraph BT:
          commit
          branch branch2
          checkout branch2
          commit
          checkout main
          commit
          merge branch2`,
    };

    const basicCode = diagramInfo[diagramType] || "";

    const response = await axios.post("https://nqj4xd-5000.csb.app/chat", {
      message: topic,
      prompt: `You are a diagram maker. Your task is to create a Mermaid ${diagramType} diagram. In the next message, I will give you the topic. Don't send me anything except the Mermaid diagram code. Make the diagram vertical. Don't send me anything except code.\n\nExample Code:\n\`\`\`${diagramType}\n${basicCode}\n\`\`\``,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
