import { Component } from '@angular/core';
import {
  AnimationEvent,
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('changeBackground', [
    state('default', style({
      backgroundColor: 'rgb(237, 224, 224)'
    })),
    state('red', style({
      backgroundColor: 'red'
    })),
    transition('default <=> red', [
      animate('1s')
    ]),
  ]),

  // ENTER-LEAVE
  trigger('fly-in-out', [
    // void => *
    transition(':enter', [
      style({ transform: 'translateX(-300%)', opacity: '0' }),
      animate('2s ease-in')
    ]),
    // * => void
    transition(':leave', [
      animate('2s ease-in', 
      keyframes([
        style({ transform: 'translateX(-100%)', opacity: '1',backgroundColor: 'red', offset : 0.2 }),
        style({ transform: 'translateX(100%)', opacity: '0.5',backgroundColor: 'blue', offset : 0.7 }),
        style({ transform: 'translateX(100%)', opacity: '0',backgroundColor: '*' , offset : 1})
      ])
       
       )
    ])
  ]),

  // INCREMENT-DECREMENT EXAMPLE
  trigger('fly-in-out', [
    transition(':increment', [
      style({ transform: 'translateX(-300%)', opacity: '0' }),
      animate('2s ease-in')
    ]),
    transition(':decrement', [
      animate('2s ease-in',  style({ transform: 'translateX(100%)', opacity: '0',backgroundColor: '*' }))
    ])
  ])
]
})
export class AppComponent {

  isDefaultColor: boolean = true

  emojis = [
    {
      name : 'sad',
      value: '🥲'
    },
    {
      name : 'happy',
      value: '😁'
    },
    {
      name : 'angry',
      value: '🤬'
    },
    {
      name : 'smart',
      value: '💡'
    },
    {
      name : 'skull',
      value: '☠️'
    },
    {
      name : 'wink',
      value: '😉'
    }
  ]

  constructor(){} 


  toggleColor(){
    this.isDefaultColor = !this.isDefaultColor
  }

  add(){
    this.emojis.push({
      name : 'heart',
      value: '❤️'
    })
  }

  delete(){
    this.emojis.pop()
  }

  onAnimationEvent(event: AnimationEvent){
  
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is "start" or "done"
    console.warn(`Phase: ${event.phaseName}`);
  }
}
