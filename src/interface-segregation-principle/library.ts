/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de aplicaciones interactivas
 * 
 * @author Diego Hernández Chico
 * @since 2 Mar 2025
 * CORREO: alu0101572062@ull.edu.es
 * Program to represent the different profiles of a library.
*/

/**
 * Interface to represent basic users
 */
interface LibraryUser {
  searchBook(title: string): void;
  reserveBook(bookId: number): void;
}
  
/**
 * Interface for librarians, they can do all the things that normal users do, 
 * but they also have amplified functionalities
 */
interface Librarian extends LibraryUser {
  addBook(book: unknown): void;
  grantLoan(userId: number, bookId: number): void;
}

/**
 * Reader class to implement the user interface.
 */
class Member implements LibraryUser {
  /**
   * Searches a book on the library's database
   * 
   * @param title: book's name.
   */
  searchBook(title: string) {
    console.log('Searching book: ' + title);
  }

  /**
   * Reserves a bool of the library.
   * 
   * @param bookId: book's identifier.
   */
  reserveBook(bookId: number) {
    console.log('Reserving book with ID:' + bookId);
  }
}

/**
 * Manager that implements the librarian class. In addition to the methods of 
 * the basic user, he also has others that allow him to perform more specialized
 * tasks
 */
class LibraryManager implements Librarian {
  /**
   * Searches a book on the library's database
   * 
   * @param title: book's name.
   */
  searchBook(title: string) {
    console.log('Searching book: ' + title);
  }

  /**
   * Reserves a bool of the library.
   * 
   * @param bookId: book's identifier.
   */
  reserveBook(bookId: number) {
    console.log('Reserving book with ID:' + bookId);
  }

  /**
   * Adds a book to the library.
   * 
   * @param book to add
   */
  addBook(book: unknown) {
    console.log('Adding new book to the library.');
  }

  /**
   * Grants the loan of a book to a library user 
   * 
   * @param userId: identifier of the user 
   * @param bookId: identifier of the book
   */
  grantLoan(userId: number, bookId: number) {
    console.log('Granting the loan of the book  ' + bookId + ' to the user ' + userId + '.');
  }
}