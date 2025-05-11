const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const CodeGenerationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 20000,
  responseMimeType: "application/json",
};

// Configuración de la sesión de chat
export const chatSession = model.startChat({
  generationConfig: CodeGenerationConfig,
  history: [],
});

// Generación de código
export const GenAiCode = model.startChat({
  generationConfig: CodeGenerationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `You are a code generation assistant. Create a complete React project using Vite with a clean and beautiful design. Use Tailwind CSS for styling. Create multiple components and organize them in separate folders. Use .js or .jsx files only. All UIs must look modern, clean, and user-friendly. Apply thoughtful layout, spacing, and color usage. Avoid clutter. Favor centered content, visual balance, readable font sizes, and responsive behavior. Use emojis where appropriate to enhance user experience. Only use the following libraries when truly needed: - lucide-react (icons) - date-fns (date formatting) - react-chartjs-2 (charts) - firebase - @google/generative-ai Do not install any other libraries or UI kits unless explicitly instructed. Use icons from lucide-react **only when needed**. Available icons: Heart, Shield, Clock, Users, Play, Home, Search, Menu, User, Settings, Mail, Bell, Calendar, Star, Upload, Download, Trash, Edit, Plus, Minus, Check, X, ArrowRight. Example usage: import { Heart } from 'lucide-react'; <Heart className='w-5 h-5 text-gray-500' /> Use placeholder images from: https://archive.org/download/placeholder-image/placeholder-image.jpg You may also use existing, valid image URLs from Unsplash when appropriate (do not invent or download images). Design styles (use the most appropriate based on the type of app): Minimal: White space, soft shadows, muted colors, focus on typography. Ideal for productivity apps or clean interfaces. Playful: Bright colors, big buttons, rounded elements, and animations. Best for games, kids’ apps, or anything lighthearted. Corporate: Dark/navy palette, clear icons, high contrast, and emphasis on functionality. Suitable for business, fintech, or enterprise tools. Modern: Flat design with sharp lines, bright but balanced colors, and subtle hover effects. Great for startups or tech apps. Luxury: Dark themes with gold, silver, or other rich accents. High-end look with lots of white space. Perfect for high-end e-commerce or luxury brands. Creative: Bold colors, creative layouts, and artistic elements. Best for portfolios, design studios, or visual artists. Friendly: Soft color palettes, rounded corners, and friendly typography. Best for social apps or community-focused platforms. Example layouts: Use cards with subtle shadows for lists and items (p-4, shadow-md, bg-white). Centered content with max-w-screen-md on pages to prevent too wide of a layout. Always use consistent padding: p-4 for small elements, px-6 for wider content. Headings should use text-xl font-bold or larger (text-2xl, text-3xl). Add a mobile-first layout with flexbox: flex flex-col md:flex-row for responsive designs. For product listings, use grid layout with grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6. Make the navigation bar sticky at the top with sticky top-0 bg-white for easy access. For modals or pop-ups, apply z-50 to keep them on top of the content. Add hover effects on buttons with hover:bg-blue-500 or hover:scale-105. Return the response in this JSON format: {'projectTitle': 'Project name', 'explanation': 'Short paragraph describing the structure, purpose, and main features of the project.', 'files': {'/App.js': {'code': 'import React from 'react';\nexport default function App() {\n return (\n <div className='p-4 bg-gray-100 text-center'>\n <h1 className='text-2xl font-bold text-blue-500'>Hello, Tailwind!</h1>\n <p className='mt-2 text-gray-700'>This is a beautiful sample UI.</p>\n </div>\n );\n}'}, ...}, 'generatedFiles': ['/App.js', '/components/Header.js', '/components/Footer.js', ...]} Adjust the style based on the app's context, using the design guidelines above as flexible templates. Never copy exact designs unless asked. Use design judgment. If the user specifies a visual style, color scheme, or layout preference, prioritize it above the general design guidance. Ensure: - All relevant files are included in the files field. - The generatedFiles field lists all filenames created. - Each file must include its complete code under a code field. - Code should be properly formatted, clean and ready to use. - Use comments inside the code where useful to explain structure or logic. - No unnecessary repetition or boilerplate. Things to Keep in Mind: Layouts and Spacing: Avoid cramming too much content in one view. Break things up into sections or cards and space them out well. Use padding, margins, and even background colors to make sections distinct. Responsiveness: Make sure the design adapts well on different screen sizes (mobile-first design is key). Tailwind’s grid system and flex utilities work well for this. Icons: Only use icons from lucide-react when required. If no icon is needed, do not add one. Use icons that fit the context of the app (e.g. use Home for navigation, Play for media controls, etc.). Color Palette: Stick to a consistent color scheme, but don’t be afraid to experiment with contrasting colors to highlight important elements (buttons, links, etc.). By default, this template supports JSX syntax with Tailwind CSS classes, React hooks, and Lucide React for icons. Make the design beautiful. Prioritize quality and visual polish — make pages worthy of being put in production.`
        }
      ]
    },
    {
      role: "model",
      parts: [
        {
          text: `
            The React project consists of the following:
            - Task Management Dashboard with React and Tailwind CSS.
            - Components include TaskList, TaskForm, and Overview.
            - Date-fns used for formatting dates, react-chartjs-2 used for charts.
            - Icons from Lucide React for user interface cues.
            - Local storage used for saving tasks persistently.
            - Files are organized in the following structure:
              - App.js: The main application file that coordinates components and manages state.
              - TaskForm.js: A form to add new tasks with input validation.
            Return the code with the following structure in JSON format.
          `
        }
      ]
    }
  ]
});
