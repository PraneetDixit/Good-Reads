const books = [
    {
        id: 1,
        title: "Too Good to Be True: A Smart, Funny Will-They-Won’t-They Romance",
        author: "Prajakta Koli",
        coverImage:
            "https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "A delightful romantic comedy exploring the nuances of modern relationships.",
        price: 285.0,
    },
    {
        id: 2,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        coverImage:
            "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "Insights into how people think about money and make financial decisions.",
        price: 305.0,
    },
    {
        id: 3,
        title: "Dopamine Detox: A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things",
        author: "Thibaut Meurisse",
        coverImage:
            "https://m.media-amazon.com/images/I/71Q0U-8lxJS._SY466_.jpg",
        description:
            "A guide to overcoming distractions and enhancing focus in the modern world.",
        price: 190.0,
    },
    {
        id: 4,
        title: "My First Library: Boxset of 10 Board Books for Kids",
        author: "Wonder House Books",
        coverImage:
            "https://m.media-amazon.com/images/I/71K9CbNZPsL._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "A collection of 10 board books designed to introduce basic concepts to children.",
        price: 399.0,
    },
    {
        id: 5,
        title: "Simple, Not Easy: A No-Nonsense Guide to Fitness, Nutrition and Weight Loss",
        author: "Raj Ganpath",
        coverImage:
            "https://m.media-amazon.com/images/I/81RdXBjNrjL._SY466_.jpg",
        description:
            "A straightforward approach to achieving fitness and weight loss goals.",
        price: 305.0,
    },
    {
        id: 6,
        title: "Amma Diarylo Konni Pageelu",
        author: "Ravi Mantri",
        coverImage:
            "https://m.media-amazon.com/images/I/81rjyBm+UYL._SY466_.jpg",
        description:
            "A heartfelt collection of stories and experiences penned by the author.",
        price: 220.0,
    },
    {
        id: 7,
        title: "Atomic Habits",
        author: "James Clear",
        coverImage:
            "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "An exploration of how tiny changes can lead to remarkable personal and professional growth.",
        price: 579.0,
    },
    {
        id: 8,
        title: "Animal Tales From Panchtantra: Timeless Stories for Children From Ancient India",
        author: "Wonder House Books",
        coverImage:
            "https://m.media-amazon.com/images/I/81gTwYAhU7L._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "A beautifully illustrated collection of moral stories from ancient Indian literature.",
        price: 199.0,
    },
    {
        id: 9,
        title: "White Nights",
        author: "Fyodor Dostoyevsky",
        coverImage:
            "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "A classic novella exploring themes of love, loneliness, and dreams.",
        price: 124.0,
    },
    {
        id: 10,
        title: "Don't Believe Everything You Think",
        author: "Joseph Nguyen",
        coverImage:
            "https://m.media-amazon.com/images/I/715qi-cIbML._SY466_.jpg",
        description:
            "A guide to understanding and overcoming negative thought patterns.",
        price: 185.0,
    },
    {
        id: 11,
        title: "Ikigai: The Japanese Secret to a Long and Happy Life",
        author: "Francesc Miralles",
        coverImage:
            "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "An exploration of the Japanese concept of 'Ikigai' and its role in leading a fulfilling life.",
        price: 380.0,
    },
    {
        id: 12,
        title: "The Mountain Is You: Transforming Self-Sabotage Into Self-Mastery",
        author: "Brianna Wiest",
        coverImage:
            "https://m.media-amazon.com/images/I/71AHFDEpkdL._SY466_.jpg",
        description:
            "A deep dive into self-sabotage and strategies to overcome it for personal growth.",
        price: 261.0,
    },
    {
        id: 13,
        title: "World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books)",
        author: "Dale Carnegie",
        coverImage:
            "https://m.media-amazon.com/images/I/71K9CbNZPsL._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "A collection of four classic books offering insights into personal development and wealth creation.",
        price: 349.0,
    },
    {
        id: 14,
        title: "My First Book of Patterns Pencil Control",
        author: "Wonder House Books",
        coverImage:
            "https://m.media-amazon.com/images/I/71Ytm8A3piL._SY466_.jpg",
        description:
            "A practice book designed to help children develop pencil control and recognize patterns.",
        price: 129.0,
    },
    {
        id: 15,
        title: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy",
        coverImage:
            "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "An exploration of the untapped potential of the subconscious mind and its influence on our lives.",
        price: 149.0,
    },
    {
        id: 16,
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        coverImage:
            "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "What the rich teach their kids about money that the poor and middle class do not.",
        price: 365.0,
    },
    {
        id: 17,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        coverImage:
            "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "An exploration of the history of humanity, from the Stone Age to the modern era.",
        price: 499.0,
    },
    {
        id: 18,
        title: "Think Like a Monk",
        author: "Jay Shetty",
        coverImage:
            "https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "Train your mind for peace and purpose every day with lessons from a former monk.",
        price: 350.0,
    },
    {
        id: 19,
        title: "The Alchemist",
        author: "Paulo Coelho",
        coverImage:
            "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg",
        description:
            "A fable about following your dreams and listening to your heart.",
        price: 299.0,
    },
    {
        id: 20,
        title: "1984",
        author: "George Orwell",
        coverImage:
            "https://m.media-amazon.com/images/I/91qK2DSAXSL._SY466_.jpg",
        description:
            "A dystopian novel exploring themes of totalitarianism, surveillance, and individuality.",
        price: 220.0,
    },
];

export default books;
