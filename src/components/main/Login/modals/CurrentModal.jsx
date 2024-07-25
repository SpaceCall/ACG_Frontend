import React from 'react';
import ForgotModal from './forgotModal';
import CheckModal from './checkModal';
import SuccessModal from './successModal';
import ResetModal from './resetModal';
import IsExistModal from './isExistModal';

export default function CurrentModal({ modalType, styles, onClose, errors, userEmail }) {
    switch (modalType) {
        case 'forgot':
            return <ForgotModal styles={styles} onClose={onClose} errors={errors} />;
        case 'check':
            return <CheckModal styles={styles} onClose={onClose} />;
        case 'success':
            return <SuccessModal userEmail={userEmail} styles={styles} onClose={onClose} />;
        case 'reset':
            return <ResetModal styles={styles} onClose={onClose} />;
        case 'exists':
            return <IsExistModal styles={styles} onClose={onClose} />;
        default:
            return null;
    }
}
