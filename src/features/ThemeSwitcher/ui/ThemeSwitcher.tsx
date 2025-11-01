import { useTheme } from '../../../shared/lib/theme';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>;
};

export default ThemeSwitcher;

