  document.addEventListener('DOMContentLoaded', function () {
    // Create full-screen overlay
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100vw';
    banner.style.height = '100vh';
    banner.style.backgroundColor = '#fff'; // white background
    banner.style.color = '#000'; // black text
    banner.style.display = 'flex';
    banner.style.flexDirection = 'column';
    banner.style.justifyContent = 'center';
    banner.style.alignItems = 'center';
    banner.style.zIndex = '9999';
    banner.style.fontFamily = 'Arial, sans-serif';
    banner.style.textAlign = 'center';
    banner.style.padding = '20px';
    banner.style.opacity = '1'; // fully visible
    banner.style.transition = 'opacity 1s ease'; // fade-out transition

    const line1 = document.createElement('div');
    line1.textContent = "Don't get Rejected By Silence";
    line1.style.fontSize = '2rem';
    line1.style.fontWeight = 'bolder';
    line1.style.fontFamily = "'Poppins', sans-serif"; 



    const line2 = document.createElement('div');
    line2.textContent = "get Rejected By (our) Site instead";
    line2.style.marginTop = '20px';
    line2.style.fontSize = '1.5rem';
    line2.style.display = 'none';
    line2.style.color = 'gray';
    line2.style.letterSpacing="0.08em"
    line1.style.fontFamily = "'Poppins', sans-serif"; 


      const line3 = document.createElement('div');
      line3.textContent = "Loading...";
      line3.style.fontSize = '0.8em';
      line3.style.fontStyle = 'italic';
      line3.style.position = 'fixed';
      line3.style.bottom = '5em';
      


    // Append messages
    banner.appendChild(line1);
    banner.appendChild(line2);
    banner.appendChild(line3);
    document.body.appendChild(banner);

    // After 3 seconds, show second message
    setTimeout(() => {
      line2.style.display = 'block';
    }, 3000);

    // After 6 seconds, fade out
    setTimeout(() => {
      banner.style.opacity = '0';
      banner.style.pointerEvents = 'none';
    }, 6000);

    // Remove from DOM after fade-out completes (1s later)
    setTimeout(() => {
      if (banner && banner.parentNode) {
        banner.remove();
      }
    }, 7000);
  });
