export default function spyScroll () {
  const $sections = document.querySelectorAll('div[data-scroll-spy]');
  const windowWidth = window.innerWidth;

  const cb = (entries) => {
    entries.forEach( (entry) => {
      const id = entry.target.getAttribute('id');
      if(entry.isIntersecting){
        document.querySelector(`a[data-scroll-spy][href='#${id}']`)
        .classList.add('active');
      } else {
        document.querySelector(`a[data-scroll-spy][href='#${id}']`).classList.remove('active');
      }
    });
  }
  let thresholdSize;

  if(windowWidth < 992 && windowWidth > 767){
    thresholdSize = [0.2, 0.75]

  } else if( windowWidth < 767) {
    thresholdSize = [0.10, 0.85]

  } else {
    thresholdSize = [0.25, 0.7]
  }

  const observer = new IntersectionObserver(cb,{
    threshold: thresholdSize
  })
  // observer.observe($sections)
  $sections.forEach( $section => observer.observe($section) );
  // $sections.forEach( $section => console.log($section.getAttribute('id') ) );
}