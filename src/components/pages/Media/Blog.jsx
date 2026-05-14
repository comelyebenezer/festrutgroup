import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UilSearch, UilCalendarAlt, UilEye, UilArrowRight } from '@iconscout/react-unicons';
import Header from '../../__public/__layouts/Header';
import Banner_otherpages from '../../__public/__sections/_Banner_otherpages';
import image from '../../../assets/images/otherpages/blog.jpg';
import blogs, { categories } from '../../../data/blogs';
import festrutLogo from '../../../assets/images/logo/festrut-logo.png';

const Blog = (props) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.title = `${props.company} — Blog`;
  }, [props.company]);

  const filtered = blogs.filter((post) => {
    const matchCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const recentPosts = blogs.slice(0, 4);

  return (
    <>
      <Header />
      <Banner_otherpages title="Blog" image={image} />

      <div className="sections pt-0" id="blog">
        <div className="search-div">
          <input
            type="text"
            placeholder="Search blog for updates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="smashtech-button swipe-button"><UilSearch /> Search</button>
        </div>

        <div className="flex tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`smashtech-button swipe-button ${activeCategory !== cat ? 'transparent noborder' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="sections section2" id="blog">
        <div className="c2_1 c1-sm c1-xs blog-wrap">
          <div className="c1">
            <h2>{activeCategory === 'All' ? 'All Blogs' : activeCategory}</h2>

            {filtered.length === 0 && (
              <p style={{ marginTop: '2rem' }}>No blog posts found. Try a different search or category.</p>
            )}

            <div className="blog-grid">
              {filtered.map((post) => (
                <article key={post.id} className="blog-card">
                  <Link to={`/blog/${post.slug}`} className="blog-card-image-link">
                    <div className="blog-card-image">
                      <img src={post.image} alt={post.title} />
                      <span className="blog-card-category">{post.category}</span>
                    </div>
                  </Link>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span><UilCalendarAlt /> {post.date}</span>
                      <span><UilEye /> {post.views.toLocaleString()} views</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="blog-read-more">
                      Read More <UilArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="blog-sidebar">
            <h2>Recent Posts</h2>
            <div className="blog-recent-posts">
              {recentPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="blog-recent-item">
                  <div className="blog-recent-img">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-recent-info">
                    <h4>{post.title}</h4>
                    <span><UilCalendarAlt /> {post.date}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="blog-sidebar-card">
              <img src={festrutLogo} alt="Festrut Group" />
              <h3>Festrut Group</h3>
              <p>Your trusted partner in real estate, investment, and community development.</p>
              <Link to="/about" className="smashtech-button swipe-button">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
