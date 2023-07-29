const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const div1 = document.createElement("div");
  div1.setAttribute("class", "header");

  const span1 = document.createElement("span");
  span1.setAttribute("class", "date");
  span1.textContent = tarih;

  const h1a = document.createElement("h1");
  h1a.textContent = baslik;

  const span2 = document.createElement("span");
  span2.setAttribute("class", "temp");
  span2.textContent = yazi;

  div1.append(span1, h1a, span2);

  return div1;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const header1 = Header(
    "BruCorp 1b usd degerlemeye ulasti!",
    "08.01.2027",
    "Buralar"
  );

  document.querySelector(secici).append(header1);
};

export { Header, headerEkleyici };
