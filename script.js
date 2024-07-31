document.addEventListener("DOMContentLoaded", function () {
  console.log("Loaded");

  function createAndShowModal() {
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("kalp-modal-overlay");

    const modal = document.createElement("div");
    modal.classList.add("kalp-modal");

    const modalBody = document.createElement("div");
    modalBody.classList.add("kalp-modal-body");
    modalBody.innerHTML = `
      <div class="left-section">
        <h3>Get FREE Credits Worth $250</h3>
        <p>On Early Sign-Ups</p>
      </div>
      <div class="right-section">
        <button class="kalp-close-btn"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12718 21.2053C7.52531 21.8072 7.52532 22.783 8.12718 23.3849C8.72904 23.9868 9.70486 23.9868 10.3067 23.3849L15.7557 17.9358L21.2049 23.3851C21.8068 23.987 22.7826 23.987 23.3844 23.3851C23.9863 22.7832 23.9863 21.8074 23.3844 21.2055L17.9353 15.7563L23.384 10.3074C23.9859 9.70556 23.9859 8.72973 23.384 8.12786C22.7821 7.52598 21.8063 7.52598 21.2045 8.12786L15.7557 13.5767L10.3072 8.12807C9.70531 7.52619 8.72949 7.52619 8.12763 8.12807C7.52576 8.72994 7.52576 9.70577 8.12763 10.3076L13.5762 15.7563L8.12718 21.2053Z" fill="black"/>
</svg></button>
        <h2>Build Your <br/> First Blockchain Project.</h2>
        <p>You build, we support</p>
        <form>
          <div class="form-row">
            <div class="form-group">
              <label for="kalp-full-name">Full Name *</label>
              <input type="text" id="kalp-full-name" name="full-name" value="John David" required>
            </div>
            <div class="form-group">
              <label for="kalp-phone-number">Phone Number *</label>
              <div class="phone-input-wrapper">
                <input type="text" id="kalp-phone-code" name="phone-code" value="+000" required>
                <input type="text" id="kalp-phone-number" name="phone-number" value="0000000000" required>
              </div>
            </div>
          </div>
          <div>
          
          <label for="kalp-email">Your Email *</label>
          <input type="email" id="kalp-email" name="email" placeholder="example@yourmail.com" required>
          </div>
          
           <button type="submit" class="submit-button">Get Started</button>
        </form>
      </div>
    `;

    modal.appendChild(modalBody);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);

    function showModal() {
      modalOverlay.style.display = "flex";
    }

    const closeModalBtns = modal.querySelectorAll(".kalp-close-btn");
    closeModalBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalOverlay.style.display = "none";
      });
    });

    modalOverlay.addEventListener("click", (event) => {
      if (event.target === modalOverlay) {
        modalOverlay.style.display = "none";
      }
    });

    setTimeout(showModal, 5000);
  }

  createAndShowModal();
});
