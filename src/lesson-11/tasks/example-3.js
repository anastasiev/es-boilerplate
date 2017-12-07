import fetch from 'isomorphic-fetch';

let resources = [];
let urls = [
    'https://newsapi.org/v2/sources?country=ru&apiKey=9d3a843d872a47f48cb9a0979960e195',
    'https://newsapi.org/v2/sourcsges?country=ca&apiKey=9d3a843d872a47f48cb9a0979960e195',
    'https://newsapi.org/v2/sources?country=us&apiKey=9d3a843d872a47f48cb9a0979960e195'
];
let receiveResponse = response => {
    if (response.status >= 400) {
        return null;
    }
    return response.json();
};
let handleStories = stories => {
    if(stories === null){
        return;
    }
    stories.sources.forEach(s =>{
        resources.push({
            name: s.name,
            description: s.description
        })
    });
};
let chain = Promise.resolve();
urls.forEach(url => {
   chain = chain.then(() => fetch(url)).then(receiveResponse).then(handleStories)
});
chain.then(() => console.log(resources));
