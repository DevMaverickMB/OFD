import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import PageBanner from '../components/PageBanner';
import CommentsSection from '../components/CommentsSection';
import { FaCalendar, FaUser, FaComment, FaSearch, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaHeadset, FaTag, FaShareAlt } from 'react-icons/fa';
import './Blog.css'; // Reuse sidebar styles
import './BlogDetail.css';

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [recentPosts, setRecentPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [prevPost, setPrevPost] = useState(null);
    const [nextPost, setNextPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Fetch current blog
                // SIMPLIFIED QUERY DEBUGGING: Removed comments(count) temporarily to rule out RLS/Relation issues
                const { data: currentBlog, error } = await supabase
                    .from('blogs')
                    .select('*')
                    .eq('slug', slug)
                    .eq('is_published', true)
                    .single();

                if (error) throw error;
                setBlog(currentBlog);

                // Fetch adjacent posts (Prev/Next)
                if (currentBlog) {
                    const { data: prev } = await supabase
                        .from('blogs')
                        .select('slug, title, cover_image')
                        .lt('created_at', currentBlog.created_at)
                        .eq('is_published', true)
                        .order('created_at', { ascending: false })
                        .limit(1)
                        .single();
                    setPrevPost(prev);

                    const { data: next } = await supabase
                        .from('blogs')
                        .select('slug, title, cover_image')
                        .gt('created_at', currentBlog.created_at)
                        .eq('is_published', true)
                        .order('created_at', { ascending: true })
                        .limit(1)
                        .single();
                    setNextPost(next);
                }

                // Fetch Sidebar Data (can be optimized to simple counts)
                const { data: allPosts } = await supabase
                    .from('blogs')
                    .select('title, slug, cover_image, created_at, published_at, category, tags')
                    .eq('is_published', true)
                    .order('published_at', { ascending: false, nullsFirst: false });

                if (allPosts) {
                    setRecentPosts(allPosts.slice(0, 3));

                    // Process Categories
                    const catCounts = {};
                    allPosts.forEach(p => {
                        if (p.category) {
                            const c = p.category.trim();
                            catCounts[c] = (catCounts[c] || 0) + 1;
                        }
                    });
                    setCategories(Object.entries(catCounts).map(([name, count]) => ({ name, count })));

                    // Process Tags
                    const tagCounts = {};
                    allPosts.forEach(p => {
                        if (p.tags) {
                            p.tags.forEach(t => {
                                if (t) { // Check if tag exists
                                    const tag = t.trim();
                                    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
                                }
                            });
                        }
                    });
                    setTags(Object.entries(tagCounts).map(([name, count]) => ({ name, count })));
                }

            } catch (error) {
                console.error('Error fetching blog details:', error);
                setBlog(null); // Ensure blog is null on error
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchData();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="blog-detail-loading">
                <div className="loader">Loading...</div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="blog-not-found" style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h2>Blog Post Not Found</h2>
                <p>We couldn't load the post. It might not exist or there was an error.</p>
                <Link to="/blog" className="back-link" style={{ marginTop: '20px', display: 'inline-block', color: 'var(--primary-color)' }}>Return to Blog</Link>
            </div>
        );
    }

    return (
        <div className="blog-detail-page">
            <PageBanner
                title={blog.title}
                breadcrumbs={[
                    { label: 'Resources', path: '/resources' },
                    { label: 'Blog', path: '/blog' },
                    { label: blog.title }
                ]}
            />

            <section className="blog-content-section">
                <div className="container">
                    <div className="blog-layout">
                        {/* Main Content */}
                        <div className="blog-main-content scroll-animate" data-animate="fade-up">
                            <article className="blog-article">
                                {blog.cover_image && (
                                    <div className="blog-hero-image">
                                        <img src={blog.cover_image} alt={blog.title} />
                                    </div>
                                )}

                                <div className="blog-meta-row">
                                    <span className="meta-item"><FaCalendar /> {new Date(blog.published_at || blog.created_at).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    <span className="meta-item"><FaComment /> {blog.comments && blog.comments[0] ? blog.comments[0].count : 0} Comments</span>
                                    <span className="meta-item"><FaUser /> By Admin</span>
                                </div>

                                <div className="blog-text ql-editor" dangerouslySetInnerHTML={{ __html: blog.content }}></div>

                                <div className="blog-footer-share">
                                    <div className="blog-tags">
                                        <span className="label">Tags:</span>
                                        {blog.tags && blog.tags.map((tag, idx) => (
                                            <span key={idx} className="tag-text">{tag}{idx < blog.tags.length - 1 ? ',' : ''}</span>
                                        ))}
                                    </div>
                                    <div className="share-options">
                                        <span className="label">Share:</span>
                                        <a href="#" className="share-icon"><FaFacebookF /></a>
                                        <a href="#" className="share-icon"><FaTwitter /></a>
                                        <a href="#" className="share-icon"><FaInstagram /></a>
                                        <a href="#" className="share-icon"><FaLinkedinIn /></a>
                                    </div>
                                </div>
                            </article>

                            {/* Prev/Next Navigation */}
                            <div className="post-navigation">
                                {prevPost && (
                                    <Link to={`/blog/${prevPost.slug}`} className="nav-item prev">
                                        <div className="nav-thumb">
                                            <img src={prevPost.cover_image || 'placeholder.jpg'} alt={prevPost.title} />
                                        </div>
                                        <div className="nav-info">
                                            <span>Previous Post</span>
                                            <h4>{prevPost.title}</h4>
                                        </div>
                                    </Link>
                                )}
                                {nextPost && (
                                    <Link to={`/blog/${nextPost.slug}`} className="nav-item next">
                                        <div className="nav-info">
                                            <span>Next Post</span>
                                            <h4>{nextPost.title}</h4>
                                        </div>
                                        <div className="nav-thumb">
                                            <img src={nextPost.cover_image || 'placeholder.jpg'} alt={nextPost.title} />
                                        </div>
                                    </Link>
                                )}
                            </div>

                            {/* Comments Section */}
                            <CommentsSection blogId={blog.id} />
                        </div>

                        {/* Sidebar */}
                        <aside className="blogs-sidebar scroll-animate" data-animate="fade-left" data-delay="200">
                            <div className="widget search-widget">
                                <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" placeholder="Search..." />
                                    <button type="submit"><FaSearch /></button>
                                </form>
                            </div>

                            <div className="widget recent-posts-widget">
                                <h4 className="widget-title">Recent Posts</h4>
                                <div className="recent-posts-list">
                                    {recentPosts.map(post => (
                                        <div key={post.slug} className="recent-post-item">
                                            <div className="recent-post-thumb">
                                                <img src={post.cover_image || 'placeholder.jpg'} alt={post.title} />
                                            </div>
                                            <div className="recent-post-info">
                                                <span className="recent-post-date"><FaCalendar /> {new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                                                <h5><Link to={`/blog/${post.slug}`}>{post.title}</Link></h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="widget categories-widget">
                                <h4 className="widget-title">Categories</h4>
                                <ul className="categories-list">
                                    {categories.map((cat, index) => (
                                        <li key={index}>
                                            <Link to={`/blog?category=${cat.name}`}>
                                                {cat.name} <span>({cat.count})</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="widget tags-widget">
                                <h4 className="widget-title">Popular Tags</h4>
                                <div className="tags-cloud">
                                    {tags.map((tag, index) => (
                                        <Link to={`/blog?tag=${tag.name}`} key={index}>
                                            {tag.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="widget follow-us-widget">
                                <h4 className="widget-title">Follow Us</h4>
                                <div className="social-icons">
                                    <a href="#" className="social-icon facebook"><FaFacebookF /></a>
                                    <a href="#" className="social-icon twitter"><FaTwitter /></a>
                                    <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
                                    <a href="#" className="social-icon instagram"><FaInstagram /></a>
                                </div>
                            </div>

                            <div className="widget help-widget">
                                <div className="help-content">
                                    <div className="help-image">
                                        {/* Background image sets the visual */}
                                    </div>
                                    <div className="help-text">
                                        <div className="help-icon"><FaHeadset /></div>
                                        <h4>How Can We Help?</h4>
                                        <p>+ (208) 555-0112</p>
                                        <p>admin@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetail;
