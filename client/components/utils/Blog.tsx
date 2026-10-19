import type{ JSX } from 'react';
import { useState } from 'react';
import { Eye, ThumbsUp, MessageCircle, ChevronUp, ChevronDown } from 'lucide-react';
import Header from '../header/LoginHead';

// Category: Study Hacks & Productivity

// 1. The "Cornell Method": Why It’s the Gold Standard for Note-Taking
// Hook: Explain the layout (Cues, Notes, Summary) and why it works for retention.

// 2. Stop Rewriting: How to Use "Active Recall" with Shared Notes
// Hook: Guide on how to use downloaded notes to quiz yourself rather than just reading them.

// 3. Digital vs. Paper: Which Notes Actually Help You Remember?
// Hook: A comparison of typing speed vs. handwriting cognitive benefits.

// Category: Platform Guides & Community

// 4. How to Earn Money (or Credits) by Uploading Your Notes
// Hook: A tutorial on the website’s monetization or point system.

// 5. Top 5 Most Downloaded Notes of the Semester (Subject: Calculus)
// Hook: A roundup of the most popular files to drive traffic to those specific pages.

// 6. Feature Update: Introducing "Dark Mode" and Better Search Filters
// Hook: A product update post highlighting new UI/UX improvements.

// Category: Subject-Specific Advice

// 7. Cracking Organic Chemistry: A Guide to Drawing Mechanisms
// Hook: Specific tips for a hard subject, linking to relevant notes on the site.

// 8. The Ultimate Guide to Acing Online Open-Book Exams
// Hook: How to organize your shared notes for quick retrieval during tests.

// Category: Motivation & Lifestyle

// 9. Beating the "Sophomore Slump": How to Stay Motivated Mid-Semester
// Hook: Mental health and study-life balance advice.

// 10. From D's to A's: A User Success Story
// Hook: An interview with a student who improved their grades using the site’s resources.

// The Wireframe Concept
// Header: Logo, Navigation (Home, Notes, Blog, Login).
// Hero Section: A large featured post (Post #1) with a big image and overlay text.
// Filter Bar: Buttons to sort by category (e.g., "All," "Study Tips," "Math," "Product Updates").
// The Grid: A 2-column (mobile) or 3-column (desktop) grid of blog cards.
// Pagination: "Load More" button at the bottom.
// Footer: Links, Social Media, Copyright.

interface PostType{
    id: string;
    title: string;
    slug: string;
    category: string;
    publishDate: string;
    readTime: string;
    featured: boolean;
    author: {
        name:string;
        role: string;
        avatar: string;
    };
    hook: string;
    summary: string;
    content: string;
    tags: string[];
    media: {
        type: string;
        url: string;
        alt: string;
    };
    engagement: {
        views: number;
        likes: number;
        commentsCount: number;
    }
}

