import { useState } from 'react';
import Modal from '../../shared/ui/Modal';
import Button from '../../shared/ui/Button';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <footer id='footer'>
        <p>&copy; 2025 ООО "Ромашка"</p>
        <Button onClick={() => setIsOpen(true)} variant="secondary">О проекте</Button>
      </footer>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="О проекте">
        <p>Это учебный проект, демонстрирующий использование React.</p>
        <p>Проект включает в себя:</p>
        <ul>
          <li>ThemeContext для переключения темы</li>
          <li>Модальные окна через React.Portal</li>
          <li>Переиспользуемые компоненты кнопок</li>
          <li>Компонентный подход к структуре проекта</li>
        </ul>
      </Modal>
    </>
  );
};

export default Footer;