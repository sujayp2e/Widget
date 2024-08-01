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
        <img src="https://iili.io/du0nxOG.png" alt="" class="first-image"/>
        <img src="https://i.ibb.co/vZrHYJK/Frame-1410125176-2.png" alt="" class="second-image"/>
        <button class="kalp-close-btn">


        <svg width="24" height="24" class="close-svg2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.35282 16.5743C5.88239 17.0447 5.88239 17.8074 6.35282 18.2779C6.82325 18.7483 7.58596 18.7483 8.05639 18.2779L12.3154 14.0188L16.5746 18.278C17.045 18.7484 17.8077 18.7484 18.2781 18.278C18.7486 17.8076 18.7486 17.0449 18.2781 16.5744L14.019 12.3152L18.2778 8.0563C18.7482 7.58586 18.7482 6.82314 18.2778 6.3527C17.8074 5.88227 17.0447 5.88227 16.5742 6.3527L12.3154 10.6116L8.05674 6.35287C7.58631 5.88243 6.8236 5.88243 6.35317 6.35287C5.88274 6.8233 5.88274 7.58602 6.35317 8.05646L10.6118 12.3152L6.35282 16.5743Z" fill="#A0A0A0"/>
</svg>

        
        </button>
      </div>
      <div class="right-section">
        <button class="kalp-close-btn">
        <svg xmlns="http://www.w3.org/2000/svg" class="close-svg1" width="31" height="31" viewBox="0 0 31 31" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12718 21.2053C7.52531 21.8072 7.52532 22.783 8.12718 23.3849C8.72904 23.9868 9.70486 23.9868 10.3067 23.3849L15.7557 17.9358L21.2049 23.3851C21.8068 23.987 22.7826 23.987 23.3844 23.3851C23.9863 22.7832 23.9863 21.8074 23.3844 21.2055L17.9353 15.7563L23.384 10.3074C23.9859 9.70556 23.9859 8.72973 23.384 8.12786C22.7821 7.52598 21.8063 7.52598 21.2045 8.12786L15.7557 13.5767L10.3072 8.12807C9.70531 7.52619 8.72949 7.52619 8.12763 8.12807C7.52576 8.72994 7.52576 9.70577 8.12763 10.3076L13.5762 15.7563L8.12718 21.2053Z" fill="black"/>
        </svg>


        
        </button>
        <h2>Build Your <br/> First Blockchain Project.</h2>
        <p>You build, we support</p>
        <div class="kalp-form-container">
          <form id="kalp-form">
            <div class="form-row">
              <div class="form-group">
                <label for="kalp-full-name">Full Name *</label>
                <input type="text" id="kalp-full-name" autocomplete="off" name="full-name" placeholder="John David" required>
              </div>
              <div class="form-group">
                <label for="kalp-phone-number">Phone Number *</label>
                <div class="phone-input-wrapper">
                  <select id="kalp-phone-code" name="phone-code" required>
                    <!-- Options will be populated here -->
                  </select>
                  <input type="text" id="kalp-phone-number" autocomplete="off" name="phone-number" placeholder="0000000000" required>
                </div>
              </div>
            </div>
            <div class="email-container">
              <label for="kalp-email">Your Email *</label>
              <input type="email" id="kalp-email" autocomplete="off" name="email" placeholder="example@yourmail.com" required>
            </div>
            <span id="result"></span>
          </form>

          <button type="submit" class="submit-button" id="submit-button">Get Started</button>
        </div>
      </div>
    `;

    modal.appendChild(modalBody);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);

    function showModal() {
      modalOverlay.style.display = "flex";
    }

    function populateCountryCodes() {
      const countryCodes = [
        { code: "+91", name: "IN", flag: "🇮🇳" },
        { code: "+1", name: "US", flag: "🇺🇸" },
        { code: "+44", name: "GB", flag: "🇬🇧" },
        { code: "+61", name: "AU", flag: "🇦🇺" },
        { code: "+86", name: "CN", flag: "🇨🇳" },
        { code: "+49", name: "DE", flag: "🇩🇪" },
        { code: "+33", name: "FR", flag: "🇫🇷" },
        { code: "+39", name: "IT", flag: "🇮🇹" },
        { code: "+81", name: "JP", flag: "🇯🇵" },
        { code: "+82", name: "KR", flag: "🇰🇷" },
        { code: "+34", name: "ES", flag: "🇪🇸" },
        { code: "+7", name: "RU", flag: "🇷🇺" },
        { code: "+55", name: "BR", flag: "🇧🇷" },
        { code: "+27", name: "ZA", flag: "🇿🇦" },
        { code: "+234", name: "NG", flag: "🇳🇬" },
        { code: "+90", name: "TR", flag: "🇹🇷" },
        { code: "+31", name: "NL", flag: "🇳🇱" },
        { code: "+61", name: "AU", flag: "🇦🇺" },
        { code: "+41", name: "CH", flag: "🇨🇭" },
        { code: "+46", name: "SE", flag: "🇸🇪" },
        { code: "+32", name: "BE", flag: "🇧🇪" },
        { code: "+47", name: "NO", flag: "🇳🇴" },
        { code: "+48", name: "PL", flag: "🇵🇱" },
        { code: "+52", name: "MX", flag: "🇲🇽" },
        { code: "+54", name: "AR", flag: "🇦🇷" },
        { code: "+60", name: "MY", flag: "🇲🇾" },
        { code: "+65", name: "SG", flag: "🇸🇬" },
        { code: "+64", name: "NZ", flag: "🇳🇿" },
        { code: "+20", name: "EG", flag: "🇪🇬" },
        { code: "+213", name: "DZ", flag: "🇩🇿" },
        { code: "+216", name: "TN", flag: "🇹🇳" },
        { code: "+212", name: "MA", flag: "🇲🇦" },
        { code: "+251", name: "ET", flag: "🇪🇹" },
        { code: "+254", name: "KE", flag: "🇰🇪" },
        { code: "+255", name: "TZ", flag: "🇹🇿" },
        { code: "+256", name: "UG", flag: "🇺🇬" },
        { code: "+263", name: "ZW", flag: "🇿🇼" },
        { code: "+27", name: "ZA", flag: "🇿🇦" },
        { code: "+234", name: "NG", flag: "🇳🇬" },
        { code: "+243", name: "CD", flag: "🇨🇩" },
        { code: "+240", name: "GQ", flag: "🇬🇶" },
        { code: "+245", name: "GW", flag: "🇬🇼" },
        { code: "+226", name: "BF", flag: "🇧🇫" },
        { code: "+229", name: "BJ", flag: "🇧🇯" },
        { code: "+228", name: "TG", flag: "🇹🇬" },
        { code: "+223", name: "ML", flag: "🇲🇱" },
        { code: "+225", name: "CI", flag: "🇨🇮" },
        { code: "+241", name: "GA", flag: "🇬🇦" },
        { code: "+232", name: "SL", flag: "🇸🇱" },
        { code: "+237", name: "CM", flag: "🇨🇲" },
        { code: "+238", name: "CV", flag: "🇨🇻" },
        { code: "+249", name: "SD", flag: "🇸🇩" },
        { code: "+250", name: "RW", flag: "🇷🇼" },
        { code: "+267", name: "BW", flag: "🇧🇼" },
        { code: "+248", name: "SC", flag: "🇸🇨" },
        { code: "+221", name: "SN", flag: "🇸🇳" },
        { code: "+220", name: "GM", flag: "🇬🇲" },
        { code: "+233", name: "GH", flag: "🇬🇭" },
        { code: "+236", name: "CF", flag: "🇨🇫" },
        { code: "+235", name: "TD", flag: "🇹🇩" },
        { code: "+265", name: "MW", flag: "🇲🇼" },
        { code: "+258", name: "MZ", flag: "🇲🇿" },
        { code: "+262", name: "RE", flag: "🇷🇪" },
        { code: "+269", name: "KM", flag: "🇰🇲" },
        { code: "+261", name: "MG", flag: "🇲🇬" },
        { code: "+218", name: "LY", flag: "🇱🇾" },
        { code: "+268", name: "SZ", flag: "🇸🇿" },
        { code: "+260", name: "ZM", flag: "🇿🇲" },
        { code: "+245", name: "GW", flag: "🇬🇼" },
        { code: "+253", name: "DJ", flag: "🇩🇯" },
        { code: "+268", name: "SZ", flag: "🇸🇿" },
        { code: "+241", name: "GA", flag: "🇬🇦" },
        { code: "+242", name: "CG", flag: "🇨🇬" },
        { code: "+240", name: "GQ", flag: "🇬🇶" },
        { code: "+211", name: "SS", flag: "🇸🇸" },
        { code: "+245", name: "GW", flag: "🇬🇼" },
        { code: "+261", name: "MG", flag: "🇲🇬" },
        { code: "+243", name: "CD", flag: "🇨🇩" },
        { code: "+227", name: "NE", flag: "🇳🇪" },
        { code: "+234", name: "NG", flag: "🇳🇬" },
        { code: "+263", name: "ZW", flag: "🇿🇼" },
        { code: "+253", name: "DJ", flag: "🇩🇯" },
        { code: "+211", name: "SS", flag: "🇸🇸" },
        { code: "+265", name: "MW", flag: "🇲🇼" },
        { code: "+212", name: "MA", flag: "🇲🇦" },
        { code: "+222", name: "MR", flag: "🇲🇷" },
        { code: "+243", name: "CD", flag: "🇨🇩" },
        { code: "+235", name: "TD", flag: "🇹🇩" },
        { code: "+255", name: "TZ", flag: "🇹🇿" },
        { code: "+232", name: "SL", flag: "🇸🇱" },
        { code: "+263", name: "ZW", flag: "🇿🇼" },
        { code: "+254", name: "KE", flag: "🇰🇪" },
        { code: "+223", name: "ML", flag: "🇲🇱" },
        { code: "+256", name: "UG", flag: "🇺🇬" },
        { code: "+260", name: "ZM", flag: "🇿🇲" },
        { code: "+233", name: "GH", flag: "🇬🇭" },
        { code: "+241", name: "GA", flag: "🇬🇦" },
        { code: "+250", name: "RW", flag: "🇷🇼" },
        { code: "+213", name: "DZ", flag: "🇩🇿" },
        { code: "+216", name: "TN", flag: "🇹🇳" },
        { code: "+218", name: "LY", flag: "🇱🇾" },
        { code: "+20", name: "EG", flag: "🇪🇬" },
        { code: "+968", name: "OM", flag: "🇴🇲" },
        { code: "+974", name: "QA", flag: "🇶🇦" },
        { code: "+966", name: "SA", flag: "🇸🇦" },
        { code: "+971", name: "AE", flag: "🇦🇪" },
        { code: "+964", name: "IQ", flag: "🇮🇶" },
        { code: "+98", name: "IR", flag: "🇮🇷" },
        { code: "+92", name: "PK", flag: "🇵🇰" },
        { code: "+93", name: "AF", flag: "🇦🇫" },
        { code: "+94", name: "LK", flag: "🇱🇰" },
        { code: "+95", name: "MM", flag: "🇲🇲" },
        { code: "+960", name: "MV", flag: "🇲🇻" },
        { code: "+855", name: "KH", flag: "🇰🇭" },
        { code: "+66", name: "TH", flag: "🇹🇭" },
        { code: "+856", name: "LA", flag: "🇱🇦" },
        { code: "+84", name: "VN", flag: "🇻🇳" },
        { code: "+62", name: "ID", flag: "🇮🇩" },
        { code: "+63", name: "PH", flag: "🇵🇭" },
        { code: "+60", name: "MY", flag: "🇲🇾" },
        { code: "+65", name: "SG", flag: "🇸🇬" },
        { code: "+673", name: "BN", flag: "🇧🇳" },
        { code: "+886", name: "TW", flag: "🇹🇼" },
        { code: "+852", name: "HK", flag: "🇭🇰" },
        { code: "+81", name: "JP", flag: "🇯🇵" },
        { code: "+82", name: "KR", flag: "🇰🇷" },
        { code: "+850", name: "KP", flag: "🇰🇵" },
        { code: "+976", name: "MN", flag: "🇲🇳" },
        { code: "+7", name: "RU", flag: "🇷🇺" },
        { code: "+374", name: "AM", flag: "🇦🇲" },
        { code: "+994", name: "AZ", flag: "🇦🇿" },
        { code: "+995", name: "GE", flag: "🇬🇪" },
        { code: "+90", name: "TR", flag: "🇹🇷" },
        { code: "+963", name: "SY", flag: "🇸🇾" },
        { code: "+961", name: "LB", flag: "🇱🇧" },
        { code: "+962", name: "JO", flag: "🇯🇴" },
        { code: "+972", name: "IL", flag: "🇮🇱" },
        { code: "+20", name: "EG", flag: "🇪🇬" },
        { code: "+212", name: "MA", flag: "🇲🇦" },
        { code: "+216", name: "TN", flag: "🇹🇳" },
        { code: "+213", name: "DZ", flag: "🇩🇿" },
        { code: "+218", name: "LY", flag: "🇱🇾" },
        { code: "+249", name: "SD", flag: "🇸🇩" },
        { code: "+967", name: "YE", flag: "🇾🇪" },
        { code: "+968", name: "OM", flag: "🇴🇲" },
        { code: "+974", name: "QA", flag: "🇶🇦" },
        { code: "+973", name: "BH", flag: "🇧🇭" },
        { code: "+965", name: "KW", flag: "🇰🇼" },
        { code: "+966", name: "SA", flag: "🇸🇦" },
        { code: "+971", name: "AE", flag: "🇦🇪" },
        { code: "+92", name: "PK", flag: "🇵🇰" },
        { code: "+91", name: "IN", flag: "🇮🇳" },
        { code: "+880", name: "BD", flag: "🇧🇩" },
        { code: "+94", name: "LK", flag: "🇱🇰" },
        { code: "+977", name: "NP", flag: "🇳🇵" },
        { code: "+93", name: "AF", flag: "🇦🇫" },
        { code: "+960", name: "MV", flag: "🇲🇻" },
        { code: "+855", name: "KH", flag: "🇰🇭" },
        { code: "+856", name: "LA", flag: "🇱🇦" },
        { code: "+66", name: "TH", flag: "🇹🇭" },
        { code: "+84", name: "VN", flag: "🇻🇳" },
        { code: "+62", name: "ID", flag: "🇮🇩" },
        { code: "+63", name: "PH", flag: "🇵🇭" },
        { code: "+65", name: "SG", flag: "🇸🇬" },
        { code: "+95", name: "MM", flag: "🇲🇲" },
        { code: "+86", name: "CN", flag: "🇨🇳" },
        { code: "+82", name: "KR", flag: "🇰🇷" },
        { code: "+81", name: "JP", flag: "🇯🇵" },
        { code: "+61", name: "AU", flag: "🇦🇺" },
        { code: "+64", name: "NZ", flag: "🇳🇿" },
        { code: "+34", name: "ES", flag: "🇪🇸" },
        { code: "+33", name: "FR", flag: "🇫🇷" },
        { code: "+49", name: "DE", flag: "🇩🇪" },
        { code: "+39", name: "IT", flag: "🇮🇹" },
        { code: "+31", name: "NL", flag: "🇳🇱" },
        { code: "+32", name: "BE", flag: "🇧🇪" },
        { code: "+41", name: "CH", flag: "🇨🇭" },
        { code: "+44", name: "GB", flag: "🇬🇧" },
        { code: "+351", name: "PT", flag: "🇵🇹" },
        { code: "+43", name: "AT", flag: "🇦🇹" },
        { code: "+45", name: "DK", flag: "🇩🇰" },
        { code: "+46", name: "SE", flag: "🇸🇪" },
        { code: "+47", name: "NO", flag: "🇳🇴" },
        { code: "+358", name: "FI", flag: "🇫🇮" },
        { code: "+354", name: "IS", flag: "🇮🇸" },
        { code: "+370", name: "LT", flag: "🇱🇹" },
        { code: "+371", name: "LV", flag: "🇱🇻" },
        { code: "+372", name: "EE", flag: "🇪🇪" },
        { code: "+375", name: "BY", flag: "🇧🇾" },
        { code: "+380", name: "UA", flag: "🇺🇦" },
        { code: "+48", name: "PL", flag: "🇵🇱" },
        { code: "+351", name: "PT", flag: "🇵🇹" },
        { code: "+30", name: "GR", flag: "🇬🇷" },
        { code: "+40", name: "RO", flag: "🇷🇴" },
        { code: "+90", name: "TR", flag: "🇹🇷" },
        { code: "+385", name: "HR", flag: "🇭🇷" },
        { code: "+386", name: "SI", flag: "🇸🇮" },
        { code: "+389", name: "MK", flag: "🇲🇰" },
        { code: "+381", name: "RS", flag: "🇷🇸" },
        { code: "+382", name: "ME", flag: "🇲🇪" },
        { code: "+421", name: "SK", flag: "🇸🇰" },
        { code: "+36", name: "HU", flag: "🇭🇺" },
        { code: "+423", name: "LI", flag: "🇱🇮" },
        { code: "+352", name: "LU", flag: "🇱🇺" },
        { code: "+377", name: "MC", flag: "🇲🇨" },
        { code: "+356", name: "MT", flag: "🇲🇹" },
        { code: "+378", name: "SM", flag: "🇸🇲" },
        { code: "+386", name: "SI", flag: "🇸🇮" },
        { code: "+375", name: "BY", flag: "🇧🇾" },
        { code: "+373", name: "MD", flag: "🇲🇩" },
        { code: "+995", name: "GE", flag: "🇬🇪" },
        { code: "+372", name: "EE", flag: "🇪🇪" },
        { code: "+371", name: "LV", flag: "🇱🇻" },
        { code: "+370", name: "LT", flag: "🇱🇹" },
        { code: "+356", name: "MT", flag: "🇲🇹" },
        { code: "+357", name: "CY", flag: "🇨🇾" },
        { code: "+386", name: "SI", flag: "🇸🇮" },
        { code: "+371", name: "LV", flag: "🇱🇻" },
        { code: "+370", name: "LT", flag: "🇱🇹" },
        { code: "+372", name: "EE", flag: "🇪🇪" },
        { code: "+375", name: "BY", flag: "🇧🇾" },
        { code: "+48", name: "PL", flag: "🇵🇱" },
        { code: "+420", name: "CZ", flag: "🇨🇿" },
        { code: "+32", name: "BE", flag: "🇧🇪" },
        { code: "+33", name: "FR", flag: "🇫🇷" },
        { code: "+49", name: "DE", flag: "🇩🇪" },
        { code: "+30", name: "GR", flag: "🇬🇷" },
        { code: "+39", name: "IT", flag: "🇮🇹" },
        { code: "+34", name: "ES", flag: "🇪🇸" },
        { code: "+47", name: "NO", flag: "🇳🇴" },
        { code: "+46", name: "SE", flag: "🇸🇪" },
        { code: "+41", name: "CH", flag: "🇨🇭" },
        { code: "+351", name: "PT", flag: "🇵🇹" },
        { code: "+356", name: "MT", flag: "🇲🇹" },
        { code: "+378", name: "SM", flag: "🇸🇲" },
        { code: "+43", name: "AT", flag: "🇦🇹" },
        { code: "+44", name: "GB", flag: "🇬🇧" },
        { code: "+353", name: "IE", flag: "🇮🇪" },
        { code: "+358", name: "FI", flag: "🇫🇮" },
        { code: "+354", name: "IS", flag: "🇮🇸" },
        { code: "+372", name: "EE", flag: "🇪🇪" },
        { code: "+371", name: "LV", flag: "🇱🇻" },
        { code: "+370", name: "LT", flag: "🇱🇹" },
        { code: "+374", name: "AM", flag: "🇦🇲" },
        { code: "+994", name: "AZ", flag: "🇦🇿" },
        { code: "+995", name: "GE", flag: "🇬🇪" },
        { code: "+7", name: "RU", flag: "🇷🇺" },
        { code: "+387", name: "BA", flag: "🇧🇦" },
        { code: "+389", name: "MK", flag: "🇲🇰" },
        { code: "+381", name: "RS", flag: "🇷🇸" },
        { code: "+382", name: "ME", flag: "🇲🇪" },
        { code: "+383", name: "XK", flag: "🇽🇰" },
        { code: "+371", name: "LV", flag: "🇱🇻" },
        { code: "+370", name: "LT", flag: "🇱🇹" },
        { code: "+372", name: "EE", flag: "🇪🇪" },
        { code: "+32", name: "BE", flag: "🇧🇪" },
        { code: "+33", name: "FR", flag: "🇫🇷" },
        { code: "+49", name: "DE", flag: "🇩🇪" },
        { code: "+39", name: "IT", flag: "🇮🇹" },
        { code: "+31", name: "NL", flag: "🇳🇱" },
        { code: "+30", name: "GR", flag: "🇬🇷" },
        { code: "+34", name: "ES", flag: "🇪🇸" },
        { code: "+351", name: "PT", flag: "🇵🇹" },
        { code: "+44", name: "GB", flag: "🇬🇧" },
        { code: "+46", name: "SE", flag: "🇸🇪" },
        { code: "+47", name: "NO", flag: "🇳🇴" },
        { code: "+45", name: "DK", flag: "🇩🇰" },
        { code: "+420", name: "CZ", flag: "🇨🇿" },
        { code: "+421", name: "SK", flag: "🇸🇰" },
        { code: "+36", name: "HU", flag: "🇭🇺" },
        { code: "+43", name: "AT", flag: "🇦🇹" },
        { code: "+378", name: "SM", flag: "🇸🇲" },
        { code: "+377", name: "MC", flag: "🇲🇨" },
        { code: "+356", name: "MT", flag: "🇲🇹" },
        { code: "+32", name: "BE", flag: "🇧🇪" },
        { code: "+420", name: "CZ", flag: "🇨🇿" },
        { code: "+421", name: "SK", flag: "🇸🇰" },
        { code: "+36", name: "HU", flag: "🇭🇺" },
        { code: "+43", name: "AT", flag: "🇦🇹" },
        { code: "+48", name: "PL", flag: "🇵🇱" },
        { code: "+30", name: "GR", flag: "🇬🇷" },
        { code: "+351", name: "PT", flag: "🇵🇹" },
        { code: "+356", name: "MT", flag: "🇲🇹" },
        { code: "+386", name: "SI", flag: "🇸🇮" },
        { code: "+421", name: "SK", flag: "🇸🇰" },
        { code: "+386", name: "SI", flag: "🇸🇮" },
        { code: "+359", name: "BG", flag: "🇧🇬" },
        { code: "+381", name: "RS", flag: "🇷🇸" },
        { code: "+382", name: "ME", flag: "🇲🇪" },
        { code: "+389", name: "MK", flag: "🇲🇰" },
      ];

      const select = document.getElementById("kalp-phone-code");
      countryCodes.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.code;
        option.textContent = `${country.flag} (${country.code})`;
        select.appendChild(option);
      });
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

    populateCountryCodes();

    setTimeout(showModal, 10000);

    const submitButton = modal.querySelector(".submit-button");
    submitButton.addEventListener("click", async (event) => {
      event.preventDefault();

      const form = document.getElementById("kalp-form");

      if (form.checkValidity()) {
        const formData = new FormData(form);
        const data = {
          fullName: formData.get("full-name"),
          company: "Kalp studio Blockchain landing page",
          country: "IN",
          mobile: formData.get("phone-number"),
          email: formData.get("email"),
          message: "PPC campaign",
          enquiryType: ["PRODUCT_DEMO"],
        };

        try {
          const response = await fetch(
            "https://dev-kalp-cmsapi.p2eppl.com/v1/enquiry",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );

          if (response.ok) {
            const result = await response.json();
            console.log("Success:", result);
            const submitButton = document.getElementById("result");
            submitButton.innerText = "Our team will reach you shortly";
            submitButton.style.color = "Green";
            setTimeout(() => {
              modalOverlay.style.display = "none";
            }, 3000);
          } else {
            console.error("Error submitting form", response.statusText);
          }
        } catch (error) {
          console.error("Error submitting form", error);
        }
      } else {
        form.reportValidity();
      }
    });
  }

  createAndShowModal();
});
