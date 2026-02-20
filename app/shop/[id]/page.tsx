"use client"
import Link from "next/link"
import { getProductWhatsAppLink } from "@/lib/whatsapp"

const ShoppingCart = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const Star = ({ filled }: { filled: boolean }) => (
  <svg className={`w-5 h-5 ${filled ? "fill-accent text-accent" : "text-gray-600"}`} viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const products = [
  {
    id: 1,
    name: "Professional Website Package",
    image: "/professional-website-design-portfolio.jpg",
    rating: 4.9,
    reviews: 128,
    price: "Custom Quote",
    description: "Complete website development with SEO optimization",
    fullDescription: `
      <h2>Professional Website Package - Complete Web Development Solution</h2>
      
      <p>In today's digital landscape, having a professional website isn't just an option—it's a necessity. At Ace Digitals Global, we understand that your website is often the first impression potential customers have of your business. Our Professional Website Package is designed to create a stunning, high-converting online presence that not only looks beautiful but also drives measurable results for your business.</p>

      <h3>What's Included in Our Professional Website Package?</h3>
      
      <p>Our comprehensive website development service covers every aspect of creating a world-class website. From initial concept and design to deployment and ongoing optimization, we handle everything. We don't believe in cookie-cutter solutions. Instead, we work closely with you to understand your business goals, target audience, and unique value proposition. This collaborative approach ensures that your website truly represents your brand and resonates with your ideal customers.</p>

      <p>The website development process begins with a thorough discovery phase where we learn everything about your business. We analyze your competitors, study your target market, and identify the key messages that will differentiate you in your industry. This research-driven approach ensures that every design decision is backed by strategy and data, not just aesthetics.</p>

      <h3>Cutting-Edge Design and Development</h3>
      
      <p>We utilize the latest web technologies and design frameworks to create websites that are not only beautiful but also highly functional and future-proof. Our team specializes in modern responsive design, ensuring your website looks perfect on desktops, tablets, and mobile devices. With over 60% of web traffic now coming from mobile devices, a mobile-first approach isn't optional—it's essential.</p>

      <p>Our websites are built using industry-leading technologies like React, Next.js, and Node.js, ensuring optimal performance and scalability. These technologies allow us to create fast-loading websites that provide excellent user experiences. We also implement advanced security measures to protect your website and customer data from potential threats.</p>

      <h3>Search Engine Optimization Built-In</h3>
      
      <p>A beautiful website means nothing if potential customers can't find it. That's why SEO is built into every website we create from day one. We implement on-page SEO best practices including proper heading hierarchy, meta tags, structured data, and keyword optimization. We ensure your site structure is optimized for search engine crawling, which helps search engines understand and rank your content effectively.</p>

      <p>We focus on technical SEO aspects like site speed optimization, mobile responsiveness, XML sitemaps, and proper URL structures. Page speed is a critical ranking factor, and our optimization techniques ensure your website loads in under 3 seconds even on slower connections. We also implement schema markup to help search engines better understand your content, which can lead to rich snippets in search results.</p>

      <h3>User Experience and Conversion Optimization</h3>
      
      <p>Beyond looking great, our websites are designed with conversion in mind. We strategically place call-to-action buttons, optimize forms for maximum completion rates, and implement persuasive copywriting techniques. Every element on your website serves a purpose: to guide visitors toward taking the desired action, whether that's making a purchase, signing up for a service, or requesting a quote.</p>

      <p>We conduct thorough user testing and usability audits to identify any friction points in the user journey. We then optimize these areas to create a seamless experience that guides visitors naturally toward conversion. Our approach has consistently helped clients increase conversion rates by 40-60% compared to their previous websites.</p>

      <h3>Content Management and Flexibility</h3>
      
      <p>Your website needs to evolve as your business grows. We build our websites on modern content management systems that allow you to easily update content, add new pages, and manage your website without technical knowledge. Whether you're adding blog posts, updating product information, or refreshing your homepage, you have complete control and flexibility.</p>

      <h3>Analytics and Performance Tracking</h3>
      
      <p>We set up comprehensive analytics tracking to monitor how your website performs. You'll have access to detailed reports showing visitor behavior, traffic sources, conversion rates, and more. This data-driven approach allows us to continuously optimize your website for better results. We provide monthly performance reports and recommendations for improvement.</p>

      <h3>Ongoing Support and Maintenance</h3>
      
      <p>Your website is a living, breathing asset that requires ongoing care and maintenance. We provide comprehensive support including security updates, performance monitoring, backup management, and technical support. Our team is available to help with any issues or questions that arise.</p>

      <h3>Why Choose Ace Digitals Global?</h3>
      
      <p>With over a decade of experience creating professional websites for businesses of all sizes, we've perfected our process. Our team combines technical expertise with creative talent to deliver websites that are both beautiful and effective. We pride ourselves on clear communication, timely delivery, and exceptional results that exceed client expectations.</p>

      <p>When you choose Ace Digitals Global for your website development, you're not just getting a website—you're getting a strategic partner committed to your online success. We measure our success by your success, and we're dedicated to helping your business thrive in the digital marketplace.</p>
    `,
  },
  {
    id: 2,
    name: "Social Media Growth Bundle",
    image: "/social-media-marketing-bundle.jpg",
    rating: 4.8,
    reviews: 95,
    price: "Custom Quote",
    description: "3-month social media management and growth strategy",
    fullDescription: `
      <h2>Social Media Growth Bundle - Complete 3-Month Strategy</h2>
      
      <p>In 2025, social media presence is non-negotiable for business success. With billions of active users across platforms like Instagram, Facebook, TikTok, and LinkedIn, social media represents an unprecedented opportunity to connect with your target audience. However, managing social media effectively requires more than just posting content randomly. It demands strategy, consistency, and authentic engagement. Our Social Media Growth Bundle is designed to transform your social presence and generate meaningful business results within just three months.</p>

      <h3>The Challenge Most Businesses Face</h3>
      
      <p>Many businesses struggle with social media for several reasons: they lack a clear strategy, post inconsistently, don't understand their audience, or simply don't have the time to manage multiple platforms. This results in stagnant follower counts, low engagement, and missed opportunities to connect with potential customers. Our Social Media Growth Bundle addresses all these challenges with a comprehensive, proven approach.</p>

      <h3>What's Included in Your Bundle?</h3>
      
      <p>Our 3-month Social Media Growth Bundle includes strategic planning, daily content creation and posting, community engagement, analytics tracking, and monthly performance reports. We work across all major platforms including Instagram, Facebook, TikTok, LinkedIn, and Twitter, tailoring our approach to each platform's unique audience and algorithm.</p>

      <h3>Month 1: Strategy & Foundation Building</h3>
      
      <p>We start by conducting a comprehensive audit of your current social media presence. We analyze your competitors, identify your target audience segments, and develop a detailed social media strategy specifically tailored to your business goals. We optimize all your social profiles with compelling bios, professional imagery, and clear calls-to-action. We create your content calendar for the entire three months, ensuring consistent messaging and optimal posting times.</p>

      <h3>Month 2: Growth & Engagement Acceleration</h3>
      
      <p>With your strategy in place, we focus on content creation and community engagement. Our team creates a diverse mix of content including educational posts, behind-the-scenes content, customer testimonials, promotional content, and entertaining posts. We use storytelling techniques that resonate with your audience and encourage sharing and comments. We actively engage with your audience and relevant community members, responding to comments, answering questions, and building genuine relationships.</p>

      <h3>Month 3: Optimization & Scaling</h3>
      
      <p>In the final month, we analyze all performance data and optimize your strategy based on what's working best. We identify your top-performing content types and double down on what resonates with your audience. We implement targeted strategies to convert followers into customers and establish you as a thought leader in your industry. By the end of month three, you'll have momentum, engaged followers, and a clear roadmap for continued growth.</p>

      <h3>Content Creation Excellence</h3>
      
      <p>Great social media success starts with great content. Our team creates original, engaging content specifically designed for social platforms. We use high-quality images and videos, compelling copywriting, relevant hashtags, and strategic calls-to-action. We understand each platform's unique culture and algorithm, ensuring your content performs optimally on each channel.</p>

      <h3>Community Building & Engagement</h3>
      
      <p>Building a social media following is about more than numbers—it's about building a community of engaged, loyal followers who care about your brand. We actively build relationships with your audience through meaningful comments, direct messages, and community engagement. We identify and engage with potential customers, industry influencers, and brand advocates.</p>

      <h3>Analytics & Performance Tracking</h3>
      
      <p>We track every metric that matters: follower growth, engagement rates, reach, impressions, click-through rates, and conversion data. We provide detailed monthly reports showing your progress and identifying opportunities for optimization. This data-driven approach ensures we're constantly improving your results.</p>

      <h3>Guaranteed Results</h3>
      
      <p>With our Social Media Growth Bundle, most clients see a 100-300% increase in followers over three months, significantly increased engagement rates, and improved brand awareness. Many clients report generating qualified leads and sales directly from their improved social media presence.</p>
    `,
  },
  {
    id: 3,
    name: "AI Automation Setup",
    image: "/ai-automation-setup.jpg",
    rating: 4.9,
    reviews: 67,
    price: "Custom Quote",
    description: "Custom AI automation for your business workflows",
    fullDescription: `
      <h2>AI Automation Setup - Transform Your Business Workflows</h2>
      
      <p>Artificial Intelligence is no longer a futuristic concept—it's a present-day tool that can revolutionize how you operate your business. Many business owners and entrepreneurs are still operating with manual, time-consuming processes that waste thousands of hours annually. Our AI Automation Setup service is designed to identify inefficiencies in your workflows and implement intelligent automation solutions that save time, reduce errors, and free your team to focus on strategic, high-value activities.</p>

      <h3>Why Automation Matters Now</h3>
      
      <p>In an increasingly competitive landscape, efficiency is a competitive advantage. Businesses that automate repetitive tasks operate faster, make fewer errors, and can scale without proportionally increasing costs. AI-powered automation can handle customer inquiries, manage data entry, schedule appointments, send personalized emails, analyze data, and much more—24/7, without human intervention.</p>

      <h3>Our AI Automation Process</h3>
      
      <p>We begin with a comprehensive workflow audit to identify bottlenecks, repetitive tasks, and areas where automation could have the highest impact. We map out your current processes and identify opportunities for intelligent automation. We then design and implement custom AI solutions tailored to your specific needs.</p>

      <h3>Common Automation Solutions We Implement</h3>
      
      <p>Customer service automation using AI chatbots that handle 80% of common inquiries. Email automation with intelligent routing and personalized responses. Lead qualification and scoring using AI analysis of prospect behavior and data. Appointment scheduling and calendar management with automatic reminders and confirmations. Data entry and processing automation to eliminate manual data input errors. Social media posting and scheduling across multiple platforms. Invoice generation and payment reminders. Report generation and data analysis. Inventory management and stock alerts.</p>

      <h3>The Business Impact</h3>
      
      <p>By implementing AI automation, our clients typically experience: 40-60% reduction in time spent on manual tasks, 95%+ reduction in human errors, 24/7 customer support availability, improved customer satisfaction scores, reduced operational costs, ability to scale without hiring, and employees focusing on high-value strategic work instead of repetitive tasks.</p>

      <h3>Integration & Training</h3>
      
      <p>We ensure seamless integration with your existing systems and tools. We provide comprehensive training for your team so they understand how to work with the new automated systems, troubleshoot issues, and optimize workflows over time.</p>

      <h3>Ongoing Optimization</h3>
      
      <p>Automation isn't a one-time setup—it's an ongoing optimization process. We monitor your automated workflows, gather performance data, and continuously refine and improve the system based on real-world results. This ensures your automation continues to deliver value as your business evolves.</p>
    `,
  },
  {
    id: 4,
    name: "Google My Business Optimization",
    image: "/google-my-business-optimization.jpg",
    rating: 4.7,
    reviews: 112,
    price: "Custom Quote",
    description: "Complete GMB setup and local SEO optimization",
    fullDescription: `
      <h2>Google My Business Optimization - Dominate Local Search</h2>
      
      <p>If you operate a local business, Google My Business (GMB) is one of the most powerful tools at your disposal. When someone searches for a business like yours in their area, the first thing they see are local search results featuring businesses with optimized GMB profiles. Our Google My Business Optimization service ensures your business is not just visible in these results—it dominates them, bringing qualified local customers to your door.</p>

      <h3>The Importance of Local Search</h3>
      
      <p>Local search has become increasingly important. Over 85% of consumers use Google to find local businesses, and optimized Google My Business profiles appear prominently in these searches. Businesses with optimized GMB profiles get significantly more website visits, phone calls, and in-person visits compared to those with incomplete or unoptimized profiles.</p>

      <h3>Comprehensive GMB Optimization</h3>
      
      <p>We handle every aspect of Google My Business optimization. If you don't already have a GMB profile, we'll create one and verify ownership. We complete every field with accurate, keyword-optimized information. We add high-quality photos and videos that showcase your business, team, and services. We encourage and respond to customer reviews to build trust and social proof. We optimize your business description with relevant keywords and compelling copy. We set up posts and offers to promote special services or discounts.</p>

      <h3>Review Management & Reputation Building</h3>
      
      <p>Reviews are crucial for local search ranking and customer trust. We implement a systematic review generation strategy, making it easy for satisfied customers to leave reviews. We respond professionally to all reviews—both positive and negative—to demonstrate customer care and commitment to excellence. Businesses with more positive reviews rank higher in local search results and receive more customer inquiries.</p>

      <h3>Photo & Media Optimization</h3>
      
      <p>Visual content is critical for GMB success. We optimize your business photos with high-quality images of your storefront, team, products, and services. We also help you leverage 360-degree virtual tours and videos that give customers a comprehensive look at your business before they visit.</p>

      <h3>Local Citation Building</h3>
      
      <p>We ensure your business information (NAP: Name, Address, Phone) is accurate and consistent across all online directories and local citation sites. This consistency signals to Google that your business is legitimate and trustworthy, which improves your local search ranking.</p>

      <h3>Ongoing Management & Optimization</h3>
      
      <p>GMB optimization isn't a one-time task. We continue to monitor your profile, respond to reviews, update information, and post regular content to keep your business active and visible. We track metrics like views, clicks, calls, and directions requests to continuously optimize your presence.</p>

      <h3>Results You Can Expect</h3>
      
      <p>Clients with properly optimized GMB profiles typically see 50-100% increases in qualified leads from local search, improved visibility in map pack results (the top 3 local businesses shown), higher click-through rates to their website, increased phone calls and in-person visits, and improved online reputation and customer trust.</p>
    `,
  },
  {
    id: 5,
    name: "Content Monetization Strategy",
    image: "/content-monetization-strategy.jpg",
    rating: 4.8,
    reviews: 84,
    price: "Custom Quote",
    description: "Comprehensive plan to monetize your audience",
    fullDescription: `
      <h2>Content Monetization Strategy - Turn Your Audience Into Revenue</h2>
      
      <p>If you're creating content—whether through blogging, podcasting, video creation, or social media—but not generating significant income from it, you're leaving money on the table. Many content creators focus solely on building an audience without having a monetization strategy. Our Content Monetization Strategy service helps you identify multiple revenue streams, implement them effectively, and build a sustainable, profitable business around your content and audience.</p>

      <h3>The Content Creator Challenge</h3>
      
      <p>Building an audience takes time, effort, and skill. Many creators feel frustrated because they've invested months or years building their following but haven't figured out how to convert that audience into revenue. Without a clear monetization strategy, even large audiences don't translate to meaningful income. We solve this problem by identifying the best monetization opportunities for your specific situation.</p>

      <h3>Multiple Monetization Revenue Streams</h3>
      
      <p>We don't rely on a single revenue stream. Instead, we identify and implement multiple complementary revenue streams that work together. This diversification reduces risk and maximizes your income potential. Revenue streams we typically implement include sponsored content and brand partnerships, affiliate marketing, digital products (courses, ebooks, templates), membership and subscription models, coaching and consulting services, speaking engagements and consulting, premium content access, and advertising revenue.</p>

      <h3>Strategy Development</h3>
      
      <p>We begin by analyzing your existing content, audience, industry, and capabilities. We identify which monetization strategies align best with your brand and audience. We develop a detailed implementation plan that phases in different revenue streams strategically. We ensure each revenue stream enhances (rather than detracts from) your audience experience.</p>

      <h3>Digital Product Development</h3>
      
      <p>Digital products often represent the most profitable monetization opportunity. We help you develop and launch high-value digital products based on your expertise. This might include online courses, membership communities, templates, tools, or consulting services. We handle product design, marketing, sales, and delivery optimization.</p>

      <h3>Sponsorship & Partnership Development</h3>
      
      <p>We develop relationships with relevant brands and businesses who want to reach your audience. We negotiate favorable sponsorship deals and create authentic sponsored content that your audience values. Rather than compromising your credibility with low-quality ads, we focus on genuine partnerships that benefit your audience.</p>

      <h3>Email Marketing & Direct Audience Connection</h3>
      
      <p>We help you build and monetize an email list—one of your most valuable assets. An engaged email list allows you to promote products, services, and opportunities directly to your audience. We implement email marketing strategies that build trust and generate revenue without annoying subscribers.</p>

      <h3>Measurable Results</h3>
      
      <p>Clients implementing our content monetization strategy typically see 10-100x increases in monthly income within 12 months, development of multiple revenue streams providing income stability, higher perceived authority and credibility, and sustainable, scalable business models built around their content and expertise.</p>
    `,
  },
  {
    id: 6,
    name: "SaaS MVP Development",
    image: "/saas-mvp-development.jpg",
    rating: 4.9,
    reviews: 56,
    price: "Custom Quote",
    description: "Build your minimum viable product with our expert team",
    fullDescription: `
      <h2>SaaS MVP Development - Bring Your Software Idea to Life</h2>
      
      <p>You have a software idea that could solve real problems and generate significant revenue. However, building a SaaS (Software as a Service) product is complex, expensive, and involves significant technical challenges. Our SaaS MVP Development service helps entrepreneurs and businesses build a Minimum Viable Product quickly and cost-effectively, allowing you to validate your idea, get customer feedback, and iterate before building the full product.</p>

      <h3>Why an MVP Approach?</h3>
      
      <p>Many entrepreneurs spend months or years building the perfect product in isolation, only to launch it and discover that customers don't want what they built. An MVP (Minimum Viable Product) takes a different approach: build the absolute minimum set of features needed to solve a core problem, launch it quickly, get real customer feedback, and then iterate based on actual market response. This approach saves time, reduces risk, and increases the probability of success.</p>

      <h3>Our SaaS MVP Development Process</h3>
      
      <p>We start with a comprehensive consultation to understand your product vision, target market, business model, and success metrics. We help you define the minimum set of features required for MVP launch. We design the user experience and interface. We develop the MVP using modern, scalable technologies. We help you plan your go-to-market strategy and launch.</p>

      <h3>Technology Stack</h3>
      
      <p>We build MVPs using proven, scalable technologies including React or Vue for frontend development, Next.js for full-stack development, Node.js for backend services, PostgreSQL or MongoDB for databases, and deployment on cloud platforms like Vercel or AWS. This technology stack ensures your MVP is fast, reliable, and can scale as your user base grows.</p>

      <h3>Typical MVP Timeline</h3>
      
      <p>Most SaaS MVPs can be built in 6-12 weeks, depending on complexity. We work in sprint-based development with regular check-ins and feedback sessions. This allows you to see progress frequently, provide input, and make adjustments as needed.</p>

      <h3>Key MVP Features We Implement</h3>
      
      <p>User authentication and authorization. Core problem-solving functionality. Dashboard and user interface. Data storage and management. Basic analytics and reporting. Third-party integrations (payment processing, email, etc.). Mobile responsiveness. Security and performance optimization.</p>

      <h3>Launch Support</h3>
      
      <p>We provide comprehensive launch support including pre-launch marketing, user onboarding optimization, customer support setup, and feedback collection infrastructure. We help you gather user feedback systematically and identify priorities for post-launch development.</p>

      <h3>Post-Launch Development</h3>
      
      <p>After launch, we support ongoing development and optimization. We implement features based on user feedback, optimize performance, improve user experience, and help you scale to accommodate growing user numbers. This iterative approach ensures your product evolves based on real market needs.</p>

      <h3>Success Stories</h3>
      
      <p>We've helped numerous entrepreneurs launch successful SaaS products. Our MVPs have generated millions in revenue, acquired thousands of paying customers, and secured venture funding. Your success is our success.</p>
    `,
  },
  {
    id: 7,
    name: "Professional CV & Branding",
    image: "/professional-cv-branding.jpg",
    rating: 4.8,
    reviews: 203,
    price: "Custom Quote",
    description: "CV writing, LinkedIn optimization, and personal branding",
    fullDescription: `
      <h2>Professional CV & Personal Branding - Stand Out From the Competition</h2>
      
      <p>In today's competitive job market, your CV and online presence determine whether you get interviews, land high-paying positions, or attract clients and opportunities. Many professionals struggle with outdated CVs, weak LinkedIn profiles, and lack of personal branding. Our Professional CV & Branding service positions you for career success by creating a compelling professional narrative, crafting a powerful CV, and building a strong personal brand that opens doors.</p>

      <h3>Why Professional Branding Matters</h3>
      
      <p>Employers and clients often research candidates online before making decisions. If they can't find you or your online presence is weak, you lose opportunities to stronger competitors. A strong personal brand differentiates you, builds credibility, demonstrates expertise, and makes you more attractive to employers and clients. Studies show that professionals with strong personal brands earn 20-30% more than those without.</p>

      <h3>Professional CV Writing</h3>
      
      <p>We craft CVs that showcase your achievements, experience, and value proposition. We don't just list job duties—we highlight accomplishments, quantifiable results, and impact. We optimize your CV with relevant keywords that pass through ATS (Applicant Tracking Systems) used by large companies. We format your CV for maximum readability and professional appearance. We tailor your CV to specific positions and industries to maximize your chances of getting interviews.</p>

      <h3>LinkedIn Profile Optimization</h3>
      
      <p>LinkedIn is the world's largest professional network with 900+ million users. An optimized LinkedIn profile significantly increases visibility and opportunities. We optimize your profile with a professional photo, compelling headline, detailed but scannable summary, comprehensive experience section, skills endorsements, recommendations, and regular content. We help you build your professional network strategically and engage with industry content to establish thought leadership.</p>

      <h3>Personal Branding Strategy</h3>
      
      <p>We develop a comprehensive personal branding strategy that defines your unique value proposition, positions you as an expert in your field, and communicates your professional story effectively. We identify your strengths, experience, and unique perspective. We craft your professional narrative. We develop messaging and positioning that resonates with your target employers or clients.</p>

      <h3>Online Presence Optimization</h3>
      
      <p>We help you build and optimize your online presence across multiple platforms. This might include a personal website or portfolio, blog focused on your expertise, social media profiles showcasing your professional insights, speaking and writing opportunities, and participation in industry communities and forums.</p>

      <h3>Portfolio Development</h3>
      
      <p>If applicable to your field, we help you develop a compelling portfolio showcasing your best work. For creative professionals, this is essential. We help you curate, present, and tell the story behind your work in a way that impresses potential employers or clients.</p>

      <h3>Interview Preparation</h3>
      
      <p>With a strong CV and personal brand, you'll get more interviews. We provide interview coaching including preparation, common question practice, storytelling techniques, and negotiation strategies to help you succeed in interviews and negotiate better offers.</p>

      <h3>Career Advancement Support</h3>
      
      <p>Whether you're seeking your next job, transitioning careers, freelancing, or starting your own business, a strong personal brand and professional positioning accelerate success. Clients typically report increased interview requests, higher salary offers, more inbound opportunities, and greater career satisfaction.</p>
    `,
  },
  {
    id: 8,
    name: "Digital Marketing Consultation",
    image: "/digital-marketing-consultation.jpg",
    rating: 4.9,
    reviews: 145,
    price: "Custom Quote",
    description: "1-on-1 consultation with our digital marketing experts",
    fullDescription: `
      <h2>Digital Marketing Consultation - Expert Strategic Guidance</h2>
      
      <p>Every business is unique with different goals, audiences, and challenges. Rather than following a one-size-fits-all approach, our Digital Marketing Consultation service provides 1-on-1 expert guidance tailored to your specific situation. Whether you're just starting with digital marketing or looking to optimize existing efforts, our consultants bring years of experience and proven strategies to help you achieve exceptional results.</p>

      <h3>What Makes Our Consultation Different?</h3>
      
      <p>Generic advice doesn't work for unique business situations. We take time to thoroughly understand your business, industry, competition, audience, and goals. We analyze your current marketing efforts and identify gaps and opportunities. We then provide specific, actionable recommendations tailored to your situation. Our recommendations are based on data, best practices, and years of real-world marketing experience.</p>

      <h3>Consultation Topics</h3>
      
      <p>We can provide expert guidance on virtually any digital marketing topic including overall digital marketing strategy, website optimization and conversion rate improvement, SEO strategy and implementation, social media strategy and execution, email marketing and automation, paid advertising strategy (Google Ads, Facebook Ads, etc.), content marketing and strategy, video marketing and YouTube strategy, influencer marketing and partnerships, marketing automation and tools, analytics and measurement, brand positioning and messaging, and marketing technology stack selection and implementation.</p>

      <h3>The Consultation Process</h3>
      
      <p>We start with a discovery call where we understand your business, goals, current marketing efforts, and challenges. We conduct a comprehensive marketing audit analyzing your current situation and identifying opportunities. We research your industry, competitors, and target audience. We develop specific recommendations tailored to your situation. We present our findings and recommendations in a detailed consultation session. We answer your questions and discuss implementation strategies.</p>

      <h3>Typical Consultation Outcomes</h3>
      
      <p>Clear understanding of your marketing landscape and opportunities. Specific, prioritized recommendations for improvement. Implementation roadmap and timeline. Tool recommendations and setup guidance. Team training on implementing recommendations. Confidence in your marketing direction and strategy.</p>

      <h3>Implementation Support</h3>
      
      <p>If you want support implementing our recommendations, we can help with that too. We can handle implementation directly, train your team to implement, or oversee your team's implementation to ensure best practices are followed.</p>

      <h3>Measurable Outcomes</h3>
      
      <p>Our consultations lead to concrete business outcomes including more qualified leads, higher conversion rates, improved ROI on marketing spend, better understanding of your audience, clearer marketing direction, and improved confidence in marketing decisions.</p>
    `,
  },
  {
    id: 9,
    name: "Web Development Masterclass",
    image: "/web-development-masterclass.jpg",
    rating: 4.9,
    reviews: 234,
    price: "Custom Quote",
    description: "Complete course from HTML/CSS to advanced React and Next.js",
    fullDescription: `
      <h2>Web Development Masterclass - From Beginner to Professional Developer</h2>
      
      <p>The demand for web developers continues to grow, with companies willing to pay premium salaries for skilled professionals. Our Web Development Masterclass is a comprehensive training program that takes you from complete beginner with zero coding experience through advanced professional-level web development. Students who complete this course are ready to build production-quality websites, land high-paying freelance projects, or secure developer positions at top companies.</p>

      <h3>Why This Course is Different</h3>
      
      <p>Many online coding courses teach theory in isolation. You learn syntax but don't understand how to build real applications. Our Masterclass is project-based and practical. You'll build real websites throughout the course, learning by doing. You'll understand not just how to write code, but how to structure projects, solve problems, and think like a professional developer.</p>

      <h3>Course Curriculum</h3>
      
      <p><strong>Module 1: Web Development Fundamentals</strong> - How the internet works, browsers, servers, HTTP/HTTPS, client-server architecture, and the development process.</p>

      <p><strong>Module 2: HTML & CSS Mastery</strong> - Complete HTML5 semantic markup, advanced CSS including Flexbox and CSS Grid, responsive design, and accessibility best practices.</p>

      <p><strong>Module 3: JavaScript Fundamentals</strong> - JavaScript syntax, variables, data types, functions, objects, arrays, ES6+ features, DOM manipulation, and event handling.</p>

      <p><strong>Module 4: JavaScript Advanced Concepts</strong> - Closures, prototypes, async/await, promises, error handling, and functional programming concepts.</p>

      <p><strong>Module 5: React Basics</strong> - Why React, JSX, components, props, state, hooks, lifecycle, and building interactive UIs with React.</p>

      <p><strong>Module 6: React Advanced Concepts</strong> - Context API, custom hooks, performance optimization, code splitting, and testing React applications.</p>

      <p><strong>Module 7: Next.js & Full-Stack Development</strong> - Server-side rendering, static generation, API routes, database integration, authentication, and deploying production applications.</p>

      <p><strong>Module 8: Databases & Backend</strong> - SQL, database design, Node.js, Express.js, RESTful APIs, and building scalable backend services.</p>

      <p><strong>Module 9: Development Tools & Workflow</strong> - Git version control, command line basics, build tools, package managers, and professional development workflow.</p>

      <p><strong>Module 10: Deployment & DevOps</strong> - Hosting options, deployment processes, continuous integration, environment management, and monitoring production applications.</p>

      <p><strong>Module 11: Capstone Project</strong> - Build a complete full-stack application from requirements through deployment, demonstrating all skills learned.</p>

      <h3>Real-World Projects</h3>
      
      <p>Throughout the course, you'll build real projects that demonstrate your capabilities to potential employers or clients. These projects become portfolio pieces. Projects include a portfolio website, e-commerce website, social media application, and a complete SaaS product.</p>

      <h3>Expert Instruction</h3>
      
      <p>Our instructors are seasoned professionals with years of real-world development experience. They share practical tips, common pitfalls, and industry best practices. They're available for Q&A and guidance throughout the course.</p>

      <h3>Career Support</h3>
      
      <p>Upon completion, you'll receive career support including resume review, interview preparation, job placement guidance, and ongoing access to alumni community. Many graduates land developer positions or six-figure freelance careers within 6 months of completing the course.</p>

      <h3>Flexible Learning</h3>
      
      <p>Learn at your own pace with lifetime access to course materials. Video lectures, code examples, challenges, and projects are all available on-demand. Join live Q&A sessions or review recordings later.</p>
    `,
  },
  {
    id: 10,
    name: "Digital Marketing Bootcamp",
    image: "/digital-marketing-bootcamp.jpg",
    rating: 4.8,
    reviews: 189,
    price: "Custom Quote",
    description: "Learn SEO, social media, email marketing, and paid advertising",
    fullDescription: `
      <h2>Digital Marketing Bootcamp - Master Modern Marketing Skills</h2>
      
      <p>Digital marketing has become essential for business success, and companies desperately need skilled digital marketers. Our Digital Marketing Bootcamp is an intensive training program that teaches you everything you need to build a thriving career in digital marketing or launch a successful marketing career for your own business. Whether you're transitioning careers, starting a marketing agency, or scaling your existing business, this bootcamp equips you with in-demand skills.</p>

      <h3>The Digital Marketing Opportunity</h3>
      
      <p>Digital marketing is one of the fastest-growing fields with companies spending billions annually on online marketing. Skilled digital marketers are in high demand with excellent salary prospects and abundant freelance opportunities. If you understand how to drive traffic, generate leads, and convert customers online, you can build a lucrative career.</p>

      <h3>Comprehensive Curriculum</h3>
      
      <p><strong>Module 1: Digital Marketing Fundamentals</strong> - Overview of digital marketing channels, customer journey, conversion funnels, analytics mindset, and marketing technology.</p>

      <p><strong>Module 2: Search Engine Optimization (SEO)</strong> - How search engines work, keyword research, on-page optimization, technical SEO, link building, local SEO, and building sustainable organic traffic.</p>

      <p><strong>Module 3: Paid Search Advertising</strong> - Google Ads platform, keyword targeting, bid strategies, ad copywriting, landing page optimization, and maximizing ROI on search ads.</p>

      <p><strong>Module 4: Social Media Marketing</strong> - Strategy for each platform (Instagram, Facebook, TikTok, LinkedIn), content creation, community management, influencer partnerships, and paid social advertising.</p>

      <p><strong>Module 5: Content Marketing</strong> - Content strategy, copywriting, blog optimization, video content, podcast creation, and building authority through content.</p>

      <p><strong>Module 6: Email Marketing & Automation</strong> - List building, email campaigns, segmentation, automation sequences, personalization, and maximizing email ROI.</p>

      <p><strong>Module 7: Paid Social Advertising</strong> - Facebook and Instagram Ads platform, audience targeting, creative optimization, conversion tracking, and scaling profitable campaigns.</p>

      <p><strong>Module 8: Analytics & Measurement</strong> - Google Analytics, conversion tracking, attribution modeling, dashboards, and using data to optimize marketing.</p>

      <p><strong>Module 9: Conversion Rate Optimization</strong> - Landing page optimization, A/B testing, user experience principles, improving conversion rates, and maximizing value from traffic.</p>

      <p><strong>Module 10: Marketing Strategy & Business</strong> - Developing marketing strategies, marketing funnels, customer acquisition, lifetime value, and building profitable marketing systems.</p>

      <h3>Hands-On Practice</h3>
      
      <p>This isn't theoretical knowledge—you'll work with real marketing campaigns, live data, and actual business scenarios. You'll set up Google Analytics, run Google Ads campaigns, create social media strategies, optimize landing pages, and analyze real marketing data. You'll understand what works and why.</p>

      <h3>Case Studies & Real Results</h3>
      
      <p>We share case studies showing real results: businesses that increased traffic by 300%, doubled conversions, reduced customer acquisition cost by 40%, and generated millions in revenue. You'll learn the strategies that actually work in the real world.</p>

      <h3>Agency Partnerships</h3>
      
      <p>Upon completion, you'll have access to job opportunities with our network of digital marketing agencies and freelance opportunities. Many bootcamp graduates transition into six-figure marketing careers.</p>

      <h3>Ongoing Support & Community</h3>
      
      <p>Join an active community of digital marketers where you can share ideas, ask questions, and support each other's growth. You'll have lifetime access to course materials and updates as digital marketing evolves.</p>
    `,
  },
  {
    id: 11,
    name: "AI & Automation Certification",
    image: "/ai-automation-certification.jpg",
    rating: 4.9,
    reviews: 156,
    price: "Custom Quote",
    description: "Master AI tools and automation for business efficiency",
    fullDescription: `
      <h2>AI & Automation Certification - Master the Future of Work</h2>
      
      <p>Artificial Intelligence and automation are transforming how businesses operate. Forward-thinking entrepreneurs and professionals are racing to understand these technologies and leverage them for competitive advantage. Our AI & Automation Certification is a comprehensive program that teaches you to harness AI and automation tools to dramatically increase productivity, reduce costs, and solve complex business challenges. This certification positions you as a valuable asset in an increasingly AI-driven world.</p>

      <h3>Why AI & Automation Skills Matter</h3>
      
      <p>Companies worldwide are investing heavily in automation and AI implementation. Professionals who understand how to implement these technologies effectively can command premium compensation. Entrepreneurs who automate their businesses can scale significantly without proportional cost increases. The opportunity is enormous for those who develop these skills early.</p>

      <h3>Certification Program Overview</h3>
      
      <p><strong>Module 1: AI & Automation Fundamentals</strong> - What is AI, machine learning, automation, current capabilities and limitations, and the business impact of these technologies.</p>

      <p><strong>Module 2: AI Tools & Platforms</strong> - Overview of major AI platforms (ChatGPT, Claude, Gemini, etc.), understanding different models, prompting techniques, and selecting appropriate tools for different tasks.</p>

      <p><strong>Module 3: Prompt Engineering & AI Optimization</strong> - Advanced prompting techniques, temperature settings, fine-tuning outputs, iterative improvement, and getting maximum value from AI tools.</p>

      <p><strong>Module 4: Business Automation with AI</strong> - Identifying automation opportunities, workflow optimization, implementing chatbots, automating data entry, and building custom automation solutions.</p>

      <p><strong>Module 5: Customer Service Automation</strong> - AI chatbots, customer support automation, handling complex inquiries, maintaining quality while automating, and measuring customer satisfaction.</p>

      <p><strong>Module 6: Content Creation with AI</strong> - Using AI for writing, design, video, and multimedia creation while maintaining quality and authenticity. Understanding AI limitations and when human creativity is essential.</p>

      <p><strong>Module 7: Data Analysis & Insights</strong> - Using AI for data analysis, pattern recognition, predictive analytics, and deriving actionable business insights from data.</p>

      <p><strong>Module 8: AI for Marketing & Sales</strong> - Personalization at scale, predictive lead scoring, campaign optimization, and using AI to improve marketing ROI.</p>

      <p><strong>Module 9: Building Custom AI Solutions</strong> - No-code AI tools, integrating AI with existing systems, APIs and integrations, and building sophisticated automation workflows.</p>

      <p><strong>Module 10: Ethics, Security & Best Practices</strong> - Responsible AI use, data privacy, security considerations, avoiding common pitfalls, and ethical implementation of automation.</p>

      <h3>Hands-On Projects</h3>
      
      <p>You'll complete real projects including automating a complete business workflow, building an AI chatbot, creating automated marketing campaigns, and implementing data analysis and reporting automation. These projects become portfolio pieces demonstrating your capabilities.</p>

      <h3>AI Tools Mastery</h3>
      
      <p>We cover the most powerful and relevant AI tools currently available including ChatGPT, Claude, Gemini, Midjourney, and various automation platforms. You'll develop deep expertise with tools that can significantly enhance productivity.</p>

      <h3>Business Implementation</h3>
      
      <p>This isn't just theory—you'll learn how to identify automation opportunities in real businesses, propose solutions, implement them successfully, and measure results. You'll understand ROI analysis and the business case for automation.</p>

      <h3>Career Opportunities</h3>
      
      <p>Graduates can pursue careers as AI automation consultants, help businesses implement automation and AI, freelance on automation projects, or apply skills to their own business. The demand for these skills is rapidly growing.</p>
    `,
  },
  {
    id: 12,
    name: "Entrepreneurship & SaaS Launch",
    image: "/entrepreneurship-saas-launch.jpg",
    rating: 4.8,
    reviews: 127,
    price: "Custom Quote",
    description: "Build, launch, and scale your own SaaS product",
    fullDescription: `
      <h2>Entrepreneurship & SaaS Launch - Build a Scalable Business</h2>
      
      <p>Have you ever wanted to build your own business? To create a product that solves real problems, serves paying customers, and generates recurring revenue? Our Entrepreneurship & SaaS Launch program is designed for aspiring entrepreneurs who want to take their idea from concept to a thriving, profitable SaaS business. This comprehensive program covers everything from validating your business idea through scaling a profitable company.</p>

      <h3>The SaaS Opportunity</h3>
      
      <p>SaaS (Software as a Service) businesses offer exceptional opportunities: recurring revenue creates predictable income, software scales without proportional cost increases, customer lifetime value can be very high, and the barrier to entry has dropped significantly with modern development tools. Many successful SaaS companies were started by individuals or small teams with limited funding. The opportunity to build a million-dollar business from your laptop is real.</p>

      <h3>Comprehensive Curriculum</h3>
      
      <p><strong>Module 1: Entrepreneurial Mindset</strong> - Traits of successful entrepreneurs, embracing uncertainty, building resilience, and developing the mentality needed for startup success.</p>

      <p><strong>Module 2: Idea Validation & Market Research</strong> - Validating business ideas, understanding target markets, identifying problems worth solving, and conducting market research without building the product.</p>

      <p><strong>Module 3: Business Model & Revenue Strategy</strong> - Defining your business model, pricing strategy, revenue projections, and unit economics. Understanding what makes a viable business.</p>

      <p><strong>Module 4: Lean Startup Approach</strong> - Building minimum viable products quickly, failing fast, iterating based on feedback, and applying lean principles to startup development.</p>

      <p><strong>Module 5: Building Your MVP</strong> - Defining MVP scope, prioritizing features, building quickly, and launching with imperfect products to get customer feedback early.</p>

      <p><strong>Module 6: Go-to-Market Strategy</strong> - Launching your product, acquiring initial customers, building word-of-mouth momentum, and creating marketing strategies on a limited budget.</p>

      <p><strong>Module 7: Customer Acquisition & Growth</strong> - Understanding your ideal customer, creating effective marketing messages, managing customer acquisition costs, and optimizing conversion funnels.</p>

      <p><strong>Module 8: Sales & Revenue Growth</strong> - Sales process for SaaS, closing deals, managing customer relationships, and strategies to increase revenue from existing customer base.</p>

      <p><strong>Module 9: Metrics & Analytics</strong> - SaaS metrics (MRR, ARR, churn, LTV, CAC), tracking what matters, using data to guide decisions, and optimizing key metrics.</p>

      <p><strong>Module 10: Scaling & Operations</strong> - Building teams, creating processes, fundraising strategies, and scaling from startup to established business while maintaining quality.</p>

      <h3>Real Startup Playbooks</h3>
      
      <p>We share proven playbooks from successful SaaS founders including how they validated ideas, acquired initial customers, grew revenue, and scaled operations. You'll learn from real success and failure stories.</p>

      <h3>Network & Support</h3>
      
      <p>Join a community of founders and entrepreneurs. Share ideas, get feedback, find co-founders or team members, and receive ongoing support. Many bootcamp graduates launch successful SaaS products with help and encouragement from the community.</p>

      <h3>Business Planning & Funding</h3>
      
      <p>We help you develop a solid business plan, financial projections, and pitch deck. If seeking investment, we provide guidance on approaching investors and securing funding. Many graduates have successfully raised significant capital for their ventures.</p>

      <h3>Ongoing Mentorship</h3>
      
      <p>Upon completion, you'll have access to ongoing mentorship from experienced founders and entrepreneurs who can guide you through challenges and celebrate your successes.</p>

      <h3>Success Metrics</h3>
      
      <p>Bootcamp graduates have launched successful SaaS products generating thousands to hundreds of thousands in annual revenue. Many are now profitable and growing. Your success is our success.</p>
    `,
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <main className="bg-background text-foreground min-h-screen pt-24">
        <section className="py-20 px-4 text-center">
          <h1 className="text-4xl font-black mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-primary hover:text-accent transition-colors">
            Back to Shop
          </Link>
        </section>
      </main>
    )
  }

  const suggestedProducts = products.filter((p) => p.id !== productId).slice(0, 3)

  return (
    <main className="bg-background text-foreground min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-12 px-4 border-b border-primary/20">
        <div className="max-w-4xl mx-auto">
          <Link href="/shop" className="text-primary hover:text-accent transition-colors mb-6 inline-block">
            ← Back to Shop
          </Link>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative h-80 overflow-hidden rounded-lg border border-primary/20">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/nigerian-professionals-working-in-modern-office-wi.jpg"
                }}
              />
            </div>

            <div>
              <h1 className="text-5xl font-black mb-4 text-primary">{product.name}</h1>
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} filled={i < Math.floor(product.rating)} />
                ))}
                <span className="text-gray-400">({product.reviews} reviews)</span>
              </div>
              <p className="text-2xl font-black text-accent mb-8">{product.price}</p>
              <a
                href={getProductWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-black font-black py-3 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-lg"
              >
                <ShoppingCart />
                Order Now on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <div
            className="text-gray-300 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{
              __html: product.fullDescription
                .replace(/<h2>/g, '<h2 class="text-3xl font-black text-primary mt-12 mb-4">')
                .replace(/<h3>/g, '<h3 class="text-2xl font-black text-accent mt-8 mb-4">')
                .replace(/<p>/g, '<p class="text-gray-300 leading-relaxed">')
                .replace(/<li>/g, '<li class="text-gray-300 ml-4">'),
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Connect with our team on WhatsApp to discuss how {product.name} can help your business grow.
          </p>
          <a
            href={getProductWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-black font-black py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-lg"
          >
            <ShoppingCart />
            Order Now on WhatsApp
          </a>
        </div>
      </section>

      {/* Suggested Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {suggestedProducts.map((sugProduct) => (
              <Link key={sugProduct.id} href={`/shop/${sugProduct.id}`}>
                <div className="bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 group cursor-pointer h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden bg-gray-800">
                    <img
                      src={sugProduct.image || "/placeholder.svg"}
                      alt={sugProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "/nigerian-professionals-working-in-modern-office-wi.jpg"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-black text-primary mb-2 group-hover:text-accent transition-colors">
                      {sugProduct.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{sugProduct.description}</p>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} filled={i < Math.floor(sugProduct.rating)} />
                      ))}
                      <span className="text-xs text-gray-400 ml-2">({sugProduct.reviews})</span>
                    </div>

                    <p className="text-primary font-black">{sugProduct.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
