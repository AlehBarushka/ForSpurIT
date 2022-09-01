const collapsibleBtn = document.querySelector('.collapsible__button');
const collapsibleActionVisible = document.querySelector('.collapsible__action--visible');
const collapsibleActionHidden = document.querySelector('.collapsible__action--hidden');
const collapsibleContent = document.querySelector('.collapsible__content');

collapsibleActionVisible.style.display = 'none';
collapsibleActionHidden.style.display = 'block';

const collapseAnimation = document.querySelector('.collapsible__content').animate(
  {
    height: ['0px', '50px'],
    overflow: ['hidden', 'visible'],
    background: 'azure',
  },
  {
    duration: 500,
    fill: 'both',
    easing: 'ease-in',
  },
);

collapseAnimation.pause();

collapsibleBtn.addEventListener('click', () => {
  collapsibleActionVisible.style.display =
    collapsibleActionVisible.style.display === 'block' ? 'none' : 'block';
  collapsibleActionHidden.style.display =
    collapsibleActionHidden.style.display === 'block' ? 'none' : 'block';

  if (collapseAnimation.playState === 'paused') {
    collapseAnimation.play();
  } else {
    collapseAnimation.reverse();
  }
});
