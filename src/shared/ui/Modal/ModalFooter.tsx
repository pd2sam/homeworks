import type { ReactNode } from 'react';

interface ModalFooterProps {
    children: ReactNode;
}

const ModalFooter = ({ children }: ModalFooterProps) => (
    <div className="modal-footer">
        {children}
    </div>
);

export default ModalFooter;