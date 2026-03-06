import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaBookOpen, FaPenNib, FaRobot, FaStar } from 'react-icons/fa'

interface Article {
  id: string
  title: string
  summary: string
  content: string
  tags: string[]
  createdAt: string
  ratingTotal: number
  ratingCount: number
}

interface ArticleFormState {
  title: string
  summary: string
  content: string
  tags: string
}

const STORAGE_KEY = 'portfolio_articles_v1'
const RATING_STORAGE_KEY = 'portfolio_article_user_ratings_v1'
const READ_STORAGE_KEY = 'portfolio_article_read_v1'

const seedArticles: Article[] = [
  {
    id: 'seed-1',
    title: 'Software Engineering Lifecycle in the AI Era',
    summary:
      'How planning, implementation, testing, deployment, and maintenance are evolving with AI-assisted workflows.',
    content:
      'AI tools are now present in every phase of the engineering lifecycle. Requirement clarification is faster, implementation is accelerated through assisted coding, and test generation is becoming more reliable.\n\nThe challenge is governance: teams need standards for review quality, traceability, security, and accountability when AI is used in production paths.',
    tags: ['AI', 'Engineering Lifecycle', 'Software Delivery'],
    createdAt: new Date().toISOString(),
    ratingTotal: 0,
    ratingCount: 0
  },
  {
    id: 'seed-2',
    title: 'From Feature Factories to Engineering Systems',
    summary:
      'Why modern teams need stronger technical systems to scale quality while shipping quickly.',
    content:
      'In an AI-accelerated environment, speed without architecture leads to instability. Strong systems thinking is now a competitive advantage: observability, modular boundaries, release discipline, and feedback loops.',
    tags: ['Architecture', 'DevOps', 'AI'],
    createdAt: new Date().toISOString(),
    ratingTotal: 0,
    ratingCount: 0
  }
]

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>(seedArticles)
  const [userRatings, setUserRatings] = useState<Record<string, number>>({})
  const [readArticles, setReadArticles] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState<ArticleFormState>({
    title: '',
    summary: '',
    content: '',
    tags: ''
  })
  const [status, setStatus] = useState<'idle' | 'saved'>('idle')

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) return
      const parsed = JSON.parse(stored) as Article[]
      if (Array.isArray(parsed) && parsed.length > 0) {
        setArticles(
          parsed.map((article) => ({
            ...article,
            ratingTotal: article.ratingTotal ?? 0,
            ratingCount: article.ratingCount ?? 0
          }))
        )
      }
    } catch {
      // Ignore malformed local cache and keep defaults.
    }

    try {
      const storedRatings = localStorage.getItem(RATING_STORAGE_KEY)
      if (storedRatings) {
        const parsedRatings = JSON.parse(storedRatings) as Record<string, number>
        setUserRatings(parsedRatings)
      }
    } catch {
      // Ignore malformed local cache.
    }

    try {
      const storedReadArticles = localStorage.getItem(READ_STORAGE_KEY)
      if (storedReadArticles) {
        const parsedReadArticles = JSON.parse(storedReadArticles) as Record<string, boolean>
        setReadArticles(parsedReadArticles)
      }
    } catch {
      // Ignore malformed local cache.
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles))
  }, [articles])

  useEffect(() => {
    localStorage.setItem(RATING_STORAGE_KEY, JSON.stringify(userRatings))
  }, [userRatings])

  useEffect(() => {
    localStorage.setItem(READ_STORAGE_KEY, JSON.stringify(readArticles))
  }, [readArticles])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const tags = formData.tags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean)

    const newArticle: Article = {
      id: crypto.randomUUID(),
      title: formData.title.trim(),
      summary: formData.summary.trim(),
      content: formData.content.trim(),
      tags,
      createdAt: new Date().toISOString(),
      ratingTotal: 0,
      ratingCount: 0
    }

    setArticles((prev) => [newArticle, ...prev])
    setFormData({ title: '', summary: '', content: '', tags: '' })
    setStatus('saved')
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleReadToggle = (articleId: string, isOpen: boolean) => {
    if (!isOpen) return
    setReadArticles((prev) => ({ ...prev, [articleId]: true }))
  }

  const handleRateArticle = (articleId: string, rating: number) => {
    const previousRating = userRatings[articleId]

    setArticles((prev) =>
      prev.map((article) => {
        if (article.id !== articleId) return article

        if (previousRating) {
          return {
            ...article,
            ratingTotal: article.ratingTotal - previousRating + rating
          }
        }

        return {
          ...article,
          ratingTotal: article.ratingTotal + rating,
          ratingCount: article.ratingCount + 1
        }
      })
    )

    setUserRatings((prev) => ({ ...prev, [articleId]: rating }))
  }

  return (
    <section id="articles" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Articles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Write and publish thoughts about software engineering lifecycle evolution,
            delivery practices, and how AI is transforming the field.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="xl:col-span-2"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-6 xl:sticky xl:top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center">
                  <FaPenNib className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Write a New Article</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Article title"
                  />
                </div>

                <div>
                  <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Summary
                  </label>
                  <textarea
                    id="summary"
                    name="summary"
                    required
                    rows={3}
                    value={formData.summary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none"
                    placeholder="Short summary"
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    required
                    rows={8}
                    value={formData.content}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="Write your article here..."
                  />
                </div>

                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tags (comma-separated)
                  </label>
                  <input
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="AI, DevOps, Software Architecture"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                >
                  Publish Article
                </motion.button>

                {status === 'saved' && (
                  <p className="text-sm text-accent-700 bg-accent-50 border border-accent-100 rounded-lg p-2.5 text-center">
                    Article published successfully.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="xl:col-span-3 space-y-5"
          >
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {(() => {
                  const averageRating =
                    article.ratingCount > 0
                      ? (article.ratingTotal / article.ratingCount).toFixed(1)
                      : null

                  return (
                    <>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-100 text-primary-800 text-xs rounded-full font-medium">
                          <FaBookOpen className="w-3 h-3" />
                          Article
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-secondary-100 text-secondary-800 text-xs rounded-full font-medium">
                          <FaRobot className="w-3 h-3" />
                          AI Era
                        </span>
                        {averageRating ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-100 text-amber-800 text-xs rounded-full font-medium">
                            <FaStar className="w-3 h-3" />
                            {averageRating} ({article.ratingCount})
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                            <FaStar className="w-3 h-3" />
                            Not rated yet
                          </span>
                        )}
                        <span className="text-xs text-gray-500 w-full sm:w-auto sm:ml-auto">
                          {new Date(article.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">{article.summary}</p>

                      <details
                        className="group"
                        onToggle={(e) =>
                          handleReadToggle(article.id, e.currentTarget.open)
                        }
                      >
                        <summary className="cursor-pointer text-primary-700 text-sm sm:text-base font-medium hover:text-primary-800 transition-colors duration-200">
                          Read full article
                        </summary>
                        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                          {article.content}
                        </p>
                      </details>

                      <div className="mt-4">
                        {readArticles[article.id] ? (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm text-gray-700 mr-1">Rate this article:</span>
                            {[1, 2, 3, 4, 5].map((value) => (
                              <button
                                key={`${article.id}-rating-${value}`}
                                type="button"
                                onClick={() => handleRateArticle(article.id, value)}
                                className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors duration-200 ${
                                  userRatings[article.id] === value
                                    ? 'bg-amber-100 text-amber-800 border-amber-300'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                }`}
                              >
                                <FaStar className="w-3 h-3" />
                                {value}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500">
                            Open and read the article to enable rating.
                          </p>
                        )}
                      </div>

                      {article.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {article.tags.map((tag) => (
                            <span
                              key={`${article.id}-${tag}`}
                              className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  )
                })()}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Articles
