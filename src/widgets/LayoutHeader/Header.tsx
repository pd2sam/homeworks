import { Fragment, useState } from 'react';
import Modal from '../../shared/ui/Modal/Modal';
import Button from '../../shared/ui/Button/Buttons';
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Fragment>
            <div className="header">
                <h1>Header</h1>
                <div>
                    <ThemeSwitcher />
                    <Button onClick={() => setIsModalOpen(true)}>О проекте</Button>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Header onClose={() => setIsModalOpen(false)}>
                    <h2>Информация о проекте</h2>
                </Modal.Header>
                <Modal.Body>
                    <h3>Проект TypeScript</h3>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
};
export default Header;