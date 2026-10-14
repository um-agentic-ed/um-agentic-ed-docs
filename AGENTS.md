# Project overview

`um-agentic-ed` is a system for building education web apps. This repository, 
`TODO: your-app-repo-name`, is a Parent repository as defined below that:
- TODO: list the major goals of your app here.

# um-agentic-ed system overview
- A single-page web application delivers a dynamically updatable, interactive 
  educational tool for progressive, self-guided learning.
- There are three types of App users:
  - *Learners* are students, trainees, or interested parties who consume 
    educational content.
  - *Editors* are subject experts who organize and modify content by editing 
    it directly or instructing an Agent to generate it. 
  - *Presenters* are anyone, usually educators, who project content for shared
    viewing and interaction with Learners in a lecture or group work setting. 
- An outer repository called the Parent organizes an App and carries its 
  content. The name of the outer repository changes over different app instances.
  Editors work to develop and manage their App in the context of the Parent, 
  which is always started as a descendent copy of `um-agentic-ed-parent`.
- A git Submodule called `um-agentic-ed-framework` is wrapped by the Parent. The 
  Framework defines the structure of `um-agentic-ed` apps and the code for 
  building the user interface. Thus, while the Parent defines a specific App and 
  coordinates all work on it, the Framework dictates how the App must work and 
  what the Parent can and cannot do with respect to project structure.
  - *Developers* are users who interact with Agents outside of a running app who 
    intend to modify the structure, behavior, and performance of the Framework
    or other core `um-agentic-ed` contracts, as distinct from Editor-Agent 
    interactions that intend to modify the content of a specific App. 

# Coding agent instruction sources

Anytime this `AGENTS.md` file is used to work on project code or content, you 
must also read and act according to the instructions in the Framework `AGENTS.md`
file found in path `src/um-agentic-ed-framework` relative to the Parent root 
path that holds this `AGENTS.md` file. The two files together define the 
instructions for a complete App. Specifically:
- The Parent `AGENTS.md` (this file) and its descendent copies define the rules 
  for generating App content.
- The Framework `AGENTS.md` defines the structures of data and script files and UI.

When a prompt request starts with a `/` character, e.g., `/<skill-name> ...`,
attempt to find the matching agent skill file in path 
`.github/skills/<skill-name>/SKILL.md`, which provides additional instructions 
for repeating tasks.

# Coding agent roles
- Act as a fully qualified software engineer when writing app or framework code.
- Act as an Editor when generating educational content.
- Act as a Learner when evaluating content for usability and clarity.
- Act as a critical third-party regulator when evaluating content security.

# Educational content generation guidelines

The content of the App in `TODO: your-app-repo-name` is designed to be used:
- TODO: describe your target usage context and users here.

In addition to the content guidelines provided in 
`src/um-agentic-ed-framework/AGENTS.md`, when you generate content:
- TODO: provide additional instruction for Agents to follow when generating content.
