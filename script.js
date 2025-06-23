//function loadContent(section) {
//  const content = document.getElementById("content");
//  if (section === "offerings") {
//    content.innerHTML = "<h2>Our Offerings</h2><p>Content will be added here by admin.</p>";
//  } else if (section === "why") {
//    content.innerHTML = "<h2>Why Choose Us?</h2><p>Content will be added here by admin.</p>";
//  }
//}

function loadContent(section) {
  const content = document.getElementById("content");
  if (section === "offerings") {
    content.innerHTML = "<h2>-Our Offerings</h2><p>Special facilities for pre booking groups.<br>-Managable cost for 3+ days stay<br>-On demand arrangement of vaishnav food<br>-On demand arrangements of taxi and Other facilities.</p>";
  } else if (section === "why") {
    content.innerHTML = `
      <div class="why-section" style="display: flex; justify-content: space-around; padding: 30px; background: #fff;">
        <div style="text-align: center;">
          <img src="location_logo.png" alt="Location" style="width: 60px;"><br/>
          <p>Prime location near <br> Shree Nathji Priyatam Pole.</p>
        </div>
        <div style="text-align: center;">
          <img src="vaishnav_logo.png" alt="Custom Feature" style="width: 60px;"><br/>
          <p>Easily Available for devoted Vaishnavs<br> and 104 meters from Shree Nathji Temple</p>
        </div>
        <div style="text-align: center;">
          <button onclick="location.href='review.html'" style="border: none; background: none; cursor: pointer;">
            <img src="review_logo.png" alt="Reviews" style="width: 60px;"><br/>
            <p>See what our guests say!</p>
          </button>
        </div>
      </div>
    `;
  }
}
