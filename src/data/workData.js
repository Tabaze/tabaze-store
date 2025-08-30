export const workData = [
    {
        id: 1,
        category: "men",
        thumbnail: require("../assets/images/the-boston-gray.jpeg"),
        images: [
            require("../assets/images/the-boston-gray.jpeg"),
            require("../assets/images/the-boston-red.jpeg"),
            require("../assets/images/the-boston-blue.jpeg"),
            require("../assets/images/the-boston-green.jpeg"),
        ],
        title: "The Boston",
        detailsTitle: "The Boston",
        description:
            "A timeless slim-fit shirt made with 100% cotton, perfect for casual and formal occasions.",
        created: "22 Apr 2025",
        sizes: "Sizes: M, L, XL",
        price: 45,
        link: "/product/1",
    },
    {
        id: 2,
        category: 'women',
        thumbnail: "https://i.postimg.cc/vH7pM4RL/dress-women.jpg",
        images: [
            "https://i.postimg.cc/vH7pM4RL/dress-women.jpg",
            'https://i.postimg.cc/vH7pM4RL/dress-women.jpg',
            'https://i.postimg.cc/yxVn5R6C/dress-women-2.jpg',
            'https://i.postimg.cc/d0HP6K7z/dress-women-3.jpg'
        ],
        title: 'Summer Floral Dress',
        detailsTitle: 'Women’s Summer Floral Dress',
        description:
            'Lightweight and breathable floral dress, ideal for summer outings.',
        created: '15 Apr 2025',
        sizes: 'Sizes: S, M, L',
        price: 65,
        link: '/product/2'
    },
    {
        id: 3,
        category: 'accessories',
        thumbnail: "https://i.postimg.cc/7LPxTt9Y/bag.jpg",
        images: [
            "https://i.postimg.cc/7LPxTt9Y/bag.jpg",
            'https://i.postimg.cc/7LPxTt9Y/bag.jpg',
            'https://i.postimg.cc/GtF8Z7bt/bag-2.jpg',
            'https://i.postimg.cc/zD0X7h6k/bag-3.jpg'
        ],
        title: 'Leather Handbag',
        detailsTitle: 'Premium Leather Handbag',
        description:
            'Stylish handbag crafted from genuine leather with gold-tone details.',
        created: '10 Apr 2025',
        sizes: 'One Size',
        price: 120,
        link: '/product/3'
    },
    {
        id: 4,
        category: 'men',
        thumbnail: "https://i.postimg.cc/sxKvy0tB/jacket.jpg",
        images: [
            "https://i.postimg.cc/sxKvy0tB/jacket.jpg",
            'https://i.postimg.cc/sxKvy0tB/jacket.jpg',
            'https://i.postimg.cc/fT7gNwmc/jacket-2.jpg',
            'https://i.postimg.cc/7Y9C7xCg/jacket-3.jpg'
        ],
        title: 'Denim Jacket',
        detailsTitle: 'Casual Denim Jacket',
        description:
            'A classic denim jacket with a modern cut for a stylish look.',
        created: '4 Apr 2025',
        sizes: 'Sizes: M, L, XL',
        price: 75,
        link: '/product/4'
    }
];
export const categories = [
    {
        id: 1,
        title: "Men",
        desc: "Style essentials for every occasion.",
        thumb: "https://images.unsplash.com/photo-1589902860314-e910697dea18?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bg: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=480",
    },
    {
        id: 2,
        title: "Women",
        desc: "Trendy and timeless fashion pieces.",
        bg: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
        thumb: "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        title: "Shoes",
        desc: "From sneakers to formal footwear.",
        bg: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=941&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // verified bg
        thumb: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // verified thumb
    },
    {
        id: 4,
        title: "Hoodies",
        desc: "Complete your look with bags, belts, and more.",
        bg: "https://images.unsplash.com/photo-1512400930990-e0bc0bd809df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        thumb: "https://images.unsplash.com/photo-1673092147872-5ddb03194341?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
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
