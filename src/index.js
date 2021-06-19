import './scss/main.scss'

let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
};

const reviewsData = [
    {
        img: "assets/reviews/review_2.jpg",
        name: "Denise",
        description: "Great toothbrush with excellent whitening capabilities, it works much better than a regular brush at cleaning. This whitens better than those strips you can get too."
    },
    {
        img: "assets/reviews/review_3.jpg",
        name: "Andrew",
        description: "So easy to use. I normally have sensitive teeth, but I didn’t notice any sensitivity or pain when using it. Being a massive coffee drinker, I also bought a whitening gel for use with this product and I really love the teeth whitening. I’ve received several compliments on how white my teeth are, after using the product for 2 weeks. Great results so far!"
    },
    {
        img: "assets/reviews/review_4.jpg",
        name: "Mark",
        description: "Very easy to use and it fits perfectly in my mouth. I love the feeling when I touch my teeth with my tongue. My teeth feel like they are super smooth and much cleaner than with a regular toothbrush. I’m also doing the teeth whitening and I can already see my teeth gradually turning white!"
    },
    {
        img: "assets/reviews/review_5.jpg",
        name: "Anne",
        description: "Fast shipping and the product works as described!"
    },
    {
        img: "assets/reviews/review_6.jpg",
        name: "Jeff",
        description: "Mine arrived pretty fast! I have used it for past couple weeks, and I must say that it’s pretty convenient. My teeth feel really smooth after using it. Works better than I expected."
    },
    {
        img: "assets/reviews/review_7.jpg",
        name: "Heather",
        description: "Delivery took more than 20 days... Other than that, I’m pleased with the product! I’ve got very sensitive gums so this perfect for me! It cleans faster and it’s more comfortable than a regular toothbrush which often makes my gums bleed. Recommend it!"
    },
    {
        img: "assets/reviews/review_8.jpg",
        name: "Peter",
        description: "My teeth have never been this clean before! I feel very good with this product. It’s super easy to use, waterproof, and has the perfect design for my mouth. I like it!"
    },
    {
        img: "assets/reviews/review_9.jpg",
        name: "Brad",
        description: "It only takes about 30-40 seconds to finish brushing my teeth, which is so handy! I really hated brushing my teeth before going to bed but this made it so fast and easy. I recommend this to anyone!"
    },
    {
        img: "assets/reviews/review_10.jpg",
        name: "Matthew",
        description: "I was kind of skeptical buying this product, despite the great reviews. I felt that this type of product was a gimmick. However, the results certainly speak for themselves! So far, I have used it for 3 weeks, my teeth feel super clean and are much whiter! I am so pleased with this."
    },
]


const generateReviews = () => {
    const reviewsList = document.querySelector(".reviews-list");
    const itm = reviewsList.lastElementChild;

    reviewsData.forEach(function (reviewItem) {
        const cln = itm.cloneNode(true);

        cln.querySelector(".review-item__img img").src = reviewItem.img
        cln.querySelector(".review-item__name").innerHTML = reviewItem.name
        cln.querySelector(".review-item__description").innerHTML = reviewItem.description

        reviewsList.append(cln);
    });
}

generateReviews()