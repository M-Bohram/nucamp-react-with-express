import { useState } from 'react';

const useToaster = () => {
    const [toast, setToast] = useState({ message: '', type: '' });

    const showToast = (message, type = 'success') => {
        setToast({ message, type });

        setTimeout(() => {
            setToast({ message: '', type: '' });
        }, 3000); // Dismiss toast after 3 seconds
    };

    return { toast, showToast };
};

export default useToaster;
