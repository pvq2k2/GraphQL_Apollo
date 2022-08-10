const { books, authors } = require('../data/static')
const resolvers = {
    // QUERY
    Query: {
        books: () => books,
        book: (perent, args) => books.find(book => book.id.toString() === args.id),
        authors: () => authors,
        author: (perent, args) => authors.find(author => author.id.toString() === args.id),
    },
    Book: {
        author: (perent, args) => authors.find(author => author.id == perent.authorId),
    },
    Author: {
        books: (perent, args) => books.filter(book => book.authorId == perent.id)
    },

    //MUTATION
    Mutation: {
        createAuthor: (perent, args) => args,
        createBook: (perent, args) => args,
    }
}

module.exports = resolvers