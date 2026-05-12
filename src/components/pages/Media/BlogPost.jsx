import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UilCalendarAlt, UilEye, UilArrowLeft, UilArrowRight, UilThumbsUp, UilShareAlt, UilComment, UilFacebookF, UilTwitter, UilLinkedin, UilMessage, UilWhatsapp, UilInstagram } from '@iconscout/react-unicons';
import Header from '../../__public/__layouts/Header';
import blogs from '../../../data/blogs';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogs.find((p) => p.slug === slug);

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Festrutgroup`;
      setLikeCount(post.views);
    }
  }, [post]);

  if (!post) {
    return (
      <>
        <Header />
        <div className="sections" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2>Post Not Found</h2>
          <p>The blog post you are looking for does not exist.</p>
          <Link to="/blog" className="smashtech-button swipe-button"><UilArrowLeft /> Back to Blog</Link>
        </div>
      </>
    );
  }

  const currentIndex = blogs.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextPost = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;
  const recentPosts = blogs.filter((p) => p.slug !== slug).slice(0, 3);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => liked ? prev - 1 : prev + 1);
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, url });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentName.trim() || !commentEmail.trim() || !commentText.trim()) return;
    const newComment = {
      id: Date.now(),
      name: commentName.trim(),
      email: commentEmail.trim(),
      text: commentText.trim(),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      avatar: commentName.charAt(0).toUpperCase(),
    };
    setComments([newComment, ...comments]);
    setCommentName('');
    setCommentEmail('');
    setCommentText('');
    setShowCommentForm(false);
  };

  return (
    <>
      <Header />
      <div className="blog-post-header" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="blog-post-header-overlay">
          <div className="sections">
            <Link to="/blog" className="blog-post-back"><UilArrowLeft /> Back to Blog</Link>
            <span className="blog-post-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="blog-post-meta">
              <span><UilCalendarAlt /> {post.date}</span>
              <span><UilEye /> {post.views.toLocaleString()} views</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sections">
        <div className="c2_1 c1-sm c1-xs blog-wrap blog-post-wrap">
          <div className="blog-post-content">
            <div className="blog-post-featured-img">
              <img src={post.image} alt={post.title} />
            </div>

            <div className="blog-post-actions">
              <button className={`blog-action-btn ${liked ? 'liked' : ''}`} onClick={handleLike}>
                <UilThumbsUp /> {likeCount} {liked ? 'Liked' : 'Like'}
              </button>
              <button className="blog-action-btn" onClick={() => setShowCommentForm(!showCommentForm)}>
                <UilComment /> Comment
              </button>
              <button className="blog-action-btn" onClick={handleShare}>
                <UilShareAlt /> {copied ? 'Copied!' : 'Share'}
              </button>
            </div>

            <div className="blog-post-share-social">
              <span>Share on:</span>
              <a href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="social-share-btn fb"><UilFacebookF /></a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="social-share-btn tw"><UilTwitter /></a>
              <a href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="social-share-btn li"><UilLinkedin /></a>
              <a href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="social-share-btn wa"><UilWhatsapp /></a>
              <a href={`https://instagram.com`} target="_blank" rel="noopener noreferrer" className="social-share-btn ig" onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText(window.location.href); alert('Link copied! Paste it on Instagram.'); }}><UilInstagram /></a>
              <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`} className="social-share-btn em"><UilMessage /></a>
            </div>

            {post.content.split('\n\n').map((paragraph, i) => {
              const trimmed = paragraph.trim();
              const isHeading = trimmed.startsWith('**') && trimmed.endsWith('**');
              if (isHeading) {
                return <h3 key={i} className="blog-post-heading">{trimmed.replace(/\*\*/g, '')}</h3>;
              }
              if (trimmed.startsWith('1.') || trimmed.startsWith('2.') || trimmed.startsWith('3.') || trimmed.startsWith('4.') || trimmed.startsWith('5.')) {
                return <p key={i} className="blog-post-paragraph">{trimmed}</p>;
              }
              return <p key={i} className="blog-post-paragraph">{trimmed}</p>;
            })}

            <div className="blog-post-comments">
              <h3><UilComment /> Comments ({comments.length})</h3>

              {showCommentForm && (
                <form className="comment-form" onSubmit={handleCommentSubmit}>
                  <div className="comment-form-row">
                    <input type="text" placeholder="Your Name *" value={commentName} onChange={(e) => setCommentName(e.target.value)} required />
                    <input type="email" placeholder="Your Email *" value={commentEmail} onChange={(e) => setCommentEmail(e.target.value)} required />
                  </div>
                  <textarea placeholder="Write your comment..." value={commentText} onChange={(e) => setCommentText(e.target.value)} rows="4" required />
                  <div className="comment-form-actions">
                    <button type="submit" className="smashtech-button swipe-button">Post Comment</button>
                    <button type="button" className="smashtech-button swipe-button transparent" onClick={() => setShowCommentForm(false)}>Cancel</button>
                  </div>
                </form>
              )}

              {!showCommentForm && (
                <button className="smashtech-button swipe-button" onClick={() => setShowCommentForm(true)}>
                  <UilComment /> Write a Comment
                </button>
              )}

              <div className="comment-list">
                {comments.length === 0 && (
                  <p className="comment-empty">No comments yet. Be the first to share your thoughts!</p>
                )}
                {comments.map((c) => (
                  <div key={c.id} className="comment-item">
                    <div className="comment-avatar">{c.avatar}</div>
                    <div className="comment-body">
                      <div className="comment-header">
                        <strong>{c.name}</strong>
                        <span>{c.date}</span>
                      </div>
                      <p>{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="blog-post-nav">
              {prevPost ? (
                <Link to={`/blog/${prevPost.slug}`} className="blog-post-nav-link prev">
                  <UilArrowLeft />
                  <span>
                    <small>Previous</small>
                    {prevPost.title}
                  </span>
                </Link>
              ) : <div />}
              {nextPost ? (
                <Link to={`/blog/${nextPost.slug}`} className="blog-post-nav-link next">
                  <span>
                    <small>Next</small>
                    {nextPost.title}
                  </span>
                  <UilArrowRight />
                </Link>
              ) : <div />}
            </div>
          </div>

          <div className="blog-sidebar">
            <h2>Recent Posts</h2>
            <div className="blog-recent-posts">
              {recentPosts.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="blog-recent-item">
                  <div className="blog-recent-img">
                    <img src={p.image} alt={p.title} />
                  </div>
                  <div className="blog-recent-info">
                    <h4>{p.title}</h4>
                    <span><UilCalendarAlt /> {p.date}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="blog-sidebar-card">
              <h3>About Festrut Group</h3>
              <p>Your trusted partner in real estate, investment, and community development.</p>
              <Link to="/about" className="smashtech-button swipe-button">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