const platformBlogData: {posts: PostType[]} = {
    posts: [
    {
      id: "post-001",
      title: "The 'Cornell Method': Why It’s the Gold Standard for Note-Taking",
      slug: "cornell-method-gold-standard-note-taking",
      category: "Study Hacks & Productivity",
      publishDate: "October 16, 2026",
      readTime: "5 min read",
      featured: true,
      author: {
        name: "Prof. Arthur Vance",
        role: "Academic Coach & Author",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      },
      hook: "Explain the layout (Cues, Notes, Summary) and why it works for retention.",
      summary:
        "Transform raw lecture chaos into structured, review-ready knowledge using the time-tested Cornell note-taking framework.",
      content:
        "The Cornell Method splits your page into three distinct zones: a narrow left column for Cues and trigger questions, a wide right column for main Notes, and a bottom summary section. This intentional structure forces active processing during lectures rather than mindless transcription...",
      tags: ["Study-Tips", "Note-Taking", "Productivity"],
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
        alt: "Notebook showing structured Cornell notes with a pen",
      },
      engagement: { views: 4200, likes: 310, commentsCount: 28 },
    },
    {
      id: "post-002",
      title: "Stop Rewriting: How to Use 'Active Recall' with Shared Notes",
      slug: "stop-rewriting-active-recall-shared-notes",
      category: "Study Hacks & Productivity",
      publishDate: "October 14, 2026",
      readTime: "4 min read",
      featured: false,
      author: {
        name: "Chloe Bennett",
        role: "Peer Learning Lead",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      },
      hook: "Guide on how to use downloaded notes to quiz yourself rather than just reading them.",
      summary:
        "Passive re-reading gives you a false sense of mastery. Learn how to turn community-shared documents into high-yield flashcards.",
      content:
        "When you download high-quality notes from your peers, avoid the temptation to read them like a novel. Instead, cover the definitions or steps, use the headings as prompts, and force your brain to retrieve the answer before checking your accuracy...",
      tags: ["Active Recall", "Study-Hacks", "Exams"],
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        alt: "Students collaborating over study notes",
      },
      engagement: { views: 1850, likes: 142, commentsCount: 12 },
    },
    {
      id: "post-003",
      title: "Digital vs. Paper: Which Notes Actually Help You Remember?",
      slug: "digital-vs-paper-notes-cognitive-benefits",
      category: "Study Hacks & Productivity",
      publishDate: "October 11, 2026",
      readTime: "6 min read",
      featured: false,
      author: {
        name: "Dr. Maya Lin",
        role: "Cognitive Psychologist",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      },
      hook: "A comparison of typing speed vs. handwriting cognitive benefits.",
      summary:
        "Does tapping on a tablet or writing on paper yield better conceptual understanding? We break down the cognitive science.",
      content:
        "Typing allows for verbatim transcription, but handwriting forces paraphrase and conceptual synthesis due to slower speeds. However, digital notes win on searchability and organization. Here is how to get the best of both worlds...",
      tags: ["Cognition", "Tablets", "Study-Methods"],
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
        alt: "Stylus writing on a tablet next to a paper notebook",
      },
      engagement: { views: 2900, likes: 215, commentsCount: 34 },
    },
    {
      id: "post-004",
      title: "How to Earn Money (or Credits) by Uploading Your Notes",
      slug: "earn-money-credits-uploading-notes",
      category: "Platform Guides & Community",
      publishDate: "October 9, 2026",
      readTime: "3 min read",
      featured: false,
      author: {
        name: "Community Team",
        role: "NoteShare Support",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      },
      hook: "A tutorial on the website’s monetization or point system.",
      summary:
        "Turn your hard work into cash rewards or free subscription credits by sharing your lecture notes with fellow students.",
      content:
        "Every time another student unlocks your verified lecture notes or study guides, you earn reward points that can be redeemed for gift cards or premium platform credits. Clean formatting and clear diagrams get the highest engagement...",
      tags: ["Monetization", "Community", "Tutorial"],
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
        alt: "Digital wallet and rewards dashboard",
      },
      engagement: { views: 3600, likes: 280, commentsCount: 40 },
    },
    {
      id: "post-005",
      title: "Top 5 Most Downloaded Notes of the Semester (Subject: Calculus)",
      slug: "top-5-downloaded-calculus-notes",
      category: "Platform Guides & Community",
      publishDate: "October 7, 2026",
      readTime: "4 min read",
      featured: false,
      author: {
        name: "Samira Khan",
        role: "Data & Curation Analyst",
        avatar:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      },
      hook: "A roundup of the most popular files to drive traffic to those specific pages.",
      summary:
        "Struggling with limits, derivatives, or series? Check out the peer-verified calculus notes that saved thousands of GPAs this term.",
      content:
        "Midterms are approaching fast, and calculus remains one of our most searched subjects. We’ve compiled the top five community-uploaded cheat sheets and step-by-step problem sets that earned 5-star ratings from top engineering students...",
      tags: ["Calculus", "Mathematics", "Top-Notes"],
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
        alt: "Calculus equations written on a whiteboard",
      },
      engagement: { views: 5100, likes: 430, commentsCount: 19 },
    },
    {
      id: "post-006",
      title:
        "Feature Update: Introducing 'Dark Mode' and Better Search Filters",
      slug: "feature-update-dark-mode-better-search",
      category: "Platform Guides & Community",
      publishDate: "October 4, 2026",
      readTime: "3 min read",
      featured: false,
      author: {
        name: "Dev Team",
        role: "Product Engineering",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
      },
      hook: "A product update post highlighting new UI/UX improvements.",
      summary:
        "Late-night study sessions just got easier on the eyes. Explore our brand new dark theme and advanced university search filters.",
      content:
        "We listened to your feedback! Starting today, you can toggle Dark Mode instantly from the navigation bar. Plus, our new granular search filters let you sort notes by university, professor, semester, and rating with a single click...",
      tags: ["Product-Updates", "UI/UX", "Platform News"],
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
        alt: "Sleek dark mode user interface on laptop screen",
      },
      engagement: { views: 2400, likes: 195, commentsCount: 25 },
    },
    {
      id: "post-007",
      title: "Cracking Organic Chemistry: A Guide to Drawing Mechanisms",
      slug: "cracking-organic-chemistry-drawing-mechanisms",
      category: "Subject-Specific Advice",
      publishDate: "October 2, 2026",
      readTime: "7 min read",
      featured: false,
      author: {
        name: "Dr. Liam Thorne",
        role: "Chemistry Tutor",
        avatar:
          "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=150",
      },
      hook: "Specific tips for a hard subject, linking to relevant notes on the site.",
      summary:
        "Stop memorizing reactions blindly. Learn how electron-pushing arrows and curved arrow notation unlock reaction pathways.",
      content:
        "Organic chemistry feels impossible until you master electron flow. Remember that electrons always move from regions of high electron density (nucleophiles) to low density (electrophiles). Pair these core principles with our top-rated organic reaction summary sheets...",
      tags: ["Chemistry", "Organic-Chem", "Exams"],
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
        alt: "Scientific chemistry formulas and lab glassware",
      },
      engagement: { views: 3100, likes: 260, commentsCount: 18 },
    },
    {
      id: "post-008",
      title: "The Ultimate Guide to Acing Online Open-Book Exams",
      slug: "ultimate-guide-acing-online-open-book-exams",
      category: "Subject-Specific Advice",
      publishDate: "September 29, 2026",
      readTime: "5 min read",
      featured: false,
      author: {
        name: "Jessica Taylor",
        role: "Higher Ed Consultant",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      },
      hook: "How to organize your shared notes for quick retrieval during tests.",
      summary:
        "Open-book doesn't mean easy. If you haven't organized your reference materials beforehand, you'll run out of time.",
      content:
        "During a timed open-book exam, searching through messy folders wastes precious minutes. Build a master index page, hyperlink your downloadable notes into categorical folders, and use searchable PDF tags so you can find answers in seconds...",
      tags: ["Open-Book-Exams", "Test-Prep", "Organization"],
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
        alt: "Laptop and digital study folders open for exam prep",
      },
      engagement: { views: 2750, likes: 190, commentsCount: 14 },
    },
    {
      id: "post-009",
      title:
        "Beating the 'Sophomore Slump': How to Stay Motivated Mid-Semester",
      slug: "beating-sophomore-slump-staying-motivated",
      category: "Motivation & Lifestyle",
      publishDate: "September 25, 2026",
      readTime: "4 min read",
      featured: false,
      author: {
        name: "Marcus Vance",
        role: "Student Counselor",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      },
      hook: "Mental health and study-life balance advice.",
      summary:
        "Feeling exhausted halfway through the term? Here are practical strategies to reset your routine and protect your mental well-being.",
      content:
        "The 'Sophomore Slump' is a real phenomenon where initial enthusiasm wanes and burnout sets in. Combat this by shrinking your daily task list to the top three priorities, scheduling non-negotiable rest blocks, and studying alongside peers in community spaces...",
      tags: ["Mental-Health", "Motivation", "Burnout"],
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
        alt: "Relaxing outdoor view promoting mental wellness",
      },
      engagement: { views: 2200, likes: 310, commentsCount: 21 },
    },
    {
      id: "post-010",
      title: "From D's to A's: A User Success Story",
      slug: "from-ds-to-as-user-success-story",
      category: "Motivation & Lifestyle",
      publishDate: "September 20, 2026",
      readTime: "5 min read",
      featured: false,
      author: {
        name: "Daniela Ortiz",
        role: "Computer Science Major (Alum)",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
      },
      hook: "An interview with a student who improved their grades using the site’s resources.",
      summary:
        "How one struggling engineering student turned a failing grade into straight A's by leveraging collaborative study groups and community notes.",
      content:
        "Meet Daniela, a senior CS major who almost dropped out after failing her sophomore data structures midterm. By switching to collaborative note repositories and adopting active recall, she completely turned her academic trajectory around...",
      tags: ["Success-Story", "Inspiration", "Community"],
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
        alt: "Graduate smiling proudly with diploma",
      },
      engagement: { views: 4800, likes: 520, commentsCount: 55 },
    },
  ]
};

