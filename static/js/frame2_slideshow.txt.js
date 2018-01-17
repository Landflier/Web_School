<script>
var i=0; //counter for images
var images=[];
var time=3000;
//image list
images[0]= '../images/Frame2/bike1.jpg';
images[1]= '../images/Frame2/bike2.jpg';
images[2]= '../images/Frame2/bike3.jpg';
//start once all DOM elemnts are loaded
document.addEventListener('DOMContentLoaded', function(){
    changeIMG();
});
//Change Image
function changeIMG(){
    document.getElementsByName("slide").src=images[i];
    if (i < images.length - 1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeIMG()", time);

}
</script>