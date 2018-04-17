# FLIP
介绍一下 Paul Lewis 发明的 FLIP 思想，所谓 FLIP 就是 F (first) L (last) I (invert) P (play)。

First: 在整个动画过程中元素的起始状态

Last: 在整个动画过程中元素的终止状态

Invert: 这一步是关键，通过 First 和 Last 计算出来的状态，得到一个从 Last 到 First 的变化倍率（比如大小或位置，是的，是从 Last 到 First），然后让元素具有终止状态的 class 及刚刚计算出来的 invert state 的 transform 属性，他们两个相抵消，元素在视觉上还是没有任何变化。举个例子，比如我们想让一个元素向右移动 10px，再放大两倍，那么这个计算出来的相反的 transfrom 属性就应该是 transform: translateX(-10px) scale(0.5)，再给他一个 left: 10px; width: 200px; height: 200px;（假设原来是 left: 0; width: 100px; height: 100px;），这两个属性视觉效果上抵消，好像元素从来没有改变过。

Play: 给元素添加一个 transition 效果，再移除元素的 transform 属性，因为此时元素已经是终止状态了，所以就会 transition 到 0，整个过程只有 transform ，可以轻松达到 60FPS。

```javascript
  // Get the first position.
  var first = el.getBoundingClientRect();

  // Now set the element to the last position.
  el.classList.add('totes-at-the-end');

  // Read again. This forces a sync layout, so be careful.
  // 这里会触发强制同步，不过只有一帧，这是完全可以接受的
  var last = el.getBoundingClientRect();

  // You can do this for other computed
  // styles as well, if needed. Just be
  // sure to stick to compositor-only
  // props like transform and opacity
  // where possible.
  // 从last到first状态
  var invert = first.top - last.top;

  // Invert.
  // 保持UI状态没有变化
  el.style.transform =`translateY(${invert}px)`;

  // Wait for the next frame so we
  // know all the style changes have
  // taken hold.
  // 要用rAF，不用的话el.style.transform = `translateY(${invert}px)`; 和
  // 必须放到下一帧触发transfrom
  // el.style.transform = '';就在一帧中同步执行了，就不会用动画效果了，
  requestAnimationFrame(function() {

    // Switch on animations.
    el.classList.add('animate-on-transforms');

    // GO GO GOOOOOO!
    el.style.transform = '';
  });

  // Capture the end with transitionend
  // 结束后要el.classList.remove('animate-on-transforms')
  el.addEventListener('transitionend',tidyUpAnimations);
```