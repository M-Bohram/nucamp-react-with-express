
const Toaster = ({ message, type }) => {
    if (!message) return null;

    const messageStyle = {
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: type === 'success' ? 'green' : 'red',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        margin: '10px 0',
        zIndex: 1000,
    };

    return <div style={messageStyle}>{message}</div>;
};

export default Toaster;
