document.addEventListener("DOMContentLoaded", function () {
  console.log("Loaded");
  function createAndShowModal() {
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("kalp-modal-overlay");

    const modal = document.createElement("div");
    modal.classList.add("kalp-modal");

    const modalHeader = document.createElement("div");
    modalHeader.classList.add("kalp-modal-header");
    modalHeader.innerHTML = `
      <h2>Build Your First Blockchain Project.</h2>
      <span class="kalp-close-btn">&times;</span>
    `;

    const modalBody = document.createElement("div");
    modalBody.classList.add("kalp-modal-body");
    modalBody.innerHTML = `
      <div>
        <h3>Get FREE Credits Worth $250</h3>
        <p>On Early Sign-Ups</p>
      </div>
      <form>
        <label for="kalp-full-name">Full Name *</label>
        <input type="text" id="kalp-full-name" name="full-name" value="John David" required>
        <label for="kalp-phone-number">Phone Number *</label>
        <input type="text" id="kalp-phone-number" name="phone-number" value="+0000000000" required>
        <label for="kalp-email">Your Email *</label>
        <input type="email" id="kalp-email" name="email" placeholder="example@yourmail.com" required>
        <button type="submit">Get Started</button>
      </form>
    `;

    const modalFooter = document.createElement("div");
    modalFooter.classList.add("kalp-modal-footer");
    modalFooter.innerHTML = `
      <button class="kalp-close-btn">Close</button>
    `;

    modal.append(modalHeader, modalBody, modalFooter);
    document.body.append(modalOverlay, modal);

    function showModal() {
      modal.style.display = "block";
      modalOverlay.style.display = "block";
    }

    const closeModalBtns = document.querySelectorAll(".kalp-close-btn");
    closeModalBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
      });
    });

    modalOverlay.addEventListener("click", () => {
      modal.style.display = "none";
      modalOverlay.style.display = "none";
    });

    setTimeout(showModal, 10000);
  }
  createAndShowModal();
});
