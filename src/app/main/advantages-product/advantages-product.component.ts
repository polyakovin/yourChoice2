import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages-product',
  templateUrl: './advantages-product.component.html',
  styleUrls: ['./advantages-product.component.scss']
})
export class AdvantagesProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const theRotator = () => {
      // Устанавливаем прозрачность всех картинок в 0
      $('#advantages-door ul li').css({opacity: 0.0});
      $('#advantages-door-2 ul li').css({opacity: 0.0});
      $('#advantages-door-3 ul li').css({opacity: 0.0});

      // Берем первую картинку и показываем ее (по пути включаем полную видимость)
      $('#advantages-door ul li:first').css({opacity: 1.0});
      $('#advantages-door-2 ul li:first').css({opacity: 1.0});
      $('#advantages-door-3 ul li:first').css({opacity: 1.0});

      // Вызываем функцию rotate для запуска слайдшоу, 5000 = смена картинок происходит раз в 5 секунд
      setInterval(rotate, 3000);
    }

    const rotate = () => {
      // Берем первую картинку
      var current = ($('#advantages-door ul li.show')?  $('#advantages-door ul li.show') : $('#advantages-door ul li:first'));
      var current2 = ($('#advantages-door-2 ul li.show')?  $('#advantages-door-2 ul li.show') : $('#advantages-door-2 ul li:first'));
      var current3 = ($('#advantages-door-3 ul li.show')?  $('#advantages-door-3 ul li.show') : $('#advantages-door-3 ul li:first'));

      // Берем следующую картинку, когда дойдем до последней начинаем с начала
      var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('#advantages-door ul li:first') :current.next()) : $('#advantages-door ul li:first'));
      var next2 = ((current2.next().length) ? ((current2.next().hasClass('show')) ? $('#advantages-door-2 ul li:first') :current2.next()) : $('#advantages-door-2 ul li:first'));
      var next3 = ((current3.next().length) ? ((current3.next().hasClass('show')) ? $('#advantages-door-3 ul li:first') :current3.next()) : $('#advantages-door-3 ul li:first'));

      // Подключаем эффект растворения/затухания для показа картинок, css-класс show имеет больший z-index
      next
        .css({opacity: 0.0})
        .addClass('show')
        .animate({opacity: 1.0}, 1000);
      next2
        .css({opacity: 0.0})
        .addClass('show')
        .animate({opacity: 1.0}, 1000);
      next3
        .css({opacity: 0.0})
        .addClass('show')
        .animate({opacity: 1.0}, 1000);

      // Прячем текущую картинку
      current
        .animate({opacity: 0.0}, 1000)
        .removeClass('show');
      current2
        .animate({opacity: 0.0}, 1000)
        .removeClass('show');
      current3
        .animate({opacity: 0.0}, 1000)
        .removeClass('show');
    }

    $(document).ready(() => {
      // Запускаем слайдшоу
      theRotator();
    });
  }

}
