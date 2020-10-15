 var portfolio = window.location.hash;
 var workId = portfolio.replace('#','');
var currentObj = data.filter(item=> {return workId===item.id })[0];
document.getElementById('workName').innerText += ' '+ currentObj.title;
document.getElementById('workTitle').innerText = currentObj.title;

var carousel= document.getElementById('carousel');
for (let index = 1; index <= currentObj.imgCount; index++) {
  var img = document.createElement('img');
  img.src = `../assets/img/portfolio/${currentObj.id}/${index}.jpg`;
  img.classList.add('img-fluid');
  carousel.appendChild(img);
}

var info = document.getElementById('descriptionInfo');
info.innerHTML = `<li><strong>${document.documentElement.lang === 'ar'?'التصنيف': 'Category'}</strong>: ${currentObj.category}</li>`

document.getElementById('descriptionTitle').innerText = currentObj.shortDescription;
// document.getElementById('descriptionBody').innerText = currentObj.descriptionBody;


