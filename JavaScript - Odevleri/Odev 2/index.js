// bir değişken oluşturduk. bu değişken localStorage key'i items ise bu argümanı getir ve varsa parse edip ver ; değilse boş.(burası kontrol mekanızması gibi)
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
// bir localStorage oluşturalım ve key = items olsun. bunun değeri kullanabilmemiz için stringe çevrilsin 
localStorage.setItem('items', JSON.stringify(itemsArray));
// bir değişken oluşturduk. localStorage ' ı items olan string değeri parse edip nesneye çevirdik
const data = JSON.parse(localStorage.getItem('items'));


/* Bir liste öğesine tıklandığında "işaretli" bir sembol ekleyin */ 
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {                          // li etiketi tıklanıyorsa
    ev.target.classList.toggle('checked');                   // toggle ile checked sınıfına geçir yapar
  }
}, false);


// toast için işlemler yapıldı
var toastBasarili = document.getElementById('mesajgoster')         // input dolu toast yapımız
var toastBasarisiz = document.getElementById('mesajgoster2')       // input boş toast yapımız

const liMaker = text => {      
    var li = document.createElement("li");                        // li oluştur 
    li.textContent = text;                           
    document.getElementById("myUL").appendChild(li);             // ul'a li'yi ekle
    // eklediğimiz yeni li'lere x işareti ekleyeceğiz (satır 5-9 arasında aynısı var)
    var span = document.createElement("SPAN");                                 
    var txt = document.createTextNode("\u00D7");
    span.className = "close1";
    span.appendChild(txt);
    span.onclick = removeButton;
    li.appendChild(span);
}


var abc;
var input = document.querySelector('#myInput')
var todo = input.value

// ekle düğmesine bastığımızda yeni bir liste öğesi oluşturalım
function newElement() {
  var inputValue = document.getElementById("myInput").value;    // input'a yazılana erişimi sağla

  if(inputValue.trim() === ''){
    var toast = new bootstrap.Toast(toastBasarisiz)                // küçüktür toast yapımızı yerleştir
    toast.show()                                                     // toast'ı göster    
  }
  else{
    var toast = new bootstrap.Toast(toastBasarili)                // küçüktür toast yapımızı yerleştir
    toast.show()                                                     // toast'ı göster    
    
    itemsArray.push(inputValue);                                 //itemsArray 'e input değerini ekle.(burada nesne)
    localStorage.setItem('items', JSON.stringify(itemsArray));  // bu değere local storage özelliği ver ve kalıcı yap(burada string)    
    abc = liMaker(inputValue)
    document.getElementById("myInput").value = "";                // input'u sıfırla
  }
}

data.forEach(item => {                  
    liMaker(item);
  });

function removeButton(){
  var div = this.parentElement;
  div.style.display = "none";
}
