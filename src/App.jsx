import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Play, Download, ExternalLink, Loader2, ChevronUp, MessageCircle, Send } from 'lucide-react'
import './App.css'

// Software Logo Component
const SoftwareLogo = ({ src, alt, className = "software-logo" }) => (
  <img 
    src={src} 
    alt={alt} 
    className={className}
    style={{ 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover',
      borderRadius: '12px'
    }}
    onError={(e) => {
      // Fallback to a placeholder if image fails to load
      e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      e.target.style.display = 'flex';
      e.target.style.alignItems = 'center';
      e.target.style.justifyContent = 'center';
      e.target.style.color = 'white';
      e.target.style.fontSize = '24px';
      e.target.style.fontWeight = 'bold';
      e.target.textContent = alt.charAt(0);
    }}
  />
)

// CapCut SVG Logo Component
const CapCutLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#000000"/>
    <path d="M12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24Z" fill="#FFFFFF"/>
    <path d="M24 16C20.6863 16 18 18.6863 18 22C18 25.3137 20.6863 28 24 28C27.3137 28 30 25.3137 30 22C30 18.6863 27.3137 16 24 16Z" fill="#000000"/>
    <rect x="22" y="28" width="4" height="8" fill="#FFFFFF"/>
  </svg>
)

// Alight Motion SVG Logo Component
const AlightMotionLogo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FF6B35"/>
    <path d="M24 8L32 20H28L24 14L20 20H16L24 8Z" fill="#FFFFFF"/>
    <path d="M16 28L24 40L32 28H28L24 34L20 28H16Z" fill="#FFFFFF"/>
    <circle cx="24" cy="24" r="4" fill="#FFFFFF"/>
  </svg>
)

// Loading Component
const LoadingScreen = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--apple-background)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          flexDirection: 'column',
          gap: 'var(--spacing-lg)'
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 size={48} color="var(--apple-blue)" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: '1.2rem',
            fontWeight: 600,
            color: 'var(--apple-text)',
            textAlign: 'center'
          }}
        >
          <div>ORACLE STUDIOS</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--apple-secondary-text)', marginTop: '0.5rem' }}>
            Loading Experience...
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

const tools = [
  {
    name: 'CapCut',
    category: 'Mobile Video Editing',
    description: 'Professional mobile video editing with advanced features',
    logo: <SoftwareLogo src="/src/assets/img/capcut logo.jpeg" alt="CapCut" />,
    color: 'var(--apple-red)'
  },
  {
    name: 'After Effects',
    category: 'Motion Graphics',
    description: 'Industry-standard motion graphics and visual effects',
    logo: <SoftwareLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/512px-Adobe_After_Effects_CC_icon.svg.png" alt="After Effects" />,
    color: 'var(--apple-purple)'
  },
  {
    name: 'Alight Motion',
    category: 'Mobile Animation',
    description: 'Professional animation and motion graphics on mobile',
    logo: <SoftwareLogo src="/src/assets/img/alight morion.jpeg" alt="Alight Motion" />,
    color: 'var(--apple-orange)'
  },
  {
    name: 'DaVinci Resolve',
    category: 'Color Grading',
    description: 'Professional color correction and video editing',
    logo: <SoftwareLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/DaVinci_Resolve_17_logo.svg/512px-DaVinci_Resolve_17_logo.svg.png" alt="DaVinci Resolve" />,
    color: 'var(--apple-gray)'
  },
  {
    name: 'Photoshop',
    category: 'Image Editing',
    description: 'Industry-standard photo editing and digital art',
    logo: <SoftwareLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png" alt="Photoshop" />,
    color: 'var(--apple-blue)'
  },
  {
    name: 'Filmora',
    category: 'Video Editing',
    description: 'User-friendly video editing with creative effects',
    logo: <SoftwareLogo src="https://img.icons8.com/color/96/filmora.png" alt="Filmora" />,
    color: 'var(--apple-green)'
  }
]

