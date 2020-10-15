function loadPortfolio(){
  console.log(data);
  loadPortfolioFilters();
  var portfolioContainer = document.getElementById('portfolio-container');
  data.forEach(element => {
    var col = document.createElement('div');
    col.classList.add('col-lg-4', 'col-md-6', 'portfolio-item', `filter-${element.filterCategory}`);
    col.addEventListener('click',()=>$(`#${element.id}`).trigger('click'));
    portfolioContainer.appendChild(col);
    var img = document.createElement('img');
    img.src = `../assets/img/portfolio/${element.id}/1.jpg`;
    img.classList.add('img-fluid');
    img.alt = element.title;
    col.appendChild(img);
    var info = document.createElement('div');
    info.classList.add('portfolio-info');
    col.appendChild(info);
    var title = document.createElement('h4');
    title.innerText = element.title;
    info.appendChild(title);
    var discription = document.createElement('p');
    discription.innerText = element.shortDescription;
    info.appendChild(discription);
    var a = document.createElement('a');
    a.href = `../assets/img/portfolio/${element.id}/1.jpg`;
    a.setAttribute('data-gall',element.id);
    a.id=element.id;
    a.classList.add('venobox','preview-link');
    a.title = `صورة 1`;
    info.appendChild(a);
    for (let index = 2; index <= element.imgCount; index++) {
      var a = document.createElement('a');
      a.href = `../assets/img/portfolio/${element.id}/${index}.jpg`;
      a.setAttribute('data-gall',element.id);
      a.classList.add('venobox','preview-link');
      a.title = `صورة ${index}`;
      info.appendChild(a);
    }
    var a = document.createElement('a');
    a.href = `portfolio-details.html#${element.id}`;
    a.classList.add('details-link');
    a.title = 'التفاصيل';
    a.innerHTML = '<i class="bx bx-link"></i>';
    info.appendChild(a);
});
}

function loadPortfolioFilters(){
  var portfolioFilter = document.getElementById('portfolio-filter');
  var filters = {};
  data.map(item => {
    if (item.filterCategory in Object.keys(filters)) 
    return;
    filters[item.filterCategory]=item.category;
    console.log("item",item.category);
  })
  console.log("filters",filters);
  Object.keys(filters).sort(compare).forEach(item =>{
    var li = document.createElement('li');
    li.setAttribute('data-filter',`.filter-${item}`);
    li.innerText =filters[item];
    portfolioFilter.appendChild(li);
  })
}
function compare(a, b){
  if(a < b){
          return -1;
  }else if(a > b){
          return 1;
  }else{
    return 0;
  }
}
loadPortfolio();