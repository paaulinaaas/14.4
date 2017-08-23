var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    description: 'film o czarodzieju',
    pic:'http://imgur.com/n8OYCzR.png'
  },
  {
    id: 2,
    title: 'Król Lew',
    description: 'Film o królu sawanny',
    pic: 'http://imgur.com/n8OYCzR.png'
  },
  {
    id: 3,
    title: 'Pocahontas',
    description: 'Film o dziewczynie o imieniu Pocahontas',
    pic: 'http://imgur.com/n8OYCzR.png'
  },
  {
    id: 4,
    title: 'Kubuś Puchatek',
    description: 'Film o niedzwiadku, poszukującym miodu',
    pic: 'http://imgur.com/n8OYCzR.png'
  },
  {
    id: 5,
    title: 'Alien',
    description: 'Film o wyprawie kosmicznej',
    pic: 'http://imgur.com/n8OYCzR.png'
  }
];

var MovieTitle = React.createClass({
  render: function() {
    return React.createElement('h2', {}, this.props.title)
  }
});

var MovieDescription = React.createClass({
  render: function() {
    return React.createElement('p', {}, this.props.desc)
  }
});

var MovieImage = React.createClass({
  render: function() {
    return React.createElement('img', {src: this.props.src})
  }
});

var Movie = React.createClass({
  render: function() {
    return React.createElement('li', {key: this.props.movieX.id},
      React.createElement(MovieTitle, {title: this.props.movieX.title}), //czemu movie skoro mam zmienna movies?
      React.createElement(MovieDescription, {desc: this.props.movieX.description}),
      React.createElement(MovieImage, {src: this.props.movieX.pic})
    );
  }
});

var MovieList = React.createClass({
  render: function() {
    return React.createElement('ul', {}, moviesElements)
  }
});

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {movieX: movie})
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
  );

ReactDOM.render(element, document.getElementById('app'));