const projects = [
  {
    title: 'Business Edit: Corporate Motion',
    description: 'Sleek corporate video with clean motion pacing and modern animation layers.',
    category: 'Corporate',
    duration: '0:24',
    tools: ['After Effects', 'DaVinci Resolve'],
    year: '2024',
    client: 'Envato',
    videoSrc: '/src/assets/Portfolio/Business edit.mp4'
  },
  {
    title: 'Brand Visual: Creative Growth',
    description: 'Storytelling edit with minimal motion graphics and engaging typography.',
    category: 'Brand',
    duration: '0:18',
    tools: ['Filmora', 'After Effects', 'Photoshop'],
    year: '2024',
    client: 'WebDek (Web Design Agency)',
    videoSrc: '/src/assets/Portfolio/Brand Visual.mp4'
  },
  {
    title: 'Music Video: Rhythmic Motion',
    description: 'Professional music video edit for popular artist featuring dynamic cuts and visual effects.',
    category: 'Music Video',
    duration: '0:26',
    tools: ['Alight Motion', 'After Effects', 'Photoshop'],
    year: '2024',
    client: 'Recording Artist',
    videoSrc: '/src/assets/Portfolio/Music video.mp4'
  },
  {
    title: 'TikTok Style: The Nigerian Edit',
    description: 'High-energy TikTok visual with Nigerian creativity and Afrobeat-inspired visuals.',
    category: 'Social Media',
    duration: '0:29',
    tools: ['After Effects'],
    year: '2024',
    client: 'Personal Project',
    videoSrc: '/src/assets/Portfolio/Tiktok Style.mp4'
  },
  {
    title: 'Product Visual: Apple AirPods Promo',
    description: 'Premium product showcase with smooth camera movement and clean typography.',
    category: 'Product',
    duration: '0:16',
    tools: ['After Effects', 'Photoshop'],
    year: '2024',
    client: 'Product Ad Project',
    videoSrc: '/src/assets/Portfolio/Product visual.mp4'
  },
  {
    title: 'Tech Visual: Wallet Connection (Web3 Concept)',
    description: 'Futuristic Web3 concept with motion graphics and neon transitions.',
    category: 'Tech',
    duration: '0:08',
    tools: ['After Effects', 'DaVinci Resolve'],
    year: '2024',
    client: 'FinTech Concept',
    videoSrc: '/src/assets/Portfolio/Tech Visual.mp4'
  }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedProject, setSelectedProject] = useState(null)
  const [videoModalProject, setVideoModalProject] = useState(null)
  const [formStatus, setFormStatus] = useState('') // '', 'submitting', 'success', 'error'
  const [formMessage, setFormMessage] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hi! I\'m Oracle AI, your video editing assistant. How can I help you today?'
    }
  ])
  const [chatInput, setChatInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Form submission handler
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    setFormMessage('')

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mwprnqdg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormStatus('success')
        setFormMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!')
        form.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setFormStatus('error')
      setFormMessage('Oops! There was a problem sending your message. Please try again.')
    }
  }

  useEffect(() => {
    // Loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      // Calculate scroll progress
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (currentScrollY / documentHeight) * 100
      setScrollProgress(Math.min(progress, 100))
      
      // Show/hide scroll to top button
      setShowScrollTop(currentScrollY > 300)
    }
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Smooth scroll function
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Chat functions
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  const sendMessage = async () => {
    if (!chatInput.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: chatInput.trim()
    }

    setChatMessages(prev => [...prev, userMessage])
    setChatInput('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage.content)
      setChatMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        content: botResponse
      }])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    if (input.includes('price') || input.includes('cost') || input.includes('rate')) {
      return 'Our video editing services start from $50 for basic edits. For complex projects with motion graphics and color grading, prices range from $150-$500. Would you like a custom quote for your project?'
    }
    
    if (input.includes('portfolio') || input.includes('work') || input.includes('example')) {
      return 'You can check out my portfolio above! I specialize in business videos, social media content, and creative edits using CapCut, After Effects, and DaVinci Resolve. Each project showcases different techniques and styles.'
    }
    
    if (input.includes('time') || input.includes('delivery') || input.includes('how long')) {
      return 'Typical turnaround time is 3-7 business days depending on project complexity. Rush orders (24-48 hours) are available for an additional fee. I always deliver high-quality work on time!'
    }
    
    if (input.includes('software') || input.includes('tools') || input.includes('program')) {
      return 'I work with professional tools including CapCut for mobile editing, After Effects for motion graphics, DaVinci Resolve for color grading, Alight Motion for animations, and Photoshop for graphics. What type of project do you have in mind?'
    }
    
    if (input.includes('contact') || input.includes('hire') || input.includes('project')) {
      return 'I\'d love to work on your project! You can reach me through the contact form above, or connect with me on social media. Let\'s discuss your vision and bring it to life!'
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return 'Hello! Welcome to Oracle Studios. I\'m here to help you with any questions about video editing services, pricing, or my portfolio. What would you like to know?'
    }
    
    return 'Thanks for your message! I specialize in professional video editing with quick turnaround times. Feel free to ask about my services, pricing, portfolio, or anything else. You can also use the contact form above to get in touch directly!'
  }

  const handleChatKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress">
        <motion.div 
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20,
          visibility: showScrollTop ? 'visible' : 'hidden'
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp />
      </motion.button>

      {/* AI Chat Assistant */}
      <div className="chat-assistant">
        <motion.button
          className={`chat-toggle ${isChatOpen ? 'open' : ''}`}
          onClick={toggleChat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
        >
          {isChatOpen ? <X /> : <MessageCircle />}
        </motion.button>

        <motion.div
          className={`chat-window ${isChatOpen ? 'open' : ''}`}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ 
            opacity: isChatOpen ? 1 : 0,
            y: isChatOpen ? 0 : 20,
            scale: isChatOpen ? 1 : 0.95,
            visibility: isChatOpen ? 'visible' : 'hidden'
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="chat-header">
            <div className="chat-avatar">AI</div>
            <div className="chat-info">
              <h3>Oracle AI Assistant</h3>
              <p>Video editing expert</p>
            </div>
          </div>

          <div className="chat-messages">
            {chatMessages.map((message) => (
              <motion.div
                key={message.id}
                className={`chat-message ${message.type}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`message-avatar ${message.type}`}>
                  {message.type === 'bot' ? 'AI' : 'U'}
                </div>
                <div className="message-content">
                  {message.content}
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                className="chat-message bot"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="message-avatar bot">AI</div>
                <div className="typing-indicator">
                  <div className="typing-dots">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="chat-input-container">
            <div className="chat-input-wrapper">
              <input
                type="text"
                className="chat-input"
                placeholder="Ask about video editing services..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={handleChatKeyPress}
              />
              <motion.button
                className="chat-send-btn"
                onClick={sendMessage}
                disabled={!chatInput.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="app">


        {/* Navigation */}
        <motion.nav 
          className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}
          style={{
            background: scrollY > 50 ? 'var(--apple-glass-background)' : 'transparent',
            backdropFilter: scrollY > 50 ? 'blur(20px) saturate(180%)' : 'none'
          }}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="container">
            <div className="nav-content">
              <motion.div 
                className="logo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => smoothScrollTo('home')}
              >
                <span className="logo-text">ORACLE</span>
                <span className="logo-subtitle">STUDIOS</span>
              </motion.div>

              <motion.div 
                className="nav-links desktop-only"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3,
                  staggerChildren: 0.1
                }}
              >
                <motion.a 
                  href="#home" 
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo('home')
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    color: "#007AFF",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.a>
                <motion.a 
                  href="#tools" 
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo('tools')
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    color: "#007AFF",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Tools
                </motion.a>
                <motion.a 
                  href="#portfolio" 
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo('portfolio')
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    color: "#007AFF",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Portfolio
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo('contact')
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    color: "#007AFF",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.a>
              </motion.div>

              <motion.button 
                className="menu-toggle mobile-only"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="mobile-menu"
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div 
                  className="mobile-menu-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <motion.a 
                    href="#home" 
                    className="mobile-nav-link" 
                    onClick={(e) => {
                      e.preventDefault()
                      smoothScrollTo('home')
                    }}
                    initial={{ x: -50, opacity: 0, scale: 0.8 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.1,
                      type: "spring",
                      stiffness: 120
                    }}
                    whileHover={{ 
                      x: 10, 
                      scale: 1.05,
                      color: "#007AFF",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Home
                  </motion.a>
                  <motion.a 
                    href="#tools" 
                    className="mobile-nav-link" 
                    onClick={(e) => {
                      e.preventDefault()
                      smoothScrollTo('tools')
                    }}
                    initial={{ x: -50, opacity: 0, scale: 0.8 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.2,
                      type: "spring",
                      stiffness: 120
                    }}
                    whileHover={{ 
                      x: 10, 
                      scale: 1.05,
                      color: "#007AFF",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Tools
                  </motion.a>
                  <motion.a 
                    href="#portfolio" 
                    className="mobile-nav-link" 
                    onClick={(e) => {
                      e.preventDefault()
                      smoothScrollTo('portfolio')
                    }}
                    initial={{ x: -50, opacity: 0, scale: 0.8 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.3,
                      type: "spring",
                      stiffness: 120
                    }}
                    whileHover={{ 
                      x: 10, 
                      scale: 1.05,
                      color: "#007AFF",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Portfolio
                  </motion.a>
                  <motion.a 
                    href="#contact" 
                    className="mobile-nav-link" 
                    onClick={(e) => {
                      e.preventDefault()
                      smoothScrollTo('contact')
                    }}
                    initial={{ x: -50, opacity: 0, scale: 0.8 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.4,
                      type: "spring",
                      stiffness: 120
                    }}
                    whileHover={{ 
                      x: 10, 
                      scale: 1.05,
                      color: "#007AFF",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact
                  </motion.a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="hero">
          {/* Space-Inspired Floating Elements */}
          <div className="hero-space-elements">
            {/* Background stars layer */}
            <div className="stars-layer">
              <motion.div 
                className="star star-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: isLoading ? 0 : [0, 1, 0.3, 1, 0.5],
                  scale: isLoading ? 0 : [0, 1.2, 0.8, 1.1, 0.9]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: isLoading ? 0 : 2.5
                }}
              />
              <motion.div 
                className="star star-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: isLoading ? 0 : [0, 0.8, 0.2, 0.9, 0.4],
                  scale: isLoading ? 0 : [0, 1.1, 0.7, 1.3, 0.8]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: isLoading ? 0 : 3.0
                }}
              />
              <motion.div 
                className="star star-3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: isLoading ? 0 : [0, 0.6, 0.9, 0.3, 0.7],
                  scale: isLoading ? 0 : [0, 1.0, 1.2, 0.9, 1.1]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: isLoading ? 0 : 3.5
                }}
              />
            </div>
            {/* Floating orbs with subtle glow */}
            <motion.div 
              className="space-orb orb-1"
              initial={{ opacity: 0, y: 50, scale: 0 }}
              animate={{ 
                opacity: isLoading ? 0 : [0, 0.8, 0.5, 0.9, 0.6],
                y: isLoading ? 50 : [50, -25, 15, -35, 0],
                x: isLoading ? 0 : [0, 20, -15, 25, 0],
                scale: isLoading ? 0 : [0, 1.2, 0.8, 1.3, 1.0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: isLoading ? 0 : 2.2
              }}
            />
            <motion.div 
              className="space-orb orb-2"
              initial={{ opacity: 0, y: -30, scale: 0 }}
              animate={{ 
                opacity: isLoading ? 0 : [0, 0.6, 0.8, 0.4, 0.7],
                y: isLoading ? -30 : [-30, 45, -15, 30, -5],
                x: isLoading ? 0 : [0, -25, 20, -20, 8],
                scale: isLoading ? 0 : [0, 1.1, 0.9, 1.4, 1.0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: isLoading ? 0 : 2.8
              }}
            />
            <motion.div 
              className="space-orb orb-3"
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ 
                opacity: isLoading ? 0 : [0, 0.7, 0.4, 0.8, 0.5],
                y: isLoading ? 20 : [20, -45, 20, -30, 8],
                x: isLoading ? 0 : [0, 30, -8, 15, -20],
                scale: isLoading ? 0 : [0, 1.0, 1.3, 0.9, 1.1]
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            {/* Subtle light rays */}
            <motion.div 
              className="light-ray ray-1"
              initial={{ opacity: 0, scaleY: 0, scaleX: 0 }}
              animate={{ 
                opacity: isLoading ? 0 : [0, 0.4, 0.15, 0.5, 0.25],
                scaleY: isLoading ? 0 : [0, 1.2, 0.8, 1.4, 1.0],
                scaleX: isLoading ? 0 : [0, 1.1, 0.9, 1.3, 1.0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: isLoading ? 0 : 2.5
              }}
            />
            <motion.div 
              className="light-ray ray-2"
              initial={{ opacity: 0, scaleY: 0, scaleX: 0 }}
              animate={{ 
                opacity: isLoading ? 0 : [0, 0.3, 0.5, 0.15, 0.4],
                scaleY: isLoading ? 0 : [0, 0.9, 1.3, 0.7, 1.1],
                scaleX: isLoading ? 0 : [0, 1.0, 1.2, 0.8, 1.1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: isLoading ? 0 : 3.2
              }}
            />
          </div>
          

          

          
          <div className="container">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ 
                opacity: isLoading ? 0 : 1, 
                y: isLoading ? 50 : 0,
                scale: isLoading ? 0.9 : 1
              }}
              transition={{ 
                duration: 1.2, 
                delay: isLoading ? 0 : 0.3,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              whileInView={{ 
                y: [0, -8, 0],
                transition: { 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={{ 
                  opacity: isLoading ? 0 : 1, 
                  y: isLoading ? 60 : 0,
                  scale: isLoading ? 0.8 : 1
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: isLoading ? 0 : 0.6,
                  type: "spring",
                  stiffness: 80,
                  damping: 15
                }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ 
                    opacity: isLoading ? 0 : 1, 
                    y: isLoading ? 40 : 0,
                    rotateX: isLoading ? -90 : 0
                  }}
                  transition={{ 
                    duration: 1.2, 
                    delay: isLoading ? 0 : 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  Where creativity
                </motion.span>
                <br />
                <motion.span 
                  className="hero-title-accent"
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ 
                    opacity: isLoading ? 0 : 1, 
                    y: isLoading ? 40 : 0,
                    rotateX: isLoading ? -90 : 0
                  }}
                  transition={{ 
                    duration: 1.2, 
                    delay: isLoading ? 0 : 1.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  meets precision.
                </motion.span>
              </motion.h1>

              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ 
                  opacity: isLoading ? 0 : 1, 
                  y: isLoading ? 30 : 0,
                  scale: isLoading ? 0.9 : 1
                }}
                transition={{ 
                  duration: 1.0, 
                  delay: isLoading ? 0 : 1.6,
                  type: "spring",
                  stiffness: 120
                }}
              >
                Transform your vision into reality.
              </motion.p>

              <motion.div 
                className="hero-actions"
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={{ 
                  opacity: isLoading ? 0 : 1, 
                  y: isLoading ? 40 : 0,
                  scale: isLoading ? 0.8 : 1
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: isLoading ? 0 : 2.0,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
              >
                <motion.button 
                  className="btn btn-primary"
                  onClick={() => smoothScrollTo('portfolio')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Portfolio
                </motion.button>
                <motion.button 
                  className="btn btn-secondary"
                  onClick={() => smoothScrollTo('contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>

              <motion.div 
                className="hero-features"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 2.0,
                  type: "spring",
                  stiffness: 80
                }}
              >
                <motion.div 
                  className="feature-item"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.span 
                    className="feature-icon"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    ⚡
                  </motion.span>
                  <span className="feature-text">24-hour turnaround</span>
                </motion.div>
                <motion.div 
                  className="feature-item"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.span 
                    className="feature-icon"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: -10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    🎬
                  </motion.span>
                  <span className="feature-text">Cinema-quality editing</span>
                </motion.div>
                <motion.div 
                  className="feature-item"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.6 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.span 
                    className="feature-icon"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    🏆
                  </motion.span>
                  <span className="feature-text">Award-winning team</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title title-1">Professional Tools</h2>
              <p className="section-subtitle body">
                Mastering industry-standard software to deliver exceptional results
              </p>
            </motion.div>

            <div className="tools-grid">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="tool-card apple-card"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="tool-icon"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {tool.logo}
                  </motion.div>
                  <div className="tool-content">
                    <h3 className="tool-name title-3">{tool.name}</h3>
                    <p className="tool-category caption">{tool.category}</p>
                    <p className="tool-description footnote">{tool.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title title-1">Featured Work</h2>
              <p className="section-subtitle body">
                A showcase of recent projects and creative achievements
              </p>
            </motion.div>

            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div 
                    className="project-thumbnail"
                    onClick={() => {
                      const video = document.querySelector(`video[src="${project.videoSrc}"]`);
                      if (video) {
                        video.setAttribute('controls', 'true');
                        video.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        video.play();
                        // Hide the play overlay when video starts playing
                        const overlay = video.parentElement.querySelector('.video-play-overlay');
                        if (overlay) overlay.style.display = 'none';
                      }
                    }}
                  >
                    <video 
                      className="project-video"
                      preload="metadata"
                      muted
                      onLoadedMetadata={(e) => {
                        // Set thumbnail time based on video type
                        let thumbnailTime = 2; // default
                        if (project.title.includes('TikTok Style')) {
                          thumbnailTime = 7; // 00:07 seconds
                        } else if (project.title.includes('Brand Visual')) {
                          thumbnailTime = 7; // 00:07 seconds
                        } else if (project.title.includes('Music Video')) {
                          thumbnailTime = 1;
                        } else if (project.title.includes('Product Visual')) {
                          thumbnailTime = 5; // 00:05 seconds
                        }
                        e.target.currentTime = thumbnailTime;
                      }}
                      onPause={(e) => {
                        // Show overlay again when video is paused
                        const overlay = e.target.parentElement.querySelector('.video-play-overlay');
                        if (overlay) overlay.style.display = 'flex';
                      }}
                    >
                      <source src={project.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="video-play-overlay">
                      <div className="play-button-large">
                        <Play size={48} />
                      </div>
                    </div>
                    <div className="project-overlay">
                      <span className="project-category">{project.category}</span>
                      {project.duration && <span className="project-duration">{project.duration}</span>}
                    </div>
                  </div>
                  
                  <div className="project-info">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    
                    <div className="project-client-category">
                      <span className="project-client-label">Client:</span>
                      <span className="project-client-value">{project.client}</span>
                    </div>
                    
                    <div className="project-style-section">
                      <span className="project-style-label">Style & Description:</span>
                      <p className="project-description">{project.description}</p>
                    </div>
                    
                    {project.tools && project.tools.length > 0 && project.tools[0] !== '' && (
                      <div className="project-tools-section">
                        <span className="project-tools-label">Tools:</span>
                        <div className="project-tools">
                          {project.tools.map((tool, toolIndex) => (
                            <span key={toolIndex} className="tool-tag">{tool}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="project-actions">
                      <button 
                        className="btn btn-primary"
                        onClick={() => setVideoModalProject(project)}
                      >
                        <Play size={16} />
                        <span className="btn-text-desktop">Play Video</span>
                        <span className="btn-text-mobile">Play</span>
                      </button>
                      <button 
                        className="btn btn-secondary"
                        onClick={() => setSelectedProject(project)}
                      >
                        <ExternalLink size={16} />
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <motion.div 
              className="project-modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="modal-content">
                <div className="project-details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Client:</span>
                    <span className="detail-value">{selectedProject.client}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Year:</span>
                    <span className="detail-value">{selectedProject.year}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{selectedProject.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Category:</span>
                    <span className="detail-value">{selectedProject.category}</span>
                  </div>
                </div>
                
                <div className="project-description-full">
                  <h4>Description</h4>
                  <p>{selectedProject.description}</p>
                </div>
                
                <div className="project-tools-full">
                  <h4>Tools Used</h4>
                  <div className="tools-list">
                    {selectedProject.tools.map((tool, index) => (
                      <span key={index} className="tool-badge">{tool}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-social-share">
                  <h4>Share This Project</h4>
                  <div className="share-buttons">
                    <a 
                      href={`https://twitter.com/intent/tweet?text=Check out this amazing ${selectedProject.category} project: ${selectedProject.title}&url=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-btn twitter"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      Twitter
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-btn linkedin"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-btn facebook"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Video Modal */}
        {videoModalProject && (
          <div className="video-modal-overlay" onClick={() => setVideoModalProject(null)}>
            <motion.div 
              className="video-modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="video-modal-header">
                <div className="video-modal-info">
                  <h3>{videoModalProject.title}</h3>
                  <span className="video-modal-category">{videoModalProject.category}</span>
                </div>
                <button 
                  className="video-modal-close"
                  onClick={() => setVideoModalProject(null)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="video-modal-content">
                <video 
                  className="video-modal-player"
                  controls
                  autoPlay
                  preload="metadata"
                  onEnded={() => setVideoModalProject(null)}
                >
                  <source src={videoModalProject.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="video-modal-footer">
                <div className="video-modal-details">
                  <span className="video-duration">{videoModalProject.duration}</span>
                  <span className="video-client">{videoModalProject.client}</span>
                  <span className="video-year">{videoModalProject.year}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title title-1">Let's Create Together</h2>
              <p className="section-subtitle body">
                Ready to bring your vision to life? Get in touch to discuss your next project.
              </p>
            </motion.div>

            <div className="contact-grid contact-grid-two">
              <motion.div 
                className="contact-form apple-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="title-3">Send a Message</h3>
                <form 
                  className="contact-form-fields"
                  onSubmit={handleFormSubmit}
                >
                  {formMessage && (
                    <motion.div 
                      className={`form-message ${formStatus}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: '1rem',
                        borderRadius: '8px',
                        marginBottom: '1rem',
                        backgroundColor: formStatus === 'success' ? 'rgba(52, 199, 89, 0.1)' : 'rgba(255, 59, 48, 0.1)',
                        border: `1px solid ${formStatus === 'success' ? 'rgba(52, 199, 89, 0.3)' : 'rgba(255, 59, 48, 0.3)'}`,
                        color: formStatus === 'success' ? '#34c759' : '#ff3b30'
                      }}
                    >
                      {formMessage}
                    </motion.div>
                  )}
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      className="form-input" 
                      required 
                      disabled={formStatus === 'submitting'}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your Email" 
                      className="form-input" 
                      required 
                      disabled={formStatus === 'submitting'}
                    />
                  </div>
                  <div className="form-group">
                    <select 
                      className="form-input" 
                      name="project_type"
                      required
                      disabled={formStatus === 'submitting'}
                    >
                      <option value="">Project Type</option>
                      <option value="commercial">Brand Commercial</option>
                      <option value="music-video">Music Video</option>
                      <option value="product">Product Showcase</option>
                      <option value="social">Social Media Content</option>
                      <option value="corporate">Corporate Video</option>
                      <option value="event">Event Coverage</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea 
                      name="message"
                      placeholder="Tell me about your project..." 
                      className="form-input form-textarea" 
                      rows="4" 
                      required
                      disabled={formStatus === 'submitting'}
                    ></textarea>
                  </div>
                  <motion.button 
                    type="submit"
                    className="btn btn-primary"
                    whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.05 }}
                    whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.95 }}
                    disabled={formStatus === 'submitting'}
                    style={{
                      opacity: formStatus === 'submitting' ? 0.7 : 1,
                      cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" style={{ marginRight: '0.5rem' }} />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </motion.div>

              <motion.div 
                className="contact-social apple-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="social-video-section">
                  <div className="video-container">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="contact-video-player"
                    >
                      <source src="/src/assets/Videos/social icons.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                <div className="social-content">
                  <div className="social-header">
                    <h3 className="title-3">Connect With Us</h3>
                    <p className="social-subtitle">Follow our creative journey and latest work</p>
                  </div>
                  
                  <div className="social-grid">
                    <motion.a 
                      href="https://x.com/mofevfx" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link twitter"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="social-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                      <div className="social-info">
                        <span className="social-name">X (Twitter)</span>
                        <span className="social-handle">@mofevfx</span>
                      </div>
                    </motion.a>

                    <motion.a 
                      href="https://instagram.com/mofevfx" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link instagram"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="social-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div className="social-info">
                        <span className="social-name">Instagram</span>
                        <span className="social-handle">@mofevfx</span>
                      </div>
                    </motion.a>

                    <motion.a 
                      href="https://www.tiktok.com/@de.oraclee?_r=1&_d=ekam6ake30917h&sec_uid=MS4wLjABAAAAU4dWtDLY2FURtZOMiWolBiTKKA5QolVfZ2FtllGZ0dzfcaw83wPGEAS3EW8gglEH&share_author_id=7269994438808994821&sharer_language=en&source=h5_m&u_code=e9h181l2d43cei&timestamp=1750154366&user_id=7269994438808994821&sec_user_id=MS4wLjABAAAAU4dWtDLY2FURtZOMiWolBiTKKA5QolVfZ2FtllGZ0dzfcaw83wPGEAS3EW8gglEH&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7516648484926916358&share_link_id=4357c373-0af5-47fa-adbf-e351f8eb53bd&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link tiktok"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="social-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        </svg>
                      </div>
                      <div className="social-info">
                        <span className="social-name">TikTok</span>
                        <span className="social-handle">@de.oraclee</span>
                      </div>
                    </motion.a>

                    <motion.a 
                      href="https://youtube.com/@deoraclee?si=6tLuOAGJPHk_5nq0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link youtube"
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="social-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <div className="social-info">
                        <span className="social-name">YouTube</span>
                        <span className="social-handle">@deoraclee</span>
                      </div>
                    </motion.a>
                  </div>


                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <motion.div 
              className="footer-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="footer-logo">
                <span className="logo-text">ORACLE</span>
                <span className="logo-subtitle">STUDIOS</span>
              </div>
              <p className="footer-text caption">
                © 2024 Oracle Studios. Professional video editing services.
              </p>
            </motion.div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
