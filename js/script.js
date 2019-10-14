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


var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,

    },

    render: function() {
        return React.createElement('li', {key: this.props.movie.id},                
            React.createElement('img', {src: this.props.movie.img, alt: this.props.movie.title}),                    
        );        
    }
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },

    render: function() {
        return React.createElement('div', {}, this.props.movies.map(oneMovie => React.createElement(Movie, {movie: oneMovie})),
            this.props.movies.map(oneTitle => React.createElement(MovieTitle, {movieTitle: oneTitle})),
            this.props.movies.map(oneDesc => React.createElement(MovieDescription, {movieDesc: oneDesc}))
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        movieTitle: React.PropTypes.object.isRequired,
    },

    render: function() {
        return React.createElement('h2', {}, this.props.movieTitle.title)
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        movieDesc: React.PropTypes.object.isRequired,
    },

    render: function() {
        return React.createElement('p', {}, this.props.movieDesc.desc)   
    }
});

var element = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));