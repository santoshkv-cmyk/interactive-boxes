const boxes = document.querySelectorAll('.interactive-box');

boxes.forEach(box => {
  const header = box.querySelector('.box-header');
  header.addEventListener('click', () => {
    // Collapse others
    boxes.forEach(otherBox => {
      if (otherBox !== box) {
        otherBox.classList.remove('active');
      }
    });
    // Toggle current
    box.classList.toggle('active');
  });
});