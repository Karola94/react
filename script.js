var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'images/hpotter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'images/krolLew.jpg'
    },
    {
        id: 3,
        title: 'Nietykalni',
        desc: 'Film o niepełnosprawnym milnionerze i jego opiekunie',
        img: 'images/nietykalni.jpg'
    },
    {
        id: 4,
        title: 'Avengers',
        desc: 'Film o superbohaterach',
        img: 'images/avengers.jpg'
    },
    {
        id: 5,
        title: 'Pamiętnik',
        desc: 'Film o wielkiej miłości',
        img: 'images/pamietnik.jpg'
    },
    {
        id: 6,
        title: 'Dorian Gray',
        desc: 'Film o nie starzejącym się arystokracie',
        img: 'images/dorian.jpg'
    },
    {
        id: 7,
        title: 'Ojciec chrzestny',
        desc: 'Film o mafii',
        img: 'images/ojciec.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('img', {src: movie.img, alt: movie.title}),
        React.createElement('p', {}, movie.desc)        
    );
})

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));