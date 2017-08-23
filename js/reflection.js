ready(reflect);

function ready (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function reflect () {
  const reflectionDiv = document.createElement('div');
  const reflectionContainer = document.querySelector('.reflection-container');
  const reflective = document.querySelector('.reflective');
  reflectionDiv.classList.add('reflection');
  if (reflectionContainer) {
    reflectionContainer.appendChild(reflectionDiv);
    reflectionDiv.innerHTML = reflective.innerHTML;
  }
  moveReflection();
  window.onload = moveReflection;
  window.addEventListener('scroll', moveReflection);
  window.addEventListener('resize', moveReflection);
}

/**
 * moveReflection Move the reflection to reflect current scroll position
 */
function moveReflection () {
  const reflectionDiv = document.querySelector('.reflection');
  const reflectionContainer = document.querySelector('.reflection-container')
  const reflectionContainerHeight = parseInt(getComputedStyle(reflectionContainer).height);
  const reflectionHeight = parseInt(getComputedStyle(reflectionDiv).height);
  const windowOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  //vertical scrolling
  if (reflectionContainer.classList.contains('top')) { //Reflect in the header
    reflectionDiv.style.marginTop = (reflectionContainerHeight * 2) - reflectionHeight + windowOffset + "px";
  } else { // Reflect in the footer
    reflectionDiv.style.marginTop = 0 - (reflectionHeight - windowHeight + reflectionContainerHeight) + windowOffset + "px";
  }
  //horizontal scrolling
  reflectionDiv.style.marginLeft = 0 - (window.XOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0);
}
