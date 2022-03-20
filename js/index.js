window.onload = function () {
  const imgData = [
    'https://i.imgur.com/OkKwWM9.jpeg',
    'https://i.imgur.com/kgTEVHZ.jpeg',
    'https://i.imgur.com/vZoqs0P.jpeg',
    'https://i.imgur.com/LNUXzZF.jpeg',
    'https://i.imgur.com/ArsdCGv.jpeg',
    'https://i.imgur.com/eUppgFB.jpeg',
    'https://i.imgur.com/s6w2RpD.jpeg',
    'https://i.imgur.com/SEu9pHo.jpeg',
    'https://i.imgur.com/vb0uajo.jpeg',
    'https://i.imgur.com/WAIXTXs.jpeg',
  ];

  const grid = document.querySelector('.grid');

  // const newImgs = imgData.reduce((acc, item) => {
  //   const newEle = `
  //     <div class="grid-item hide">
  //       <img src=${item} />
  //     </div>
  //   `;

  //   acc += newEle;
  //   return acc;
  // }, '');

  // grid.innerHTML = newImgs; // 嘗試失敗

  for (const url of imgData) {
    const newEle = `
      <div class="grid-item hide">
        <img src=${url} />
      </div>
    `;

    grid.innerHTML += newEle;
  }

  const boxes = document.querySelectorAll('.grid-item');
  const imgIds = document.querySelectorAll('.grid-item img');

  let i = 0;

  const imgLoaded = () => {
    i += 1;

    if (imgIds.length === i) {
      boxes.forEach((box, index) => {
        box.classList.add('at-bounceIn');
        box.style.cssText = `--delay:${index * 0.3}s`;
      });

      const msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
      });
    }
  };

  for (const img of [...imgIds]) {
    img.addEventListener('load', imgLoaded);
  }

  for (const box of [...boxes]) {
    box.addEventListener('animationend', () => {
      box.classList.remove('hide');
    });
  }
};
