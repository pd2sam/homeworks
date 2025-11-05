import type { ReactNode } from 'react';

interface ModalBodyProps {
    children: ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps) => (
    <div className="modal-body">
        {children}
    </div>
);

export default ModalBody;