import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  template: '<youtube-player videoId="YOUR_VIDEO_ID"></youtube-player>',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
