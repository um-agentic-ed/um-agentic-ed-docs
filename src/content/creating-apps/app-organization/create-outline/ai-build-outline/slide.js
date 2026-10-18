window.umedAppContent["creating-apps/app-organization/create-outline/ai-build-outline"] = {
  "id": "ai-build-outline", "uuid": "a5c7ba28-ba11-4992-9b00-3c5ac6f79645", "slideSchemaVersion": 2,
  "title": "Let AI help build your outline", "level": "advanced-topics", "order": 20, "contentUpdatedAt": "2026-10-18T13:53:09.847Z",
  "content": { "blocks": [
    { "type": "text", "markdown": "AI can help turn learning goals into a draft outline, but the editor remains responsible for its educational design. Give the agent the target learners, discipline, major objectives, prerequisites, desired depth, and any required topics or constraints. Ask it to propose concise slide titles organized into the app hierarchy and learner levels.\n\nTreat the proposal as a reviewable draft. Check that each slide has one clear purpose, sections form coherent sequences, foundational material appears before concepts that depend on it, and advanced topics are genuinely optional or more nuanced. Remove duplication and add missing transitions before using the outline to create the app tree. Do not include confidential, protected, or copyrighted source material in the prompt." },
    { "type": "question", "prompt": "What is the editor's most important step after AI proposes an outline?", "choices": [
      { "text": "Review and revise it against the learning goals and learner progression", "correct": true, "feedback": "The editor must verify scope, sequence, level placement, gaps, and duplication before implementation." },
      { "text": "Accept every proposed slide so no topic is lost", "correct": false, "feedback": "An unreviewed proposal may be redundant, poorly sequenced, or mismatched to the intended learners." },
      { "text": "Replace all section titles with technical folder names", "correct": false, "feedback": "Outline titles are clear, learner-facing labels; folder identifiers are handled separately." }
    ] }
  ] }
};
