-- Problem #1
    -- Part 1
    SELECT E.employee_name
    FROM employee E
    JOIN manages M ON E.employee_name = M.employee_name
    JOIN employee Mgr ON M.manager_name = Mgr.employee_name
    WHERE E.city = Mgr.city AND E.street = Mgr.street;
    -- Part 2
    SELECT W.employee_name
    FROM works W
    JOIN (
        SELECT company_name, AVG(salary) AS avg_salary
        FROM works
        GROUP BY company_name
    ) AS AvgSalaries
    ON W.company_name = AvgSalaries.company_name
    WHERE W.salary > AvgSalaries.avg_salary;
-- Problem #2
    -- Part 1
    SELECT E.LNAME
    FROM EMPLOYEE E
    JOIN WORKS_ON W ON E.SSN = W.ESSN
    JOIN PROJECT P ON W.PNUM = P.PNUMBER
    WHERE E.DNUM = 5 AND P.PNAME = 'ProjectX' AND W.HOURS > 10;
    -- Part 2
    SELECT E.LNAME
    FROM EMPLOYEE E
    JOIN DEPENDENT D ON E.SSN = D.ESSN
    WHERE E.FNAME = D.DEPENDENT_NAME;
    -- Part 3
    SELECT P.PNAME, SUM(W.HOURS) AS TOTAL_HOURS
    FROM PROJECT P
    JOIN WORKS_ON W ON P.PNUMBER = W.PNUM
    GROUP BY P.PNAME;
    -- Part 4
    SELECT E.BDATE
    FROM EMPLOYEE E
    WHERE NOT EXISTS (
        SELECT P.PNUMBER
        FROM PROJECT P
        WHERE NOT EXISTS (
            SELECT W.ESSN
            FROM WORKS_ON W
            WHERE W.PNUM = P.PNUMBER AND W.ESSN = E.SSN
        )
    );
    -- Part 5
    SELECT E.LNAME
    FROM EMPLOYEE E
    JOIN DEPARTMENT D ON E.SSN = D.MGRSSN
    WHERE NOT EXISTS (
        SELECT 1
        FROM DEPENDENT DP
        WHERE DP.ESSN = E.SSN
    );
    -- Part 6
    SELECT E.LNAME, E.ADDRESS
    FROM EMPLOYEE E
    JOIN WORKS_ON W ON E.SSN = W.ESSN
    JOIN PROJECT P ON W.PNUM = P.PNUMBER
    WHERE P.PLOCATION = 'Houston'
    AND E.DNUM NOT IN (
        SELECT DL.DNUMBER
        FROM DEPT_LOCATIONS DL
        WHERE DL.DLOCATION = 'Houston'
    );
-- Problem #3
    -- Part 1
    SELECT S.Name, S.Major
    FROM STUDENT S
    WHERE NOT EXISTS (
        SELECT *
        FROM GRADE_REPORT G
        WHERE G.StudentNumber = S.StudentNumber
        AND G.Grade <> 'A'
    -- Part 2
    SELECT S.Name, S.Major
    FROM STUDENT S
    WHERE NOT EXISTS (
        SELECT *
        FROM GRADE_REPORT G
        WHERE G.StudentNumber = S.StudentNumber
        AND G.Grade = 'A'
    );
);





