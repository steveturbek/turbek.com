/**
 * The microbit to be a blue tooth media controller
 *
 * Using the amazing code extension: microbit-pxt-blehid https://bsiever.github.io/microbit-pxt-blehid/
 */
RotaryEncoder.onRotateEvent(RotationDirection.Left, function () {
  media.sendCode(media.keys(media._MediaKey.vol_up));
});
RotaryEncoder.onPressEvent(function () {
  media.sendCode(media.keys(media._MediaKey.playPause));
});
input.onButtonPressed(Button.A, function () {
  media.sendCode(media.keys(media._MediaKey.previous));
});
input.onButtonPressed(Button.B, function () {
  media.sendCode(media.keys(media._MediaKey.next));
});
RotaryEncoder.onRotateEvent(RotationDirection.Right, function () {
  media.sendCode(media.keys(media._MediaKey.vol_down));
});
media.startMediaService();
RotaryEncoder.init(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2);
led.enable(false);
pins.setPull(DigitalPin.P0, PinPullMode.PullUp);
pins.setPull(DigitalPin.P1, PinPullMode.PullUp);
pins.setPull(DigitalPin.P2, PinPullMode.PullUp);
music.play(music.tonePlayable(988, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone);
basic.forever(function () {});
