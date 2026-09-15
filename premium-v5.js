const modal=document.querySelector('#modal'),player=document.querySelector('#player');
document.querySelectorAll('.sermon[data-video]').forEach(card=>card.addEventListener('click',e=>{e.preventDefault();player.src=`https://drive.google.com/file/d/${card.dataset.video}/preview`;modal.classList.add('open');document.body.style.overflow='hidden'}));
function closePlayer(){modal.classList.remove('open');player.src='';document.body.style.overflow=''}
document.querySelector('.close').onclick=closePlayer;
modal.addEventListener('click',e=>{if(e.target===modal)closePlayer()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePlayer()});
