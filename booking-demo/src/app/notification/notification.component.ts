import { Component, OnInit } from '@angular/core';
import { PusherService } from '../pusher.service';
import { NotificationApi } from '../models/notificationApi';
import { Notification } from '../models/notification';
import * as jquery from 'jquery';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  countUnread: any;
  notifications: Notification[];
  notificationsApi: NotificationApi;
  constructor(private pusherService: PusherService) { }

  ngOnInit() {
    this.getNotifications();
    var notificationsWrapper = $('.dropdown-notifications');
    var notificationsToggle = notificationsWrapper.find('a[data-toggle]');
    var notificationsCountElem = notificationsToggle.find('i[data-count]');
    var notificationsCount = parseInt(notificationsCountElem.data('count'));
    var notifications = notificationsWrapper.find('ul.dropdown-menu');


    // Bind a function to a Event (the full Laravel class)
    this.pusherService.chanel.bind('send-message', function (data) {
      this.notifications = data.notifications;
      this.countUnread = data.countUnread;
      var start = 0;
      var listNotificationsHtml =``;
      for (start; start < 7; start++) {
        var newNotificationHtml = `
          <li class="notification active">
              <div class="media">
                <div class="media-left">
                  <div class="media-object">
                    <img src="https://api.adorable.io/avatars/71/.png" class="img-circle" alt="50x50" style="width: 50px; height: 50px;">
                  </div>
                </div>
                <div class="media-body">
                  <strong class="notification-title">`+ data.notifications[start].title + `</strong>
                  <p class="notification-desc" style="font-size:80%;">`+ data.notifications[start].message + `</p>
                </div>
              </div>
          </li>
        `;
        listNotificationsHtml += newNotificationHtml;
      }

      notifications.html(listNotificationsHtml);

      notificationsCount = data.countUnread;
      notificationsCountElem.attr('data-count', notificationsCount);
      notificationsWrapper.find('.notif-count').text(notificationsCount);
    });
  }

  markAllRead() {
    this.pusherService.markAllRead().subscribe();
  }

  getNotifications(): void {
    this.pusherService.getListNotifications().subscribe(
      notificationsApi => {
        this.countUnread = notificationsApi.countUnread;
        this.notifications = notificationsApi.notifications;
        var notificationsWrapper = $('.dropdown-notifications');
        var notificationsToggle = notificationsWrapper.find('a[data-toggle]');
        var notificationsCountElem = notificationsToggle.find('i[data-count]');
        var notificationsCount = parseInt(notificationsCountElem.data('count'));
        var notifications = notificationsWrapper.find('ul.dropdown-menu');
        var start = 0;
        var listNotificationsHtml = ``;
        for (start; start < 7; start++) {
          var newNotificationHtml = `
          <li class="notification active">
              <div class="media">
                <div class="media-left">
                  <div class="media-object">
                    <img src="https://api.adorable.io/avatars/71/`+ `.png" class="img-circle" alt="50x50" style="width: 50px; height: 50px;">
                  </div>
                </div>
                <div class="media-body">
                  <strong class="notification-title">`+ notificationsApi.notifications[start].title + `</strong>
                  <p class="notification-desc" style="font-size:80%;">`+ notificationsApi.notifications[start].message + `</p>
                </div>
              </div>
          </li>
        `;
          listNotificationsHtml += newNotificationHtml;
        }

        notifications.html(listNotificationsHtml);

        notificationsCount = notificationsApi.countUnread;
        notificationsCountElem.attr('data-count', notificationsCount);
        notificationsWrapper.find('.notif-count').text(notificationsCount);
      }
    );
  }
}
