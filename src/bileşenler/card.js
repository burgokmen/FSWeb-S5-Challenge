const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const div1 = document.createElement("div");
  div1.setAttribute("class", "card");

  const divHline = document.createElement("div");
  divHline.setAttribute("class", "headline");
  divHline.textContent = `${makale.anabaslik}`;

  const divAut = document.createElement("div");
  divAut.setAttribute("class", "author");

  div1.append(divHline, divAut);

  const divImgC = document.createElement("div");
  divImgC.setAttribute("class", "img-container");

  divAut.appendChild(divImgC);

  const img1 = document.createElement("img");
  img1.src = `${makale.yazarFoto}`;

  const span1 = document.createElement("span");
  span1.textContent = `${makale.yazarAdi}`;
  span1.textContent = " tarafından";

  divImgC.append(img1, span1);

  div1.addEventListener("click", function () {
    console.log(`${makale.anabaslik}`);
  });

  return div1;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  fetch(`http://localhost:5001/api/makaleler`)
    .then((response) => response.json())
    .then((value) => {
      console.log("value:", value);

      const keyNew = Object.keys(value);
      console.log("valkey:", keyNew);

      const valueNew = value[keyNew];
      console.log("valnew:", valueNew);

      const tab1 = Card(valueNew);
      document.querySelector(secici).append(tab1);
    });
};

export { Card, cardEkleyici };
