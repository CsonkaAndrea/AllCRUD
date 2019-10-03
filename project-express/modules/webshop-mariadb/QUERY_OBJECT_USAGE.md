# queryObject Dokumentáció

## Tulajdonságok - Properties
### Kitüntetett tulajdonságok
- select
- Default: Ha nem adod meg, * lesz az értéke
- Példa:
- {} // SELECT * FROM ...
- {select: 'AVG(price)'} // SELECT AVG(price) FROM ...

- from
- Default: táblanév, amit első paraméterként adtál át a függvénynek
- Példa: első paraméter 'users'
- {} // ... FROM users ...
- {from: 'INNER JOIN projects ON users.id = projects.userid'} 
- // ... FROM users INNER JOIN projects ON users.id = projects.userid 

- groupBy
- Default: nincs
- Példa:
- {groupBy: 'category'} // ... GROUP BY category ...

- having
- Default: nincs
- Példa:
- {groupBy: 'admin', having: "admin = 0 AND password = 'sanyi'"}

- orderBy
- Default: nincs
- Példa: 
- {orderby: 'price ASC'} ... ORDER BY price ASC

- limit
- Default: nincs
- {limit: 6} // felső 6ot hozza le

- betweenColumn: együtt alkalmazandó a betweenValues-szal
- Példa
- {betweenColumn: 'price', betweenValues: '3 AND 7'} 
- // WHERE cond1 = val1 AND price BETWEEN 3 AND 7

- betweenValues

### Egyéni tulajdonságok - Where feltételek

- Minden ami nem kiemelt tulajdonság a WHERE feltételeiként jelenik meg.
- Példa:
- {id: 6} // ... WHERE id = 6 ...
- {name: "Sanyi", admin: 1} // ... WHERE name = 'Sanyi' AND admin = 1 ...
