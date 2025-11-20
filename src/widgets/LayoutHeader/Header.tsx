import { Fragment, useState } from 'react';
import Modal from '../../shared/ui/Modal/Modal';
import Button from '../../shared/ui/Button/Buttons';
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import UserTabs from '../UserTabs/UserTabs';
const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Fragment>
            <header className="header">
                <div className="header__controls">
                    <UserTabs />
                    <div className="header__actions">
                        <ThemeSwitcher />
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="header__about-button"
                        >
                            О проекте
                        </Button>
                    </div>
                </div>
            </header>
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