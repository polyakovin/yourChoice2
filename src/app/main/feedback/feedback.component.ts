import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      // Для правильного отображения отзывов клиентов
      if($(window).width() >= 992) {
        $(".bqreverse").addClass('blockquote-reverse');
      } else {
        $(".bqreverse").removeClass('blockquote-reverse');
      }
      $(window).resize(() => {
        if($(window).width() >= 992) {
          $(".bqreverse").addClass('blockquote-reverse');
        } else {
          $(".bqreverse").removeClass('blockquote-reverse');
        }
      });
    });
  }
}
