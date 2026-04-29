// ============================================================
//  cursor.js — Custom Cursor
//  Smooth lag cursor dengan ring effect
// ============================================================

(function () {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');

  let mx = 0, my = 0;
  let rx = 0, ry = 0;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  // Animate ring with smooth lag
  function animateCursor() {
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';

    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;

    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';

    requestAnimationFrame(animateCursor);
  }

  animateCursor();
})();
