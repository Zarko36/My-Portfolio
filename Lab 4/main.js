const apiKey = 'eR7Di06MA1iLQ6NqE9LvlSnxTuKG1mUd';
const apiUrlBase = 'https://api.nytimes.com/svc/mostpopular/v2/';
const articleListElement = document.getElementById('article-list');

const filters = {
    timeFrame: '1',
    sortBy: 'viewed',
};

async function getArticles() {
    let apiUrl = '';
    switch (filters.sortBy) {
        case 'viewed':
            apiUrl = `${apiUrlBase}viewed/${filters.timeFrame}.json?api-key=${apiKey}`;
            break;
        case 'shared':
            apiUrl = `${apiUrlBase}shared/${filters.timeFrame}/facebook.json?api-key=${apiKey}`;
            break;
        case 'emailed':
            apiUrl = `${apiUrlBase}emailed/${filters.timeFrame}.json?api-key=${apiKey}`;
            break;
        default:
            console.error('Invalid sort by filter');
            return;
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const articles = data.results;
        renderArticles(articles);
    } catch (error) {
        console.error(error);
    }
}

function renderArticles(articles) {
    articleListElement.innerHTML = '';
    articles.slice(0, 5).forEach((article) => {
        try {
            const articleElement = document.createElement('div');
            articleElement.className = 'article';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.abstract}</p>
                <p>${formatDate(article.published_date)}</p>
            `;
            articleListElement.appendChild(articleElement);
        } catch (error) {
            console.error(error);
        }
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function updateFilters() {
    filters.timeFrame = document.getElementById('time-frame').value;
    filters.sortBy = document.getElementById('sort-by').value;
    getArticles();
}

document.getElementById('filter-form').addEventListener('change', updateFilters);

getArticles();