// page index
var cart = new Array();

function add_to_cart(x) {
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    var gia = boxsp[1].children[0].innerText;
    var tensp = boxsp[2].innerText;
    var soluong = parseInt(boxsp[3].value);
    var sp = new Array(hinh, gia, tensp, soluong);

    // Check product cart
    var check = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][2] == tensp) {
            check = 1;
            soluong += parseInt(cart[i][3]);
            cart[i][3] = soluong;
            break;
        }
    }
    if (check == 0) {
        cart.push(sp);
    }
    countproduct();

    // add sectionStorage
    sessionStorage.setItem("cart", JSON.stringify(cart));

}

function countproduct() {
    document.getElementById("countsp").innerHTML = cart.length;
}

function dele(x) {
    var tr = x.parentElement.parentElement;
    var tensp = tr.children[2].innerText;
    tr.remove();
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][2] == tensp) {
            cart.splice(i, 1);
        }
    }
}

// cart
function showcart() {
    var gh = sessionStorage.getItem("cart");
    var cart = JSON.parse(gh);

    var ttgh = "";
    var tong = 0;
    for (let i = 0; i < cart.length; i++) {
        var tt = parseInt(cart[i][1]) * parseInt(cart[i][3]);
        tong += tt;
        ttgh +=
            '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td><img src="' + cart[i][0] + '"alt=""></td>' +
            '<td>' + cart[i][2] + '</td>' +
            '<td>' + cart[i][1] + '</td>' +
            '<td>' + cart[i][3] + '</td>' +
            '<td>' +
            '<div>' + tt + '</div>' +
            '</td>' +
            '<td>' +
            '<button onclick="dele(this)">Xóa</button>' +
            '</td>' +
            '</tr>';
    }
    ttgh +=
        '<tr>' +
        '<th colspan="6">Tổng đơn hàng</th>' +
        '<th>' +
        '<div>' + tong + '</div>' +
        '</th>' +
        '</tr>';
    document.getElementById("mycart").innerHTML = ttgh;
}