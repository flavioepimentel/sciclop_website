import { dropdownLinks } from "../../constants";
import '../style.css'

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

const Dropdown = () => {
  /* When the user clicks on the button,
toggle between hiding and showing the Dropdown content */


// Close the Dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var Dropdowns = document.getElementsByClassName("Dropdown-content");
//     var i;
//     for (i = 0; i < Dropdowns.length; i++) {
//       var openDropdown = Dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
   return (
    <div class="Dropdown">
      {/* onclick={ myFunction() } */}
    <button  class="dropbtn">Modulos</button>
      <div id="myDropdown" class="Dropdown-content">
        <a href="#">Link 1</a>
      </div>
    </div>
        
        )
}

export default Dropdown;
