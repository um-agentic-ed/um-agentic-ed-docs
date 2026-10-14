/*
 * Declare the values that make this App different from other um-agentic-ed Apps. 
 *
 * Fill in the values below by hand, or run `/build-app set-app-identity` in
 * your coding agent to help you, including generating a unique appUuid.
 * 
 * Keep this file as plain JavaScript that only assigns window.umedAppIdentity.
 */
window.umedAppIdentity = {
  // Immutable unique ID (UUID v4) of this App. Generate a new one for each
  // new App and NEVER change it afterwards: Learner notes saved in the browser 
  // and exported notes files are matched to the App by this value.
  appUuid: "1f7f09e4-79cb-4047-ac48-6a0ce132f61f",

  // Short, lowercase, filesystem-safe name using only a-z, 0-9 and hyphens.
  // Used for the file name of exported Learner notes: <appName>.notes.json.
  appName: "um-agentic-ed-parent",

  // Human-readable title. The Framework shows it both in the page header and
  // as the browser tab title, so keep it short enough to fit.
  appTitle: "UM Agentic Ed Parent",

  // Whether Learners and Editors use the Subject level in navigation. Use true
  // for Apps with one or more visible Subjects. When false, the content index
  // must contain exactly one hidden Subject whose id and title are both
  // "app-subject"; routes still include that Subject id.
  subjectsEnabled: false,

  // The subject area Learners study. Together with learner Level it gives AI
  // chatbots context when a Learner asks about a Slide, in the sentence
  // "I am a <learnerLevel> learner in <discipline>."
  // Examples: "organic chemistry", "molecular genetic pathology".
  discipline: "app development",

  // The typical Learner this App targets, as an adjective phrase that fits
  // "I am a ___ learner". Examples: "high school", "post-graduate", "beginning".
  learnerLevel: "beginning",

  // Web address of the AI chatbot that opens in a new browser tab when a
  // Learner asks about a Slide. Slide text is copied to the clipboard to paste
  // there. Must start with https:// (or http://). Use your institution's or a
  // preferred chatbot, e.g., "https://chatgpt.com/" or "https://claude.ai/".
  // Leave it as "" to copy prompts without opening a chatbot.
  chatbotUrl: "https://chatgpt.com/",

  // An array of unique recognized Editor names. Only these names are accepted as 
  // valid entries to enable Editor Mode and can be recorded in the `owner` field  
  // of the `APP_LOCK.js` file. Any valid string can be used, but lowercase strings
  // with no spaces, such as email address prefixes, are recommended. Values are 
  // a convenience to help keep Editor work organized and must not be considered
  // a secure authentication or authorization mechanism. If the array is empty,
  // only Agent editing is supported.
  allowedEditorNames: ["username"]
};
