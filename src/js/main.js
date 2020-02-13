'use scrict';

  let tabs = document.querySelectorAll('.tabs--content'),
      trade = document.querySelector('.method-trade'),
      invest = document.querySelector('.method-invest'),
      attract= document.querySelector('.method-attract');


  let circleTrade = document.querySelector('.circle-trade'),
      circleInvest = document.querySelector('.circle-invest'),
      circleAttract = document.querySelector('.circle-attract');

  let circleTradeId = document.getElementById('circleTradeId'),
      circleInvestId = document.getElementById('circleInvestId'),
      circleAttractId = document.getElementById('circleAttractId');


  let button = document.querySelector('.content--button');

tabClick();

// Функция переключения табов и включения круговой анимации

function tabClick() {
  for (let elem of tabs) {
    elem.addEventListener('click', function(event) {
      let target = event.target.closest('div');
      if (target.classList.contains('active-tab') && target.classList.contains('tabs--content')) {
        return;
      }
      if (!(target.classList.contains('active-tab')) && target.classList.contains('tabs--content')) {
        let activElem = Array.prototype.slice.call(document.querySelectorAll('.active-tab'));
          for (let i = 0; i < activElem.length; i++) {
            activElem[i].classList.remove('active-tab');
          }
        target.classList.add('active-tab');
      }
      if (target.classList.contains('tabs-trade')) {
        circleTradeId.classList.remove('stroke-static');
        circleInvestId.classList.remove('animation-mode-circle');
        circleAttractId.classList.remove('animation-mode-circle');
        circleTradeId.classList.add('animation-mode-circle');
        document.querySelector('.content_2').style.display = 'none';
        document.querySelector('.content_3').style.display = 'none';
        document.querySelector('.content_1').style.display = 'block';

      };
      if (target.classList.contains('tabs-invest')) {
        circleTradeId.classList.remove('stroke-static');
        circleTradeId.classList.remove('animation-mode-circle');
        circleAttractId.classList.remove('animation-mode-circle');
        circleInvestId.classList.add('animation-mode-circle');
        document.querySelector('.content_1').style.display = 'none';
        document.querySelector('.content_3').style.display = 'none';
        document.querySelector('.content_2').style.display = 'block';
      };
      if (target.classList.contains('tabs-attract')) {
        circleTradeId.classList.remove('stroke-static');
        circleTradeId.classList.remove('animation-mode-circle');
        circleInvestId.classList.remove('animation-mode-circle');
        circleAttractId.classList.add('animation-mode-circle');
        document.querySelector('.content_1').style.display = 'none';
        document.querySelector('.content_2').style.display = 'none';
        document.querySelector('.content_3').style.display = 'block';
      }
    });
  };
};


// Функция убирает лишие теги, если экран изменяется - динамика

let textTrade = document.querySelector('.method-trade > p');
let svgs = Array.prototype.slice.call(document.querySelectorAll('.svg-circle'));
let section_1 = document.createElement('section');
let section_2 = document.createElement('section');
let section_3 = document.createElement('section');

window.addEventListener(`resize`, event => {
  if (document.documentElement.clientWidth < 769) {
    document.querySelector('.content_2').style.display = 'none';
    document.querySelector('.content_3').style.display = 'none';
    document.querySelector('.content_1').style.display = 'none';

    for ( elem of svgs) {
      elem.style.display = 'none';
    }

    textTrade.textContent = 'Самостоятельно торговать';
    trade.style.pointerEvents = 'auto';
    invest.style.pointerEvents = 'auto';
    attract.style.pointerEvents = 'auto';
  } 
  else {
        document.querySelector('.content_2').style.display = 'none';
        document.querySelector('.content_3').style.display = 'none';
        document.querySelector('.content_1').style.display = 'block';
        section_1.remove();
        section_2.remove();
        section_3.remove();

      for ( elem of svgs) {
        elem.style.display = 'block';
      }
      
      trade.style.pointerEvents = 'none';
      invest.style.pointerEvents = 'none';
      attract.style.pointerEvents = 'none';
      textTrade.textContent = 'Торговать';
  }
}, false);

// Функция изменения контента в зависимости от размера экрана - статика

if (document.documentElement.clientWidth < 769) {

    for ( elem of svgs) {
      elem.style.display = 'none';
    }

    textTrade.textContent = 'Самостоятельно торговать';
    trade.style.pointerEvents = 'auto';
    invest.style.pointerEvents = 'auto';
    attract.style.pointerEvents = 'auto';
  } 
  else {
      for ( elem of svgs) {
        elem.style.display = 'block';
      }

      textTrade.textContent = 'Торговать';
      trade.style.pointerEvents = 'none';
      invest.style.pointerEvents = 'none';
      attract.style.pointerEvents = 'none';

}

// Добавление контента при изменении экрана( для мобилок)

section_1.classList.add('content-tab');
section_1.classList.add('content-tab1');

section_2.classList.add('content-tab');
section_2.classList.add('content-tab2');

section_3.classList.add('conten-tab');
section_3.classList.add('content-tab3');

let mainContent = `
      <div class="container">
        <p class="content--text">Если вы ищете пассивный доход и предпочитаете, чтобы деньги для вас зарабатывал тот, кто умеет это делать, тогда попробуйте ЛАММ. ЛАММ – это сервис копирования сделок успешных трейдеров. Доходность ни чем не ограничена!
        </p>
        <h2 class="content--faq">Как это работает</h2>
        <ol class="content--list">
          <li class="content-item">Вы выбираете управляющего из рейтинга по фильтру Options.</li>
          <li class="content-item">Подключаете свой счет к счету управляющего.</li>
          <li class="content-item">На вашем счете начинается копирование сделок.</li>
          <li class="content-item">Обратите внимание, что бы не перечисляете свои деньги Управляющему. Все ваши средства остаются на вашем счете.</li>
          <li class="content-item">Вы можете подключиться к нескольким управляющим одновременно.</li>
          <li class="content-item">Вы можете отключиться от Управляющих в любой момент.</li>
        </ol>
        <button class="content--button">Открыть счет</button>
      </div>`;

section_1.innerHTML = mainContent;
section_2.innerHTML = mainContent;
section_3.innerHTML = mainContent;

function openTab(block, section) {
  block.insertAdjacentElement('afterend', section);
}

trade.addEventListener('click', function() {
  section_1.classList.toggle('active-content');
  trade.classList.toggle('clicked');
  openTab(trade, section_1);
});

invest.addEventListener('click', function() {
  section_2.classList.toggle('active-content');
  invest.classList.toggle('clicked');
  openTab(invest, section_2);
});

attract.addEventListener('click', function() {
  section_3.classList.toggle('active-content');
  attract.classList.toggle('clicked');
  openTab(attract, section_3);
});
