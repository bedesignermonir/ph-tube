// Fetch Category
function categoriesLoad() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => categoriesShow(data.categories))
        .catch(error => console.error(error)
        )
}


// Category Show on UI
function categoriesShow(data) {
    data.forEach((items) => {
        const categoryDiv = document.getElementById('category');
        const categoryButton = document.createElement('button');
        categoryButton.innerText = items.category;
        categoryButton.classList = "btn"
        categoryDiv.append(categoryButton);

    });
}


categoriesLoad()



// video Fetch
const videoLoad = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => videosData(data.videos))
        .catch(error => console.error(error))
}

// function to convert seconds to days and hours

function makeDateTime(seconds) {
    const days = parseInt(seconds / (24 * 3600));
    seconds %= 24 * 3600;

    let hours = parseInt(seconds / 3600);
    seconds %= 3600;

    const minutes = parseInt(seconds / 60);
    seconds %= 60;
    return `${days} days ${hours} hours ago`;

}


// video show on ui
const videosData = (data) => {
    data.forEach((item) => {
        const section = document.getElementById('video');
        const div = document.createElement('div');
        div.classList = "card bg-base-100 w-96 shadow-sm"
        div.innerHTML = `
        <figure class="h-[200px] relative">
    <img
      src=${item.thumbnail} class="h-full w-full object-cover" />
${item.others.posted_date?.length === 0 ? "" : `<span class="absolute right-2 bottom-2 bg-black text-white rounded p-1">
    ${makeDateTime(item.others.posted_date)}`
            }

      
      
      </span>
  </figure>
  <div class="px-0 py-2 flex">
  <img class="w-10 h-10 rounded-full object-cover" src= ${item.authors[0].profile_picture}/>
   <div class="px-5">
    <h2 class="card-title">${item.title}</h2>
    <div class="flex items-center gap-2">
    <p class="text-gray-400">${item.authors[0].profile_name}</p>
    ${item.authors[0].verified ? '<img class="h-5 w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" />' : ""}
    </div>
   </div>
   
  </div>
        `

        section.append(div)

        console.log(item)



    })
}


videoLoad();