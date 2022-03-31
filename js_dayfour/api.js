var url_ajax = 'https://reqres.in/api/users/2';
// call API fetch
fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(function(fetch) {
        var html = '';
        for (let i = 0; i < fetch.data.length; i++) {
            html += `<tr>
         <td>  ${fetch.data[i].id}</td>
         <td>${fetch.data[i].first_name}</td>
         <td>${fetch.data[i].last_name}</td>
         <td>${fetch.data[i].email}</td>
      <td><img src="${fetch.data[i].avatar}" alt="avatar"></td>
        </tr>`;
        }
        document.getElementById('fetch').innerHTML = html;
    });

//call API ajax
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_ajax, true);
    xhttp.onload = function() {
        var list = JSON.parse(this.responseText).data;
        show_ajax(list);
    }

    xhttp.send();
}
loadDoc();

function show_ajax(list) {
    var html_ajax = '';
    html_ajax =
        `<img src="${list.avatar}">
      <div>
        <p>ID: ${list.id}</p>
        <p>Fullname: ${list.first_name} ${list.last_name}</p>
        <p>Email: ${list.email}</p>
      </div>`;

    document.getElementById('ajax').innerHTML = html_ajax;
}