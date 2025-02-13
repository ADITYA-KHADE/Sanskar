export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  imageUrl: string
  festival: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Significance of Diwali: Festival of Lights",
    excerpt: "Explore the rich traditions and symbolism behind Diwali, India's most celebrated festival.",
    content: `
      Diwali, also known as Deepavali, is one of the most significant and joyous festivals in Indian culture. Often referred to as the "Festival of Lights," Diwali symbolizes the spiritual victory of light over darkness, good over evil, and knowledge over ignorance.

      The festival typically spans five days, with each day holding its own significance and rituals. Homes are cleaned and decorated with colorful rangoli patterns and lit with numerous diyas (oil lamps) and candles. Families gather to perform puja (prayers) to Lakshmi, the goddess of wealth and prosperity, and exchange gifts and sweets.

      One of the most captivating aspects of Diwali is the stunning display of fireworks that illuminate the night sky. The dazzling lights and sounds are believed to drive away evil spirits and welcome the blessings of the gods.

      During this festive season, it's common to see people wearing new clothes, often in vibrant colors. Markets bustle with activity as people shop for gifts, decorations, and ingredients for special Diwali sweets and savories.

      Diwali is not just a Hindu festival; it's celebrated by Jains, Sikhs, and some Buddhists, each with their own historical and cultural significance. This diversity adds to the richness of the celebration, making it a truly pan-Indian festival that brings communities together.

      As we celebrate Diwali, let's remember its deeper meaning – the triumph of light over darkness in all aspects of our lives. It's a time for reflection, renewal, and spreading joy and positivity to all around us.
    `,
    author: "Priya Sharma",
    date: "2023-10-15",
    imageUrl: "/placeholder.svg?height=400&width=600",
    festival: "Diwali",
  },
  {
    id: "2",
    title: "Holi: Celebrating Colors and Unity",
    excerpt: "Dive into the vibrant world of Holi, the festival that paints India in a rainbow of colors.",
    content: `
      Holi, often called the "Festival of Colors," is one of India's most exuberant and joyous celebrations. This spring festival is a time when people come together to play with colors, forgetting all differences and embracing unity in diversity.

      The festival of Holi has its roots in Hindu mythology, particularly the story of Prahlad and Holika. It symbolizes the triumph of good over evil and is celebrated on the day after the full moon in the month of Phalguna (usually falling in March).

      The festivities begin on the eve of Holi with Holika Dahan, where bonfires are lit to commemorate the burning of Holika and the salvation of Prahlad. People gather around the bonfire, performing rituals and praying for the destruction of evil.

      The main day of Holi is a carnival of colors. People of all ages take to the streets, smearing each other with colored powders (gulal) and drenching one another with water guns and water-filled balloons. The air is filled with laughter, music, and the vibrant hues of the colors.

      Traditional Holi sweets and beverages are an integral part of the celebration. Gujiya, a sweet dumpling filled with khoya and dried fruits, is a favorite. Thandai, a cool milk-based drink often laced with bhang (cannabis), is also popular, though its consumption should be moderate and responsible.

      In recent years, there has been a growing awareness about using eco-friendly and skin-safe colors. Many people now opt for natural colors made from flowers and herbs, ensuring that the celebration doesn't harm the environment or people's health.

      Holi is not just about external colors; it's about adding color to life itself. It's a time to mend broken relationships, forgive past mistakes, and renew bonds of friendship and family. The festival teaches us to embrace life in all its hues and to spread joy and love.

      As we celebrate Holi, let's remember its essence of unity, forgiveness, and renewal. Let's color our world with love, respect, and harmony, making every day as vibrant as Holi itself.
    `,
    author: "Rahul Gupta",
    date: "2023-02-28",
    imageUrl: "/placeholder.svg?height=400&width=600",
    festival: "Holi",
  },
  {
    id: "3",
    title: "Navratri: Nine Nights of Divine Celebration",
    excerpt:
      "Discover the spiritual significance and cultural richness of Navratri, a festival dedicated to the divine feminine.",
    content: `
      Navratri, literally meaning "nine nights," is one of the most revered and widely celebrated festivals in India. This festival is dedicated to the worship of the divine feminine, particularly the goddess Durga and her various forms.

      The festival spans nine nights (and ten days), with each day dedicated to a different form of the goddess. These nine forms, known as Navdurga, represent different aspects of the divine feminine energy:

      1. Shailaputri - Daughter of the Mountains
      2. Brahmacharini - The One who practices devout austerity
      3. Chandraghanta - The One who bears the moon in her necklace
      4. Kushmanda - The One who created the universe
      5. Skandamata - The mother of Skanda (Kartikeya)
      6. Katyayani - The One who incarnated to kill the demon Mahishasura
      7. Kalaratri - The dark night
      8. Mahagauri - The fair one
      9. Siddhidatri - The giver of mystic powers

      The celebration of Navratri varies across different regions of India. In North India, it's often associated with Ramlila, the dramatic reenactment of scenes from the Ramayana. The festival culminates in Dussehra, celebrating Lord Rama's victory over Ravana.

      In Western India, particularly in Gujarat, Navratri is celebrated with vibrant Garba and Dandiya Raas dances. People gather in large numbers, dressed in colorful traditional attire, to dance in circles to the rhythmic beat of music and clapping.

      In Eastern India, especially in Bengal, the festival is known as Durga Puja. Elaborate pandals (temporary structures) are set up to house beautiful idols of Goddess Durga. The last four days of Navratri are marked by grand celebrations, cultural programs, and feasts.

      Fasting is an integral part of Navratri for many devotees. Some observe a complete fast, while others abstain from certain foods. Special Navratri recipes, often made without onion and garlic, are prepared during this time.

      The color of each day of Navratri holds significance, and many people choose to wear clothes matching the color of the day:

      - Day 1: Orange
      - Day 2: White
      - Day 3: Red
      - Day 4: Royal Blue
      - Day 5: Yellow
      - Day 6: Green
      - Day 7: Grey
      - Day 8: Purple
      - Day 9: Peacock Green

      Navratri is not just a religious observance; it's a celebration of life, energy, and the power of good over evil. It's a time for spiritual reflection, cultural expression, and community bonding.

      As we celebrate Navratri, let's embrace the divine feminine energy within us all, striving for strength, wisdom, and compassion in our lives.
    `,
    author: "Anita Desai",
    date: "2023-09-25",
    imageUrl: "/placeholder.svg?height=400&width=600",
    festival: "Navratri",
  },
]

