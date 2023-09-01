export default function spyScroll () {
  const $sections = document.querySelectorAll('div[data-scroll-spy]');
  const cb = (entries) => {
    entries.forEach( (entry) => {
      console.log("entry", entry);
      const id = entry.target.getAttribute('id');
      if(entry.isIntersecting){
        document.querySelector(`a[data-scroll-spy][href='#${id}']`)
        .classList.add('active');
      } else {
        document.querySelector(`a[data-scroll-spy][href='#${id}']`).classList.remove('active');
      }
    });
  }

  const observer = new IntersectionObserver(cb,{
    threshold: [0.25, 0.7]
  })
  // observer.observe($sections)
  $sections.forEach( $section => observer.observe($section) );
  // $sections.forEach( $section => console.log($section.getAttribute('id') ) );
}