// Main function
export default function Blogs(){
    const [ currId, setCurrId ] = useState<string|null>(null);

    function showBlogs(){
        function writeTags(lst: string[]){
            const list: string[] = [];
            for(const i in lst){
                console.log(lst[1])
                list.push(`#${lst[i]} `);
            }
            return list
        }
        const blogs:JSX.Element[] = [];

        for(const i of platformBlogData.posts ){
            blogs.push(
              <article className="grid w-full border max-w-4xl p-3 mx-auto lg:mt-2">
                {/* Category main heading */}
                <header className="w-full text-center">
                  <h1 className="font-serif text-3xl font-extrabold text-[rgb(20,16,20)] underline sm:text-4xl lg:text-3xl xl:text-3xl 2xl:text-4xl">
                    {i.category}
                  </h1>
                </header>

                {/* blog post card */}
                <article
                  id={`${i.id}`}
                  key={`${i.id}`}
                  className="w-full max-w-md mx-auto overflow-hidden border-red-700 bg-linear-to-tl from-red-600 to-blue-400 rounded-2xl p-6 sm:p-10 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl  md:border-4 h-[20vh] lg:h-[70vh]"
                >
                  {/* Post card heading */}
                  <h2 className="mb-4 font-serif text-2xl font-bold text-center text-yellow-100 sm:text-3xl lg:text-xl xl:text-3xl">
                    {i.title}
                  </h2>

                  <div className="flex flex-col justify-between gap-4 mb-6 sm:flex-row sm:items-center">
                    <h3 className="w-full font-serif text-lg font-semibold text-gray-800 sm:text-xl lg:text-lg xl:text-xl sm:w-3/4">
                      {i.hook}
                    </h3>
                    <p className="text-sm text-gray-100 sm:text-right whitespace-nowrap">
                      {i.publishDate}
                    </p>
                  </div>

                  {/* Blog Main Content & Image Wrapper */}
                  <section className="relative w-full overflow-hidden rounded-xl min-h-100 mb-6">
                    {/* Background Image */}
                    <img
                      src={i.media?.url}
                      alt={i.media?.alt || "Blog media"}
                      aria-label={i.media?.alt}
                      className="absolute inset-0 z-0 object-cover w-full h-full brightness-50"
                    />

                    {/* Overlay Content */}
                    <section className="relative z-10 flex flex-col justify-between h-full p-4 text-gray-200 transition duration-300 sm:p-6 bg-black/30 backdrop-blur-[2px]">
                      <div className="max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-current">
                        <div className="text-sm tracking-wide text-yellow-300 uppercase">
                          {writeTags(i.tags)}
                        </div>
                        <h2 className="my-2 text-xl font-bold text-red-300 xl:text-2xl">
                          {i.title}
                        </h2>
                        <p className="mb-3 text-sm leading-relaxed sm:text-base xl:text-lg">
                          {i.summary}
                        </p>

                        {currId === i.id && (
                          <p className="text-sm text-gray-300 xl:text-lg animate-fadeIn">
                            {i.content}
                          </p>
                        )}

                        {/* Read more button */}
                        <button
                          onClick={() =>
                            setCurrId(currId === i.id ? null : i.id)
                          }
                          className="flex items-center gap-2 px-4 py-2 mt-4 text-sm font-medium text-white transition bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 hover:border-blue-400"
                        >
                          {currId === i.id ? (
                            <>
                              Read Less <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              Read More <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                      {/* Blogger Information */}
                      <div className="flex items-center gap-4 w-[99%] p-3 mt-4 border border-white/20 rounded-xl bg-linear-to-b from-[#be9090]/80 to-[#3949eb]/80 backdrop-blur-sm">
                        <img
                          src={i.author?.avatar}
                          alt={`${i.author?.name}`}
                          className="object-cover w-12 h-12 rounded-full ring-2 ring-white/50"
                        />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                          <span className="text-base font-bold">
                            {i.author?.name}
                          </span>
                          <span className="text-xs text-gray-300 sm:text-sm">
                            • {i.author?.role}
                          </span>
                        </div>
                      </div>
                    </section>
                  </section>

                  {/* Footer Engagement */}
                  <footer className="flex items-center justify-around pt-4 font-semibold text-white border-t border-white/20 sm:text-lg">
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5" />{" "}
                      <span>{i.engagement?.views}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-5 h-5" />{" "}
                      <span>{i.engagement?.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />{" "}
                      <span>{i.engagement?.commentsCount}</span>
                    </div>
                  </footer>
                </article>
              </article>,
            );
        }
        return blogs;
    }

    return(
        <>
        <Header />
        <section className="grid grid-cols-1 gap-13 lg:gap-y-10 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 bg-linear-to-tr from-violet-700 via-yellow-400 to-blue-300 " >
            {showBlogs()}
        </section>
        </>
    );
}


