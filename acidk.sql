-- 1
select cap.nombre as capital, p.nombre, p.PIB from Pais p
inner join Ciudad cap on cap.id = p.capital
order by PIB desc limit 1;

-- 2
select Ciudad.nombre, Ciudad.poblacion, Pais.nombre as Pais from Pais
inner join Ciudad on Pais.capital = Ciudad.id
where Pais.continente = 'europe'
order by Ciudad.poblacion limit 1;

-- 3
select IdiomaPais.*, Pais.nombre, Pais.superficie from IdiomaPais
inner join Pais on IdiomaPais.codigoPais = Pais.codigo
where Pais.continente = 'africa' and IdiomaPais.esOficial = 'F'
order by Pais.superficie desc, IdiomaPais.porcentajeUso desc
limit 1;

-- 4
select Ciudad.nombre as capital, Ciudad.poblacion, Pais.esperanzaVida from Pais
inner join Ciudad on Pais.capital = Ciudad.id
order by Ciudad.poblacion desc
limit 1;

-- 5
select Pais.nombre, Pais.poblacion from Pais
where Pais.poblacion > (select avg(Pais.poblacion) from Pais)
order by Pais.poblacion desc;

-- 6
select Pais.nombre from IdiomaPais
inner join Pais on Pais.codigo = IdiomaPais.codigoPais
where IdiomaPais.idioma != 'chinese' and Pais.continente = 'asia' and IdiomaPais.esOficial = 'T'
group by Pais.nombre
order by Pais.nombre asc;

-- 7
select Pais.nombre from IdiomaPais
inner join Pais on Pais.codigo = IdiomaPais.codigoPais
where Pais.continente = 'asia' and IdiomaPais.idioma = 'chinese' and IdiomaPais.esOficial = 'F'
group by Pais.nombre
order by Pais.nombre asc;

-- 8
select p.nombre, c.nombre, c.poblacion from Pais p
inner join Ciudad c on c.codigoPais = p.codigo
inner join Ciudad cap on cap.id = p.capital
where c.poblacion > cap.poblacion
order by p.nombre asc, c.nombre asc;

-- 9
select p.nombre, p.esperanzaVida from Pais p
where p.esperanzaVida > (
	select avg(p2.esperanzaVida) from Pais p2
    where p2.continente = 'europe'
)
order by p.nombre asc;

-- 10
select i1.idioma, count(p1.nombre) as cnt from IdiomaPais i1
inner join Pais p1 on p1.codigo = i1.codigoPais and i1.esOficial = 'T'
group by i1.idioma
order by cnt desc;

-- 11
select p.nombre, cap.nombre, cap.poblacion from Pais p
inner join Ciudad cap on cap.id = p.capital
where cap.poblacion > (
	select avg(c.poblacion) from Ciudad c
    where c.codigoPais = p.codigo 
)
order by p.nombre;

-- 12
select p.nombre, p.poblacion, p.superficie, p.continente from Pais p
where p.poblacion > (
	select avg(p2.poblacion) from Pais p2
    where p2.continente = p.continente and p2.codigo != p.codigo
) and p.superficie > (
	select avg(p2.superficie) from Pais p2
    where p2.continente = p.continente and p2.codigo != p.codigo
)
order by p.continente asc, p.superficie desc;

-- 13
select p.nombre, p.formaGobierno, p.continente from Pais p
where p.formaGobierno != (
  select formaGobierno from Pais p2
  where p2.continente = p.continente
  group by p2.formaGobierno
  order by count(*) desc limit 1
)
-- order by p.continente;

-- 14
select p.nombre, p.PIB from Pais p
where p.PIB > ( select avg(p2.PIB) from Pais p2 )
order by p.PIB desc

-- 15
select p.nombre from Pais p
where 0 in (
 select count(*) as cnt from IdiomaPais i
 where i.codigoPais = p.codigo and i.esOficial = 'T'
)
order by p.nombre;

-- 16
select p.nombre, p.poblacion, cap.nombre, cap.poblacion from Pais p
inner join Ciudad cap on cap.id = p.capital
where p.poblacion < cap.poblacion
order by p.nombre asc;

-- 17
select p.nombre, p.esperanzaVida from Pais p
where p.continente != 'south america' and p.esperanzaVida < (
    select min(p2.esperanzaVida) from Pais p2
    where p2.continente = 'south america' and p2.esperanzaVida is not null
)
order by p.esperanzaVida asc;

-- 18
select i.idioma, p.nombre from IdiomaPais i
inner join Pais p on i.codigoPais = p.codigo
where i.esOficial = 'T' and p.poblacion < (
    select avg(p2.poblacion) from Pais p2
    where p2.continente = p.continente 
)
order by p.nombre, i.idioma;

-- 19
select p.nombre, (
    select count(*) from Ciudad c
    where c.codigoPais = p.codigo and c.poblacion > 1000000
) as cnt, p.continente from Pais p
having cnt > 10
order by p.continente asc, cnt desc

-- 20
select p.nombre, (
    select count(*) from Ciudad c
    where c.codigoPais = p.codigo
) as cnt, p.continente from Pais p
having cnt > (
	select avg((
		select count(*) from Ciudad c2
        where c2.codigoPais = p2.codigo
    )) from Pais p2
    where p2.continente = p.continente
)
order by p.continente asc, cnt desc;