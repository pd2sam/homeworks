import type { ReactNode } from 'react';
import Button from '../Button/Buttons';

interface ModalHeaderProps {
    children: ReactNode;
    onClose: () => void;
}

const ModalHeader = ({ children, onClose }: ModalHeaderProps) => (
    <div className="modal-header">
        {children}
        <Button variant="close" onClick={onClose}>×</Button>
    </div>
);

export default ModalHeader;