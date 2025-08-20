// socialShareWidget.js
class SocialShareWidget {
  constructor(containerId) {
    this.containerId = containerId;
    this.pageUrl = window.location.href;
    this.init();
  }

  init() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error(`Container with ID "${this.containerId}" not found.`);
      return;
    }

    const socialPlatforms = [
      {
        name: "Facebook",
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.pageUrl + ' ')}`,
        icon: "<i class='bi bi-facebook'></i>",
      },
      {
        name: "Twitter",
        url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.pageUrl + ' ')}`,
        icon: "<i class='bi bi-twitter-x'></i>",
      },
      {
        name: "LinkedIn",
        url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(this.pageUrl + ' ')}`,
        icon: "<i class='bi bi-linkedin'></i>",
      },
      {
        name: "WhatsApp",
        url: `https://api.whatsapp.com/send?text=${encodeURIComponent(this.pageUrl + ' ')}`,
        icon: "<i class='bi bi-whatsapp'></i>",
      },
    ];

    let buttonsHtml = socialPlatforms
      .map(
        (platform) => `
          <a href="${platform.url}" target="_blank" class="btn btn-outline-dark rounded-pill social-share-button px-4">
            <span>${platform.icon}</span>
            ${platform.name}
          </a>
        `
      )
      .join("");

    // Add the copy URL button
    buttonsHtml += `
      <button type="button" class="btn btn-outline-dark rounded-pill social-share-button px-4" id="copy-url-btn">
        <span><i class='bi bi-clipboard'></i></span>
        Copy URL
      </button>
    `;

    container.innerHTML = buttonsHtml;

    // Add event listener for copy button
    const copyBtn = container.querySelector("#copy-url-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        // Force HTTPS in copied URL
        let url = this.pageUrl;
        if (url.startsWith('http://')) {
          url = 'https://' + url.substring(7);
        }
        navigator.clipboard.writeText(url)
          .then(() => {
            copyBtn.innerHTML = `<span><i class='bi bi-clipboard-check'></i></span> Copied!`;
            setTimeout(() => {
              copyBtn.innerHTML = `<span><i class='bi bi-clipboard'></i></span> Copy URL`;
            }, 1500);
          })
          .catch(() => {
            copyBtn.innerHTML = `<span><i class='bi bi-clipboard-x'></i></span> Failed!`;
            setTimeout(() => {
              copyBtn.innerHTML = `<span><i class='bi bi-clipboard'></i></span> Copy URL`;
            }, 1500);
          });
      });
    }

    this.addStyling(container);
  }

  addStyling(container) {
    const buttons = container.querySelectorAll(".social-share-button");
    buttons.forEach((button) => {
      // button.style.padding = "10px";
      // button.style.border = "1px solid #ddd";
      // button.style.borderRadius = "5px";
      // button.style.display = "inline-block";
      // button.style.textAlign = "center";
      // button.style.transition = "background-color 0.3s";
      // button.style.cursor = "pointer";

      button.addEventListener("mouseover", () => {
        // button.style.backgroundColor = "#f0f0f0";
      });

      button.addEventListener("mouseout", () => {
        // button.style.backgroundColor = "#fff";
      });
    });
  }
}

// Export the library
window.SocialShareWidget = SocialShareWidget;
