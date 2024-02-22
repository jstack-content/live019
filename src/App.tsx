import { BrowserRouter } from 'react-router-dom';

import { LogOutIcon } from 'lucide-react';
import { Router } from './Router';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Button } from './components/ui/Button';
import { Tooltip } from './components/ui/Tooltip';
import { ThemeProvider } from './contexts/ThemeContext';

export function App() {
  return (
    <ThemeProvider>
      <div className="fixed right-4 top-4 flex items-center gap-4">
        <ThemeSwitcher />

        <Tooltip content="Sair">
          <Button variant="secondary" size="icon" className="rounded-full">
            <LogOutIcon className='w4 h-4' />
          </Button>
        </Tooltip>
      </div>

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
