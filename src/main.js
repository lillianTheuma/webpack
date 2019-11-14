import 'roman.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#num").submit(function(event) {
    var num = $("#input").val();

    var output = (toRoman(num).join(''));

    if(!output){
      output="Stultus es valde.";
    }
    $(".result").text(output);
    event.preventDefault();
  });
});
