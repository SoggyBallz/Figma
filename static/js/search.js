function country_search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('countryInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("countryUL");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

function date_search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('dateInput');
    console.log(input);
    filter = input.value;
    ul = document.getElementById("dateUL");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.value || a.innerText;
      if (txtValue.indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }