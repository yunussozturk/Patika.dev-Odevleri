// menude bulunacak olan yemek bilgileri
const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

// Butonlar oluştur ve menüyü ekrana yazdır
var cont = document.querySelector('#cont')                  
var sect = document.querySelector('#sect')                 
   
  var button = document.querySelector('#button')
  
  var buton1 = document.createElement("BUTTON");
  buton1.classList.add("btn-item")
  buton1.setAttribute("id","btn1");
  buton1.addEventListener("click", fonk1);
  var t1 = document.createTextNode("All");
  buton1.appendChild(t1)

  var buton2 = document.createElement("BUTTON");
  buton2.classList.add("btn-item")
  buton2.setAttribute("id","btn2")
  buton2.addEventListener("click", fonk2);
  var t2 = document.createTextNode("Korea");
  buton2.appendChild(t2)

  var buton3 = document.createElement("BUTTON");
  buton3.classList.add("btn-item")
  buton3.setAttribute("id","btn3")
  buton3.addEventListener("click", fonk3);
  var t3 = document.createTextNode("Japan");
  buton3.appendChild(t3)

  var buton4 = document.createElement("BUTTON");
  buton4.classList.add("btn-item")
  buton4.setAttribute("id","btn4")
  buton4.addEventListener("click", fonk4);
  var t4 = document.createTextNode("China");
  buton4.appendChild(t4)
 
  button.appendChild(buton1)
  button.appendChild(buton2)
  button.appendChild(buton3)
  button.appendChild(buton4)


//başlangıç ve butona göre menüyü oluştur
function menuFilter(menu){

    menu.forEach(product =>{ 
    var sectionDOM = document.querySelector('#section')

    var div1 = document.createElement("div")
    div1.classList.add("col-sm-6")
   
    var div2 = document.createElement("div")
    div2.classList.add("row","menu-items","menu-text")
    
    var div3 = document.createElement("div")
    div3.classList.add("col-sm-3")
  
    var resim = document.createElement("IMG")
    resim.classList.add("photo")
    resim.setAttribute("src", product.img)
    
    var div4 =  document.createElement("div") 
    div4.classList.add("col-sm-9")
  
    var div5 = document.createElement("div")
    div5.classList.add("menu-title","menu-info")
    var baslik1 = document.createElement("h4")
    baslik1.textContent = product.title;
    var span = document.createElement("span")
    var baslik2 = document.createElement("h4")
    baslik2.textContent = product.price;
   
    var div6 = document.createElement("div")
    div6.classList.add("menu-text","menu-info")
    div6.textContent = product.desc;
  
    span.appendChild(baslik2)
    div5.appendChild(baslik1)
    div5.appendChild(span)
  
    div4.appendChild(div5)
    div4.appendChild(div6)
  
    div3.appendChild(resim)
  
    div2.appendChild(div3)
    div2.appendChild(div4)
  
    div1.appendChild(div2)
  
    sectionDOM.appendChild(div1)
}) 

sect.appendChild(button)                                    
sect.appendChild(sectionDOM)

cont.appendChild(sect)   
}

//Bütün menü ile başla
menuFilter(menu);

//all butonuna tıklayınca
function fonk1(){
    menuFilter(menu);  
}

//Korea butonuna tıklayınca
function fonk2(){
    var korea = menu.filter(item => item.category == "Korea")
    menuFilter(korea);  
}

//Japan butonuna tıklayınca
function fonk3(){
    var japan = menu.filter(item => item.category == "Japan")
    menuFilter(japan);    
}

//China butonuna tıklayınca
function fonk4(){
    var china = menu.filter(item => item.category == "China")
    menuFilter(china);   
}
