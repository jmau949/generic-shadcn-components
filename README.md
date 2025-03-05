# 📦 Generic ShadCN Components

A reusable **ShadCN component library** built with React, TypeScript, and TailwindCSS for Lenscribe and other projects.

---

## 🚀 Installation

To use this component library in your project, install it via npm:

```sh
npm install @jmau949/generic-shadcn-components
```

# 📌 Usage

Import and use the components in your React project:

```tsx
import { Button, Input, Card } from "@jmau949/generic-shadcn-components";

export function ExampleComponent() {
  return (
    <Card>
      <Input placeholder="Enter text here" />
      <Button>Click Me</Button>
    </Card>
  );
}
```

# 🛠️ Adding New ShadCN Components

To add a new component to the library:

### Navigate to the repo:

```sh
cd generic-shadcn-components
```

### Add a new component using ShadCN CLI:

```sh
npx shadcn-ui@latest add [component-name]
```

**Example:**

```sh
npx shadcn-ui@latest add textarea
```

### Commit and push the new component:

```sh
git add .
git commit -m "Added ShadCN component: [component-name]"
git push origin main
```

Publish the updated package (see below).

# 📢 Publishing a New Version to npm

### Ensure you are logged into npm:

```sh
npm login
```

### Bump the version in package.json (e.g., from 1.0.0 to 1.0.1):

```sh
npm version patch
```

### Publish to npm:

```sh
npm publish --access public
```

### Update the package in consuming projects:

```sh
npm update @jmau949/generic-shadcn-components
```

# 🎯 Project Structure

```pgsql
generic-shadcn-components/
│── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│── src/
│   ├── index.css
│── dist/ (Generated build files)
│── .gitignore
│── index.ts (Exports all components)
│── package.json
│── postcss.config.cjs
│── tailwind.config.ts
│── tsconfig.json
│── vite.config.ts
│── README.md (You are here)
```

# 📜 License

This project is licensed under the MIT License.


