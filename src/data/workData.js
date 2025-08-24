export const workData = [
    {
        id: 1,
        category: 'men',
        thumbnail: "https://i.postimg.cc/4dPnHqjW/shirt-men.jpg",
        images: [
            'https://i.postimg.cc/4dPnHqjW/shirt-men.jpg',
            'https://i.postimg.cc/zX6wM7qF/shirt-men-2.jpg',
            'https://i.postimg.cc/tJf9kKw8/shirt-men-3.jpg'
        ],
        title: 'Classic Blue Shirt',
        detailsTitle: 'Men’s Classic Blue Shirt',
        description:
            'A timeless slim-fit shirt made with 100% cotton, perfect for casual and formal occasions.',
        created: '22 Apr 2025',
        technologies: 'Sizes: M, L, XL',
        price: 45,
        link: '/product/1'
    },
    {
        id: 2,
        category: 'women',
        thumbnail: "https://i.postimg.cc/vH7pM4RL/dress-women.jpg",
        images: [
            'https://i.postimg.cc/vH7pM4RL/dress-women.jpg',
            'https://i.postimg.cc/yxVn5R6C/dress-women-2.jpg',
            'https://i.postimg.cc/d0HP6K7z/dress-women-3.jpg'
        ],
        title: 'Summer Floral Dress',
        detailsTitle: 'Women’s Summer Floral Dress',
        description:
            'Lightweight and breathable floral dress, ideal for summer outings.',
        created: '15 Apr 2025',
        technologies: 'Sizes: S, M, L',
        price: 65,
        link: '/product/2'
    },
    {
        id: 3,
        category: 'accessories',
        thumbnail: "https://i.postimg.cc/7LPxTt9Y/bag.jpg",
        images: [
            'https://i.postimg.cc/7LPxTt9Y/bag.jpg',
            'https://i.postimg.cc/GtF8Z7bt/bag-2.jpg',
            'https://i.postimg.cc/zD0X7h6k/bag-3.jpg'
        ],
        title: 'Leather Handbag',
        detailsTitle: 'Premium Leather Handbag',
        description:
            'Stylish handbag crafted from genuine leather with gold-tone details.',
        created: '10 Apr 2025',
        technologies: 'One Size',
        price: 120,
        link: '/product/3'
    },
    {
        id: 4,
        category: 'men',
        thumbnail: "https://i.postimg.cc/sxKvy0tB/jacket.jpg",
        images: [
            'https://i.postimg.cc/sxKvy0tB/jacket.jpg',
            'https://i.postimg.cc/fT7gNwmc/jacket-2.jpg',
            'https://i.postimg.cc/7Y9C7xCg/jacket-3.jpg'
        ],
        title: 'Denim Jacket',
        detailsTitle: 'Casual Denim Jacket',
        description:
            'A classic denim jacket with a modern cut for a stylish look.',
        created: '4 Apr 2025',
        technologies: 'Sizes: M, L, XL',
        price: 75,
        link: '/product/4'
    }
];
export var cartCheckOut = [];


let subscribers = [];

export function subscribeCart(callback) {
    subscribers.push(callback);
}

export function unsubscribeCart(callback) {
    subscribers = subscribers.filter(cb => cb !== callback);
}

export function notifyCartUpdate() {
    subscribers.forEach(cb => cb([...cartCheckOut]));
}
