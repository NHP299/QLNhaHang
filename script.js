
// phần bình luận của trang chủ
{const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})
// Cách thực hiện:

// - Dùng JavaScript để lắng nghe sự kiện click của 2 button "next" và "prev"

// - Khi người dùng click vào button "next" hoặc "prev" thì chúng ta kiểm tra xem có thể di chuyển đến comment tiếp theo hay không, nếu không thì hiển thị thông báo "Xem hết bình luận"

// - Sau đó, dùng CSS để thực hiện hiệu ứng di chuyển bình luận lên hoặc xuống bằng cách thay đổi thuộc tính translateY của element chứa bình luận, kết hợp với việc tăng/giảm biến số count để theo dõi số lượng bình luận còn lại.
}

{
const products = document.querySelectorAll('#listproducts .item')

products.forEach(product => {
  const detail = product.querySelector('.product-detail')

  product.addEventListener('mouseover', function (event) {
    detail.style.display = 'block'
    
  })

  product.addEventListener('mouseout', function (event) {
    detail.style.display = 'none'
  })
})
// Mục đích:

// - Tạo hiệu ứng hiển thị thông tin chi tiết sản phẩm khi người dùng rê chuột vào sản phẩm.

// - Tự động ẩn thông tin chi tiết sản phẩm khi người dùng di chuyển chuột ra khỏi sản phẩm.

// Cách thực hiện:

// - Sử dụng phương thức `querySelectorAll` để lấy tất cả các sản phẩm có trong danh sách sản phẩm và lắng nghe sự kiện `mouseover` và `mouseout` trên từng sản phẩm.

// - Khi người dùng rê chuột vào một sản phẩm (sự kiện `mouseover`) thì phần chi tiết sản phẩm (element có class là "product-detail") của sản phẩm đó sẽ được hiển thị (`display: block`) bằng thuộc tính style của phần tử đó.

// - Khi người dùng di chuyển chuột ra khỏi sản phẩm (sự kiện `mouseout`), thì phần chi tiết sản phẩm sẽ bị ẩn đi (`display: none`) bằng cách sử dụng thuộc tính style của phần tử "product-detail".

// - Với mỗi sản phẩm, đoạn mã dùng vòng lặp forEach để lắng nghe sự kiện các sự kiện trên sản phẩm đó, giảm thiểu mã lặp lại và tăng tính tương tác trên trang sản phẩm.
}
{
  const cart = document.querySelector('#cart');
  const priceTags = document.querySelectorAll('.price');
  const tong = document.getElementById('tong');
  let total = 0;

  function them(button) {
    // Lấy thông tin sản phẩm được chọn
    const item = button.parentNode.parentNode;
    const imgSrc = item.querySelector('img').src;
    const name = item.querySelector('.name').innerText;
    const price = parseInt(item.querySelector('.price').innerText);

    // Tạo trước dòng trong bảng giỏ hàng
    const row = document.createElement('tr')
    const imgCell = document.createElement('td');
    imgCell.innerHTML = `<img src="${imgSrc}" class="item-no-cart-img"></img>`;
    const nameCell = document.createElement('td');
    nameCell.innerText = name;
    const priceCell = document.createElement('td');
    priceCell.innerText = price;
    const deleteBtnCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Xóa';
    deleteBtn.addEventListener('click', function() {
      // Xóa dòng tương ứng khi bấm nút Xóa
      cart.removeChild(row);
      total -= price;
      tong.innerText = total;
    });
    deleteBtnCell.appendChild(deleteBtn);
    row.appendChild(imgCell);
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(deleteBtnCell);

    // Thêm dòng vào giỏ hàng
    cart.appendChild(row);

    // Cập nhật tổng số tiền
    total += price;
    tong.innerText = total;
  }
  
}

{
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
  
  document.getElementById("vido").innerText = "Vĩ độ: " + position.coords.latitude;
  document.getElementById("kinhdo").innerText = "Kinh độ: " + position.coords.longitude;
}
// Đặt thời gian bắt đầu và thời gian kết thúc
let start = new Date('Mon 10 2024 15:00:00 GMT+0000').getTime();
let end = new Date('Mon Aug 20 2024 15:30:00 GMT+0000').getTime();

// Thiết lập khoảng thời gian mỗi lần lặp
let interval = 1000; // mỗi giây

// Thiết lập hàm lặp lại
let timer = setInterval(function() {

  // Lấy thời gian hiện tại
  let current = new Date().getTime();

  // Tính thời gian còn lại
  let remaining = end - current;

  // Kiểm tra nếu thời gian còn lại âm hoặc bằng 0
  if (remaining <= 0) {
    clearInterval(timer); // dừng hàm lặp lại
    console.log('Đã đến thời gian kết thúc');
  } else {
    // Tính các giá trị cho định dạng giờ, phút và giây
    let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // In thời gian còn lại
    document.getElementById("flashsale").innerText = `Còn lại: ${hours} giờ, ${minutes} phút và ${seconds} giây`
  }
}, interval);

}


