import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const cursor = document.querySelector("#cursor") as HTMLElement;
    const cursor2 = document.querySelector("#cursor2") as HTMLElement;
    
    if (cursor && cursor2) {
      document.addEventListener("mousemove", function (e) {
        cursor.style.cssText = cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
      });

      const interactiveElements = document.querySelectorAll('button, a, [class*="cursor-pointer"], [class*="hover"]');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.style.width = '50px';
          cursor.style.height = '50px';
          cursor.style.borderColor = 'rgba(249, 115, 22, 0.5)';
          cursor.style.borderWidth = '3px';
          cursor2.style.width = '8px';
          cursor2.style.height = '8px';
          cursor2.style.backgroundColor = 'rgba(249, 115, 22, 0.5)';
        });

        element.addEventListener('mouseleave', () => {
          cursor.style.width = '30px';
          cursor.style.height = '30px';
          cursor.style.borderColor = '#f97316';
          cursor.style.borderWidth = '2px';
          cursor2.style.width = '4px';
          cursor2.style.height = '4px';
          cursor2.style.backgroundColor = '#f97316';
        });
      });
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden transition-colors duration-300">
      <div id="cursor"></div>
      <div id="cursor2"></div>
      
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;