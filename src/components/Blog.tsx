import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Calendar, Clock, Eye, BookOpen, TrendingUp, Zap, X } from 'lucide-react';
import { blogPosts } from '../data/blog';

const Blog: React.FC = () => {
  const { ref } = useScrollAnimation();
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const openFullArticle = (post: any) => {
    window.open(post.url, '_blank');
  };

  return (
    <section id="blog" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-950 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen size={16} className="text-orange-500" />
            Latest Insights
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            From My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Blog</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends in technology, design, and development. Explore my articles and tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100 dark:border-gray-700 relative ${
                post.featured ? 'ring-2 ring-orange-500 ring-opacity-50' : ''
              }`}
              onClick={() => setSelectedPost(post)}
            >
              {post.featured && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                  ⭐ Featured
                </div>
              )}

              {/* Image */}
              <div className="relative h-24 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-3">
                {/* Category and Date */}
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-medium bg-gradient-to-r ${post.categoryColor} bg-clip-text text-transparent`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={10} />
                    {post.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-1 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-1">
                  {post.tags.slice(0, 1).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-100 text-gray-600 px-1 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 1 && (
                    <span className="text-xs bg-orange-100 text-orange-600 px-1 py-0.5 rounded-full">
                      +{post.tags.length - 1}
                    </span>
                  )}
                </div>

                {/* Read Time Only */}
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock size={10} />
                  {post.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-opacity text-lg">
            View All Posts
          </button>
        </div>
      </div>

      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-80 object-cover rounded-t-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-all"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-0 left-0 p-8">
                <div className={`text-white px-4 py-2 rounded-full text-base font-semibold bg-gradient-to-r ${selectedPost.categoryColor} inline-block mb-4`}>
                  {selectedPost.category}
                </div>
                <h2 className="text-4xl font-extrabold text-white leading-tight">{selectedPost.title}</h2>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-600 text-sm mb-8">
                <span className="flex items-center gap-2">
                  <Calendar size={16} /> {selectedPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} /> {selectedPost.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <Eye size={16} /> {selectedPost.views} Views
                </span>
                <span className="flex items-center gap-2">
                  <TrendingUp size={16} /> {selectedPost.likes} Likes
                </span>
                <span className="flex items-center gap-2">
                  <Zap size={16} /> {selectedPost.comments} Comments
                </span>
              </div>

              <div className="prose lg:prose-xl max-w-none text-gray-800 dark:text-gray-200">
                <p>{selectedPost.fullContent}</p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center gap-3">
                <span className="font-semibold dark:text-white">Tags:</span>
                {selectedPost.tags.map((tag: string) => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 text-center">
                <button
                  onClick={() => openFullArticle(selectedPost)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-12 rounded-xl hover:opacity-90 transition-opacity text-lg"
                >
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;