-- 1. List the year and title of each book
SELECT B.title, B.year FROM Books B
-- 2. List all information about students whose major is CS
SELECT * FROM Students S WHERE S.major = 'CS'
-- 3. List all students with books they can borrow
SELECT S.stName, B.title FROM Students S CROSS JOIN Books B
EXCEPT (
    SELECT S.stName, B.title
    FROM Students S, Books B, borrows Br
    WHERE Br.stID = S.stID AND Br.docID = B.docID
)
-- 4. List all books published by McGraw-Hill before 1990
SELECT B.title FROM Books B WHERE (B.publisher = 'McGraw-Hill') AND (B.year < 1990)
-- 5. List the name of those authors who are living in Davis
SELECT A.AName FROM Authors A WHERE A.address = 'Davis'
-- 6. List the name of students who are older than 30 and who are not studying CS
SELECT S.stName FROM Students S WHERE S.age > 30 AND S.major != 'CS'
-- 7. Rename AName in the relation AUTHORS to Name
ALTER TABLE Authors RENAME COLUMN AName to Name
-- 8. List the names of all students who have borrowed a book and who are CS majors
SELECT S.name FROM borrows B,  Student S WHERE B.stID = S.stID AND S.major = 'CS'
-- 9. List the title of books written by the author “Jones”
SELECT B.title FROM has-written Hw, Authors A, Books B WHERE Hw.DocID = B.DocID AND HW.aName = A.aName AND A.aName = 'Jones'
-- 10. As previous, but not books that have the keyword “database”
SELECT B.title FROM has-written Hw, Authors A, Books B WHERE Hw.DocID = B.DocID AND Hw.aName = A.aName AND A.aName = 'Jones'
    EXCEPT ( 
        SELECT B2.title
        FROM describes D, has-written HW2, Authors A2, Books B2
        WHERE D.DocID = B2.DocID AND D.Keyword = 'database' AND HW2.DocID = B2.DocID 
        AND HW2.AName = A2.AName AND A2.AName = 'Jones'
    )
-- 11. Find the name of the youngest student
SELECT S.stName FROM Students S WHERE S.age = ( SELECT MIN(S2.age) FROM Students S2 )
-- 12. Find the title of the oldest book
SELECT B.title FROM Books B WHERE B.year = ( SELECT MIN(B2.year) FROM Books B2 )