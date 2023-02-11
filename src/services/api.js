import axios from "axios";


const instance = axios.create({
    baseURL: 'https://pixabay.com/api',
    params: {
        key: '32211604-d2703e4dbac144834055a08da',
        orientation: 'horizontal',
        per_page: 12,
    },
    
});

export const fetchApiImg = async (search, page) => {
    const { data } = await instance.get('/', {
        params: {
            q: search,
            page,
        },
    });
    return data;
};


// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12