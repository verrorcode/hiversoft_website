// app/page.tsx or app/articles/page.tsx
import ArticlesCarousel from './Articlescaraousel';

// Fetch data on the server
async function getArticles() {
  // Replace this with your actual data fetching logic (e.g., from an API or CMS)
  return [
    {
      time: "5 min",
      heading: "AI-Powered Assistants",
      heading2: "Revolutionizing Customer Engagement",
      name: "Published by Hiversoft",
      date: "January 1, 2025",
      imgSrc: "https://static.hiversoft.com/ai5.jpg",
      path: "/articles/ai-powered-assistants",
    },
    {
      time: "4 min",
      heading: "Predictive Analytics",
      heading2: "Driving Smarter Decision-Making",
      name: "Published by Hiversoft",
      date: "January 12, 2025",
      imgSrc: "https://static.hiversoft.com/ai8.jpg",
      path: "/articles/predictive-analytics",
    },
    {
      time: "6 min",
      heading: "AI & Cloud Integration",
      heading2: "Unlocking Scalability and Efficiency",
      name: "Published by Hiversoft",
      date: "December 3, 2024",
      imgSrc: "https://static.hiversoft.com/ai7.jpg",
      path: "/articles/ai-cloud-integration",
    },
  ];
}

export default async function Page() {
  const postData = await getArticles();

  return (
    <div className="bg-lightgrey py-20" id="blog-section">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-blue text-lg font-normal tracking-widest">ARTICLES</h3>
          <h3 className="text-4xl sm:text-6xl font-bold">Our Latest Blogs</h3>
        </div>
        <ArticlesCarousel postData={postData} />
      </div>
    </div>
  );
}