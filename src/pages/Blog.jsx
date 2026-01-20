
import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import PageBanner from '../components/PageBanner';
import { FaCalendar, FaArrowRight, FaSearch, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaHeadset, FaUser, FaComment } from 'react-icons/fa';
import './Blog.css';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState({ type: null, value: null });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    // Timout ensures the DOM (and page height) updates before we attempt to scroll
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [activeFilter, searchQuery]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*, comments(count)')
        .eq('is_published', true);

      if (error) throw error;

      // Sort on client side: use published_at if available, otherwise created_at
      const sortedData = (data || []).sort((a, b) => {
        const dateA = new Date(a.published_at || a.created_at);
        const dateB = new Date(b.published_at || b.created_at);
        return dateB - dateA; // Newest first
      });

      setPosts(sortedData);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Trigger scroll animations after posts load
  useEffect(() => {
    if (!loading && posts.length > 0) {
      const timer = setTimeout(() => {
        const elements = document.querySelectorAll('.scroll-animate:not(.animated)');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const delay = entry.target.dataset.delay || 0;
              setTimeout(() => {
                entry.target.classList.add('animated');
              }, delay);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.07, rootMargin: '0px 0px -50px 0px' });

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loading, posts, activeFilter, searchQuery]);

  const formatDateDay = (dateString) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const formatDateMonth = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'short' }).toUpperCase();
  };

  // Derive Categories with counts
  const categories = useMemo(() => {
    const counts = {};
    posts.forEach(post => {
      if (post.category) {
        const cat = post.category.trim();
        counts[cat] = (counts[cat] || 0) + 1;
      }
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [posts]);

  // Derive Tags with counts
  const tags = useMemo(() => {
    const counts = {};
    posts.forEach(post => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach(tag => {
          const t = tag.trim();
          counts[t] = (counts[t] || 0) + 1;
        });
      }
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [posts]);

  // Calculations for Recent Posts (Always global)
  const recentPosts = useMemo(() => {
    return posts.slice(0, 3);
  }, [posts]);

  // Filter Posts Logic
  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Apply Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query)
      );
    }

    // Apply Category/Tag Filter
    if (activeFilter.type === 'category') {
      filtered = filtered.filter(p => p.category === activeFilter.value);
    } else if (activeFilter.type === 'tag') {
      filtered = filtered.filter(p => p.tags && p.tags.includes(activeFilter.value));
    }

    return filtered;
  }, [posts, activeFilter, searchQuery]);

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setActiveFilter({ type: 'category', value: category });
    setSearchQuery('');
  };

  const handleTagClick = (e, tag) => {
    e.preventDefault();
    setActiveFilter({ type: 'tag', value: tag });
    setSearchQuery('');
  };

  const handleClearFilter = (e) => {
    e.preventDefault();
    setActiveFilter({ type: null, value: null });
    setSearchQuery('');
  }

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value && activeFilter.type) {
      setActiveFilter({ type: null, value: null });
    }
  };

  // Determine Page Title
  const getPageTitle = () => {
    if (searchQuery) return `Search: ${searchQuery}`;
    if (activeFilter.type === 'category') return `Category: ${activeFilter.value}`;
    if (activeFilter.type === 'tag') return `Tag: ${activeFilter.value}`;
    return 'Blog';
  };

  return (
    <div className="blogs-page">
      <PageBanner
        title={getPageTitle()}
        breadcrumbs={[
          { label: 'Resources', path: '/resources' },
          { label: 'Blog', path: (activeFilter.type || searchQuery) ? '#' : null, onClick: (activeFilter.type || searchQuery) ? handleClearFilter : null },
          // eslint-disable-next-line
          ...(activeFilter.type ? [{ label: activeFilter.value }] : []),
          ...(searchQuery ? [{ label: `Search: "${searchQuery}"` }] : [])
        ]}
      />

      <section className="blogs-section">
        <div className="container">
          <div className="blogs-layout">
            <div className="blogs-main">
              {loading ? (
                <div className="loading-blogs">Loading articles...</div>
              ) : filteredPosts.length === 0 ? (
                <div className="no-blogs">
                  {searchQuery ? `No articles found for "${searchQuery}"` : "No articles found."}
                  {(activeFilter.type || searchQuery) && (
                    <button onClick={handleClearFilter} className="back-btn" style={{ marginTop: '10px', display: 'block' }}>
                      View All Posts
                    </button>
                  )}
                </div>
              ) : (
                <div className="blogs-list">
                  {filteredPosts.map((post, index) => (
                    <article
                      key={post.id}
                      className="blog-card scroll-animate"
                      data-animate="fade-up"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {post.cover_image && (
                        <div className="blog-card-image">
                          <Link to={`/blog/${post.slug}`}>
                            <img src={post.cover_image} alt={post.title} />
                          </Link>
                        </div>
                      )}
                      {post.cover_image && (
                        <div className="date-badge">
                          <span className="day">{formatDateDay(post.published_at || post.created_at)}</span>
                          <span className="month">{formatDateMonth(post.published_at || post.created_at)}</span>
                        </div>
                      )}
                      <div className="blog-card-content">
                        <div className="blog-meta-top">
                          {post.category && (
                            <a href="#" onClick={(e) => handleCategoryClick(e, post.category)} className="blog-category">
                              {post.category.toUpperCase()}
                            </a>
                          )}
                        </div>
                        <div className="blog-title"><Link to={`/blog/${post.slug}`}>{post.title}</Link></div>
                        <p className="blog-excerpt">{post.excerpt}</p>
                        <Link to={`/blog/${post.slug}`} className="read-more">
                          Read More <FaArrowRight />
                        </Link>
                        <div className="blog-footer">
                          <span className="author"><FaUser /> Admin</span>
                          <span className="comments"><FaComment /> {post.comments && post.comments[0] ? post.comments[0].count : 0}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            <aside className="blogs-sidebar">
              <div className="widget search-widget scroll-animate" data-animate="fade-left" data-delay="100">
                <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button type="submit"><FaSearch /></button>
                </form>
              </div>

              <div className="widget recent-posts-widget scroll-animate" data-animate="fade-left" data-delay="200">
                <h4 className="widget-title">Recent Posts</h4>
                <div className="recent-posts-list">
                  {recentPosts.map(post => (
                    <div key={post.id} className="recent-post-item">
                      <div className="recent-post-thumb">
                        <img src={post.cover_image || 'placeholder.jpg'} alt={post.title} />
                      </div>
                      <div className="recent-post-info">
                        <span className="recent-post-date"><FaCalendar /> {new Date(post.created_at).toLocaleDateString()}</span>
                        <h5><Link to={`/blog/${post.slug}`}>{post.title}</Link></h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="widget categories-widget scroll-animate" data-animate="fade-left" data-delay="300">
                <h4 className="widget-title">Categories</h4>
                <ul className="categories-list">
                  {categories.length > 0 ? categories.map((cat, index) => (
                    <li key={index}>
                      <a href="#"
                        onClick={(e) => handleCategoryClick(e, cat.name)}
                        className={activeFilter.type === 'category' && activeFilter.value === cat.name ? 'active' : ''}
                      >
                        {cat.name} <span>({cat.count})</span>
                      </a>
                    </li>
                  )) : (
                    <li>No categories found</li>
                  )}
                </ul>
              </div>

              <div className="widget tags-widget scroll-animate" data-animate="fade-left" data-delay="400">
                <h4 className="widget-title">Popular Tags</h4>
                <div className="tags-cloud">
                  {tags.length > 0 ? tags.map((tag, index) => (
                    <a href="#"
                      key={index}
                      onClick={(e) => handleTagClick(e, tag.name)}
                      className={activeFilter.type === 'tag' && activeFilter.value === tag.name ? 'active' : ''}
                    >
                      {tag.name}
                    </a>
                  )) : (
                    <span>No tags found</span>
                  )}
                </div>
              </div>

              <div className="widget follow-us-widget scroll-animate" data-animate="fade-left" data-delay="500">
                <h4 className="widget-title">Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon facebook"><FaFacebookF /></a>
                  <a href="#" className="social-icon twitter"><FaTwitter /></a>
                  <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
                  <a href="#" className="social-icon instagram"><FaInstagram /></a>
                </div>
              </div>

              <div className="widget help-widget scroll-animate" data-animate="fade-left" data-delay="600">
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

export default Blogs;
