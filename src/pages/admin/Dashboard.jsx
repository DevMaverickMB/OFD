
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import './Dashboard.css';
import { FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const { data, error } = await supabase
                .from('blogs')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setBlogs(data || []);
        } catch (error) {
            console.error('Error fetching blogs:', error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;

        try {
            const { error } = await supabase
                .from('blogs')
                .delete()
                .eq('id', id);

            if (error) throw error;
            fetchBlogs(); // Refresh list
        } catch (error) {
            alert('Error deleting blog: ' + error.message);
        }
    };

    if (loading) return <div className="dashboard-loading">Loading dashboard...</div>;

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2>Blog Management</h2>
                <Link to="/bloginternal/new" className="create-btn">
                    <FaPlus /> Create New Blog
                </Link>
            </div>

            <div className="stats-cards">
                <div className="card">
                    <h3>Total Blogs</h3>
                    <p>{blogs.length}</p>
                </div>
                <div className="card">
                    <h3>Published</h3>
                    <p>{blogs.filter(b => b.is_published).length}</p>
                </div>
                <div className="card">
                    <h3>Drafts</h3>
                    <p>{blogs.filter(b => !b.is_published).length}</p>
                </div>
            </div>

            <div className="blogs-list-container">
                <table className="blogs-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="no-blogs">No blogs found. Start by creating one!</td>
                            </tr>
                        ) : (
                            blogs.map(blog => (
                                <tr key={blog.id}>
                                    <td className="title-cell">
                                        <div className="blog-title-wrapper">
                                            {blog.cover_image && (
                                                <img src={blog.cover_image} alt="" className="blog-thumb" />
                                            )}
                                            <span>{blog.title}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${blog.is_published ? 'published' : 'draft'}`}>
                                            {blog.is_published ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td>{new Date(blog.published_at || blog.created_at).toLocaleDateString()}</td>
                                    <td className="actions-cell">
                                        <Link to={`/bloginternal/edit/${blog.id}`} className="action-btn edit" title="Edit">
                                            <FaEdit />
                                        </Link>
                                        <button onClick={() => handleDelete(blog.id)} className="action-btn delete" title="Delete">
                                            <FaTrash />
                                        </button>
                                        {blog.is_published && (
                                            <Link to={`/blog/${blog.slug}`} target="_blank" className="action-btn view" title="View Live">
                                                <FaEye />
                                            </Link>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
