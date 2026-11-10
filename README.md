@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #060d1d;
  color: #e2e8f0;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

button,
input {
  font: inherit;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.9);
}

::-webkit-scrollbar-thumb {
  border-radius: 9999px;
  background: rgba(59, 130, 246, 0.45);
}

.border-soft {
  border: 1px solid rgba(148, 163, 184, 0.15);
}

.shadow-glow {
  box-shadow: 0 0 0 1px rgba(148, 163, 184, 0.08), 0 20px 40px rgba(15, 23, 42, 0.45);
}
