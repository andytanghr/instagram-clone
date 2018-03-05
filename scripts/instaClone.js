/*
(function() {
  var imageToView = document.getElementsByClassName('test');

  imageToView.addEventListener("click", function(event) {
    alert('yo');
  });
});
*/


//   function openThumbnail(event) {
//     alert('yo');
//   }

// })


// var viewer = document.getElementsByClassName("viewer")










(function() {

  // var thumbnails = document.getElementsByClassName('img-thumbnail');

  var imageNode = document.querySelector('.gallery');
  var body = document.getElementsByTagName('body')[0];
  
  imageNode.addEventListener('click', function(event) {

    if (event.target.tagName === 'IMG') {

      // console.log(event.target.src);
      // alert('targeted');
      var imageSource = event.target.src;
      
      var imageToView = document.getElementsByClassName('imageToView')[0];
      imageToView.setAttribute('src', imageSource);
      // imageToView.appendChild

      
      
      var modalDialog = document.getElementsByClassName('modal-dialog')[0];
      modalDialog.style.display = 'block';
      // modalDialog.appendChild()
      modalDialog.style.background = 'rgba(0, 0, 0, .75)';



    }



  });

  // get the span element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // when x button is clicked, modal dialog closes
  span.addEventListener('click', function(event) {
    modalDialog.style.display = 'none';

  });
  // span.onclick = function() {
  //   modalDialog.style.display = 'none';
  // }

  // when anywhere outside modal dialog is clicked, modal dialog closes
  window.addEventListener('click', function(event) {
    if (event.target === modalDialog) {
      modalDialog.style.display = 'none';
    }
  });


  
  // window.onclick = function() {
  //   if (event.target === modalDialog) { // var modal
  //     modal.style.display = 'none';
  //   }
  // }





  // get the modal as a JS var
  // var modal = document.getElementsByClassName('modal-dialog')[0];







  /*
    //Selecting our node
    var myNode = document.querySelector('.test'); //assigns to array any image that corresponds to a given CSS selector

    myNode.addEventListener("click", function(e) { //adds an listener to each? or to the array itself?

        // console.log('ok');
        if (e.target.tagName === 'IMG') { //if the click event returns a target that has the img html tag, then continue conditional

          var myOverlay = document.createElement('div');
          myOverlay.id = 'overlay';
          document.body.appendChild(myOverlay);

          //set up overlay styles
          myOverlay.style.position = 'absolute';
          myOverlay.style.top = 0;
          myOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
          myOverlay.style.cursor = 'pointer'; // makes pointer visible on top


          //resize and position overlay
          myOverlay.style.width = window.innerWidth + 'px';
          myOverlay.style.height = window.innerHeight + 'px';
          myOverlay.style.top = window.pageXOffset + 'px';
          myOverlay.style.left = window.pageXOffset + 'px';

          
          //create image element
          var imageSrc = e.target.src;
          var largeImage = document.createElement('img');
          largeImage.id = 'largeImage';
          // largeImage.src = imageSrc.substr(0, imageSrc.length-7) + '.jpg'; //strips out the URL that isn't needed, i.e. 'http://DOMAINNAME', to make it relative
          largeImage.style.display = 'block';
          largeImage.style.position = 'absolute';


          


          //wait until the image has loaded
          largeImage.addEventListener('load', function() {
            //resize if taller
            if (this.height > window.innerHeight) {
              this.ratio = window.innerHeight / this.height;
              this.height = this.height * this.ratio;
              this.width = this.width * this.ratio;

            }

            //resize if wider
            if (this.height > window.innerWidth) {
              this.ratio = window.innerWidth / this.width;
              this.height = this.height * this.ratio;
              this.width = this.width * this.ratio;

            }

            centerImage(this);
            myOverlay.appendChild(largeImage); //after image is 'created', add it to HTML by appending
          }); // image has loaded


          largeImage.addEventListener('click', function() {
            if (myOverlay) {
              myOverlay.parentNode.removeChild(myOverlay);
            }
          }, false)

          window.addEventListener('scroll', function() {
            if (myOverlay) {
              myOverlay.style.top = window.pageYOffset + 'px';
              myOverlay.style.left = window.pageXOffset + 'px';
            }

          }, false)

        }//// target is an image


        




          


//          var imgSrc = e.target.src; // into a variable, stores the img src 
          // console.log(imgSrc);
         
            //console.log(e);



   }, false); //image is clicked
*/






})(); //self executing function (edited)
