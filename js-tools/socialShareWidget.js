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
          url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.pageUrl)}`,
          icon: "📘", // Replace with an SVG or image for better visuals
        },
        {
          name: "Twitter",
          url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.pageUrl)}`,
          icon: "🐦",
        },
        {
          name: "LinkedIn",
          url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(this.pageUrl)}`,
          icon: "💼",
        },
        {
          name: "WhatsApp",
          url: `https://api.whatsapp.com/send?text=${encodeURIComponent(this.pageUrl)}`,
          icon: "📱",
        },
      ];
  
      container.innerHTML = socialPlatforms
        .map(
          (platform) => `
          <a href="${platform.url}" target="_blank" class="social-share-button" style="text-decoration: none; margin: 5px;">
            <span style="font-size: 24px;">${platform.icon}</span>
            ${platform.name}
          </a>
        `
        )
        .join("");
  
      this.addStyling(container);
    }
  
    addStyling(container) {
      const buttons = container.querySelectorAll(".social-share-button");
      buttons.forEach((button) => {
        button.style.padding = "10px";
        button.style.border = "1px solid #ddd";
        button.style.borderRadius = "5px";
        button.style.display = "inline-block";
        button.style.textAlign = "center";
        button.style.transition = "background-color 0.3s";
        button.style.cursor = "pointer";
  
        button.addEventListener("mouseover", () => {
          button.style.backgroundColor = "#f0f0f0";
        });
  
        button.addEventListener("mouseout", () => {
          button.style.backgroundColor = "#fff";
        });
      });
    }
  }
  
  // Export the library
  window.SocialShareWidget = SocialShareWidget;
  