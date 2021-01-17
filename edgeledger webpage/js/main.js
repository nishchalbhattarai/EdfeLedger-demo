function initMap(){
    //your location
    const loc={lat:27.717245, lng:85.323959 };

    //centered map location
    const map= new google.maps.Map(document.querySelector('.map'),
    {
        zoom:14,
        center:loc
    });
    // the marker,positioned at location
    const marker= new google.maps.Marker({
        position:loc,
        map:map
    });
}

//sticky menu background
window.addEventListener('scroll',function(){
    if(window.scrollY>150){
        document.querySelector('#navbar').style.opacity=0.7;
    }
    else{
        document.querySelector('#navbar').style.opacity=1;
    }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });