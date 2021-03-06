const hamburger = document.querySelector('.hamburger');
const mobMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-button');
const listItem = document.querySelector('.menu-list');
const speakersList = document.querySelector('.performers1');

hamburger.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  mobMenu.classList.remove('active');
});

listItem.addEventListener('click', () => {
  mobMenu.classList.remove('active');
});

const guests = [{
  name: 'Abenezer Desta',
  discription: 'Lorem ipsum dolor sit elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quia.',
  title: 'Singer',
  image: './img/abeni.jfif',
  class: 'visible',
},
{
  name: 'Birhanu Tekle',
  discription: 'Lorem ipsum dolor sit elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quia.',
  title: 'Singer',
  image: './img/birhanu.jpg',
  class: 'visible',
},
{
  name: 'Hanan Mahidi',
  discription: 'Lorem ipsum dolor sit elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quia.',
  title: 'singer',
  image: './img/hanan.jfif',
  class: 'hidden1',
},
{
  name: 'Israel',
  title: 'Musician',
  discription: 'Lorem ipsum dolor sit elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quia.',
  image: './img/israel.jfif',
  class: 'hidden2',
},
{
  name: 'Exodus',
  title: 'Musician',
  discription: 'Lorem ipsum dolor sit elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quia.',
  image: './img/exo.png',
  class: 'hidden3',
},
{
  name: 'Exodus',
  title: 'Musician',
  discription: 'Lorem ipsum dolor sit elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quia.',
  image: './img/exo.png',
  class: 'hidden4',
},
];

document.addEventListener('DOMContentLoaded', () => {
  speakersList.innerHTML = guests.map((guest) => `
 <div class="performers-2 ${guest.class}">
            
            <div id="" class="performer1">
                <div class="img-container">
                    <img class="performer-img" src="${guest.image}" alt="">
                </div>
                <div class="performer-content">
                    <h4 class="performer-name content">${guest.name}</h4>
                    <p class="performer-title content">${guest.title}</p>
                    <hr class="hr-2">
                    <p class="performer-description content">${guest.discription}</p>
                </div>
            </div>
        </div>
        `).join('');
});
