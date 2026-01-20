import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { FaUser } from 'react-icons/fa';
import './CommentsSection.css';

const CommentsSection = ({ blogId }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: '',
        saveInfo: false
    });
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        if (blogId) {
            fetchComments();
        }
    }, [blogId]);

    const fetchComments = async () => {
        try {
            const { data, error } = await supabase
                .from('comments')
                .select('*')
                .eq('blog_id', blogId)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setComments(data || []);
        } catch (error) {
            console.error('Error fetching comments:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setMessage({ type: '', text: '' });

        if (!formData.name || !formData.email || !formData.content) {
            setMessage({ type: 'error', text: 'Please fill in all required fields.' });
            setSubmitting(false);
            return;
        }

        try {
            const { error } = await supabase
                .from('comments')
                .insert([
                    {
                        blog_id: blogId,
                        name: formData.name,
                        email: formData.email,
                        content: formData.content
                    }
                ]);

            if (error) throw error;

            setMessage({ type: 'success', text: 'Comment submitted successfully!' });
            setFormData({ name: '', email: '', content: '', saveInfo: formData.saveInfo });
            fetchComments(); // Refresh list
        } catch (error) {
            console.error('Error submitting comment:', error);
            setMessage({ type: 'error', text: 'Failed to submit comment. Please try again.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="comments-section">
            <div className="leave-comment">
                <h3>Leave a comment</h3>
                <form onSubmit={handleSubmit} className="comment-form">
                    <div className="form-group full-width">
                        <textarea
                            name="content"
                            placeholder="Write a comment"
                            value={formData.content}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="saveInfo"
                                checked={formData.saveInfo}
                                onChange={handleChange}
                            />
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </div>

                    {message.text && (
                        <div className={`message ${message.type}`}>
                            {message.text}
                        </div>
                    )}

                    <button type="submit" className="submit-btn" disabled={submitting}>
                        {submitting ? 'POSTING...' : 'POST COMMENT'}
                    </button>
                </form>
            </div>

            {/* Optional: Display Comments */}
            {comments.length > 0 && (
                <div className="comments-list-container">
                    <h3>{comments.length} Comments</h3>
                    <div className="comments-list">
                        {comments.map(comment => (
                            <div key={comment.id} className="comment-item">
                                <div className="comment-avatar">
                                    <FaUser />
                                </div>
                                <div className="comment-content">
                                    <div className="comment-header">
                                        <span className="comment-author">{comment.name}</span>
                                        <span className="comment-date">{new Date(comment.created_at).toLocaleDateString()}</span>
                                    </div>
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommentsSection;
