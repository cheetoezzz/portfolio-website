# Portfolio Website

A modern, minimal portfolio website built with React, Vite, and Tailwind CSS. This project showcases web development best practices with a clean, professional design.

## Features

- **Minimal & Modern Design**: Clean typography, good spacing, and professional aesthetics
- **Responsive Layout**: Mobile-first design that works seamlessly on all devices
- **Semantic HTML5**: Proper HTML structure for better accessibility and SEO
- **Component-Based Architecture**: Reusable React components for maintainability
- **Smooth Navigation**: Smooth scrolling between sections
- **SEO Optimized**: Meta tags and structured data for search engines
- **Accessible**: ARIA labels and keyboard navigation support

## Sections

- **Hero**: Introduction with name, title, and call-to-action buttons
- **About**: Professional background and expertise
- **Projects**: Grid layout showcasing 4 sample projects with tech stacks
- **Skills**: Technical skills organized by category
- **Contact**: Contact information with email, LinkedIn, and GitHub links

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript ES6+**: Modern JavaScript features

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Section.jsx
│   │   └── Skills.jsx
│   ├── assets/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Update the following files with your personal information:

- **Hero.jsx**: Update name, title, and introduction
- **About.jsx**: Update your professional background
- **Projects.jsx**: Replace with your actual projects
- **Skills.jsx**: Update with your technical skills
- **Contact.jsx**: Update your contact information
- **index.html**: Update meta tags and SEO information

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying Tailwind classes in the components
2. Updating `tailwind.config.js` for custom theme configurations
3. Adding custom CSS in `src/index.css`

## Deployment

This portfolio can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect to Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Firebase Hosting**: Deploy the `dist` folder

## Best Practices Implemented

- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Performance**: Optimized images, lazy loading, minimal dependencies
- **SEO**: Meta tags, structured data, semantic HTML
- **Code Quality**: Clean, maintainable, and well-documented code
- **Responsive Design**: Mobile-first approach with breakpoints

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React, Vite, and Tailwind CSS
