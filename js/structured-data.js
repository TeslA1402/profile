const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ivan Timeev",
  alternateName: "TeslA1402",
  jobTitle: "Java Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chelyabinsk",
    addressCountry: "Russia"
  },
  image: "assets/avatar.png",
  sameAs: ["https://github.com/TeslA1402"],
  knowsAbout: [
    "Java", "Spring Boot", "Backend Development", "Open Source",
    "RabbitMQ", "Git", "Microservices", "TypeScript", "Python"
  ]
};

const tag = document.createElement('script');
tag.type = 'application/ld+json';
tag.textContent = JSON.stringify(person);
document.head.appendChild(tag);
