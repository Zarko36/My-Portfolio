// Worked on by:
// Joel Muniz - jmuni017
// Isaac Castro - icast065
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
        // console.log(articles);
        renderArticles(articles);
    } catch (error) {
        console.error(error);
    }
}

function renderArticles(articles) {
    articleListElement.innerHTML = '';
    articles.slice(0, 5).forEach((article, index) => {
        try {
            const articleElement = document.createElement('div');
            articleElement.className = 'article';
            articleElement.innerHTML = `
                <div class="article-header">
                    <h2>${index + 1}) ${article.title}</h2>
                    <p class="published-date">${formatDate(article.published_date)}</p>
                </div>
                <div class="article-content">
                    <img src="${article.media.length!== 0? article.media[0]["media-metadata"][0].url : ""}" alt="Ratatouille pfp" class="user-pfp">
                    <p>${article.abstract}</p>
                </div>
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
    const sortByRadioButtons = document.getElementsByName('sort-by');
    let sortByValue;
    for (const radioButton of sortByRadioButtons) {
        if (radioButton.checked) {
            sortByValue = radioButton.value;
            break;
        }
    }

    const timeFrameRadioButtons = document.getElementsByName('time-frame');
    let timeFrameValue;
    for (const radioButton of timeFrameRadioButtons) {
        if (radioButton.checked) {
            timeFrameValue = radioButton.value;
            break;
        }
    }

    filters.sortBy = sortByValue;
    filters.timeFrame = timeFrameValue;
    getArticles();
}

document.getElementById('filter-form').addEventListener('change', updateFilters);

getArticles();
// Worked on by:
// Joel Muniz - jmuni017
// Isaac Castro - icast065