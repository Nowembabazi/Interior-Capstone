const hamburger = document.querySelector('.bars');
const navList = document.querySelector('.nav-list');
const navbar = document.querySelector('navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

document.querySelectorAll('.nav-items').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navList.classList.remove('active');
}));

const reset = () => {
  if (window.innerWidth > 768) {
    navbar.style.display = 'none';
  }
};

window.addEventListener('resize', reset);
const data = [
    {
        id: 1,
        pic: 'https://images.pexels.com/photos/7414946/pexels-photo-7414946.jpeg?auto=compress&cs=tinysrgb&w=600.png',
        altText: 'speaker',
        nameOfSpeaker: 'Rollins Camp',
        designation: 'Professor at STANFORD UNIVERSITY ',
        history: 'Vast years of experience in REAL ESTATE, nationally and internationally',
      },
      {
        id: 2,
        pic: 'https://images.pexels.com/photos/8293643/pexels-photo-8293643.jpeg?auto=compress&cs=tinysrgb&w=600.png',
        altText: 'featured speaker image',
        nameOfSpeaker: 'Elliot Didan',
        designation: 'Real Estate specialist',
        history: 'Vast years of experience in real estate, nationally and internationally ',
      },
      {
        id: 3,
        pic: 'https://images.pexels.com/photos/8482835/pexels-photo-8482835.jpeg?',
        altText: 'featured speaker image',
        nameOfSpeaker: 'Roger Twesigye',
        designation: 'CEO hollywood homes.',
        history: 'Vast years of experience in interior, nationally and internationally',
      },
      {
        id: 4,
        pic: 'https://png.pngtree.com/element_pic/00/16/10/1257fe0ebf00238.jpg',
        altText: 'featured speaker image',
        nameOfSpeaker: 'Nick',
        designation:'Founder of building homes',
        history: 'Vast years of experience in Real Estate, nationally and internationally',
      },
      {
        id: 5,
        pic: 'https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&w=600.png',
        altText: 'featured speaker image',
        nameOfSpeaker: 'Racheal Mbabazi',
        designation: 'CEO of lets Build.',
        history: 'Six years of experience in interior design, nationally and internationally',
      },
      {
        id: 6,
        pic: 'https://images.pexels.com/photos/7642009/pexels-photo-7642009.jpeg?auto=compress&cs=tinysrgb&w=600.png',
        altText: 'featured speaker image',
        nameOfSpeaker: 'Phillip Musiime',
        designation: 'Founder of Tomorrow World',
        history: 'Vast years of experience in real estate, nationally and internationally.',
      },
    ];
    
const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('class', 'featured-speakers');
speakerContainer.setAttribute('id', 'speakers');
data.forEach((speakerPara) => {
  const speakerSection = document.createElement('div');
  speakerSection.setAttribute('class', 'speaker-section');
  speakerSection.setAttribute('id', 'each-speaker');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'speaker-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-image');
  image.setAttribute('src', speakerPara.pic);
  image.setAttribute('alt', speakerPara.altText);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'speaker-details');
  contentSection.setAttribute('id', 'about-speaker');

  const speakerName = document.createElement('h3');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speakerPara.nameOfSpeaker;
  contentSection.appendChild(speakerName);

  const speakerDesignation = document.createElement('p');
  speakerDesignation.setAttribute('class', 'speaker-designation');
  speakerDesignation.textContent = speakerPara.designation;
  contentSection.appendChild(speakerDesignation);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '.........';
  contentSection.appendChild(dotText);

  const speakerHistory = document.createElement('p');
  speakerHistory.setAttribute('class', 'speaker-history');
  speakerHistory.textContent = speakerPara.history;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const body = document.querySelector('body');
const partners = document.getElementById('partners');
body.insertBefore(speakerContainer, partners);