{
{// Tìm phần tử muốn cuộn đến
const targetElement = document.querySelector('#wp-products',);
// Thêm sự kiện "click" vào phần tử kích hoạt
document.querySelector('#SP',).addEventListener('click', function() {
  // Cuộn đến phần tử chỉ định
  targetElement.scrollIntoView({ behavior: 'smooth' });
});}

{
// Tìm phần tử muốn cuộn đến
const targetElement = document.querySelector('#comment',);
// Thêm sự kiện "click" vào phần tử kích hoạt
document.querySelector('#BL',).addEventListener('click', function() {
  // Cuộn đến phần tử chỉ định
  targetElement.scrollIntoView({ behavior: 'smooth' });
});
}

{
  // Tìm phần tử muốn cuộn đến
  const targetElement = document.querySelector('.box',);
  // Thêm sự kiện "click" vào phần tử kích hoạt
  document.querySelector('#LH',).addEventListener('click', function() {
    // Cuộn đến phần tử chỉ định
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
  }



  {
    // Tìm phần tử muốn cuộn đến
    const targetElement = document.querySelector('#wp-products',);
    // Thêm sự kiện "click" vào phần tử kích hoạt
    document.querySelector('#MN',).addEventListener('click', function() {
      // Cuộn đến phần tử chỉ định
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
    }
  }




  {
  function toggleCart() {
    var cartContainer = document.getElementById("item-list-no-cart-msg");
    if (cartContainer.style.display === "none") {
       cartContainer.style.display = "block";
    } else {
       cartContainer.style.display = "none";
    }
 }
 // Mục đích:

// - Hiển thị hoặc ẩn thông báo cho người dùng khi giỏ hàng trống.

// Cách thực hiện:

// - Hàm "toggleCart" dùng để điều khiển việc hiển thị hoặc ẩn thông báo "giỏ hàng trống" (do có id="item-list-no-cart-msg") trên trang web.

// - Đoạn mã kiểm tra nếu phần tử "item-list-no-cart-msg" đang được ẩn đi (có kiểu display là "none") thì chuyển kiểu display của nó thành "block" để hiển thị. Ngược lại nếu phần tử này đang hiển thị (có kiểu display khác "none") thì chuyển kiểu display của nó thành "none" để ẩn đi thông báo.

// - Hàm toggleCart có chức năng đảm bảo việc hiển thị thông báo "giỏ hàng trống" cho người dùng khi giỏ hàng không có sản phẩm nào.
}
document.getElementById("reservation-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  // You can now use these values to process the reservation, e.g., send to a server using AJAX.
  // You can also display a confirmation message to the user.
});

// Giả định dữ liệu món ăn
const menuItems = [
  { name: "Bún Riêu Cua", type: "Món Mặn", price: 35000 },
  { name: "Bánh Mì Hamburger", type: "Món Ăn Nhanh", price: 45000 },
  // ...Thêm dữ liệu món ăn khác
];

const menuTableBody = document.querySelector("#menu-list tbody");
const menuForm = document.getElementById("menu-form");

// Hiển thị dữ liệu món ăn trên trang
function displayMenuItems() {
  menuTableBody.innerHTML = "";

  menuItems.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.type}</td>
      <td>${item.price} VND</td>
      <td>
        <button class="edit-btn" data-index="${index}">Sửa</button>
        <button class="delete-btn" data-index="${index}">Xóa</button>
      </td>
    `;

    menuTableBody.appendChild(row);
  });

  // Xử lý sự kiện sửa và xóa món ăn
  const editButtons = document.querySelectorAll(".edit-btn");
  editButtons.forEach(button => {
    button.addEventListener("click", () => editMenuItem(button.getAttribute("data-index")));
  });

  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach(button => {
    button.addEventListener("click", () => deleteMenuItem(button.getAttribute("data-index")));
  });
}

// Thêm món ăn vào danh sách
menuForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const foodName = document.getElementById("food-name").value;
  const foodType = document.getElementById("food-type").value;
  const foodPrice = document.getElementById("food-price").value;

  const newItem = { name: foodName, type: foodType, price: parseFloat(foodPrice) };
  menuItems.push(newItem);

  displayMenuItems();
  menuForm.reset();
});

// Sửa thông tin món ăn
function editMenuItem(index) {
  const newName = prompt("Nhập tên mới cho món ăn:", menuItems[index].name);
  const newType = prompt("Nhập loại món mới cho món ăn:", menuItems[index].type);
  const newPrice = parseFloat(prompt("Nhập giá mới cho món ăn:", menuItems[index].price));

  menuItems[index].name = newName;
  menuItems[index].type = newType;
  menuItems[index].price = newPrice;

  displayMenuItems();
}

// Xóa món ăn khỏi danh sách
function deleteMenuItem(index) {
  const confirmDelete = confirm("Bạn có chắc chắn muốn xóa món ăn này?");
  if (confirmDelete) {
    menuItems.splice(index, 1);
    displayMenuItems();
  }
}

// Hiển thị dữ liệu món ăn khi trang được tải
window.addEventListener("load", () => {
  displayMenuItems();
});
