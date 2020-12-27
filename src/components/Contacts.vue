<template>
  <section id="contacts">
    <div class="container contacts">
      <div class="map">
        <!-- <script
          type="text/javascript"
          charset="utf-8"
          async
          src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8193ba2e40c6d4c3843559967af539b869d2103e4102bd1acd8f9f6e9374a2d8&amp;width=556&amp;height=240&amp;lang=ru_RU&amp;scroll=true"
        ></script> -->
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A8193ba2e40c6d4c3843559967af539b869d2103e4102bd1acd8f9f6e9374a2d8&amp;source=constructor"
          width="556"
          height="240"
          frameborder="0"
        ></iframe>
      </div>
      <div class="adres">
        <strong>г. Екатеринбург</strong><br />
        ул. Малышева 145а, литер Ф<br />
        Телефон: +7 902 872-36-98<br />
        Почта: mogoocho@gmail.com<br />
        <div class="social">
          <a
            href="https://www.instagram.com/mogoocho/"
            title="instagram"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/ios/40/ffffff/prequel-app.png"
              width="40"
              height="40"
              alt="instagram"
            />
          </a>
          <a href="https://vk.com/mogoocho" title="vk.com" target="_blank">
            <img
              src="https://img.icons8.com/ios/40/ffffff/vk-com.png"
              width="40"
              height="40"
              alt="vk.com"
            />
          </a>
          <a
            href="https://www.facebook.com/mogoocho"
            title="facebook"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/ios/40/ffffff/facebook--v1.png"
              width="40"
              height="40"
              alt="facebook"
            />
          </a>
          <a
            href="https://telegram.me/mogoocho"
            title="telegram"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/ios/40/ffffff/telegram-app.png"
              width="40"
              height="40"
              alt="telegram"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=79028723698"
            title="whatsapp"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/ios/40/ffffff/whatsapp--v1.png"
              width="40"
              height="40"
              alt="whatsapp"
            />
          </a>
        </div>
        <!-- <a
          class="call-button"
          href="#"
          id="btnGetCall"
          data-fancybox
          data-src="#modal"
          >Заказать звонок</a
        > -->
      </div>
    </div>
    <div style="display: none" id="modal">
      <h2>Заказать звонок</h2>
      <p>Укажите имя и номер телефона. Звонок поступит в рабочее время</p>

      <input type="text" class="form-control" placeholder="Ваше имя" />
      <input
        type="text"
        class="form-control"
        placeholder="Номер телефона"
        data-mask="8 ___ ___-__-__"
      />
      <a class="call-button-do" href="#contacts" data-fancybox-close
        >Заказать</a
      >
    </div>
  </section>
</template>