export default function spyScroll () {
  const $sections = document.querySelectorAll('div[data-scroll-spy]');
  const windowWidth = window.innerWidth;

  let activeLink = document.querySelector(`a[data-scroll-spy][href='#home']`);

  const cb = (entries) => {
    entries.forEach( (entry) => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`a[data-scroll-spy][href='#${id}']`);
      if(entry.isIntersecting){
          if(activeLink){
            activeLink.classList.remove('active');
          }
          link.classList.add('active');
          activeLink = link;
      } else {
        link.classList.remove('active');
      }
    });
  }
  let thresholdSize;

  if(windowWidth < 992 && windowWidth > 767){
    thresholdSize = [0.2, 0.75]
  } else if( windowWidth < 767) {
    thresholdSize = [0.10, 0.85]
  } else {
    thresholdSize = [0.25, 0.9]
  }

  const observer = new IntersectionObserver(cb,{
    threshold: thresholdSize
  })
  // observer.observe($sections)
  $sections.forEach( $section => observer.observe($section) );
  // $sections.forEach( $section => console.log($section.getAttribute('id') ) );
}