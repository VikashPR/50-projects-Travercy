const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3d21ce49abb89fb75081fbf726f18b8e`;
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=3d21ce49abb89fb75081fbf726f18b8e&query="`;

//  NOTE api_key_for_TMDB=3d21ce49abb89fb75081fbf726f18b8e

//  NOTE api_key_for_google_search=AIzaSyA4LgfB30RjtyNsWmctSgv7lBzah1DMYL8 

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// get initial movie 
getMovies(API_URL);

async function getMovies(url)
{
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results);

}
function showMovies(movies)
{
    main.innerHTML = "";
    movies.forEach(movie => {
        const { title , poster_path , vote_average , overview , release_date} = movie

        const movieEl = document.createElement("div");

        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <a href="https://www.google.com/search?client=firefox-b-d&q=${title}"><img src="${IMG_PATH + poster_path}" alt="${title}"></a>

            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote)
{
    if(vote >= 8 )
    {
        return "green";
    }
    else if(vote >5 && vote<= 8)
    {
        return "orange";
    }
    else
    {
        return "red";
    }
}
form.addEventListener('submit',(e)=> 
{
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== "")
    {
        getMovies(SEARCH_API+searchTerm);
        search.value = "";
    }
    else
    {
        window.location.reload();
    }
});



