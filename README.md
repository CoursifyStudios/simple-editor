<h1 align="center">
  <a href="https://lexical-simple-editor">Simple Editor</a>
</h1>

<p align="center">
  <img alt="You didnt ask for this badge" src="https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg"/>
  <img alt="Control+C, Control+V" src="https://forthebadge.com/images/badges/ctrl-c-ctrl-v.svg"/>
</p>

In our quest to find the ideal text editor for Karasu LMS, we encountered various options that required us to make tradeoffs. Although Draft.js appeared to be an attractive choice, we were hesitant to invest in a project that was no longer receiving support. Other alternatives we stumbled upon were unsuitable due to their reliance on the cloud or lack of flexibility. Ultimately, we decided to create our own editor configuration using the Lexical Framework, which provided us with the freedom to customize and tailor the editor to our specific needs.

Due to the nature of Lexical being in beta, we ran into multiple undocumented edge cases. This repository is a demonstration of a straightforward text editor configuration that can be achieved using Lexical.

## Features
- Github flavored markdown support
- Undo and redo via shortcuts
- Built in grammar and spell checking using Grammarly SDK

Built using Nextjs 13, TailwindCSS, and Typescript

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

