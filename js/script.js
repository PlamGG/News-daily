// เปิดเมนูและแสดง overlay
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("overlay").style.display = "block"; // แสดง overlay
}

// ปิดเมนูและซ่อน overlay
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none"; // ซ่อน overlay
}

// เพิ่ม event listener เพื่อปิดเมนูเมื่อคลิกที่ overlay
document.getElementById("overlay").addEventListener("click", closeNav);

/*--  silde -main-- */
// ฟังก์ชันรับค่าวันที่ปัจจุบัน
function getDateTime() {
  // สร้างตัวแปรสำหรับเก็บค่าวันที่ปัจจุบัน
  var now = new Date();

  // แปลงค่าวันที่เป็นรูปแบบอักษร
  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  // แสดงผลลัพธ์
  var formattedDateTime = now.toLocaleDateString('th-TH', options);
  return formattedDateTime;
}

// แสดงผลลัพธ์ในหน้าเว็บ
document.getElementById('currentDateTime').innerHTML = getDateTime();


/*--  Serach  menu-- */
// เลือกอิลิเมนต์ของไอคอนค้นหา
var searchIcon = document.getElementById('searchButton');

// เพิ่มการฟังก์ชันสำหรับการคลิกที่ไอคอนค้นหา
searchIcon.addEventListener('click', function() {
  // นำทางไปยังหน้าที่คุณต้องการ
  window.location.href = "search.html"; // เปลี่ยน "link-to-your-page.html" เป็น URL ของหน้าที่คุณต้องการลิงก์ไป
});


/*--  footer timmer-- */
function handleSearch() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const searchResultsPage = 'results.html'; // URL ของหน้าผลลัพธ์

  // เช็คว่า query เป็นคำว่า "search" หรือไม่
  if (query === 'search') {
      // เมื่อพบคำว่า "search" ให้เปลี่ยนเส้นทาง URL ไปยังหน้าผลลัพธ์
      window.location.href = searchResultsPage;
  } else {
      // กรณีอื่น ๆ ทำการตรวจสอบ query และประมวลผลตามปกติ
      const searchContainer = document.getElementById('searchContainer');
      const searchLabel = document.getElementById('searchLabel');
      const searchBox = document.getElementById('searchBox');
      const searchButton = document.getElementById('searchButton');
      const searchInput = document.getElementById('searchInput');
      const errorMessage = document.getElementById('errorMessage');

      if (!query) {
          // If the input is empty, show an error message and change text color to red
          searchContainer.classList.add('error');
          errorMessage.style.display = 'block';
      } else {
          // Reset the text color and hide error message
          searchContainer.classList.remove('error');
          errorMessage.style.display = 'none';

          // Example search results (replace with your own search logic)
          const searchResults = ['example1', 'example2', 'example3'];

          if (searchResults.includes(query)) {
              // If the search query is found, navigate to the results page
              window.location.href = searchResultsPage; // Change to your results page URL
          } else {
              // If the search query is not found, navigate to the no results page
              window.location.href = 'no-results.html'; // Change to your no results page URL
          }
      }
  }
}






/*--  search-more -- */
document.getElementById("load-more").addEventListener("click", function(event){
  event.preventDefault();
  document.querySelector(".card-search-more").style.display = "block";
  document.querySelector(".load-more-container").removeChild(document.getElementById("load-more"));
});




/*--  cookie -- */
$(document).ready(function(){
  $('.btn-close').click(function(){
      $('.cookie-consent').hide();
  });
  $('.btn-accept').click(function(){
      $('.cookie-consent').hide();
  });
});

/*--  cookie popup index -- */
$(document).ready(function(){
  // แสดงหน้าคุกกี้ทุกครั้งที่หน้า index.html โหลด
  $('.cookie-consent').show();

  // ปิดหน้าคุกกี้เมื่อคลิกที่ปุ่มปิดหรือปุ่มรับทราบ
  $('.btn-close, .btn-accept').click(function(){
      $('.cookie-consent').hide();
  });
});
