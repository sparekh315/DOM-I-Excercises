const siteContent = {
    "nav": {
      "nav-item-1": "Services",
      "nav-item-2": "Product",
      "nav-item-3": "Vision",
      "nav-item-4": "Features",
      "nav-item-5": "About",
      "nav-item-6": "Contact",
      "img-src": "img/logo.png"
    },
    "cta": {
      "h1": "DOM Is Awesome",
      "button": "Get Started",
      "img-src": "img/header-img.png"
    },
    "main-content": {
      "features-h4":"Features",
      "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "about-h4":"About",
      "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
      "services-h4":"Services",
      "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "product-h4":"Product",
      "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "vision-h4":"Vision",
      "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
      "contact-h4" : "Contact",
      "address" : "123 Way 456 Street Somewhere, USA",
      "phone" : "1 (888) 888-8888",
      "email" : "sales@greatidea.io",
    },
    "footer": {
      "copyright" : "Copyright Great Idea! 2018"
    },
  };
  
  // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])



  //navigation
//   "nav": {
//     "nav-item-1": "Services",
//     "nav-item-2": "Product",
//     "nav-item-3": "Vision",
//     "nav-item-4": "Features",
//     "nav-item-5": "About",
//     "nav-item-6": "Contact",
//     "img-src": "img/logo.png"
//   }
  const navLinks = document.querySelectorAll('nav a');
  console.log(navLinks);


  //cta
//   "cta": {
//     "h1": "DOM Is Awesome",
//     "button": "Get Started",
//     "img-src": "img/header-img.png"
//   },
  const ctaHeader = document.querySelector('.cta h1');
  console.log(ctaHeader);

  const ctaButton = document.querySelector('.cta button');
  console.log(ctaButton);

  const ctaImg = document.querySelector('#cta-img');
  console.log(ctaImg);

  //main content
// },
// "main-content": {
//   "features-h4":"Features",
//   "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "about-h4":"About",
//   "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "middle-img-src": "img/mid-page-accent.jpg",
//   "services-h4":"Services",
//   "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "product-h4":"Product",
//   "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   "vision-h4":"Vision",
//   "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
// },
  // main content top content
  const mainConTopHeaders = document.querySelectorAll('.top-content h4');
  console.log(mainConTopHeaders);

  const mainConTopParagraphs = document.querySelectorAll('.top-content p');
  console.log(mainConTopParagraphs);

  //main content img

  const mainConImg = document.querySelector('#middle-img');
  console.log(mainConImg);
  mainConImg.src = siteContent["main-content"]["middle-img-src"];

  //main content bottom content
  const mainConBottomHeaders = document.querySelectorAll('.bottom-content h4');
  console.log(mainConBottomHeaders);

  const mainConBottomParagraphs = document.querySelectorAll('.bottom-content p');
  console.log(mainConBottomParagraphs);

  //contact
//   "contact": {
//     "contact-h4" : "Contact",
//     "address" : "123 Way 456 Street Somewhere, USA",
//     "phone" : "1 (888) 888-8888",
//     "email" : "sales@greatidea.io",
//   },
  const contactHeader = document.querySelector('.contact h4');
  console.log(contactHeader);

  const contactParagraphs = document.querySelectorAll('.contact p');
  console.log(contactParagraphs);

  //footer
//   "footer": {
//     "copyright" : "Copyright Great Idea! 2018"
//   },
  const footerParagraph = document.querySelector('footer p');
  console.log(footerParagraph);