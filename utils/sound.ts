import { Howl } from 'howler';

export function playTypingSound() {
  const sound = new Howl({
    src: ['/sounds/typing.mp3'],
    volume: 0.3,
  });
  sound.play();
}