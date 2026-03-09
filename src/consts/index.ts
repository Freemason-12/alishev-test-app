import { UserReview, WithContext } from "schema-dts";

export const userReviewsMetadata: WithContext<UserReview>[] = [
  {
    "@context": "https://schema.org",
    "@type": "UserReview",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5"
    },
    reviewBody: "This robot has completely changed my daily routine. It handles cleaning, organizes my schedule, and even reminds me when groceries are running low. What impressed me the most is how naturally it interacts with our family. It feels less like a gadget and more like a helpful assistant that actually understands what we need. Highly recommended for busy households.",
    author: {
      "@type": "Person",
      givenName: "Emily",
      familyName: "Carter",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "UserReview",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4",
    },
    reviewBody: "I originally bought the robot to help with housekeeping, but it turned out to be useful for much more than that. It manages small tasks around the house, keeps track of my calendar, and can even help with simple cooking preparation. The setup was straightforward, and the interface is easy to use. My only complaint is that it occasionally misunderstands voice commands, but overall it's a great product.",
    author: {
      "@type": "Person",
      givenName: "Daniel",
      familyName: "Kim",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "UserReview",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    reviewBody: "As someone who works from home, this assistant robot has been a huge productivity boost. It takes care of routine chores like vacuuming, sorting packages, and reminding me about meetings so I can focus on work. I also appreciate the privacy settings and customization options. It’s clear that a lot of thought went into making the robot adaptable to different lifestyles.",
    author: {
      "@type": "Person",
      givenName: "Sofia",
      familyName: "Martinez",
    },
  },
]
