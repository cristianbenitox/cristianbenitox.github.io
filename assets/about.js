document.addEventListener('DOMContentLoaded', () => {
const user = {
        name: 'Cristian Farrington',
        imageUrl: 'images/aboutme.jpg',
        bio: 
            "I'm Cristian, a Champlain College web dev student who enjoys working with technology. Between classes and projects, I work a lot but I do love exploring design, music, art, and adventuring!"
        };

        // Step one - Create a React element
 const titleEl = React.createElement(
     'h1',
     { className: 'display-4 text-center mt-5 pt-4' },
     user.name
  );

 const imgEl = React.createElement('img', {
     src: user.imageUrl,
     alt: user.name,
     width: 200,
     height: 200,
     className: 'd-block mx-auto my-3 rounded-circle shadow-sm',
     loading: 'lazy'
 });

const bioEl = React.createElement(
    'p',
    { className: 'lead text-center mx-auto', style: { maxWidth: '48rem' } },
    user.bio
  );
        
        // Step 2: Render the React element
 ReactDOM.render(titleEl, document.getElementById('h1'));
 ReactDOM.render(imgEl, document.getElementById('img'));
 ReactDOM.render(bioEl, document.getElementById('content'));
});
