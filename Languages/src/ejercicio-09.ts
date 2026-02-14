console.log("************** DELIVERABLE 4. Read Books *********************");

interface Book {
    title: string;
    isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: Book[], titleToSearch: string): boolean {
    return books.find(({ title }) => title.includes(titleToSearch))?.isRead ?? false;
}

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));