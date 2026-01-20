import { useState, useEffect } from 'react';
import './BookDemoModal.css';

const BookDemoModal = ({ isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);
    const calUrl = 'https://cal.com/milind-bhushan-2oszyr/30min?embed=true&theme=light';

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="book-demo-overlay" onClick={onClose}>
            <div className="book-demo-modal" onClick={(e) => e.stopPropagation()}>
                <div className="book-demo-header">
                    <h2>Schedule a Demo</h2>
                    <button className="book-demo-close" onClick={onClose} aria-label="Close">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="book-demo-content">
                    {isLoading && (
                        <div className="book-demo-loading">
                            <div className="spinner"></div>
                            <p>Loading calendar...</p>
                        </div>
                    )}
                    <iframe
                        src={calUrl}
                        title="Book a Demo"
                        className="book-demo-iframe"
                        onLoad={() => setIsLoading(false)}
                        frameBorder="0"
                        allow="camera; microphone; autoplay; encrypted-media"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookDemoModal;
