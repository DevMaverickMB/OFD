import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import './BlogEditor.css';
import { FaArrowLeft, FaSave, FaImage, FaPlus, FaTrash, FaGripVertical, FaQuoteRight, FaHeading, FaParagraph } from 'react-icons/fa';

const BlogEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = !!id;

    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(isEditing);

    // Core Data State
    const [blocks, setBlocks] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        cover_image: '',
        category: '',
        tags: '',
        is_published: false,
        published_at: ''
    });

    // Drag & Drop State
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    useEffect(() => {
        if (isEditing) {
            fetchBlog();
        } else {
            // Initialize with one text block
            setBlocks([{ id: crypto.randomUUID(), type: 'text', content: '' }]);
            setInitialLoading(false);
        }
    }, [id]);

    const fetchBlog = async () => {
        try {
            const { data, error } = await supabase
                .from('blogs')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;

            setFormData({
                title: data.title || '',
                slug: data.slug || '',
                excerpt: data.excerpt || '',
                cover_image: data.cover_image || '',
                category: data.category || '',
                tags: data.tags ? data.tags.join(', ') : '',
                is_published: data.is_published || false,
                published_at: data.published_at ? new Date(data.published_at).toISOString().split('T')[0] : ''
            });

            // Load Content Blocks
            if (data.content_blocks && Array.isArray(data.content_blocks) && data.content_blocks.length > 0) {
                setBlocks(data.content_blocks);
            } else if (data.content) {
                // Migration: Convert legacy HTML content to single text block
                setBlocks([{ id: crypto.randomUUID(), type: 'text', content: data.content }]);
            } else {
                setBlocks([{ id: crypto.randomUUID(), type: 'text', content: '' }]);
            }
        } catch (error) {
            alert('Error fetching blog: ' + error.message);
            navigate('/bloginternal');
        } finally {
            setInitialLoading(false);
        }
    };

    // --- Block Management ---

    const addBlock = (type) => {
        const newBlock = {
            id: crypto.randomUUID(),
            type,
            content: ''
        };
        setBlocks([...blocks, newBlock]);
    };

    const updateBlockContent = (id, content) => {
        setBlocks(blocks.map(b => b.id === id ? { ...b, content } : b));
    };

    const deleteBlock = (id) => {
        if (blocks.length === 1) return; // Prevent deleting last block
        setBlocks(blocks.filter(b => b.id !== id));
    };

    // --- Drag & Drop Handlers ---

    // Auto-scroll logic
    const scrollInterval = useRef(null);

    const stopAutoScroll = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
    };

    const onDragStart = (e, index) => {
        dragItem.current = index;
        e.target.closest('.editor-block').classList.add('dragging');
        // Set drag ghost image or effect if needed
    };

    const onDragEnter = (e, index) => {
        dragOverItem.current = index;
    };

    const onDragOver = (e) => {
        e.preventDefault(); // Necessary for allowing drop

        const threshold = 150; // pixels from edge to start scrolling
        const scrollSpeed = 15; // pixels per interval
        const { clientY } = e;
        const { innerHeight } = window;

        // Clear existing interval to prevent stacking
        stopAutoScroll();

        if (clientY < threshold) {
            // Scroll Up
            scrollInterval.current = setInterval(() => {
                window.scrollBy(0, -scrollSpeed);
            }, 10);
        } else if (clientY > innerHeight - threshold) {
            // Scroll Down
            scrollInterval.current = setInterval(() => {
                window.scrollBy(0, scrollSpeed);
            }, 10);
        }
    };

    const onDragEnd = (e) => {
        stopAutoScroll();
        e.target.classList.remove('dragging');

        if (dragItem.current === null || dragOverItem.current === null) return;

        const copyListItems = [...blocks];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);

        dragItem.current = null;
        dragOverItem.current = null;
        setBlocks(copyListItems);
    };

    // --- Form Handlers ---

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (name === 'title' && !isEditing) {
            setFormData(prev => ({
                ...prev,
                [name]: value,
                slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
            }));
        }
    };

    const handleImageUpload = async (e, blockId = null) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            setLoading(true);
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('blog-images')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('blog-images')
                .getPublicUrl(filePath);

            if (blockId) {
                // Update specific image block
                updateBlockContent(blockId, publicUrl);
            } else {
                // Update cover image
                setFormData(prev => ({ ...prev, cover_image: publicUrl }));
            }
        } catch (error) {
            alert('Error uploading image: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    // --- Saving Logic ---

    const generateHTML = (blocksData) => {
        // Convert blocks back to HTML string for legacy support / display
        return blocksData.map(block => {
            switch (block.type) {
                case 'heading-2': return `<h2>${block.content}</h2>`;
                case 'heading-3': return `<h3>${block.content}</h3>`;
                case 'image': return block.content ? `<img src="${block.content}" alt="Blog Image" />` : '';
                case 'quote': return `<blockquote>${block.content}</blockquote>`;
                case 'text': default:
                    // Simple newline to BR or P converstion could go here, but for now raw checks
                    return block.content ? `<p>${block.content.replace(/\n/g, '<br/>')}</p>` : '';
            }
        }).join('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.title.trim()) return alert('Title is required');
        if (!formData.slug.trim()) return alert('Slug is required');
        if (!formData.category.trim()) return alert('Category is required');
        if (!formData.cover_image) return alert('Cover Image is required');

        setLoading(true);

        try {
            const user = (await supabase.auth.getUser()).data.user;
            if (!user) throw new Error('Not authenticated');

            const contentHTML = generateHTML(blocks);

            const blogData = {
                ...formData,
                content: contentHTML, // Legacy column populated
                content_blocks: blocks, // New column populated
                tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
                author_id: user.id
            };

            // Ensure published_at is set properly (DB expects timestamp or null)
            if (blogData.published_at === '') {
                blogData.published_at = null;
            }

            let error;
            if (isEditing) {
                const { error: updateError } = await supabase
                    .from('blogs')
                    .update(blogData)
                    .eq('id', id);
                error = updateError;
            } else {
                const { error: insertError } = await supabase
                    .from('blogs')
                    .insert([blogData]);
                error = insertError;
            }

            if (error) throw error;
            navigate('/bloginternal');
        } catch (error) {
            alert('Error saving blog: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (initialLoading) return <div className="editor-loading">Loading editor...</div>;

    return (
        <div className="editor-container">
            <div className="editor-header">
                <button onClick={() => navigate('/bloginternal')} className="back-btn">
                    <FaArrowLeft /> Back
                </button>
                <h2>{isEditing ? 'Edit Blog' : 'Create New Blog'}</h2>
                <div></div>
            </div>

            <form onSubmit={handleSubmit} className="editor-form">
                <div className="form-main">
                    {/* Standard Title Input */}
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Enter blog title"
                            style={{ fontSize: '24px', fontWeight: 'bold' }}
                        />
                    </div>

                    {/* Draggable Blocks Area */}
                    <div className="blocks-container">
                        {blocks.map((block, index) => (
                            <div
                                key={block.id}
                                className="editor-block"
                                draggable
                                onDragStart={(e) => onDragStart(e, index)}
                                onDragEnter={(e) => onDragEnter(e, index)}
                                onDragEnd={onDragEnd}
                                onDragOver={onDragOver}
                            >
                                <div className="block-controls">
                                    <div className="drag-handle" title="Drag to reorder">
                                        <FaGripVertical />
                                        <span style={{ fontSize: '12px', marginLeft: '5px', textTransform: 'uppercase' }}>{block.type.replace('-', ' ')}</span>
                                    </div>
                                    <div className="block-actions">
                                        <button type="button" className="delete-block-btn" onClick={() => deleteBlock(block.id)} title="Delete block">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>

                                <div className="block-content">
                                    {block.type === 'text' && (
                                        <textarea
                                            placeholder="Write your text here..."
                                            value={block.content}
                                            onChange={(e) => updateBlockContent(block.id, e.target.value)}
                                            rows={3}
                                            autoFocus={index === blocks.length - 1} // Auto focusing new blocks
                                        />
                                    )}
                                    {block.type === 'heading-2' && (
                                        <input
                                            type="text"
                                            className="block-heading-input h2-block"
                                            placeholder="Heading 2"
                                            value={block.content}
                                            onChange={(e) => updateBlockContent(block.id, e.target.value)}
                                            autoFocus
                                        />
                                    )}
                                    {block.type === 'heading-3' && (
                                        <input
                                            type="text"
                                            className="block-heading-input h3-block"
                                            placeholder="Heading 3"
                                            value={block.content}
                                            onChange={(e) => updateBlockContent(block.id, e.target.value)}
                                            autoFocus
                                        />
                                    )}
                                    {block.type === 'quote' && (
                                        <div className="block-quote-wrapper">
                                            <FaQuoteRight size={20} color="#ccc" />
                                            <textarea
                                                placeholder="Enter quote..."
                                                value={block.content}
                                                onChange={(e) => updateBlockContent(block.id, e.target.value)}
                                                rows={2}
                                                autoFocus
                                            />
                                        </div>
                                    )}
                                    {block.type === 'image' && (
                                        <div className="block-image-wrapper">
                                            {block.content ? (
                                                <div className="image-preview" style={{ marginBottom: '10px' }}>
                                                    <img src={block.content} alt="Block" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                                                    <button type="button" onClick={() => updateBlockContent(block.id, '')} style={{ display: 'block', marginTop: '5px', color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Remove Image</button>
                                                </div>
                                            ) : (
                                                <label className="upload-btn">
                                                    <FaImage /> Upload Image
                                                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, block.id)} hidden />
                                                </label>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add Block Menu */}
                    <div className="add-block-section">
                        <span className="add-block-trigger"><FaPlus /> Add Component</span>
                        <div className="block-options-grid">
                            <div className="block-option" onClick={() => addBlock('text')}>
                                <FaParagraph /> Text
                            </div>
                            <div className="block-option" onClick={() => addBlock('heading-2')}>
                                <FaHeading /> Heading 2
                            </div>
                            <div className="block-option" onClick={() => addBlock('heading-3')}>
                                <FaHeading style={{ fontSize: '14px' }} /> Heading 3
                            </div>
                            <div className="block-option" onClick={() => addBlock('image')}>
                                <FaImage /> Image
                            </div>
                            <div className="block-option" onClick={() => addBlock('quote')}>
                                <FaQuoteRight /> Quote
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-sidebar">
                    <div className="sidebar-card">
                        <h3>Publishing</h3>
                        <div className="form-group checkbox-group">
                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    name="is_published"
                                    checked={formData.is_published}
                                    onChange={handleChange}
                                    style={{ width: 'auto' }}
                                />
                                Publish Now
                            </label>
                        </div>

                        <div className="form-group">
                            <label>Publish Date</label>
                            <input
                                type="date"
                                name="published_at"
                                value={formData.published_at}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" disabled={loading} className="save-btn">
                            <FaSave /> {loading ? 'Saving...' : 'Save Blog'}
                        </button>
                    </div>

                    <div className="sidebar-card">
                        <h3>Featured Image</h3>
                        <div className="image-upload-preview">
                            {formData.cover_image ? (
                                <img src={formData.cover_image} alt="Cover" />
                            ) : (
                                <div className="placeholder" style={{ color: '#ccc' }}>No Image</div>
                            )}
                        </div>
                        <label className="upload-btn">
                            <FaImage /> Upload Cover
                            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e)} hidden />
                        </label>
                    </div>

                    <div className="sidebar-card">
                        <h3>Settings</h3>
                        <div className="form-group">
                            <label>Slug (URL)</label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Excerpt & Short Description</label>
                            <textarea
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleChange}
                                rows={4}
                                style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px' }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="e.g. Automation"
                            />
                        </div>
                        <div className="form-group">
                            <label>Tags (comma separated)</label>
                            <input
                                type="text"
                                name="tags"
                                value={formData.tags}
                                onChange={handleChange}
                                placeholder="tech, industry"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BlogEditor;
