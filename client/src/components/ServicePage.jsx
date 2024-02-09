import React, { useState, useEffect } from 'react';

const Service = () => {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const posts = [
    {
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      title: '5 Easy Tips That Will Make Your Latte Art Flourish',
      description:
        'To start with, but to master latte art patterns, you need a lot of practice and determination. Here are my tips that helped me to improve my latte art a few years ago!',
    },
    {
      image:
        'https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed',
      title: 'Coffee Roasting Basics: Developing Flavour by Roasting',
      description:
        'Are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let\'s see what makes caffé latte and flat white different from each other!',
    },
    {
      image:
        'https://images.unsplash.com/photo-1445077100181-a33e9ac94db0',
      title: 'Latte vs. Flat White - What is the Difference?',
      description:
        'I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?',
    },
    {
      image:
        'https://images.unsplash.com/photo-1459257868276-5e65389e2722',
      title: 'Creating the Perfect Espresso Recipe',
      description:
        'Espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!',
    },
  ];

  const [shuffledPosts, setShuffledPosts] = useState([]);

  useEffect(() => {
    setShuffledPosts([...shuffle(posts)]);
  }, []); // Run only once on component mount

  return (
    <section className="bg-gray-200 py-10 px-12">
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shuffledPosts.map((post, index) => (
          <div
            key={index}
            className="my-8 rounded bg-white duration-300 hover:-translate-y-1"
          >
            <a href="#link" className="cursor-pointer">
              <figure>
                <img
                  src={`${post.image}?auto=format&fit=crop&w=400&q=50`}
                  className="rounded-t h-72 w-full object-cover"
                  alt="Post"
                />
                <figcaption className="p-4">
                  <h2 className="text-lg text-gray-900 font-medium title-font">
                    {post.title}
                  </h2>
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">
                    Category
                  </h3>
                  <p className="leading-relaxed text-base">
                    {post.description}
                  </p>
                </figcaption>
              </figure>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
