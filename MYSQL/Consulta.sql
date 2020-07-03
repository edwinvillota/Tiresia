USE Tiresia;

SELECT c.name, MAX(vc.total) AS ValorFactura FROM (
	SELECT ov.id, ov.total, o.customer_id FROM (
		SELECT o.id, SUM(od.total_price) AS total
			FROM orders AS o
				LEFT JOIN order_details AS od
					ON o.id = od.order_id
				GROUP BY o.id
		) AS ov
	LEFT JOIN orders AS o
		ON ov.id = o.id
) AS vc
LEFT JOIN customers AS c
	ON vc.customer_id = c.id
GROUP BY c.name
;

