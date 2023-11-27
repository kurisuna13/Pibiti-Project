const dummy = [
  {
    "amiiboSeries": "Legend Of Zelda",
    "character": "Zelda",
    "gameSeries": "The Legend of Zelda",
    "head": "01010300",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010300-04140902.png",
    "name": "Zelda & Loftwing",
    "release": {
      "au": "2021-07-16",
      "eu": "2021-07-16",
      "jp": "2021-07-16",
      "na": "2021-07-16"
    },
    "tail": "04140902",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Legend Of Zelda",
    "character": "Zelda",
    "gameSeries": "The Legend of Zelda",
    "head": "01010000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03560902.png",
    "name": "Zelda",
    "release": {
      "au": "2017-03-03",
      "eu": "2017-03-03",
      "jp": "2017-03-03",
      "na": "2017-03-03"
    },
    "tail": "03560902",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Legend Of Zelda",
    "character": "Zelda",
    "gameSeries": "The Legend of Zelda",
    "head": "01010000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03520902.png",
    "name": "Toon Zelda - The Wind Waker",
    "release": {
      "au": "2016-12-03",
      "eu": "2016-12-02",
      "jp": "2016-12-01",
      "na": "2016-12-02"
    },
    "tail": "03520902",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Legend Of Zelda",
    "character": "Zelda",
    "gameSeries": "The Legend of Zelda",
    "head": "01010000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-04190902.png",
    "name": "Zelda - Tears of the Kingdom",
    "release": {
      "au": "2023-11-03",
      "eu": "2023-11-03",
      "jp": "2023-11-03",
      "na": "2023-11-03"
    },
    "tail": "04190902",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Super Smash Bros.",
    "character": "Zelda",
    "gameSeries": "The Legend of Zelda",
    "head": "01010000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-000e0002.png",
    "name": "Zelda",
    "release": {
      "au": "2014-12-12",
      "eu": "2014-12-19",
      "jp": "2014-12-06",
      "na": "2014-12-14"
    },
    "tail": "000e0002",
    "type": "Figure"
  },
  {
    "amiiboSeries": "Mario Sports Superstars",
    "character": "Metal Mario",
    "gameSeries": "Mario Sports Superstars",
    "head": "09d00301",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00301-02bb0e02.png",
    "name": "Metal Mario - Tennis",
    "release": {
      "au": "2017-03-11",
      "eu": "2017-03-10",
      "jp": "2017-03-30",
      "na": "2017-03-24"
    },
    "tail": "02bb0e02",
    "type": "Card"
  }
];


let cardList = document.getElementById('card-list');
let newHtml = ``;

function fetchData(){
  dummy.forEach(el => {
    newHtml += `
  <div class="col-4 mt-2">
    <div class="card-nendo" style="width: 100%; padding: 20px; border: 2px solid black; min-height: 23 rem;">
      <img src="${el.image}}" class="card-img-top" alt="..." style="aspect-ratio: 3 / 4; object-fit: contain;>
      <div class="card-header">
        <a class="custom-hyperlink" href="">
        <p class="card-text text-center">${el.name}</p>
        </a>
      </div>
    </div>
  </div>`
});

  cardList.innerHTML = newHtml;
}

function setCharacter(event) {
  let newHtml = ``;
  input_select_option = event.value;
  let hasil_filter = dummy.filter(el=> {
    let character = el.character();
    return character.includes(input_select_option());
  });
  
  hasil_filter.forEach(el =>{
    newHtml += `
    <div class="col-4 mt-2">
      <div class="card-nendo" style="width: 100%; padding: 20px; border: 2px solid black; min-height: 23 rem;">
        <img src="${el.image}}" class="card-img-top" alt="..." style="aspect-ratio: 3 / 4; object-fit: contain;>
        <div class="card-header">
          <a class="custom-hyperlink" href="">
          <p class="card-text text-center">${el.name}</p>
          </a>
        </div>
      </div>
    </div>`
  });

  cardList.innerHTML = newHtml4
}


cardList.innerHTML = newHtml

fetchData ();