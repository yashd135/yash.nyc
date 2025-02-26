export function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Yash Desai",
          "url": "https://yash.nyc",
          "jobTitle": "Software Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "Amazon"
          },
          "image": "https://yash.nyc/profile-pic.jpg",
          "sameAs": [
            "https://linkedin.com/in/yashd1",
            "https://github.com/yashd135"
          ],
          "knowsAbout": [
            "Software Engineering",
            "Backend Development",
            "Photography"
          ]
        })
      }}
    />
  );
} 